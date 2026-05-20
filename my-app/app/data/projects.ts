// Single source of truth for the projects showcase.
// Imported by the home section (ProjectShowcase) and the detail pages.

export type Tier = "flagship" | "distributed" | "fullstack"
export type ProjectStatus = "completed" | "in-development" | "planned"
/** Sub-categories within the Distributed Systems tier */
export type DistributedGroup = "go" | "backend" | "cloud"

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
  /** Sub-category within the Distributed Systems tier */
  group?: DistributedGroup
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
      "PostgreSQL",
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
  // Go Foundations
  {
    slug: "go-concurrency-patterns",
    tier: "distributed",
    group: "go",
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
    slug: "go-http-server",
    tier: "distributed",
    group: "go",
    name: "Go HTTP Server from Scratch",
    tagline: "TCP-level HTTP/1.1 server with routing, middleware and keep-alive",
    summary: "TCP-level HTTP/1.1 server built from scratch with routing, middleware, and keep-alive.",
    description: [
      "An HTTP/1.1 server written from raw TCP sockets — manual request parsing, a trie-based router, middleware chaining, and persistent connection support, built to understand what net/http abstracts away.",
    ],
    demonstrates: ["TCP socket handling", "HTTP/1.1 parsing", "Trie routing", "Middleware chaining"],
    stack: ["Go"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "in-memory-kv-store",
    tier: "distributed",
    group: "go",
    name: "In-memory Key-Value Store",
    tagline: "Redis-inspired KV store with TTL, LRU eviction and a RESP protocol server",
    summary: "Redis-inspired in-memory KV store with TTL eviction, LRU cache, and a RESP server.",
    description: [
      "A Redis-inspired key-value store built in Go — supporting TTL expiry, LRU eviction under memory pressure, and a RESP protocol TCP server so any Redis client can connect to it.",
    ],
    demonstrates: ["LRU eviction", "TTL expiry", "RESP protocol", "Concurrent map access"],
    stack: ["Go"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "connection-pool",
    tier: "distributed",
    group: "go",
    name: "Connection Pool Implementation",
    tagline: "Generic connection pool with health checks, max-idle and acquire timeout",
    summary: "Generic connection pool with health-checks, max-idle management, and acquire timeouts.",
    description: [
      "A generic, goroutine-safe connection pool implementing acquire/release with configurable max-idle, connection health checks, and timeout-aware acquisition — the foundation underneath every database driver.",
    ],
    demonstrates: ["Pool lifecycle", "Health checks", "Backpressure", "Context cancellation"],
    stack: ["Go"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "go-load-tester",
    tier: "distributed",
    group: "go",
    name: "Go Load Tester",
    tagline: "Configurable HTTP load tester with percentile latency reporting",
    summary: "Configurable HTTP load tester producing p50/p95/p99 latency histograms.",
    description: [
      "A CLI load-testing tool that hammers HTTP endpoints with configurable concurrency and rate, then produces percentile latency histograms and error-rate summaries — used to benchmark the other projects in this series.",
    ],
    demonstrates: ["Goroutine worker pool", "HDR histogram", "Rate limiting", "CLI design"],
    stack: ["Go"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "event-bus",
    tier: "distributed",
    group: "go",
    name: "Event Bus",
    tagline: "In-process pub/sub event bus with typed topics and fan-out delivery",
    summary: "In-process pub/sub event bus with typed topics and guaranteed fan-out delivery.",
    description: [
      "An in-process event bus with typed topic subscriptions, fan-out delivery to multiple subscribers, and backpressure handling — the synchronous counterpart to the Kafka pipeline.",
    ],
    demonstrates: ["Pub/sub pattern", "Fan-out delivery", "Typed channels", "Backpressure"],
    stack: ["Go"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "write-ahead-log",
    tier: "distributed",
    group: "go",
    name: "Write-ahead Log",
    tagline: "Durable WAL with segment rotation, crash recovery and fsync guarantees",
    summary: "Durable WAL with segment rotation, crash recovery, and configurable fsync guarantees.",
    description: [
      "A write-ahead log that guarantees durability through segment-based rotation, CRC checksumming, and fsync — the same primitive that powers database engines and Kafka's log storage.",
    ],
    demonstrates: ["Durability guarantees", "Segment rotation", "Crash recovery", "CRC checksums"],
    stack: ["Go"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "distributed-rate-limiter",
    tier: "distributed",
    group: "go",
    name: "Distributed Rate Limiter",
    tagline: "Token-bucket and sliding-window rate limiting over Redis",
    summary: "Token-bucket and sliding-window rate limiting coordinated over Redis.",
    description: [
      "A distributed rate limiter implementing both token-bucket and sliding-window algorithms, using Redis atomic Lua scripts to coordinate limits across multiple service instances.",
    ],
    demonstrates: ["Token bucket", "Sliding window", "Redis Lua scripts", "Distributed coordination"],
    stack: ["Go", "Redis"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "lock-free-queue",
    tier: "distributed",
    group: "go",
    name: "Lock-free Queue",
    tagline: "Michael-Scott lock-free queue using atomic CAS operations",
    summary: "Michael-Scott lock-free MPMC queue implemented with atomic compare-and-swap.",
    description: [
      "A multi-producer, multi-consumer lock-free queue based on the Michael-Scott algorithm, using Go's sync/atomic for compare-and-swap — demonstrating how to eliminate mutex contention on hot data paths.",
    ],
    demonstrates: ["CAS operations", "ABA problem", "Memory ordering", "Lock-free algorithms"],
    stack: ["Go"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "raft-consensus",
    tier: "distributed",
    group: "go",
    name: "Raft Consensus",
    tagline: "Leader election and replicated log via the Raft consensus algorithm",
    summary: "Leader election and replicated log via the Raft consensus algorithm — the Go Foundations capstone.",
    description: [
      "A from-scratch Raft implementation covering leader election, log replication, and log compaction via snapshotting — the capstone of the Go Foundations series, demonstrating consensus in distributed systems.",
    ],
    demonstrates: ["Leader election", "Log replication", "Snapshotting", "Split-brain prevention"],
    stack: ["Go"],
    status: "planned",
    github: GITHUB,
    images: [],
  },

  // Backend Systems
  {
    slug: "distributed-task-queue",
    tier: "distributed",
    group: "backend",
    name: "Distributed Task Queue",
    tagline: "Postgres-backed job queue with retries, dead-letter handling and a worker pool",
    summary:
      "Postgres-backed job queue with SKIP LOCKED, retry, dead-letter handling and a worker pool.",
    description: [
      "A durable job queue built on PostgreSQL, using SELECT … FOR UPDATE SKIP LOCKED for safe concurrent dequeue, with retry policies, a dead-letter queue, and a worker pool that shuts down gracefully.",
    ],
    demonstrates: ["At-least-once delivery", "Fault tolerance", "Graceful shutdown", "Backpressure"],
    stack: ["Go", "PostgreSQL"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "kafka-event-pipeline",
    tier: "distributed",
    group: "backend",
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
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "url-shortener",
    tier: "distributed",
    group: "backend",
    name: "URL Shortener",
    tagline: "High-throughput redirect service with caching and an analytics pipeline",
    summary: "High-throughput redirect service with caching, an analytics pipeline and rate limiting.",
    description: [
      "A high-throughput URL shortener focused on the redirect hot path — cache-aside reads from Redis, an asynchronous write pipeline for click analytics, and rate limiting to protect the service.",
    ],
    demonstrates: ["Cache-aside pattern", "Hot path optimisation", "Async write pipeline"],
    stack: ["Go", "Redis", "PostgreSQL"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "grpc-services",
    tier: "distributed",
    group: "backend",
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
    slug: "timeseries-ingestion",
    tier: "distributed",
    group: "backend",
    name: "Time-series Ingestion Service",
    tagline: "High-throughput metric ingestion with batching and TimescaleDB storage",
    summary: "High-throughput metric ingestion pipeline with batching, compression and TimescaleDB.",
    description: [
      "A time-series ingestion service that accepts high-frequency metric writes, batches and compresses them, and stores them in TimescaleDB hypertables — with continuous aggregates for efficient query rollups.",
    ],
    demonstrates: ["Batched writes", "Hypertables", "Continuous aggregates", "Compression"],
    stack: ["Go", "TimescaleDB", "PostgreSQL"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "distributed-cache",
    tier: "distributed",
    group: "backend",
    name: "Distributed Cache",
    tagline: "Consistent-hashing cache cluster with node failover and replication",
    summary: "Consistent-hashing cache cluster with virtual nodes, replication, and failover.",
    description: [
      "A distributed cache built on consistent hashing with virtual nodes — distributing keys evenly across a cluster, replicating for fault tolerance, and re-balancing on node join/leave without a full reshuffle.",
    ],
    demonstrates: ["Consistent hashing", "Virtual nodes", "Replication", "Node failover"],
    stack: ["Go", "Redis"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "search-service",
    tier: "distributed",
    group: "backend",
    name: "Search Service",
    tagline: "Full-text search with an inverted index, ranking and fuzzy matching",
    summary: "Full-text search engine with an inverted index, TF-IDF ranking, and fuzzy matching.",
    description: [
      "A search service built around an in-memory inverted index — tokenising and stemming documents at index time, scoring results with TF-IDF, and supporting fuzzy prefix matching for typo tolerance.",
    ],
    demonstrates: ["Inverted index", "TF-IDF ranking", "Fuzzy matching", "Index compaction"],
    stack: ["Go", "PostgreSQL"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "api-gateway",
    tier: "distributed",
    group: "backend",
    name: "API Gateway",
    tagline: "Reverse proxy with routing, auth, rate limiting and circuit breaking",
    summary: "Reverse proxy API gateway with routing, JWT auth, rate limiting, and circuit breaking.",
    description: [
      "An API gateway that sits in front of backend services — routing by path, enforcing JWT authentication, applying per-client rate limits, and tripping a circuit breaker on downstream failures.",
    ],
    demonstrates: ["Reverse proxy", "JWT validation", "Circuit breaking", "Request aggregation"],
    stack: ["Go", "Redis"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "realtime-leaderboard",
    tier: "distributed",
    group: "backend",
    name: "Real-time Leaderboard",
    tagline: "Live ranked leaderboard using Redis sorted sets with WebSocket push",
    summary: "Live ranked leaderboard powered by Redis sorted sets with WebSocket push updates.",
    description: [
      "A real-time leaderboard service that accepts score events, maintains rankings in Redis sorted sets for O(log N) updates, and pushes live rank changes to connected clients over WebSocket.",
    ],
    demonstrates: ["Redis sorted sets", "O(log N) ranking", "WebSocket push", "Score aggregation"],
    stack: ["Go", "Redis", "WebSocket"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "stream-processing-engine",
    tier: "distributed",
    group: "backend",
    name: "Stream Processing Engine",
    tagline: "100k events/s stream processor with Kafka, windowing and TimescaleDB",
    summary: "100k events/second stream processor with Kafka, windowed aggregations, and full observability — the Backend Systems capstone.",
    description: [
      "The Backend Systems capstone — a stream processing engine consuming 100k events/second from Kafka, applying tumbling and sliding window aggregations, storing results in TimescaleDB, and exposing the full pipeline through OpenTelemetry instrumentation.",
    ],
    demonstrates: ["Windowed aggregations", "Exactly-once semantics", "Back-pressure", "OpenTelemetry"],
    stack: ["Go", "Kafka", "TimescaleDB", "Redis", "OpenTelemetry"],
    status: "planned",
    github: GITHUB,
    images: [],
  },

  // Cloud & Deployment
  {
    slug: "k8s-terraform-gcp",
    tier: "distributed",
    group: "cloud",
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
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "docker-multistage-builds",
    tier: "distributed",
    group: "cloud",
    name: "Docker Multi-stage Build Optimisation",
    tagline: "Minimal production images with multi-stage builds, layer caching and scanning",
    summary: "Minimal Go production images via multi-stage builds, layer caching, and Trivy scanning.",
    description: [
      "A deep dive into Docker build optimisation — shrinking Go service images from 1GB+ to under 20MB using multi-stage builds, exploiting layer caching for fast CI rebuilds, and scanning for CVEs with Trivy.",
    ],
    demonstrates: ["Multi-stage builds", "Layer caching", "Image scanning", "Distroless base"],
    stack: ["Docker", "Go"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "github-actions-cicd",
    tier: "distributed",
    group: "cloud",
    name: "GitHub Actions CI/CD Pipeline",
    tagline: "Full CI/CD pipeline with testing, Docker build, and GKE deployment",
    summary: "Full CI/CD pipeline: test → build → push → deploy to GKE on every merge.",
    description: [
      "A complete GitHub Actions pipeline that runs tests, builds a Docker image, pushes to Artifact Registry, and rolls out to GKE — with environment-gated promotions and rollback on failed health checks.",
    ],
    demonstrates: ["Pipeline stages", "Environment gates", "Rollback", "Secret management"],
    stack: ["GitHub Actions", "Docker", "GCP", "Kubernetes"],
    status: "in-development",
    github: GITHUB,
    images: [],
  },
  {
    slug: "k8s-local-dev",
    tier: "distributed",
    group: "cloud",
    name: "Kubernetes Local Dev Cluster",
    tagline: "Production-like local cluster with kind, Skaffold and live reload",
    summary: "Production-like local Kubernetes cluster using kind, Skaffold, and live reload.",
    description: [
      "A local development environment that mirrors production — kind spins up a multi-node cluster, Skaffold watches source files and triggers incremental builds and deploys, and Telepresence enables local service intercepts.",
    ],
    demonstrates: ["kind cluster", "Skaffold live reload", "Local intercept", "Resource quotas"],
    stack: ["Kubernetes", "Docker", "Skaffold"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "helm-chart-library",
    tier: "distributed",
    group: "cloud",
    name: "Helm Chart Library",
    tagline: "Reusable Helm library chart for Go microservices with sane defaults",
    summary: "Reusable Helm library chart covering deployments, services, ingress, and HPA.",
    description: [
      "A Helm library chart that encodes the standard deployment pattern for Go microservices — Deployment, Service, Ingress, HPA, and PodDisruptionBudget all templated with sensible, overridable defaults.",
    ],
    demonstrates: ["Library charts", "Values hierarchy", "Template helpers", "Chart testing"],
    stack: ["Helm", "Kubernetes"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "observability-stack",
    tier: "distributed",
    group: "cloud",
    name: "Observability Stack Deployment",
    tagline: "Prometheus, Grafana, Loki and Tempo deployed on Kubernetes via Helm",
    summary: "Full observability stack — metrics, logs, and traces — deployed to Kubernetes.",
    description: [
      "A complete observability platform deployed on Kubernetes: Prometheus for metrics, Loki for logs, Tempo for traces, and Grafana as the unified frontend — all connected via OpenTelemetry collectors.",
    ],
    demonstrates: ["Metrics + logs + traces", "OpenTelemetry collector", "Grafana dashboards", "Alert rules"],
    stack: ["Prometheus", "Grafana", "Loki", "Tempo", "Kubernetes", "Helm"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "keda-autoscaling",
    tier: "distributed",
    group: "cloud",
    name: "KEDA Event-driven Autoscaling",
    tagline: "Scale Kubernetes workers from zero based on Kafka lag and queue depth",
    summary: "Scale Kubernetes workers from zero using KEDA driven by Kafka lag and queue depth.",
    description: [
      "Event-driven autoscaling with KEDA — worker Deployments that scale from zero based on Kafka consumer lag and task queue depth, demonstrating cost-efficient burst handling without over-provisioning.",
    ],
    demonstrates: ["Scale-to-zero", "Kafka scaler", "Custom metrics", "Burst handling"],
    stack: ["Kubernetes", "KEDA", "Kafka", "Helm"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "service-mesh-istio",
    tier: "distributed",
    group: "cloud",
    name: "Service Mesh with Istio",
    tagline: "mTLS, traffic shaping, canary deployments and distributed tracing via Istio",
    summary: "mTLS, traffic shaping, canary releases, and distributed tracing via Istio.",
    description: [
      "A service mesh layer using Istio — enforcing mTLS between services, shaping traffic for canary and blue/green deployments, and capturing distributed traces automatically via the Envoy sidecar.",
    ],
    demonstrates: ["mTLS", "Canary deployments", "Traffic shaping", "Distributed tracing"],
    stack: ["Kubernetes", "Istio", "Envoy"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "gitops-argocd",
    tier: "distributed",
    group: "cloud",
    name: "GitOps with ArgoCD",
    tagline: "Declarative continuous delivery with ArgoCD, app-of-apps and drift detection",
    summary: "Declarative CD with ArgoCD: app-of-apps pattern, sync policies, and drift detection.",
    description: [
      "A GitOps delivery setup using ArgoCD — the app-of-apps pattern manages multiple services from a single control repo, with automated sync, health checks, and drift detection alerting on out-of-band changes.",
    ],
    demonstrates: ["App-of-apps", "Sync policies", "Drift detection", "Progressive delivery"],
    stack: ["ArgoCD", "Kubernetes", "Helm", "GitHub Actions"],
    status: "planned",
    github: GITHUB,
    images: [],
  },
  {
    slug: "multi-region-active-active",
    tier: "distributed",
    group: "cloud",
    name: "Multi-region Active-Active",
    tagline: "Active-active deployment across two GCP regions with global load balancing",
    summary: "Active-active multi-region deployment on GCP with global load balancing — the Cloud capstone.",
    description: [
      "The Cloud & Deployment capstone — the stream processing engine deployed across two GCP regions in an active-active configuration, with Cloud Spanner for globally consistent state, global HTTPS load balancing, and automated failover.",
    ],
    demonstrates: ["Active-active replication", "Global load balancing", "Automated failover", "RTO < 30s"],
    stack: ["GCP", "Kubernetes", "Terraform", "Cloud Spanner"],
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

/** Ordered sub-categories rendered as carousels inside the Distributed Systems tier. */
export const distributedGroups: { id: DistributedGroup; label: string; sub: string }[] = [
  {
    id: "go",
    label: "Go Foundations",
    sub: "Core Go language and concurrency expertise — runnable reference implementations.",
  },
  {
    id: "backend",
    label: "Backend Systems",
    sub: "Distributed backend services built on Kafka, Postgres, Redis and gRPC.",
  },
  {
    id: "cloud",
    label: "Cloud & Deployment",
    sub: "Systems packaged, deployed and operated on cloud-native infrastructure.",
  },
]

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
