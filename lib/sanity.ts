// lib/sanity.ts
import { createClient } from 'next-sanity'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-09-30',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)