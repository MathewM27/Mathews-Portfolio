"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { referenceGroups, references, type Reference, type ReferenceGroup } from "../data/references"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

const groupAccent: Record<ReferenceGroup, string> = {
  client:  "border-orange-500/30 bg-orange-500/10 text-orange-400",
  mentor:  "border-blue-500/30   bg-blue-500/10   text-blue-400",
  friend:  "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
}

const avatarAccent: Record<ReferenceGroup, string> = {
  client:  "border-orange-500/30 bg-orange-500/10 text-orange-400",
  mentor:  "border-blue-500/30   bg-blue-500/10   text-blue-400",
  friend:  "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
}

const quoteAccent: Record<ReferenceGroup, string> = {
  client:  "text-orange-500/40",
  mentor:  "text-blue-500/40",
  friend:  "text-emerald-500/40",
}

function ReferenceCard({ r }: { r: Reference }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-800 bg-gray-950 p-6">
      <div className="flex items-start justify-between gap-3">
        <Quote className={`h-6 w-6 shrink-0 ${quoteAccent[r.group]}`} />
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${groupAccent[r.group]}`}
        >
          {r.group === "mentor" ? "Mentor" : r.group === "friend" ? "Friend" : "Client"}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">{r.quote}</p>

      <div className="mt-5 flex items-center gap-3 border-t border-gray-800/70 pt-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold ${avatarAccent[r.group]}`}
        >
          {initials(r.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">{r.name}</p>
          <p className="truncate text-xs text-gray-500">{r.role}</p>
        </div>
      </div>
    </div>
  )
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
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}

function ReferenceCarousel({
  group,
  label,
  sub,
  items,
}: {
  group: ReferenceGroup
  label: string
  sub: string
  items: Reference[]
}) {
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

  return (
    <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
      {/* Row header */}
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">{label}</h4>
          </div>
          <p className="mt-1 text-xs text-gray-500">{sub}</p>
        </div>
        {(canPrev || canNext) && (
          <div className="hidden shrink-0 gap-2 sm:flex">
            <CarouselButton dir="prev" disabled={!canPrev} onClick={() => scrollByCard(-1)} />
            <CarouselButton dir="next" disabled={!canNext} onClick={() => scrollByCard(1)} />
          </div>
        )}
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((r) => (
          <div
            key={r.name}
            data-card
            className="snap-start flex-none basis-[290px] sm:basis-[340px]"
          >
            <ReferenceCard r={r} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function References() {
  if (references.length === 0) return null

  return (
    <section id="references" className="bg-black px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div className="mb-12 text-center" {...fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">References</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
            From clients who hired me, to mentors who shaped me, to friends who know me — in their
            own words.
          </p>
        </motion.div>

        {/* Three carousels */}
        <div className="space-y-12">
          {referenceGroups.map((g) => {
            const items = references.filter((r) => r.group === g.id)
            if (items.length === 0) return null
            return (
              <ReferenceCarousel
                key={g.id}
                group={g.id}
                label={g.label}
                sub={g.sub}
                items={items}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
