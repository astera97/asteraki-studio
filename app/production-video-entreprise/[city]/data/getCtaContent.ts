// src/app/production-video-entreprise/[city]/data/getCtaContent.ts

import { ctaHeadings, ctaParagraphs, ctaButtons } from './cta-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface CtaContent {
  heading: string;
  description: string;
  buttonText: string;
}

export function getCtaContent(cityName: string): CtaContent {
  const seed = simpleHash(cityName);

  const rawHeading = ctaHeadings[seed % ctaHeadings.length];
  const heading = rawHeading.replace(/{{city}}/g, cityName);

  const rawDescription = ctaParagraphs[seed % ctaParagraphs.length];
  const description = rawDescription.replace(/{{city}}/g, cityName);

  const rawButtonText = ctaButtons[seed % ctaButtons.length];
  const buttonText = rawButtonText.replace(/{{city}}/g, cityName);

  return {
    heading,
    description,
    buttonText
  };
}