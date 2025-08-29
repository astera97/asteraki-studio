"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Sanofi",
      subtitle: "Vidéo de marque",
      description: "Campagne de 3 vidéos de portraits collaborateurs pour valoriser l'alternance chez Microsoft France.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de Marque",
      industry: "SaaS",
      thumbnail: "/brand-videos/images/Lettuce_brand_video.webp?height=400&width=600&text=Microsoft+Employee+Portrait",
      vimeoUrl: "https://vimeo.com/1104256442",
    },
    {
      id: 2,
      title: "Framery",
      subtitle: "Vidéo de marque",
      description: "Vidéo de présentation de la nouvelle interface utilisateur de l'application mobile Spotify.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de Marque",
      industry: "Technologie",
      thumbnail: "/brand-videos/images/framery_brand_video.webp?height=400&width=600&text=Spotify+Mobile+App+Demo",
      vimeoUrl: "https://vimeo.com/1106893991",
    },
    {
      id: 3,
      title: "Xencelabs",
      subtitle: "Vidéo de marque",
      description: "Présentation du programme de certification média de TikTok avec un contenu vidéo social engageant.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de Marque",
      industry: "E-commerce",
      thumbnail: "/brand-videos/images/xencelabs_brand_video.webp?height=400&width=600&text=TikTok+Certification+Program",
      vimeoUrl: "https://vimeo.com/1106895426",
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