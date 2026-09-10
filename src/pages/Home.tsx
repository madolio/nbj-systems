import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import PorQue from '../components/PorQue'
import ProductsGrid from '../components/ProductsGrid'
import Setores from '../components/Setores'

export default function Home() {
  return (
    <>
      <Hero />
      <Setores />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
              Produtos
            </h2>
            <Link
              to="/produtos"
              className="text-sm font-semibold text-accent transition hover:text-accent-hover"
            >
              Ver todos os produtos →
            </Link>
          </div>

          <div className="mt-10">
            <ProductsGrid limit={3} />
          </div>
        </div>
      </section>

      <PorQue />
      <CTA />
    </>
  )
}
