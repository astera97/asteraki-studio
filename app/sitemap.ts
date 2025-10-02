// app/sitemap.ts
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'

export default async function sitemap() {
  // Fetch all published blog posts from Sanity
  const posts = await sanityClient.fetch(groq`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const baseUrl = 'https://asterakistudio.com'

  // Static pages (non-blog)
  const staticPages = [
    { url: '/', priority: 1.0 },
    { url: '/blog', priority: 0.9 },
    // Add other key pages if needed: '/contact', '/services', etc.
  ]

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }))

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticUrls, ...blogUrls]
}