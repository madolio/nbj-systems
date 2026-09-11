# NBJ Systems

Landing page da NBJ Systems (equipamentos para filtração e tratamento de água). Vite + React + TypeScript + Tailwind v4. Deploy manual na Netlify por enquanto (sem auto-deploy configurado ainda — ver histórico de conversa/memória do Claude para retomar isso).

Conteúdo baseado no rascunho real da empresa em GreatPages (https://app.greatpages.com.br/pages/2554928/preview — conteúdo real, mas página nunca publicada). Endereço, WhatsApp e descrições de produto em `src/constants.ts` e `src/data/products.ts` vêm de lá. Se o usuário mandar fotos reais dos produtos/instalações (links ou arquivos), elas devem substituir os ícones/mocks abstratos atuais — confirmar direito de uso se a origem não for clara.

## Diretrizes de design

Ver o CLAUDE.md do projeto irmão `madolio` (mesmo usuário, mesmo stack) para a diretriz completa sobre evitar visual "AI slop" e a gotcha de GSAP + Tailwind `transition` (não pôr a classe `transition` genérica em elemento que o GSAP anima em opacity/transform).

Direção visual atual (redesign de set/2026), feita para fugir do kit "card + ícone em quadradinho + badge em pill + gradiente":

- **Momento principal:** `src/components/TreatmentDiagram.tsx` — esquema técnico (estilo P&ID) das etapas reais de um sistema NBJ-OR: entrada → polipropileno → carvão ativado → osmose reversa → água desmineralizada. GSAP desenha os canos (DrawSVGPlugin), faz a água fluir e as impurezas pararem na etapa que as retém. É a única animação "não pedida" do site; não espalhar fade-in em todas as seções.
- **Tipografia:** Archivo (uma família só), títulos com `font-stretch: 116%` (eixo de largura).
- **Produtos** como ficha técnica em linhas (`SpecList`), não grid de cards. **Osmose** comparada por vazão em barras (`OsmosisScale`) — a vazão de cada modelo foi deduzida do nome (NBJ-OR-15L = 15 L/h etc.; só o 250L tem a vazão confirmada no texto original). Confirmar com o cliente.
- O rodapé é o bloco de contato (fundo `ink`, telefones grandes), presente em todas as páginas.
- Chrome headless não avança o relógio do GSAP (lagSmoothing), então screenshots headless mostram a intro no começo. Para revisar layout, usar `--force-prefers-reduced-motion` (estado final estático).
