import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2 } from 'lucide-react';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ShareButtons from './share-buttons';

// ✅ Doit être async pour la récupération de données côté serveur
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* ✅ Sémantique : <Header /> */}
      <Header />

      {/* ✅ Sémantique : <main> pour le contenu principal */}
      <main className="container mx-auto px-4 py-12">
        {/* ✅ Sémantique : <article> pour le contenu autonome */}
        <article className="max-w-3xl mx-auto">
          {/* ✅ Sémantique : <nav> pour la navigation */}
          <nav aria-label="fil d'Ariane" className="mb-8">
            <Link href="/articles" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux articles
            </Link>
          </nav>

          {/* ✅ Sémantique : <header> pour les métadonnées de l'article */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-orange-500 mb-4">
              <BrainCircuit className="h-5 w-5" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </span>
              <time dateTime={post.date} className="text-gray-600">
                {post.date}
              </time>
              <span>Par {post.author}</span>
            </div>
          </header>

          {/* ✅ Sémantique : <figure> pour l'image + légende */}
          <figure className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <figcaption className="sr-only">
              Image de héros pour l'article : {post.title}
            </figcaption>
          </figure>

          {/* ✅ Sémantique : <section> pour les actions interactives */}
          <section aria-label="Partager cet article">
            <ShareButtons post={post} />
          </section>

          {/* ✅ Sémantique : Contenu principal de l'article */}
          <div className="prose prose-gray max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* ✅ Sémantique : <aside> pour le contenu lié mais non essentiel */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <aside className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Articles liés</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <article key={index} className="space-y-3">
                    <figure className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={`Vignette de ${relatedPost.title}`}
                        fill
                        className="object-cover"
                      />
                      <figcaption className="sr-only">
                        {relatedPost.title}
                      </figcaption>
                    </figure>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-orange-500 mb-2">
                        <BrainCircuit className="h-4 w-4" />
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="font-medium group-hover:text-orange-600 transition-colors text-gray-900">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          )}
        </article>
      </main>

      {/* ✅ Sémantique : <Footer /> */}
      <Footer />
    </>
  );
}
