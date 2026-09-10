export type Product = {
  name: string
  description: string
}

export const products: Product[] = [
  {
    name: 'Bancada Reprocessadora',
    description:
      'Equipamento para reprocessamento de dialisadores em clínicas de hemodiálise, com controle de fluxo e segurança operacional.',
  },
  {
    name: 'Elementos Filtrantes',
    description:
      'Filtros Lisa, Big Blue e cartuchos plissados de 0,22 micra para as diferentes etapas da purificação da água.',
  },
  {
    name: 'Insumos',
    description:
      'Resinas especiais e carvão ativado mineral para tratamento e sistemas de osmose reversa.',
  },
  {
    name: 'Lava Fístula Coletivo',
    description:
      'Equipamento para higienização de fístulas em ambiente hospitalar, com praticidade e segurança.',
  },
  {
    name: 'Sistema de Exaustão',
    description:
      'Soluções de exaustão para ambientes que exigem controle rigoroso de qualidade do ar.',
  },
  {
    name: 'Tanques em PRFV',
    description:
      'Tanques em fibra de vidro reforçada, resistentes à corrosão, para armazenamento e tratamento de água.',
  },
]
