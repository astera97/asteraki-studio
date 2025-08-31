"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
     id: 1,
     title: "MSD France",
     subtitle: "Vidéo de recrutement",
     description: "Vidéo de recrutement montrant le parcours professionnel des collaborateurs chez MSD.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de recrutement",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6XyUc9juM0sOH4LRiZ2hEraGKUtQVDIYCP3b",
     vimeoUrl: "https://vimeo.com/1114255241",
    },
    {
    id: 2,
    title: "Bolt",
    subtitle: "Vidéo de recrutement",
    description: "Vidéo d'entreprise mettant en lumière les employés de Bolt.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Vidéo de recrutement",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvuM8M7GgmR8DzbQXG4njAStoPfq2aTk7JiFL    ",
    vimeoUrl: "https://vimeo.com/1104256442",
  },
  {
      id: 44,
      title: "Deloitte",
      subtitle: "Vidéo de recrutement",
      description: "Campagne de recrutement pour Deloitte, Life Sciences & Health Care Careers.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo de recrutement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVxhD6JjmkdfVjkbuO409UhABiKIpeEqDgnCNw",
      vimeoUrl: "https://vimeo.com/1114333421",
  },

  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour des campagnes de recrutement gagnantes.
          </h2>
          
        </div>
        
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* Bouton CTA */}
        <div className="text-center mt-16">
          <Link href="/realisations">
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
              Voir notre portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}