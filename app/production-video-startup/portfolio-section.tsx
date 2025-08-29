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
     title: "Zapier",
     subtitle: "Vidéo de recrutement",
     description: "Portrait collaborateur avec l'équipe de Zapier.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de recrutement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVLuaOAibf8wJFWPDVs4Ky3z2UpGML7SAeE10r",
     vimeoUrl: "https://vimeo.com/1114340171",
    },
    {
     id: 3,
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
    id: 4,
    title: "Notion",
    subtitle: "Démonstration produit",
    description: "Vidéo animée expliquant Notion et ses fonctionnalités.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Démonstration produit",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt87OYL134vBTOxF8dARqINU9EX5yck2foZjG",
    vimeoUrl: "https://vimeo.com/1110392859",  
    },
    {
     id: 5,
     title: "Typeform",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration produit montrant ce que Typeform peut faire.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRYNBCPPV8xN4tsZSVcawW35TIh0CgyLOYHAi",
     vimeoUrl: "https://vimeo.com/1114346252",
    },
    {
     id: 6,
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