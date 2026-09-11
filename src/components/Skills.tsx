import { skills } from '../data/skills'

export function Skills() {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
      {skills.map((g) => (
        <div key={g.group} className="bg-panel p-5">
          <h3 className="font-mono text-xs tracking-[0.3em] text-cyan">{g.group.toUpperCase()}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <li key={item} className="border border-line bg-ink/60 px-2.5 py-1 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
