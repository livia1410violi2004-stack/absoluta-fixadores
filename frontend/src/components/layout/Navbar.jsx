import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { BRAND } from "@/data/content";

const NAV = [
  { to: "/", label: "Início" },
  {
    label: "Empresa",
    children: [
      { to: "/sobre", label: "Sobre a Absoluta" },
      { to: "/historia", label: "Nossa História" },
    ],
  },
  { to: "/produtos", label: "Produtos" },
  { to: "/categorias", label: "Categorias" },
  { to: "/segmentos", label: "Segmentos" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/marcas", label: "Marcas" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-[#F5B800]" : scrolled ? "text-zinc-800 hover:text-black" : "text-white/90 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-zinc-200 shadow-sm" : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" data-testid="navbar-logo-link" className="flex items-center gap-3">
          <img src={BRAND.logoUrl} alt={BRAND.name} className={`h-12 w-auto object-contain ${scrolled ? "" : "bg-white/95 rounded-md p-1"}`} />
          <div className="hidden sm:block leading-tight">
            <div className={`font-display text-sm font-extrabold ${scrolled ? "text-zinc-900" : "text-white"}`}>ABSOLUTA</div>
            <div className={`text-[10px] tracking-widest ${scrolled ? "text-zinc-500" : "text-[#F5B800]"}`}>FIXADORES</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item, i) =>
            item.children ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setDrop(true)}
                onMouseLeave={() => setDrop(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium ${scrolled ? "text-zinc-800" : "text-white/90"}`}
                  data-testid={`nav-${item.label.toLowerCase()}-dropdown`}
                >
                  {item.label} <ChevronDown className="w-4 h-4" />
                </button>
                {drop && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-zinc-200 rounded-md shadow-xl min-w-[220px] py-2">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        data-testid={`nav-sub-${c.to.replace("/", "")}`}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive ? "text-[#F5B800] bg-zinc-50" : "text-zinc-700 hover:bg-zinc-50"
                          }`
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} data-testid={`nav-${item.to.replace("/", "") || "home"}`} className={linkCls} end={item.to === "/"}>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp"
            className={`p-2 rounded-md transition-colors ${scrolled ? "text-zinc-700 hover:text-[#25D366]" : "text-white hover:text-[#25D366]"}`}
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <Link
            to="/orcamento"
            data-testid="nav-cta-orcamento"
            className="bg-[#F5B800] text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#E5A500] transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 ${scrolled ? "text-zinc-900" : "text-white"}`}
          onClick={() => setOpen(true)}
          data-testid="nav-open-mobile-menu"
          aria-label="Abrir menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setOpen(false)}
            data-testid="mobile-menu-overlay"
          />
          <aside className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b">
              <img src={BRAND.logoUrl} alt={BRAND.name} className="h-10" />
              <button onClick={() => setOpen(false)} data-testid="mobile-menu-close" aria-label="Fechar">
                <X className="w-7 h-7 text-zinc-800" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {NAV.map((item, i) =>
                item.children ? (
                  <div key={i} className="px-5 py-2">
                    <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">{item.label}</div>
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        data-testid={`mobile-nav-${c.to.replace("/", "")}`}
                        className="block py-2 text-zinc-800 font-medium hover:text-[#F5B800]"
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${item.to.replace("/", "") || "home"}`}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-lg font-semibold ${isActive ? "text-[#F5B800]" : "text-zinc-900"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}
              <div className="p-5 mt-4">
                <Link
                  to="/orcamento"
                  onClick={() => setOpen(false)}
                  data-testid="mobile-cta-orcamento"
                  className="block text-center bg-[#F5B800] text-black px-5 py-3 rounded-md font-semibold hover:bg-[#E5A500]"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
