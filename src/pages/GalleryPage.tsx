import { Camera, Sparkles } from 'lucide-react'
import { galleryItems } from '../data'

export function GalleryPage() {
  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Media gallery</p>
        <h1>Volunteer highlights, fitness moments, and outreach snapshots.</h1>
        <p>
          A curated media wall for the moments that make the mission feel real: movement,
          service, school leadership, and the simple joy of showing up together.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className={`gallery-card gallery-card-${item.tone}`} key={item.title}>
            {item.image ? (
              <img src={item.image} alt={item.description} />
            ) : (
              <div className="gallery-placeholder" aria-hidden="true">
                <Sparkles size={24} />
                <strong>{item.metric}</strong>
              </div>
            )}
            <div>
              <span>
                <Camera size={16} />
                {item.category}
              </span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
