// src/data/getUspContent.ts
import {
  HEADLINE_VARIATIONS,
  DESCRIPTION_VARIATIONS,
  FEATURE_SETS,
  SHOWREEL_VARIATIONS,
  BADGE_VARIATIONS,
  CTA_VARIATIONS,
  getRandomVariation
} from './usp-variations';

export interface USPContent {
  headline: string;
  description: string;
  features: string[];
  showreel: {
    id: string;
    title: string;
    description: string;
    type: string;
    year: string;
    specs: string;
  };
  badge: string;
  cta: {
    text: string;
    link: string;
  };
}

function stringToHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getUspContent(pagePath: string): USPContent {
  // Create consistent seed from page path
  const seedValue = stringToHash(pagePath);
  
  // Get base variations using seeded selection
  const headlineIndex = seedValue % HEADLINE_VARIATIONS.length;
  const descriptionIndex = (seedValue + 1) % DESCRIPTION_VARIATIONS.length;
  const featureSetIndex = (seedValue + 2) % FEATURE_SETS.length;
  const showreelIndex = (seedValue + 3) % SHOWREEL_VARIATIONS.length;
  const badgeIndex = (seedValue + 4) % BADGE_VARIATIONS.length;
  const ctaIndex = (seedValue + 5) % CTA_VARIATIONS.length;
  
  // Get content (NO semantic variation anymore)
  const headline = HEADLINE_VARIATIONS[headlineIndex];
  const description = DESCRIPTION_VARIATIONS[descriptionIndex];
  const features = [...FEATURE_SETS[featureSetIndex]];
  const showreel = { ...SHOWREEL_VARIATIONS[showreelIndex] };
  const badge = BADGE_VARIATIONS[badgeIndex];
  const cta = { ...CTA_VARIATIONS[ctaIndex] };
  
  return {
    headline,
    description,
    features,
    showreel,
    badge,
    cta
  };
}