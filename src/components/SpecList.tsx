import type { Product } from '../data/products'

export default function SpecList({ items }: { items: Product[] }) {
  return (
    <ul className="border-t border-ink/15">
      {items.map((product) => (
        <li
          key={product.name}
          className="grid gap-2 border-b border-ink/15 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_11rem] md:gap-10"
        >
          <h3 className="text-xl font-bold leading-tight text-ink md:text-2xl">
            {product.name}
          </h3>
          <p className="max-w-prose text-ink/70">{product.description}</p>
          {product.spec && (
            <p className="mt-1 md:mt-0 md:text-right">
              <span className="font-semibold text-ink tabular-nums">
                {product.spec.value}
              </span>{' '}
              <span className="text-ink/75 md:block">{product.spec.label}</span>
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
