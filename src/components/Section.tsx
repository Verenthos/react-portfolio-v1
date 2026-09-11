import type { ReactNode } from 'react'

type Props = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <header className="mb-8 flex items-baseline gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-cyan">{index}</span>
        <h2 className="font-display text-2xl font-semibold uppercase tracking-wide">{title}</h2>
        <span aria-hidden="true" className="ml-2 h-px flex-1 bg-gradient-to-r from-line to-transparent" />
      </header>
      {children}
    </section>
  )
}
