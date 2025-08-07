"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, ExternalLink, MessageCircle, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
      <div className="h-1/2 p-3 sm:p-4 flex flex-col justify-between">
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
      {/* ...existing code... */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24 md:pt-20 pb-4 sm:pb-8 relative"
        style={{
          minHeight: 'calc(100vh - 2rem)',
        }}
      >
        <div className="max-w-7xl lg:max-w-[1400px] mx-auto w-full relative z-10 flex flex-col md:flex-row gap-2 sm:gap-3 lg:gap-6">
          {/* Main Content - 2 columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 auto-rows-auto md:auto-rows-fr">
            {/* Main Intro Section - spans full width on mobile, 2 cols x 2 rows on desktop */}
            <motion.div
              className="bg-black border border-gray-800 rounded-xl p-4 pt-8 pb-8 sm:p-5 lg:p-8 shadow-lg md:col-span-2 md:row-span-2 relative overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Subtle animated background */}
              
              {/* Text Content */}
              <div className="flex flex-col flex-1 justify-center items-center text-center relative z-10 w-full h-full">
                <h1 className="mb-5 sm:mb-10 lg:mb-6 leading-tight font-bold font-serif">
                  <span className="block text-white text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-medium mb-2 font-serif ">
                    {/* ↑ text-3xl on mobile, font-normal for lighter weight */}
                    Hi there!
                    <span className="block">I'm</span>
                  </span>
                  <span className="block text-white text-5xl sm:text-7xl md:text-5xl lg:text-7xl font-extrabold font-serif">
                    {/* ↑ text-7xl and font-extrabold for Mathews on all screens */}
                    Mathews
                  </span>
                  <span className="inline-block mt-3 bg-black border border-white text-white font-semibold rounded-lg px-4 py-2 text-base sm:text-lg lg:text-xl shadow-md">
                    Full-stack Developer
                  </span>
                </h1>
                
                {/* Animated FREELANCER text */}
                <div className="mb-8 sm:mb-8 lg:mb-8 w-full max-w-xl flex justify-center">
                  <div className="flex justify-between w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[480px]">
                    {['F', 'R', 'E', 'E', 'L', 'A', 'N', 'C', 'E', 'R'].map((letter, index) => (
                      <span
                        key={index}
                        className="text-white text-sm lg:text-lg font-semibold relative overflow-hidden inline-block"
                        style={{
                          animation: `wave-light 3s infinite ${index * 0.1}s`,
                        }}
                      >
                        {letter}
                        <span 
                          className="absolute inset-0   opacity-0"
                          style={{
                            animation: `light-sweep 3s infinite ${index * 0.1}s`,
                          }}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.button
                onClick={scrollToProjects}
                className="bg-white text-black  text-base px-5 sm:px-7  py-2.5 rounded-lg font-semibold shadow-lg hover:bg-white/80 transition-colors w-full mt-auto  relative z-10 lg:text-lg"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98, transition: { duration: 0.25 } }}
                transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.6 }}
              >
                Book a service
              </motion.button>
            </motion.div>

            {/* Services Section */}
            <motion.div
              className="bg-black border border-gray-800 rounded-xl p-2 pt-3 pb-3 sm:p-1 lg:p-6 shadow-lg md:col-span-2 relative flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-white mb-2 sm:mb-4 lg:mb-6 text-center">
                Services
              </h3>
              <div className="flex gap-1 sm:gap-3 md:gap-4 lg:gap-6 justify-center">
                {/* Full-stack Development Service */}
                <motion.div
                  className="flex flex-col items-center flex-1 max-w-[120px] lg:max-w-[160px] cursor-pointer group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector("#contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 mb-1 group-hover:scale-105 overflow-hidden">
                    <Image
                      src="/fullstack.png"
                      alt="Full-stack Development Service"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center group-hover:text-orange-600 transition-colors mb-1">
                    Full-Stack
                  </span>
                </motion.div>

                {/* AI Engineering Service */}
                <motion.div
                  className="flex flex-col items-center flex-1 max-w-[120px] lg:max-w-[160px] cursor-pointer group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector("#contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 mb-1 group-hover:scale-105 overflow-hidden">
                    <Image
                      src="/ai-dev.png"
                      alt="AI Engineering Service"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center group-hover:text-orange-600 transition-colors mb-1">
                    AI Engineering
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Carousel Section */}
            <div className="hidden md:block">
              <ProjectCarouselCard />
            </div>
            {/* Profile Image */}
            <motion.div
              className="bg-black border border-gray-800  rounded-xl p-0 lg:p-2 shadow-lg flex flex-col justify-between relative overflow-hidden h-[300px] sm:h-[220px] md:h-full max-h-full min-h-[120px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src="/bg.jpg"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
              />
            </motion.div>
          </div>

          {/* Social Media Column - Narrow width, full height on desktop, horizontal at bottom on mobile */}
          <motion.div
              className="flex flex-row md:flex-col bg-black border border-gray-800 rounded-xl p-1.5 sm:p-2 lg:p-4 shadow-lg md:w-12 lg:w-16 justify-center gap-1.5 sm:gap-2 lg:gap-4 overflow-x-auto md:overflow-visible"
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* LinkedIn - always visible */}
            <Link 
              href="https://www.linkedin.com/in/mathews-mwangi-972839219/" 
              className="flex justify-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div 
                className="bg-black border border-gray-800 p-2 lg:p-2.5 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
            </Link>

            {/* GitHub - always visible */}
            <Link 
              href="https://github.com/MathewM27" 
              className="flex justify-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div 
                className="bg-black border border-gray-800 p-2 lg:p-2.5 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <Github className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.div>
            </Link>

            {/* WhatsApp - always visible */}
            <Link 
              href="https://wa.me/23055117201" 
              className="flex justify-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <motion.div 
                className="bg-black border border-gray-800 p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </Link>

            {/* Email - always visible */}
            <Link 
              href="mailto:futurexdesign.info@gmail.com"
              className="flex justify-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <motion.div 
                className="bg-black border border-gray-800 p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </Link>

            {/* The rest: only show on desktop (md+) */}
            <Link 
              href="https://discord.com/users/yourusername" 
              className="hidden md:flex justify-center flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div 
                className="bg-black border border-gray-800 p-1.5 sm:p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                {/* ...existing SVG... */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
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