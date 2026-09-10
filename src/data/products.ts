export type Product = {
  name: string
  description: string
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
      'Tanques em Polímero Reforçado com Fibra de Vidro, resistentes e versáteis. Suportam vazões de 300 a 20.000 litros por hora, atendendo projetos de diversos portes.',
  },
  {
    name: 'Bancada Reprocessadora de Capilar',
    description:
      'Equipamento em polipropileno branco para limpeza e reuso seguro de capilares em clínicas de hemodiálise e diálise peritoneal, com desinfecção química eficiente.',
  },
  {
    name: 'Insumos e Cargas Filtrantes',
    description:
      'Zeólitas (alumino silicatos hidratados) com estrutura microporosa em três granulometrias, altamente eficazes em troca iônica, purificação e remoção de impurezas.',
  },
]

export const osmosisProducts: Product[] = [
  {
    name: 'NBJ-OR-15L',
    description:
      'Sistema compacto de osmose reversa para produção de água desmineralizada. Ideal para laboratórios e esterilização, com flush automático e membranas RO1000.',
  },
  {
    name: 'NBJ-OR-70L',
    description:
      'Sistema compacto e eficiente indicado para laboratórios, indústrias, cervejarias, potabilização e esterilização, com pré-tratamento de polipropileno e carvão ativado.',
  },
  {
    name: 'NBJ-OR-150L',
    description:
      'Solução eficiente para produção de água desmineralizada, ideal para laboratórios, indústrias, hospitais e centrais de esterilização, com pré-tratamento completo.',
  },
  {
    name: 'NBJ-OR-250L',
    description:
      'Vazão de 250L/h, ideal para laboratórios, indústrias cervejeiras, cosméticas, alimentícias e hospitalares. Alta pureza, eficiência e durabilidade.',
  },
]

export const products: Product[] = [...treatmentProducts, ...osmosisProducts]
