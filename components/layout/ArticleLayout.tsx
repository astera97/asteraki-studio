// components/layout/ArticleLayout.tsx
'use client'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ArticleLayout({
  children,
  title,
  category = 'Marketing Vidéo',
  readingTime = '12 min',
  publishedDate = '20 août 2025',
  heroImageSrc,
  relatedArticles = [],
}: {
  children: React.ReactNode
  title: string
  category?: string
  readingTime?: string
  publishedDate?: string
  heroImageSrc?: string
  relatedArticles?: Array<{ href: string; title: string; imageSrc: string }>
}) {
  const { toast } = useToast()

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Découvrez cet article : ${title}`

    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        navigator.clipboard.writeText(url)
        toast({
          title: 'Lien copié',
          description: "Le lien de l'article a été copié dans votre presse-papiers.",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Lien de retour */}
          <Link href="/journal" className="inline-flex items-center text-black hover:text-black mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux articles
          </Link>

          {/* Balise de catégorie */}
          <div className="flex items-center gap-2 text-sm text-black mb-4">
            <BrainCircuit className="h-5 w-5" />
            <span>{category}</span>
          </div>

          {/* Titre de l'article */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-black">
            {title}
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-8 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de {readingTime}</span>
            </div>
            <div>Publié le {publishedDate}</div>
          </div>

          {/* Image de héros */}
          {heroImageSrc && (
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
              <Image
                src={heroImageSrc}
                alt={`Image de couverture de l'article : ${title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Contenu principal + CTA intégré */}
          <article className="mb-12">
            {/* Apply Tailwind Typography to PortableText content */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>

            {/* CTA universel — ajouté à la fin de chaque article */}
            <section>
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Et si vous vous faisiez accompagner ?</h2>
              
              <p className="text-black">
                Réaliser une vidéo d’entreprise, ce n’est pas juste joli à regarder. C’est penser le fond, la forme, le rythme, le son, le message et la diffusion. Pour que tout tienne debout, avoir un partenaire expérimenté, c’est un vrai atout.
              </p>
              <br />
              <p className="text-black">
                Chez Asteraki, on prend le temps de comprendre votre besoin, d’ajuster le format à votre budget, et de vous proposer un devis clair.
              </p>
              <br />
              <p className="text-black">
                Alors, prêt à réaliser votre prochaine vidéo ?
              </p>
              <br /><br />
              <div className="flex justify-center items-center">
                <Link href="/quiz" passHref>
                  <Button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                    Besoin d'un projet vidéo pour votre entreprise ?
                  </Button>
                </Link>
              </div>
              <br /><br />
            </section>
          </article>

          {/* Mobile Sharing Buttons */}
          <div className="md:hidden flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="h-4 w-4 mr-1" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="h-4 w-4 mr-1" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare('linkedin')}
              >
                <Linkedin className="h-4 w-4 mr-1" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
              onClick={() => handleShare('clipboard')}
            >
              <Share2 className="h-4 w-4 mr-1" />
            </Button>
          </div>

          {/* Articles liés */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-xl font-bold mb-6 text-black">Vous aimerez peut-être aussi</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((article, index) => (
                  <Link key={index} href={article.href} className="group">
                    <div className="space-y-3">
                      <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                        <Image
                          src={article.imageSrc}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-black mb-2">
                          <BrainCircuit className="h-4 w-4" />
                          <span>Marketing Vidéo</span>
                        </div>
                        <h3 className="font-medium group-hover:text-orange-600 transition-colors text-black">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}