"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ClipboardList,
  Code2,
  Compass,
  LifeBuoy,
  Layers,
  Network,
  Receipt,
  RefreshCw,
  Rocket,
  Server,
  Sparkles,
  Video,
  X,
} from "lucide-react"

type TabId = "workflow" | "services" | "scope"

const tabs: { id: TabId; label: string }[] = [
  { id: "workflow", label: "Workflow" },
  { id: "services", label: "Service Areas" },
  { id: "scope", label: "Scope & Focus" },
]

const principles = [
  {
    icon: ClipboardList,
    title: "Discovery & project outline",
    body: "Every engagement starts with a discovery call to understand your problem, goals, and constraints. From it I produce a clear project outline and scope before any work begins.",
  },
  {
    icon: RefreshCw,
    title: "Agile delivery",
    body: "I build in Agile cycles with deliverables reviewed iteratively. You give feedback at each stage, so the project stays aligned with your vision throughout.",
  },
  {
    icon: Video,
    title: "Fully remote",
    body: "All collaboration happens remotely. Discovery and progress calls run over Microsoft Teams or Google Meet, keeping communication clear, scheduled, and documented.",
  },
  {
    icon: Compass,
    title: "End-to-end ownership",
    body: "I run each project independently as the product manager — owning planning, design decisions, and implementation from the first call to final delivery.",
  },
]

const terms = [
  {
    icon: Receipt,
    title: "Milestone billing",
    body: "An invoice with timeline and milestones is agreed before work begins. Payment is milestone-based, with the final invoice settled on project completion.",
  },
  {
    icon: LifeBuoy,
    title: "30-day maintenance",
    body: "Every project includes 30 days of free maintenance after launch for bugs and issues. Beyond that window, support and new scope are billable.",
  },
]

const services = [
  {
    icon: Network,
    step: "01",
    title: "Architecture & System Design",
    body: "If you don't already have a system design, I architect it — selecting the right design patterns, data models, and infrastructure topology for your problem.",
  },
  {
    icon: Code2,
    step: "02",
    title: "Implementation",
    body: "Building the system to spec — including a proper testing setup and CI/CD pipelines, so the codebase ships production-ready and stays maintainable.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deployment",
    body: "Shipping to production — provisioning infrastructure, configuring environments, and deploying the final build so the system runs live.",
  },
]

const specialty = [
  {
    icon: Server,
    title: "Backend Engineering",
    level: "Primary focus",
    body: "The core of what I do — APIs, distributed systems, databases, and server-side infrastructure.",
    accent: true,
  },
  {
    icon: Layers,
    title: "Full-stack Development",
    level: "Offered",
    body: "End-to-end web platforms when a project needs both frontend and backend delivered together.",
    accent: false,
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    level: "Special circumstance",
    body: "Taken on selectively — only for projects that are specifically built around AI features.",
    accent: false,
  },
]

const outOfScope = [
  {
    title: "Content & data",
    body: "Clients provide their own datasets, copy, and content — content creation is not part of the service.",
  },
  {
    title: "UI/UX & branding",
    body: "A clean, functional default UI is included. Extensive UI/UX design, brand colours, and logos are not provided.",
  },
  {
    title: "SEO setup",
    body: "Search engine optimisation and ranking configuration are not included.",
  },
  {
    title: "Marketing & graphic design",
    body: "The focus is engineering and infrastructure — marketing assets and graphic design are out of scope.",
  },
]

function IconBadge({ icon: Icon }: { icon: typeof Server }) {
  return (
    <div className="rounded-lg border border-gray-800 bg-black p-2">
      <Icon className="h-5 w-5 text-orange-500" />
    </div>
  )
}

function WorkflowPanel() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {principles.map((p) => (
          <div key={p.title} className="rounded-xl border border-gray-800 bg-gray-950 p-5">
            <div className="flex items-center gap-3">
              <IconBadge icon={p.icon} />
              <h3 className="text-base font-bold text-white">{p.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{p.body}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          Commercial terms
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {terms.map((t) => (
            <div key={t.title} className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <div className="flex items-center gap-3">
                <IconBadge icon={t.icon} />
                <h3 className="text-base font-bold text-white">{t.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServicesPanel() {
  return (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        I provide service across three areas — engage me for the full path from architecture to
        production, or for a single stage.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex flex-col rounded-xl border border-gray-800 bg-gray-950 p-4 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <IconBadge icon={s.icon} />
              <span className="font-mono text-2xl font-bold text-gray-800">{s.step}</span>
            </div>
            <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ScopePanel() {
  return (
    <div className="space-y-10">
      <div>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          Where I focus
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {specialty.map((s) => (
            <div
              key={s.title}
              className={`rounded-xl border bg-gray-950 p-5 ${
                s.accent ? "border-orange-500/40" : "border-gray-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-lg border p-2 ${
                    s.accent
                      ? "border-orange-500/30 bg-orange-500/10"
                      : "border-gray-800 bg-black"
                  }`}
                >
                  <s.icon
                    className={`h-5 w-5 ${s.accent ? "text-orange-500" : "text-gray-400"}`}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  <p
                    className={`font-mono text-[10px] uppercase tracking-wide ${
                      s.accent ? "text-orange-400" : "text-gray-500"
                    }`}
                  >
                    {s.level}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          Not included
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {outOfScope.map((o) => (
            <div
              key={o.title}
              className="flex gap-3 rounded-xl border border-gray-800 bg-gray-950 p-4"
            >
              <div className="mt-0.5 shrink-0 rounded-full border border-gray-800 bg-black p-1">
                <X className="h-3.5 w-3.5 text-gray-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300">{o.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">{o.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProcessPlan() {
  const [active, setActive] = useState<TabId>("workflow")

  return (
    <section id="process" className="bg-black px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">How I Work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
            An independent, end-to-end engineering service — here is how I run a project, what I
            deliver, and where my focus lies.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === t.id
                  ? "border-orange-500 bg-orange-500/10 text-orange-400"
                  : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {active === "workflow" && <WorkflowPanel />}
              {active === "services" && <ServicesPanel />}
              {active === "scope" && <ScopePanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
