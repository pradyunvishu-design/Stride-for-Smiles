import { Mail, MapPinned, Phone, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { contactInfo } from '../data'
import { appendToCollection, createSubmissionId, storageKeys } from '../lib/storage'
import type { ContactMessage } from '../types'

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('Please complete every contact field.')
      return
    }

    const message: ContactMessage = {
      id: createSubmissionId('contact'),
      submittedAt: new Date().toISOString(),
      ...form,
    }

    appendToCollection(storageKeys.contacts, message)
    setStatus('Message saved to the admin preview.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Questions, partnerships, school events, or sponsorships?</h1>
        <p>Send a note and the admin preview will capture it locally for follow-up.</p>
      </div>

      <div className="contact-layout">
        <form className="form-card" onSubmit={submitMessage}>
          <div className="form-heading">
            <Send size={24} />
            <div>
              <h2>Contact form</h2>
              <p>Use this for volunteer questions, partner ideas, or event requests.</p>
            </div>
          </div>
          <label>
            Name
            <input value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            />
          </label>
          <label>
            Subject
            <input
              value={form.subject}
              onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
            />
          </label>
          <label>
            Message
            <textarea
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>

        <aside className="contact-card">
          <h2>Reach Stride for Smiles</h2>
          <a href={`mailto:${contactInfo.email}`}>
            <Mail size={18} />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
            <Phone size={18} />
            {contactInfo.phone}
          </a>
          <span>
            <MapPinned size={18} />
            {contactInfo.location}
          </span>
          <p>
            Contact details are editable placeholders for the MVP. Replace them with the
            official nonprofit inbox, phone, and social channels before launch.
          </p>
        </aside>
      </div>
    </section>
  )
}
