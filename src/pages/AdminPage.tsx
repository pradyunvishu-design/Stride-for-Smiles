import { BarChart3, CalendarDays, Download, Mail, Megaphone, Users } from 'lucide-react'
import { type CSSProperties, type FormEvent, useEffect, useMemo, useState } from 'react'
import { events } from '../data'
import { readCollection, storageKeys } from '../lib/storage'
import type { ContactMessage, DonationPledge, SponsorInquiry, VolunteerSignup } from '../types'

export function AdminPage() {
  const [volunteers, setVolunteers] = useState<VolunteerSignup[]>([])
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [sponsors, setSponsors] = useState<SponsorInquiry[]>([])
  const [donations, setDonations] = useState<DonationPledge[]>([])
  const [blast, setBlast] = useState({ audience: 'All volunteers', subject: '', message: '' })
  const [blastStatus, setBlastStatus] = useState('')

  useEffect(() => {
    setVolunteers(readCollection<VolunteerSignup>(storageKeys.volunteers))
    setContacts(readCollection<ContactMessage>(storageKeys.contacts))
    setSponsors(readCollection<SponsorInquiry>(storageKeys.sponsors))
    setDonations(readCollection<DonationPledge>(storageKeys.donations))
  }, [])

  const pledgedTotal = useMemo(
    () => donations.reduce((total, pledge) => total + pledge.amount, 0),
    [donations],
  )

  const submitBlast = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!blast.subject || !blast.message) {
      setBlastStatus('Add a subject and message before previewing the blast.')
      return
    }
    setBlastStatus(`Email blast preview prepared for ${blast.audience}. No email was sent in the MVP.`)
  }

  return (
    <section className="page-section admin-page">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Admin preview</p>
        <h1>Operations dashboard for events, volunteers, donations, and outreach.</h1>
        <p>
          This local dashboard proves the workflows. Production should add authentication,
          database storage, permissions, and real email/payment integrations.
        </p>
      </div>

      <div className="admin-stats">
        <div>
          <Users size={24} />
          <strong>{volunteers.length}</strong>
          <span>Volunteer signups</span>
        </div>
        <div>
          <CalendarDays size={24} />
          <strong>{events.length}</strong>
          <span>Seeded events</span>
        </div>
        <div>
          <BarChart3 size={24} />
          <strong>${pledgedTotal.toLocaleString()}</strong>
          <span>Donation intent</span>
        </div>
        <div>
          <Megaphone size={24} />
          <strong>{contacts.length + sponsors.length}</strong>
          <span>Follow-ups</span>
        </div>
      </div>

      <div className="admin-grid">
        <article className="admin-card">
          <h2>Event creation/editing</h2>
          <p>Seeded event data is ready to move into a real CMS or database table.</p>
          <div className="mini-list">
            {events.map((event) => (
              <span key={event.id}>
                {event.name}
                <small>{event.dateLabel}</small>
              </span>
            ))}
          </div>
        </article>

        <article className="admin-card">
          <h2>Volunteer management</h2>
          <div className="mini-list">
            {volunteers.length ? (
              volunteers.map((volunteer) => (
                <span key={volunteer.id}>
                  {volunteer.name}
                  <small>{volunteer.preferredRole}</small>
                </span>
              ))
            ) : (
              <p>No volunteer signups yet. Submit the volunteer form to test this list.</p>
            )}
          </div>
        </article>

        <article className="admin-card">
          <h2>Donation tracking</h2>
          <div className="mini-list">
            {donations.length ? (
              donations.map((donation) => (
                <span key={donation.id}>
                  ${donation.amount} {donation.frequency}
                  <small>{donation.donorName}</small>
                </span>
              ))
            ) : (
              <p>No donation intent recorded yet.</p>
            )}
          </div>
        </article>

        <article className="admin-card">
          <h2>Attendance tracking</h2>
          <p>
            QR check-in can record arrival time, role, verified hours, and certificate status
            once real accounts are connected.
          </p>
          <button className="btn btn-secondary" type="button">
            <Download size={17} />
            Certificate preview
          </button>
        </article>

        <form className="admin-card email-card" onSubmit={submitBlast}>
          <div className="form-heading">
            <Mail size={23} />
            <h2>Email blast system</h2>
          </div>
          <label>
            Audience
            <select
              value={blast.audience}
              onChange={(event) => setBlast((current) => ({ ...current, audience: event.target.value }))}
            >
              <option>All volunteers</option>
              <option>School ambassadors</option>
              <option>Event participants</option>
              <option>Sponsors</option>
            </select>
          </label>
          <label>
            Subject
            <input
              value={blast.subject}
              onChange={(event) => setBlast((current) => ({ ...current, subject: event.target.value }))}
            />
          </label>
          <label>
            Message
            <textarea
              value={blast.message}
              onChange={(event) => setBlast((current) => ({ ...current, message: event.target.value }))}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Preview blast
          </button>
          {blastStatus && <p className="form-status">{blastStatus}</p>}
        </form>

        <article className="admin-card">
          <h2>Analytics</h2>
          <p>
            Visitor analytics, conversion rates, event capacity, and repeat volunteer rate are
            placeholders for a production analytics provider.
          </p>
          <div className="progress-stack" aria-label="Analytics preview">
            <span style={{ '--bar': '78%' } as CSSProperties}>Volunteer conversion</span>
            <span style={{ '--bar': '61%' } as CSSProperties}>Event capacity</span>
            <span style={{ '--bar': '43%' } as CSSProperties}>Sponsor pipeline</span>
          </div>
        </article>
      </div>
    </section>
  )
}
