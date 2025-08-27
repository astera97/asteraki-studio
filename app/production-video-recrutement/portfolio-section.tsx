"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Kandji",
      subtitle: "Culture d'entreprise",
      description: "Vidéo sur la culture d'entreprise avec l'équipe de Kandji.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Vidéo d'entreprise",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCWvi7P6dH7rVT25qFa9GQY8gkxhfvsZSXJMC  ",
      vimeoUrl: "https://vimeo.com/1102888339  ",
    },
    {
      id: 2,
      title: "Okta",
      subtitle: "Histoire de l'entreprise",
      description: "L'histoire de la création d'Okta, racontée par le PDG Todd McKinnon.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Vidéo d'entreprise",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCXgLka6dH7rVT25qFa9GQY8gkxhfvsZSXJMC  ",
      vimeoUrl: "https://vimeo.com/1110345789  ",
    },
    {
      id: 3,
      title: "HSBC",
      subtitle: "Vidéo de recrutement",
      description: "Vidéo de campagne de recrutement HSBC.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo de recrutement",
      industry: "Finance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiVwx1gBrTARJGXZkYLKW6sdH5N4B0vywIojm  ",
      vimeoUrl: "https://vimeo.com/1110355646  ",
    },
    {
      id: 4,
      title: "Bolt",
      subtitle: "Culture d'entreprise",
      description: "Vidéo d'entreprise mettant en lumière les employés de Bolt.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Mise en avant des employés",
      industry: "Startup",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvuM8M7GgmR8DzbQXG4njAStoPfq2aTk7JiFL  ",
      vimeoUrl: "https://vimeo.com/1104256442  ",
    },
    {
      id: 5,
      title: "GIO Insurance",
      subtitle: "Vidéo d'entreprise",
      description: "Vidéo d'entreprise mettant en avant les employés lisant les messages des clients.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Culture d'entreprise",
      industry: "Assurance",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw2MJYAx7LRoDnSIZdyi1KBFNT7vmeUt5Xckg4  ",
      vimeoUrl: "https://vimeo.com/1110362392?share=copy",
    },
    {
      id: 6,
      title: "Uber",
      subtitle: "Vidéo d'entreprise",
      description: "Vidéo d'entreprise sur la vie chez Uber, racontée par les partenaires.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Culture d'entreprise",
      industry: "Startup",
      thumbnail: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywByuMVOPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5  ",
      vimeoUrl: "https://vimeo.com/1110366894?share=copy",
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