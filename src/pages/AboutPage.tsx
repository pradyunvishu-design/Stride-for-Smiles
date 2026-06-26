import { HeartHandshake, Target } from 'lucide-react'
import { values } from '../data'

export function AboutPage() {
  return (
    <section className="page-section">
      <div className="page-hero about-hero">
        <div>
          <p className="eyebrow">About the mission</p>
          <h1>Built by young leaders for a healthier, kinder Katy.</h1>
          <p>
            Stride for Smiles exists to connect fitness, service, and youth leadership.
            The organization creates events where families move together and volunteers
            deliver practical support through school and community partnerships.
          </p>
        </div>
        <div className="about-smile-animation" aria-hidden="true">
          <div className="about-smile-face" />
          <span className="about-step step-one" />
          <span className="about-step step-two" />
          <span className="about-step step-three" />
          <span className="about-chip chip-health">Health</span>
          <span className="about-chip chip-service">Service</span>
          <span className="about-chip chip-leadership">Youth-led</span>
        </div>
      </div>

      <div className="story-grid">
        <article className="story-card">
          <HeartHandshake size={28} />
          <h2>Founder story</h2>
          <p>
            Placeholder founder story: Stride for Smiles began with a simple belief that
            students can make service feel joyful, active, and easy to join. Add the founder's
            real background, school, motivation, and leadership team here before launch.
          </p>
        </article>
        <article className="story-card sunny">
          <Target size={28} />
          <h2>Vision for Katy</h2>
          <p>
            A community where weekend strides, campus drives, and volunteer teams become a
            reliable rhythm of wellness and local care.
          </p>
        </article>
      </div>

      <section className="section-block">
        <div className="section-heading centered">
          <p className="eyebrow">Values</p>
          <h2>What guides every event.</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
