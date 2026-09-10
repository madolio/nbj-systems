import type { ReactNode } from 'react'
import { sectors } from '../data/sectors'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const icons: ReactNode[] = [
  // Hemodiálise (gota + pulso)
  <svg {...iconProps} className="h-6 w-6">
    <path d="M12 2.5c3 4 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-7 6-11Z" />
    <path d="M9 13l1.5 2 1.5-3 1.5 2H16" />
  </svg>,
  // Hospitais (cruz)
  <svg {...iconProps} className="h-6 w-6">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M12 8v8M8 12h8" />
  </svg>,
  // Cosmética (frasco)
  <svg {...iconProps} className="h-6 w-6">
    <path d="M10 2h4M11 2v4l4 6v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8l4-6" />
  </svg>,
  // Alimentícia (garfo)
  <svg {...iconProps} className="h-6 w-6">
    <path d="M7 2v8M10 2v8M7 6h3M8.5 10v12M15 2c-1.5 1.5-1.5 4 0 6v14" />
  </svg>,
  // Veterinária (pata)
  <svg {...iconProps} className="h-6 w-6">
    <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
    <path d="M12 12c3 0 5 2 5 4.5a3 3 0 0 1-3 3c-1 0-1.5-.5-2-.5s-1 .5-2 .5a3 3 0 0 1-3-3C7 14 9 12 12 12Z" />
  </svg>,
  // Farmacêutica (comprimido)
  <svg {...iconProps} className="h-6 w-6">
    <rect x="3" y="9" width="18" height="6" rx="3" />
    <path d="M12 9v6" />
  </svg>,
]

export default function Setores() {
  return (
    <section id="setores" className="scroll-mt-20 bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
          Setores atendidos
        </h2>
        <p className="mt-4 max-w-2xl text-ink/60">
          Equipamentos e insumos para quem precisa de água tratada com
          segurança e consistência.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <div
              key={sector.name}
              className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {icons[i]}
              </div>
              <span className="font-medium text-ink">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
