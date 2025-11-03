// src/app/boite-de-production-video/[city]/data/getProcessContent.ts

import { processHeadings, processSteps } from './process-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface ProcessContent {
  heading: string;
  steps: typeof processSteps; // Use the type of the static array
}

export function getProcessContent(cityName: string): ProcessContent {
  const seed = simpleHash(cityName);

  const rawHeading = processHeadings[seed % processHeadings.length];
  const heading = rawHeading.replace(/{{city}}/g, cityName);

  // For now, keep the steps static but personalize the descriptions
  const personalizedSteps = processSteps.map(step => ({
    ...step,
    desc: step.desc.replace(/{{city}}/g, cityName)
  }));

  return {
    heading,
    steps: personalizedSteps // Return the personalized list
  };
}