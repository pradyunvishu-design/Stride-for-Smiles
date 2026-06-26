import { ArrowRight, Building2, CircleDollarSign, HandHeart, ShieldCheck, Sparkles } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { donationTiers } from '../data'
import { appendToCollection, createSubmissionId, storageKeys } from '../lib/storage'
import type { DonationPledge, SponsorInquiry } from '../types'

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(donationTiers[1].amount)
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [donationNote, setDonationNote] = useState('')
  const [pledgeStatus, setPledgeStatus] = useState('')
  const [sponsorStatus, setSponsorStatus] = useState('')
  const [sponsor, setSponsor] = useState({
    company: '',
    contactName: '',
    email: '',
    sponsorshipType: 'Sponsor a run/walk',
    message: '',
  })
  const selectedTier = donationTiers.find((tier) => tier.amount === selectedAmount) ?? donationTiers[1]

  const submitDonationIntent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const pledge: DonationPledge = {
      id: createSubmissionId('donation'),
      submittedAt: new Date().toISOString(),
      donorName: donorName || 'Anonymous supporter',
      email: donorEmail,
      amount: selectedAmount,
      frequency,
      note: donationNote,
    }

    appendToCollection(storageKeys.donations, pledge)
    setPledgeStatus('Donation intent saved to the admin preview. Connect Stripe, PayPal, or Donorbox for live payments.')
    setDonorName('')
    setDonorEmail('')
    setDonationNote('')
  }

  const submitSponsorInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!sponsor.company || !sponsor.contactName || !sponsor.email) {
      setSponsorStatus('Please include company, contact name, and email.')
      return
    }

    const inquiry: SponsorInquiry = {
      id: createSubmissionId('sponsor'),
      submittedAt: new Date().toISOString(),
      ...sponsor,
    }

    appendToCollection(storageKeys.sponsors, inquiry)
    setSponsorStatus('Sponsor inquiry saved. The admin preview now includes this lead.')
    setSponsor({
      company: '',
      contactName: '',
      email: '',
      sponsorshipType: 'Sponsor a run/walk',
      message: '',
    })
  }

  return (
    <section className="page-section donate-page">
      <div className="donate-hero">
        <div>
          <p className="eyebrow">Donation + impact tracking</p>
          <h1>
            <span>Give someone</span>
            <span>the feeling that</span>
            <span>their community</span>
            <span>showed up.</span>
          </h1>
          <p>
            Your support helps turn a Katy walk/run into water stations, smile kits,
            outreach supplies, and student-led service. Choose an amount, see what it
            unlocks, and help the next event feel possible.
          </p>
          <div className="donate-trust-row">
            <span>
              <ShieldCheck size={17} />
              MVP demo: no payment is charged
            </span>
            <span>
              <Sparkles size={17} />
              Real checkout can be connected later
            </span>
          </div>
          <div className="button-row donate-hero-actions">
            <a className="btn btn-primary btn-large" href="#donation-form">
              Choose a donation
              <ArrowRight size={17} />
            </a>
            <a className="btn btn-secondary" href="#sponsor-form">
              Sponsor a stride
            </a>
          </div>
        </div>
        <img src="/donate-impact-photo.png" alt="A donor handing care supplies to youth volunteers at a sunny community event" />
      </div>

      <div className="donation-layout">
        <form id="donation-form" className="form-card donation-card" onSubmit={submitDonationIntent}>
          <div className="form-heading">
            <CircleDollarSign size={24} />
            <div>
              <h2>Choose your impact</h2>
              <p>One-time or monthly support for Katy outreach.</p>
            </div>
          </div>

          <div className="segmented-control" aria-label="Donation frequency">
            <button
              type="button"
              className={frequency === 'one-time' ? 'active' : ''}
              onClick={() => setFrequency('one-time')}
            >
              One-time
            </button>
            <button
              type="button"
              className={frequency === 'monthly' ? 'active' : ''}
              onClick={() => setFrequency('monthly')}
            >
              Monthly
            </button>
          </div>

          <div className="tier-grid">
            {donationTiers.map((tier) => (
              <button
                className={selectedAmount === tier.amount ? 'tier-card active' : 'tier-card'}
                key={tier.amount}
                type="button"
                onClick={() => setSelectedAmount(tier.amount)}
              >
                <strong>${tier.amount}</strong>
                <span>{tier.label}</span>
                <p>{tier.impact}</p>
                {tier.amount === 25 && <em>Most people start here</em>}
              </button>
            ))}
          </div>

          <div className="selected-impact">
            <div>
              <span>${selectedAmount}</span>
              <strong>{selectedTier.label}</strong>
            </div>
            <p>{selectedTier.impact}</p>
            <div className="impact-meter" aria-label="Impact meter">
              <span style={{ width: `${Math.min(100, selectedAmount)}%` }} />
            </div>
          </div>

          <div className="form-grid">
            <label>
              Name
              <input value={donorName} onChange={(event) => setDonorName(event.target.value)} />
            </label>
            <label>
              Email
              <input type="email" value={donorEmail} onChange={(event) => setDonorEmail(event.target.value)} />
            </label>
            <label className="full-field">
              Note
              <textarea value={donationNote} onChange={(event) => setDonationNote(event.target.value)} />
            </label>
          </div>

          <button className="btn btn-primary" type="submit">
            Record ${selectedAmount} {frequency} intent
            <ArrowRight size={17} />
          </button>
          {pledgeStatus && <p className="form-status">{pledgeStatus}</p>}
        </form>

        <form id="sponsor-form" className="form-card sponsor-card" onSubmit={submitSponsorInquiry}>
          <div className="form-heading">
            <Building2 size={24} />
            <div>
              <h2>Corporate sponsorship</h2>
              <p>Sponsor a run/walk, water station, kit build, or student team.</p>
            </div>
          </div>

          <label>
            Company
            <input
              value={sponsor.company}
              onChange={(event) => setSponsor((current) => ({ ...current, company: event.target.value }))}
            />
          </label>
          <label>
            Contact name
            <input
              value={sponsor.contactName}
              onChange={(event) => setSponsor((current) => ({ ...current, contactName: event.target.value }))}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={sponsor.email}
              onChange={(event) => setSponsor((current) => ({ ...current, email: event.target.value }))}
            />
          </label>
          <label>
            Sponsorship type
            <select
              value={sponsor.sponsorshipType}
              onChange={(event) => setSponsor((current) => ({ ...current, sponsorshipType: event.target.value }))}
            >
              <option>Sponsor a run/walk</option>
              <option>Water station sponsor</option>
              <option>Smile kit sponsor</option>
              <option>School ambassador sponsor</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              value={sponsor.message}
              onChange={(event) => setSponsor((current) => ({ ...current, message: event.target.value }))}
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Send sponsor inquiry
          </button>
          {sponsorStatus && <p className="form-status">{sponsorStatus}</p>}
        </form>
      </div>

      <div className="impact-callout donation-note">
        <HandHeart size={28} />
        <div>
          <h2>Transparency note</h2>
          <p>
            Donation language, tax deductibility, and 501(c)(3) status should be updated when
            the organization's legal setup is confirmed.
          </p>
        </div>
      </div>
    </section>
  )
}
