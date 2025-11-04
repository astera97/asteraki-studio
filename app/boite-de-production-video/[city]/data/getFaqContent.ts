// src/app/boite-de-production-video/[city]/data/getFaqContent.ts

// ✅ Import the faqQuestions array
import { faqQuestions } from './faq-variations'; // Make sure this path is correct!

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export function getFaqContent(cityName: string): FaqItem[] {
  const seed = simpleHash(cityName);

  // ✅ Safeguard: If faqQuestions is undefined, return an empty array
  if (!faqQuestions || !Array.isArray(faqQuestions)) {
    console.warn('FAQ questions are not defined. Returning empty array.');
    return [];
  }

  // Personalize all questions and answers with the city name
  return faqQuestions.map(faq => ({
    ...faq,
    question: faq.question.replace(/{{city}}/g, cityName),
    answer: faq.answer.replace(/{{city}}/g, cityName)
  }));
}