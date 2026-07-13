import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, ChevronDown, Headset, Warehouse, BadgeCheck,
  Truck, PiggyBank, Users, HardHat, Wrench, Hammer, Factory, Cog, Settings, Store,
  Quote, Star, ShieldCheck
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import {
  BRAND, PRODUCT_CATEGORIES, PRODUCTS, SEGMENTS, TESTIMONIALS,
  DIFFERENTIALS, PROCESS_STEPS, STATS, BRANDS,
} from "@/data/content";

const iconMap = { Headset, Warehouse, BadgeCheck, Truck, PiggyBank, Users, HardHat, Wrench, Hammer, Factory, Cog, Settings, Store };

function useCountUp(target, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return val;
}

function StatItem({ value, suffix, label, active }) {
  const v = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-5xl sm:text-6xl text-[#F5B800]">{v.toLocaleString("pt-BR")}{suffix}</div>
      <div className="mt-2 text-sm text-zinc-300 uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    document.title = "ABSOLUTA FIXADORES — Distribuidor de Sistemas de Fixação";
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStatsActive(true), { threshold: 0.3 });
    io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative min-h-screen hero-gradient noise-overlay overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1920)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />

        <div className="container-x relative z-10 pt-40 pb-24 min-h-screen flex items-center">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="eyebrow"
            >
              Distribuidor Industrial · Desde 2025
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mt-6 leading-[1.05]"
            >
              Sistemas de fixação para quem <span className="text-[#F5B800]">não pode falhar</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="mt-6 text-lg text-zinc-300 max-w-xl leading-relaxed"
            >
              Distribuidora especializada em parafusos, porcas, arruelas, chumbadores e fixadores industriais.
              Atendimento consultivo, estoque diversificado e agilidade em cada entrega.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/orcamento" data-testid="hero-cta-orcamento" className="btn-primary">
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/produtos" data-testid="hero-cta-produtos" className="btn-outline">
                Conheça nossos produtos
              </Link>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="hero-whatsapp" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#25D366]">
                <MessageCircle className="w-5 h-5" /> Fale no WhatsApp
              </a>
            </motion.div>

            <div className="mt-14 flex items-center gap-6 text-zinc-400 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#F5B800]" /> Produtos certificados</div>
              <div className="hidden sm:flex items-center gap-2"><Truck className="w-4 h-4 text-[#F5B800]" /> Entrega ágil</div>
              <div className="hidden md:flex items-center gap-2"><Headset className="w-4 h-4 text-[#F5B800]" /> Atendimento consultivo</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest flex flex-col items-center gap-2">
          <span>Rolar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* RESUMO EMPRESA */}
      <section className="py-24 bg-white" data-testid="section-resumo">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Quem somos</span>
            <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mt-4 leading-tight">
              Uma empresa jovem com <span className="text-[#F5B800]">postura de gigante.</span>
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed">
              A ABSOLUTA FIXADORES foi fundada em 2025 com o propósito de entregar soluções completas em sistemas de
              fixação — combinando qualidade rigorosa, atendimento consultivo e agilidade que a indústria moderna exige.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Atendemos construção civil, metalúrgicas, serralherias, marcenarias, indústrias e revendas com um portfólio
              robusto que vai desde parafusos comuns até chumbadores químicos estruturais.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/historia" data-testid="resumo-cta-historia" className="btn-outline-dark">Conheça nossa história</Link>
              <Link to="/sobre" className="inline-flex items-center gap-2 text-zinc-900 font-semibold hover:text-[#F5B800]">
                Sobre a Absoluta <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/16485052/pexels-photo-16485052.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Centro de distribuição"
              className="rounded-lg shadow-xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#F5B800] text-black p-6 rounded-lg shadow-xl max-w-[220px]">
              <div className="font-display text-3xl">15.000+</div>
              <div className="text-xs uppercase tracking-widest font-semibold">SKUs em estoque</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-[#f4f4f5]" data-testid="section-diferenciais">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Diferenciais</span>
            <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mt-4">Por que escolher a Absoluta</h2>
            <p className="mt-4 text-zinc-600">Combinamos experiência técnica, estoque diversificado e logística eficiente para entregar mais do que fixadores — entregamos confiança.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {DIFFERENTIALS.map((d, i) => {
              const Icon = iconMap[d.icon] || BadgeCheck;
              return (
                <div key={i} className="card-industrial p-8" data-testid={`diferencial-card-${i}`}>
                  <div className="w-12 h-12 rounded-md bg-[#1A1A1A] text-[#F5B800] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-zinc-900">{d.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUTOS DESTAQUE */}
      <section className="py-24 bg-white" data-testid="section-produtos-destaque">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="eyebrow">Produtos em destaque</span>
              <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mt-4">O que temos em estoque</h2>
            </div>
            <Link to="/produtos" data-testid="produtos-ver-todos" className="text-zinc-900 font-semibold inline-flex items-center gap-2 hover:text-[#F5B800]">
              Ver catálogo completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((p, i) => (
              <div key={p.code} className="card-industrial overflow-hidden" data-testid={`produto-card-${i}`}>
                <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest">{p.code}</div>
                  <h3 className="font-display text-lg text-zinc-900 mt-1">{p.name}</h3>
                  <p className="text-sm text-zinc-600 mt-2 line-clamp-2">{p.description}</p>
                  <Link to="/orcamento" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-[#F5B800]">
                    Solicitar orçamento <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGMENTOS */}
      <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden" data-testid="section-segmentos">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <span className="eyebrow">Segmentos atendidos</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Setores que confiam na Absoluta</h2>
            <p className="mt-4 text-zinc-400">Da grande obra ao chão de fábrica — soluções específicas para cada operação.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {SEGMENTS.map((s, i) => {
              const Icon = iconMap[s.icon] || Factory;
              return (
                <div key={s.slug} className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-6 hover:border-[#F5B800]/60 hover:bg-white/10 transition-all" data-testid={`segmento-${s.slug}`}>
                  <Icon className="w-8 h-8 text-[#F5B800]" />
                  <h3 className="font-display text-xl mt-4">{s.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 bg-white" data-testid="section-processo">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow">Como funciona</span>
            <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mt-4">Processo de compra em 5 passos</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#F5B800] font-display text-2xl flex items-center justify-center border-4 border-[#F5B800]/20 relative z-10">
                    {i + 1}
                  </div>
                  <h4 className="mt-4 font-display text-lg text-zinc-900">{step.title}</h4>
                  <p className="text-sm text-zinc-600 mt-2 max-w-[180px]">{step.desc}</p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-[#F5B800] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section ref={statsRef} className="py-20 bg-[#0f0f10] relative overflow-hidden" data-testid="section-numeros">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} active={statsActive} />
          ))}
        </div>
      </section>

      {/* MARCAS */}
      <section className="py-16 bg-white border-t border-zinc-100" data-testid="section-marcas">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="eyebrow">Marcas parceiras</span>
            <h2 className="font-display text-3xl sm:text-4xl text-zinc-900 mt-3">Trabalhamos com quem entrega qualidade</h2>
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-12 whitespace-nowrap">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <div key={i} className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-200 rounded-md">
                  <span className="font-display text-xl text-zinc-800">{b.name}</span>
                  <span className="text-xs text-zinc-500">· {b.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 bg-[#f4f4f5]" data-testid="section-depoimentos">
        <div className="container-x max-w-4xl">
          <div className="text-center">
            <span className="eyebrow">Depoimentos</span>
            <h2 className="font-display text-4xl sm:text-5xl text-zinc-900 mt-4">O que dizem nossos clientes</h2>
          </div>
          <div className="mt-12 bg-white rounded-lg border border-zinc-200 p-10 shadow-sm">
            <Quote className="w-10 h-10 text-[#F5B800]" />
            <p className="mt-4 text-lg text-zinc-800 leading-relaxed italic">"{TESTIMONIALS[testimonialIdx].quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-[#F5B800] flex items-center justify-center font-display text-lg">
                {TESTIMONIALS[testimonialIdx].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-zinc-900">{TESTIMONIALS[testimonialIdx].name}</div>
                <div className="text-sm text-zinc-500">{TESTIMONIALS[testimonialIdx].role} · {TESTIMONIALS[testimonialIdx].company}</div>
              </div>
              <div className="ml-auto flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F5B800] text-[#F5B800]" />)}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  data-testid={`depoimento-dot-${i}`}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === testimonialIdx ? "w-8 bg-[#F5B800]" : "w-2 bg-zinc-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-[#1A1A1A] to-[#2b2b2b] relative overflow-hidden" data-testid="section-cta-final">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#F5B800]/10 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="eyebrow">Vamos conversar</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mt-4 max-w-3xl mx-auto">
            Solicite seu orçamento agora e receba proposta em até <span className="text-[#F5B800]">4 horas úteis</span>.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/orcamento" data-testid="cta-final-orcamento" className="btn-primary">Solicitar Orçamento <ArrowRight className="w-5 h-5" /></Link>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="cta-final-whatsapp" className="btn-outline">
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
