"use client"

import { Fragment } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Hammer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  currentlyBuilding,
  projectsByTier,
  statusLabel,
  tierMeta,
  type Project,
  type ProjectStatus,
} from "../data/projects"

const statusStyle: Record<ProjectStatus, string> = {
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "in-development": "text-orange-400 border-orange-500/30 bg-orange-500/10",
  planned: "text-gray-400 border-gray-700 bg-gray-900",
}

function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyle[status]}`}
    >
      {statusLabel[status]}
    </span>
  )
}

function StackPills({ stack, max }: { stack: string[]; max?: number }) {
  const shown = max ? stack.slice(0, max) : stack
  const extra = max ? stack.length - shown.length : 0
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((tool) => (
        <span
          key={tool}
          className="rounded-md border border-gray-800 bg-black px-2 py-0.5 font-mono text-[10px] text-gray-400"
        >
          {tool}
        </span>
      ))}
      {extra > 0 && (
        <span className="rounded-md border border-gray-800 bg-black px-2 py-0.5 font-mono text-[10px] text-gray-500">
          +{extra}
        </span>
      )}
    </div>
  )
}

function TierHeader({ index, label, sub }: { index: number; label: string; sub: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-orange-500">0{index}</span>
        <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">{label}</h3>
        <span className="h-px flex-1 bg-gray-800" />
      </div>
      <p className="mt-2 max-w-2xl text-sm text-gray-400">{sub}</p>
    </div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
}

/* ── Tier 1 — Flagship ───────────────────────────────────────────────────── */
function FlagshipCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 to-black p-6 transition-colors group-hover:border-gray-600 sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {project.badges?.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-orange-400"
                >
                  {b}
                </span>
              ))}
            </div>

            <h4 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {project.name}
            </h4>
            <p className="mt-1 text-sm text-gray-400 sm:text-base">{project.tagline}</p>

            {project.stats && (
              <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-800 bg-gray-800 sm:grid-cols-4">
                {project.stats.map((s) => (
                  <div key={s.label} className="bg-black p-3 text-center">
                    <div className="font-mono text-lg font-bold text-orange-500 sm:text-xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] leading-tight text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <StackPills stack={project.stack} />
            </div>

            <span className="mt-7 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors group-hover:bg-orange-500 group-hover:text-white">
              View case study
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>

          {/* Architecture visual */}
          <div className="flex flex-col justify-center rounded-xl border border-gray-800 bg-black p-5 sm:p-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              System architecture
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture?.split("→").map((node, i, arr) => (
                <Fragment key={node}>
                  <span className="rounded-lg border border-gray-800 bg-gray-950 px-2.5 py-1.5 text-xs text-gray-300">
                    {node.trim()}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight className="h-3 w-3 shrink-0 text-orange-500/60" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

/* ── Tier 2 — Distributed Systems ────────────────────────────────────────── */
function DistributedCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.45 }}
        className="flex h-full flex-col rounded-xl border border-gray-800 bg-gray-950 p-5 transition-colors group-hover:border-gray-600"
      >
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-base font-bold text-white">{project.name}</h4>
          <StatusPill status={project.status} />
        </div>
        <p className="mt-1 text-xs text-gray-400">{project.tagline}</p>

        {project.demonstrates && (
          <div className="mt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
              Demonstrates
            </p>
            <ul className="mt-1.5 space-y-1">
              {project.demonstrates.map((d) => (
                <li key={d} className="flex items-center gap-2 text-xs text-gray-300">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex items-end justify-between gap-3 pt-2">
          <StackPills stack={project.stack} />
          <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-600 transition-colors group-hover:text-orange-500" />
        </div>
      </motion.div>
    </Link>
  )
}

function CurrentlyBuildingCard() {
  return (
    <a
      href={currentlyBuilding.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block sm:col-span-2"
    >
      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-950 p-5 transition-colors group-hover:border-orange-500/50">
        <div className="flex items-center gap-2 text-orange-500">
          <Hammer className="h-4 w-4" />
          <span className="font-mono text-[10px] uppercase tracking-widest">Currently building</span>
        </div>
        <h4 className="mt-2 text-base font-bold text-white">{currentlyBuilding.name}</h4>
        <p className="mt-1 text-xs text-gray-400">{currentlyBuilding.description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors group-hover:text-orange-500">
          Follow progress on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  )
}

/* ── Tier 3 — Full-stack & Product ───────────────────────────────────────── */
function FullstackCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.45 }}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-black transition-colors group-hover:border-gray-600"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
          {project.images[0] && (
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-sm font-bold text-white">{project.name}</h4>
            <StatusPill status={project.status} />
          </div>
          <p className="mt-1 text-xs text-gray-400">{project.summary}</p>
          <div className="mt-3 flex items-end justify-between gap-2 pt-1">
            <StackPills stack={project.stack} max={3} />
            <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-600 transition-colors group-hover:text-orange-500" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ProjectShowcase() {
  const flagship = projectsByTier("flagship")[0]
  const distributed = projectsByTier("distributed")
  const fullstack = projectsByTier("fullstack")

  return (
    <section id="projects" className="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-orange-500 sm:text-sm">
            … / Projects / …
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
            From a flagship distributed system to shipped client products — organised by engineering
            depth.
          </p>
        </div>

        {/* Tier 1 — Flagship */}
        {flagship && (
          <div className="mb-16">
            <TierHeader index={1} label={tierMeta.flagship.heading} sub={tierMeta.flagship.sub} />
            <FlagshipCard project={flagship} />
          </div>
        )}

        {/* Tier 2 — Distributed Systems */}
        {distributed.length > 0 && (
          <div className="mb-16">
            <TierHeader
              index={2}
              label={tierMeta.distributed.heading}
              sub={tierMeta.distributed.sub}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {distributed.map((p) => (
                <DistributedCard key={p.slug} project={p} />
              ))}
              <CurrentlyBuildingCard />
            </div>
          </div>
        )}

        {/* Tier 3 — Full-stack & Product */}
        {fullstack.length > 0 && (
          <div>
            <TierHeader index={3} label={tierMeta.fullstack.heading} sub={tierMeta.fullstack.sub} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {fullstack.map((p) => (
                <FullstackCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
