"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { blogPosts, type BlogPost } from "../data/blog"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function BlogCard({ post }: { post: BlogPost }) {
  const linked = Boolean(post.href)

  const inner = (
    <div
      className={`flex h-full flex-col rounded-xl border bg-gray-950 p-6 transition-colors ${
        linked ? "border-gray-800 group-hover:border-gray-600" : "border-gray-800"
      }`}
    >
      <span className="w-fit rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-orange-400">
        {post.category}
      </span>

      <h3 className="mt-4 text-lg font-bold leading-snug text-white">{post.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-gray-800 bg-black px-2 py-0.5 font-mono text-[10px] text-gray-500"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-800/70 pt-4">
        <div className="flex items-center gap-3 font-mono text-[11px] text-gray-500">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>
        {linked ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 transition-colors group-hover:text-orange-500">
            Read
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-wide text-gray-600">
            Coming soon
          </span>
        )}
      </div>
    </div>
  )

  if (linked) {
    return (
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {inner}
      </a>
    )
  }
  return <div className="h-full">{inner}</div>
}

function CarouselButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next"
  disabled: boolean
  onClick: () => void
}) {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous posts" : "Next posts"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}

export default function Blog() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    update()
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [update])

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  if (blogPosts.length === 0) return null

  return (
    <section id="blog" className="bg-black px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div className="mb-8 sm:mb-10 text-center" {...fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Blog</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
            Notes on backend engineering, distributed systems, and the projects I&apos;m building.
          </p>
        </motion.div>

        {/* Carousel controls */}
        {(canPrev || canNext) && (
          <div className="mb-4 hidden justify-end gap-2 sm:flex">
            <CarouselButton dir="prev" disabled={!canPrev} onClick={() => scrollByCard(-1)} />
            <CarouselButton dir="next" disabled={!canNext} onClick={() => scrollByCard(1)} />
          </div>
        )}

        {/* Track */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                data-card
                className="snap-start flex-none basis-[85vw] sm:basis-[360px]"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
