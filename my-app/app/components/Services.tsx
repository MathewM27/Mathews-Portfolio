"use client"

import { motion } from "framer-motion"
import { Code, Brain, LayoutDashboard, BookOpen } from "lucide-react"

export default function Services() {
  const services = [
    {
      category: "Fullstack Development",
      icon: Code,
      description: "End-to-end web application development with modern technologies",
      expertise: [
        "Custom webapp applications (PWA)",
        "Custom CMS",
        "Mobile application (React Native)",
      ],
      color: "orange",
    },
    {
      category: "AI Engineering",
      icon: Brain,
      description: "Intelligent solutions that automate and enhance business processes",
      expertise: [
        "RAG integration",
        "Agentic AI",
        "AI consultancy",
      ],
      color: "black",
    },
  ]

  const additionalServices = [
    {
      icon: LayoutDashboard,
      title: "Fullstack",
      description: "Next.js, TailwindCss, Supabase, ExpressJs, MongoDB, React Native with Expo, Firebase",
    },
    {
      icon: BookOpen,
      title: "AI Engineering",
      description: "Langchain, Prisma, Pytorch, OPENAI, llama, CrewAI",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What I Offer</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions that bridge technology and business value
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className="bg-black border border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-2xl ${service.color === "orange" ? "bg-black border border-gray-800" : "bg-black border border-gray-800"} mr-4`}>
                  <service.icon
                    className={`w-6 h-6 ${service.color === "orange" ? "text-white" : "text-white"}`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.category}</h3>
              </div>

              <p className="text-gray-200 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.expertise.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-black border border-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="bg-black border border-gray-800 rounded-2xl p-4 w-fit mx-auto mb-4 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="font-semibold text-white mb-2">{service.title}</h4>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                {service.description.split(",").map((tool: string) => (
                  <span
                    key={tool.trim()}
                    className="px-3 py-1 bg-black border border-gray-800 text-gray-200 rounded-full text-xs font-medium"
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}