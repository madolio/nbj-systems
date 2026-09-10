import { PHONE_PRIMARY, PHONE_PRIMARY_HREF, PHONE_SECONDARY } from '../constants'

export default function Footer() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t border-line bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <span className="font-heading text-lg font-extrabold text-ink">
              NBJ<span className="text-accent"> Systems</span>
            </span>
            <p className="mt-3 text-sm text-ink/60">
              Equipamentos para filtração e purificação de água há mais de 30 anos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink/60">
              <li>
                <a href={PHONE_PRIMARY_HREF} className="transition hover:text-ink">
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li>{PHONE_SECONDARY}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Atendimento</h3>
            <p className="mt-3 text-sm text-ink/60">
              Grande São Paulo e interior — clínicas, hospitais e indústria.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-ink/50">
          © {new Date().getFullYear()} NBJ Systems. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
