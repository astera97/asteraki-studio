// src/app/event-video-production/[city]/data/getFaqContent.ts

import { faqHeadings, faqItems } from './faq-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface FaqContent {
  heading: string;
  faqItems: typeof faqItems; // Use the type of the static array
}

export function getFaqContent(cityName: string): FaqContent {
  const seed = simpleHash(cityName);

  const rawHeading = faqHeadings[seed % faqHeadings.length];
  const heading = rawHeading.replace(/{{city}}/g, cityName);

  // For now, keep the FAQ items static but personalize the answers
  const personalizedFaqItems = faqItems.map(item => ({
    question: item.question,
    answer: item.answer.replace(/{{city}}/g, cityName) // Personalize the answer
  }));

  return {
    heading,
    faqItems: personalizedFaqItems // Return the personalized list
  };
}