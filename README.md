# ABSOLUTA FIXADORES — Site Corporativo

Projeto full-stack do site oficial da **ABSOLUTA FIXADORES**, distribuidora de sistemas de fixação.

- **Frontend:** React 19 + React Router v7 + Tailwind CSS + Framer Motion + Lucide Icons
- **Backend:** FastAPI (Python) + Motor (MongoDB async) + Resend (envio de e-mails)
- **Banco de dados:** MongoDB

---

## 📁 Estrutura

```
absoluta-fixadores/
├── backend/
│   ├── server.py            # API FastAPI (orçamentos, contatos, email Resend)
│   ├── requirements.txt     # Dependências Python
│   └── .env                 # Variáveis de ambiente (MONGO_URL, RESEND_API_KEY etc)
│
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js                       # Router com 16 rotas
        ├── index.js / index.css         # Estilos globais + fontes
        ├── data/
        │   └── content.js               # Produtos, categorias, blog, FAQ etc.
        ├── components/
        │   ├── layout/                  # Navbar, Footer, WhatsAppFloat, PageLayout
        │   └── ui/                      # Componentes shadcn/ui
        └── pages/                       # 16 páginas (Home, Sobre, Produtos, etc.)
```

---

## 🚀 Como executar localmente

### Pré-requisitos
- **Node.js 18+** e **Yarn** (não use npm)
- **Python 3.11+**
- **MongoDB** rodando local ou remoto

### 1. Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Edite o arquivo `.env`:
```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="absoluta_fixadores"
CORS_ORIGINS="http://localhost:3000"
RESEND_API_KEY=""                          # opcional (pegar em resend.com)
SENDER_EMAIL="onboarding@resend.dev"
COMPANY_EMAIL="contato@absolutafixadores.com.br"
```

Rode a API:
```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Teste: http://localhost:8001/api/

### 2. Frontend (React)

```bash
cd frontend
yarn install
```

Edite o arquivo `.env`:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=0
```

Rode o app:
```bash
yarn start
```

Abra: http://localhost:3000

---

## 📄 Rotas do site

| Rota | Página |
|------|--------|
| `/` | Home |
| `/sobre` | Sobre a empresa |
| `/historia` | Nossa história |
| `/produtos` | Catálogo de produtos (com busca e filtros) |
| `/categorias` | Categorias de produtos |
| `/segmentos` | Segmentos atendidos |
| `/catalogo` | Catálogo digital (PDF) |
| `/marcas` | Marcas parceiras |
| `/blog` | Blog |
| `/blog/:slug` | Artigo individual |
| `/faq` | Perguntas frequentes |
| `/orcamento` | Formulário de orçamento |
| `/contato` | Formulário de contato |
| `/politica-de-privacidade` | Política LGPD |
| `/termos-de-uso` | Termos de uso |
| `*` | Página 404 |

---

## 🔗 Endpoints da API

- `GET  /api/` — health check
- `POST /api/orcamentos` — cria um orçamento (salva no Mongo + envia e-mail via Resend)
- `GET  /api/orcamentos` — lista orçamentos
- `POST /api/contatos` — cria mensagem de contato
- `GET  /api/contatos` — lista mensagens

---

## ✉️ Ativando o envio real de e-mails (Resend)

1. Crie uma conta em https://resend.com
2. Vá em **API Keys** → **Create API Key** (começa com `re_...`)
3. Cole a chave no `backend/.env` em `RESEND_API_KEY=`
4. Configure `SENDER_EMAIL` com um domínio verificado no Resend
5. Configure `COMPANY_EMAIL` com o e-mail que receberá as notificações
6. Reinicie o backend

Sem a chave, os formulários funcionam normalmente (salvam no banco), apenas o envio de e-mail fica desativado.

---

## 📱 WhatsApp

Todo o site utiliza o link: **https://wa.me/5511959824138**

Para trocar, edite `frontend/src/data/content.js`:
```js
export const BRAND = {
  whatsappNumber: "5511959824138",
  whatsappUrl: "https://wa.me/5511959824138",
  ...
};
```

---

## 🎨 Identidade visual

- **Cor primária:** `#F5B800` (amarelo/dourado)
- **Cor de fundo escuro:** `#1A1A1A` → `#2B2B2B` (grafite)
- **Fontes:** Cabinet Grotesk (títulos) + IBM Plex Sans (texto)
- **Logo:** substitua a URL em `frontend/src/data/content.js` (`BRAND.logoUrl`) e em `frontend/public/index.html` (favicon).

---

## 📦 Deploy sugerido

- **Frontend:** Vercel / Netlify / Cloudflare Pages
- **Backend:** Railway / Render / Fly.io
- **MongoDB:** MongoDB Atlas (tier gratuito)

Lembre-se de configurar as variáveis de ambiente em produção.

---

© 2026 ABSOLUTA FIXADORES · Todos os direitos reservados.
