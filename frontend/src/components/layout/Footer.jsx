import { Link } from "react-router-dom";
import { BRAND } from "@/data/content";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, ArrowUp, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="bg-[#0f0f10] text-zinc-300 relative">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img src={BRAND.logoUrl} alt={BRAND.name} className="h-16 bg-white/95 rounded-md p-1.5 mb-4" />
          <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
            A ABSOLUTA FIXADORES é sua distribuidora de confiança em sistemas de fixação, com atendimento consultivo e estoque diversificado para atender projetos de todos os portes.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#F5B800] hover:text-black hover:border-transparent transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#F5B800] hover:text-black hover:border-transparent transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#F5B800] hover:text-black hover:border-transparent transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-4">Menu rápido</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/sobre" className="hover:text-[#F5B800]">Sobre a Empresa</Link></li>
            <li><Link to="/historia" className="hover:text-[#F5B800]">Nossa História</Link></li>
            <li><Link to="/produtos" className="hover:text-[#F5B800]">Produtos</Link></li>
            <li><Link to="/segmentos" className="hover:text-[#F5B800]">Segmentos</Link></li>
            <li><Link to="/blog" className="hover:text-[#F5B800]">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-[#F5B800]">Perguntas Frequentes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-4">Categorias</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/categorias" className="hover:text-[#F5B800]">Parafusos</Link></li>
            <li><Link to="/categorias" className="hover:text-[#F5B800]">Porcas e Arruelas</Link></li>
            <li><Link to="/categorias" className="hover:text-[#F5B800]">Chumbadores</Link></li>
            <li><Link to="/categorias" className="hover:text-[#F5B800]">Rebites</Link></li>
            <li><Link to="/categorias" className="hover:text-[#F5B800]">Buchas e Abraçadeiras</Link></li>
            <li><Link to="/categorias" className="hover:text-[#F5B800]">Barras Roscadas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-[#F5B800]" />
              <span>{BRAND.whatsappDisplay}</span>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="w-4 h-4 mt-0.5 text-[#F5B800]" />
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-[#F5B800]" />
              <span>{BRAND.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-[#F5B800]" />
              <span>{BRAND.address}</span>
            </li>
          </ul>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-400 border border-zinc-800 rounded-md px-3 py-2">
            <ShieldCheck className="w-4 h-4 text-[#F5B800]" />
            <span>Site seguro SSL · LGPD</span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} ABSOLUTA FIXADORES · Todos os direitos reservados
          </p>
          <div className="flex items-center gap-5 text-xs text-zinc-500">
            <Link to="/politica-de-privacidade" className="hover:text-[#F5B800]">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-[#F5B800]">Termos de Uso</Link>
          </div>
          <button
            onClick={scrollTop}
            data-testid="footer-back-to-top"
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-full bg-[#F5B800] text-black flex items-center justify-center hover:bg-[#E5A500] transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
