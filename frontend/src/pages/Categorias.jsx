import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/content";

export default function Categorias() {
  return (
    <PageLayout
      title="Categorias de produtos"
      subtitle="Nosso portfólio organizado por linha — encontre rapidamente a família de fixadores que você precisa."
      breadcrumbs={[{ label: "Categorias" }]}
      heroImage="https://images.pexels.com/photos/26856081/pexels-photo-26856081.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Categorias"
      metaDescription="Explore as categorias de fixadores da Absoluta: parafusos, porcas, arruelas, chumbadores, rebites, buchas, abraçadeiras e barras roscadas."
    >
      <section className="py-16 bg-white">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <div key={c.slug} className="card-industrial overflow-hidden group" data-testid={`categoria-${c.slug}`}>
              <div className="aspect-[16/10] bg-zinc-100 overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-zinc-900">{c.title}</h3>
                <p className="text-sm text-zinc-600 mt-2">{c.short}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.items.slice(0, 5).map((it) => (
                    <span key={it} className="text-xs px-2.5 py-1 bg-zinc-100 rounded-md text-zinc-700">{it}</span>
                  ))}
                  {c.items.length > 5 && <span className="text-xs px-2.5 py-1 bg-zinc-100 rounded-md text-zinc-700">+{c.items.length - 5}</span>}
                </div>
                <Link to="/produtos" className="mt-5 inline-flex items-center gap-2 text-zinc-900 font-semibold hover:text-[#F5B800]">
                  Ver produtos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
