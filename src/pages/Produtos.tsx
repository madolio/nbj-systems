import ProductsGrid from '../components/ProductsGrid'
import { osmosisProducts, treatmentProducts } from '../data/products'

export default function Produtos() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-flex items-center rounded-full border border-line bg-surface-alt px-4 py-1.5 text-sm font-medium text-ink/70">
          Produtos
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink md:text-5xl">
          Equipamentos para filtração e tratamento de água
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          Soluções projetadas para atender às necessidades de clínicas,
          hospitais e indústrias.
        </p>

        <div className="mt-12">
          <ProductsGrid items={treatmentProducts} />
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
            Osmose reversa compacta
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            Sistemas compactos que produzem água desmineralizada com alta
            eficiência, removendo sais e impurezas — ideais para usos
            industriais, laboratoriais e hospitalares.
          </p>

          <div className="mt-10">
            <ProductsGrid items={osmosisProducts} />
          </div>
        </div>
      </div>
    </section>
  )
}
