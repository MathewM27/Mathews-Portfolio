// References shown in the home References section.
// These are EXAMPLE entries — replace them with real references before publishing.

export type ReferenceGroup = "client" | "mentor" | "friend"

export interface Reference {
  name: string
  /** Job title or what the person does */
  role: string
  /** Sub-category: client / mentor / friend */
  group: ReferenceGroup
  /** The reference / testimonial text */
  quote: string
  /** Optional avatar image path; initials are used when omitted */
  avatar?: string
}

export const references: Reference[] = [
  // ── Clients ──────────────────────────────────────────────────────────────
  {
    name: "Daniel Okoth",
    role: "Director, Lifestyle Aviation Jet",
    group: "client",
    quote:
      "Mathews delivered our charter booking platform exactly as scoped and on schedule. He communicated clearly at every milestone and handled feedback without friction — a genuinely professional engagement from start to finish.",
  },
  {
    name: "Aisha Hassan",
    role: "Product Manager",
    group: "client",
    quote:
      "Working with Mathews was refreshingly transparent. He outlined the plan, kept us informed throughout, and translated technical decisions into terms the whole team could follow and act on.",
  },
  {
    name: "Kevin Mwangi",
    role: "Founder, LakazHub",
    group: "client",
    quote:
      "He took full ownership of the product — from architecture to deployment — and kept us involved without overwhelming us. The platform launched on time and has been stable since day one.",
  },

  // ── Mentors & people I look up to ────────────────────────────────────────
  {
    name: "James Mwaura",
    role: "Engineering Lead",
    group: "mentor",
    quote:
      "I've watched Mathews grow into a deliberate, dependable engineer. He takes real ownership of hard problems and is honest about trade-offs. You can hand him ambiguous work and trust that it will be handled with care.",
  },
  {
    name: "Sarah Njeri",
    role: "Senior Software Engineer",
    group: "mentor",
    quote:
      "What strikes me most is his intellectual honesty. He does not pretend to know things he does not know — he goes and learns them properly, then comes back sharper. That quality is rarer than most people realise.",
  },
  {
    name: "David Kariuki",
    role: "CTO, Tech Startup",
    group: "mentor",
    quote:
      "Mathews approaches engineering with a long-term mindset. He thinks about maintainability, about the team that will read the code after him — that discipline is something most engineers take years to develop.",
  },

  // ── Close friends ─────────────────────────────────────────────────────────
  {
    name: "Brian Kiprono",
    role: "Full-stack Developer",
    group: "friend",
    quote:
      "Mathews is the kind of person who shows up — whether you need help debugging at midnight or just someone to talk through a decision with. He is calm, consistent, and genuinely invested in the people around him.",
  },
  {
    name: "Cynthia Wanjiku",
    role: "UX Designer",
    group: "friend",
    quote:
      "He has this quiet confidence that never tips into arrogance. He listens well, thinks before he speaks, and brings that same intentionality to how he treats people. One of the most grounded people I know.",
  },
  {
    name: "Felix Omondi",
    role: "Product Designer",
    group: "friend",
    quote:
      "Beyond the technical ability, what you notice is the character. He is consistent — the person you see in a meeting is the same person you see after work. Reliable, honest, and good to have in your corner.",
  },
]

/** Ordered sub-categories rendered as carousels inside the References section. */
export const referenceGroups: { id: ReferenceGroup; label: string; sub: string }[] = [
  {
    id: "client",
    label: "Clients",
    sub: "What clients say about the work, delivery, and the experience of working together.",
  },
  {
    id: "mentor",
    label: "Mentors & People I Look Up To",
    sub: "Perspectives from engineers and leaders who have seen how I grow, think, and handle hard problems.",
  },
  {
    id: "friend",
    label: "Close Friends",
    sub: "The personal side — who I am outside of work, as told by the people who know me best.",
  },
]
