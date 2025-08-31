"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// This is the component that will be imported into the brand page
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Société Générale",
      subtitle: "Témoignage client",
      description: "Témoignage client avec le client Société Générale, Maison Lorho.",
      services: ["Scénario", "Cinématographie", "Motion design", "Étalonnage colorimétrique"],
      videoType: "Témoignage client",
      industry: "Finance",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVoHl9pq6CsnPrFwBgUiXEaet6jdqyMYbAL9p5",
      vimeoUrl: "https://vimeo.com/1114623280",
    },
    {
      id: 1,
      title: "Société Générale",
      subtitle: "Conseil d'expert",
      description: "Discussion sur le sujet de la franchise.",
      services: ["Cinématographie", "Motion design", "Étalonnage colorimétrique"],
      videoType: "Conseil d'expert",
      industry: "Finance",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVhDwkIgLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
      vimeoUrl: "https://vimeo.com/1114622167",
    },
    {
      id: 1,
      title: "Société Générale",
      subtitle: "Vidéo explicative",
      description: "Vidéo explcative sur le sujet de l'Assurance Accidents de la Vie chez SG.",
      services: ["Scénario", "Motion design", "Storyboard"],
      videoType: "Vidéo explicative",
      industry: "Finance",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVVFd9J6CRjU0PEv7T9OCi5BZ8hqeAgSKnaIzt",
      vimeoUrl: "https://vimeo.com/1114621314",
    },
    
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Découvrez nos réalisations pour le secteur bancaire.
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