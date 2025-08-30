"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
     id: 1,
     title: "Aircall",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration expliquant ce qu'Aircall peut faire.",
     services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjkkmAsOnk6Z0aKAOH3TspmrCuFeME74fB5Qq",
     vimeoUrl: "https://vimeo.com/1114342087",
    },
    {
     id: 2,
     title: "Typeform",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration produit montrant ce que Typeform peut faire.",
     services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRYNBCPPV8xN4tsZSVcawW35TIh0CgyLOYHAi",
     vimeoUrl: "https://vimeo.com/1114346252",
    },
    {
     id: 3,
     title: "Malt",
     subtitle: "Démonstration produit",
     description: "Vidéo animée expliquant la nouvelle fonctionnalité de Malt, AI search.",
     services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVGnpXRPBHNo2Fl95RE1eVgdJmnxZq4zjfCtBK",
     vimeoUrl: "https://vimeo.com/1114350536",
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