import { Fragment } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
import {
  getProject,
  projects,
  statusLabel,
  tierMeta,
  type GalleryShot,
  type ProjectGallery,
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

function MobileShot({ shot }: { shot: GalleryShot }) {
  return (
    <figure className="group">
      <Image
        src={shot.src}
        alt={shot.caption}
        width={shot.w}
        height={shot.h}
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 180px"
        className="h-auto w-full transition-transform duration-300 [filter:drop-shadow(0_12px_22px_rgba(0,0,0,0.55))] group-hover:-translate-y-1.5"
      />
      <figcaption className="mt-3 text-center font-mono text-[11px] text-gray-500">
        {shot.caption}
      </figcaption>
    </figure>
  )
}

function DesktopShot({ shot }: { shot: GalleryShot }) {
  return (
    <figure>
      {shot.framed ? (
        <Image
          src={shot.src}
          alt={shot.caption}
          width={shot.w}
          height={shot.h}
          sizes="(max-width: 1024px) 90vw, 440px"
          className="h-auto w-full [filter:drop-shadow(0_20px_32px_rgba(0,0,0,0.6))]"
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-800 shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-gray-800 bg-gray-900 px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-700" />
          </div>
          <Image
            src={shot.src}
            alt={shot.caption}
            width={shot.w}
            height={shot.h}
            sizes="(max-width: 1024px) 100vw, 900px"
            className="h-auto w-full"
          />
        </div>
      )}
      <figcaption className="mt-3 text-center font-mono text-[11px] text-gray-500">
        {shot.caption}
      </figcaption>
    </figure>
  )
}

function ProductGallery({ gallery }: { gallery: ProjectGallery[] }) {
  return (
    <div className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-widest text-gray-500">
        Inside the product
      </h2>
      <div className="mt-6 space-y-12">
        {gallery.map((group) => {
          const framed = group.shots.filter((s) => s.framed)
          const raw = group.shots.filter((s) => !s.framed)
          return (
            <div key={group.label}>
              <h3 className="mb-5 text-sm font-semibold text-white">{group.label}</h3>
              {group.kind === "mobile" ? (
                <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
                  {group.shots.map((s) => (
                    <MobileShot key={s.src} shot={s} />
                  ))}
                </div>
              ) : (
                <div className="space-y-9">
                  {framed.length > 0 && (
                    <div className="grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
                      {framed.map((s) => (
                        <DesktopShot key={s.src} shot={s} />
                      ))}
                    </div>
                  )}
                  {raw.map((s) => (
                    <DesktopShot key={s.src} shot={s} />
                  ))}
                </div>
              )}
            </div>
          )
        })}
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
      ? { href: project.github, label: "View on GitHub", Icon: GithubIcon }
      : null
  const secondary =
    project.live && project.github
      ? { href: project.github, label: "GitHub", Icon: GithubIcon }
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
        {/* Hero: title + content left, visual right — single unified grid so both columns start at the same top */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col">
            {/* Tier / status badges */}
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

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-2 text-base text-gray-400 sm:text-lg">{project.tagline}</p>

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

            <div className="mt-8 space-y-4">
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

          {/* Visual: cover screenshot → architecture diagram image → text nodes → nothing */}
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
          ) : project.architectureImage ? (
            <div className="flex items-start justify-center rounded-xl border border-gray-800 bg-gray-950 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.architectureImage}
                alt={`${project.name} system architecture`}
                className="h-auto w-full"
              />
            </div>
          ) : project.architecture ? (
            <ArchitectureFlow architecture={project.architecture} />
          ) : null}
        </div>

        {/* Stats */}
        {project.stats && (
          <div className="mt-8 sm:mt-12">
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
          <div className="mt-8 sm:mt-12">
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

        {/* Product screenshots */}
        {project.gallery && <ProductGallery gallery={project.gallery} />}

        {/* Architecture (when a screenshot already took the hero slot) */}
        {project.architecture && cover && (
          <div className="mt-8 sm:mt-12">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-gray-500">
              Architecture
            </h2>
            <ArchitectureFlow architecture={project.architecture} />
          </div>
        )}

        {/* Tech stack */}
        <div className="mt-8 sm:mt-12">
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
