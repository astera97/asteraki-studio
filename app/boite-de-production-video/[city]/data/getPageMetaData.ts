// src/app/production-audiovisuelle/[city]/data/getPageMetadata.ts

import type { Metadata } from "next";
import { CITIES } from './cities';

// Définir simpleHash localement pour éviter les erreurs
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = CITIES.find(c => c.id === params.city);
  if (!city) {
    return {
      title: "Boîte de production vidéo en France | Asteraki Studio",
      description: "Agence de production audiovisuelle spécialisée dans les vidéos professionnelles pour les entreprises. Livraison en 5 jours, multi-format, ROI clair.",
    };
  }

  // Générer un H1 unique pour la méta-description
  const seed = simpleHash(city.name);
  const heroHeadlines = [
    `Production audiovisuelle à ${city.name} pour entreprises ambitieuses.`,
    `Agence vidéo à ${city.name} spécialisée en production multi-format.`,
    `Boîte de production vidéo à ${city.name} livrant en 5 jours ouvrés.`,
    `Production vidéo à ${city.name} sans frais cachés ni mauvaises surprises.`,
    `Production audiovisuelle à ${city.name} incluant plusieurs formats optimisés.`,
    `Agence de production vidéo à ${city.name} pour des contenus percutants et stratégiques.`,
    `Production vidéo à ${city.name} avec un retour sur investissement clair.`,
    `Boîte de production vidéo à ${city.name} pour des entreprises qui veulent se démarquer.`,
    `Production audiovisuelle à ${city.name} conçue pour tous vos canaux de communication.`,
    `Agence vidéo à ${city.name} alliant rapidité, qualité et transparence tarifaire.`,
    `Production vidéo à ${city.name} pour des campagnes de recrutement, événements, et plus.`,
    `Boîte de production vidéo à ${city.name} spécialisée dans les témoignages clients.`,
    `Production audiovisuelle à ${city.name} livrée avec 5+ formats prêts à l'emploi.`,
    `Agence de production vidéo à ${city.name} pour maximiser votre impact marketing.`,
    `Production vidéo à ${city.name} qui transforme votre stratégie de communication.`
  ];
  
  const heroHeadline = heroHeadlines[seed % heroHeadlines.length];

  return {
    title: `Boîte de production vidéo à ${city.name} | Asteraki Studio`,
    description: heroHeadline,
    alternates: {
      canonical: `https://asterakistudio.com/boite-de-production-video/${params.city}`
    },
    openGraph: {
      title: `Boîte de production vidéo à ${city.name}`,
      description: heroHeadline,
      locale: "fr_FR",
      type: "website",
      url: `https://asterakistudio.com/boite-de-production-video/${params.city}`,
      siteName: "Asteraki Studio",
      images: [
        {
          url: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT",
          width: 1200,
          height: 630,
          alt: `Boîte de production vidéo à ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Boîte de production vidéo à ${city.name}`,
      description: heroHeadline,
      images: ["https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT"],
    },
  };
}