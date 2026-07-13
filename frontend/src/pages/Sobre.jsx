import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Sobre() {
  const values = ["Ética", "Transparência", "Honestidade", "Compromisso", "Qualidade", "Segurança", "Inovação", "Respeito", "Agilidade", "Atendimento humanizado", "Responsabilidade", "Excelência"];
  return (
    <PageLayout
      title="Sobre a Absoluta Fixadores"
      subtitle="Distribuidora especializada em sistemas de fixação, com foco em atendimento consultivo, agilidade e qualidade sem concessões."
      breadcrumbs={[{ label: "Sobre" }]}
      heroImage="https://images.pexels.com/photos/16485052/pexels-photo-16485052.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Sobre"
      metaDescription="Conheça a ABSOLUTA FIXADORES: distribuidora de fixadores fundada em 2025 com atendimento consultivo, estoque diversificado e entrega ágil."
    >
      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">Nossa proposta</span>
            <h2 className="font-display text-4xl text-zinc-900 mt-4">Mais do que vender fixadores, entregamos confiança.</h2>
            <div className="mt-6 space-y-4 text-zinc-600 leading-relaxed">
              <p>A ABSOLUTA FIXADORES é uma empresa jovem, porém com postura consolidada. Fundada em 2025, foi estruturada desde o primeiro dia para operar com organização, profissionalismo e foco absoluto na satisfação dos clientes.</p>
              <p>Atuamos na distribuição de produtos destinados à fixação para os mais diversos segmentos da economia — construção civil, indústrias, metalúrgicas, serralherias, marcenarias, montagens industriais, empresas de manutenção e revendas.</p>
              <p>Nosso portfólio abrange desde parafusos comuns até chumbadores químicos estruturais, com atendimento consultivo em cada etapa da negociação.</p>
              <p>Cada cliente é atendido de forma personalizada, garantindo que a solução escolhida seja adequada às necessidades específicas de cada projeto.</p>
            </div>
          </div>
          <div className="grid gap-4">
            <img src="https://images.pexels.com/photos/15419840/pexels-photo-15419840.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Construção" className="rounded-lg h-56 object-cover w-full" />
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Parafusos" className="rounded-lg h-40 object-cover w-full" />
              <img src="https://images.pexels.com/photos/19034547/pexels-photo-19034547.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Indústria" className="rounded-lg h-40 object-cover w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f4f5]">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            { Icon: Target, title: "Missão", text: "Fornecer sistemas de fixação de alta qualidade, oferecendo atendimento especializado, rapidez na entrega e soluções que agreguem segurança, eficiência e confiabilidade aos projetos de nossos clientes." },
            { Icon: Eye, title: "Visão", text: "Consolidar-se como uma referência nacional no segmento de fixadores, sendo reconhecida pela excelência no atendimento, pela qualidade dos produtos e pelo compromisso com o sucesso de seus clientes." },
            { Icon: Heart, title: "Valores", text: "Conduzir cada relação com ética, transparência e compromisso, valorizando a proximidade com o cliente e a excelência em cada entrega." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="bg-white border border-zinc-200 rounded-lg p-8" data-testid={`mvv-${title.toLowerCase()}`}>
              <div className="w-12 h-12 rounded-md bg-[#1A1A1A] text-[#F5B800] flex items-center justify-center mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl text-zinc-900">{title}</h3>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <span className="eyebrow">Valores que guiam</span>
          <h2 className="font-display text-4xl text-zinc-900 mt-4">O que nos move todos os dias</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-2 bg-[#f9f9fa] border border-zinc-200 rounded-md px-4 py-3">
                <CheckCircle2 className="w-4 h-4 text-[#F5B800]" />
                <span className="text-sm font-medium text-zinc-800">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A] text-white text-center">
        <div className="container-x">
          <h2 className="font-display text-4xl">Pronto para conhecer a Absoluta em ação?</h2>
          <p className="mt-3 text-zinc-400">Fale com nossa equipe e descubra por que grandes projetos escolhem nosso atendimento.</p>
          <Link to="/orcamento" className="btn-primary mt-8">Solicitar orçamento <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </section>
    </PageLayout>
  );
}
