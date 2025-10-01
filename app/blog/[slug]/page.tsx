// app/blog/[slug]/page.tsx
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'

const components = {
  types: {
    embed: ({ value }: any) => {
      const { url } = value
      if (!url) return null

      // Vimeo
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
      if (vimeoMatch) {
        return (
          <div className="my-6">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoMatch[1]}`}
              width="100%"
              height="400"
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
          <div className="my-6">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
              width="100%"
              height="400"
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
      content
    }
  `, { slug: params.slug })

  if (!post) return <div>Post not found</div>

  return (
    <article className="max-w-3xl mx-auto p-4 prose">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <PortableText value={post.content} components={components} />
    </article>
  )
}