import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'

// ➤ Cities – dynamic templates
import { CITIES as BOITE_CITIES } from './boite-de-production-video/[city]/data/cities'
import { CITIES as ENTREPRISE_CITIES } from './production-video-entreprise/[city]/data/cities'

export default async function sitemap() {
  const posts = await sanityClient.fetch(groq`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const baseUrl = 'https://asterakistudio.com'

  // ➤ STATIC PAGES
  const allStaticPages = [
    '/',
    // Services
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

    // Pages uniques
    '/quiz',
    '/realisations',
    '/a-propos',
    '/politique-de-confidentialite',
    '/newsletter-creative-insights',
    '/pourquoi-asteraki',
    '/contact',
    '/blog',

    // Pages locales statiques
    '/production-audiovisuelle-caen',
    '/production-audiovisuelle-cannes',
    '/production-audiovisuelle-paris',
    '/production-audiovisuelle-rennes',
    '/production-audiovisuelle-rouen',
    '/production-audiovisuelle-toulouse',
  ]

  // ➤ Dynamic pages – boîte de production vidéo
  const boiteCityPages = BOITE_CITIES.map(
    city => `/boite-de-production-video/${city.id}`
  )

  // ➤ Dynamic pages – production vidéo entreprise
  const entrepriseCityPages = ENTREPRISE_CITIES.map(
    city => `/production-video-entreprise/${city.id}`
  )

  const staticAndDynamicPages = [
    ...allStaticPages,
    ...boiteCityPages,
    ...entrepriseCityPages,
  ]

  const staticUrls = staticAndDynamicPages.map(path => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority:
      path === '/'
        ? 1.0
        : path.startsWith('/production-video-entreprise/')
          ? 0.95
          : path.startsWith('/boite-de-production-video/')
            ? 0.9
            : 0.8,
  }))

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt
      ? new Date(post.publishedAt)
      : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticUrls, ...blogUrls]
}
