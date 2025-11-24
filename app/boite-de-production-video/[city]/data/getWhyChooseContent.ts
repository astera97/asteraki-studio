// Paragraph variations without city name, naturally written, SEO-friendly

export const whyChooseFirstParagraphs = [
  "Nous ne produisons pas que des vidéos. Nous créons des contenus audiovisuels stratégiques qui augmentent votre visibilité et votre impact marketing.",
  "Notre agence fournit des vidéos optimisées pour tous vos canaux : réseaux sociaux, site web et présentations.",
  "Chaque projet que nous réalisons intègre plusieurs formats pour maximiser l'engagement et le retour sur investissement.",
  "Nous aidons les entreprises à raconter leur histoire avec des vidéos professionnelles, percutantes et sur mesure.",
  "Notre approche combine créativité et stratégie pour livrer des vidéos qui transforment votre communication.",
  "Chaque vidéo produite est pensée pour générer des résultats concrets et mesurables.",
  "Nous transformons vos idées en contenus audiovisuels performants, prêts à être diffusés sur tous vos supports.",
  "Notre équipe accompagne les entreprises dans chaque étape de la production, pour un résultat fluide et efficace.",
  "Avec notre agence, vos vidéos deviennent un véritable levier marketing, multi-format et prêt à diffuser.",
  "Nous produisons des vidéos sur mesure qui valorisent votre image de marque et attirent de nouveaux prospects."
];

export const whyChooseReasons = [
  {
    number: "1",
    title: "Multi-Format Inclus",
    description: "Toutes nos vidéos sont livrées en plusieurs formats prêts à diffuser : long, court, vertical et carré."
  },
  {
    number: "2",
    title: "Délai de Livraison Rapide",
    description: "Nous garantissons une livraison complète en seulement 5 jours ouvrés après le tournage."
  },
  {
    number: "3",
    title: "Stratégie Intégrée",
    description: "Chaque vidéo est pensée dès le départ pour générer engagement, leads et conversions."
  },
  {
    number: "4",
    title: "Équipe 100% Interne",
    description: "Vos projets sont gérés par une équipe dédiée d’experts, sans sous-traitance aléatoire."
  },
  {
    number: "5",
    title: "ROI & Performance",
    description: "Nous créons des vidéos qui soutiennent vos objectifs marketing et maximisent le retour sur investissement."
  }
];

export const whyChooseQuotes = [
  "Chaque vidéo devient un véritable levier marketing.",
  "Nous transformons les idées en vidéos percutantes et efficaces.",
  "Notre approche combine créativité et performance pour générer engagement et leads.",
  "Chaque projet est pensé pour livrer un impact mesurable sur votre audience.",
  "Nos vidéos sont conçues pour booster votre visibilité et votre stratégie marketing."
];

export const whyChooseStats = [
  { value: "+300%", label: "D'engagement potentiel avec formats adaptés" },
  { value: "Inclus", label: "Livraison multi-format sans coût supplémentaire" },
  { value: "5+", label: "Formats livrés par projet moyen" },
  { value: "+25%", label: "Taux de conversion typique avec nos vidéos" }
];

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getWhyChooseContent(cityName: string) {
  const seed = simpleHash(cityName);
  
  return {
    heading: `Pourquoi choisir notre agence audiovisuelle à ${cityName}?`,
    subheading: "UNE ÉQUIPE DÉDIÉE, DES VIDÉOS PERCUTANTES.",
    firstParagraph: whyChooseFirstParagraphs[seed % whyChooseFirstParagraphs.length],
    quote: whyChooseQuotes[seed % whyChooseQuotes.length],
    reasons: whyChooseReasons, // Tableau complet
    stats: whyChooseStats // Tableau complet
  };
}