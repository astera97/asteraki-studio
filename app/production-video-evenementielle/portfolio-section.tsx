"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page des vidéos d'événements
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "HSBC",
      subtitle: "Vidéo d'événement",
      description: "Vidéo d'événement marquant le 160e anniversaire d'HSBC.",
      services: ["Production multi-caméras", "Diffusion en direct", "Réels de temps forts", "Post-production"],
      videoType: "Vidéo d'événement",
      industry: "Finance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw1ACkJ3L0yHGBKOREhLxl4Ti6nuevra7FcWC5  ",
      vimeoUrl: "https://vimeo.com/1110422970  ",
    },
    {
      id: 2,
      title: "Okta",
      subtitle: "Vidéo d'événement",
      description: "Moments clés d'Oktane 2024",
      services: ["Production multi-caméras", "Diffusion en direct", "Réels de temps forts", "Post-production"],
      videoType: "Vidéo d'événement",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywlwypQONjhtsPvHbSRacMYefKT2gQAxB90k3n  ",
      vimeoUrl: "https://vimeo.com/1110421805  ",
    },
    {
      id: 3,
      title: "Bolt",
      subtitle: "Vidéo d'événement",
      description: "Aftermovie avec Bolt pendant leur événement de team building.",
      services: ["Production multi-caméras", "Diffusion en direct", "Réels de temps forts", "Post-production"],
      videoType: "Vidéo d'événement",
      industry: "Startup",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVm6qgfs5MHqgpiKfXLTktCOlh2Dac86JuZso9  ",
      vimeoUrl: "https://vimeo.com/1104168315?share=copy",
    },
    {
      id: 4,
      title: "Cannes Lions",
      subtitle: "Vidéo d'événement",
      description: "Couverture de l'événement pendant le Festival Cannes Lions 2024.",
      services: ["Production multi-caméras", "Diffusion en direct", "Réels de temps forts", "Post-production"],
      videoType: "Vidéo d'événement",
      industry: "Publicité",
      thumbnail: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFEh98fCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh  ",
      vimeoUrl: "https://vimeo.com/1102886401  ",
    },
    {
      id: 5,
      title: "Salesforce",
      subtitle: "Vidéo d'événement",
      description: "Keynote principale de Dreamforce 2024 avec Marc Benioff",
      services: ["Production multi-caméras", "Diffusion en direct", "Réels de temps forts", "Post-production"],
      videoType: "Vidéo d'événement",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvWc9HMGgmR8DzbQXG4njAStoPfq2aTk7JiFL  ",
      vimeoUrl: "https://vimeo.com/1110430670  ",
    },
    {
      id: 6,
      title: "Growe",
      subtitle: "Vidéo d'événement",
      description: "Aftermovie suivant Growe pendant leur participation à l'ICE London 2024",
      services: ["Production multi-caméras", "Diffusion en direct", "Réels de temps forts", "Post-production"],
      videoType: "Vidéo d'événement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjoa28snk6Z0aKAOH3TspmrCuFeME74fB5QqN  ",
      vimeoUrl: "https://vimeo.com/1104168902  ",
    }
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour <br/>une couverture vidéo d'événements captivante.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons couvert plus de 150 événements dans plus de 20 pays. <br/>Notre approche cinématographique garantit que vous ne manquez aucun moment clé.
          </p>
        </div>
        
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* Bouton CTA */}
        <div className="text-center mt-16">
          <Link href="/réalisations">
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
              Voir notre portfolio
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}