import { useMemo, useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/content";

export default function Produtos() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("todos");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const catOk = cat === "todos" || p.category === cat;
      const q = query.toLowerCase();
      const qOk = !q || p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, cat]);

  return (
    <PageLayout
      title="Catálogo de produtos"
      subtitle="Ampla linha de fixadores com pronta entrega. Filtre por categoria ou busque por nome/código."
      breadcrumbs={[{ label: "Produtos" }]}
      heroImage="https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Produtos"
      metaDescription="Catálogo completo de fixadores: parafusos, porcas, arruelas, chumbadores, rebites, buchas, barras roscadas e mais."
    >
      <section className="py-14 bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou código..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-testid="produtos-search-input"
                className="w-full pl-12 pr-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-[#F5B800] focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setCat("todos")}
              data-testid="filter-todos"
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${cat === "todos" ? "bg-[#F5B800] text-black border-[#F5B800]" : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400"}`}
            >
              Todos
            </button>
            {PRODUCT_CATEGORIES.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCat(c.slug)}
                data-testid={`filter-${c.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${cat === c.slug ? "bg-[#F5B800] text-black border-[#F5B800]" : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-400"}`}
              >
                {c.title}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <article key={p.code} className="card-industrial overflow-hidden" data-testid={`produto-${p.code}`}>
                <div className="aspect-[4/3] bg-zinc-100">
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-zinc-500 uppercase tracking-widest">{p.code}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="text-[#F5B800] font-semibold uppercase">{PRODUCT_CATEGORIES.find(c => c.slug === p.category)?.title}</span>
                  </div>
                  <h3 className="font-display text-lg text-zinc-900 mt-1">{p.name}</h3>
                  <p className="text-sm text-zinc-600 mt-2 line-clamp-3">{p.description}</p>

                  <details className="mt-4">
                    <summary className="text-xs font-semibold text-zinc-700 cursor-pointer hover:text-[#F5B800]">Ver especificações técnicas</summary>
                    <table className="w-full text-xs mt-3">
                      <tbody>
                        {p.specs.map(([k, v]) => (
                          <tr key={k} className="border-b border-zinc-100 last:border-0">
                            <td className="py-2 text-zinc-500">{k}</td>
                            <td className="py-2 text-zinc-800 font-medium text-right">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </details>

                  <Link to="/orcamento" className="mt-5 btn-primary w-full justify-center" data-testid={`orcamento-produto-${p.code}`}>
                    Solicitar orçamento <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-zinc-500">Nenhum produto encontrado. Tente outra busca.</div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
