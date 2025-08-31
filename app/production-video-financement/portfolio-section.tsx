"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "X-tool",
      subtitle: "Vidéo de financement",
      description: "Présentation de l'X-tool F1 Ultra pour les entreprises de personnalisation.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de Financement",
      industry: "E-commerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywC58mNn6dH7rVT25qFa9GQY8gkxhfvsZSXJMC",
      vimeoUrl: "https://vimeo.com/1110393011",
    },
    {
      id: 2,
      title: "Xencelabs",
      subtitle: "Vidéo de financement",
      description: "Présentation du nouveau Display Pen 24 de Xencelabs pour les artistes.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement",
      industry: "E-commerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh",
      vimeoUrl: "https://vimeo.com/1106895426",
    },
    {
      id: 3,
      title: "Lettuce",
      subtitle: "Vidéo de financement",
      description: "Production de la vidéo de marque Lettuce présentant les fonctionnalités du logiciel.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement",
      industry: "SaaS",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT",
      vimeoUrl: "https://vimeo.com/1110291462",
    },
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour des campagnes vidéo de marque gagnantes.
          </h2>
          
        </div>
        
        <PortfolioGrid projects={portfolioProjects} />
        
        {/* Bouton CTA */}
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