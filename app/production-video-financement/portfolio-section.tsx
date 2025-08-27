"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "X-tool",
      subtitle: "Vidéo de financement participatif",
      description: "Présentation de l'X-tool F1 Ultra pour les entreprises de personnalisation.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de Financement Participatif",
      industry: "E-commerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywC58mNn6dH7rVT25qFa9GQY8gkxhfvsZSXJMC  ",
      vimeoUrl: "https://vimeo.com/1110393011  ",
    },
    {
      id: 2,
      title: "Notion",
      subtitle: "Vidéo de financement participatif",
      description: "Vidéo animée expliquant Notion et ses fonctionnalités.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement participatif",
      industry: "Startup",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt87OYL134vBTOxF8dARqINU9EX5yck2foZjG  ",
      vimeoUrl: "https://vimeo.com/1110392859  ",
    },
    {
      id: 3,
      title: "Xencelabs",
      subtitle: "Vidéo de financement participatif",
      description: "Présentation du nouveau Display Pen 24 de Xencelabs pour les artistes.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement participatif",
      industry: "E-commerce",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh  ",
      vimeoUrl: "https://vimeo.com/1106895426  ",
    },
    {
      id: 4,
      title: "Fontawesome",
      subtitle: "Vidéo de financement participatif",
      description: "Production de la vidéo de financement participatif Fontawesome utilisée sur Kickstarter.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement participatif",
      industry: "SaaS",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT  ",
      vimeoUrl: "https://vimeo.com/1110392210  ",
    },
    {
      id: 5,
      title: "Lettuce",
      subtitle: "Vidéo de financement participatif",
      description: "Production de la vidéo de marque Lettuce présentant les fonctionnalités du logiciel.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement participatif",
      industry: "Finance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT  ",
      vimeoUrl: "https://vimeo.com/1110291462  ",
    },
    {
      id: 6,
      title: "Framery",
      subtitle: "Vidéo de financement participatif",
      description: "Production de la vidéo de marque Framery mettant en avant leur histoire unique.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de financement participatif",
      industry: "DTC",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywp7yzsFIpEkOY8D0GBumXaioq9CjFLZxsPM1b  ",
      vimeoUrl: "https://vimeo.com/1110297807  ",
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