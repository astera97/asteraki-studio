// src/app/production-video-entreprise/[city]/data/getPageMetadata.ts

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
      title: "Vidéo d’entreprise en France – Production professionnelle | Asteraki Studio",
      description: "Agence spécialisée dans la création de vidéos d’entreprise professionnelles. Livraison rapide, multi-format, tournage partout en France.",
    };
  }

  const seed = simpleHash(city.name);

  // Hero headline variations
  const heroHeadlines = [
    `Vidéo d’entreprise à ${city.name} pour valoriser votre image et vos projets.`,
    `Production professionnelle de vidéo d’entreprise à ${city.name} pour tous vos besoins.`,
    `Studio vidéo à ${city.name} spécialisé en contenus B2B et corporate.`,
    `Vidéo d’entreprise à ${city.name} — qualité, créativité et efficacité garanties.`,
    `Créez vos vidéos d’entreprise avec notre agence à ${city.name}.`,
    `Contenus vidéo percutants pour entreprises à ${city.name}.`,
    `Vidéo d’entreprise à ${city.name} pour renforcer votre communication.`,
    `Communication vidéo efficace et multi-format à ${city.name}.`,
    `Vidéo d’entreprise à ${city.name} qui transforme vos idées en résultats concrets.`,
    `Vidéos professionnelles à ${city.name} — rapidité et qualité garanties.`,
    `Vidéo d’entreprise à ${city.name} — votre partenaire pour des projets réussis.`,
    `Contenus modernes et clairs pour votre entreprise à ${city.name}.`,
    `Vidéo d’entreprise à ${city.name} pour booster votre image de marque.`,
    `Vidéo d’entreprise à ${city.name} — stratégie, production et créativité réunies.`,
    `Production vidéo à ${city.name} adaptée à vos objectifs business.`,
    `Vidéo d’entreprise à ${city.name} qui simplifie la création de contenus.`,
    `Création de vidéos professionnelles à ${city.name} — multi-format inclus.`,
    `Vidéo d’entreprise à ${city.name} pour des campagnes impactantes.`,
    `Studio vidéo à ${city.name} pour des contenus engageants.`,
    `Vidéo d’entreprise à ${city.name} — expertise et fiabilité garanties.`,
  ];

  // Expanded meta descriptions for SEO & CTR
  const heroDescriptions = [
    `Vidéo d’entreprise à ${city.name} pour valoriser votre image et vos projets. Contenus professionnels multi-format et communication efficace.`,
    `Production professionnelle de vidéo d’entreprise à ${city.name} pour tous vos besoins. Livraison rapide et vidéos optimisées pour vos canaux.`,
    `Studio vidéo à ${city.name} spécialisé en contenus B2B. Vidéos claires, modernes et efficaces pour vos objectifs marketing.`,
    `Vidéo d’entreprise à ${city.name} — qualité, créativité et efficacité pour vos projets corporate et communication interne.`,
    `Créez vos vidéos d’entreprise avec notre agence à ${city.name}. Multi-format et livraison rapide pour un ROI mesurable.`,
    `Contenus vidéo percutants pour entreprises à ${city.name}. Témoignages, événements et vidéos institutionnelles inclus.`,
    `Vidéo d’entreprise à ${city.name} pour renforcer votre communication. Contenus adaptés à vos canaux et objectifs marketing.`,
    `Communication vidéo efficace et multi-format à ${city.name}. Vos vidéos prêtes à diffuser et optimisées pour vos réseaux.`,
    `Vidéo d’entreprise à ${city.name} qui transforme vos idées en résultats concrets. Contenus professionnels multi-format inclus.`,
    `Vidéos professionnelles à ${city.name} — rapidité et qualité garanties. Création de contenus engageants pour vos projets corporate.`,
    `Vidéo d’entreprise à ${city.name} — votre partenaire pour des projets réussis. Multi-format et ROI mesurable inclus.`,
    `Contenus modernes et clairs à ${city.name}. Production rapide et optimisée pour tous vos supports de communication.`,
    `Vidéo d’entreprise à ${city.name} pour booster votre image de marque. Création de vidéos percutantes pour tous vos supports.`,
    `Vidéo d’entreprise à ${city.name} — stratégie, production et créativité réunies pour des contenus engageants.`,
    `Production vidéo à ${city.name} adaptée à vos objectifs business. Multi-format et livraison rapide incluse.`,
    `Vidéo d’entreprise à ${city.name} qui simplifie la création de vos contenus. Contenus prêts à diffuser et optimisés pour l’impact.`,
    `Création de vidéos professionnelles à ${city.name} — multi-format inclus et adaptées à votre stratégie marketing.`,
    `Vidéo d’entreprise à ${city.name} pour des campagnes impactantes. Contenus clairs, modernes et professionnels.`,
    `Studio vidéo à ${city.name} pour des contenus engageants. Multi-format et livraison rapide pour un ROI mesurable.`,
    `Vidéo d’entreprise à ${city.name} — expertise et fiabilité pour vos projets et communication efficace.`,
  ];

  const index = seed % heroHeadlines.length;
  const heroHeadline = heroHeadlines[index];
  const heroDescription = heroDescriptions[index];

  return {
    title: `Vidéo d’entreprise à ${city.name} – Production professionnelle | Asteraki Studio`,
    description: heroDescription,
    alternates: {
      canonical: `https://asterakistudio.com/production-video-entreprise/${params.city}`
    },
    openGraph: {
      title: heroHeadline,
      description: heroDescription,
      locale: "fr_FR",
      type: "website",
      url: `https://asterakistudio.com/production-video-entreprise/${params.city}`,
      siteName: "Asteraki Studio",
      images: [
        {
          url: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywgz2z1QVfVWtRqG5128kLSxdCylOInE6DP3Ac",
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
      images: ["https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywgz2z1QVfVWtRqG5128kLSxdCylOInE6DP3Ac"],
    },
  };
}
