import { products } from '../data/products'
import ProductIcon from './ProductIcon'

type ProductsGridProps = {
  limit?: number
}

export default function ProductsGrid({ limit }: ProductsGridProps) {
  const list = limit ? products.slice(0, limit) : products

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((product, i) => (
        <div
          key={product.name}
          className="rounded-2xl border border-line bg-white p-6"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <ProductIcon index={i} />
          </div>
          <h3 className="mt-4 text-lg font-extrabold text-ink">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-ink/60">{product.description}</p>
        </div>
      ))}
    </div>
  )
}
