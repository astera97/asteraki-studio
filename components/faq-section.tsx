"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "Quels types de vidéos Asteraki crée-t-elle ?",
    answer:
      "Asteraki se spécialise dans divers services de production vidéo à Paris, notamment des vidéos promotionnelles d'entreprise, des démonstrations de produits, des témoignages clients, des reportages d'événements, des vidéos de formation et des vidéos explicatives. Nous adaptons nos services aux besoins uniques de chaque client, en veillant à ce que votre message soit transmis efficacement.",
  },
  {
    question: "Qu'est-ce qu'une agence vidéo ?",
    answer:
      "Une agence vidéo est une société spécialisée dans la production de contenus audiovisuels. Elle accompagne les entreprises dans la création de vidéos promotionnelles, institutionnelles, publicitaires ou de formation.",
  },
  {
    question: "Quel type d'entreprise accompagnons-nous ?",
    answer:
      "Nous travaillons avec tous types d'entreprises : startups, PME, grands groupes, institutions publiques. Nos services s'adaptent à vos besoins et à votre budget.",
  },
  {
    question: "Sur quel secteur intervient notre agence ?",
    answer:
      "Notre agence intervient sur de nombreux secteurs : technologie, santé, finance, industrie, services, e-commerce, éducation et bien d'autres. Nous adaptons notre approche créative à chaque domaine d'activité.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section style={{ backgroundColor: "#111111" }} className="py-24 text-white">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
              FAQ
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Des questions ?
            <br/>
            Nous avons des réponses.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-3xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <span className="text-xl font-light text-white pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-white transition-transform duration-500 flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mx-4 mb-4 bg-gray-100 rounded-2xl px-8 py-6">
                  <p className="text-gray-700 text-lg leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}