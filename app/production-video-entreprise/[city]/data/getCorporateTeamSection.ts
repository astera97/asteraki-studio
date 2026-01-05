// src/data/getCorporateTeamSection.ts

import { getTeamSectionVariations, TeamSectionContent } from './team-section-variations';

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

// Reçoit la ville et retourne une variation de section d'équipe de manière déterministe
export function getCorporateTeamSection(city: string): TeamSectionContent {
  const teamVariations = getTeamSectionVariations(city);
  const index = Math.abs(hashCode(city)) % teamVariations.length;
  return teamVariations[index];
}
