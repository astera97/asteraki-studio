// src/app/boite-de-production-video/[city]/data/getWhyChooseContent.ts

import {
  whyChooseHeadings,
  whyChooseFirstParagraphs,
  whyChooseSecondParagraphs,
  whyChooseReasons,
  whyChooseQuotes,
  whyChooseStats
} from './why-choose-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface WhyChooseContent {
  heading: string;
  firstParagraph: string;
  secondParagraph: string;
  reasons: { number: string; title: string; description: string }[];
  quote: string;
  stats: { value: string; label: string }[];
  videoSrc: string;
}

export function getWhyChooseContent(cityName: string): WhyChooseContent {
  const seed = simpleHash(cityName);

  const rawHeading = whyChooseHeadings[seed % whyChooseHeadings.length];
  const heading = rawHeading.replace(/{{city}}/g, cityName);

  const rawFirstParagraph = whyChooseFirstParagraphs[seed % whyChooseFirstParagraphs.length];
  const firstParagraph = rawFirstParagraph.replace(/{{city}}/g, cityName);

  const rawSecondParagraph = whyChooseSecondParagraphs[seed % whyChooseSecondParagraphs.length];
  const secondParagraph = rawSecondParagraph.replace(/{{city}}/g, cityName);

  const personalizedReasons = whyChooseReasons.map(reason => ({
    ...reason,
    description: reason.description.replace(/{{city}}/g, cityName)
  }));

  const rawQuote = whyChooseQuotes[seed % whyChooseQuotes.length];
  const quote = rawQuote.replace(/{{city}}/g, cityName);

  const personalizedStats = whyChooseStats.map(stat => ({
    ...stat,
    label: stat.label.replace(/{{city}}/g, cityName)
  }));

  return {
    heading,
    firstParagraph,
    secondParagraph,
    reasons: personalizedReasons,
    quote,
    stats: personalizedStats,
    videoSrc: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywqq9KjTyucagDQM1fypRjomx7Ct05zsVwrhkY"
  };
}