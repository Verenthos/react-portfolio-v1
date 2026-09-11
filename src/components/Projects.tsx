import { projects } from '../data/projects'

export function Projects() {
  return (
    <ul className="grid gap-5">
      {projects.map((p, i) => (
        <li
          key={p.name}
          className="clip-corner group relative border border-line bg-panel/80 p-6 transition-colors hover:border-cyan/50 sm:p-7"
        >
          <span
            aria-hidden="true"
            className="absolute right-6 top-5 font-display text-5xl font-bold text-line/70 transition-colors group-hover:text-cyan/30"
          >
            0{i + 1}
          </span>
          <p className="font-mono text-xs tracking-[0.3em] text-amber">{p.kind.toUpperCase()}</p>
          <h3 className="font-display mt-2 pr-16 text-2xl font-semibold">{p.name}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-paper/90">{p.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="border border-line px-2 py-0.5 font-mono text-xs text-fog">
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-sm">
            {p.repo && (
              <a className="text-cyan underline-offset-4 hover:underline" href={p.repo} target="_blank" rel="noreferrer">
                Repository
              </a>
            )}
            {p.live && (
              <a className="text-cyan underline-offset-4 hover:underline" href={p.live} target="_blank" rel="noreferrer">
                Live site
              </a>
            )}
            {p.note && <span className="text-fog">{p.note}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}
