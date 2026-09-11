import { profile } from '../data/profile'

export function Contact() {
  return (
    <div className="clip-corner border border-line bg-panel p-6 sm:p-8">
      <p className="max-w-xl leading-relaxed text-paper/90">
        Remote roles, worldwide. Support engineering, QA automation, fullstack work. I answer within a day.
      </p>
      <a
        className="font-display mt-4 inline-block text-xl text-cyan underline-offset-4 hover:underline sm:text-2xl"
        href={`mailto:${profile.email}`}
      >
        {profile.email}
      </a>
      <p className="mt-2 font-mono text-xs text-fog">{profile.location}, UTC-3</p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <li>
          <a className="text-fog underline-offset-4 hover:text-cyan hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className="text-fog underline-offset-4 hover:text-cyan hover:underline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}
