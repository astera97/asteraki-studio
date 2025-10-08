// app/sitemap.ts
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'

export default async function sitemap() {
  // Fetch blog posts from Sanity
  const posts = await sanityClient.fetch(groq`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const baseUrl = 'https://asterakistudio.com' // ← fixed: no trailing spaces!

  // 🔧 MANUALLY LIST ALL YOUR STATIC PAGES HERE
  // Include:
  // - Home ('/')
  // - Service pages (e.g., '/production-video-corporate')
  // - City pages (e.g., '/production-audiovisuelle-a-paris')
  // - Unique pages (e.g., '/about', '/contact', '/mentions-legales')
  const allStaticPages = [
    '/',
    // ➤ Service pages (you said these start with /production-video-)
    '/motion-design',
    '/production-video-motion-design',

    // ➤ City pages (example format — replace with your actual slugs)
    '/production-audiovisuelle-caen',
    '/production-audiovisuelle-cannes',
    '/production-audiovisuelle-lyon',
    '/production-audiovisuelle-paris',
    '/production-audiovisuelle-rennes',
    '/production-audiovisuelle-rouen',
    '/production-audiovisuelle-toulouse',
    '/production-video-application',
    '/production-video-b2b',
    '/production-video-b2c',
    '/production-video-bancaire',
    '/production-video-demonstration-produit',
    '/production-video-ecommerce',
    '/production-video-evenementielle',
    '/production-video-explicative',
    '/production-video-financement',
    '/production-video-logistique',
    '/production-video-marque',
    '/production-video-pedagogique',
    '/production-video-recrutement',
    '/production-video-saas',
    '/production-video-sante',
    '/production-video-startup',
    '/production-video-tech',
    '/production-video-temoignage-client',
 
    // ➤ Other unique pages
    '/quiz',
    '/realisations',
    '/a-propos',
    '/politique-de-confidentialite',
    '/newsletter-creative-insights',
    '/pourquoi-asteraki',
    '/contact',
    '/blog',
    
  ]

  const staticUrls = allStaticPages.map(path => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' 
      ? 1.0 
      : path.startsWith('/production-video-') || path.startsWith('/production-audiovisuelle-a-')
        ? 0.9 
        : 0.8,
  }))

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticUrls, ...blogUrls]
}