"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Lettuce",
      subtitle: "Vidéo de marque",
      description: "Production de la vidéo de marque Lettuce présentant les fonctionnalités du logiciel.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de Marque",
      industry: "SaaS",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT  ",
      vimeoUrl: "https://vimeo.com/1110291462  ",
    },
    {
     id: 2,
     title: "Aircall",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque pour l'entreprise Aircall.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de marque",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVcmINPu9r3QfKI0dziE8sFt4BVwMqT2bChkLN",
     vimeoUrl: "https://vimeo.com/1114342036",
    },
    {
      id: 3,
      title: "Girard-Perregaux",
      subtitle: "Vidéo de marque",
      description: "Production d'une vidéo de marque de luxe pour la Laureato Chronograph Ti49 de Girard-Perregaux",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de marque",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7rLCbZwavFUfw5SNg3PlOHYAIuB0yjRm1hpK  ",
      vimeoUrl: "https://vimeo.com/1102877371  ",
    },
    
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour <br/>des campagnes vidéo de marque gagnantes.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons obtenu plus de 1 milliard de vues sur plus de 580 projets vidéo. <br/>Nous savons ce qui fonctionne, et ce qui ne fonctionne pas.
          </p>
        </div>
        
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* Bouton CTA */}
        <div className="text-center mt-16">
          <Link href="/work">
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
              Voir notre portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}