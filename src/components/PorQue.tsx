const reasons = [
  'Mais de 30 anos de experiência no mercado de tratamento de água',
  'Equipamentos duráveis, produzidos com foco em alta performance',
  'Atendimento técnico especializado do início ao fim',
  'Presença em toda a Grande São Paulo e interior',
]

export default function PorQue() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
          Por que a NBJ Systems
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason} className="flex gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-ink/80">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
