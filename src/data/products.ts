export type Product = {
  name: string
  description: string
  spec?: { value: string; label: string }
}

export type OsmosisModel = Product & {
  /** Vazão nominal em litros por hora (o número do modelo). */
  flow: number
}

export const treatmentProducts: Product[] = [
  {
    name: 'Elementos Filtrantes',
    description:
      'Linha abrangente de elementos filtrantes projetados para garantir a purificação e a qualidade da água em diversas aplicações, fabricados com materiais de alta qualidade.',
  },
  {
    name: 'Tanques em PRFV',
    description:
      'Tanques em Polímero Reforçado com Fibra de Vidro, resistentes e versáteis, para projetos de diversos portes.',
    spec: { value: '300 a 20.000 L/h', label: 'de vazão' },
  },
  {
    name: 'Bancada Reprocessadora de Capilar',
    description:
      'Equipamento em polipropileno branco para limpeza e reuso seguro de capilares em clínicas de hemodiálise e diálise peritoneal, com desinfecção química eficiente.',
  },
  {
    name: 'Insumos e Cargas Filtrantes',
    description:
      'Zeólitas (alumino silicatos hidratados) com estrutura microporosa, altamente eficazes em troca iônica, purificação e remoção de impurezas.',
    spec: { value: '3 granulometrias', label: 'de zeólita' },
  },
]

export const osmosisModels: OsmosisModel[] = [
  {
    name: 'NBJ-OR-15L',
    flow: 15,
    description:
      'Sistema compacto de osmose reversa para produção de água desmineralizada. Ideal para laboratórios e esterilização, com flush automático e membranas RO1000.',
  },
  {
    name: 'NBJ-OR-70L',
    flow: 70,
    description:
      'Sistema compacto e eficiente indicado para laboratórios, indústrias, cervejarias, potabilização e esterilização, com pré-tratamento de polipropileno e carvão ativado.',
  },
  {
    name: 'NBJ-OR-150L',
    flow: 150,
    description:
      'Solução eficiente para produção de água desmineralizada, ideal para laboratórios, indústrias, hospitais e centrais de esterilização, com pré-tratamento completo.',
  },
  {
    name: 'NBJ-OR-250L',
    flow: 250,
    description:
      'Ideal para laboratórios, indústrias cervejeiras, cosméticas, alimentícias e hospitalares. Alta pureza, eficiência e durabilidade.',
  },
]
