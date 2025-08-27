"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
        {
      id: 1,
      title: "Drata",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Drata, Softcat.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Startup",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywqSo613yucagDQM1fypRjomx7Ct05zsVwrhkY  ",
      vimeoUrl: "https://vimeo.com/1110326216  ",
    },
    {
      id: 2,
      title: "Salesforce",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Salesforce, Fisher and Paykel.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtSZvvQ134vBTOxF8dARqINU9EX5yck2foZjG  ",
      vimeoUrl: "https://vimeo.com/1110324328  ",
    },
    {
      id: 3,
      title: "Kandji",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Kandji, Rackspace Technology.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywJaeBiHsXNLP2QdFWhK9OvG3Rr0fZVD4Htsme  ",
      vimeoUrl: "https://vimeo.com/1110322579  ",
    },
    {
      id: 4,
      title: "Mercury Bank",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Mercury, Mango Puzzles.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Finance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtZ4Wth134vBTOxF8dARqINU9EX5yck2foZjG  ",
      vimeoUrl: "https://vimeo.com/1110313363  ",
    },
    {
      id: 5,
      title: "HSBC",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client HSBC, Cinépolis.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Finance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywBitVFFPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5  ",
      vimeoUrl: "https://vimeo.com/1102894973  ",
    },
    {
      id: 6,
      title: "HP",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client HP, Digital Etikett",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnrVMma2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE  ",
      vimeoUrl: "https://vimeo.com/1102895095  ",
    }
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