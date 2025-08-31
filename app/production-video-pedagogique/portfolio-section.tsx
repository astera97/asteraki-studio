"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "ELVTR",
      subtitle: "Conseil d'expert",
      description: "Introduction de cours sur la conception durable avec une cofondatrice et directrice des intérieurs chez byWatkins",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Conseil d'expert",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVMJIY6Zk9bJcHXMNUQfstv87OVhrZn4GzoAa",
      vimeoUrl: "https://vimeo.com/1111259314",
    },
    {
      id: 2,
      title: "INSEAD",
      subtitle: "Événement",
      description: "Cérémonie INSEAD pour la classe MBA de juillet 2025",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Événement",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywg3ba8VfVWtRqG5128kLSxdCylOInE6DP3AcK",
      vimeoUrl: "https://vimeo.com/1111278745",
    },
    {
      id: 4,
      title: "UDEMY",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant comment Udemy utilise l'IA pour garantir la satisfaction.",
      services: ["Scénario", "Cinématographie", "Motion design", "Étalonnage des couleurs"],
      videoType: "Vidéo explicative",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCKxYlE6dH7rVT25qFa9GQY8gkxhfvsZSXJMC",
      vimeoUrl: "https://vimeo.com/1111297326",
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