export type EventCategory = 'volunteer' | 'fitness' | 'fundraiser' | 'school' | 'community'

export interface EventItem {
  id: string
  name: string
  eventType: string
  categories: EventCategory[]
  dateISO: string
  dateLabel: string
  timeLabel: string
  location: string
  difficulty: string
  description: string
  participantTasks: string[]
  bring: string[]
  volunteerRoles: string[]
  capacity: number
  ctaLabel: string
}

export interface ImpactStat {
  label: string
  value: number
  prefix?: string
  suffix?: string
  note: string
}

export interface DonationTier {
  amount: number
  label: string
  impact: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  accent: 'sun' | 'sky' | 'grass' | 'tangerine' | 'lilac'
}

export interface GalleryItem {
  title: string
  category: string
  description: string
  image?: string
  metric?: string
  tone: 'photo' | 'sun' | 'sky' | 'grass' | 'tangerine'
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  instagram: string
  facebook: string
}

export interface VolunteerSignup {
  id: string
  submittedAt: string
  name: string
  email: string
  phone: string
  ageGroup: string
  school: string
  availability: string
  preferredRole: string
  selectedEvent: string
  emergencyContact: string
  liabilityConsent: boolean
  photoConsent: boolean
}

export interface ContactMessage {
  id: string
  submittedAt: string
  name: string
  email: string
  subject: string
  message: string
}

export interface SponsorInquiry {
  id: string
  submittedAt: string
  company: string
  contactName: string
  email: string
  sponsorshipType: string
  message: string
}

export interface DonationPledge {
  id: string
  submittedAt: string
  donorName: string
  email: string
  amount: number
  frequency: 'one-time' | 'monthly'
  note: string
}

export interface LegalPageContent {
  title: string
  intro: string
  sections: Array<{
    heading: string
    body: string
  }>
}
