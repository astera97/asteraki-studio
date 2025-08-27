"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page des vidéos explicatives
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Asana",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant comment utiliser Asana.",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo explicative",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywrSBTVdYmuwfKNGhJOVdR9k1bQE3sWzcXegDS  ",
      vimeoUrl: "https://vimeo.com/1110585868  ",
    },
    {
      id: 2,
      title: "Kandji",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant comment la disposition de l'écran d'accueil de Kandji aide à organiser les applications sur les appareils iOS et iPadOS.",
      services: ["Développement du scénario", "Démonstration du produit", "Animation de l'interface utilisateur", "Livraison multi-format"],
      videoType: "Vidéo explicative",
      industry: "Startup",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywygeFJbtsdpIWi7BXtnEN2YOvmFLjb4rV6Pux  ",
      vimeoUrl: "https://vimeo.com/1110585884  ",
    },
    {
      id: 3,
      title: "GIO Insurance",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant la protection de la vie privée en ligne pour leurs clients.",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo explicative",
      industry: "Assurance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywmKjU4EX9KywSWq0Ob7e64m32pHZ8kCQuLAfB  ",
      vimeoUrl: "https://vimeo.com/1110587419  ",
    },
    {
      id: 4,
      title: "Kickstarter",
      subtitle: "Vidéo explicative",
      description: "Vidéo en prise de vue réelle sur la façon de planifier le calendrier et la stratégie de financement participatif.",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo explicative",
      industry: "E-commerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywKbz446rjUw8zEs7y96VFDdnbKoiHBJf0cqOp  ",
      vimeoUrl: "https://vimeo.com/1110587451  ",
    },
    {
      id: 5,
      title: "Clickup",
      subtitle: "Vidéo explicative",
      description: "Vidéo explicative démontrant le Brain Max de Clickup.",
      services: ["Développement du scénario", "Démonstration du produit", "Animation de l'interface utilisateur", "Livraison multi-format"],
      videoType: "Vidéo explicative",
      industry: "SaaS",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnUjhpI2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE  ",
      vimeoUrl: "https://vimeo.com/1110585751  ",
    },
    {
      id: 6,
      title: "Notion",
      subtitle: "Vidéo explicative",
      description: "Vidéo en prise de vue réelle expliquant Notion pour le travail de la vie",
      services: ["Développement du scénario", "Animation 2D", "Production de voix off", "Livraison multi-format"],
      videoType: "Vidéo explicative",
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