from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
COMPANY_EMAIL = os.environ.get('COMPANY_EMAIL', '')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI(title="ABSOLUTA FIXADORES API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# --- Models ---
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nome: str
    empresa: Optional[str] = ""
    telefone: str
    whatsapp: Optional[str] = ""
    email: EmailStr
    cidade: Optional[str] = ""
    produtos: str
    quantidade: Optional[str] = ""
    mensagem: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class QuoteCreate(BaseModel):
    nome: str
    empresa: Optional[str] = ""
    telefone: str
    whatsapp: Optional[str] = ""
    email: EmailStr
    cidade: Optional[str] = ""
    produtos: str
    quantidade: Optional[str] = ""
    mensagem: Optional[str] = ""


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nome: str
    email: EmailStr
    telefone: Optional[str] = ""
    assunto: str
    mensagem: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    nome: str
    email: EmailStr
    telefone: Optional[str] = ""
    assunto: str
    mensagem: str


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


# --- Helper: send email via Resend (non-blocking) ---
async def send_notification_email(subject: str, html_content: str, reply_to: Optional[str] = None):
    if not RESEND_API_KEY or not COMPANY_EMAIL:
        logging.warning("Resend not configured; skipping email send.")
        return None
    params = {
        "from": SENDER_EMAIL,
        "to": [COMPANY_EMAIL],
        "subject": subject,
        "html": html_content,
    }
    if reply_to:
        params["reply_to"] = reply_to
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        return result
    except Exception as e:
        logging.error(f"Resend send failed: {e}")
        return None


def build_quote_html(q: QuoteRequest) -> str:
    return f"""
    <table style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #eee;border-radius:8px;overflow:hidden">
      <tr><td style="background:#1A1A1A;color:#F5B800;padding:20px;font-size:20px;font-weight:800">
        Nova Solicitação de Orçamento — ABSOLUTA FIXADORES
      </td></tr>
      <tr><td style="padding:24px;color:#222;font-size:14px;line-height:1.6">
        <p><strong>Nome:</strong> {q.nome}</p>
        <p><strong>Empresa:</strong> {q.empresa or '-'}</p>
        <p><strong>Telefone:</strong> {q.telefone}</p>
        <p><strong>WhatsApp:</strong> {q.whatsapp or '-'}</p>
        <p><strong>E-mail:</strong> {q.email}</p>
        <p><strong>Cidade:</strong> {q.cidade or '-'}</p>
        <p><strong>Produtos desejados:</strong> {q.produtos}</p>
        <p><strong>Quantidade:</strong> {q.quantidade or '-'}</p>
        <p><strong>Mensagem:</strong><br/>{(q.mensagem or '-').replace(chr(10), '<br/>')}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="color:#666;font-size:12px">Recebido em {q.created_at.strftime('%d/%m/%Y %H:%M UTC')}</p>
      </td></tr>
    </table>
    """


def build_contact_html(c: ContactMessage) -> str:
    return f"""
    <table style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;border:1px solid #eee;border-radius:8px;overflow:hidden">
      <tr><td style="background:#1A1A1A;color:#F5B800;padding:20px;font-size:20px;font-weight:800">
        Nova Mensagem de Contato — ABSOLUTA FIXADORES
      </td></tr>
      <tr><td style="padding:24px;color:#222;font-size:14px;line-height:1.6">
        <p><strong>Nome:</strong> {c.nome}</p>
        <p><strong>E-mail:</strong> {c.email}</p>
        <p><strong>Telefone:</strong> {c.telefone or '-'}</p>
        <p><strong>Assunto:</strong> {c.assunto}</p>
        <p><strong>Mensagem:</strong><br/>{c.mensagem.replace(chr(10), '<br/>')}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="color:#666;font-size:12px">Recebido em {c.created_at.strftime('%d/%m/%Y %H:%M UTC')}</p>
      </td></tr>
    </table>
    """


# --- Routes ---
@api_router.get("/")
async def root():
    return {"message": "ABSOLUTA FIXADORES API", "status": "ok"}


@api_router.post("/orcamentos", response_model=QuoteRequest)
async def create_quote(input: QuoteCreate):
    quote = QuoteRequest(**input.model_dump())
    doc = quote.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.orcamentos.insert_one(doc)

    # Fire-and-forget email notification
    try:
        html = build_quote_html(quote)
        await send_notification_email(
            subject=f"[Orçamento] {quote.nome} — {quote.empresa or 'Cliente'}",
            html_content=html,
            reply_to=quote.email,
        )
    except Exception as e:
        logging.error(f"Email notify failed (non-blocking): {e}")

    return quote


@api_router.get("/orcamentos", response_model=List[QuoteRequest])
async def list_quotes():
    docs = await db.orcamentos.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.post("/contatos", response_model=ContactMessage)
async def create_contact(input: ContactCreate):
    msg = ContactMessage(**input.model_dump())
    doc = msg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contatos.insert_one(doc)

    try:
        html = build_contact_html(msg)
        await send_notification_email(
            subject=f"[Contato] {msg.assunto} — {msg.nome}",
            html_content=html,
            reply_to=msg.email,
        )
    except Exception as e:
        logging.error(f"Email notify failed (non-blocking): {e}")

    return msg


@api_router.get("/contatos", response_model=List[ContactMessage])
async def list_contacts():
    docs = await db.contatos.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    docs = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for d in docs:
        if isinstance(d.get('timestamp'), str):
            d['timestamp'] = datetime.fromisoformat(d['timestamp'])
    return docs


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
