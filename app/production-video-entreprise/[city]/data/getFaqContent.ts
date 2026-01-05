// src/app/video-entreprise/[city]/data/getFaqContent.ts

import { faqHeadings, faqItems } from "./faq-variations";

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqContent {
  heading: string;
  faqItems: FaqItem[];
}

export function getFaqContent(cityName: string): FaqContent {
  const seed = simpleHash(cityName);

  const rawHeading = faqHeadings[seed % faqHeadings.length];
  const heading = rawHeading.replace(/\(\(city\)\)/g, cityName); // 👈 Also fixed: your headings use ((city)), not {{city}}

  const personalizedFaqItems: FaqItem[] = faqItems.map((item, index) => ({
    id: `${cityName}-${index}`, // ✅ Unique key per FAQ item
    question: item.question,
    answer: item.answer.replace(/\(\(city\)\)/g, cityName), // ✅ Match your actual placeholder format
  }));

  return {
    heading,
    faqItems: personalizedFaqItems,
  };
}