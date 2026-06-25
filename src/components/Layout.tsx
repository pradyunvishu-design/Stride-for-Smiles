import { Mail, Menu, Smile, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { contactInfo, navItems } from '../data'

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Smile size={28} strokeWidth={2.4} />
          </span>
          <span>
            <strong>Stride for Smiles</strong>
            <small>Katy, TX</small>
          </span>
        </Link>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/volunteer" onClick={() => setIsMenuOpen(false)}>
            Join a Volunteer Event
          </Link>
        </nav>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Ready for the next stride?</p>
            <h2>Help Katy move with purpose.</h2>
          </div>
          <div className="button-row">
            <Link className="btn btn-primary" to="/volunteer">
              Volunteer
            </Link>
            <Link className="btn btn-secondary" to="/donate">
              Donate
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <Link className="brand footer-brand" to="/">
              <span className="brand-mark" aria-hidden="true">
                <Smile size={26} />
              </span>
              <span>
                <strong>Stride for Smiles</strong>
                <small>Fitness, service, and brighter days.</small>
              </span>
            </Link>
          </div>

          <div className="footer-links" aria-label="Footer navigation">
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/admin">Admin preview</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/liability">Liability</Link>
            <Link to="/photo-release">Photo release</Link>
          </div>

          <div className="footer-contact">
            <a href={`mailto:${contactInfo.email}`}>
              <Mail size={16} />
              {contactInfo.email}
            </a>
            <div className="social-row" aria-label="Social links">
              <a href={contactInfo.instagram} aria-label="Instagram">
                <span>IG</span>
              </a>
              <a href={contactInfo.facebook} aria-label="Facebook">
                <span>FB</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
