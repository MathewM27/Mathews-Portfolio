// Single source of truth for the projects showcase.
// Imported by the home section (ProjectShowcase) and the detail pages.

export type Tier = "flagship" | "distributed" | "fullstack"
export type ProjectStatus = "completed" | "in-development" | "planned"

export interface ProjectStat {
  value: string
  label: string
}

export interface GalleryShot {
  src: string
  caption: string
  /** Intrinsic dimensions of the processed image, used for layout aspect ratio */
  w: number
  h: number
  /** True when the screenshot already includes a device frame (phone / laptop mockup) */
  framed: boolean
}

export interface ProjectGallery {
  label: string
  kind: "desktop" | "mobile"
  shots: GalleryShot[]
}

export interface Project {
  slug: string
  tier: Tier
  name: string
  tagline: string
  /** Short label chips, e.g. ["Backend", "IoT", "Go"] */
  badges?: string[]
  /** One-liner used on the showcase cards */
  summary: string
  /** Paragraphs used on the detail page */
  description: string[]
  stack: string[]
  stats?: ProjectStat[]
  /** "What it demonstrates" engineering bullets */
  demonstrates?: string[]
  /** Data-flow description rendered as a styled diagram */
  architecture?: string
  /** Path to a static architecture diagram image (SVG/PNG) shown in the case-study hero */
  architectureImage?: string
  status: ProjectStatus
  github?: string
  live?: string
  images: string[]
  /** Grouped product screenshots rendered on the case-study page */
  gallery?: ProjectGallery[]
}

const GITHUB = "https://github.com/MathewM27"

export const projects: Project[] = [
  // ── Tier 1 — Flagship System ──────────────────────────────────────────────
  {
    slug: "alebus",
    tier: "flagship",
    name: "Alebus",
    tagline: "Real-time public transport intelligence platform",
    badges: ["Backend", "IoT", "Go"],
    summary:
      "Real-time public transport intelligence platform — GPS telemetry streamed, processed, and fanned out to commuters and operators in under a second.",
    description: [
      "Alebus turns raw GPS telemetry from transit vehicles into live, actionable intelligence. Location data streams from on-vehicle GPS devices into an EMQX MQTT broker, is processed by a Go backend, and is fanned out through Redis Pub/Sub and WebSocket to a commuter mobile app and an operator dashboard.",
      "The system is built with Domain-Driven Design across five bounded contexts and ships as seven independently runnable Go binaries, with a full observability stack wired in from day one.",
    ],
    architecture:
      "GPS devices → EMQX → Go backend → Redis Pub/Sub → WebSocket → Commuter app + Operator dashboard",
    stack: [
      "Go",
      "PostgreSQL + PostGIS",
      "Redis",
      "MQTT / EMQX",
      "WebSocket",
      "Docker",
      "Prometheus",
      "Grafana",
      "React Native",
      "Next.js",
    ],
    stats: [
      { value: "760ms", label: "Median end-to-end latency" },
      { value: "10,000", label: "Concurrent WebSocket connections (tested)" },
      { value: "5", label: "DDD bounded contexts" },
      { value: "7", label: "Runnable Go binaries" },
    ],
    demonstrates: [
      "~760ms median end-to-end latency",
      "10,000 concurrent WebSocket connections",
      "Domain-Driven Design across 5 bounded contexts",
      "7 independently runnable Go binaries",
      "Full observability stack (Prometheus + Grafana)",
    ],
    architectureImage: "/alebus_system_architecture.svg",
    status: "in-development",
    github: "https://github.com/MathewM27/alebus-public",
    images: [],
    gallery: [
      {
        label: "Operator dashboard",
        kind: "desktop",
        shots: [
          {
            src: "/alebus/dashboard-overview.png",
            caption: "Live fleet map",
            w: 1526,
            h: 1018,
            framed: true,
          },
          {
            src: "/alebus/dashboard-fleet.png",
            caption: "Route monitoring",
            w: 1445,
            h: 964,
            framed: true,
          },
          {
            src: "/alebus/dashboard-routes.png",
            caption: "Route & stop registry",
            w: 1869,
            h: 835,
            framed: false,
          },
          {
            src: "/alebus/dashboard-drivers.png",
            caption: "Operational events",
            w: 1526,
            h: 1018,
            framed: true,
          },
        ],
      },
      {
        label: "Commuter app",
        kind: "mobile",
        shots: [
          { src: "/alebus/sign-in.png", caption: "Sign in", w: 925, h: 1825, framed: true },
          { src: "/alebus/home.png", caption: "Home", w: 925, h: 1825, framed: true },
          {
            src: "/alebus/home-search.png",
            caption: "Find your bus",
            w: 925,
            h: 1825,
            framed: true,
          },
          {
            src: "/alebus/journey-tracking.png",
            caption: "Live journey tracking",
            w: 925,
            h: 1825,
            framed: true,
          },
          { src: "/alebus/app-profile.png", caption: "Account", w: 925, h: 1825, framed: true },
        ],
      },
    ],
  },

  // ── Tier 2 — Distributed Systems Engineering ──────────────────────────────
  {
    slug: "go-concurrency-patterns",
    tier: "distributed",
    name: "Go Concurrency Patterns",
    tagline: "Reference implementations of core Go concurrency primitives",
    summary: "Reference implementations of core Go concurrency primitives.",
    description: [
      "A reference library of production-grade Go concurrency primitives — each implemented, tested, and documented as a standalone, runnable pattern.",
    ],
    demonstrates: ["Worker pools", "Pipeline pattern", "Circuit breaker", "Rate limiter"],
    stack: ["Go"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "distributed-task-queue",
    tier: "distributed",
    name: "Distributed Task Queue",
    tagline: "Postgres-backed job queue with retries, dead-letter handling and a worker pool",
    summary:
      "Postgres-backed job queue with SKIP LOCKED, retry, dead-letter handling and a worker pool.",
    description: [
      "A durable job queue built on PostgreSQL, using SELECT … FOR UPDATE SKIP LOCKED for safe concurrent dequeue, with retry policies, a dead-letter queue, and a worker pool that shuts down gracefully.",
    ],
    demonstrates: ["At-least-once delivery", "Fault tolerance", "Graceful shutdown", "Backpressure"],
    stack: ["Go", "PostgreSQL"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "kafka-event-pipeline",
    tier: "distributed",
    name: "Kafka Event Pipeline",
    tagline: "Multi-consumer event streaming system with schema registry and DLQ",
    summary: "Multi-consumer event streaming system with a schema registry and dead-letter queue.",
    description: [
      "An event streaming pipeline built on Kafka with multiple consumer groups, a schema registry for safe contract evolution, and a dead-letter queue for poison messages — instrumented for consumer lag monitoring.",
    ],
    demonstrates: [
      "Consumer group offsets",
      "Schema evolution",
      "At-least-once delivery",
      "Consumer lag monitoring",
    ],
    stack: ["Go", "Kafka", "Protobuf"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "url-shortener",
    tier: "distributed",
    name: "URL Shortener",
    tagline: "High-throughput redirect service with caching and an analytics pipeline",
    summary: "High-throughput redirect service with caching, an analytics pipeline and rate limiting.",
    description: [
      "A high-throughput URL shortener focused on the redirect hot path — cache-aside reads from Redis, an asynchronous write pipeline for click analytics, and rate limiting to protect the service.",
    ],
    demonstrates: ["Cache-aside pattern", "Hot path optimisation", "Async write pipeline"],
    stack: ["Go", "Redis", "PostgreSQL"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "grpc-services",
    tier: "distributed",
    name: "gRPC Services",
    tagline: "Synchronous inter-service communication with streaming RPC",
    summary: "Synchronous inter-service communication with streaming RPC.",
    description: [
      "A set of gRPC services exploring synchronous inter-service communication — strongly-typed contracts, interceptor chains for cross-cutting concerns, and streaming RPC, with a clear look at the trade-offs against async messaging.",
    ],
    demonstrates: ["Strong contracts", "Interceptor chains", "Sync vs async trade-offs"],
    stack: ["Go", "gRPC", "Protobuf"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "k8s-terraform-gcp",
    tier: "distributed",
    name: "K8s + Terraform on GCP",
    tagline: "Full system deployed with Helm, KEDA autoscaling and IaC on GKE",
    summary: "Full system deployed with Helm, KEDA autoscaling and infrastructure-as-code on GKE.",
    description: [
      "A full system deployed to Google Kubernetes Engine — packaged with Helm, scaled by KEDA on event-driven metrics, and provisioned entirely through Terraform infrastructure-as-code in a GitOps workflow.",
    ],
    demonstrates: [
      "Container orchestration",
      "Event-driven autoscaling",
      "GitOps workflow",
      "Cloud-native infrastructure",
    ],
    stack: ["Kubernetes", "Helm", "Terraform", "GCP"],
    status: "planned",
    github: GITHUB,
    images: [],
  },

  // ── Tier 3 — Full-stack & Product Work ────────────────────────────────────
  {
    slug: "lifestyle-aviation",
    tier: "fullstack",
    name: "Lifestyle Aviation Jet Limited",
    tagline: "Private jet charter booking platform",
    summary: "Fullstack private jet booking platform for luxury charter travel.",
    description: [
      "A fullstack booking platform for a private jet charter company — visitors browse aircraft and request charters, with an admin side for managing listings and enquiries.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    live: "https://lifestyleaviationjet.com/",
    images: ["/aviation.png"],
  },
  {
    slug: "lakazhub",
    tier: "fullstack",
    name: "LakazHub",
    tagline: "Two-sided property rental marketplace",
    summary: "Fullstack rental marketplace connecting property owners and tenants.",
    description: [
      "A two-sided rental marketplace where property owners list spaces and tenants browse and book — covering listings, search, and booking flows end to end.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    live: "https://lakazhub.com/",
    images: ["/Lakaz.png"],
  },
  {
    slug: "onboardai",
    tier: "fullstack",
    name: "OnboardAI",
    tagline: "AI-powered employee onboarding assistant",
    summary: "AI tool that helps with employee onboarding, leveraging a RAG model.",
    description: [
      "An AI assistant that streamlines employee onboarding — answering questions over company policies and documents using a retrieval-augmented generation (RAG) pipeline.",
    ],
    stack: ["Python", "LangChain", "OpenAI", "Next.js"],
    status: "completed",
    live: "https://onboard-zeta-red.vercel.app/",
    images: ["/Onboard.png"],
  },
  {
    slug: "postforge",
    tier: "fullstack",
    name: "PostForge",
    tagline: "AI-powered content generator",
    summary: "AI-powered content creator that turns ideas into posts.",
    description: [
      "An AI content tool that takes a rough idea and generates ready-to-publish posts, helping creators move from concept to content quickly.",
    ],
    stack: ["Python", "Next.js", "OpenAI"],
    status: "in-development",
    live: "https://v0-postforge-design.vercel.app/",
    images: ["/postforge.png"],
  },
  {
    slug: "rezy-ai",
    tier: "fullstack",
    name: "Rezy AI",
    tagline: "AI resume analyzer",
    summary: "AI resume analyzer that scores and matches resumes.",
    description: [
      "An AI tool that analyzes resumes — surfacing strengths, gaps, and job-fit signals to help candidates sharpen their applications.",
    ],
    stack: ["Python", "Next.js", "OpenAI", "LangChain"],
    status: "in-development",
    live: "https://rezy-nine.vercel.app/",
    images: ["/Rezy.png"],
  },
  {
    slug: "travel-agency",
    tier: "fullstack",
    name: "Travel Agency",
    tagline: "Travel booking and management system",
    summary: "Travel agency booking and management system.",
    description: [
      "A travel agency platform handling trip booking and back-office management — from browsing packages to managing reservations.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    images: ["/Travel.png"],
  },
]

/** Highlighted "currently building" entry shown at the end of Tier 2. */
export const currentlyBuilding = {
  name: "Real-time Analytics Pipeline",
  description:
    "100k events/second stream processing with Kafka, Redis sorted sets, TimescaleDB, and full OpenTelemetry observability.",
  github: GITHUB,
}

export const tierMeta: Record<Tier, { label: string; heading: string; sub: string }> = {
  flagship: {
    label: "Flagship System",
    heading: "Flagship System",
    sub: "One project, full depth — the system that best represents how I build.",
  },
  distributed: {
    label: "Distributed Systems",
    heading: "Distributed Systems Engineering",
    sub: "A series of progressively complex backend systems built to develop and demonstrate distributed engineering depth.",
  },
  fullstack: {
    label: "Full-stack & Product",
    heading: "Full-stack & Product Work",
    sub: "End-to-end product development across client work, marketplaces, and AI-powered tools.",
  },
}

export const statusLabel: Record<ProjectStatus, string> = {
  completed: "Live",
  "in-development": "In progress",
  planned: "Planned",
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function projectsByTier(tier: Tier): Project[] {
  return projects.filter((p) => p.tier === tier)
}
