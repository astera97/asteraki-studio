// src/app/production-audiovisuelle/[city]/data/getLocalSchema.ts

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

  // Get a unique value prop for this city to use in schema description
  const seed = simpleHash(city.name);
  const valueProps = [
    `Notre agence de production vidéo à ${city.name} crée des contenus professionnels qui renforcent votre crédibilité et génèrent des leads qualifiés.`,
    `La vidéo est l'outil marketing le plus puissant pour les entreprises à ${city.name}. Nous produisons des vidéos percutantes, livrées en 5 jours, avec plusieurs formats inclus.`,
    `Confiez votre communication vidéo à une équipe basée à ${city.name}. Nous concevons des vidéos sur mesure pour les entreprises de la région, avec un ROI clair et sans frais cachés.`,
    `Chez Asteraki, notre production audiovisuelle à ${city.name} va au-delà de la simple création. Nous intégrons une stratégie multi-canaux dès le départ, pour une communication vidéo percutante.`,
    `Pour les entreprises ambitieuses à ${city.name}, la vidéo n'est plus une option, c'est une nécessité. Notre offre inclut la livraison multi-format, sans supplément.`,
    `Notre approche de la production vidéo à ${city.name} se distingue par la rapidité, la clarté des tarifs et la qualité du rendu, le tout conçu pour répondre aux exigences de votre communication moderne.`,
    `Votre projet de production audiovisuelle à ${city.name} commence ici. Nous créons des contenus percutants, livrés en 5 jours, avec plusieurs formats inclus et un ROI clair.`,
    `Spécialisée en production audiovisuelle à ${city.name}, notre agence conçoit des vidéos professionnelles sur mesure pour les entreprises de la région. Témoignages, événements, recrutement, institutionnel : nous livrons un contenu percutant.`,
    `La livraison multi-format est incluse dans notre offre à ${city.name}. Vous ne payez pas de supplément pour des versions adaptées à vos besoins spécifiques.`,
    `Nous ne nous contentons pas de filmer à ${city.name} - nous créons des récits percutants à travers une production vidéo professionnelle qui montre pourquoi votre projet compte.`
  ];

  const valueProp = valueProps[seed % valueProps.length];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Asteraki – Boîte de production vidéo à ${city.name}`,
    "image": "https://asterakistudio.com/logo.png", // Remplacez par votre vrai logo
    "url": `https://asterakistudio.com/boite-de-production-video/${cityId}`,
    "telephone": "+33123456789", // Remplacez par votre vrai numéro
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
    "areaServed": city.name,
    "serviceType": "Production audiovisuelle",
    "description": valueProp,
    "offers": {
      "@type": "Offer",
      "businessFunction": "ProvideService",
      "name": `Production audiovisuelle à ${city.name}`
    },
    "sameAs": [
      "https://www.linkedin.com/company/asteraki-agency/",
    ]
  };
}