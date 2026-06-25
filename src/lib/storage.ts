export const storageKeys = {
  volunteers: 'stride-volunteer-signups',
  contacts: 'stride-contact-messages',
  sponsors: 'stride-sponsor-inquiries',
  donations: 'stride-donation-pledges',
} as const

export function readCollection<T>(key: string): T[] {
  if (typeof window === 'undefined') {
    return []
  }

  const raw = window.localStorage.getItem(key)
  if (!raw) {
    return []
  }

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as T[]) : []
  } catch {
    return []
  }
}

export function appendToCollection<T>(key: string, item: T) {
  const current = readCollection<T>(key)
  window.localStorage.setItem(key, JSON.stringify([item, ...current]))
}

export function createSubmissionId(prefix: string) {
  const randomPart = Math.random().toString(36).slice(2, 8)
  return `${prefix}-${Date.now()}-${randomPart}`
}
