"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export default function Education() {
  const timeline = [
    {
      year: "Current",
      title: "Computer Science Systems Engineering",
      institution: "Middlesex University Mauritius",
      description: "BSc (Hons) degree focusing on software development and AI",
      type: "degree",
      icon: GraduationCap,
    },
    {
      year: "2025",
      title: "Python for Data Science",
      institution: "Anaconda, Inc.",
      description: "Professional certification in data analysis and statistics",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Artificial Intelligence",
      institution: "CrewAI",
      description: "Certification in Multi-Agent AI systems",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Generative AI Essentials",
      institution: "Microsoft & LinkedIn",
      description: "Career essentials in generative AI applications",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "GenAI Essentials",
      institution: "ExamPro",
      description: "Certificate of completion in generative AI fundamentals",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Machine Learning",
      institution: "freeCodeCamp",
      description: "Certification in machine learning with Python",
      type: "certification",
      icon: Award,
    },
    {
      year: "2025",
      title: "Data Analysis",
      institution: "freeCodeCamp",
      description: "Certification in data cleaning and statistical analysis",
      type: "certification",
      icon: Award,
    },
    {
      year: "2023",
      title: "Machine Learning Foundations",
      institution: "LinkedIn",
      description: "Certification in AI and machine learning fundamentals",
      type: "certification",
      icon: Award,
    },
    {
      year: "2023",
      title: "C# Programming",
      institution: "Codecademy",
      description: "Certification in C# programming language",
      type: "certification",
      icon: Award,
    },
    {
      year: "2022",
      title: "Responsive Web Design",
      institution: "freeCodeCamp",
      description: "Certification in modern responsive web design techniques",
      type: "certification",
      icon: Award,
    },
    {
      year: "2019",
      title: "Information Technology",
      institution: "KCA University",
      description: "Associate's degree in Information Technology",
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
    <section id="education" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">My Learning Journey</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous growth through education, projects, and real-world application
          </p>
        </motion.div>

        {/* Timeline - Responsive design */}
        <div className="relative">
          {/* Vertical center line - hidden on smallest screens */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:-translate-x-1/2 z-0" />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative flex mb-8 sm:mb-12 last:mb-0 ${
                  // On mobile, always stack with timeline on left
                  // On medium screens+, alternate between left and right
                  isLeft 
                    ? "md:flex-row items-start" 
                    : "md:flex-row-reverse items-start" 
                }`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <motion.div
                  className={`
                    w-full ml-10 md:ml-0 md:w-[calc(50%-1.5rem)]
                    bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 
                    shadow-sm hover:shadow-md transition-all duration-300 
                    group z-10
                    ${isLeft ? "md:mr-6 md:ml-0" : "md:ml-6 md:mr-0"}
                  `}
                  whileHover={{ y: -2 }}
                  style={{ 
                    width: "calc(100% - 2.5rem)",
                    maxWidth: "100%"
                  }}
                >
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="hidden sm:block p-1.5 sm:p-2 bg-gray-100 rounded-lg sm:rounded-xl group-hover:bg-orange-100 transition-colors">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">{item.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 sm:gap-2">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {item.year}
                      </div>
                      <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </motion.div>

                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 sm:top-6 z-20">
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full border-3 sm:border-4 border-white shadow-lg"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-10 sm:mt-16 bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">Core Competencies</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
                <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">{category.category}</h4>
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 sm:px-3 sm:py-1 bg-white text-gray-700 rounded-full text-xs sm:text-sm">
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
