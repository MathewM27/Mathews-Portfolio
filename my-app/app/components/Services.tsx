"use client"

import { motion } from "framer-motion"
import { Server, Layers } from "lucide-react"

const services = [
  {
    icon: Server,
    category: "Backend & Distributed Engineering",
    description:
      "Designing and building production-grade distributed systems — from real-time data pipelines to cloud-native microservice infrastructure.",
    expertise: [
      "Real-time streaming systems (WebSocket, MQTT, Kafka)",
      "Distributed backends in Go — queues, caches, rate limiters",
      "Cloud infrastructure on GCP/AWS with Kubernetes & Terraform",
      "Full observability stacks — Prometheus, Grafana, OpenTelemetry",
      "Domain-Driven Design across bounded service contexts",
    ],
    stack: ["Go", "Kafka", "Redis", "PostgreSQL", "Kubernetes", "Docker", "Terraform", "GCP"],
  },
  {
    icon: Layers,
    category: "Freelance — Full-stack & AI Integration",
    description:
      "End-to-end product delivery for clients and personal builds — web platforms, mobile apps, and AI-powered tools shipped from idea to production.",
    expertise: [
      "Full-stack web applications (Next.js, React, Node.js)",
      "Mobile apps with React Native",
      "AI integration — RAG pipelines, LLM-powered features",
      "Agentic AI workflows and chatbot assistants",
      "Client CMS, booking, and marketplace platforms",
    ],
    stack: ["Next.js", "React Native", "Node.js", "Python", "LangChain", "OpenAI", "PostgreSQL", "Supabase"],
  },
]

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Services() {
  return (
    <section id="services" className="bg-black px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-14 text-center"
          {...fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-5xl">What I Offer</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
            Distributed systems engineering and full-stack product delivery — from architecture to deployment.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc, i) => (
            <motion.div
              key={svc.category}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col rounded-2xl border border-gray-800 bg-gray-950 p-5 sm:p-8"
            >
              {/* Icon + title */}
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl border border-gray-800 bg-black p-3">
                  <svc.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-base font-bold text-white sm:text-xl">{svc.category}</h3>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-gray-400">{svc.description}</p>

              {/* Bullet points */}
              <ul className="mb-8 space-y-2.5">
                {svc.expertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stack pills */}
              <div className="mt-auto">
                <p className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-gray-800 bg-black px-2.5 py-1 font-mono text-[11px] text-gray-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
