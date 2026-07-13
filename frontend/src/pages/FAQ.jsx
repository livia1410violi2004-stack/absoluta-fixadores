import PageLayout from "@/components/layout/PageLayout";
import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ as FAQ_ITEMS, BRAND } from "@/data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <PageLayout
      title="Perguntas frequentes"
      subtitle="Encontre respostas rápidas para as dúvidas mais comuns sobre pedidos, prazos, pagamento e atendimento."
      breadcrumbs={[{ label: "FAQ" }]}
      heroImage="https://images.pexels.com/photos/26856081/pexels-photo-26856081.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="FAQ"
      metaDescription="Perguntas frequentes sobre a ABSOLUTA FIXADORES: orçamentos, pagamento, entrega, garantia, trocas e atendimento."
    >
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border border-zinc-200 rounded-lg overflow-hidden bg-white" data-testid={`faq-item-${i}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-zinc-50 transition-colors"
                    data-testid={`faq-toggle-${i}`}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-zinc-900">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform text-[#F5B800] ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-zinc-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f4f4f5]">
        <div className="container-x max-w-2xl text-center">
          <h2 className="font-display text-3xl text-zinc-900">Não encontrou sua dúvida?</h2>
          <p className="mt-3 text-zinc-600">Fale direto com nossa equipe. Retornamos rapidamente.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contato" className="btn-outline-dark">Página de contato</Link>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
