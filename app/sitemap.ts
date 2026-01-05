import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { CITIES } from './boite-de-production-video/[city]/data/cities' // 👈 Import your cities

export default async function sitemap() {
  const posts = await sanityClient.fetch(groq`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const baseUrl = 'https://asterakistudio.com'

  // 🔧 MANUALLY LIST ALL YOUR STATIC PAGES HERE
  const allStaticPages = [
    '/',
    // ➤ Service pages
    '/motion-design',
    '/production-video-motion-design',
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
    '/production-audiovisuelle-caen',
    '/production-audiovisuelle-cannes',
    '/production-audiovisuelle-paris',
    '/production-audiovisuelle-rennes',
    '/production-audiovisuelle-rouen',
    '/production-audiovisuelle-toulouse',
  ]

  // ✅ ONLY dynamic template you want
  const cityPages = CITIES.map(city => `/boite-de-production-video/${city.id}`)

  const staticAndCityPages = [...allStaticPages, ...cityPages]

  const staticUrls = staticAndCityPages.map(path => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' 
      ? 1.0 
      : path.startsWith('/boite-de-production-video/')
        ? 0.9
        : 0.8, // all other static pages = 0.8
  }))

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticUrls, ...blogUrls]
}