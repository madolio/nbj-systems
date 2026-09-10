import { PHONE_PRIMARY, PHONE_PRIMARY_HREF, WHATSAPP_URL } from '../constants'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-accent to-accent-hover py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Precisa de equipamentos para tratamento de água?
        </h2>
        <p className="mt-4 text-white/80">
          Fale com a nossa equipe e receba uma orientação rápida sobre a
          melhor solução para o seu caso.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition hover:bg-white/90"
          >
            Falar no WhatsApp
          </a>
          <a
            href={PHONE_PRIMARY_HREF}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            {PHONE_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  )
}
