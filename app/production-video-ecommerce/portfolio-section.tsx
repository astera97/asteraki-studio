"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Xencelabs",
      subtitle: "Vidéo de marque",
      description: "Présentation du programme de certification d'achat média de TikTok avec un contenu vidéo social engageant.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
      videoType: "Vidéo de marque",
      industry: "ecommerce",
      thumbnail: "/brand-videos/images/xencelabs_brand_video.webp?height=400&width=600&text=TikTok+Certification+Program",
      vimeoUrl: "https://vimeo.com/1106895426",
    },
    {
      id: 2,
      title: "Xencelabs",
      subtitle: "Vidéo e-commerce",
      description: "Présentation du nouveau Pen Display 24 de Xencelabs pour les artistes.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de marque",
      industry: "ecommerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh  ",
      vimeoUrl: "https://vimeo.com/1106895426  ",
    },
    {
      id: 3,
      title: "Logitech",
      subtitle: "Vidéo e-commerce",
      description: "Présentation de la nouvelle combinaison POP Icon de Logitech : un nouveau design audacieux",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de marque",
      industry: "ecommerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywBYtsaRPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5  ",
      vimeoUrl: "https://vimeo.com/1110261087  ",
    },
    
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour <br/>des campagnes vidéo e-commerce gagnantes.
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
