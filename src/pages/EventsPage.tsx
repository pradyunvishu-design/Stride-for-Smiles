import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function EventsPage() {
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Events platform</p>
        <h1>Find your next run, walk, volunteer day, or fundraiser.</h1>
        <p>
          Events are being prepared now. Check back soon or sign up to get notified when
          the next Katy stride opens.
        </p>
      </div>

      <div className="coming-soon-card">
        <h2>Events coming soon</h2>
        <p>Check back or sign up to get notified!</p>
        <Link className="btn btn-primary" to="/volunteer">
          Get notified
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  )
}
