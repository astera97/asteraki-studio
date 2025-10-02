// app/blog/page.tsx
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BrainCircuit, Clock, Eye } from 'lucide-react'
import NewsletterSection from '@/components/NewsletterSection'
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'

export default async function BlogPage() {
  const posts = await sanityClient.fetch(groq`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      category,
      "heroImage": mainImage.asset->url
    }
  `)

  const featuredPosts = posts.slice(0, 3)
  const recentPosts = posts.slice(3, 9)

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-[1300px] mx-auto px-4 py-12">
          {/* Hero */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Explorer la puissance du <span className="text-orange-500">Marketing Vidéo</span> pour la croissance des entreprises.
                </h1>
                <p className="text-gray-600 text-lg md:text-xl">
                  Des insights approfondis sur le marketing vidéo, la stratégie de marque et les techniques de production pour aider les entreprises à prospérer à l'ère numérique.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/blog/">Derniers Articles</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ"
                  alt="Production vidéo animée d'entreprise"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Featured */}
          {featuredPosts.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Articles Mis en Avant</h2>
                <Link href="/blog/" className="text-orange-500 hover:text-orange-600 text-sm flex items-center gap-2">
                  Voir tous <Eye className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <FeaturedCard
                    key={post.slug}
                    title={post.title}
                    description={post.excerpt || 'Découvrez cet article.'}
                    image={post.heroImage || "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ"}
                    date={new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    category={post.category || 'Marketing Vidéo'}
                    slug={post.slug}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Recent */}
          {recentPosts.length > 0 && (
            <section className="mb-20">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Articles Récents</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <ArticleCard
                    key={post.slug}
                    title={post.title}
                    description={post.excerpt || 'Lisez cet article.'}
                    category={post.category || 'Marketing Vidéo'}
                    date={new Date(post.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    slug={post.slug}
                    image={post.heroImage || "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ"}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Newsletter (Client Component) */}
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

// Pure presentational components (no hooks)
function FeaturedCard({ title, description, image, date, category, slug }) {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all relative">
      <Link href={`/blog/${slug}/`} className="absolute inset-0 z-10" />
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-orange-500 mb-2">
          <BrainCircuit className="h-5 w-5" />
          <span>{category}</span>
        </div>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-gray-500 relative z-20">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

function ArticleCard({ title, description, category, date, slug, image }) {
  return (
    <div className="group relative">
      <Link href={`/blog/${slug}/`} className="absolute inset-0 z-10" />
      <div className="space-y-3">
        <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs text-orange-500 mb-2">
            <BrainCircuit className="h-4 w-4" />
            <span>{category}</span>
          </div>
          <h3 className="font-medium group-hover:text-orange-600 transition-colors text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}