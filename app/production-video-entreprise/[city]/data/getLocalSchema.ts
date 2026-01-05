// src/app/production-video-entreprise/[city]/data/getLocalSchema.ts

import { CITIES } from './cities';

// Define simpleHash locally to avoid undefined errors
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export function getLocalSchema(cityId: string) {
  const city = CITIES.find(c => c.id === cityId);
  if (!city) return null;

  const seed = simpleHash(city.name);

  // Unique, semantic-rich descriptions per city
  const valueProps = [
    `Notre agence à ${city.name} crée des vidéos d’entreprise professionnelles pour valoriser vos projets et votre marque. Multi-format, livraison rapide et communication claire.`,
    `À ${city.name}, nous produisons des vidéos d’entreprise percutantes : institutionnel, témoignages, événements. Livrées multi-format et optimisées pour le ROI.`,
    `Confiez votre communication vidéo à notre équipe à ${city.name} : contenus sur mesure, multi-format et livraison rapide sans frais cachés.`,
    `Chez Asteraki, notre agence à ${city.name} combine stratégie, créativité et production vidéo professionnelle pour des vidéos d’entreprise efficaces.`,
    `Pour les entreprises à ${city.name}, la vidéo est un outil essentiel. Nous fournissons plusieurs formats prêts à diffuser pour tous vos canaux.`,
    `Notre approche à ${city.name} se distingue par la qualité, la rapidité et la transparence des tarifs, avec une production vidéo adaptée à vos besoins.`,
    `Votre projet vidéo à ${city.name} commence ici : vidéos impactantes, livrées sous 5 jours, multi-format et optimisées pour l’engagement.`,
    `Spécialistes de la vidéo d’entreprise à ${city.name}, nous réalisons des vidéos institutionnelles, témoignages clients, événements et contenus B2B.`,
    `Toutes nos productions à ${city.name} incluent la livraison multi-format, optimisée pour tous les supports, sans frais supplémentaires.`,
    `Nous ne faisons pas que filmer à ${city.name} : nous créons des vidéos d’entreprise qui valorisent votre marque et vos projets.`
  ];

  const valueProp = valueProps[seed % valueProps.length];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Asteraki – Vidéo d’entreprise à ${city.name}`,
    "image": `https://asterakistudio.com/assets/og-images/production-video-entreprise-${cityId}.png`,
    "url": `https://asterakistudio.com/production-video-entreprise/${cityId}`,
    "telephone": "+33758116026", // Remplacez par votre vrai numéro
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": city.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.lat,
      "longitude": city.lng
    },
    "areaServed": [city.name, city.state, city.countryCode],
    "serviceType": "Vidéo d’entreprise",
    "description": valueProp,
    "offers": {
      "@type": "Offer",
      "businessFunction": "ProvideService",
      "name": `Vidéo d’entreprise à ${city.name}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25"
    },
    "sameAs": [
      "https://www.linkedin.com/company/asteraki-agency/",
      "https://www.instagram.com/asteraki_studio/",
      "https://www.vimeo.com/asteraki"
    ]
  };
}
