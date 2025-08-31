"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
    id: 1,
    title: "Notion",
    subtitle: "Démonstration produit",
    description: "Vidéo animée expliquant Notion et ses fonctionnalités.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
    videoType: "Démonstration produit",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt87OYL134vBTOxF8dARqINU9EX5yck2foZjG",
    vimeoUrl: "https://vimeo.com/1110392859",
    },
    {
    id: 2,
    title: "Lettuce",
    subtitle: "Vidéo de financement participatif",
    description: "Production de la vidéo de marque de Lettuce présentant les fonctionnalités du logiciel.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
    videoType: "Vidéo de financement participatif",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT",
    vimeoUrl: "https://vimeo.com/1110291462",
    },
    {
    id: 3,
    title: "Clickup",
    subtitle: "Vidéo explicative",
    description: "Vidéo explicative démontrant le Brain Max de Clickup.",
    services: ["Développement du scénario", "Démonstration du produit", "Animation de l'interface utilisateur", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnUjhpI2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE",
    vimeoUrl: "https://vimeo.com/1110585751",
    },

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