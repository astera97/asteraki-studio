"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de la marque
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "ELVTR",
      subtitle: "Vidéo tutorielle",
      description: "Introduction de cours sur la conception durable avec une cofondatrice et directrice des intérieurs chez byWatkins",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Vidéo Tutorielle",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVMJIY6Zk9bJcHXMNUQfstv87OVhrZn4GzoAa  ",
      vimeoUrl: "https://vimeo.com/1111259314  ",
    },
    {
      id: 2,
      title: "INSEAD",
      subtitle: "Vidéo d'événement",
      description: "Cérémonie INSEAD pour la classe MBA de juillet 2025",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo d'Événement",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywg3ba8VfVWtRqG5128kLSxdCylOInE6DP3AcK  ",
      vimeoUrl: "https://vimeo.com/1111278745  ",
    },
    {
      id: 3,
      title: "Harvard Business School",
      subtitle: "Conférence d'expert",
      description: "Aperçus de la professeure HBS Katherine B. Coffman sur les stéréotypes de genre et la prise de décision",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo Tutorielle",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywq1LUURCyucagDQM1fypRjomx7Ct05zsVwrhk  ",
      vimeoUrl: "https://vimeo.com/1111290137  ",
    },
    {
      id: 4,
      title: "UDEMY",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant comment Udemy utilise l'IA pour garantir la satisfaction.",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo Explicative",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCKxYlE6dH7rVT25qFa9GQY8gkxhfvsZSXJMC  ",
      vimeoUrl: "https://vimeo.com/1111297326  ",
    },
    {
      id: 5,
      title: "Harvard Business School",
      subtitle: "Avis sur le programme",
      description: "Aperçu du programme sur la façon de créer un impact grâce à la collaboration",
      services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage des couleurs"],
      videoType: "Vidéo Témoignage Client",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw6TQkhFyagHJ3YwbVFM7BDCv2nIdW8y1stzLe  ",
      vimeoUrl: "https://vimeo.com/1111292399  ",
    },
    {
      id: 6,
      title: "INSEAD",
      subtitle: "Vidéo tutorielle",
      description: "Vidéo promotionnelle sur le programme d'INSEAD sur l'IA de pointe et la transformation numérique",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Vidéo tutorielle",
      industry: "Éducation",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZwxBCS5DmjQM0nVEs2BHNKk8yJeWpug7rf34  ",
      vimeoUrl: "https://vimeo.com/1111283147  ",
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