"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, EXEL.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZN3ImH5DmjQM0nVEs2BHNKk8yJeWpug7rf34",
      vimeoUrl: "https://vimeo.com/1113694980",
    },
    {
      id: 2,
      title: "Asana",
      subtitle: "Démonstration produit",
      description: "Vidéo animée expliquant les fonctionnalités d'Asana.",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Démonstration produit",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVvtyZSv13dJewK5HDhqcx2ks9fTPaG0RgtMrU",
      vimeoUrl: "https://vimeo.com/1110585868",
    },
    {
      id: 3,
      title: "Sage",
      subtitle: "Démonstration produit",
      description: "Vidéo animée expliquant",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Démonstration produit",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywo9APpBl9I70VrizFWUEMGZOQmjYlcDPRCLxT",
      vimeoUrl: "https://vimeo.com/1113692472",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez quelques-unes de nos réalisations pour les entreprises de technologie.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons obtenu plus de 1 milliard de vues sur 580+ projets vidéo. <br/>Nous savons ce qui fonctionne, et ce qui ne fonctionne pas.
          </p>
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