// src/app/corporate-video-production/[city]/data/getWhyWorkContent.ts

import {
  whyWorkHeadings,
  whyWorkFirstParagraphs,
  whyWorkSecondParagraphs,
  whyWorkReasons,
  whyWorkQuote,
  whyWorkStats
} from './why-work-variations'; // version vidéo d’entreprise

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export interface WhyWorkContent {
  heading: string;
  firstParagraph: string;
  secondParagraph: string;
  videoSrc: string;
  reasons: {
    number: string;
    title: string;
    description: string;
  }[];
  quote: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export function getWhyWorkContent(cityName: string): WhyWorkContent {
  const seed = simpleHash(cityName);

  const rawHeading = whyWorkHeadings[seed % whyWorkHeadings.length];
  const heading = rawHeading.replace(/\(\(city\)\)/g, cityName);

  const rawFirstParagraph = whyWorkFirstParagraphs[seed % whyWorkFirstParagraphs.length];
  const firstParagraph = rawFirstParagraph.replace(/\(\(city\)\)/g, cityName);

  const rawSecondParagraph = whyWorkSecondParagraphs[seed % whyWorkSecondParagraphs.length];
  const secondParagraph = rawSecondParagraph.replace(/\(\(city\)\)/g, cityName);

  const personalizedReasons = whyWorkReasons.map(reason => ({
    ...reason,
    description: reason.description.replace(/\(\(city\)\)/g, cityName)
  }));

  const quote = whyWorkQuote.replace(/\(\(city\)\)/g, cityName);

  const personalizedStats = whyWorkStats.map(stat => ({
    ...stat,
    label: stat.label.replace(/\(\(city\)\)/g, cityName)
  }));

  return {
    heading,
    firstParagraph,
    secondParagraph,
    videoSrc: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywcMSXGM0w7eqHupO4CMz98UaWrhviA3ItxKEd", // URL vidéo démo
    reasons: personalizedReasons,
    quote,
    stats: personalizedStats
  };
}
