"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page des vidéos d'événements
export default function PortfolioSection() {
  const portfolioProjects = [
    {
     id: 1,
     title: "Malt",
     subtitle: "Évènement",
     description: "Vidéo évènement pour Malt durant VivaTech 2024.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Évènement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVJgQDR2KuqgdOsGVhtpIHWTxEMPov1QX37nkB",
     vimeoUrl: "https://vimeo.com/1114350569",
    },
    {
      id: 2,
      title: "Deloitte",
      subtitle: "Évènement",
      description: "Mobile World Congress 2025： Booth Tour de Deloitte.",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6b1njjuM0sOH4LRiZ2hEraGKUtQVDIYCP3bJ",
      vimeoUrl: "https://vimeo.com/1113714103",
    },
    {
      id: 51,
      title: "Sage",
      subtitle: "Évènement",
      description: "Retour en images sur le Sage Partner Day 2025 au Hangar Y",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technology",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVtDlmftdTBWldAyg2P0M5Chku4INecjLo9UbH",
      vimeoUrl: "https://vimeo.com/1113690563",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour une couverture vidéo d'événements captivante.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons couvert plus de 150 événements dans plus de 20 pays. <br/>Notre approche cinématographique garantit que vous ne manquez aucun moment clé.
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