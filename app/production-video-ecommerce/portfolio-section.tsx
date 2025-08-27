"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Midea",
      subtitle: "Vidéo e-commerce",
      description: "Campagne vidéo mettant en vedette le réfrigérateur Midea OneTouch AutoFill à portes françaises",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo E-commerce",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywQbObEqTdUSZb4s2QuhpMIVX39kROC6fF1xzj?height=400&width=600&text=midea+autofill+frenchrefrigerator",
      vimeoUrl: "  https://vimeo.com/1110249934  ",
    },
    {
      id: 2,
      title: "Framery",
      subtitle: "Vidéo e-commerce",
      description: "Vidéo de présentation de la nouvelle interface utilisateur de l'application mobile Spotify.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo E-commerce",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw9XNEZOcY8QMfmcb0oqhrSvFPJjk5al3EDgus  ",
      vimeoUrl: "https://vimeo.com/1106893991  ",
    },
    {
      id: 3,
      title: "Xencelabs",
      subtitle: "Vidéo e-commerce",
      description: "Présentation du nouveau Pen Display 24 de Xencelabs pour les artistes.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo e-commerce",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh  ",
      vimeoUrl: "https://vimeo.com/1106895426  ",
    },
    {
      id: 4,
      title: "Logitech",
      subtitle: "Vidéo e-commerce",
      description: "Présentation de la nouvelle combinaison POP Icon de Logitech : un nouveau design audacieux",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de Marque",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywBYtsaRPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5  ",
      vimeoUrl: "https://vimeo.com/1110261087  ",
    },
    {
      id: 5,
      title: "Native Instruments",
      subtitle: "Vidéo e-commerce",
      description: "Présentation de la nouvelle série Kontrol/S MK3 pour les artistes.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo e-commerce",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywJmX3tksXNLP2QdFWhK9OvG3Rr0fZVD4Htsme  ",
      vimeoUrl: "https://vimeo.com/1106896654  ",
    },
    {
      id: 6,
      title: "Girard-Perregaux",
      subtitle: "Vidéo e-commerce",
      description: "Production d'une vidéo de marque de luxe pour la Laureato Chronograph Ti49 de Girard-Perregaux",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de marque",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywO2PQc0DldM8Th1Y46jXqf7KG5xJvzIoicVbS  ",
      vimeoUrl: "https://vimeo.com/1102877371  ",
    }
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
