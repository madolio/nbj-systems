import { PHONE_PRIMARY, PHONE_PRIMARY_HREF, WHATSAPP_URL } from '../constants'
import FilterVisual from './FilterVisual'

const stats = [
  { value: '30+ anos', label: 'De experiência no mercado' },
  { value: 'Clínicas e indústrias', label: 'Hemodiálise, hospitais e fábricas' },
  { value: 'SP e interior', label: 'Atendimento em toda a região' },
]

export default function Hero() {
  return (
    <section className="overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full border border-line bg-surface-alt px-4 py-1.5 text-sm font-medium text-ink/70">
            Há mais de 30 anos no tratamento de água
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Equipamentos para filtração e purificação de água
          </h1>

          <p className="mt-6 text-lg text-ink/70">
            Soluções completas para clínicas de hemodiálise, hospitais e
            indústrias — bancadas reprocessadoras, elementos filtrantes,
            sistemas de exaustão e tanques em PRFV.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              Falar no WhatsApp
            </a>
            <a
              href={PHONE_PRIMARY_HREF}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              {PHONE_PRIMARY}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt className="text-xl font-extrabold text-ink">{stat.value}</dt>
                <dd className="mt-1 text-sm text-ink/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <FilterVisual />
      </div>
    </section>
  )
}
