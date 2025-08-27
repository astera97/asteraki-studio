"use client"

import { useState } from "react"
import PortfolioItem from "./portfolio-item"
import PortfolioModal from "./portfolio-modal"

interface PortfolioProject {
  id: number
  title: string
  subtitle: string
  description: string
  services: string[]
  videoType: string
  industry: string
  thumbnail: string
  vimeoUrl: string
}

interface PortfolioGridProps {
  projects: PortfolioProject[]
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortfolioItem
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            videoType={project.videoType}
            industry={project.industry}
            thumbnail={project.thumbnail}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <PortfolioModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        subtitle={selectedProject?.subtitle || ""}
        description={selectedProject?.description || ""}
        services={selectedProject?.services || []}
        vimeoUrl={selectedProject?.vimeoUrl || ""}
        videoType={selectedProject?.videoType || ""}
        industry={selectedProject?.industry || ""}
      />
    </>
  )
}
