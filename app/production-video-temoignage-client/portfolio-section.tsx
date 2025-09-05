"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
      {
      id: 1,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, EXEL.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZN3ImH5DmjQM0nVEs2BHNKk8yJeWpug7rf34",
      vimeoUrl: "https://vimeo.com/1113694980",
    },
    {
      id: 2,
      title: "Sage",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Sage, Kalhyge.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyws7Qb2Zh9tIXKsu1OETl2SqkiA0bH7zG5eaor",
      vimeoUrl: "https://vimeo.com/1113712907",
    },
    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Exemples de vidéos témoignage client
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons obtenu plus de 1 milliard de vues sur plus de 580 projets vidéo. <br/>Nous savons ce qui fonctionne, et ce qui ne fonctionne pas.
          </p>
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