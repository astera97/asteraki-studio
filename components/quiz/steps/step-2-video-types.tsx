"use client"

import { useState } from "react"
import { useQuiz } from "../quiz-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Recommandations de types de vidéos selon les objectifs
const getRecommendedTypes = (goal: string) => {
  const recommendations: { [key: string]: string[] } = {
    "Expliquer mon produit/service": ["Vidéo explicative", "Vidéos de présentation"],
    "Commercialiser mon produit/service": ["Vidéos de marque et spots TV", "Vidéos promotionnelles"],
    "Générer des prospects": ["Vidéos de démonstration", "Vidéos d'application", "Vidéos de présentation"],
    "Créer ou refondre une marque": ["Vidéos de marque et spots TV", "Vidéos de présentation", "Illustrations"],
    "Améliorer la notoriété de marque": ["Vidéos de marque et spots TV", "Vidéos promotionnelles", "Publicités sociales"],
    "Augmenter les taux de conversion": ["Vidéos de démonstration", "Vidéos d'application", "Publicités sociales"],
    "Créer une preuve sociale": ["Témoignages clients", "Contenu généré par les utilisateurs (UGC)", "Interviews d'experts"],
    "Améliorer le référencement (SEO)": ["Infographies", "Tutoriels et formations", "Vidéos explicatives"],
    "Recruter des talents": ["Vidéos de carrière", "Promos entreprise", "Vidéos de marque"],
    "Financer un projet via le crowdfunding": ["Vidéos de crowdfunding", "Vidéos de présentation", "Vidéos promotionnelles"],
    "Montrer des cas d'utilisation": ["Témoignages clients", "Vidéos de démonstration"],
    "Créer des vidéos de formation": ["Vidéos éducatives et de formation", "Vidéos de démonstration", "Vidéos explicatives"],
  }
  return recommendations[goal] || []
}

const allVideoTypes = [
  {
    id: "explainer",
    title: "Vidéo explicative",
    description: "Supprimez la complexité et augmentez les conversions",
    image: "/explainer_vt.webp?height=120&width=200&text=Vidéo+explicative",
  },
  {
    id: "overview",
    title: "Vidéos de présentation",
    description: "Votre pitch produit parfait, qui vend pour vous 24h/24",
    image: "/overview_vt.webp?height=120&width=200&text=Vidéos+de+présentation",
  },
  {
    id: "brand-tvcs",
    title: "Vidéos de marque et spots TV",
    description: "Des contenus sur mesure, basés sur une narration, pour votre prochaine campagne de notoriété",
    image: "/brand_vt.webp?height=120&width=200&text=Vidéos+de+marque",
  },
  {
    id: "promotional",
    title: "Vidéos promotionnelles",
    description: "Boostez vos ventes et conversions avec des contenus percutants",
    image: "/promotional_vt.webp?height=120&width=200&text=Vidéos+promotionnelles",
  },
  {
    id: "demo",
    title: "Vidéos de démonstration",
    description: "Montrez votre produit en action avec des démonstrations détaillées",
    image: "/demo_vt.webp?height=120&width=200&text=Vidéos+de+démo",
  },
  {
    id: "app",
    title: "Vidéos d'application",
    description: "Mettez en valeur les applis, produits numériques, interfaces et flux de travail",
    image: "/app_vt.webp?height=120&width=200&text=Vidéos+d'application",
  },
  {
    id: "social-ads",
    title: "Publicités sociales",
    description: "Contenus vidéo optimisés pour la publicité sur les réseaux sociaux",
    image: "/social_ads_vt.webp?height=120&width=200&text=Publicités+sociales",
  },
  {
    id: "testimonials",
    title: "Témoignages clients",
    description: "Des témoignages authentiques qui renforcent la confiance",
    image: "/testimonial_vt.webp?height=120&width=200&text=Témoignages+clients",
  },
  {
    id: "ugc",
    title: "UGC & collaborations créateurs",
    description: "Contenu généré par les utilisateurs et collaborations avec des créateurs",
    image: "/ugc_vt.webp?height=120&width=200&text=UGC+&+créateurs",
  },
  {
    id: "expert-talk",
    title: "Interviews d'experts",
    description: "Contenus de leadership d'opinion et interviews d'experts",
    image: "/expert_vt.webp?height=120&width=200&text=Interviews+d'experts",
  },
  {
    id: "infographics",
    title: "Infographies",
    description: "Transformez des données complexes en visuels narratifs captivants",
    image: "/infographics_vt.webp?height=120&width=200&text=Infographies",
  },
  {
    id: "tutorials",
    title: "Tutoriels & formations",
    description: "Contenus éducatifs pour la formation et l'intégration",
    image: "/tutorial_vt.webp?height=120&width=200&text=Tutoriels+&+formations",
  },
  {
    id: "career",
    title: "Vidéos de carrière",
    description: "Attirez les meilleurs talents avec des contenus percutants",
    image: "/career_vt.webp?height=120&width=200&text=Vidéos+de+carrière",
  },
  {
    id: "company-promos",
    title: "Promos entreprise",
    description: "Met en valeur la culture et les valeurs de votre entreprise",
    image: "/company_promo_vt.webp?height=120&width=200&text=Promos+entreprise",
  },
  {
    id: "crowdfunding",
    title: "Vidéos de crowdfunding",
    description: "Des vidéos percutantes pour soutenir votre campagne de financement",
    image: "/crowdfunding_vt.webp?height=120&width=200&text=Vidéos+de+crowdfunding",
  },
  {
    id: "training",
    title: "Vidéos éducatives et de formation",
    description: "Des contenus éducatifs engageants qui instruisent tout en divertissant",
    image: "/training_vt.webp?height=120&width=200&text=Formation+&+divertissement",
  },
  {
    id: "illustrations",
    title: "Illustrations",
    description: "Illustrations personnalisées et graphismes animés",
    image: "/illustration_vt.webp?height=120&width=200&text=Illustrations",
  },
]

export default function Step2VideoTypes() {
  const { quizData, updateQuizData, nextStep, prevStep } = useQuiz()
  const [selectedTypes, setSelectedTypes] = useState<string[]>(quizData.videoTypes)

  const recommendedTypes = getRecommendedTypes(quizData.goal)
  const otherTypes = allVideoTypes.filter((type) => !recommendedTypes.includes(type.title))

  const handleTypeToggle = (typeId: string) => {
    const newSelectedTypes = selectedTypes.includes(typeId)
      ? selectedTypes.filter((id) => id !== typeId)
      : [...selectedTypes, typeId]

    setSelectedTypes(newSelectedTypes)
    updateQuizData({ videoTypes: newSelectedTypes })
  }

  const handleNext = () => {
    if (selectedTypes.length > 0) {
      nextStep()
    }
  }

  const VideoTypeCard = ({
    type,
    isRecommended = false,
  }: { type: (typeof allVideoTypes)[0]; isRecommended?: boolean }) => {
    const isSelected = selectedTypes.includes(type.id)

    return (
      <button
        onClick={() => handleTypeToggle(type.id)}
        className={`relative p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
          isSelected
            ? "border-orange-500 bg-orange-50 ring-2 ring-orange-200"
            : "border-gray-200 bg-white hover:border-gray-300"
        }`}
      >
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}

        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
          <img
            src={type.image || "/placeholder.svg"}
            alt={type.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
        <p className="text-sm text-gray-600">{type.description}</p>
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        {/* Logo - cliquable */}
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center mr-3">
            {/* Remplacer par le chemin de votre logo */}
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVsSyyzZk9bJcHXMNUQfstv87OVhrZn4GzoAa"
              alt="Logo Asteraki"
              width={80}
              height={80}
              className="w-22 h-22 text-white"
            />
          </div>
        </Link>

        <Button
          onClick={handleNext}
          disabled={selectedTypes.length === 0}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          Suivant <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-orange-500 h-2 transition-all duration-300" style={{ width: "28%" }}></div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nous vous recommandons...</h1>
          <p className="text-lg text-gray-600">Sélectionnez un ou plusieurs types de création pour continuer.</p>

          {quizData.goal && (
            <div className="mt-4">
              <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                {quizData.goal}
              </span>
            </div>
          )}
        </div>

        {/* Types recommandés */}
        {recommendedTypes.length > 0 && (
          <div className="mb-16">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {recommendedTypes.map((typeName) => {
                  const type = allVideoTypes.find((t) => t.title === typeName)
                  return type ? <VideoTypeCard key={type.id} type={type} isRecommended={true} /> : null
                })}
              </div>
            </div>
          </div>
        )}

        {/* Autres types de création */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Explorez d'autres types de création :</h2>
            <p className="text-gray-600">
              Découvrez notre gamme complète. Nous créons des styles entièrement sur mesure, conçus spécifiquement pour vous.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl">
              {otherTypes.map((type) => (
                <VideoTypeCard key={type.id} type={type} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}