"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
    id: 1,
    title: "Girard-Perregaux",
    subtitle: "Vidéo de marque",
    description: "Production d'une vidéo de marque de luxe pour le Laureato Chronograph Ti49 de Girard-Perregaux",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "B2C",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7rLCbZwavFUfw5SNg3PlOHYAIuB0yjRm1hpK",
    vimeoUrl: "https://vimeo.com/1102877371",
  },
    {
      id: 2,
      title: "Xencelabs",
      subtitle: "Vidéo de marque",
      description: "Présentation du programme de certification d'achat média de TikTok avec un contenu vidéo social engageant.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de Marque",
      industry: "B2C",
      thumbnail: "/brand-videos/images/xencelabs_brand_video.webp?height=400&width=600&text=TikTok+Certification+Program",
      vimeoUrl: "https://vimeo.com/1106895426",
    },
    {
      id: 3,
      title: "Native Instruments",
      subtitle: "Vidéo de marque",
      description: "Vidéo explicative des nouvelles fonctionnalités de l'application Airbnb pour les hôtes.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de Marque",
      industry: "E-commerce",
      thumbnail: "/brand-videos/images/native_instruments_brand_video.webp?height=400&width=600&text=Airbnb+Host+Experience",
      vimeoUrl: "https://vimeo.com/1106896654  ",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Découvrez nos campagnes publicitaires réussies
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