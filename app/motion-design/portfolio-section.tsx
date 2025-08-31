"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "UDEMY",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant comment Udemy utilise l'IA pour garantir la satisfaction.",
      services: ["Scénario", "Cinématographie", "Motion design", "Étalonnage des couleurs"],
      videoType: "Vidéo explicative",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCKxYlE6dH7rVT25qFa9GQY8gkxhfvsZSXJMC",
      vimeoUrl: "https://vimeo.com/1111297326",
    },
    {
     id: 2,
     title: "Cegedim",
     subtitle: "Démonstration produit",
     description: "Vidéo de présentation de Cegedim Pharma.",
     services: ["Scénario", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsA1Zb5a93bxoLyhcW8aNnVRf0tO2vu4mHdZ",
     vimeoUrl: "https://vimeo.com/1113713798",
    },
     {
     id: 53,
     title: "Sage",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant la procédure d'insciption à la PDP Sage.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVj1XY6Gnk6Z0aKAOH3TspmrCuFeME74fB5QqN",
     vimeoUrl: "https://vimeo.com/1113692472",
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