"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const motionGraphicsFAQItems: FAQItem[] = [
  {
    question: "Quels types de graphismes animés créez-vous ?",
    answer:
      "Nous nous spécialisons dans la typographie animée, les animations de visualisation de données, les animations de logos, le motion design d'identité de marque, les graphismes animés explicatifs, les animations pour les réseaux sociaux et les graphismes animés personnalisés adaptés à vos besoins spécifiques. Chaque projet est conçu pour transformer des concepts statiques en histoires visuelles dynamiques qui s'alignent sur votre identité de marque.",
  },
  {
    question: "Combien de temps faut-il pour produire des graphismes animés ?",
    answer:
      "La plupart des projets de graphismes animés prennent 3 à 4 semaines, de la conception initiale à la livraison finale. Cela inclut le développement du script, le storyboard, l'animation et le montage. Nous pouvons adapter les délais pour les projets urgents avec des ressources supplémentaires.",
  },
  {
    question: "Quelle est la différence entre les graphismes animés et l'animation ?",
    answer:
      "Les graphismes animés se concentrent sur l'animation d'éléments de design graphique comme le texte, les logos et les illustrations pour communiquer des informations, tandis que l'animation traditionnelle implique souvent le mouvement de personnages et la narration. Les graphismes animés sont idéaux pour expliquer des concepts, présenter des données et enrichir l'identité de marque grâce au mouvement.",
  },
  {
    question: "Quelle est la longueur idéale pour les graphismes animés ?",
    answer:
      "La longueur idéale dépend de l'objectif : 15 à 30 secondes pour les réseaux sociaux, 60 à 90 secondes pour les vidéos explicatives marketing, et 2 à 3 minutes pour les présentations détaillées. Notre équipe vous aidera à déterminer la longueur optimale en fonction de vos objectifs spécifiques et de votre audience.",
  },
  {
    question: "Combien coûtent les graphismes animés ?",
    answer:
      "La production de graphismes animés commence à 3 000 € pour les projets de base, avec la plupart des projets entre 5 000 € et 12 000 € selon la complexité, la durée et la qualité de production. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Travaillez-vous avec des éléments de marque existants ?",
    answer:
      "Oui, nous nous intégrons parfaitement à vos directives de marque existantes, vos palettes de couleurs, votre typographie et vos éléments visuels. Si vous n'avez pas d'éléments de marque établis, nous pouvons créer un langage de motion design cohérent qui s'aligne sur votre identité de marque.",
  },
  {
    question: "Comment les graphismes animés peuvent-ils être utilisés à travers les canaux marketing ?",
    answer:
      "Les graphismes animés sont extrêmement polyvalents et peuvent être utilisés sur votre site web, les plateformes de réseaux sociaux, les campagnes par e-mail, les présentations, les salons professionnels, l'affichage numérique, et plus encore. Nous livrons plusieurs versions optimisées pour différents canaux et tailles d'écran, y compris les formats carré, vertical et horizontal.",
  },
]

export default function MotionGraphicsFAQSection() {
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
              FAQ GRAPHISMES ANIMÉS
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de graphismes animés ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {motionGraphicsFAQItems.map((item, index) => (
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