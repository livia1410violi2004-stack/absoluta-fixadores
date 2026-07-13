import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { useEffect } from "react";

export default function PageLayout({
  children,
  title,
  subtitle,
  breadcrumbs = [],
  heroImage,
  documentTitle,
  metaDescription,
}) {
  useEffect(() => {
    if (documentTitle) document.title = `${documentTitle} · ABSOLUTA FIXADORES`;
    if (metaDescription) {
      let m = document.querySelector("meta[name='description']");
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
      }
      m.setAttribute("content", metaDescription);
    }
  }, [documentTitle, metaDescription]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {title && (
          <section
            className="relative pt-40 pb-16 bg-gradient-to-b from-[#101010] to-[#1f1f1f] overflow-hidden"
            data-testid="page-hero"
          >
            {heroImage && (
              <div
                className="absolute inset-0 opacity-25 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
            )}
            <div className="absolute inset-0 grid-overlay opacity-40" />
            <div className="container-x relative z-10">
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4" data-testid="breadcrumbs">
                <Link to="/" className="hover:text-[#F5B800] flex items-center gap-1">
                  <Home className="w-3 h-3" /> Início
                </Link>
                {breadcrumbs.map((b, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" />
                    {b.to ? (
                      <Link to={b.to} className="hover:text-[#F5B800]">{b.label}</Link>
                    ) : (
                      <span className="text-zinc-300">{b.label}</span>
                    )}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                {title}
              </h1>
              {subtitle && <p className="text-zinc-300 max-w-2xl mt-4 text-base sm:text-lg">{subtitle}</p>}
            </div>
          </section>
        )}
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
