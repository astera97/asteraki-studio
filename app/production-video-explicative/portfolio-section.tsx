"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page des vidéos explicatives
export default function PortfolioSection() {
  const portfolioProjects = [
    {
     id: 1,
     title: "Malt",
     subtitle: "Vidéo explicative",
     description: "Vidéo explicative du term Super team avec l'équipe de Malt",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV21oGj537WJBOGwHyYpLQ8mtukDFsr9nVZ07e",
     vimeoUrl: "https://vimeo.com/1114350408",
    },
    {
     id: 2,
     title: "Cegedim",
     subtitle: "Vidéo explicative",
     description: "Vidéo animée expliquant les différentes expertises de Cegedim Pharma.",
     services: ["Scénario", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo explicative",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVL3177Lbf8wJFWPDVs4Ky3z2UpGML7SAeE10r",
     vimeoUrl: "https://vimeo.com/1113713647",
    },
    {
     id: 3,
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
            Découvrez certains de nos travaux pour <br/>des vidéos explicatives claires et percutantes.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons créé plus de 350 vidéos explicatives avec un taux de rétention moyen des spectateurs de 85%. <br/>Notre approche stratégique garantit que vos concepts complexes deviennent instantanément compréhensibles.
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