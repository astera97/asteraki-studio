"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
     id: 1,
     title: "Malt",
     subtitle: "Vidéo de marque",
     description: "Keynote à propos de la nouvelle fonctionnalité de Malt, AI search.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de marque",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVJeYdFwKuqgdOsGVhtpIHWTxEMPov1QX37nkB",
     vimeoUrl: "https://vimeo.com/1114349973",
    },
    {
      id: 2,
      title: "Framery",
      subtitle: "Vidéo de marque",
      description: "Vidéo de présentation de la nouvelle cabine de Framery destinée aux espaces de travail coworking.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de Marque",
      industry: "Technologie",
      thumbnail: "/brand-videos/images/framery_brand_video.webp?height=400&width=600&text=Spotify+Mobile+App+Demo",
      vimeoUrl: "https://vimeo.com/1106893991  ",
    },
    {
     id: 3,
     title: "Sage",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant comment utiliser Sage.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVVINHJYcCRjU0PEv7T9OCi5BZ8hqeAgSKnaIz",
     vimeoUrl: "https://vimeo.com/1113692995",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez quelques-unes de nos réalisations pour <br/>des campagnes vidéo B2B gagnantes.
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