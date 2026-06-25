import { Check, Clock3, ShieldCheck, UserRoundCheck } from 'lucide-react'
import { type FormEvent, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { events, volunteerRoles } from '../data'
import { appendToCollection, createSubmissionId, storageKeys } from '../lib/storage'
import type { VolunteerSignup } from '../types'

const emptySignup = {
  name: '',
  email: '',
  phone: '',
  ageGroup: '',
  school: '',
  availability: '',
  preferredRole: '',
  selectedEvent: '',
  emergencyContact: '',
  liabilityConsent: false,
  photoConsent: false,
}

export function VolunteerPage() {
  const [searchParams] = useSearchParams()
  const eventId = searchParams.get('event') ?? ''
  const selectedEvent = useMemo(() => events.find((event) => event.id === eventId), [eventId])
  const [form, setForm] = useState({ ...emptySignup, selectedEvent: eventId })
  const [status, setStatus] = useState('')

  const setField = (field: keyof typeof emptySignup, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.phone || !form.availability || !form.preferredRole) {
      setStatus('Please complete your name, email, phone, availability, and preferred role.')
      return
    }

    if (!form.liabilityConsent || !form.photoConsent) {
      setStatus('Please acknowledge the liability and photo release consent checkboxes.')
      return
    }

    const signup: VolunteerSignup = {
      id: createSubmissionId('volunteer'),
      submittedAt: new Date().toISOString(),
      ...form,
    }

    appendToCollection(storageKeys.volunteers, signup)
    setStatus('You are on the volunteer list. The admin preview now includes this signup.')
    setForm({ ...emptySignup, selectedEvent: eventId })
  }

  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Volunteer hub</p>
        <h1>Choose a role, log service hours, and help the day run bright.</h1>
        <p>
          Youth, families, and school groups can plug into setup, check-in, water stations,
          outreach, content, fundraising, and route support.
        </p>
      </div>

      <div className="volunteer-layout">
        <div className="role-panel">
          <h2>Volunteer roles</h2>
          <div className="role-list">
            {volunteerRoles.map((role) => (
              <span key={role}>
                <Check size={16} />
                {role}
              </span>
            ))}
          </div>

          <div className="requirements-card">
            <h3>Requirements and check-in</h3>
            <ul>
              <li>Minimum age guidance is pending; youth volunteers should bring guardian approval.</li>
              <li>Wear athletic or comfortable clothing and closed-toe shoes.</li>
              <li>Check in 15 minutes before your shift for role assignment and service hour tracking.</li>
              <li>Bring any school service-hour form that needs a signature.</li>
            </ul>
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-heading">
            <UserRoundCheck size={24} />
            <div>
              <h2>Volunteer signup</h2>
              {selectedEvent && <p>Preselected event: {selectedEvent.name}</p>}
            </div>
          </div>

          <div className="form-grid">
            <label>
              Name
              <input value={form.name} onChange={(event) => setField('name', event.target.value)} />
            </label>
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(event) => setField('email', event.target.value)}
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => setField('phone', event.target.value)}
              />
            </label>
            <label>
              Age group
              <select value={form.ageGroup} onChange={(event) => setField('ageGroup', event.target.value)}>
                <option value="">Prefer not to say</option>
                <option>Under 13</option>
                <option>13-15</option>
                <option>16-18</option>
                <option>Adult</option>
              </select>
            </label>
            <label>
              School
              <input value={form.school} onChange={(event) => setField('school', event.target.value)} />
            </label>
            <label>
              Availability
              <input
                placeholder="Saturday mornings, after school..."
                value={form.availability}
                onChange={(event) => setField('availability', event.target.value)}
              />
            </label>
            <label>
              Preferred role
              <select
                value={form.preferredRole}
                onChange={(event) => setField('preferredRole', event.target.value)}
              >
                <option value="">Choose a role</option>
                {volunteerRoles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <label>
              Event
              <select
                value={form.selectedEvent}
                onChange={(event) => setField('selectedEvent', event.target.value)}
              >
                <option value="">General volunteer interest</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="full-field">
              Emergency contact
              <input
                placeholder="Name and phone number"
                value={form.emergencyContact}
                onChange={(event) => setField('emergencyContact', event.target.value)}
              />
            </label>
          </div>

          <label className="check-row">
            <input
              type="checkbox"
              checked={form.liabilityConsent}
              onChange={(event) => setField('liabilityConsent', event.target.checked)}
            />
            I understand fitness and event participation may involve physical activity.
          </label>
          <label className="check-row">
            <input
              type="checkbox"
              checked={form.photoConsent}
              onChange={(event) => setField('photoConsent', event.target.checked)}
            />
            I acknowledge the photo release placeholder for event media.
          </label>

          <button className="btn btn-primary" type="submit">
            Submit volunteer signup
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>

      <div className="dashboard-preview">
        <div>
          <Clock3 size={24} />
          <h3>Hours tracking</h3>
          <p>Service hours can be recorded by event, role, and check-in status in the admin preview.</p>
        </div>
        <div>
          <ShieldCheck size={24} />
          <h3>Certificates</h3>
          <p>Future certificates can use the same signup data once a real backend is connected.</p>
        </div>
      </div>
    </section>
  )
}
