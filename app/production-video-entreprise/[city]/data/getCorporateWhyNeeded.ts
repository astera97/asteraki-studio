import { corporateWhyNeededVariations, CorporateWhyNeededContent } from './corporate-why-needed-variations';

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
}

// Receives a city and returns one variation deterministically
export function getCorporateWhyNeeded(city: string) {
  const index = Math.abs(hashCode(city)) % corporateWhyNeededVariations.length;
  return corporateWhyNeededVariations[index];
}
