// studio/sanity.config.ts
'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  // 🔴 HARDCODE these — they are public anyway
  projectId: '5p7k2ucr', // ← replace with your real ID
  dataset: 'production',
  apiVersion: '2025-04-01',

  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2025-04-01' }),
  ],
})