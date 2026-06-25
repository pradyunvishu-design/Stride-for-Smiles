# Stride for Smiles

A playful React/Vite MVP for a Katy-based nonprofit that combines fitness events,
volunteer recruitment, donation intent tracking, and community impact storytelling.

## Features

- Multi-page public site for Home, Events, Volunteer, Donate, About, Gallery, Contact, Admin, and legal pages.
- Event filters, event cards, volunteer signup, contact form, donation intent, and sponsor inquiry flows.
- Frontend-only MVP persistence using `localStorage` keys:
  - `stride-volunteer-signups`
  - `stride-contact-messages`
  - `stride-sponsor-inquiries`
  - `stride-donation-pledges`
- Admin preview dashboard for seeded events plus local submissions.
- Sunny yellow-and-white visual system with original smiley/running illustrations and reduced-motion-safe animation.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run build
npm run lint
```

The current implementation is a polished frontend MVP. Real payments, database storage,
admin authentication, email delivery, and legal nonprofit/tax language should be connected
before public launch.
