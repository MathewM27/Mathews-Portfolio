"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export default function Education() {
  const timeline = [
    {
      year: "Current",
      title: "BSc (Hons) Computer Science Systems Engineering",
      institution: "Middlesex University Mauritius",
      description: "Pursuing a degree in Computer Systems Engineering with a focus on software development and AI.",
      type: "degree",
      icon: GraduationCap,
    },
    {
      year: "2025",
      title: "Anaconda Python for Data Science Professional Certificate",
      institution: "Anaconda, Inc.",
      description: "Skills: Data Analysis · Statistics · Python (Programming Language)",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Artificial Intelligence",
      institution: "CrewAI",
      description: "Skills: Multi-Agent AI",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Career Essentials in Generative AI",
      institution: "Microsoft & LinkedIn",
      description: "Skills: Computer Ethics",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "ExamPro GenAI Essentials Certificate of Completion",
      institution: "ExamPro",
      description: "Skills: Generative AI Essentials",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Machine Learning with Python",
      institution: "freeCodeCamp",
      description: "Skills: Machine Learning with Python",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Data Analysis with Python",
      institution: "freeCodeCamp",
      description: "Skills: Data Cleaning · Statistical Data Analysis",
      type: "certification",
      icon: Award,
    },
    {
      year: "2023",
      title: "Artificial Intelligence Foundations: Machine Learning",
      institution: "LinkedIn",
      description: "Skills: Machine Learning",
      type: "certification",
      icon: Award,
    },
   
    {
      year: "2023",
      title: "C#",
      institution: "Codecademy",
      description: "Skills: C# Programming",
      type: "certification",
      icon: Award,
    },
    
    {
      year: "2022",
      title: "Responsive Web Design",
      institution: "freeCodeCamp",
      description: "Skills: Responsive Web Design",
      type: "certification",
      icon: Award,
    },
    {
      year: "2019",
      title: "Associate's degree, Information Technology",
      institution: "KCA University",
      description: "Completed foundational studies in Information Technology.",
      type: "degree",
      icon: GraduationCap,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "degree":
        return "bg-orange-100 text-orange-800"
      case "certification":
        return "bg-blue-100 text-blue-800"
      case "project":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">My Learning Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous growth through education, projects, and real-world application
          </p>
        </motion.div>

        {/* Timeline with left/right alternation */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0" />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={index}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-full max-w-xl bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group z-10 ${isLeft ? "ml-0 mr-auto" : "mr-0 ml-auto"}`}
                  whileHover={{ y: -2 }}
                  style={{ width: "calc(50% - 2rem)" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-orange-100 transition-colors">
                        <item.icon className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20">
                  <motion.div
                    className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-lg"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Core Competencies</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "Express", "FastAPI"],
              },
              {
                category: "AI & Data",
                skills: ["Python", "Hugging Face", "Langchain", "OpenAI API"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-black mb-3">{category.category}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
