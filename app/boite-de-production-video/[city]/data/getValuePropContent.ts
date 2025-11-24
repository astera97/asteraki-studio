// src/app/agence-audiovisuelle/[city]/data/getValuePropContent.ts

import { valuePropHeadings, valuePropDescriptions } from './value-prop-variations';

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export interface ValuePropContent {
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function getValuePropContent(cityName: string, index: number = 0): ValuePropContent {
  const seed = simpleHash(cityName) + index;

  const heading = valuePropHeadings[seed % valuePropHeadings.length];
  const description = valuePropDescriptions[seed % valuePropDescriptions.length];

  return {
    heading,
    description,
    image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnrVMma2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE?height=400&width=800&text=Value+Prop+Illustration",
    imageAlt: "Illustration of video production boosting business results"
  };
}
