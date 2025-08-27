"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Asana",
      subtitle: "Vidéo explicative",
      description: "Vidéo de démonstration expliquant comment écrire des invites IA pour les flux de travail dans Asana.",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo de démonstration",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywINsISXBopGrnZVX0LtSThgBy46AKYEQ2fqO8  ",
      vimeoUrl: "https://vimeo.com/1110715267?share=copy",
    },
    {
      id: 2,
      title: "Kandji",
      subtitle: "Vidéo de démonstration",
      description: "Vidéo animée expliquant les applications d'affectation Kandji.",
      services: ["Développement du scénario", "Démonstration du produit", "Animation de l'interface utilisateur", "Livraison multi-format"],
      videoType: "Vidéo de démonstration",
      industry: "Startup",
      thumbnail: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw5qyLz3EmpUwWA5kGhqXxRVY8Igt0c3e2obd6  ",
      vimeoUrl: "https://vimeo.com/1110713674  ",
    },
    {
      id: 3,
      title: "GIO Insurance",
      subtitle: "Vidéo de démonstration",
      description: "Vidéo de démonstration expliquant la protection de la vie privée en ligne pour leurs clients.",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo de démonstration",
      industry: "Assurance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywmKjU4EX9KywSWq0Ob7e64m32pHZ8kCQuLAfB  ",
      vimeoUrl: "https://vimeo.com/1110587419  ",
    },
    {
      id: 4,
      title: "Okta",
      subtitle: "Vidéo de démonstration",
      description: "Aperçu rapide des flux de travail Okta",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo de démonstration",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywmQ43qEX9KywSWq0Ob7e64m32pHZ8kCQuLAfB  ",
      vimeoUrl: "https://vimeo.com/1110713411  ",
    },
    {
      id: 5,
      title: "Clickup",
      subtitle: "Vidéo de démonstration",
      description: "Guide de configuration rapide des tableaux de bord ClickUp",
      services: ["Développement du scénario", "Démonstration du produit", "Animation de l'interface utilisateur", "Livraison multi-format"],
      videoType: "Vidéo de démonstration",
      industry: "SaaS",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt06sFn134vBTOxF8dARqINU9EX5yck2foZjG  ",
      vimeoUrl: "https://vimeo.com/1110716169  ",
    },
    {
      id: 6,
      title: "Notion",
      subtitle: "Vidéo de démonstration",
      description: "Vidéo en prise de vue réelle expliquant Notion pour le travail de la vie",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo de démonstration",
      industry: "SaaS",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt87OYL134vBTOxF8dARqINU9EX5yck2foZjG  ",
      vimeoUrl: "https://vimeo.com/1110392756  ",
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