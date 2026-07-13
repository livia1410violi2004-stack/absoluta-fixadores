import PageLayout from "@/components/layout/PageLayout";
import { BRANDS } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function Marcas() {
  return (
    <PageLayout
      title="Marcas parceiras"
      subtitle="Trabalhamos com fabricantes que compartilham o mesmo padrão de qualidade e comprometimento com o cliente final."
      breadcrumbs={[{ label: "Marcas" }]}
      heroImage="https://images.pexels.com/photos/19034547/pexels-photo-19034547.jpeg?auto=compress&cs=tinysrgb&w=1920"
      documentTitle="Marcas parceiras"
      metaDescription="Conheça as marcas parceiras da ABSOLUTA FIXADORES: fabricantes com certificação técnica e qualidade comprovada."
    >
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANDS.map((b, i) => (
              <div key={b.name} className="card-industrial p-8 text-center" data-testid={`marca-${i}`}>
                <div className="w-16 h-16 rounded-md bg-[#1A1A1A] text-[#F5B800] font-display text-2xl flex items-center justify-center mx-auto">
                  {b.name.charAt(0)}
                </div>
                <h3 className="font-display text-xl text-zinc-900 mt-4">{b.name}</h3>
                <p className="text-sm text-zinc-500 mt-1">{b.tag}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B800]" /> Homologado
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f4f4f5]">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-display text-3xl text-zinc-900">Critérios de seleção de fornecedores</h2>
          <p className="mt-4 text-zinc-600">
            Cada marca que compõe nosso mix passa por um processo criterioso de homologação, considerando certificações,
            consistência de produção, prazos, política de garantia e histórico de mercado. Só entra no nosso portfólio quem entrega, sem exceção.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
