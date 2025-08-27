"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const brandVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos de marque créez-vous ?",
    answer:
      "Nous créons un large éventail de vidéos de marque, notamment des vidéos d'identité de marque, des démonstrations de produits, des vidéos explicatives, des témoignages clients, du contenu pour les réseaux sociaux, du reportage d'événements et des vidéos d'entreprise. Chaque vidéo est adaptée à votre identité de marque spécifique et à vos objectifs marketing.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo de marque ?",
    answer:
      "Le délai varie en fonction de la complexité du projet, mais la plupart des vidéos de marque prennent 2 à 4 semaines, de la conception à la livraison. Cela inclut la stratégie, le scénario, la production et la post-production. Nous pouvons accélérer les délais pour les projets urgents tout en maintenant la qualité.",
  },
  {
    question: "Qu'est-ce qui distingue vos vidéos de marque de celles des concurrents ?",
    answer:
      "Notre approche combine le récit créatif avec une stratégie basée sur les données. Nous ne créons pas seulement de jolies vidéos - nous concevons des actifs conçus pour convertir. Notre processus inclut la recherche sur le public, des KPI clairs et des stratégies de réutilisation pour maximiser le ROI sur tous les canaux marketing.",
  },
  {
    question: "Combien de révisions sont incluses dans votre processus ?",
    answer:
      "Nous incluons 2 tours de révisions à chaque étape de la production (concept, storyboard, montage préliminaire, montage final) pour nous assurer que vous êtes complètement satisfait. Notre approche collaborative signifie que nous n'avons rarement besoin d'utiliser tous les tours de révision car nous nous alignons à chaque étape du processus.",
  },
  {
    question: "Combien coûte une vidéo de marque ?",
    answer:
      "Le prix d'une vidéo de marque professionnelle commence à partir de 3 000 €, la plupart des projets se situant entre 5 000 € et 15 000 € selon la complexité et les exigences spécifiques. Nous fournissons des devis transparents et détaillés, sans frais cachés, afin que vous sachiez exactement ce que vous payez à chaque étape de la production.",
  },
]

export default function BrandVideoFAQSection() {
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
              FAQ VIDÉOS DE MARQUE
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos de marque ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {brandVideoFAQItems.map((item, index) => (
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