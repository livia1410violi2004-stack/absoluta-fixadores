// Central content source — brand, products, categories, segments, blog, testimonials, FAQ.

export const BRAND = {
  name: "ABSOLUTA FIXADORES",
  tagline: "Fixando qualidade. Garantindo soluções.",
  founded: 2025,
  whatsappNumber: "5511959824138",
  whatsappUrl: "https://wa.me/5511959824138",
  whatsappDisplay: "(11) 95982-4138",
  phone: "(11) 5664-0294",
  phoneUrl: "tel:+551156640294",
  email: "contato@absolutafixadores.com.br",
  address: "Endereço a ser divulgado — São Paulo/SP",
  logoUrl:
    "https://customer-assets.emergentagent.com/job_9b079e4f-bb9c-445a-849b-1b56bfcb3754/artifacts/980j72zk_ChatGPT%20Image%201%20de%20jul.%20de%202026%2C%2011_05_10.png",
};

export const PRODUCT_CATEGORIES = [
  {
    slug: "parafusos",
    title: "Parafusos",
    short: "Sextavados, allen, autobrocantes, francês, soberba, drywall, madeira, inox e galvanizados.",
    image: "https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Sextavados", "Allen", "Autobrocantes", "Autoatarraxantes", "Francês", "Soberba", "Drywall", "Madeira", "Inox", "Galvanizados"],
  },
  {
    slug: "porcas",
    title: "Porcas",
    short: "Sextavadas, autotravantes, cegas, borboleta, quadradas e especiais.",
    image: "https://images.pexels.com/photos/26856081/pexels-photo-26856081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Sextavadas", "Autotravantes", "Cegas", "Borboleta", "Quadradas", "Especiais"],
  },
  {
    slug: "arruelas",
    title: "Arruelas",
    short: "Lisas, pressão, dentadas, estampadas em aço, inox e galvanizadas.",
    image: "https://images.unsplash.com/photo-1613945831677-383c19ad7721?auto=format&fit=crop&w=1200&q=80",
    items: ["Lisas", "De pressão", "Dentadas", "Estampadas"],
  },
  {
    slug: "chumbadores",
    title: "Chumbadores",
    short: "Mecânicos e químicos para ancoragem estrutural em concreto e alvenaria.",
    image: "https://images.pexels.com/photos/15419840/pexels-photo-15419840.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Chumbador mecânico", "Chumbador químico", "Parabolt", "Ancoragem estrutural"],
  },
  {
    slug: "rebites",
    title: "Rebites",
    short: "Rebites POP, de repuxo, cegos, estruturais em alumínio, aço e inox.",
    image: "https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?auto=format&fit=crop&w=1200&q=80",
    items: ["Rebite POP", "Repuxo", "Cego", "Estrutural"],
  },
  {
    slug: "buchas",
    title: "Buchas",
    short: "Buchas plásticas, de nylon, para drywall, S6, S8, S10 e especiais.",
    image: "https://images.pexels.com/photos/16485052/pexels-photo-16485052.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Plásticas", "Nylon", "Drywall", "S6/S8/S10"],
  },
  {
    slug: "abracadeiras",
    title: "Abraçadeiras",
    short: "Metálicas, de nylon, tipo D, tipo U e sela para tubulações e cabos.",
    image: "https://images.pexels.com/photos/19034547/pexels-photo-19034547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Metálicas", "Nylon", "Tipo D", "Tipo U", "Sela"],
  },
  {
    slug: "barras-roscadas",
    title: "Barras Roscadas",
    short: "Barras roscadas 1m e 3m em aço carbono, galvanizado e inox 304/316.",
    image: "https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Aço carbono", "Galvanizada", "Inox 304", "Inox 316"],
  },
  {
    slug: "fixadores-especiais",
    title: "Fixadores Especiais",
    short: "Âncoras, prisioneiros, parafusos especiais sob demanda e acessórios industriais.",
    image: "https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    items: ["Âncoras", "Prisioneiros", "Sob demanda", "Acessórios industriais"],
  },
];

export const PRODUCTS = [
  {
    code: "PS-001",
    name: "Parafuso Sextavado M8 x 30",
    category: "parafusos",
    image: "https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Parafuso sextavado em aço carbono classe 8.8 com acabamento zincado. Ideal para uniões estruturais que demandam alta resistência mecânica.",
    applications: ["Montagens metalúrgicas", "Estruturas metálicas", "Máquinas industriais", "Construção civil"],
    benefits: ["Alta resistência à tração", "Excelente relação custo-benefício", "Ampla disponibilidade em estoque"],
    specs: [
      ["Norma", "DIN 933 / ISO 4017"],
      ["Material", "Aço carbono 8.8"],
      ["Acabamento", "Zincado branco"],
      ["Rosca", "M8 x 1.25"],
    ],
  },
  {
    code: "PA-002",
    name: "Parafuso Allen Cabeça Cilíndrica M6",
    category: "parafusos",
    image: "https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Parafuso Allen com cabeça cilíndrica, sextavado interno, em aço-liga classe 12.9. Perfeito para aplicações que exigem torque elevado.",
    applications: ["Ferramentaria", "Moldes e matrizes", "Automação industrial", "Máquinas de precisão"],
    benefits: ["Torque elevado", "Cabeça compacta", "Alta dureza"],
    specs: [
      ["Norma", "DIN 912 / ISO 4762"],
      ["Material", "Aço-liga 12.9"],
      ["Acabamento", "Oxidado preto"],
      ["Rosca", "M6 x 1.0"],
    ],
  },
  {
    code: "CH-003",
    name: "Chumbador Parabolt 3/8 x 3\"",
    category: "chumbadores",
    image: "https://images.pexels.com/photos/15419840/pexels-photo-15419840.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Chumbador mecânico tipo parabolt para ancoragem em concreto. Expansão por camisa segmentada garante fixação segura.",
    applications: ["Fixação de estruturas", "Máquinas em piso", "Estantes industriais", "Guarda-corpos"],
    benefits: ["Instalação rápida", "Ancoragem estrutural", "Alta capacidade de carga"],
    specs: [
      ["Diâmetro", "3/8\""],
      ["Comprimento", "3 polegadas"],
      ["Material", "Aço zincado"],
    ],
  },
  {
    code: "AB-004",
    name: "Arruela de Pressão M10",
    category: "arruelas",
    image: "https://images.unsplash.com/photo-1613945831677-383c19ad7721?auto=format&fit=crop&w=1200&q=80",
    description:
      "Arruela de pressão em aço-mola, evita afrouxamento em uniões submetidas a vibração.",
    applications: ["Máquinas rotativas", "Estruturas vibratórias", "Automotivo", "Manutenção industrial"],
    benefits: ["Evita afrouxamento", "Aço-mola de alta resiliência", "Compatível com M10"],
    specs: [
      ["Norma", "DIN 127B"],
      ["Material", "Aço-mola"],
      ["Diâmetro nominal", "M10"],
    ],
  },
  {
    code: "RP-005",
    name: "Rebite POP 4.8 x 12 Alumínio",
    category: "rebites",
    image: "https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Rebite de repuxo (POP) em alumínio com mandril em aço. Ideal para chapas finas e uniões cegas.",
    applications: ["Funilaria", "Chapas metálicas", "Marcenaria de metal", "Sinalização"],
    benefits: ["Instalação por um único lado", "Leve", "Alta produtividade"],
    specs: [
      ["Corpo", "Alumínio"],
      ["Mandril", "Aço"],
      ["Dimensões", "4.8 x 12 mm"],
    ],
  },
  {
    code: "BR-006",
    name: "Barra Roscada 5/16\" x 1m — Inox 304",
    category: "barras-roscadas",
    image: "https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Barra roscada em inox 304 com 1 metro de comprimento. Excelente resistência à corrosão em ambientes agressivos.",
    applications: ["Ambientes marítimos", "Indústria alimentícia", "Química", "Áreas úmidas"],
    benefits: ["Resistente à corrosão", "Longa vida útil", "Estética limpa"],
    specs: [
      ["Material", "Inox AISI 304"],
      ["Comprimento", "1000 mm"],
      ["Rosca", "5/16\" UNC"],
    ],
  },
];

export const SEGMENTS = [
  {
    slug: "construcao-civil",
    title: "Construção Civil",
    desc: "Fixadores para obras, estruturas, drywall, esquadrias e acabamentos.",
    image: "https://images.pexels.com/photos/15419840/pexels-photo-15419840.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "HardHat",
  },
  {
    slug: "metalurgicas",
    title: "Metalúrgicas",
    desc: "Linha completa em aço, inox e galvanizados para montagem estrutural.",
    image: "https://images.pexels.com/photos/16485052/pexels-photo-16485052.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "Wrench",
  },
  {
    slug: "serralherias",
    title: "Serralherias",
    desc: "Parafusos francês, soberbas, rebites e chumbadores para portões e grades.",
    image: "https://images.pexels.com/photos/19034547/pexels-photo-19034547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "Anvil",
  },
  {
    slug: "marcenarias",
    title: "Marcenarias",
    desc: "Parafusos para madeira, buchas, ferragens e acessórios para móveis.",
    image: "https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "Hammer",
  },
  {
    slug: "industrias",
    title: "Indústrias",
    desc: "Suprimento contínuo com atendimento consultivo e programação de entregas.",
    image: "https://images.pexels.com/photos/36006588/pexels-photo-36006588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "Factory",
  },
  {
    slug: "montagens-industriais",
    title: "Montagens Industriais",
    desc: "Fixadores especiais para grandes projetos e manutenções programadas.",
    image: "https://images.pexels.com/photos/26856081/pexels-photo-26856081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    icon: "Cog",
  },
  {
    slug: "manutencao",
    title: "Manutenção",
    desc: "Kits, sortidos e reposição rápida para equipes de manutenção predial e industrial.",
    image: "https://images.unsplash.com/photo-1613945831677-383c19ad7721?auto=format&fit=crop&w=1200&q=80",
    icon: "Settings",
  },
  {
    slug: "revendas",
    title: "Revendas",
    desc: "Condições especiais e mix diversificado para lojas de ferragens e materiais.",
    image: "https://images.unsplash.com/photo-1614424428282-b2b1e72c6a4e?auto=format&fit=crop&w=1200&q=80",
    icon: "Store",
  },
];

export const BRANDS = [
  { name: "Ciser", tag: "Fixadores certificados" },
  { name: "Belfix", tag: "Ampla linha industrial" },
  { name: "Vonder", tag: "Ferramentas e fixação" },
  { name: "Fixtil", tag: "Chumbadores estruturais" },
  { name: "Wurth", tag: "Soluções técnicas" },
  { name: "Metalcorte", tag: "Aço e inox" },
  { name: "Nova Fix", tag: "Rebites e abraçadeiras" },
  { name: "Rocket", tag: "Chumbadores químicos" },
];

export const TESTIMONIALS = [
  {
    name: "Rafael Andrade",
    company: "Andrade Engenharia",
    role: "Engenheiro de Obras",
    quote:
      "A ABSOLUTA nos atendeu em um projeto crítico com prazo apertado. Entrega rápida e produtos exatamente conforme especificação técnica.",
  },
  {
    name: "Camila Souza",
    company: "Metalúrgica Souza",
    role: "Compradora Industrial",
    quote:
      "Atendimento consultivo real. A equipe entende de fixação e ajuda a escolher a melhor opção — isso faz enorme diferença no dia a dia.",
  },
  {
    name: "Marcelo Ribeiro",
    company: "Ribeiro Serralheria",
    role: "Proprietário",
    quote:
      "Preço justo, mix completo e sem enrolação. Virou nosso fornecedor de referência para parafusos francês e chumbadores.",
  },
  {
    name: "Juliana Prado",
    company: "Prado Construtora",
    role: "Suprimentos",
    quote:
      "Recebemos as cotações rápido, com opções bem organizadas. Comunicação clara e cumprimento de prazo impecável.",
  },
];

export const FAQ = [
  {
    q: "Como faço para solicitar um orçamento?",
    a: "Basta preencher o formulário na página de Orçamento com os produtos desejados e quantidades, ou chamar diretamente pelo WhatsApp. Nossa equipe retorna em até 4 horas úteis com a cotação completa.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Trabalhamos com boleto bancário, PIX, cartão de crédito e faturamento para empresas mediante cadastro aprovado. Condições especiais são negociadas conforme volume e recorrência.",
  },
  {
    q: "Existe pedido mínimo?",
    a: "Não trabalhamos com pedido mínimo obrigatório. Atendemos desde pequenas demandas pontuais até grandes contratos industriais programados.",
  },
  {
    q: "Vocês entregam em todo o Brasil?",
    a: "Sim. Realizamos envios para todo o território nacional utilizando transportadoras parceiras. Também oferecemos entrega própria dentro da região metropolitana de São Paulo.",
  },
  {
    q: "Os produtos possuem certificação e garantia?",
    a: "Trabalhamos exclusivamente com fabricantes que atendem normas técnicas (DIN, ISO, ABNT). Todos os produtos possuem garantia de fábrica contra defeitos de fabricação.",
  },
  {
    q: "Como funciona a política de trocas e devoluções?",
    a: "Trocas e devoluções são aceitas em até 7 dias corridos após o recebimento, desde que o produto esteja em sua embalagem original, sem uso e acompanhado da nota fiscal.",
  },
  {
    q: "Vocês fornecem produtos sob especificação especial?",
    a: "Sim. Atendemos demandas específicas de projeto, incluindo dimensões, materiais e acabamentos especiais mediante análise de viabilidade e volume mínimo.",
  },
  {
    q: "Como é feito o atendimento pós-venda?",
    a: "Nossa equipe permanece disponível após a entrega para suporte técnico, esclarecimento de dúvidas e apoio na próxima demanda. Relacionamento de longo prazo é nossa prioridade.",
  },
];

export const POSTS = [
  {
    slug: "como-escolher-parafuso-correto",
    title: "Como escolher o parafuso correto para cada aplicação",
    excerpt:
      "Guia prático com os critérios essenciais para selecionar o parafuso certo: material, classe de resistência, tipo de rosca, acabamento e norma técnica aplicável.",
    author: "Equipe Técnica ABSOLUTA",
    date: "12 Jan 2026",
    readTime: "6 min",
    category: "Guia Técnico",
    image: "https://images.pexels.com/photos/5279361/pexels-photo-5279361.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: [
      "Escolher o parafuso certo não é uma decisão trivial. Um dimensionamento incorreto pode comprometer toda uma estrutura, gerar retrabalho e, em casos extremos, colocar vidas em risco.",
      "Neste guia, reunimos os cinco critérios essenciais que engenheiros, projetistas e compradores devem considerar antes de fechar uma especificação: material, classe de resistência, tipo de rosca, acabamento superficial e norma técnica aplicável.",
      "**1. Material** — Aço-carbono é a escolha padrão pela relação custo-benefício. Já o inox 304/316 é indispensável em ambientes corrosivos, como beira-mar, indústrias químicas e alimentícias.",
      "**2. Classe de resistência** — Classes 4.6, 5.8, 8.8 e 12.9 indicam a resistência mecânica. Aplicações estruturais exigem 8.8 ou superior; ferramentas e moldes normalmente demandam 12.9.",
      "**3. Rosca** — Rosca métrica (M) ou polegada (UNC/UNF)? A padronização do projeto determina, mas atenção à combinação com porcas e furos roscados.",
      "**4. Acabamento** — Zincado branco é o mais comum; galvanizado a fogo protege por mais tempo em exteriores; oxidado preto é comum em Allen classe 12.9.",
      "**5. Norma** — DIN 933 (sextavado rosca total), DIN 931 (rosca parcial), DIN 912 (Allen cilíndrico). A norma garante intercambiabilidade e rastreabilidade.",
      "Em caso de dúvida, converse com nossa equipe técnica. Um simples ajuste na especificação pode reduzir custos e aumentar significativamente a vida útil da montagem.",
    ],
  },
  {
    slug: "chumbadores-mecanicos-vs-quimicos",
    title: "Chumbadores mecânicos vs. químicos: qual usar?",
    excerpt:
      "Entenda as diferenças entre chumbadores mecânicos e químicos, quando aplicar cada tipo e como calcular a capacidade de carga em concreto e alvenaria.",
    author: "Equipe Técnica ABSOLUTA",
    date: "05 Jan 2026",
    readTime: "7 min",
    category: "Ancoragem Estrutural",
    image: "https://images.pexels.com/photos/15419840/pexels-photo-15419840.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: [
      "Chumbadores são o elo entre a estrutura fixada e o substrato (concreto, alvenaria, pedra). Escolher o tipo correto influencia diretamente a segurança do projeto.",
      "**Chumbadores mecânicos** funcionam por expansão: uma camisa metálica se abre contra o furo, gerando atrito. São rápidos de instalar e ideais para cargas leves a médias em concreto estrutural.",
      "**Chumbadores químicos** utilizam uma resina (epóxi ou vinil-éster) que preenche o furo e endurece envolvendo uma barra roscada. Suportam cargas muito maiores e são recomendados em concreto fissurado, alvenaria e proximidade de bordas.",
      "Regra prática: para ancoragens estruturais críticas (equipamentos pesados, guarda-corpos com risco de queda, elementos suspensos), prefira químico. Para fixações rápidas de estantes, painéis e itens leves, o mecânico resolve.",
      "A ABSOLUTA disponibiliza as duas linhas com laudos técnicos e tabelas de carga por diâmetro e profundidade de embutimento.",
    ],
  },
  {
    slug: "corrosao-e-acabamentos",
    title: "Corrosão e acabamentos: prolongando a vida útil da fixação",
    excerpt:
      "Um panorama sobre os principais tratamentos superficiais em fixadores: zincagem, galvanização a fogo, oxidação, bicromatização e inox.",
    author: "Equipe Técnica ABSOLUTA",
    date: "20 Dez 2025",
    readTime: "5 min",
    category: "Materiais",
    image: "https://images.unsplash.com/photo-1613945831677-383c19ad7721?auto=format&fit=crop&w=1600&q=80",
    content: [
      "A corrosão é a principal responsável pela falha prematura de fixadores em campo. Escolher o acabamento correto é tão importante quanto dimensionar corretamente o parafuso.",
      "**Zincagem eletrolítica (branca ou amarela)** — Proteção leve, ideal para ambientes internos e secos. Camada média de 5–12 μm.",
      "**Galvanização a fogo** — Camada muito mais espessa (>45 μm), indicada para exteriores, umidade e atmosferas industriais.",
      "**Bicromatização** — Reforça a proteção do zincado, útil em ambientes agressivos moderados.",
      "**Inox 304 e 316** — Para máxima resistência à corrosão. O 316 possui molibdênio, sendo indicado em ambientes marinhos e químicos.",
      "Combinar acabamento e ambiente de uso pode multiplicar por 10x a vida útil da sua fixação.",
    ],
  },
  {
    slug: "gestao-de-suprimentos-fixadores",
    title: "Gestão de suprimentos em fixadores: como reduzir paradas",
    excerpt:
      "Boas práticas para manter estoque estratégico de fixadores, evitar paradas de produção e reduzir custos com sortidos organizados.",
    author: "Equipe Técnica ABSOLUTA",
    date: "10 Dez 2025",
    readTime: "6 min",
    category: "Gestão Industrial",
    image: "https://images.pexels.com/photos/16485052/pexels-photo-16485052.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: [
      "Fixadores são itens de baixo valor unitário, porém críticos: a falta de um parafuso pode paralisar uma linha inteira de produção.",
      "A gestão eficaz começa pela classificação ABC dos SKUs, com curva de giro cruzada com criticidade operacional.",
      "Adotar contratos de fornecimento programado com um parceiro confiável elimina a necessidade de estoques altos e reduz o capital imobilizado.",
      "A ABSOLUTA trabalha com programas de kanban, VMI (Vendor Managed Inventory) e kits sortidos personalizados para as principais linhas de manutenção.",
      "Fale com nosso time comercial e receba uma proposta de gestão sob medida para sua operação.",
    ],
  },
];

export const DIFFERENTIALS = [
  { icon: "Headset", title: "Atendimento consultivo", desc: "Equipe especializada para orientar em cada especificação técnica." },
  { icon: "Warehouse", title: "Estoque diversificado", desc: "Ampla variedade em pronta entrega para atender qualquer demanda." },
  { icon: "BadgeCheck", title: "Produtos certificados", desc: "Fixadores atendendo normas DIN, ISO e ABNT com garantia de fábrica." },
  { icon: "Truck", title: "Entrega ágil", desc: "Logística eficiente para prazos curtos e projetos críticos." },
  { icon: "PiggyBank", title: "Custo-benefício", desc: "Preços competitivos com qualidade sem concessões." },
  { icon: "Users", title: "Atendimento humanizado", desc: "Relacionamento próximo com clientes B2B e consumidores finais." },
];

export const PROCESS_STEPS = [
  { title: "Solicitação", desc: "Envie sua lista de produtos ou dúvida técnica." },
  { title: "Orçamento", desc: "Retornamos em até 4h úteis com a melhor proposta." },
  { title: "Separação", desc: "Time de logística separa e confere cada item." },
  { title: "Expedição", desc: "Embalagem industrial adequada ao transporte." },
  { title: "Entrega", desc: "Entrega no prazo combinado, com rastreamento." },
];

export const STATS = [
  { value: 15000, suffix: "+", label: "SKUs disponíveis" },
  { value: 500, suffix: "+", label: "Clientes atendidos" },
  { value: 98, suffix: "%", label: "Índice de satisfação" },
  { value: 4, suffix: "h", label: "Retorno de orçamento" },
];
