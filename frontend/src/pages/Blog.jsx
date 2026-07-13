import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Search, Clock, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { POSTS } from "@/data/content";

export default function Blog() {
  const [query, setQuery] = useState("");
  const filtered = POSTS.filter(p => !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase()));
  const [featured, ...rest] = filtered;

  return (
    <PageLayout
      title="Blog"
      subtitle="Guias técnicos, boas práticas e conteúdos aprofundados sobre o universo dos fixadores industriais."
      breadcrumbs={[{ label: "Blog" }]}
      heroImage="https://images.pexels.com/photos/16485052/pexels-photo-16485052.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Blog"
      metaDescription="Conteúdo técnico sobre fixadores: guias de seleção, boas práticas, ancoragem estrutural e gestão de suprimentos industriais."
    >
      <section className="py-14 bg-white">
        <div className="container-x">
          <div className="max-w-xl mx-auto relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Pesquisar no blog..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              data-testid="blog-search-input"
              className="w-full pl-12 pr-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-[#F5B800] focus:border-transparent outline-none"
            />
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} className="group block mb-14" data-testid="blog-featured">
              <div className="grid lg:grid-cols-2 gap-8 items-center card-industrial overflow-hidden p-0">
                <div className="aspect-video lg:aspect-auto lg:h-full">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-10">
                  <span className="eyebrow">Destaque</span>
                  <h2 className="font-display text-3xl text-zinc-900 mt-3 group-hover:text-[#F5B800] transition-colors">{featured.title}</h2>
                  <p className="mt-4 text-zinc-600">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1"><User className="w-3 h-3" /> {featured.author}</span>
                    <span>{featured.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card-industrial overflow-hidden group" data-testid={`blog-post-${p.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#F5B800] font-semibold uppercase tracking-widest">{p.category}</div>
                  <h3 className="font-display text-lg text-zinc-900 mt-2 group-hover:text-[#F5B800] transition-colors">{p.title}</h3>
                  <p className="text-sm text-zinc-600 mt-2 line-clamp-3">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
