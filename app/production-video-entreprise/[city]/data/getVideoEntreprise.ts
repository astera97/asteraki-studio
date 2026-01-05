// src/data/getVideoEntreprise.ts

import { videoEntrepriseByCity, VideoEntrepriseContent } from './video-entreprise-variations';

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

export function getVideoEntreprise(cityId: string): VideoEntrepriseContent {
  const variations = videoEntrepriseByCity(cityId);
  const index = Math.abs(hashCode(cityId)) % variations.length;
  return variations[index];
}
