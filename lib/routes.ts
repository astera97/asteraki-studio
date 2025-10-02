// lib/routes.ts
export const staticPages = [
  '/',
  '/blog',
  '/contact',
  '/quiz',
  '/a-propos',
  '/motion-design',
  '/newsletter-creative-insights',
  '/politique-de-confidentialite',
  '/pourquoi-asteraki',
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
  '/realisations',
  '/thank-you',
]

export const cityPages = [
  'rouen',
  'caen',
  // Add more cities if needed
].map(city => `/production-audiovisuelle-${city}`)

export const allStaticPages = [...staticPages, ...cityPages]