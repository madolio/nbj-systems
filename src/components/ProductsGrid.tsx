import { products, type Product } from '../data/products'
import ProductIcon from './ProductIcon'

type ProductsGridProps = {
  limit?: number
  items?: Product[]
}

export default function ProductsGrid({ limit, items }: ProductsGridProps) {
  const source = items ?? products
  const list = limit ? source.slice(0, limit) : source

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((product, i) => (
        <div
          key={product.name}
          className="overflow-hidden rounded-2xl border border-line bg-white"
        >
          {product.image ? (
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface-alt">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div className="p-6">
            {!product.image && (
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ProductIcon index={i} />
              </div>
            )}
            <h3 className="text-lg font-extrabold text-ink">{product.name}</h3>
            <p className="mt-2 text-sm text-ink/60">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
