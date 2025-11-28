// src/app/boite-de-production-video/[city]/data/getHeroContent.ts

import { heroHeadlines, heroParagraphs } from './hero-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface HeroContent {
  heading: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
}

export function getHeroContent(cityName: string): HeroContent {
  const seed = simpleHash(cityName);

  const rawHeading = heroHeadlines[seed % heroHeadlines.length];
  const heading = rawHeading.replace(/{{city}}/g, cityName);

  const rawDescription = heroParagraphs[seed % heroParagraphs.length];
  const description = rawDescription.replace(/{{city}}/g, cityName);

  return {
    heading,
    description,
    videoSrc: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy",
    posterSrc: "/event-video-poster.jpg"
  };
}