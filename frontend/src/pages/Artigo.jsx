import { useParams, Link, Navigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Clock, User, ArrowRight, Share2 } from "lucide-react";
import { POSTS } from "@/data/content";

function renderContent(text) {
  // simple markdown-ish: **bold**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-zinc-900">{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Artigo() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PageLayout
      title={post.title}
      subtitle={post.excerpt}
      breadcrumbs={[{ label: "Blog", to: "/blog" }, { label: post.title }]}
      heroImage={post.image}
      documentTitle={post.title}
      metaDescription={post.excerpt}
    >
      <article className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-zinc-500 border-b border-zinc-200 pb-6 mb-8">
            <span className="inline-flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span className="ml-auto inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F5B800] font-semibold">{post.category}</span>
          </div>

          <div className="space-y-5 text-zinc-700 leading-relaxed text-lg">
            {post.content.map((para, i) => (
              <p key={i}>{renderContent(para)}</p>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-zinc-200 pt-6">
            <Share2 className="w-4 h-4 text-zinc-500" />
            <span className="text-sm text-zinc-500">Compartilhar:</span>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-700 hover:text-[#F5B800]">WhatsApp</a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-700 hover:text-[#F5B800]">LinkedIn</a>
          </div>
        </div>
      </article>

      <section className="py-16 bg-[#f4f4f5]">
        <div className="container-x">
          <h2 className="font-display text-3xl text-zinc-900 mb-8">Continue lendo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card-industrial overflow-hidden group">
                <div className="aspect-video">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-zinc-900 group-hover:text-[#F5B800]">{p.title}</h3>
                  <p className="text-sm text-zinc-600 mt-2 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A1A] text-white text-center">
        <div className="container-x">
          <h3 className="font-display text-3xl">Precisa de fixadores para seu projeto?</h3>
          <p className="mt-3 text-zinc-400">Nossa equipe técnica pode ajudar na especificação correta.</p>
          <Link to="/orcamento" className="btn-primary mt-8">Solicitar orçamento <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </PageLayout>
  );
}
