// app/sitemap.ts
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { allStaticPages } from '@/lib/routes'

export default async function sitemap() {
  // Fetch blog posts from Sanity
  const posts = await sanityClient.fetch(groq`
    *[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const baseUrl = 'https://asterakistudio.com'

  const staticUrls = allStaticPages.map(path => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1.0 : path.startsWith('/production-video-a-') ? 0.9 : 0.8,
  }))

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticUrls, ...blogUrls]
}