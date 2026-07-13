import PageLayout from "@/components/layout/PageLayout";
import { Download, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/data/content";

export default function Catalogo() {
  return (
    <PageLayout
      title="Catálogo digital"
      subtitle="Baixe nosso catálogo completo com toda a linha de produtos, especificações técnicas e aplicações."
      breadcrumbs={[{ label: "Catálogo" }]}
      heroImage="https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Catálogo"
      metaDescription="Baixe o catálogo digital da ABSOLUTA FIXADORES com produtos, especificações técnicas e aplicações."
    >
      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#1A1A1A] to-[#2b2b2b] rounded-lg shadow-2xl flex flex-col items-center justify-center text-white p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs uppercase tracking-widest text-[#F5B800] font-semibold">Edição 2026</div>
              <img src={BRAND.logoUrl} alt="Logo" className="w-32 h-32 object-contain bg-white rounded-lg p-3" />
              <div className="mt-8 text-center">
                <div className="font-display text-4xl">Catálogo</div>
                <div className="font-display text-2xl text-[#F5B800]">Completo</div>
              </div>
              <div className="mt-8 text-xs text-zinc-400 uppercase tracking-widest text-center">Sistemas de Fixação · Industrial</div>
              <FileText className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5" />
            </div>
          </div>
          <div>
            <span className="eyebrow">Documento oficial</span>
            <h2 className="font-display text-4xl text-zinc-900 mt-4">Toda nossa linha em um só documento</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              O catálogo digital reúne especificações técnicas, dimensões, materiais, acabamentos e aplicações de toda a nossa linha
              de produtos. Ideal para engenheiros, projetistas, compradores e áreas de suprimentos.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
              <li>• +15.000 SKUs organizados por categoria</li>
              <li>• Tabelas técnicas conforme normas DIN, ISO e ABNT</li>
              <li>• Guia rápido de seleção por aplicação</li>
              <li>• Contatos comerciais diretos</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button data-testid="catalog-download" className="btn-primary" onClick={() => alert("Catálogo em breve disponível. Enquanto isso, solicite pelo WhatsApp!")}>
                <Download className="w-5 h-5" /> Baixar PDF
              </button>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-dark" data-testid="catalog-whatsapp">
                <MessageCircle className="w-5 h-5" /> Solicitar pelo WhatsApp
              </a>
              <Link to="/orcamento" className="btn-outline-dark">
                Solicitar orçamento <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
