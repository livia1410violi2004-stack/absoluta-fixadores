import PageLayout from "@/components/layout/PageLayout";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Facebook, Instagram, Linkedin, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/data/content";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.assunto || !form.mensagem) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contatos`, form);
      toast.success("Mensagem enviada! Retornaremos em breve.");
      setDone(true);
      const msg = `Olá! Mensagem via site:\n\nNome: ${form.nome}\nE-mail: ${form.email}\nAssunto: ${form.assunto}\n\n${form.mensagem}`;
      setTimeout(() => window.open(`${BRAND.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer"), 600);
    } catch (err) {
      toast.error("Erro ao enviar. Tente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-[#F5B800] focus:border-transparent outline-none";

  return (
    <PageLayout
      title="Fale conosco"
      subtitle="Estamos prontos para atender sua demanda. Escolha o canal mais conveniente."
      breadcrumbs={[{ label: "Contato" }]}
      heroImage="https://images.pexels.com/photos/19034547/pexels-photo-19034547.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Contato"
      metaDescription="Fale com a ABSOLUTA FIXADORES: WhatsApp, e-mail, formulário de contato e horário de atendimento."
    >
      <section className="py-16 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Canais de atendimento</span>
            <h2 className="font-display text-3xl text-zinc-900 mt-4">Escolha como prefere conversar</h2>
            <div className="mt-8 space-y-5">
              <ContactRow Icon={MessageCircle} label="WhatsApp" value={BRAND.whatsappDisplay} href={BRAND.whatsappUrl} />
              <ContactRow Icon={Phone} label="Telefone" value={BRAND.whatsappDisplay} />
              <ContactRow Icon={Mail} label="E-mail" value={BRAND.email} href={`mailto:${BRAND.email}`} />
              <ContactRow Icon={MapPin} label="Endereço" value={BRAND.address} />
              <ContactRow Icon={Clock} label="Horário" value="Segunda a Sexta · 08h às 18h · Sábados 08h às 12h" />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-[#F5B800] hover:text-black" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-[#F5B800] hover:text-black" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-[#F5B800] hover:text-black" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            </div>

            <div className="mt-10 rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 h-64 flex items-center justify-center text-zinc-400">
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto text-zinc-400" />
                <p className="text-sm mt-2">Mapa disponível em breve.</p>
                <p className="text-xs">Google Maps será integrado após definição do endereço final.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] border border-zinc-200 rounded-lg p-8">
            {done ? (
              <div className="text-center py-8" data-testid="contato-success">
                <CheckCircle2 className="w-16 h-16 text-[#F5B800] mx-auto" />
                <h3 className="font-display text-2xl text-zinc-900 mt-4">Mensagem enviada!</h3>
                <p className="text-zinc-600 mt-2">Retornaremos em breve.</p>
                <button onClick={() => { setDone(false); setForm({ nome:"", email:"", telefone:"", assunto:"", mensagem:"" }); }} className="btn-outline-dark mt-6">
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4" data-testid="contato-form">
                <h3 className="font-display text-2xl text-zinc-900">Envie uma mensagem</h3>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-700">Nome *</span>
                  <input required data-testid="contato-nome" value={form.nome} onChange={set("nome")} className={`${inputCls} mt-1.5`} />
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-700">E-mail *</span>
                    <input required type="email" data-testid="contato-email" value={form.email} onChange={set("email")} className={`${inputCls} mt-1.5`} />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-zinc-700">Telefone</span>
                    <input data-testid="contato-telefone" value={form.telefone} onChange={set("telefone")} className={`${inputCls} mt-1.5`} />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-700">Assunto *</span>
                  <input required data-testid="contato-assunto" value={form.assunto} onChange={set("assunto")} className={`${inputCls} mt-1.5`} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-zinc-700">Mensagem *</span>
                  <textarea required rows={5} data-testid="contato-mensagem" value={form.mensagem} onChange={set("mensagem")} className={`${inputCls} mt-1.5`} />
                </label>
                <button type="submit" disabled={loading} data-testid="contato-submit" className="btn-primary w-full justify-center disabled:opacity-60">
                  {loading ? "Enviando..." : "Enviar mensagem"} <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ContactRow({ Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-11 h-11 rounded-md bg-[#1A1A1A] text-[#F5B800] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-zinc-500">{label}</div>
        <div className="text-zinc-900 font-medium mt-0.5 group-hover:text-[#F5B800] transition-colors">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="block">{content}</a> : <div>{content}</div>;
}
