import PageLayout from "@/components/layout/PageLayout";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function maskPhone(v) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4})/, (_, a, b, c) => [a && `(${a}`, a.length === 2 && ")", b && ` ${b}`, c && `-${c}`].filter(Boolean).join(""));
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export default function Orcamento() {
  const [form, setForm] = useState({
    nome: "", empresa: "", telefone: "", whatsapp: "", email: "", cidade: "", produtos: "", quantidade: "", mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => {
    const val = k === "telefone" || k === "whatsapp" ? maskPhone(e.target.value) : e.target.value;
    setForm({ ...form, [k]: val });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.telefone || !form.email || !form.produtos) {
      toast.error("Preencha os campos obrigatórios (nome, telefone, e-mail e produtos).");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/orcamentos`, form);
      toast.success("Orçamento enviado! Retornaremos em até 4 horas úteis.");
      setDone(true);
      // Also open WhatsApp
      const msg = `Olá! Solicito orçamento:\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nTelefone: ${form.telefone}\nE-mail: ${form.email}\nProdutos: ${form.produtos}\nQuantidade: ${form.quantidade}\nObservações: ${form.mensagem}`;
      const url = `${BRAND.whatsappUrl}?text=${encodeURIComponent(msg)}`;
      setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 800);
    } catch (err) {
      toast.error("Erro ao enviar. Tente novamente ou fale no WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout
      title="Solicitar orçamento"
      subtitle="Preencha o formulário abaixo. Sua solicitação também será enviada via WhatsApp para agilizar o atendimento."
      breadcrumbs={[{ label: "Orçamento" }]}
      heroImage="https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Solicitar Orçamento"
      metaDescription="Solicite um orçamento personalizado para fixadores industriais. Retorno em até 4 horas úteis."
    >
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          {done ? (
            <div className="text-center py-16" data-testid="orcamento-success">
              <CheckCircle2 className="w-20 h-20 text-[#F5B800] mx-auto" />
              <h2 className="font-display text-3xl text-zinc-900 mt-6">Orçamento enviado com sucesso!</h2>
              <p className="mt-3 text-zinc-600 max-w-md mx-auto">
                Recebemos sua solicitação e retornaremos em até <strong>4 horas úteis</strong>. Uma cópia foi também enviada pelo WhatsApp.
              </p>
              <button onClick={() => { setDone(false); setForm({ nome:"", empresa:"", telefone:"", whatsapp:"", email:"", cidade:"", produtos:"", quantidade:"", mensagem:"" }); }} className="btn-outline-dark mt-8">
                Enviar novo orçamento
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5" data-testid="orcamento-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nome completo *" required><input required data-testid="input-nome" value={form.nome} onChange={set("nome")} className={inputCls} /></Field>
                <Field label="Empresa"><input data-testid="input-empresa" value={form.empresa} onChange={set("empresa")} className={inputCls} /></Field>
                <Field label="Telefone *" required><input required data-testid="input-telefone" value={form.telefone} onChange={set("telefone")} placeholder="(11) 90000-0000" className={inputCls} /></Field>
                <Field label="WhatsApp"><input data-testid="input-whatsapp" value={form.whatsapp} onChange={set("whatsapp")} placeholder="(11) 90000-0000" className={inputCls} /></Field>
                <Field label="E-mail *" required><input required type="email" data-testid="input-email" value={form.email} onChange={set("email")} className={inputCls} /></Field>
                <Field label="Cidade / UF"><input data-testid="input-cidade" value={form.cidade} onChange={set("cidade")} className={inputCls} /></Field>
              </div>
              <Field label="Produtos desejados *" required><textarea required rows={3} data-testid="input-produtos" value={form.produtos} onChange={set("produtos")} placeholder="Ex: Parafuso sextavado M8 x 30 (500 un), Chumbador parabolt 3/8 (200 un)..." className={inputCls} /></Field>
              <Field label="Quantidade / prazo desejado"><input data-testid="input-quantidade" value={form.quantidade} onChange={set("quantidade")} className={inputCls} /></Field>
              <Field label="Mensagem / observações"><textarea rows={4} data-testid="input-mensagem" value={form.mensagem} onChange={set("mensagem")} className={inputCls} /></Field>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" disabled={loading} data-testid="orcamento-submit" className="btn-primary disabled:opacity-60">
                  {loading ? "Enviando..." : "Enviar orçamento"} <Send className="w-5 h-5" />
                </button>
                <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="orcamento-whatsapp" className="btn-outline-dark">
                  <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
                </a>
              </div>
              <p className="text-xs text-zinc-500 pt-2">
                Ao enviar, você concorda com nossa <a href="/politica-de-privacidade" className="underline hover:text-[#F5B800]">Política de Privacidade</a>. Não compartilhamos seus dados.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls = "w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-[#F5B800] focus:border-transparent outline-none text-zinc-900 bg-white";

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-zinc-700">{label} {required && <span className="text-[#F5B800]">*</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
