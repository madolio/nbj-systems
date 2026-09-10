# NBJ Systems

Landing page da NBJ Systems (equipamentos para filtração e tratamento de água). Vite + React + TypeScript + Tailwind v4. Deploy manual na Netlify por enquanto (sem auto-deploy configurado ainda — ver histórico de conversa/memória do Claude para retomar isso).

Conteúdo baseado no rascunho real da empresa em GreatPages (https://app.greatpages.com.br/pages/2554928/preview — conteúdo real, mas página nunca publicada). Endereço, WhatsApp e descrições de produto em `src/constants.ts` e `src/data/products.ts` vêm de lá. Se o usuário mandar fotos reais dos produtos/instalações (links ou arquivos), elas devem substituir os ícones/mocks abstratos atuais — confirmar direito de uso se a origem não for clara.

## Diretrizes de design

Ver o CLAUDE.md do projeto irmão `madolio` (mesmo usuário, mesmo stack) para a diretriz completa sobre evitar visual "AI slop" e a gotcha de GSAP + Tailwind `transition`. Resumo: variar composição de seções, preferir componentes reais a divs genéricos, motion de verdade em vez de estático — mas esse projeto (NBJ Systems) ainda **não tem GSAP instalado**; a passada de animação foi aplicada só no Madolio primeiro. Se for adicionar aqui, reaproveitar o padrão de `madolio/src/components/Reveal.tsx` (incluindo a gotcha de excluir `opacity` da classe `transition` do Tailwind em elementos que o GSAP anima).
