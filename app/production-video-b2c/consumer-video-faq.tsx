"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const consumerVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos B2C créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos de storytelling de marque, les campagnes de lancement de produits, le contenu pour les réseaux sociaux, les collaborations avec des influenceurs, les témoignages de clients, les campagnes saisonnières et le contenu personnalisé pour les marques B2C. Chaque vidéo est conçue pour répondre à des défis marketing spécifiques aux consommateurs tout en établissant des connexions émotionnelles et en stimulant l'engagement avec votre public cible.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos B2C ?",
    answer:
      "La plupart des projets vidéo B2C prennent 3 à 5 semaines de la conception initiale à la livraison finale. Cela inclut le développement créatif, la rédaction du scénario, le storyboard, la production et le montage. Pour les campagnes sensibles au timing (saisons festives, lancements de produits), nous prévoyons des délais accélérés avec des ressources dédiées. Nous pouvons livrer des vidéos de haute qualité en seulement 2 semaines pour les campagnes urgentes avec des ressources supplémentaires.",
  },
  {
    question: "Comment créez-vous des vidéos B2C émotionnellement résonnantes ?",
    answer:
      "Notre processus commence par une recherche approfondie sur le consommateur pour comprendre les moteurs émotionnels, les valeurs et les aspirations de votre public cible. Nous concevons ensuite des récits qui se connectent authentiquement à ces points de contact émotionnels tout en restant fidèles à l'identité de votre marque. Chaque décision créative - de la sélection musicale au style visuel - est prise en ayant à l'esprit l'impact émotionnel. Nous intégrons également des tests avec des segments du public cible avant la livraison finale pour nous assurer que la résonance émotionnelle visée est effectivement atteinte.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos B2C ?",
    answer:
      "La longueur idéale varie selon la plateforme et l'objectif : 15 à 30 secondes pour les publicités sur les réseaux sociaux (Instagram, TikTok), 30 à 60 secondes pour les pré-roll YouTube, 60 à 90 secondes pour le storytelling de marque, et 90 à 120 secondes pour les présentations de produits. Pour les plateformes sociales, nous créons des versions spécifiques à chaque environnement (vertical pour TikTok/Reels, carré pour Facebook, etc.). Notre équipe déterminera la longueur optimale en fonction de vos objectifs de campagne spécifiques, de la plateforme cible et des données de comportement de votre audience.",
  },
  {
    question: "Combien coûtent les vidéos B2C ?",
    answer:
      "La production de vidéos B2C commence à 5 000 € par vidéo pour le contenu social de base, avec la plupart des projets se situant entre 8 000 € et 15 000 € par vidéo selon la complexité créative, la qualité de production et les exigences de talent. Les campagnes de marque haut de gamme avec des talents célèbres ou une production complexe se situent généralement entre 20 000 € et 50 000 €+ par vidéo. Nous fournissons des devis détaillés sans frais cachés, afin que vous sachiez exactement ce qui est inclus, et proposons des tarifs par forfait pour les campagnes multi-vidéos.",
  },
  {
    question: "Gérez-vous l'optimisation pour les réseaux sociaux ?",
    answer:
      "Oui, nous nous spécialisons dans la production vidéo pensée pour les réseaux sociaux. Chaque vidéo que nous créons est optimisée pour la plateforme spécifique sur laquelle elle apparaîtra, avec plusieurs versions pour différents environnements (son activé/son coupé, vertical/horizontal, formats spécifiques aux plateformes). Nous fournissons également les meilleures pratiques pour les réseaux sociaux, des recommandations de légendes et des cadres de suivi des performances pour maximiser votre ROI sur les campagnes vidéo sociales.",
  },
  {
    question: "Comment les vidéos B2C peuvent-elles stimuler les ventes et la fidélité à la marque ?",
    answer:
      "Les vidéos B2C stratégiques établissent des connexions émotionnelles qui influencent 70 % des décisions d'achat. Les vidéos qui résonnent émotionnellement avec les spectateurs créent une meilleure mémorisation de la marque (42 % de plus), augmentent le partage social (39 % de partages en plus) et stimulent les taux de conversion (28 % de plus) comparé au contenu marketing standard. Pour la fidélité à la marque, les clients qui s'engagent avec des vidéos de marque émotionnellement résonnantes sont 33 % plus susceptibles de devenir des clients récurrents et des défenseurs de la marque. Nous intégrons des cadres de mesure directement dans votre stratégie vidéo pour suivre ces indicateurs et démontrer un ROI clair.",
  },
]

export default function ConsumerVideoFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-24" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
              FAQ VIDÉO B2C
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services vidéo B2C ?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {consumerVideoFAQItems.map((item, index) => (
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