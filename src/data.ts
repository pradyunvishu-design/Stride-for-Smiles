import type {
  ContactInfo,
  DonationTier,
  EventCategory,
  EventItem,
  GalleryItem,
  ImpactStat,
  LegalPageContent,
  Testimonial,
} from './types'

export const contactInfo: ContactInfo = {
  email: 'hello@strideforsmiles.org',
  phone: '(832) 555-0198',
  location: 'Katy, TX',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '/events' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Donate', to: '/donate' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const eventCategories: Array<{ id: 'all' | EventCategory; label: string }> = [
  { id: 'all', label: 'All events' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'fitness', label: 'Fitness' },
  { id: 'fundraiser', label: 'Fundraisers' },
  { id: 'school', label: 'School partners' },
  { id: 'community', label: 'Open community' },
]

export const events: EventItem[] = [
  {
    id: 'sunrise-smile-5k',
    name: 'Sunrise Smile 5K + Walk',
    eventType: 'Run / walk',
    categories: ['fitness', 'fundraiser', 'community'],
    dateISO: '2026-07-18T08:00:00',
    dateLabel: 'July 18, 2026',
    timeLabel: '8:00 AM - 10:30 AM',
    location: 'Mary Jo Peckham Park, Katy',
    difficulty: 'Beginner and family-friendly',
    description:
      'A cheerful morning stride around the park supporting dental hygiene kits and wellness outreach for Katy families.',
    participantTasks: ['Walk or run the marked route', 'Cheer on youth teams', 'Help pack post-race smile kits'],
    bring: ['Water bottle', 'Comfortable shoes', 'Sun protection'],
    volunteerRoles: ['Registration/check-in team', 'Route marshals', 'Water station support'],
    capacity: 140,
    ctaLabel: 'Register for this stride',
  },
  {
    id: 'school-supply-stride',
    name: 'School Supply Sorting Sprint',
    eventType: 'Volunteer',
    categories: ['volunteer', 'school'],
    dateISO: '2026-08-02T13:00:00',
    dateLabel: 'August 2, 2026',
    timeLabel: '1:00 PM - 4:00 PM',
    location: 'Cinco Ranch Community Room',
    difficulty: 'Service hours eligible',
    description:
      'Youth volunteers organize supplies, hygiene items, and encouragement notes for school partner distribution.',
    participantTasks: ['Sort supplies by grade group', 'Create encouragement cards', 'Build delivery boxes'],
    bring: ['Service hour form', 'Closed-toe shoes', 'Reusable water bottle'],
    volunteerRoles: ['Event setup crew', 'School ambassadors', 'Outreach/recruitment team'],
    capacity: 55,
    ctaLabel: 'Volunteer for this event',
  },
  {
    id: 'family-mile-pop-up',
    name: 'Family Mile Pop-Up',
    eventType: 'Fitness challenge',
    categories: ['fitness', 'community'],
    dateISO: '2026-08-16T18:30:00',
    dateLabel: 'August 16, 2026',
    timeLabel: '6:30 PM - 8:00 PM',
    location: 'Katy Boardwalk District',
    difficulty: 'All ages',
    description:
      'A relaxed evening mile with smile stations, stretching, and a youth-led mini wellness challenge.',
    participantTasks: ['Complete one community mile', 'Visit wellness stations', 'Invite a friend or family member'],
    bring: ['Comfortable clothing', 'Phone for QR check-in', 'Positive energy'],
    volunteerRoles: ['Social media/content team', 'Route marshals', 'Water station support'],
    capacity: 120,
    ctaLabel: 'Join the mile',
  },
  {
    id: 'community-smile-kit-build',
    name: 'Community Smile Kit Build',
    eventType: 'Volunteer',
    categories: ['volunteer', 'community'],
    dateISO: '2026-09-05T10:00:00',
    dateLabel: 'September 5, 2026',
    timeLabel: '10:00 AM - 12:30 PM',
    location: 'Katy Vibes Community Hall',
    difficulty: 'Great for first-time volunteers',
    description:
      'A hands-on kit-building event that turns donated supplies into ready-to-deliver smile care bundles.',
    participantTasks: ['Assemble supply kits', 'Write care cards', 'Stage boxes for partner pickup'],
    bring: ['Comfortable clothes', 'Service hour log', 'Optional toothbrush donations'],
    volunteerRoles: ['Event setup crew', 'Fundraising support', 'Registration/check-in team'],
    capacity: 75,
    ctaLabel: 'Build kits with us',
  },
  {
    id: 'student-ambassador-meetup',
    name: 'Student Ambassador Meetup',
    eventType: 'School partnership',
    categories: ['volunteer', 'school'],
    dateISO: '2026-09-19T11:00:00',
    dateLabel: 'September 19, 2026',
    timeLabel: '11:00 AM - 1:00 PM',
    location: 'Katy Library Meeting Room',
    difficulty: 'Middle and high school leaders',
    description:
      'A planning meetup for school ambassadors who want to recruit classmates and launch campus service drives.',
    participantTasks: ['Choose a campus outreach goal', 'Plan a mini-drive', 'Practice peer recruitment'],
    bring: ['School calendar', 'Laptop or notebook', 'Club sponsor contact if available'],
    volunteerRoles: ['School ambassadors', 'Outreach/recruitment team', 'Social media/content team'],
    capacity: 40,
    ctaLabel: 'Become an ambassador',
  },
]

export const impactStats: ImpactStat[] = [
  { label: 'Volunteers engaged', value: 312, suffix: '+', note: 'students, parents, and neighbors' },
  { label: 'Miles walked/run', value: 1240, suffix: '+', note: 'movement turned into momentum' },
  { label: 'Funds raised', value: 18650, prefix: '$', note: 'for supplies and local outreach' },
  { label: 'Communities served', value: 14, suffix: '+', note: 'Katy-area schools and partners' },
]

export const volunteerRoles = [
  'Event setup crew',
  'Registration/check-in team',
  'Water station support',
  'Route marshals',
  'Social media/content team',
  'Outreach/recruitment team',
  'Fundraising support',
  'School ambassadors',
]

export const donationTiers: DonationTier[] = [
  { amount: 10, label: 'Supplies', impact: 'Funds toothbrushes, toothpaste, and care cards.' },
  { amount: 25, label: 'Event support', impact: 'Helps cover water, signage, and check-in materials.' },
  { amount: 50, label: 'Community impact', impact: 'Supports smile kits and outreach for local families.' },
  { amount: 100, label: 'Sponsor level', impact: 'Backs a youth-led stride, kit build, or school drive.' },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'Stride for Smiles makes service feel active, welcoming, and actually fun.',
    name: 'Maya R.',
    role: 'Student volunteer',
    accent: 'sun',
  },
  {
    quote: 'The team brings families together around wellness and kindness in a way Katy needs.',
    name: 'Coach Daniels',
    role: 'Community partner',
    accent: 'grass',
  },
  {
    quote: 'I came for service hours and stayed because everyone was cheering each other on.',
    name: 'Ethan L.',
    role: 'Route marshal',
    accent: 'sky',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    title: 'Start-line smiles',
    category: 'Featured photo',
    description: 'A bright preview of the volunteer energy Stride for Smiles is building around Katy.',
    image: '/volunteer-hero-photo.png',
    tone: 'photo',
  },
  {
    title: 'Water station crew',
    category: 'Volunteer highlight',
    description: 'Students keep participants hydrated, encouraged, and moving through every community mile.',
    metric: '3 route teams',
    tone: 'sky',
  },
  {
    title: 'Campus ambassadors',
    category: 'School partnership',
    description: 'Youth leaders plan outreach drives and recruit friends into service.',
    metric: '8 partner schools',
    tone: 'grass',
  },
  {
    title: 'Community kit table',
    category: 'Outreach',
    description: 'Supply kits, care cards, and local partners turn donations into impact.',
    metric: '500 kits goal',
    tone: 'tangerine',
  },
]

export const values = [
  {
    title: 'Health',
    body: 'Movement is our invitation: walk, run, stretch, breathe, and build confidence together.',
  },
  {
    title: 'Service',
    body: 'Every mile and every volunteer hour connects directly to practical care for neighbors.',
  },
  {
    title: 'Youth leadership',
    body: 'Students are not just helping; they are planning, recruiting, hosting, and leading.',
  },
  {
    title: 'Community engagement',
    body: 'Katy families, schools, and partners all get a place to show up and make something brighter.',
  },
]

export const legalPages: Record<'privacy' | 'terms' | 'liability' | 'photoRelease', LegalPageContent> = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'This placeholder policy explains how Stride for Smiles intends to handle volunteer, donor, and contact information in the MVP site.',
    sections: [
      {
        heading: 'Information we collect',
        body: 'The website may collect names, emails, phone numbers, volunteer preferences, availability, and message details when visitors submit forms.',
      },
      {
        heading: 'How we use it',
        body: 'Information is used to coordinate events, respond to inquiries, track service participation, and improve local outreach.',
      },
      {
        heading: 'MVP storage note',
        body: 'This demo stores submissions in the visitor browser using localStorage. A production launch should move data into a secure backend with access controls.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro:
      'These placeholder terms describe expected use of the Stride for Smiles website and should be reviewed before a public launch.',
    sections: [
      {
        heading: 'Use of the website',
        body: 'Visitors agree to provide accurate information, respect event instructions, and avoid interfering with the website or other participants.',
      },
      {
        heading: 'Program changes',
        body: 'Events, locations, capacities, and volunteer roles may change due to weather, venue needs, safety, or partner availability.',
      },
      {
        heading: 'Nonprofit status',
        body: '501(c)(3) or nonprofit status details should be updated here once confirmed. Until then, donation language should be treated as pending.',
      },
    ],
  },
  liability: {
    title: 'Fitness Event Liability Disclaimer',
    intro:
      'Stride for Smiles events may include walking, running, setup tasks, and outdoor activity. Participants should join only activities appropriate for their health and ability.',
    sections: [
      {
        heading: 'Participation risk',
        body: 'By participating, volunteers and attendees acknowledge that physical activity carries risk, including falls, heat exposure, dehydration, or other injury.',
      },
      {
        heading: 'Personal responsibility',
        body: 'Participants should wear comfortable athletic clothing, bring water, follow route marshal instructions, and stop activity if they feel unwell.',
      },
      {
        heading: 'Emergency contact',
        body: 'The volunteer form includes an optional emergency contact field. Production events should confirm check-in procedures and emergency plans before launch.',
      },
    ],
  },
  photoRelease: {
    title: 'Photo Release Consent',
    intro:
      'Stride for Smiles may photograph or record public event moments to celebrate volunteers, sponsors, and community impact.',
    sections: [
      {
        heading: 'Media use',
        body: 'Photos or videos may be used on the website, social media, newsletters, flyers, and sponsor updates to highlight service and wellness programs.',
      },
      {
        heading: 'Opt-out',
        body: 'Participants who do not want to be photographed should notify event check-in staff before the event begins.',
      },
      {
        heading: 'Youth participants',
        body: 'A production version should include parent or guardian consent requirements for minors and school partner events.',
      },
    ],
  },
}
