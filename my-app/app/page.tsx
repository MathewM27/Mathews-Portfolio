"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"
import Education from "./components/Education"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <ProjectShowcase />
        <Services />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
