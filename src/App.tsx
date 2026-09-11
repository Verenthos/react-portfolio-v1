import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { profile } from './data/profile'

const sections = [
  { id: 'about', index: '01', title: 'About', body: <About /> },
  { id: 'experience', index: '02', title: 'Experience', body: <Experience /> },
  { id: 'projects', index: '03', title: 'Projects', body: <Projects /> },
  { id: 'skills', index: '04', title: 'Skills', body: <Skills /> },
  { id: 'contact', index: '05', title: 'Contact', body: <Contact /> },
]

function About() {
  return (
    <div className="max-w-2xl space-y-4 leading-relaxed text-paper/90">
      {profile.about.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:grid lg:grid-cols-[19rem_1fr] lg:gap-20 lg:py-16 xl:grid-cols-[21rem_1fr]">
      <div className="animate-rise">
        <Sidebar />
      </div>
      <main className="mt-16 space-y-24 lg:mt-0">
        {sections.map((s, i) => (
          <div key={s.id} className="animate-rise" style={{ animationDelay: `${120 + i * 90}ms` }}>
            <Section id={s.id} index={s.index} title={s.title}>
              {s.body}
            </Section>
          </div>
        ))}
        <footer className="border-t border-line pt-6 font-mono text-xs text-fog">
          {profile.name}. Built with React, Vite and Tailwind.
        </footer>
      </main>
    </div>
  )
}

export default App
