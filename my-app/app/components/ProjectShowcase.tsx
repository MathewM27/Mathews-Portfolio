"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectShowcase() {
  const projects = {
    fullstack: [
      {
        name: "Lifestyle Aviation Jet Limited",
        description: "Fullstack private jet booking platform that allows luxury travel.",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#",
        size: "large",
        status: "completed",
        image: "/aviation.png",
      },
      {
        name: "LakazHub",
        description: "Fullstack rental platform",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#",
        size: "large",
        status: "completed",
        image: "/Lakaz.png",
      },
      {
        name: "Travel Agency",
        description: "Travel agency booking and management system.",
        tools: ["React", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#",
        size: "large",
        status: "completed",
        image: "/Travel.png",
      },
    ],
    ai: [
      {
        name: "PostForge",
        description: "AI-powered content creator ideas to posts",
        tools: ["Python", "Next.js", "OpenAI"],
        demo: "#",
        github: "#",
        size: "medium",
        status: "in-development",
        image: "/postforge.png",
      },
      {
        name: "OnboardAI",
        description: "AI tool that helps with employee onboarding leveraging RAG model etc",
        tools: ["Python", "LangChain", "OpenAI", "Next.js"],
        demo: "#",
        github: "#",
        size: "medium",
        status: "completed",
        image: "/Onboard.png",
      },
      {
        name: "Rezy AI",
        description: "AI resume analyzer",
        tools: ["Python", "Next.js", "OpenAI", "LangChain"],
        demo: "#",
        github: "#",
        size: "large",
        status: "in-development",
        image: "/Rezy.png",
      },
    ],
  }

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-black border border-gray-800 rounded-xl p-0 shadow hover:shadow-lg transition flex flex-col h-full">
      <div className="flex flex-col h-full">
        {project.image && (
          <div className="w-full h-44 bg-gray-800 flex items-center justify-center overflow-hidden relative rounded-t-xl">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </div>
        )}
        <div className="flex-1 flex flex-col px-5 pb-5 pt-4">
          <h3 className="text-lg font-bold text-white text-center mb-2">{project.name}</h3>
          <p className="text-gray-300 text-sm text-center mb-4">{project.description}</p>
          <div className="flex gap-3 mt-auto mx-auto">
            <a
              href={project.demo}
              className="flex items-center justify-center gap-1 text-white hover:text-orange-500 font-semibold text-sm transition-colors border border-gray-800 rounded-full px-4 py-2 bg-black hover:bg-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" /> View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in AI engineering and fullstack development
          </p>
        </div>

        {/* AI Engineering */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6">AI Engineering</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.ai.map((project) => (
              <ProjectCard key={project.name} project={{...project, category: 'ai'}} />
            ))}
          </div>
        </div>

        {/* Fullstack Development */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Fullstack Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.fullstack.map((project) => (
              <ProjectCard key={project.name} project={{...project, category: 'fullstack'}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}