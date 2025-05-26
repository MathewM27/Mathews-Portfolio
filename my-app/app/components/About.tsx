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
      icon: Lightbulb,
      title: "Innovation First",
      description: "Constantly exploring new technologies and approaches to stay ahead of the curve",
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate builder with an entrepreneurial mindset
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section as concise highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Who I Am</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <span className="font-bold text-orange-500 block mb-1">Builder & AI Engineer</span>
                <p className="text-gray-700 text-sm">
                  I create practical tech that solves real problems, not just for show.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <span className="font-bold text-orange-500 block mb-1">LakazHub</span>
                <p className="text-gray-700 text-sm">
                  Built a rental platform for Mauritius—connecting owners and tenants with features that matter.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <span className="font-bold text-orange-500 block mb-1">BusTrack</span>
                <p className="text-gray-700 text-sm">
                  Building a real-time bus tracking app for Mauritius using AI and GPS to help commuters plan smarter and wait less.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <span className="font-bold text-orange-500 block mb-1">My Approach</span>
                <p className="text-gray-700 text-sm">
                  Understand the problem, use the right tools, and build what users need.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-100 rounded-2xl p-4 w-fit mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <value.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h4 className="font-bold text-black mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="bg-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-black mb-4">My Mission</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            To bridge the gap between cutting-edge technology and practical business needs, creating software solutions
            that are not just technically impressive, but genuinely useful and accessible to the people who need them
            most.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
