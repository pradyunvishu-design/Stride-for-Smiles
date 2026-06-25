import { Filter } from 'lucide-react'
import { useState } from 'react'
import { EventCard } from '../components/EventCard'
import { eventCategories, events } from '../data'
import type { EventCategory } from '../types'

export function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | EventCategory>('all')
  const filteredEvents =
    activeCategory === 'all'
      ? events
      : events.filter((event) => event.categories.includes(activeCategory))

  return (
    <section className="page-section">
      <div className="page-hero compact-hero">
        <p className="eyebrow">Events platform</p>
        <h1>Find your next run, walk, volunteer day, or fundraiser.</h1>
        <p>
          Every card includes what to expect, where to go, what to bring, and which volunteer
          roles are open.
        </p>
      </div>

      <div className="filter-bar" aria-label="Event filters">
        <span>
          <Filter size={18} />
          Filter
        </span>
        {eventCategories.map((category) => (
          <button
            className={activeCategory === category.id ? 'filter-chip active' : 'filter-chip'}
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="event-grid full">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
