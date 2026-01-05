// src/app/corporate-video-production/[city]/data/getHowToCorporateVideo.ts

import {
  howToCorporateHeadings,
  howToCorporateParagraphs
} from "./how-to-corporate-variations";

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export function getHowToCorporateVideo(cityDisplayName: string) {
  if (!howToCorporateHeadings?.length || !howToCorporateParagraphs?.length) {
    throw new Error("howToCorporate variations are missing or empty");
  }

  const index =
    hashCode(cityDisplayName) %
    Math.min(howToCorporateHeadings.length, howToCorporateParagraphs.length);

  return {
    heading: howToCorporateHeadings[index].replace(/\(\(city\)\)/g, cityDisplayName),
    description: howToCorporateParagraphs[index].replace(/\(\(city\)\)/g, cityDisplayName),
    images: [
      {
        src: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw5hGjp1mpUwWA5kGhqXxRVY8Igt0c3e2obd6n",
        alt: `Vidéo d’entreprise à ${cityDisplayName}`
      },
      {
        src: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFeEjWcCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh",
        alt: `Production vidéo d’entreprise à ${cityDisplayName}`
      }
    ]
  };
}
