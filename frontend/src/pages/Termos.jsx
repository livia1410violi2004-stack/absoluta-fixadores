import PageLayout from "@/components/layout/PageLayout";

const SECTIONS = [
  { t: "1. Aceitação dos termos", c: "Ao acessar e utilizar o site da ABSOLUTA FIXADORES, o usuário declara ter lido, compreendido e aceitado estes Termos de Uso na íntegra." },
  { t: "2. Uso do site", c: "O site destina-se à divulgação institucional dos produtos e serviços da ABSOLUTA FIXADORES e à recepção de solicitações comerciais. Qualquer uso indevido é vedado." },
  { t: "3. Propriedade intelectual", c: "Todo o conteúdo (textos, imagens, marca, layout) é de propriedade da ABSOLUTA FIXADORES ou de terceiros licenciados, sendo proibida qualquer reprodução sem autorização prévia por escrito." },
  { t: "4. Responsabilidades", c: "As informações e imagens são meramente ilustrativas. Especificações técnicas devem ser confirmadas com nossa equipe comercial antes do fechamento de qualquer negociação." },
  { t: "5. Formulários e dados", c: "Ao enviar formulários, o usuário garante a veracidade das informações fornecidas e autoriza o contato comercial pela ABSOLUTA FIXADORES em conformidade com nossa Política de Privacidade." },
  { t: "6. Links externos", c: "O site pode conter links para páginas de terceiros. Não nos responsabilizamos pelo conteúdo, funcionamento ou políticas dessas páginas." },
  { t: "7. Alterações", c: "Reservamo-nos o direito de alterar estes termos a qualquer momento. A versão vigente será sempre a publicada nesta página." },
  { t: "8. Foro", c: "Fica eleito o foro da comarca de São Paulo/SP para dirimir eventuais controvérsias oriundas destes termos, com renúncia de qualquer outro, por mais privilegiado que seja." },
];

export default function Termos() {
  return (
    <PageLayout
      title="Termos de Uso"
      subtitle="Regras e condições para utilização deste site e dos serviços oferecidos."
      breadcrumbs={[{ label: "Termos de Uso" }]}
      documentTitle="Termos de Uso"
      metaDescription="Termos de Uso do site da ABSOLUTA FIXADORES."
    >
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl space-y-8 text-zinc-700 leading-relaxed">
          {SECTIONS.map((s) => (
            <div key={s.t}>
              <h2 className="font-display text-2xl text-zinc-900">{s.t}</h2>
              <p className="mt-3">{s.c}</p>
            </div>
          ))}
          <p className="text-sm text-zinc-500 pt-6 border-t border-zinc-200">Última atualização: fevereiro de 2026.</p>
        </div>
      </section>
    </PageLayout>
  );
}
