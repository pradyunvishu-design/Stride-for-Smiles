import { ArrowRight, Footprints, Heart, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CountUp } from '../components/CountUp'
import { donationTiers, impactStats, testimonials } from '../data'

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="floating-smile smile-one" aria-hidden="true" />
        <div className="floating-smile smile-two" aria-hidden="true" />
        <div className="floating-star star-one" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">Katy youth, families, and neighbors in motion</p>
          <h1>
            <span className="hero-headline-main">Moving together</span>
            <span className="hero-headline-main">for stronger communities,</span>
            <span className="hero-headline-accent">healthier lives, and brighter futures.</span>
          </h1>
          <p className="hero-copy">
            A youth-powered Katy nonprofit turning walk/run events into fitness,
            community service, and real local impact. Youth and families moving
            together for stronger communities.
          </p>
          <div className="button-row hero-actions">
            <Link className="btn btn-primary btn-large" to="/donate">
              Donate to the next stride
              <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-primary" to="/volunteer">
              Join a Volunteer Event
              <ArrowRight size={18} />
            </Link>
            <Link className="btn btn-secondary" to="/events">
              Register for a Stride
            </Link>
          </div>
          <div className="trust-row" aria-label="Trust indicators">
            <span>
              <ShieldCheck size={17} />
              Youth-led • Service-hour friendly • Katy focused
            </span>
          </div>
        </div>

        <figure className="hero-photo-card">
          <img src="/why-stride-walk-photo.png" alt="Youth and family volunteers walking together at a sunny community stride event" />
          <figcaption>
            <strong>312+</strong>
            volunteers already moving the mission forward
          </figcaption>
          <div className="hero-donation-chip" aria-hidden="true">
            <span>$25</span>
            event support
          </div>
        </figure>
      </section>

      <section className="proof-strip">
        <span>Walk/run events • School ambassadors • Service hours • Family-friendly volunteering</span>
      </section>

      <section className="mission-panel">
        <div>
          <p className="eyebrow">The mission, in one breath</p>
          <h2>Fitness becomes the invitation. Service becomes the habit.</h2>
        </div>
        <p>
          Stride for Smiles gives Katy students and families a clear way to show up:
          move together, serve together, and create real community impact.
          The site is built to make the next action obvious, whether someone has ten
          dollars, two hours, or a whole school club ready to help.
        </p>
      </section>

      <section className="donor-psych-section">
        <div className="section-heading">
          <p className="eyebrow">Your gift becomes visible</p>
          <h2>Small donations feel bigger when people can picture the moment they create.</h2>
          <Link className="text-link" to="/donate">
            Choose your impact
            <ArrowRight size={17} />
          </Link>
        </div>
        <div className="donor-grid">
          {donationTiers.map((tier) => (
            <Link className="donor-card" key={tier.amount} to="/donate">
              <span>${tier.amount}</span>
              <strong>{tier.label}</strong>
              <p>{tier.impact}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Upcoming events</p>
          <h2>Pick a stride, bring a friend.</h2>
          <Link className="text-link" to="/events">
            View all events
            <ArrowRight size={17} />
          </Link>
        </div>
        <div className="coming-soon-card">
          <h3>Events coming soon</h3>
          <p>Check back or sign up to get notified!</p>
          <Link className="btn btn-primary" to="/volunteer">
            Get notified
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="impact-section">
        <div className="section-heading centered">
          <p className="eyebrow">Impact dashboard</p>
          <h2>Every mile adds up.</h2>
        </div>
        <div className="stats-grid">
          {impactStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </strong>
              <span>{stat.label}</span>
              <p>{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-photo-stack">
          <img src="/why-stride-walk-photo.png" alt="Volunteers and families walking together at a sunny community stride event" />
        </div>
        <div>
          <p className="eyebrow">Why we stride</p>
          <h2>Health, service, youth leadership, and community engagement belong on the same path.</h2>
          <p>
            A stride is more than a route. It is a reason for young leaders to organize,
            families to move together, and local partners to create real community impact.
            The playful energy is intentional: joy makes service easier to start and
            easier to return to.
          </p>
          <div className="feature-list">
            <span>
              <Heart size={18} />
              Youth-friendly service hours
            </span>
            <span>
              <Footprints size={18} />
              Beginner-friendly movement
            </span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading centered">
          <p className="eyebrow">Community voices</p>
          <h2>Cheerful proof from the route.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className={`avatar-dot ${testimonial.accent}`} aria-hidden="true" />
              <p>"{testimonial.quote}"</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
