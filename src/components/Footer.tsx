import {
  ADDRESS,
  ADDRESS_CEP,
  PHONE_PRIMARY,
  PHONE_PRIMARY_HREF,
  PHONE_SECONDARY,
  PHONE_SECONDARY_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'

const phoneLink =
  'font-heading text-[1.75rem] font-bold leading-tight text-white underline decoration-white/0 underline-offset-[6px] transition-colors hover:decoration-white/60 md:text-[2.5rem]'

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-20 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
<<<<<<< HEAD
            <img src="/images/logo.png" alt="NBJ Systems" className="h-8 w-auto" />
            <p className="mt-3 text-sm text-ink/60">
              Equipamentos para filtração e purificação de água há mais de 30 anos.
=======
            <h2 className="text-3xl font-extrabold md:text-[2.75rem]">
              Fale com a nossa equipe
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Conte o que você precisa tratar e receba uma orientação rápida
              sobre a melhor solução para o seu caso.
>>>>>>> 042ea53c4ca3425c4a3ce75a154c6f9a60ace7fe
            </p>

            <ul className="mt-10 space-y-2" style={{ fontStretch: '116%' }}>
              <li>
                <a href={PHONE_PRIMARY_HREF} className={phoneLink}>
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a href={PHONE_SECONDARY_HREF} className={phoneLink}>
                  {PHONE_SECONDARY}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8 md:pt-3">
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="mt-1 text-white/70">{WHATSAPP_DISPLAY}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-white/85"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div>
              <h3 className="font-semibold">Endereço</h3>
              <p className="mt-1 text-white/70">
                {ADDRESS}
                <br />
                {ADDRESS_CEP}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/50">
          <span>© {new Date().getFullYear()} NBJ Systems</span>
          <span>Equipamentos para tratamento de água desde 1990</span>
        </div>
      </div>
    </footer>
  )
}
