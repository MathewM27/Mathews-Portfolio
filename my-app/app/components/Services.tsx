"use client"

import { motion } from "framer-motion"
import { Code, Brain, Smartphone, Database, Cloud, Zap, PenTool, Figma, Paintbrush2, Shapes, LayoutDashboard, Server, Smartphone as MobileIcon, BookOpen, DatabaseZap, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      category: "Design",
      icon: PenTool,
      description: "Creative design solutions for digital and print media",
      expertise: [
        "UI/UX Design",
        "Cooperate business graphics",
        "Social Media post designs",
      ],
      color: "orange",
    },
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
      icon: Figma,
      title: "Design",
      description: "Figma, Canva, Spline",
    },
    {
      icon: LayoutDashboard,
      title: "Fullstack",
      description: "Next.js, Supabase, Strapi",
    },
    {
      icon: BookOpen,
      title: "AI Engineering",
      description: "Langchain, Langbase, CrewAI",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">What I Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions that bridge technology and business value
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-2xl ${service.color === "orange" ? "bg-orange-100" : "bg-gray-100"} mr-4`}>
                  <service.icon
                    className={`w-6 h-6 ${service.color === "orange" ? "text-orange-500" : "text-black"}`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">{service.category}</h3>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

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
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 rounded-2xl p-4 w-fit mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                <service.icon className="w-6 h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="font-semibold text-black mb-2">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
