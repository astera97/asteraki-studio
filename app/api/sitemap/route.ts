// app/api/sitemap/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Function to get all static paths from your app directory
function getStaticPaths() {
  const appDir = path.join(process.cwd(), 'app')
  const paths: string[] = [''] // Start with homepage
  
  function readDirectory(dir: string, basePath = '') {
    // Check if directory exists
    if (!fs.existsSync(dir)) {
      return
    }
    
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const fullPath = path.join(dir, file)
      const relativePath = path.join(basePath, file)
      
      // Skip API routes and special directories
      if (file === 'api' || file.startsWith('_') || file === 'node_modules') {
        return
      }
      
      if (fs.statSync(fullPath).isDirectory()) {
        readDirectory(fullPath, relativePath)
      } else if (file === 'page.tsx' || file === 'page.ts' || file === 'page.js') {
        const route = relativePath
          .replace(/\\/g, '/')
          .replace('/page', '')
          .replace('.tsx', '')
          .replace('.ts', '')
          .replace('.js', '')
        
        if (route) {
          paths.push(route)
        }
      }
    })
  }
  
  readDirectory(appDir)
  return paths.filter(Boolean)
}

export async function GET() {
  const baseUrl = 'https://asterakistudio.com' // Fixed the extra spaces
  
  // Get all static paths automatically
  let staticPaths: string[] = ['']
  try {
    staticPaths = getStaticPaths()
  } catch (error) {
    console.error('Error getting static paths:', error)
  }
  
  // Add your blog posts manually or fetch them
  const blogPosts = [
    'kpi-du-marketing-video',
    'pourquoi-les-pdg-publient-plus-de-videos-en-2025',
    'tendances-motion-design-2025',
    'quel-video-pour-mon-entreprise',
    'tendences-motion-design-2025',
    'video-entreprise',
    'combien-coute-un-motion-design'
    // Add more as needed
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPaths
    .map((path) => {
      return `
    <url>
      <loc>${baseUrl}${path === '' ? '' : `/${path}`}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === '' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
  ${blogPosts
    .map((slug) => {
      return `
    <url>
      <loc>${baseUrl}/blog/${slug}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}