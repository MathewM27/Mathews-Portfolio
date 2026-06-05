import Header from "./components/Header"
import Hero from "./components/Hero"
import ProjectShowcase from "./components/ProjectShowcase"
import Services from "./components/Services"
import ProcessPlan from "./components/ProcessPlan"
// import Blog from "./components/Blog"
// import References from "./components/References"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ClientOnly from "./components/ClientOnly"
import JsonLd from "./components/JsonLd"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd />
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <Hero />
        <About />
        <ProjectShowcase />
        <Services />
        <ProcessPlan />
        {/* <Blog /> */}
        {/* <References /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
