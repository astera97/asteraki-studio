// app/blog/[slug]/page.tsx
'use client'

import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import ArticleLayout from '@/components/layout/ArticleLayout'

const components = {
  types: {
    embed: ({ value }: any) => {
      const { url } = value
      if (!url) return null

      // Vimeo
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
      if (vimeoMatch) {
        return (
          <div className="my-6 relative w-full aspect-video max-w-none mx-auto overflow-hidden rounded-lg border border-gray-200">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoMatch[1]}`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo video"
            />
          </div>
        )
      }

      // YouTube
      const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/)
      if (youtubeMatch) {
        return (
          <div className="my-6 relative w-full aspect-video max-w-none mx-auto overflow-hidden rounded-lg border border-gray-200">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            />
          </div>
        )
      }

      return <p className="text-red-500">Unsupported video URL</p>
    }
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      content,
      "heroImage": mainImage.asset->url,
      category,
      publishedAt,
      readingTime
    }
  `, { slug: params.slug })

  if (!post) return <div>Post not found</div>

  // Mock related articles (replace with real query later)
  const relatedArticles = [
    {
      href: '/blog/what-kind-of-video-do-i-need-for-my-business/',
      title: 'De quel type de vidéo ai-je besoin pour mon entreprise ?',
      imageSrc: 'https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVSTLP9vUCDrvtja6n9zgLHo1Uq5I0Mu78VS4d'
    },
    {
      href: '/blog/the-video-marketing-kpis-you-need-to-know/',
      title: 'Les KPI de marketing vidéo que vous devez connaître',
      imageSrc: 'https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnAAJPBex46ydSpE25FeO3PBXUsDz80LqGmi7'
    }
  ]

  return (
    <ArticleLayout
      title={post.title}
      category={post.category || 'Marketing Vidéo'}
      readingTime={post.readingTime || '12 min'}
      publishedDate={new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
      heroImageSrc={post.heroImage}
      relatedArticles={relatedArticles}
    >
      <PortableText value={post.content} components={components} />
    </ArticleLayout>
  )
}