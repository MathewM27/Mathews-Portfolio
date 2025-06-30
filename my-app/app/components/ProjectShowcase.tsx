"use client"

import { ExternalLink, Github } from "lucide-react"

export default function ProjectShowcase() {
  const projects = {
    design: [
      {
        name: "Fintech-Conference Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tools: ["Figma", "Photoshop"],
        demo: "#",
        github: "",
        size: "medium",
        status: "completed",
        image: "/design1.jpg",
      },
      {
        name: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tools: ["Figma", "Adobe XD"],
        demo: "#",
        github: "",
        size: "medium",
        status: "completed",
        image: "/design2.jpg",
      },
      {
        name: "Logo Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tools: ["Illustrator", "Photoshop"],
        demo: "#",
        github: "",
        size: "small",
        status: "completed",
        image: "/design3.jpg",
      },
    ],
    fullstack: [
      {
        name: "Lifestyle Aviation Jet Limited",
        description: "Fullstack private jet booking platform that allows luxury travel.",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#",
        size: "large",
        status: "completed",
        image: "/fly.jpg",
      },
      {
        name: "Resturant Strarrastu",
        description: "Fullstack restaurant management and ordering platform.",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#",
        size: "large",
        status: "completed",
        image: "/restaurant.jpg",
      },
      {
        name: "Travel Agency",
        description: "Travel agency booking and management system.",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#",
        size: "large",
        status: "completed",
        image: "/travel.jpg",
      },
    ],
    ai: [
      {
        name: "Rezy Resume",
        description: "AI-powered resume builder and analyzer.",
        tools: ["Python", "Next.js", "OpenAI"],
        demo: "#",
        github: "#",
        size: "medium",
        status: "in-development",
        image: "/resume.jpg",
      },
      {
        name: "OnboardAI",
        description: "AI tool that helps with employee onboarding leveraging RAG model etc",
        tools: ["Python", "LangChain", "OpenAI", "Next.js"],
        demo: "#",
        github: "#",
        size: "medium",
        status: "completed",
        image: "/Typing.jpg",
      },
      {
        name: "Neura Learn",
        description: "AI personalized tutor",
        tools: ["Python", "Next.js", "OpenAI", "LangChain"],
        demo: "#",
        github: "#",
        size: "large",
        status: "in-development",
        image: "/Learn.jpg",
      },
    ],
  }

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-0 shadow hover:shadow-lg transition flex flex-col h-full">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold text-black px-5 pt-5 pb-2">{project.name}</h3>
        {project.image && (
          <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full"
              style={{ borderRadius: "0.75rem 0.75rem 0 0" }}
            />
          </div>
        )}
        <div className="flex-1 flex flex-col px-5 pb-5 pt-3">
          <p className="text-gray-600 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tools.map((tool: string) => (
              <span key={tool} className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs">{tool}</span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <a href={project.demo} className="flex items-center gap-1 text-orange-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
            {project.github && (
              <a href={project.github} className="flex items-center gap-1 text-gray-600 hover:text-black text-sm" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">Featured Projects</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in design, fullstack development and AI engineering
          </p>
        </div>

        {/* Design */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-black mb-6">Design</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.design.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* Fullstack Development */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-black mb-6">Fullstack Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.fullstack.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* AI Engineering */}
        <div>
          <h3 className="text-xl font-bold text-black mb-6">AI Engineering</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.ai.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
