"use client";

import PortfolioGrid from "@/components/portfolio/portfolio-grid";
import Link from "next/link";

interface Props {
  city: string;
}

export default function PortfolioSection({ city }: Props) {
  const portfolioProjects = [
    {
      id: 1,
      title: "MSD France",
      subtitle: "Vidéo de recrutement",
      description: "Vidéo de recrutement montrant le parcours professionnel des collaborateurs chez MSD.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo de recrutement",
      industry: "Santé",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6XyUc9juM0sOH4LRiZ2hEraGKUtQVDIYCP3b",
      vimeoUrl: "https://vimeo.com/1114255241",
    },
    {
      id: 2,
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
      id: 3,
      title: "Cegedim",
      subtitle: "Vidéo explicative",
      description: "Vidéo animée expliquant les différentes expertises de Cegedim Pharma.",
      services: ["Scénario", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo explicative",
      industry: "Santé",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVL3177Lbf8wJFWPDVs4Ky3z2UpGML7SAeE10r",
      vimeoUrl: "https://vimeo.com/1113713647",
    },
    {
      id: 4,
      title: "Sage",
      subtitle: "Vidéo explicative",
      description: "Vidéo d'animation expliquant la procédure d'inscription à la PDP Sage.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Vidéo explicative",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVj1XY6Gnk6Z0aKAOH3TspmrCuFeME74fB5QqN",
      vimeoUrl: "https://vimeo.com/1113692472",
    },
    {
      id: 5,
      title: "Geodis",
      subtitle: "Vidéo explicative",
      description: "Vidéo explicative sur le processus de Geodis.",
      services: ["Scénario", "Motion design", "Storyboard"],
      videoType: "Vidéo explicative",
      industry: "Logistique",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnA96qWDx46ydSpE25FeO3PBXUsDz80LqGmi7",
      vimeoUrl: "https://vimeo.com/1114621314",
    },
    {
      id: 6,
      title: "Société Générale",
      subtitle: "Conseil d'expert",
      description: "Discussion sur le sujet de la franchise.",
      services: ["Cinématographie", "Motion design", "Étalonnage colorimétrique"],
      videoType: "Conseil d'expert",
      industry: "Finance",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVhDwkIgLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
      vimeoUrl: "https://vimeo.com/1114622167",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading dynamique */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Découvrez quelques-unes de nos réalisations pour des campagnes vidéo B2B gagnantes à {city}.
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Nous produisons tous types de vidéos d’entreprise : témoignages clients, démonstrations produit, captations d’événements et bien plus encore.
          </p>
        </div>

        {/* Portfolio Grid */}
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
  );
}
