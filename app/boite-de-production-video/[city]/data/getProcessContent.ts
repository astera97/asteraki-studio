import {
  kickoffVariations,
  conceptionVariations,
  preprodVariations,
  productionVariations,
  postprodVariations,
  ProcessVariation,
  ProcessVariationWithId, // ← import new type
} from "./process-variations";

function pickRandomStep(variations: ProcessVariation[]): ProcessVariationWithId {
  const randomIndex = Math.floor(Math.random() * variations.length);
  return { ...variations[randomIndex], uniqueId: crypto.randomUUID() };
}

export function getProcessContent(): ProcessVariationWithId[] {
  return [
    pickRandomStep(kickoffVariations),
    pickRandomStep(conceptionVariations),
    pickRandomStep(preprodVariations),
    pickRandomStep(productionVariations),
    pickRandomStep(postprodVariations),
  ];
}