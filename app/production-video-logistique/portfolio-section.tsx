"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Geodis",
      subtitle: "Vidéo explicative",
      description: "Vidéo explcative sur le processus de Geodis.",
      services: ["Scénario", "Motion design", "Storyboard"],
      videoType: "Vidéo explicative",
      industry: "Logistique",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnA96qWDx46ydSpE25FeO3PBXUsDz80LqGmi7",
      vimeoUrl: "https://vimeo.com/1114621314",
    },
    {
      id: 2,
      title: "Kuehne+Nagel",
      subtitle: "Démonstration produit",
      description: "Vidéo explcative sur la solution de Kuehne+Nagel, myFairLOG.",
      services: ["Scénario", "Motion design", "Storyboard"],
      videoType: "Démonstration produit",
      industry: "Logistique",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV2AB1ak7WJBOGwHyYpLQ8mtukDFsr9nVZ07eK",
      vimeoUrl: "https://vimeo.com/1111696360",
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
            Découvrez nos réalisations pour le secteur logistique
          </h2>
        </div>
        
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* CTA Button */}
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