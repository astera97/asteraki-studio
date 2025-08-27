// src/app/services/app-video-production/app-video-faq.tsx
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const appVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos d'applications créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos d'intégration d'applications, les visites guidées des fonctionnalités, les tutoriels utilisateurs, les démonstrations de produits et les guides de dépannage. Chaque vidéo est conçue pour guider les utilisateurs à travers votre application, démontrer les flux de travail clés et les aider à atteindre leurs objectifs plus rapidement.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo d'application ?",
    answer:
      "La plupart des vidéos d'applications prennent 1 à 2 semaines, de la planification initiale à la livraison finale. Cela inclut la compréhension de vos flux utilisateur, la rédaction du contenu, l'enregistrement de l'écran, l'ajout d'animations et de voix off, et le montage final. Nous pouvons adapter les délais pour les lancements de produits urgents.",
  },
  {
    question: "Comment garantissez-vous que les vidéos d'applications améliorent l'engagement des utilisateurs ?",
    answer:
      "Nous nous concentrons sur la création de vidéos claires et concises qui répondent à des points de douleur spécifiques des utilisateurs. Notre approche inclut la présentation de flux de travail réels, l'utilisation d'un langage simple, la mise en valeur rapide de la valeur ajoutée et l'optimisation de la durée des vidéos pour maintenir l'attention. Nous veillons également à la cohérence visuelle avec l'interface utilisateur et la marque de votre application.",
  },
  {
    question: "Pouvez-vous nous aider avec la stratégie vidéo au-delà de la production ?",
    answer:
      "Oui, nous fournissons une stratégie vidéo d'application complète, notamment l'identification des moments clés d'intégration, la détermination du placement optimal au sein de votre application, la création de séries vidéo pour un apprentissage progressif et le développement d'analyses pour mesurer l'efficacité des vidéos et l'engagement des utilisateurs.",
  },
  {
    question: "Combien coûte une vidéo d'application ?",
    answer:
      "La production de vidéos d'applications commence à 2 500 €, avec la plupart des projets entre 3 500 € et 7 000 € selon la complexité, la durée et le nombre de fonctionnalités couvertes. Les vidéos interactives ou animées peuvent avoir un prix plus élevé. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Créez-vous des vidéos pour les applications mobiles et web ?",
    answer:
      "Oui, nous créons des vidéos optimisées pour les applications mobiles et web. Nous comprenons les différents comportements des utilisateurs et les contraintes d'écran propres à chaque plateforme et adaptons notre approche en conséquence, qu'il s'agisse de montrer des gestes tactiles pour le mobile ou des raccourcis clavier pour les applications de bureau.",
  },
  {
    question: "Comment les vidéos d'applications peuvent-elles être utilisées tout au long du parcours client ?",
    answer:
      "Vos vidéos d'applications constituent des actifs éducatifs essentiels à chaque étape. Elles peuvent être utilisées pour l'intégration des nouveaux utilisateurs, la découverte de fonctionnalités pour les utilisateurs existants, l'assistance client pour réduire les tickets, les démonstrations commerciales et comme partie intégrante de l'aide intégrée à l'application. Nous livrons des vidéos dans plusieurs formats et durées optimisés pour différents cas d'utilisation.",
  },
]

export default function AppVideoFAQSection() {
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
              FAQ VIDÉOS D'APPLICATIONS
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos d'applications ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {appVideoFAQItems.map((item, index) => (
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