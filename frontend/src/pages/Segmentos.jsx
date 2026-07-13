import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, HardHat, Wrench, Hammer, Factory, Cog, Settings, Store, Anvil } from "lucide-react";
import { SEGMENTS } from "@/data/content";

const iconMap = { HardHat, Wrench, Hammer, Factory, Cog, Settings, Store, Anvil };

export default function Segmentos() {
  return (
    <PageLayout
      title="Segmentos atendidos"
      subtitle="Fornecemos para setores que não podem parar. Conheça as soluções específicas para cada segmento."
      breadcrumbs={[{ label: "Segmentos" }]}
      heroImage="https://images.pexels.com/photos/15419840/pexels-photo-15419840.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Segmentos"
      metaDescription="Fornecemos fixadores para construção civil, metalúrgicas, serralherias, marcenarias, indústrias, manutenção e revendas em todo o Brasil."
    >
      <section className="py-16 bg-white">
        <div className="container-x space-y-16">
          {SEGMENTS.map((s, i) => {
            const Icon = iconMap[s.icon] || Factory;
            return (
              <div key={s.slug} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`} data-testid={`segmento-${s.slug}-section`}>
                <div>
                  <img src={s.image} alt={s.title} className="rounded-lg h-80 w-full object-cover shadow-md" loading="lazy" />
                </div>
                <div>
                  <div className="w-14 h-14 rounded-md bg-[#1A1A1A] text-[#F5B800] flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-display text-3xl text-zinc-900">{s.title}</h2>
                  <p className="mt-3 text-zinc-600 leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {["Atendimento consultivo com equipe técnica", "Estoque estratégico para reposição rápida", "Programação de entregas conforme cronograma"].map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-zinc-700">
                        <CheckCircle2 className="w-5 h-5 text-[#F5B800] flex-shrink-0 mt-0.5" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/orcamento" className="btn-outline-dark mt-6" data-testid={`segmento-cta-${s.slug}`}>
                    Solicitar proposta para {s.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
