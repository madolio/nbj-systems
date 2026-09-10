import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PHONE_PRIMARY, PHONE_PRIMARY_HREF } from '../constants'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-heading text-xl font-extrabold text-ink"
        >
          NBJ<span className="text-accent"> Systems</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/produtos"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Produtos
          </Link>
          <Link
            to="/#setores"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Setores
          </Link>
          <Link
            to="/#contato"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_PRIMARY_HREF}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover sm:inline-block"
          >
            {PHONE_PRIMARY}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-white px-6 py-4 md:hidden">
          <Link
            to="/produtos"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Produtos
          </Link>
          <Link
            to="/#setores"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Setores
          </Link>
          <Link
            to="/#contato"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Contato
          </Link>
          <a
            href={PHONE_PRIMARY_HREF}
            className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            {PHONE_PRIMARY}
          </a>
        </nav>
      )}
    </header>
  )
}
