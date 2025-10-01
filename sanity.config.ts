// studio/sanity.config.ts
'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

// 🔴 Hardcode these — they are public and safe
const projectId = '5p7k2ucr' // ← YOUR REAL PROJECT ID
const dataset = 'production'
const apiVersion = '2025-09-30'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})