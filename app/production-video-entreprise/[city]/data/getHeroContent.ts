import { heroHeadlines, heroParagraphs } from './hero-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export interface HeroContent {
  heading: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  metaDescription: string;
}

export function getHeroContent(cityName: string): HeroContent {
  const seed = simpleHash(cityName);

  // Safe fallback arrays
  const headings = heroHeadlines && heroHeadlines.length ? heroHeadlines : [`Corporate video production in ${cityName}`];
  const paragraphs = heroParagraphs && heroParagraphs.length ? heroParagraphs : [`We create professional videos for companies in ${cityName}, fast and effective.`];

  const rawHeading = headings[seed % headings.length];
  const heading = rawHeading.replace(/{{city}}/g, cityName);

  const rawDescription = paragraphs[seed % paragraphs.length];
  const description = rawDescription.replace(/{{city}}/g, cityName);

  return {
    heading,
    description,
    videoSrc: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywLGGVBShEFAvwOdGUzS8rfWxIcVho5ekmLqYl",
    posterSrc: "/video-entreprise-poster.jpg",
    metaDescription: description
  };
}