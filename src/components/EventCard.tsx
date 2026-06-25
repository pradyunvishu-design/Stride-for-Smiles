import { ArrowRight, CalendarDays, ClipboardCheck, MapPin, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { EventItem } from '../types'

interface EventCardProps {
  event: EventItem
  compact?: boolean
}

export function EventCard({ event, compact = false }: EventCardProps) {
  return (
    <article className={`event-card ${compact ? 'event-card-compact' : ''}`}>
      <div className="card-kicker">
        <span>{event.eventType}</span>
        <span>{event.difficulty}</span>
      </div>

      <h3>{event.name}</h3>
      <p>{event.description}</p>

      <div className="event-meta">
        <span>
          <CalendarDays size={17} />
          {event.dateLabel}, {event.timeLabel}
        </span>
        <span>
          <MapPin size={17} />
          {event.location}
        </span>
        <span>
          <Users size={17} />
          Capacity {event.capacity}
        </span>
      </div>

      {!compact && (
        <div className="event-details-grid">
          <div>
            <h4>What you'll do</h4>
            <ul>
              {event.participantTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>What to bring</h4>
            <ul>
              {event.bring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="role-cloud" aria-label="Volunteer roles">
        <ClipboardCheck size={17} />
        {event.volunteerRoles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </div>

      <Link className="text-link" to={`/volunteer?event=${event.id}`}>
        {event.ctaLabel}
        <ArrowRight size={17} />
      </Link>
    </article>
  )
}
