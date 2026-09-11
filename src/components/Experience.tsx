import { education, experience } from '../data/experience'
import { profile } from '../data/profile'

export function Experience() {
  return (
    <div className="space-y-12">
      <ol className="relative space-y-10 border-l border-line pl-8">
        {experience.map((role) => (
          <li key={role.title + role.company} className="relative">
            <span aria-hidden="true" className="absolute -left-[37px] top-2 h-2.5 w-2.5 rotate-45 border border-cyan bg-ink" />
            <p className="font-mono text-xs tracking-wider text-cyan">{role.period}</p>
            <h3 className="font-display mt-1 text-xl font-semibold">
              {role.title} <span className="text-fog">at</span> {role.company}
            </h3>
            <p className="text-sm text-fog">{role.where}</p>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-paper/90">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[11px] h-px w-3 shrink-0 bg-amber" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
        <div className="bg-panel p-5">
          <h3 className="font-mono text-xs tracking-[0.3em] text-cyan">EDUCATION</h3>
          <ul className="mt-3 space-y-3">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-display font-medium">{e.degree}</p>
                <p className="text-sm text-fog">
                  {e.school}, {e.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-panel p-5">
          <h3 className="font-mono text-xs tracking-[0.3em] text-cyan">LANGUAGES</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {profile.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
