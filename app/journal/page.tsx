"use client"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { useState, useRef, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, Clock, Cpu, Eye } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const newsletterRef = useRef<HTMLElement>(null)

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulation du processus d'abonnement
    setTimeout(() => {
      toast({
        title: "Abonnement réussi !",
        description: "Merci de vous être abonné à notre newsletter.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* En-tête */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-grow">
        <div className="max-w-[1300px] mx-auto px-4 py-12">
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Explorer la puissance du <span className="text-orange-500">Marketing Vidéo</span> pour la croissance des entreprises.
                </h1>
                <p className="text-gray-600 text-lg md:text-xl">
                  Des insights approfondis sur le marketing vidéo, la stratégie de marque et les techniques de production pour aider les entreprises à prospérer à l'ère numérique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    <Link href="/blog/">Derniers Articles</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 text-gray-900 bg-transparent"
                    onClick={scrollToNewsletter}
                  >
                    Rejoindre la Newsletter
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ  "
                  alt="Production vidéo animée d'entreprise"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Section Blog */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Derniers Articles</h2>
              <Link href="/journal" className="text-orange-500 hover:text-orange-600 text-sm flex items-center gap-2">
                Voir tous les articles →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/journal" className="group">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="p-6">
                    <h3 className="font-medium group-hover:text-orange-600 transition-colors text-gray-900">
                      Explorer Nos Articles
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Découvrez des insights sur le marketing vidéo, des idées créatives et la stratégie de marque pour élever votre entreprise.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Articles Mis en Avant</h2>
              <Link href="/journal/" className="text-orange-500 hover:text-orange-600 text-sm flex items-center gap-2">
                Voir tous <Eye className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeaturedCard
                title="Qu'est-ce que la production vidéo d'entreprise ?"
                description="Un guide pratique sur la production vidéo d'entreprise. Comment planifier, produire et promouvoir des vidéos qui génèrent de vrais résultats commerciaux."
                image="  https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVTA9kki0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2    "
                date="25 août 2025"
                category="Marketing Vidéo"
                icon={<BrainCircuit className="h-5 w-5" />}
                slug="corporate-video-production"
              />
              <FeaturedCard
                title="Combien coute une vidéo motion design ?"
                description="Découvrez en profondeur les différents éléments qui influencent les tarifs du motion design, et comment optimiser votre budget pour obtenir une vidéo de qualité qui répond à vos objectifs marketing."
                image="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ  "
                date="27 août 2025"
                category="Marketing vidéo"
                icon={<BrainCircuit className="h-5 w-5" />}
                slug="combien-coute-un-motion-design"
              />
              <FeaturedCard
                title="Pourquoi les PDG et dirigeants publient plus de vidéos en 2025"
                description="Découvrez pourquoi les PDG et dirigeants adoptent de plus en plus la vidéo en 2025 pour renforcer leur marque personnelle, engager leurs équipes et communiquer efficacement dans un paysage numérique en évolution rapide."
                image="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVq2bKoyEJ71KVf4mZNtnHaRrMPQjFOAu6wxlD"
                date="28 juin 2025"
                category="Marketing vidéo"
                icon={<BrainCircuit className="h-5 w-5" />}
                slug="pourquoi-les-pdg-publient-plus-de-videos-en-2025"
              />
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Articles Récents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ArticleCard
                title="Qu'est-ce que la production vidéo d'entreprise ?"
                description="Découvrez ce qu'est la production vidéo d'entreprise, et comment l'utiliser comme un outil puissant pour construire un tunnel marketing solide. Explorez comment l'IA révolutionne la modélisation 3D et la création de mondes virtuels, permettant aux utilisateurs de transformer des prompts écrits en expériences immersives."
                category="Modélisation 3D"
                date="5 juillet 2023"
                slug="ai-driven-3d-modeling"
                image="    https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=600&h=400&auto=format&fit=crop"
              />
              <ArticleCard
                title="L'Intégration de l'IA dans la Technologie Portable : Améliorer l'Expérience Utilisateur"
                description="Analysez l'incorporation de l'IA dans les appareils portables, tels que les lunettes intelligentes, et comment cela améliore l'interaction utilisateur grâce à des fonctionnalités comme la navigation en monde réel et l'accessibilité de l'information."
                category="Technologie Portable"
                date="18 juillet 2023"
                slug="ai-in-wearable-technology"
                image="    https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=600&h=400&auto=format&fit=crop"
              />
              <ArticleCard
                title="La Vision par Ordinateur dans les Véhicules Autonomes"
                description="Explorer comment les algorithmes de vision par ordinateur permettent aux voitures autonomes de percevoir et de naviguer dans des environnements complexes."
                category="Vision par Ordinateur"
                date="3 août 2023"
                slug="computer-vision-autonomous-vehicles"
                image="    https://images.unsplash.com/photo-1563630381190-77c336ea545a?q=80&w=600&h=400&auto=format&fit=crop"
              />
              <ArticleCard
                title="L'Apprentissage Profond pour le Traitement du Langage Naturel"
                description="Comment les modèles transformateurs ont révolutionné notre capacité à comprendre et à générer le langage humain."
                category="TALN"
                date="15 août 2023"
                slug="deep-learning-nlp"
                image="    https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&h=400&auto=format&fit=crop"
              />
              <ArticleCard
                title="Considérations Éthiques dans l'IA Générative"
                description="Examiner les implications éthiques du contenu généré par l'IA et la responsabilité des chercheurs et praticiens en IA."
                category="Éthique de l'IA"
                date="2 septembre 2023"
                slug="ethical-considerations-genai"
                image="    https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&h=400&auto=format&fit=crop"
              />
              <ArticleCard
                title="Les tendences du motion design en 2025"
                description="Les tendances émergentes en motion design pour 2025, y compris les styles visuels, les techniques d'animation et les technologies influençant le domaine."
                category="Marketing vidéo"
                date="20 juillet 2025"
                slug="tendences-motion-design-2025"
                image="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVmpBGIc5MHqgpiKfXLTktCOlh2Dac86JuZso9"
              />
            </div>
          </section>

          <section ref={newsletterRef} id="newsletter" className="bg-gray-50 rounded-xl p-8 mb-20 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Restez Informé</h2>
                <p className="text-gray-600">
                  Abonnez-vous à notre newsletter pour recevoir les derniers insights sur les avancées de l'IA, des tutoriels et des actualités du secteur.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  className="bg-white border-gray-300 focus-visible:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 whitespace-nowrap text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Abonnement..." : "S'abonner"}
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  )
}

function FeaturedCard({ title, description, image, date, category, icon, slug = "" }) {
  return (
    <Card className="bg-white border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all relative">
      <Link href={`/blog/${slug}/`} className="absolute inset-0 z-10">
        <span className="sr-only">Lire l'article: {title}</span>
      </Link>
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-orange-500 mb-2">
          {icon}
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

function ArticleCard({ title, description, category, date, slug = "", image }) {
  return (
    <div className="group relative">
      <Link href={`/blog/${slug}/`} className="absolute inset-0 z-10">
        <span className="sr-only">Lire l'article: {title}</span>
      </Link>
      <div className="space-y-3">
        <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
          <Image src={image || "/placeholder.svg"} alt={`Vignette de ${title}`} fill className="object-cover" />
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