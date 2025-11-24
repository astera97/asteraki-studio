// src/data/pseo/getAvantagesContent.ts
import {
  TITLE_VARIATIONS,
  CARD_ONE_TITLE_VARIATIONS,
  CARD_ONE_DESCRIPTION_VARIATIONS,
  CARD_TWO_TITLE_VARIATIONS,
  CARD_TWO_DESCRIPTION_VARIATIONS,
  CARD_THREE_TITLE_VARIATIONS,
  CARD_THREE_DESCRIPTION_VARIATIONS,
  CTA_TITLE_VARIATIONS,
  CTA_DESCRIPTION_VARIATIONS,
  CTA_BUTTON_VARIATIONS,
  getRandomVariation
} from './avantages-variations';

export interface AvantagesContent {
  title: string;
  cardOne: {
    title: string;
    description: string;
    icon: 'video';
  };
  cardTwo: {
    title: string;
    description: string;
    icon: 'users';
  };
  cardThree: {
    title: string;
    description: string;
    icon: 'check';
  };
  cta: {
    title: string;
    description: string;
    button: string;
    link: string;
  };
}

// Simple but effective string hashing function
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Get seeded variation without modifying the original array
function getSeededVariation<T>(variations: T[], seed: number): T {
  const index = seed % variations.length;
  return variations[index];
}

export function getAvantagesContent(pagePath: string): AvantagesContent {
  // Create a deterministic seed based on the page path
  const seed = simpleHash(pagePath);
  
  // Generate unique but consistent indices for each content type
  const titleIndex = seed % TITLE_VARIATIONS.length;
  const cardOneTitleIndex = (seed + 1) % CARD_ONE_TITLE_VARIATIONS.length;
  const cardOneDescIndex = (seed + 2) % CARD_ONE_DESCRIPTION_VARIATIONS.length;
  const cardTwoTitleIndex = (seed + 3) % CARD_TWO_TITLE_VARIATIONS.length;
  const cardTwoDescIndex = (seed + 4) % CARD_TWO_DESCRIPTION_VARIATIONS.length;
  const cardThreeTitleIndex = (seed + 5) % CARD_THREE_TITLE_VARIATIONS.length;
  const cardThreeDescIndex = (seed + 6) % CARD_THREE_DESCRIPTION_VARIATIONS.length;
  const ctaTitleIndex = seed % CTA_TITLE_VARIATIONS.length;
  const ctaDescIndex = (seed + 1) % CTA_DESCRIPTION_VARIATIONS.length;
  const ctaButtonIndex = (seed + 2) % CTA_BUTTON_VARIATIONS.length;
  
  // Get the specific variations based on indices
  const title = TITLE_VARIATIONS[titleIndex];
  const cardOneTitle = CARD_ONE_TITLE_VARIATIONS[cardOneTitleIndex];
  const cardOneDescription = CARD_ONE_DESCRIPTION_VARIATIONS[cardOneDescIndex];
  const cardTwoTitle = CARD_TWO_TITLE_VARIATIONS[cardTwoTitleIndex];
  const cardTwoDescription = CARD_TWO_DESCRIPTION_VARIATIONS[cardTwoDescIndex];
  const cardThreeTitle = CARD_THREE_TITLE_VARIATIONS[cardThreeTitleIndex];
  const cardThreeDescription = CARD_THREE_DESCRIPTION_VARIATIONS[cardThreeDescIndex];
  const ctaTitle = CTA_TITLE_VARIATIONS[ctaTitleIndex];
  const ctaDescription = CTA_DESCRIPTION_VARIATIONS[ctaDescIndex];
  const ctaButton = CTA_BUTTON_VARIATIONS[ctaButtonIndex];
  
  return {
    title,
    cardOne: {
      title: cardOneTitle,
      description: cardOneDescription,
      icon: 'video'
    },
    cardTwo: {
      title: cardTwoTitle,
      description: cardTwoDescription,
      icon: 'users'
    },
    cardThree: {
      title: cardThreeTitle,
      description: cardThreeDescription,
      icon: 'check'
    },
    cta: {
      title: ctaTitle,
      description: ctaDescription,
      button: ctaButton,
      link: '/contact'
    }
  };
}

// For testing purposes, you can use a random combination
export function getRandomAvantagesContent(): AvantagesContent {
  return {
    title: getRandomVariation(TITLE_VARIATIONS),
    cardOne: {
      title: getRandomVariation(CARD_ONE_TITLE_VARIATIONS),
      description: getRandomVariation(CARD_ONE_DESCRIPTION_VARIATIONS),
      icon: 'video'
    },
    cardTwo: {
      title: getRandomVariation(CARD_TWO_TITLE_VARIATIONS),
      description: getRandomVariation(CARD_TWO_DESCRIPTION_VARIATIONS),
      icon: 'users'
    },
    cardThree: {
      title: getRandomVariation(CARD_THREE_TITLE_VARIATIONS),
      description: getRandomVariation(CARD_THREE_DESCRIPTION_VARIATIONS),
      icon: 'check'
    },
    cta: {
      title: getRandomVariation(CTA_TITLE_VARIATIONS),
      description: getRandomVariation(CTA_DESCRIPTION_VARIATIONS),
      button: getRandomVariation(CTA_BUTTON_VARIATIONS),
      link: '/contact'
    }
  };
}