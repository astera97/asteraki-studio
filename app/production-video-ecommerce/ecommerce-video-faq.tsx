"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const ecommerceVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos e-commerce créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos de démonstration de produits, les vues 360° des produits, les vidéos de présentation en situation, les témoignages clients, les expériences de déballage et le contenu personnalisé pour les marques e-commerce. Chaque vidéo est conçue pour répondre à des défis e-commerce spécifiques tout en présentant les produits dans des contextes réels qui renforcent la confiance et fixent des attentes précises.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos e-commerce ?",
    answer:
      "La plupart des projets de vidéos e-commerce prennent 2 à 4 semaines, de la conception initiale à la livraison finale. Cela inclut l'analyse du produit, le développement créatif, le storyboard, la production et le montage. Pour les lancements de produits urgents, nous intégrons des délais accélérés avec des ressources dédiées. Nous pouvons livrer des vidéos de produits de haute qualité en seulement 10 jours pour des campagnes urgentes avec des ressources supplémentaires.",
  },
  {
    question: "Comment créez-vous des vidéos qui réduisent les taux de retour ?",
    answer:
      "Notre processus commence par une analyse approfondie des raisons courantes de retours pour votre catégorie de produits spécifique. Nous mettons ensuite en valeur de manière stratégique les aspects de votre produit qui entraînent généralement des retours (taille, texture, fidélité des couleurs, fonctionnalité) dans des contextes réels. Chaque vidéo inclut des plans spécifiques conçus pour fixer des attentes précises, et nous mettons en œuvre des tests A/B avec votre équipe pour affiner continuellement ce qui fonctionne le mieux pour réduire les retours dans votre catégorie.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos e-commerce ?",
    answer:
      "La longueur idéale varie selon l'objectif : 15 à 30 secondes pour les présentations de produits optimisées pour mobile (les plus efficaces pour la conversion), 30 à 60 secondes pour les démonstrations de produits détaillées, et 60 à 90 secondes pour les vidéos de contexte de vie. Pour les pages produit, nous recommandons de garder les vidéos sous 30 secondes pour un impact maximal, car 75 % des spectateurs se décrochent après 30 secondes. Nous créons des versions adaptées aux différentes plateformes optimisées pour différents environnements (pages produit, réseaux sociaux, campagnes email).",
  },
  {
    question: "Combien coûtent les vidéos e-commerce ?",
    answer:
      "La production de vidéos e-commerce commence à 3 500 € par vidéo pour des présentations de produits de base, avec la plupart des projets entre 5 000 € et 12 000 € par vidéo selon la complexité du produit, les exigences de tournage et les besoins en animation. Les vidéos lifestyle haut de gamme avec des mannequins et des lieux coûtent généralement entre 10 000 € et 20 000 € par vidéo. Nous fournissons des devis détaillés sans frais cachés, afin que vous sachiez exactement ce qui est inclus, et proposons des tarifs par pack pour les campagnes multi-produits.",
  },
  {
    question: "Optimisez-vous les vidéos pour différentes plateformes e-commerce ?",
    answer:
      "Oui, nous nous spécialisons dans la production de vidéos e-commerce spécifiques à chaque plateforme. Nous créons des versions optimisées pour Amazon (avec des formats d'image spécifiques et sans musique pour certaines catégories), Shopify (avec une conception axée sur le mobile), les plateformes sociales (TikTok, Instagram, Facebook) et les campagnes par email. Chaque version est adaptée aux exigences techniques de la plateforme et aux habitudes des utilisateurs pour maximiser le potentiel de conversion.",
  },
  {
    question: "Comment les vidéos e-commerce peuvent-elles stimuler les ventes et réduire les retours ?",
    answer:
      "Les vidéos e-commerce stratégiques renforcent la confiance, ce qui entraîne une augmentation de 23 % des taux de conversion et une réduction des taux de retour de 31 % par rapport aux images statiques. Les vidéos qui présentent les produits dans des contextes réels fixent des attentes précises sur la taille, la texture, la fidélité des couleurs et la fonctionnalité, réduisant ainsi le regret d'achat. Pour les utilisateurs mobiles (79 % du trafic e-commerce), les vidéos communiquent les détails du produit plus efficacement dans un espace d'écran limité, générant une augmentation de 27 % de l'engagement. Nous intégrons des cadres de mesure directement dans votre stratégie vidéo pour suivre l'impact sur la conversion, la réduction des retours et le retour sur investissement.",
  },
]

export default function EcommerceVideoFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-24" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
              FAQ VIDÉOS E-COMMERCE
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos e-commerce ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {ecommerceVideoFAQItems.map((item, index) => (
            <div key={index} className="bg-[#F1F1F1] rounded-3xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <span className="text-[19px] font-medium text-black pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-black transition-transform duration-500 flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mx-4 mb-4 bg-[#111111] rounded-2xl px-8 py-6">
                  <p className="text-white leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}