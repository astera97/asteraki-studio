// src/app/agence-audiovisuelle/[city]/data/getPageMetadata.ts

import type { Metadata } from "next";
import { CITIES } from './cities';

// Simple hash function to generate a consistent pseudo-random index
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
      title: "Agence audiovisuelle en France – Production vidéo professionnelle | Asteraki Studio",
      description: "Agence audiovisuelle spécialisée dans la création de vidéos professionnelles pour entreprises. Livraison rapide. Tournage partout en France.",
    };
  }

  const seed = simpleHash(city.name);

  // Semantic hero headlines variations
  const heroHeadlines = [
    `Agence audiovisuelle à ${city.name} pour entreprises qui veulent se démarquer.`,
    `Production audiovisuelle professionnelle à ${city.name} pour tous vos projets.`,
    `Studio de production vidéo à ${city.name} spécialisé en contenus B2B.`,
    `Agence audiovisuelle à ${city.name} — qualité, créativité et efficacité.`,
    `Créez vos vidéos professionnelles avec notre agence à ${city.name}.`,
    `Des contenus audiovisuels percutants pour entreprises à ${city.name}.`,
    `Agence audiovisuelle à ${city.name} pour renforcer votre communication visuelle.`,
    `Communication vidéo efficace et multi-format à ${city.name}.`,
    `Agence audiovisuelle à ${city.name} qui transforme vos idées en résultats concrets.`,
    `Vidéos professionnelles à ${city.name} — rapidité et qualité garanties.`,
    `Agence audiovisuelle à ${city.name} — votre partenaire pour des projets vidéo réussis.`,
    `Contenus audiovisuels modernes et clairs à ${city.name}.`,
    `Agence audiovisuelle à ${city.name} pour booster votre image de marque.`,
    `Agence audiovisuelle à ${city.name} — stratégie, production et créativité réunies.`,
    `Production vidéo à ${city.name} adaptée à vos objectifs business.`,
    `Agence audiovisuelle à ${city.name} qui simplifie la création de vos contenus.`,
    `Création de vidéos professionnelles à ${city.name} — multi-format inclus.`,
    `Agence audiovisuelle à ${city.name} pour des campagnes vidéo impactantes.`,
    `Studio audiovisuel à ${city.name} pour des contenus engageants.`,
    `Agence audiovisuelle à ${city.name} — expertise et fiabilité pour vos vidéos.`,
  ];

  // Expanded meta descriptions (~150 chars) for SEO & CTR
  const heroDescriptions = [
    `Agence audiovisuelle à ${city.name} pour entreprises qui veulent se démarquer. Contenus professionnels multi-format et communication visuelle efficace.`,
    `Production audiovisuelle professionnelle à ${city.name} pour tous vos projets. Livraison rapide et vidéos optimisées pour tous vos canaux.`,
    `Studio de production vidéo à ${city.name} spécialisé en contenus B2B. Vidéos claires, modernes et efficaces pour vos objectifs marketing.`,
    `Agence audiovisuelle à ${city.name} — qualité, créativité et efficacité pour vos vidéos d'entreprise et communication visuelle.`,
    `Créez vos vidéos professionnelles avec notre agence à ${city.name}. Multi-format et livraison rapide pour un ROI mesurable.`,
    `Des contenus audiovisuels percutants pour entreprises à ${city.name}. Témoignages, événements, et vidéos institutionnelles inclus.`,
    `Agence audiovisuelle à ${city.name} pour renforcer votre communication visuelle. Contenus adaptés à vos canaux et objectifs marketing.`,
    `Communication vidéo efficace et multi-format à ${city.name}. Nous livrons vos vidéos prêtes à diffuser et optimisées pour vos réseaux.`,
    `Agence audiovisuelle à ${city.name} qui transforme vos idées en résultats concrets. Vidéos professionnelles et multi-format inclus.`,
    `Vidéos professionnelles à ${city.name} — rapidité et qualité garanties. Création de contenus engageants pour tous vos projets.`,
    `Agence audiovisuelle à ${city.name} — votre partenaire pour des projets vidéo réussis. Multi-format et ROI mesurable.`,
    `Contenus audiovisuels modernes et clairs à ${city.name}. Production rapide et optimisée pour tous vos canaux de communication.`,
    `Agence audiovisuelle à ${city.name} pour booster votre image de marque. Création de vidéos percutantes pour tous vos supports.`,
    `Agence audiovisuelle à ${city.name} — stratégie, production et créativité réunies pour des contenus engageants.`,
    `Production vidéo à ${city.name} adaptée à vos objectifs business. Multi-format et livraison rapide incluse.`,
    `Agence audiovisuelle à ${city.name} qui simplifie la création de vos contenus. Vidéos prêtes à diffuser et optimisées pour l'impact.`,
    `Création de vidéos professionnelles à ${city.name} — multi-format inclus et adaptée à votre stratégie marketing.`,
    `Agence audiovisuelle à ${city.name} pour des campagnes vidéo impactantes. Contenus clairs, modernes et professionnels.`,
    `Studio audiovisuel à ${city.name} pour des contenus engageants. Multi-format et livraison rapide pour un ROI mesurable.`,
    `Agence audiovisuelle à ${city.name} — expertise et fiabilité pour vos vidéos professionnelles et communication efficace.`,
  ];

  const index = seed % heroHeadlines.length;
  const heroHeadline = heroHeadlines[index];
  const heroDescription = heroDescriptions[index];

  return {
    title: `Agence audiovisuelle à ${city.name} – Production vidéo professionnelle | Asteraki Studio`,
    description: heroDescription,
    alternates: {
      canonical: `https://asterakistudio.com/agence-audiovisuelle/${params.city}`
    },
    openGraph: {
      title: heroHeadline,
      description: heroDescription,
      locale: "fr_FR",
      type: "website",
      url: `https://asterakistudio.com/agence-audiovisuelle/${params.city}`,
      siteName: "Asteraki Studio",
      images: [
        {
          url: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT",
          width: 1200,
          height: 630,
          alt: heroHeadline,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: heroHeadline,
      description: heroDescription,
      images: ["https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT"],
    },
  };
}
