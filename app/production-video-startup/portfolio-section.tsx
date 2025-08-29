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
     description: "Vidéo explicative du term Super team avec l'équipe de Malt",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV21oGj537WJBOGwHyYpLQ8mtukDFsr9nVZ07e",
     vimeoUrl: "https://vimeo.com/1114350408",
    },
    { 
    id: 2,
    title: "Remarkable",
    subtitle: "Vidéo de marque",
    description: "Production d'une vidéo de marque pour présenter le nouveau reMarkable Paper Pro",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "Startup",
    thumbnail: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWPQZ2IUiab8RMjqt25cZzSeDlVIhg1Y3fnXC",
    vimeoUrl: "https://vimeo.com/1110278295",
    },
    {
    id: 3,
    title: "Fontawesome",
    subtitle: "Vidéo de financement participatif",
    description: "Production de la vidéo de financement participatif de Fontawesome utilisée sur Kickstarter.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT",
    vimeoUrl: "https://vimeo.com/1110392210",
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
      title: "Drata",
      subtitle: "Témoignage client",
      description: "Vidéo de témoignage client avec le client de Drata, Softcat.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
      videoType: "Témoignage client",
      industry: "Startup",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywqSo613yucagDQM1fypRjomx7Ct05zsVwrhkY",
      vimeoUrl: "https://vimeo.com/1110326216",
    },
    {
      id: 6,
      title: "Kandji",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant comment la mise en page de l'écran d'accueil de Kandji aide à organiser les applications sur les appareils iOS et iPadOS.",
      services: ["Développement du scénario", "Démonstration produit", "Animation UI", "Livraison multi-format"],
      videoType: "Vidéo explicative",
      industry: "Startup",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywygeFJbtsdpIWi7BXtnEN2YOvmFLjb4rV6Pux",
      vimeoUrl: "https://vimeo.com/1110585884",
    }
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