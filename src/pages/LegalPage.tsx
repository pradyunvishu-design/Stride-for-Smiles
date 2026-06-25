import { ShieldCheck } from 'lucide-react'
import { legalPages } from '../data'

interface LegalPageProps {
  pageId: keyof typeof legalPages
}

export function LegalPage({ pageId }: LegalPageProps) {
  const page = legalPages[pageId]

  return (
    <section className="page-section legal-page">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Trust and safety</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>

      <div className="legal-card">
        <ShieldCheck size={30} />
        {page.sections.map((section) => (
          <article key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
