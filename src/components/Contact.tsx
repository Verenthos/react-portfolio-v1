import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/profile'

// Set these three on the host (Netlify site settings) to enable the form. Without them the
// section only shows the direct email link.
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
const formEnabled = Boolean(serviceId && templateId && publicKey)

const fieldClass =
  'w-full border border-line bg-ink/60 px-3 py-2 text-paper placeholder:text-fog/60 focus:border-cyan focus:outline-none'

export function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setState('sending')
    try {
      await emailjs.send(
        serviceId!,
        templateId!,
        // Keys match the existing EmailJS template.
        { name: data.get('name'), email: data.get('email'), mensagem: data.get('message') },
        { publicKey: publicKey! },
      )
      form.reset()
      setState('sent')
    } catch {
      setState('failed')
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="leading-relaxed text-paper/90">
          Remote roles, worldwide. Support engineering, QA automation, fullstack work. I answer within a day.
        </p>
        <a
          className="font-display mt-4 inline-block text-xl text-cyan underline-offset-4 hover:underline"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
        <p className="mt-2 font-mono text-xs text-fog">{profile.location}, UTC-3</p>
      </div>

      {formEnabled && state !== 'sent' && (
        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="grid gap-1 font-mono text-xs text-fog">
            NAME
            <input name="name" required className={fieldClass} disabled={state === 'sending'} />
          </label>
          <label className="grid gap-1 font-mono text-xs text-fog">
            EMAIL
            <input name="email" type="email" required className={fieldClass} disabled={state === 'sending'} />
          </label>
          <label className="grid gap-1 font-mono text-xs text-fog">
            MESSAGE
            <textarea name="message" required rows={5} className={fieldClass} disabled={state === 'sending'} />
          </label>
          <button
            type="submit"
            disabled={state === 'sending'}
            className="clip-corner font-display mt-1 bg-cyan px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-paper disabled:opacity-60"
          >
            {state === 'sending' ? 'Sending' : 'Send message'}
          </button>
          {state === 'failed' && (
            <p className="text-sm text-amber">Sending failed. The email link on the left works too.</p>
          )}
        </form>
      )}

      {state === 'sent' && (
        <div className="clip-corner border border-cyan/50 bg-panel p-6">
          <p className="font-display text-xl text-cyan">Message sent.</p>
          <p className="mt-1 text-fog">Thanks, I will get back to you soon.</p>
        </div>
      )}
    </div>
  )
}
