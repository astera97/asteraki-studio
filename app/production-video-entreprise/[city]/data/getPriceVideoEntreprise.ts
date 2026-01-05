// src/app/production-video-entreprise/[city]/data/getPriceVideoEntreprise.ts
import { priceVideoEntrepriseVariations } from "./price-video-entreprise-variations";

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getPriceVideoEntreprise(cityDisplayName: string) {
  if (!priceVideoEntrepriseVariations.length) {
    throw new Error("Price video entreprise variations are missing");
  }

  const index = hashCode(cityDisplayName) % priceVideoEntrepriseVariations.length;
  const variation = priceVideoEntrepriseVariations[index];

  const replaceCity = (text: string) => text.replace(/\(\(city\)\)/g, cityDisplayName);

  return {
    heading: replaceCity(variation.heading),
    intro: replaceCity(variation.intro),
    paragraphs: variation.paragraphs.map(replaceCity),
    factors: variation.factors.map(f => ({
      number: f.number,
      title: replaceCity(f.title),
      description: replaceCity(f.description)
    })),
    estimation: {
      title: replaceCity(variation.priceEstimate.title),
      priceRange: replaceCity(variation.priceEstimate.description),
      note: replaceCity(variation.priceEstimate.note)
    }
  };
}
