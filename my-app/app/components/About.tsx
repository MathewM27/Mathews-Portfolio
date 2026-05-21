"use client"

import { motion } from "framer-motion"
import Image from "next/image"


const stackTiers = [
  {
    label: "Primary",
    sublabel: "what you're hired for",
    tags: ["Go", "PostgreSQL", "Redis", "MQTT", "WebSockets", "Event-driven", "DDD"],
    accent: "text-white border-gray-700 bg-gray-900",
  },
  {
    label: "Infrastructure",
    sublabel: "what you own end-to-end",
    tags: ["Docker", "GitHub Actions", "Linux", "Nginx", "Prometheus", "Grafana", "Hetzner VPS"],
    accent: "text-gray-300 border-gray-800 bg-gray-950",
  },
  {
    label: "Frontend - If needed",
    sublabel: "when the role needs it",
    tags: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"],
    accent: "text-gray-300 border-gray-800 bg-gray-950",
  },
  {
    label: "Building toward",
    sublabel: "actively in progress",
    tags: ["Kafka", "Kubernetes", "gRPC", "Terraform"],
    accent: "text-gray-500 border-dashed border-gray-800 bg-transparent",
    dashed: true,
  },
]

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto">

        {/* Section heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 lg:gap-4">

          {/* ── Left: Identity card ── */}
          <motion.div
            className="md:col-span-2 bg-black border border-gray-800 rounded-xl p-5 sm:p-6 flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Photo */}
            <div className="relative w-full h-[260px] sm:h-[360px] md:aspect-square md:h-auto rounded-xl overflow-hidden bg-gray-900">
              <Image
                src="/bg.jpg"
                alt="Mathews Mwangi"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Identity */}
            <div className="flex flex-col gap-1 items-center text-center md:items-start md:text-left">
              <h2 className="text-lg font-bold text-white">Mathews Mwangi</h2>
              <p className="text-xs text-gray-400 font-mono">Backend Engineer</p>
              <p className="text-xs text-gray-600 flex items-center gap-1 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3 h-3 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Port Louis, Mauritius
              </p>
            </div>

          </motion.div>

          {/* ── Right: Story card ── */}
          <motion.div
            className="md:col-span-3 bg-black border border-gray-800 rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col gap-5 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Story */}
            <div className="flex flex-col gap-4">
              <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">The story</p>

              <p className="text-white text-sm sm:text-base leading-relaxed">
                I build systems designed to stay alive under continuous load — GPS telemetry pipelines, event-driven backends, real-time data fan-out at scale.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Most of my work started with a problem I felt directly. <span className="text-white">Alebus</span> came from standing at a bus stop in Mauritius for 45 minutes with no idea when the next bus was coming. <span className="text-white">Lakazhub</span> came from watching people navigate long-term rentals entirely through WhatsApp groups. I find a problem, understand the domain, and build from architecture through to production.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                I work primarily in <span className="text-white font-mono">Go</span> for backend systems and have been going deep on distributed systems — Kafka, Kubernetes, gRPC — as the natural next layer of what I build.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-800 w-full" />

            {/* Stack tiers */}
            <div className="flex flex-col gap-4">
              {stackTiers.map((tier) => (
                <div key={tier.label} className="flex flex-col gap-1.5">
                  <p className="text-gray-300 text-[10px] font-mono uppercase tracking-widest">{tier.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] sm:text-xs font-mono rounded px-2 py-0.5 border ${tier.accent}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
