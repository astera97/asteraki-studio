"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
     {
     id: 1,
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
     id: 2,
     title: "Sanofi",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque présantant la culture de l'entreprise Sanofi France.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de marque",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6XA4z2yuM0sOH4LRiZ2hEraGKUtQVDIYCP3b",
     vimeoUrl: "https://vimeo.com/1114223480",
    },
    {
     id: 3,
     title: "MSD France",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque au siège de MSD France présentant la culture d'entreprise.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de marque",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVG0CLLPBHNo2Fl95RE1eVgdJmnxZq4zjfCtBK",
     vimeoUrl: "https://vimeo.com/1114255401",
    },

  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez quelques-unes de nos réalisations pour <br/>des campagnes vidéo de marque gagnantes.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons obtenu plus de 1 milliard de vues sur 580+ projets vidéo. <br/>Nous savons ce qui fonctionne, et ce qui ne fonctionne pas.
          </p>
        </div>
        
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* CTA Button */}
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