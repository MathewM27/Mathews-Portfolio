"use client"

import { ExternalLink, Github } from "lucide-react"

export default function ProjectShowcase() {
  const projects = {
    design: [
      {
        name: "Graphic Design",
        description: "Neatly crafted graphics for corporate branding, marketing materials, social media, and publications.",
        tools: ["Canvas", "Photoshop"],
        demo: "#",
        github: "",
        size: "medium",
        status: "completed",
        image: "/graphics.png",
      },
      {
        name: "UI/UX Design",
        description: "User-centered design solutions for web and mobile applications with focus on usability and aesthetics.",
        tools: ["Figma", "Draw.io"],
        demo: "#",
        github: "",
        size: "medium",
        status: "completed",
        image: "/UIUX.png",
      },
      {
        name: "Web Design",
        description: "Modern, responsive web designs that convert visitors into customers with compelling user experience.",
        tools: ["React.js", "Tailwind CSS"],
        demo: "#",
        github: "",
        size: "small",
        status: "completed",
        image: "/Coffee.png",
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
            {project.category === 'design' ? (
              project.github && (
                <a href={project.github} className="flex items-center gap-1 text-gray-600 hover:text-black text-sm" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> Code
                </a>
              )
            ) : (
              <a href={project.demo} className="flex items-center gap-1 text-orange-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> View Project
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
            A showcase of my work in AI engineering, fullstack development and design
          </p>
        </div>

        {/* AI Engineering */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-black mb-6">AI Engineering</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.ai.map((project) => (
              <ProjectCard key={project.name} project={{...project, category: 'ai'}} />
            ))}
          </div>
        </div>

        {/* Fullstack Development */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-black mb-6">Fullstack Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.fullstack.map((project) => (
              <ProjectCard key={project.name} project={{...project, category: 'fullstack'}} />
            ))}
          </div>
        </div>

        {/* Design */}
        <div>
          <h3 className="text-xl font-bold text-black mb-6">Design</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.design.map((project) => (
              <ProjectCard key={project.name} project={{...project, category: 'design'}} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
