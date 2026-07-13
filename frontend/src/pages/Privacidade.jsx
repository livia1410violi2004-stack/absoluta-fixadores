import PageLayout from "@/components/layout/PageLayout";

const SECTIONS = [
  { t: "1. Introdução", c: "A ABSOLUTA FIXADORES respeita a privacidade de seus usuários e está comprometida com a proteção de dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD)." },
  { t: "2. Dados coletados", c: "Coletamos apenas os dados necessários para o atendimento comercial: nome, empresa, e-mail, telefone, WhatsApp, cidade e informações relacionadas ao produto ou serviço solicitado." },
  { t: "3. Finalidade do tratamento", c: "Os dados são utilizados para: elaboração e envio de orçamentos, comunicação comercial, cumprimento de obrigações legais e melhorias na experiência do usuário. Não comercializamos dados a terceiros." },
  { t: "4. Cookies", c: "Utilizamos cookies para métricas anônimas de navegação e melhoria contínua do site. O usuário pode desabilitá-los nas configurações do navegador." },
  { t: "5. Compartilhamento", c: "Dados podem ser compartilhados apenas com prestadores de serviço essenciais à operação (hospedagem, e-mail, logística), sempre mediante contrato de confidencialidade e limite estrito de finalidade." },
  { t: "6. Direitos do titular", c: "O titular pode solicitar, a qualquer momento: acesso, correção, exclusão, portabilidade e informações sobre o tratamento de seus dados. Basta entrar em contato por nossos canais oficiais." },
  { t: "7. Segurança", c: "Adotamos medidas técnicas e organizacionais para proteger dados contra acessos não autorizados, alterações, divulgação ou destruição indevidas." },
  { t: "8. Alterações", c: "Esta política pode ser atualizada periodicamente. Recomendamos a leitura regular. Alterações relevantes serão comunicadas em nosso site." },
  { t: "9. Contato do Encarregado (DPO)", c: "Para dúvidas sobre proteção de dados, entre em contato: contato@absolutafixadores.com.br." },
];

export default function Privacidade() {
  return (
    <PageLayout
      title="Política de Privacidade"
      subtitle="Como coletamos, tratamos e protegemos seus dados pessoais em conformidade com a LGPD."
      breadcrumbs={[{ label: "Política de Privacidade" }]}
      documentTitle="Política de Privacidade"
      metaDescription="Política de Privacidade da ABSOLUTA FIXADORES em conformidade com a LGPD."
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
