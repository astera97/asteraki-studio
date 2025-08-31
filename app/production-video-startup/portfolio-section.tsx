"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
     id: 1,
     title: "Malt",
     subtitle: "Vidéo explicative",
     description: "Vidéo explicative du terme Superteam avec l'équipe de Malt",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV21oGj537WJBOGwHyYpLQ8mtukDFsr9nVZ07e",
     vimeoUrl: "https://vimeo.com/1114350408",
    },
    {
     id: 2,
     title: "Aircall",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration expliquant ce qu'Aircall peut faire.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjkkmAsOnk6Z0aKAOH3TspmrCuFeME74fB5Qq",
     vimeoUrl: "https://vimeo.com/1114342087",
    },
    {
     id: 3,
     title: "Lucca",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant la saisie et le suivi des temps de travail avec Lucca Feuilles de temps.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVumo7XnMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2",
     vimeoUrl: "https://vimeo.com/1114338327",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez quelques-unes de nos campagnes vidéos réussies pour les startups.
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