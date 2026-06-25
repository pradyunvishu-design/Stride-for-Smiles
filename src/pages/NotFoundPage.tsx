import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Wrong turn</p>
        <h1>This route needs a marshal.</h1>
        <p>The page you are looking for is not available.</p>
        <Link className="btn btn-primary" to="/">
          Return home
        </Link>
      </div>
    </section>
  )
}
