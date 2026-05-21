"use client"

import { motion } from "framer-motion"
import { ExternalLink, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const roles = [
  "Backend Engineer",
  "Distributed Systems Engineer",
  "Systems Architect",
  "API & Platform Builder",
]

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true) }, 5000)
      return () => clearTimeout(t)
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55)
        return () => clearTimeout(t)
      } else {
        setPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }
    }
  }, [displayed, deleting, paused, roleIndex])

  return (
    <span className="text-white font-bold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const projects = [
  {
    name: "Lifestyle Aviation",
    image: "/aviation.png",
    link: "https://lifestyleaviationjet.com/",
  },
  {
    name: "LakazHub",
    image: "/hero.webp",
    link: "https://lakazhub.com/",
  },
  {
    name: "BusTrack",
    image: "/bg2.jpg",
    link: "https://example.com/bustrack",
  },
  {
    name: "LangAi",
    image: "/Typing.jpg",
    link: "https://example.com/langai",
  },
  {
    name: "AgriBot",
    image: "/farm.jpg",
    link: "https://example.com/agribot",
  },
  {
    name: "NeuraLearn",
    image: "/Learn.jpg",
    link: "https://example.com/neuralean",
  },
  {
    name: "FitMedia",
    image: "/fitmedia.jpg",
    link: "https://example.com/fitmedia",
  },
  {
    name: "Swiftdrive",
    image: "/swift.jpg",
    link: "https://example.com/swiftdrive",
  },
  {
    name: "Billiards Game",
    image: "/pool.jpg",
    link: "https://example.com/billiards",
  },
]

function ProjectCarousel() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [visibleCount, setVisibleCount] = useState(4)
  const [mounted, setMounted] = useState(false)

  // Set visible count based on screen size
  useEffect(() => {
    setMounted(true)
    
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2)
      } else if (window.innerWidth < 768) {
        setVisibleCount(3)
      } else {
        setVisibleCount(4)
      }
    }
    
    // Initial setup
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % projects.length)
    }, 3000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [index, mounted])

  // Calculate visible projects (wrap around)
  const getVisibleProjects = () => {
    const arr = []
    for (let i = 0; i < visibleCount; i++) {
      arr.push(projects[(index + i) % projects.length])
    }
    return arr
  }

  return (
    <div className="w-full flex flex-col items-center bg-black">
      {mounted && (
        <>
          <div className="relative w-full flex justify-center items-center max-h-[100px] bg-black">
            <div className="flex gap-2 sm:gap-3 md:gap-4 w-full justify-center">
              {getVisibleProjects().map((project, i) => (
                <div
                  key={project.name}
                  className="flex flex-col items-center transition-all duration-500"
                  style={{ minWidth: 0, flex: 1, maxWidth: 150 }}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center mb-2"
                    style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url('${project.image}')` }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover w-full h-full"
                      style={{ background: "transparent" }}
                    />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-orange-500 hover:underline text-center truncate w-full "
                    title={project.name}
                    style={{ maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}
                  >
                    {project.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-1 mt-2 sm:mt-3 overflow-x-auto max-w-full">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => setIndex(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectCarouselCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const featuredProjects = [
    {
      name: "Lifestyle Aviation",
      description: "Private jet booking platform",
      image: "/aviation.png",
      link: "https://lifestyleaviationjet.com/",
    },
    {
      name: "LakazHub",
      description: "Property rental marketplace",
      image: "/Lakaz.png",
      link: "https://lakazhub.com/",
    },
    {
      name: "Travel-Tour",
      description: "AI-powered transport tracking",
      image: "/Travel.png",
      link: "https://example.com/bustrack",
    },
    {
      name: "Onboard AI",
      description: "AI powered HR onboarding",
      image: "/Onboard.png",
      link: "https://onboard-zeta-red.vercel.app/",
    },
    {
      name: "PostForge",
      description: "AI content creator",
      image: "/postforge.png",
      link: "https://v0-postforge-design.vercel.app/",
    },
    {
      name: "Rezy",
      description: "AI resume job matcher",
      image: "/Rezy.png",
      link: "https://rezy-nine.vercel.app/",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
    }, 3000)
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentIndex, mounted, featuredProjects.length])

  if (!mounted) return null

  const currentProject = featuredProjects[currentIndex]

  return (
    <motion.div
      className="bg-black border border-gray-800 rounded-xl shadow-lg overflow-hidden relative h-full cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image - 50% height */}
      <div className="relative h-1/2 overflow-hidden">
        <Image
          src={currentProject.image}
          alt={currentProject.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectFit: "cover" }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Project Info - 50% height */}
      <div className="h-1/2 p-2.5 sm:p-3 flex flex-col justify-between">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-center text-white mb-1 truncate">
            {currentProject.name}
          </h4>
          <p className="text-xs  text-white text-center line-clamp-2">
            {currentProject.description}
          </p>
        </div>
        
        {/* View Project Button */}
        <motion.a
          href={currentProject.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 text-white  hover:text-orange-600 font-semibold text-xs sm:text-sm mt-2 transition-colors"
          whileHover={{ x: 2 }}
        >
          View
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.a>
      </div>

      
    </motion.div>
  )
}

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-8 pt-14 sm:pt-16 pb-3 sm:pb-4 relative"
      >
        <div className="max-w-7xl lg:max-w-[1400px] mx-auto w-full relative z-10 flex flex-col md:flex-row gap-2 sm:gap-3 lg:gap-4">

          {/* Main bento grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 auto-rows-auto md:auto-rows-fr">

            {/* ── Intro card: full width on mobile, 2-col × 2-row on desktop ── */}
            <motion.div
              className="col-span-2 md:col-span-2 md:row-span-2 bg-black border border-gray-800 rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg relative overflow-hidden flex flex-col min-h-[180px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col flex-1 justify-center items-center text-center relative z-10 gap-2.5 sm:gap-3">
                <motion.p
                  className="text-gray-400 text-xs sm:text-sm lg:text-base tracking-widest uppercase font-mono"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Hi, I&apos;m
                </motion.p>

                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  Mathews
                </motion.h1>

                <motion.div
                  className="w-8 h-[2px] bg-orange-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                />

                <motion.div
                  className="text-sm sm:text-base lg:text-lg font-mono min-h-[1.6em]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                >
                  a <TypingRole />
                </motion.div>

                <motion.p
                  className="text-gray-400 text-xs sm:text-sm lg:text-lg max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Building scalable real-time systems and data pipelines that process continuously at scale.
                </motion.p>
              </div>

              <motion.button
                onClick={scrollToProjects}
                className="mt-4 bg-white text-black text-sm sm:text-base px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-white/80 transition-colors w-full relative z-10"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                Book a service
              </motion.button>
            </motion.div>

            {/* ── Services card: full width on mobile, 2-col on desktop ── */}
            <motion.div
              className="col-span-2 md:col-span-2 bg-black border border-gray-800 rounded-xl p-3 sm:p-3.5 lg:p-4 shadow-lg relative flex flex-col gap-1.5 sm:gap-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-13.5 0v3.75m13.5-3.75v3.75m-13.5 0h13.5" />
                      </svg>
                    ),
                    title: "API & Microservices",
                    stack: "Go · REST · gRPC",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                      </svg>
                    ),
                    title: "Data Pipelines",
                    stack: "Kafka · Redis · Postgres",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                      </svg>
                    ),
                    title: "Infra & DevOps",
                    stack: "Docker · K8s · Nginx",
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    ),
                    title: "Observability",
                    stack: "Prometheus · Grafana",
                  },
                ].map((service) => (
                  <motion.button
                    key={service.title}
                    className="flex flex-col items-start gap-1 p-2 rounded-lg border border-gray-800 bg-black hover:border-gray-600 transition-colors group text-left"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-white text-[11px] sm:text-xs lg:text-sm font-semibold leading-tight">
                      {service.title}
                    </span>
                    <span className="text-gray-500 text-[9px] sm:text-[10px] font-mono group-hover:text-gray-400 transition-colors">
                      {service.stack}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* ── Project carousel: desktop only ── */}
            <div className="hidden md:block md:col-span-1 md:min-h-0">
              <ProjectCarouselCard />
            </div>

            {/* ── Tech stack marquee: full-width on mobile, 1-col on desktop ── */}
            <motion.div
              className="col-span-2 md:col-span-1 bg-black border border-gray-800 rounded-xl p-2.5 lg:p-3 shadow-lg flex flex-col justify-center relative overflow-hidden min-h-[120px] md:min-h-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <style>{`
                @keyframes marquee-ltr { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
                @keyframes marquee-rtl { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
                .marquee-ltr { animation: marquee-ltr 22s linear infinite; }
                .marquee-rtl { animation: marquee-rtl 22s linear infinite; }
              `}</style>
              {(() => {
                const row1 = [
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Go" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", label: "Rust" },
                  { src: "https://cdn.simpleicons.org/apachekafka/000000", label: "Kafka" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", label: "Redis" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "Postgres" },
                ]
                const row2 = [
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", label: "K8s" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", label: "Nginx" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", label: "Prometheus" },
                  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", label: "Grafana" },
                ]
                const Icon = ({ src, label, i }: { src: string; label: string; i: number }) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 group flex-shrink-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 group-hover:border-gray-600 transition-colors p-1.5">
                      <img src={src} alt={label} className="w-full h-full object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors">{label}</span>
                  </div>
                )
                return (
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                      <div className="marquee-ltr flex gap-6 sm:gap-8 md:gap-5 w-max">
                        {[...row1, ...row1, ...row1].map((item, i) => <Icon key={i} {...item} i={i} />)}
                      </div>
                    </div>
                    <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                      <div className="marquee-rtl flex gap-6 sm:gap-8 md:gap-5 w-max">
                        {[...row2, ...row2, ...row2].map((item, i) => <Icon key={i} {...item} i={i} />)}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </div>

          {/* ── Social sidebar: vertical on desktop, horizontal strip on mobile ── */}
          <motion.div
            className="flex flex-row md:flex-col items-center justify-center bg-black border border-gray-800 rounded-xl p-2 sm:p-2.5 lg:p-3 shadow-lg md:w-12 lg:w-14 gap-2 sm:gap-3 md:gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { href: "https://www.linkedin.com/in/mathews-mwangi-972839219/", label: "LinkedIn", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "https://github.com/MathewM27", label: "GitHub", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
              { href: "https://wa.me/23055117201", label: "WhatsApp", icon: <MessageCircle className="w-4 h-4" /> },
              { href: "mailto:futurexdesign.info@gmail.com", label: "Email", icon: <Mail className="w-4 h-4" /> },
            ].map(({ href, label, icon }) => (
              <Link key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <motion.div
                  className="bg-black border border-gray-800 p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {icon}
                </motion.div>
              </Link>
            ))}

            <Link href="https://discord.com/users/yourusername" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <motion.div
                className="bg-black border border-gray-800 p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                whileHover={{ y: -2 }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  )
}