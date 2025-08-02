"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"
import ProcessPlan from "./components/ProcessPlan"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ClientOnly from "./components/ClientOnly"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <ClientOnly>
        <Header scrollY={scrollY} />
      </ClientOnly>
      <main>
        <Hero />
        <ProjectShowcase />
        <Services />
        <ProcessPlan />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
