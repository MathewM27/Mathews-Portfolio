"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Rocket } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every project I build aims to solve real problems and create meaningful value",
    },
    {
      icon: Target,
      title: "Value-driven",
      description: "Committed to delivering maximum value and excellence in every solution I create",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designing experiences that prioritize usability and accessibility",
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "Embracing challenges as opportunities to learn and improve continuously",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A passionate builder with an entrepreneurial mindset
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-black border border-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="bg-black border border-gray-800 rounded-2xl p-4 w-fit mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">{value.title}</h4>
              <p className="text-sm text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-black border border-gray-800 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            To create solutions, focusing on the need and value of the customer and serving to the maximum excellence
          </p>
        </motion.div>
      </div>
    </section>
  )
}
