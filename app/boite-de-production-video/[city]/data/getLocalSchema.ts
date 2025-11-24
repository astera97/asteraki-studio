// src/app/agence-audiovisuelle/[city]/data/getLocalSchema.ts

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
    `Notre agence audiovisuelle à ${city.name} crée des contenus vidéo professionnels pour vos projets d'entreprise. Production multi-format, livraison rapide et communication audiovisuelle efficace.`,
    `À ${city.name}, nous produisons des vidéos percutantes pour entreprises : institutionnel, témoignages, événements. Multi-format inclus et ROI mesurable.`,
    `Confiez votre communication audiovisuelle à notre équipe à ${city.name} : contenus sur mesure, multi-format et livraison rapide sans frais cachés.`,
    `Chez Asteraki, notre agence audiovisuelle à ${city.name} combine stratégie, créativité et production vidéo professionnelle pour une communication efficace.`,
    `Pour les entreprises à ${city.name}, la vidéo est un outil essentiel. Notre production inclut plusieurs formats prêts à diffuser et adaptés à tous les canaux.`,
    `Notre approche à ${city.name} se distingue par la qualité, la rapidité et la transparence des tarifs, avec une production vidéo adaptée à vos besoins marketing.`,
    `Votre projet audiovisuel à ${city.name} commence ici : vidéos impactantes, livrées sous 5 jours, multi-format et optimisées pour l'engagement.`,
    `Spécialistes de la production audiovisuelle à ${city.name}, nous réalisons des vidéos institutionnelles, témoignages clients, événements et vidéos de recrutement.`,
    `Toutes nos productions à ${city.name} incluent la livraison multi-format, optimisée pour tous les supports, sans frais supplémentaires pour vos déclinaisons.`,
    `Nous ne faisons pas que filmer à ${city.name} : nous créons des contenus audiovisuels percutants qui valorisent votre marque et vos projets.`
  ];

  const valueProp = valueProps[seed % valueProps.length];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Asteraki – Agence audiovisuelle à ${city.name}`,
    "image": `https://asterakistudio.com/assets/og-images/agence-audiovisuelle-${cityId}.png`,
    "url": `https://asterakistudio.com/boite-de-production-video/${cityId}`,
    "telephone": "+33758116026", // Replace with your real number
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
    "serviceType": "Production audiovisuelle",
    "description": valueProp,
    "offers": {
      "@type": "Offer",
      "businessFunction": "ProvideService",
      "name": `Agence audiovisuelle à ${city.name}`
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
