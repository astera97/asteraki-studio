// src/app/services/app-video-production/portfolio-section.tsx
"use client"

import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import Link from "next/link"

// Ceci est le composant qui sera importé dans la page de production de vidéos d'applications
export default function PortfolioSection() {
  const portfolioProjects = [
    {
      id: 1,
      title: "Coda",
      subtitle: "Vidéo d'intégration d'application",
      description: "Vidéo d'intégration interactive pour la plateforme d'espace de travail tout-en-un de Coda.",
      services: ["Scénario", "Enregistrement d'écran", "Animation", "Voix off", "Montage"],
      videoType: "Vidéo d'Application",
      industry: "SaaS",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVeDuVXE8GO1WIHuqP47SYN8FaV6DnlysEmKQX  ",
      vimeoUrl: "https://vimeo.com/1110393011  ",
    },
    {
      id: 2,
      title: "Snowflake",
      subtitle: "Vidéo d'intégration d'application",
      description: "Guide d'intégration pas à pas pour la plateforme de cloud de données de Snowflake.",
      services: ["Scénario", "Enregistrement d'écran", "Animation", "Voix off", "Montage"],
      videoType: "Vidéo d'Application",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVpHdP5wR2lYTb4od16OBLW0sgaN7xrmhqJup5  ",
      vimeoUrl: "https://vimeo.com/1110392859  ",
    },
    {
      id: 3,
      title: "Epic Systems",
      subtitle: "Vidéo de flux de travail d'application",
      description: "Démonstration des flux de travail cliniques dans le système de dossier médical électronique d'Epic.",
      services: ["Scénario", "Enregistrement d'écran", "Animation", "Voix off", "Montage"],
      videoType: "Vidéo d'Application",
      industry: "Santé",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUjzOF2q2CrN5MjsDJkoHGX6AzxuROT8SgfwW  ",
      vimeoUrl: "https://vimeo.com/1106895426  ",
    },
    {
      id: 4,
      title: "Plaid",
      subtitle: "Vidéo de sécurité d'application",
      description: "Vidéo de démonstration de sécurité pour la plateforme d'API de données financières de Plaid.",
      services: ["Scénario", "Enregistrement d'écran", "Animation", "Voix off", "Montage"],
      videoType: "Vidéo d'Application",
      industry: "Finance",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMRYpodX6YLO1BSGiKj2D5WhHcuQrys4MloaJ  ",
      vimeoUrl: "https://vimeo.com/1110392210  ",
    },
    {
      id: 5,
      title: "Patagonia",
      subtitle: "Vidéo de paiement d'application",
      description: "Vidéo d'optimisation du paiement via l'application mobile pour la plateforme de commerce électronique de Patagonia.",
      services: ["Scénario", "Enregistrement d'écran", "Animation", "Voix off", "Montage"],
      videoType: "Vidéo d'Application",
      industry: "Vente au détail",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVWYoNQ4iEG0j4rIlZeaBmiPMNq6kRYybfWv2S  ",
      vimeoUrl: "https://vimeo.com/1110291462  ",
    },
    {
      id: 6,
      title: "Brookfield Properties",
      subtitle: "Vidéo de visite virtuelle d'application",
      description: "Vidéo d'intégration de visite immobilière virtuelle pour l'application immobilière de Brookfield.",
      services: ["Scénario", "Enregistrement d'écran", "Animation", "Voix off", "Montage"],
      videoType: "Vidéo d'Application",
      industry: "Immobilier",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVhceZIqMLDI024dcPOMo9lrEN6UY8eWLTbkv3  ",
      vimeoUrl: "https://vimeo.com/1110297807  ",
    }
  ]

  return (
    <section className="py-24 border-t border-gray-700" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Découvrez certains de nos travaux pour <br/>des campagnes vidéo d'applications efficaces.
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Nous avons créé plus de 200 vidéos d'applications qui ont réduit le temps d'intégration et augmenté l'engagement des utilisateurs. <br/>Nous savons ce qui favorise la réussite des utilisateurs.
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