import { Fragment } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import {
  getProject,
  projects,
  statusLabel,
  tierMeta,
  type ProjectStatus,
} from "../../data/projects"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found | Mathews Mwangi" }
  return {
    title: `${project.name} | Mathews Mwangi`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Mathews Mwangi`,
      description: project.summary,
      images: project.images.length ? project.images : undefined,
    },
  }
}

const statusStyle: Record<ProjectStatus, string> = {
  completed: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  "in-development": "text-orange-400 border-orange-500/30 bg-orange-500/10",
  planned: "text-gray-400 border-gray-700 bg-gray-900",
}

function ArchitectureFlow({ architecture }: { architecture: string }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-gray-500">
        System architecture
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {architecture.split("→").map((node, i, arr) => (
          <Fragment key={node}>
            <span className="rounded-lg border border-gray-800 bg-black px-2.5 py-1.5 text-xs text-gray-300">
              {node.trim()}
            </span>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-orange-500/60" />}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const cover = project.images[0]
  const primary = project.live
    ? { href: project.live, label: "Visit live site", Icon: ExternalLink }
    : project.github
      ? { href: project.github, label: "View on GitHub", Icon: Github }
      : null
  const secondary =
    project.live && project.github
      ? { href: project.github, label: "GitHub", Icon: Github }
      : null

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" aria-label="Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Mathews-dark.svg" alt="Mathews Mwangi" className="h-8 w-auto" />
          </Link>
          <Link
            href="/#projects"
            className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Title block */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-orange-400">
            {tierMeta[project.tier].label}
          </span>
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${statusStyle[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-2 text-lg text-gray-400">{project.tagline}</p>

        {project.badges && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((b) => (
              <span
                key={b}
                className="rounded-md border border-gray-800 bg-gray-950 px-2 py-0.5 font-mono text-[11px] text-gray-400"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Hero: description + visual */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="space-y-4">
              {project.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {para}
                </p>
              ))}
            </div>

            {primary && (
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-orange-500 hover:text-white"
                >
                  <primary.Icon className="h-4 w-4" />
                  {primary.label}
                </a>
                {secondary && (
                  <a
                    href={secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gray-500"
                  >
                    <secondary.Icon className="h-4 w-4" />
                    {secondary.label}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Visual: screenshot, else architecture, else nothing */}
          {cover ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
              <Image
                src={cover}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          ) : project.architecture ? (
            <ArchitectureFlow architecture={project.architecture} />
          ) : null}
        </div>

        {/* Stats */}
        {project.stats && (
          <div className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500">
              By the numbers
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-800 bg-gray-800 sm:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-black p-4 text-center">
                  <div className="font-mono text-2xl font-bold text-orange-500">{s.value}</div>
                  <div className="mt-1 text-xs leading-tight text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What it demonstrates */}
        {project.demonstrates && (
          <div className="mt-12">
            <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500">
              What it demonstrates
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.demonstrates.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-gray-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture (when a screenshot already took the hero slot) */}
        {project.architecture && cover && (
          <div className="mt-12">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-gray-500">
              Architecture
            </h2>
            <ArchitectureFlow architecture={project.architecture} />
          </div>
        )}

        {/* Tech stack */}
        <div className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500">Tech stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-gray-800 bg-gray-950 px-3 py-1.5 font-mono text-xs text-gray-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-14 border-t border-gray-800 pt-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>
      </article>
    </main>
  )
}
