import type { ReactNode } from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const paths: Record<number, ReactNode> = {
  0: (
    <>
      <rect x="3" y="10" width="18" height="7" rx="1.5" />
      <path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    </>
  ),
  1: (
    <>
      <path d="M6 3h12l-1.5 6H7.5L6 3Z" />
      <path d="M7.5 9v10a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9" />
    </>
  ),
  2: (
    <>
      <path d="M4 8h16M4 12h16M4 16h10" />
      <circle cx="18" cy="16" r="2" />
    </>
  ),
  3: (
    <>
      <path d="M12 3v6M9 6h6" />
      <rect x="5" y="11" width="14" height="9" rx="2" />
    </>
  ),
  4: (
    <>
      <rect x="4" y="4" width="16" height="10" rx="2" />
      <path d="M8 20h8M12 14v6" />
    </>
  ),
  5: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="3" />
      <path d="M9 9h6M9 13h6" />
    </>
  ),
}

export default function ProductIcon({ index }: { index: number }) {
  return (
    <svg {...iconProps} className="h-6 w-6">
      {paths[index % 6]}
    </svg>
  )
}
