// Blog posts shown in the home Blog section.
// Add a new post by prepending an entry to `blogPosts`.
// Leave `href` undefined until the article is published — the card stays
// non-clickable and shows a "Coming soon" label until then.

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  /** Short category label, e.g. "Backend", "Go", "DevOps" */
  category: string
  /** ISO date — YYYY-MM-DD */
  date: string
  /** e.g. "7 min read" */
  readingTime: string
  /** Short topic chips */
  tags: string[]
  /** Link to the full article (detail page or external). Card is static until set. */
  href?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "alebus-realtime-telemetry",
    title: "Building Alebus: Streaming GPS Telemetry in Under a Second",
    excerpt:
      "How raw GPS data from transit vehicles flows through EMQX, a Go backend, and Redis Pub/Sub to reach commuters in ~760ms — and the architecture decisions behind that latency.",
    category: "Flagship",
    date: "2026-05-18",
    readingTime: "9 min read",
    tags: ["Go", "MQTT", "WebSocket"],
  },
  {
    slug: "postgres-job-queue-skip-locked",
    title: "A Durable Job Queue with Postgres and SKIP LOCKED",
    excerpt:
      "Why SELECT … FOR UPDATE SKIP LOCKED is the quietest way to build a reliable task queue — covering safe concurrent dequeue, retry policies, and a dead-letter queue.",
    category: "Backend",
    date: "2026-05-10",
    readingTime: "7 min read",
    tags: ["PostgreSQL", "Go"],
  },
  {
    slug: "http-server-from-scratch",
    title: "What net/http Hides: An HTTP Server from Raw TCP",
    excerpt:
      "Parsing HTTP/1.1 by hand, building a trie router, and wiring a middleware chain — a tour of everything Go's standard library quietly abstracts away.",
    category: "Go",
    date: "2026-05-02",
    readingTime: "11 min read",
    tags: ["Go", "Networking"],
  },
  {
    slug: "kafka-consumer-lag-dlq",
    title: "Consumer Lag, Schema Drift, and the Kafka Dead-letter Queue",
    excerpt:
      "Three failure modes every Kafka pipeline meets eventually — and how a schema registry plus a DLQ keeps poison messages from stalling an entire consumer group.",
    category: "Distributed Systems",
    date: "2026-04-24",
    readingTime: "8 min read",
    tags: ["Kafka", "Protobuf"],
  },
  {
    slug: "docker-multistage-builds",
    title: "Shrinking Go Images from 1GB to 20MB",
    excerpt:
      "A practical walk through multi-stage Docker builds, layer caching for fast CI rebuilds, and distroless base images — with the numbers measured at each step.",
    category: "DevOps",
    date: "2026-04-15",
    readingTime: "6 min read",
    tags: ["Docker", "Go"],
  },
]
