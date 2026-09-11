import avatar from '../assets/avatar.png'
import { profile } from '../data/profile'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Sidebar() {
  return (
    <aside className="lg:self-start lg:[@media(min-height:960px)]:sticky lg:[@media(min-height:960px)]:top-16">
      <div className="flex items-end gap-6 lg:block">
        <div className="relative w-28 shrink-0 sm:w-36 lg:w-48">
          <span
            aria-hidden="true"
            className="clip-corner absolute -top-2 -left-2 h-full w-full border border-cyan/60 bg-cyan/5"
          />
          <img
            src={avatar}
            alt="Illustration of Hector Seibel"
            width={853}
            height={1280}
            className="clip-corner relative aspect-[3/4] w-full bg-panel object-cover object-top"
          />
        </div>

        <div className="lg:mt-6">
          <p className="font-mono text-xs tracking-[0.3em] text-cyan">
            <span className="animate-blink mr-2 inline-block h-2 w-2 bg-cyan align-middle" />
            OPEN TO REMOTE ROLES
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl lg:text-4xl xl:text-5xl">
            {profile.name}
          </h1>
          <p className="font-display mt-2 text-lg text-amber">{profile.title}</p>
        </div>
      </div>

      <p className="mt-6 max-w-md text-fog">{profile.tagline}</p>

      <dl className="mt-8 grid grid-cols-2 gap-px border border-line bg-line">
        {profile.stats.map((s) => (
          <div key={s.label} className="bg-panel px-4 py-3">
            <dt className="font-display text-3xl font-semibold text-paper">{s.value}</dt>
            <dd className="mt-1 font-mono text-[11px] leading-snug tracking-wide text-fog uppercase">{s.label}</dd>
          </div>
        ))}
      </dl>

      <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-y-3">
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-3 font-mono text-sm text-fog transition-colors hover:text-paper"
          >
            <span className="text-xs text-line transition-colors group-hover:text-cyan">0{i + 1}</span>
            <span className="h-px w-4 bg-line transition-all group-hover:w-8 group-hover:bg-cyan" />
            {item.label}
          </a>
        ))}
      </nav>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <li>
          <a className="text-fog underline-offset-4 hover:text-cyan hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className="text-fog underline-offset-4 hover:text-cyan hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="text-fog underline-offset-4 hover:text-cyan hover:underline" href={`mailto:${profile.email}`}>
            Email
          </a>
        </li>
      </ul>
    </aside>
  )
}
