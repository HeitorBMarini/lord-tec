// src/data/services.ts

export type ServiceItem = {
  slug: string;
  label: string;
  desc: string;
  img: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "instalacao-ar-condicionado",
    label: "Instalação de ar-condicionado",
    img: "/imgs/servicos/instalacao-ar.webp", 
    desc: `Realizamos instalação de ar-condicionado comercial na São Paulo Capital, com soluções sob medida para lojas, escritórios, restaurantes e indústrias. O serviço inclui análise técnica, instalação elétrica, fixação segura e testes de performance. Garantimos eficiência energética e climatização uniforme em grandes ambientes`,
  },
  {
    slug: "manutencao-ar-condicionado",
    label: "Manutenção de ar-condicionado",
    img: "/imgs/servicos/manutencao-ar.webp",
    desc: ` Problemas no ar-condicionado ACJ(ar-condicionado de Janela), split e piso teto, como falhas no resfriamento ou ruídos, exigem diagnóstico técnico especializado. Na São Paulo Capital, realizamos conserto e revisão completa de sistemas Cassete (ACJ(ar-condicionado de Janela), split e piso teto), verificando componentes elétricos, gás refrigerante e sensores de temperatura. Restauramos o funcionamento ideal do equipamento para ambientes comerciais e corporativos.`,
  },
  {
    slug: "instalacao-camara-fria",
    label: "Instalação de câmaras frias e Frigorifica",
    img: "/imgs/servicos/instalacao-camara.webp",
    desc: ` Precisando instalar uma câmara frigorífica na São Paulo Capital? Realizamos projeto, instalação elétrica, isolamento térmico, teste de funcionamento e entrega técnica completa. Atendemos indústrias, supermercados, restaurantes e qualquer negócio que necessite de ambiente refrigerado dedicado. A execução técnica inclui tudo para funcionamento seguro e eficiente.`,
  },
  {
    slug: "manutencao-camara-fria",
    label: "Manutenção Câmara Fria e Frigorifica",
    img: "/imgs/servicos/manutencao-camara.webp",
    desc: ` A manutenção de câmara fria exige cuidado especializado: vedações, sistema de refrigeração, carga de gás, limpeza de tubulações. Na São Paulo Capital, nossas equipes atuam com rotina preventiva e corretiva para garantir que seu ambiente siga estável, com temperatura ideal e sem falhas. Ideal para operações que dependem de conservação rigorosa.`,
  },
  {
    slug: "manutencao-expositores",
    label: "Manutenção de Expositores e Balcões Refrigerados/congelados",
    img: "/imgs/servicos/manutencao-expositores.webp",
    desc: `Se o seu estabelecimento enfrenta problemas com balcão refrigerado  como falhas no termostato, degelo irregular ou baixa performance  nossa equipe atua na São Paulo Capital  com manutenção completa. Realizamos limpeza de serpentinas, verificação elétrica, e testes de temperatura para garantir que o equipamento volte a operar com eficiência e segurança. Conte com um atendimento técnico especializado para supermercados, lanchonetes, bares e restaurantes que utilizam balcões refrigerados.`,
  },
  {
    slug: "manutencao-ilhas",
    label: "Manutenção de Ilha Refrigerada",
    img: "/imgs/servicos/manutencao-ilha.webp",
    desc: ` Realizamos manutenção completa em equipamentos de refrigeração para restaurantes, como balcões, expositores, câmaras frias e gaveteiros. Garantimos temperatura ideal, economia de energia e funcionamento contínuo, evitando prejuízos e mantendo a qualidade dos alimentos armazenados.`,
  },
  {
    slug: "instalacao-expositores",
    label: "Instalação de Expositores e Balcões Refrigerados/congelados",
    img: "/imgs/servicos/instalacao-expositores.webp",
    desc: `Para quem precisa instalar balcões congelados de alta performance na São Paulo Capital, oferecemos serviço completo desde o planejamento até a colocação em funcionamento. Avaliamos o local, fazemos instalação elétrica compatível, ajustamos o sistema de congelamento e testamos o equipamento conforme exigência do ambiente. Ideal para padarias, confeitarias e estabelecimentos que precisam expor produtos congelados com visibilidade e eficiência térmica.`,
  },
];

/** Busca simples por slug */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Serviços relacionados (exclui o atual) */
export function getRelatedServices(slug: string, limit = 3): ServiceItem[] {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, limit);
}
