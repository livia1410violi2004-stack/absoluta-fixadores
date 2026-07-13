import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Home, Search, ArrowLeft, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/content";
import { useState } from "react";

export default function NotFound() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 hero-gradient noise-overlay flex items-center relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-x relative py-32 text-center">
          <div className="font-display text-[10rem] sm:text-[14rem] leading-none text-[#F5B800]/90">404</div>
          <h1 className="font-display text-3xl sm:text-4xl text-white -mt-4">Página não encontrada</h1>
          <p className="mt-4 text-zinc-400 max-w-md mx-auto">
            O caminho que você procura pode ter sido movido ou nunca existiu. Que tal continuar sua navegação por aqui?
          </p>

          <form onSubmit={(e) => { e.preventDefault(); if (q.trim()) nav(`/produtos?q=${encodeURIComponent(q)}`); }} className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Pesquisar produto..." className="w-full pl-12 pr-32 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-[#F5B800]" data-testid="notfound-search" />
            <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-md bg-[#F5B800] text-black font-semibold">Buscar</button>
          </form>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary" data-testid="notfound-home"><Home className="w-5 h-5" /> Voltar ao início</Link>
            <button onClick={() => nav(-1)} className="btn-outline"><ArrowLeft className="w-5 h-5" /> Página anterior</button>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline"><MessageCircle className="w-5 h-5" /> WhatsApp</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
