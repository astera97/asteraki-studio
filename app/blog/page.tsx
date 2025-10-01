// app/blog/page.tsx
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await sanityClient.fetch(groq`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current
    }
  `)

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <ul className="space-y-3">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-lg text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}