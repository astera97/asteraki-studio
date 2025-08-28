import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

// Function to get all static paths from your pages directory
function getStaticPaths() {
  const pagesDir = path.join(process.cwd(), 'pages')
  const paths: string[] = [''] // Start with homepage
  
  function readDirectory(dir: string, basePath = '') {
    const files = fs.readdirSync(dir)
    
    files.forEach(file => {
      const fullPath = path.join(dir, file)
      const relativePath = path.join(basePath, file)
      
      if (fs.statSync(fullPath).isDirectory()) {
        readDirectory(fullPath, relativePath)
      } else if (file.endsWith('.tsx') || file.endsWith('.js')) {
        const route = relativePath
          .replace(/\\/g, '/')
          .replace('/index', '')
          .replace('.tsx', '')
          .replace('.js', '')
        
        // Exclude API routes and special files
        if (!route.includes('api') && !route.includes('_app') && !route.includes('_document')) {
          paths.push(route)
        }
      }
    })
  }
  
  readDirectory(pagesDir)
  return paths.filter(Boolean)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://asterakistudio.com'
  
  // Get all static paths automatically
  const staticPaths = getStaticPaths()
  
  // You can still manually add blog posts or fetch them from your data source
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
      <loc>${baseUrl}${path}</loc>
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

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}