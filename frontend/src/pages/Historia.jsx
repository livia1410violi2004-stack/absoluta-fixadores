import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TIMELINE = [
  { year: "2025", title: "Fundação", desc: "Nasce a ABSOLUTA FIXADORES com o propósito de unir qualidade, atendimento consultivo e eficiência logística." },
  { year: "2025", title: "Primeira estrutura operacional", desc: "Estruturação do centro de distribuição, mapeamento de fornecedores homologados e definição de mix inicial." },
  { year: "2025", title: "Primeiros clientes", desc: "Atendimento aos primeiros parceiros nos segmentos de metalurgia, construção civil e serralheria." },
  { year: "2026", title: "Expansão do portfólio", desc: "Ampliação da linha com chumbadores químicos, fixadores em inox 316 e itens sob especificação especial." },
  { year: "Próximos passos", title: "Consolidação nacional", desc: "Expansão da malha logística e desenvolvimento de programas VMI e kanban para grandes indústrias." },
];

export default function Historia() {
  return (
    <PageLayout
      title="Nossa história"
      subtitle="De uma ideia sólida a uma operação estruturada — a trajetória da ABSOLUTA FIXADORES."
      breadcrumbs={[{ label: "Empresa" }, { label: "Nossa História" }]}
      heroImage="https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Nossa História"
      metaDescription="A trajetória da ABSOLUTA FIXADORES: desde a fundação em 2025 até a consolidação como distribuidora de referência em fixadores."
    >
      <section className="py-20 bg-white">
        <div className="container-x max-w-4xl">
          <div className="prose max-w-none text-zinc-700 leading-relaxed space-y-4">
            <p>A ABSOLUTA FIXADORES foi fundada em <strong>2025</strong> com um propósito claro: oferecer ao mercado uma distribuidora especializada em sistemas de fixação que unisse qualidade certificada, atendimento humanizado e soluções eficientes para clientes de diferentes segmentos.</p>
            <p>Desde o primeiro dia, a empresa foi estruturada para operar com organização e profissionalismo, com foco absoluto na satisfação de cada cliente. O portfólio inicial foi desenhado para cobrir demandas industriais e da construção civil, contemplando desde itens de altíssimo giro até fixadores especiais sob demanda.</p>
            <p>Com uma visão moderna de mercado, buscamos construir relações duradouras — não uma venda pontual. Isso significa atender consultivamente, entregar dentro do prazo combinado e permanecer disponíveis para suporte após a entrega.</p>
            <p>Mesmo sendo uma empresa jovem, trabalhamos diariamente para conquistar espaço através da <strong>confiança, transparência e excelência</strong>. Cada cliente conquistado é tratado como o principal.</p>
            <p>Mais do que vender produtos, a ABSOLUTA FIXADORES busca ser uma <em>parceira estratégica</em> para empresas e profissionais que valorizam segurança, eficiência e desempenho.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f4f5]">
        <div className="container-x max-w-5xl">
          <div className="text-center mb-14">
            <span className="eyebrow">Linha do tempo</span>
            <h2 className="font-display text-4xl text-zinc-900 mt-4">Marcos da nossa jornada</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 md:-translate-x-1/2" />
            {TIMELINE.map((t, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
                    <div className="text-xs font-semibold text-[#F5B800] uppercase tracking-widest">{t.year}</div>
                    <h3 className="font-display text-xl text-zinc-900 mt-1">{t.title}</h3>
                    <p className="text-sm text-zinc-600 mt-2">{t.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-4 w-4 h-4 rounded-full bg-[#F5B800] border-4 border-white shadow-md md:-translate-x-1/2" />
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A] text-white text-center">
        <div className="container-x">
          <h2 className="font-display text-4xl">Faça parte da nossa história.</h2>
          <p className="mt-3 text-zinc-400">Solicite um orçamento e conheça na prática o padrão Absoluta.</p>
          <Link to="/orcamento" className="btn-primary mt-8">Solicitar orçamento <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </PageLayout>
  );
}
