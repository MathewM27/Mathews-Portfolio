"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"
import ProcessPlan from "./components/ProcessPlan"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ClientTypesSection from "./components/myClient"

import ClientOnly from "./components/ClientOnly"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <Hero />
        <ClientTypesSection />
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
 