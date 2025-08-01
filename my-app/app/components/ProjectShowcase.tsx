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
        image: "/lifestyle.png",
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
        <h3 className="text-lg font-bold text-white text-center px-5 pt-5 pb-2">{project.name}</h3>
        {project.image && (
          <div className="w-full h-40 bg-gray-800 flex items-center justify-center overflow-hidden relative">
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
        <div className="flex-1 flex flex-col px-5 pb-5 pt-3">
          <p className="text-gray-300 text-sm mb-3 text-center">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3 items-center justify-center">
            {project.tools.map((tool: string) => (
              <span key={tool} className="bg-black border border-gray-800 text-gray-200 rounded-full px-2 py-1 text-xs">{tool}</span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto mx-auto">
            <a href={project.demo} className="flex items-center justify-center gap-1 text-orange-500 hover:underline text-sm text-center" target="_blank" rel="noopener noreferrer">
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