
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mathews Mwangi | Portfolio Home",
  description: "Welcome to my personal portfolio showcasing projects in system engineering, entrepreneurship, and innovation.",
  openGraph: {
    title: "Mathews Mwangi | Portfolio Home",
    description: "Welcome to my personal portfolio showcasing projects in system engineering, entrepreneurship, and innovation.",
    url: "https://mathewsmwangi.com/",
    images: [
      {
        url: "https://mathewsmwangi.com/OG.png",
        width: 1200,
        height: 630,
        alt: "Mathews Mwangi Portfolio",
      },
    ],
  },
}



import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"
import ProcessPlan from "./components/ProcessPlan"
import Blog from "./components/Blog"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


import ClientOnly from "./components/ClientOnly"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <Hero />
        <About />
        
        <ProjectShowcase />
        <Services />
        <ProcessPlan />
        <Blog />

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
