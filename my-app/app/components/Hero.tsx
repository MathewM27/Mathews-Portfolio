"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
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
      <style jsx>{`
        @keyframes wave-light {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes light-sweep {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.6;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
        @keyframes wave-hand {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: rotate(14deg);
          }
          20%, 40%, 60%, 80% {
            transform: rotate(-8deg);
          }
        }
      `}</style>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24 md:pt-20 pb-4 sm:pb-8 relative"
        style={{
          minHeight: 'calc(100vh - 2rem)', // Subtract some space for better mobile experience
        }}
      >
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto w-full relative z-10 flex flex-col md:flex-row gap-2 sm:gap-3 lg:gap-6 px-3 sm:px-4 lg:px-8">
        {/* Main Content - 2 columns */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 auto-rows-fr">
          {/* Main Intro Section - spans full width on mobile, 2 cols x 2 rows on desktop */}
          <motion.div
            className="bg-black border border-gray-800 rounded-xl p-4 sm:p-5  lg:p-8 shadow-lg md:col-span-2 md:row-span-2 relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Subtle animated background */}
            
            {/* Text Content */}
            <div className="flex flex-col flex-1 justify-center items-center text-center relative z-10 w-full h-full">
              <h1 className="mb-2 sm:mb-3 lg:mb-6 leading-tight">
                <span className="block text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium">
                  Hi there!
                  <span className="block">I'm</span>
                </span>
                <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-serif">Mathews</span>
              </h1>
              <p className="text-white mb-2 sm:mb-3 lg:mb-6 font-semibold text-xs sm:text-sm lg:text-lg max-w-xl">
                Full-stack Developer & AI engineer
              </p>
              {/* Animated FREELANCER text */}
              <div className="mb-3 sm:mb-4 lg:mb-8 w-full max-w-xl flex justify-center">
                <div className="flex justify-between w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[480px]">
                  {['F', 'R', 'E', 'E', 'L', 'A', 'N', 'C', 'E', 'R'].map((letter, index) => (
                    <span
                      key={index}
                      className="text-white lg:text-lg font-semibold relative overflow-hidden inline-block"
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
              className="bg-white text-black px-5 sm:px-7  py-2.5 rounded-lg font-semibold shadow-lg hover:bg-white/80 transition-colors w-full mt-auto relative z-10 text-xs sm:text-sm"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98, transition: { duration: 0.25 } }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.6 }}
            >
              Book a service
            </motion.button>
          </motion.div>

          {/* Services Section */}
          <motion.div
            className="bg-black border border-gray-800 rounded-xl p-3 sm:p-1 lg:p-6 shadow-lg md:col-span-2 relative flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg lg:text-2xl font-medium text-white mb-3 sm:mb-4 lg:mb-6 text-center">
              Services I deliver
            </h3>
            
            {/* Services Grid */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center">
              {/* Design Service */}
            

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
                <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 mb-2 group-hover:scale-105 overflow-hidden">
                  <Image
                    src="/fullstack.png"
                    alt="Full-stack Development Service"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center group-hover:text-orange-600 transition-colors">
                  Development
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
                <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 mb-2 group-hover:scale-105 overflow-hidden">
                  <Image
                    src="/ai-dev.png"
                    alt="AI Engineering Service"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-bold text-white text-center group-hover:text-orange-600 transition-colors">
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
            className="bg-black border border-gray-800 rounded-xl p-0 lg:p-2 shadow-lg flex flex-col justify-between relative overflow-hidden h-full max-h-full"
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
              style={{ objectFit: "cover" }}
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
          {/* Always show all icons on mobile, restrict only on desktop */}
          <Link 
            href="https://linkedin.com/in/yourusername" 
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

          <Link 
            href="https://github.com/yourusername" 
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

          {/* Show these icons on all screens (remove hidden md:flex, just flex) */}
          <Link 
            href="https://discord.com/users/yourusername" 
            className="flex justify-center flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div 
              className="bg-black border border-gray-800 p-1.5 sm:p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </motion.div>
          </Link>

          <Link 
            href="https://facebook.com/yourusername" 
            className="flex justify-center flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div 
              className="bg-black border border-gray-800 p-1.5 sm:p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.div>
          </Link>

          <Link 
            href="https://instagram.com/yourusername" 
            className="flex justify-center flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div 
              className="bg-black border border-gray-800 p-1.5 sm:p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </motion.div>
          </Link>

          <Link 
            href="https://kaggle.com/yourusername" 
            className="flex justify-center flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div 
              className="bg-black border border-gray-800 p-1.5 sm:p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                <path d="M12 6.95c-2.79 0-5.05 2.26-5.05 5.05s2.26 5.05 5.05 5.05 5.05-2.26 5.05-5.05S14.79 6.95 12 6.95zm0 8.41c-1.85 0-3.36-1.85-3.36-3.36S10.15 8.64 12 8.64s3.36 1.85 3.36 3.36-1.51 3.36-3.36 3.36z" />
                <path d="M15.33 17H8.67a2.88 2.88 0 0 1-2.07-.86l4.96-4.96a1.4 1.4 0 0 1 1.98 0l4.96 4.96c-.55.55-1.3.86-2.07.86zm1.3-3.31L12 9.07 7.37 13.7c0-.56.22-1.09.62-1.49l3.26-3.26a1.4 1.4 0 0 1 1.98 0l3.26 3.26c.4.4.62.93.62 1.49z" />
              </svg>
            </motion.div>
          </Link>

          <Link 
            href="https://public.tableau.com/yourusername" 
            className="flex justify-center flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div 
              className="bg-black border border-gray-800 p-1.5 sm:p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
                <path d="M11.654 1.5H11.622C11.2 1.5 10.854 1.824 10.854 2.23V6.175H6.845C6.441 6.175 6.117 6.493 6.117 6.881V6.93C6.117 7.346 6.434 7.673 6.845 7.673H10.854V11.682C10.854 12.087 11.193 12.411 11.622 12.411H11.693C12.094 12.411 12.42 12.087 12.42 11.682V7.673H16.445C16.85 7.673 17.173 7.346 17.173 6.93V6.881C17.173 6.493 16.85 6.175 16.445 6.175H12.42V2.23C12.42 1.824 12.077 1.5 11.654 1.5z" />
                <path d="M6.007 13.153H5.982C5.577 13.153 5.254 13.469 5.254 13.859V17.762H1.253C0.849 17.762 0.525 18.088 0.525 18.491V18.55C0.525 18.946 0.849 19.265 1.253 19.265H5.254V23.269C5.254 23.674 5.577 24 5.982 24H6.007C6.429 24 6.746 23.674 6.746 23.269V19.265H10.764C11.168 19.265 11.493 18.946 11.493 18.55V18.491C11.493 18.088 11.168 17.762 10.764 17.762H6.746V13.859C6.746 13.469 6.429 13.153 6.007 13.153z" />
                <path d="M17.249 13.153H17.2C16.772 13.153 16.45 13.469 16.45 13.859V17.762H12.441C12.036 17.762 11.711 18.088 11.711 18.491V18.55C11.711 18.946 12.036 19.265 12.441 19.265H17.45V23.269C17.45 23.674 17.772 24 18.2 24H18.249C18.671 24 18.988 23.674 18.988 23.269V19.265H21.997C22.401 19.265 22.726 18.946 22.726 18.55V18.491C22.726 18.088 22.401 17.762 21.997 17.762H18.988V13.859C18.988 13.469 18.671 13.153 18.249 13.153z" />
                <path d="M17.249 1.5H17.2C16.772 1.5 16.45 1.824 16.45 2.23V6.175H12.441C12.036 6.175 11.711 6.493 11.711 6.881V6.93C11.711 7.346 12.036 7.673 12.441 7.673H17.45V11.682C17.45 12.087 17.772 12.411 18.2 12.411H18.249C18.671 12.411 18.988 12.087 18.988 11.682V7.673H21.997C22.401 7.673 22.726 7.346 22.726 6.93V6.881C22.726 6.493 22.401 6.175 21.997 6.175H18.988V2.23C18.988 1.824 18.671 1.5 18.249 1.5z" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  )
}
