"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const explainerVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos explicatives créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos explicatives animées (2D, 3D, graphismes animés), les démonstrations de produits en prise de vue réelle, les animations sur tableau blanc et les vidéos explicatives multimédias. Chaque vidéo est conçue pour simplifier vos concepts complexes tout en mettant en valeur votre identité de marque.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo explicative ?",
    answer:
      "La plupart des vidéos explicatives prennent 3 à 4 semaines, de la conception initiale à la livraison finale. Cela inclut le développement du scénario, le storyboard, l'animation ou le tournage, et le montage. Nous pouvons adapter les délais pour les projets urgents.",
  },
  {
    question: "Comment simplifiez-vous les concepts complexes dans les vidéos explicatives ?",
    answer:
      "Nous utilisons des techniques de narration éprouvées, notamment la mise en scène problème-solution, les métaphores visuelles, la divulgation progressive de l'information et le rythme stratégique, pour transformer des idées complexes en récits clairs et engageants qui résonnent avec votre public cible.",
  },
  {
    question: "Quelle est la longueur idéale pour une vidéo explicative ?",
    answer:
      "La longueur idéale est généralement de 60 à 90 secondes pour la plupart des usages marketing. Pour des produits plus complexes ou des explications techniques, nous recommandons 2 à 3 minutes. Notre équipe vous aidera à déterminer la longueur optimale en fonction de vos objectifs spécifiques et de votre audience.",
  },
  {
    question: "Combien coûte une vidéo explicative ?",
    answer:
      "La production de vidéos explicatives commence à 2 500 € pour les vidéos animées de base, avec la plupart des projets entre 4 000 € et 8 500 € selon la complexité de l'animation, la durée et la qualité de production. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Gérez-vous l'écriture du scénario et le storyboard ?",
    answer:
      "Oui, notre équipe gère l'ensemble du processus créatif, y compris l'écriture du scénario, le storyboard, le casting de la voix off, l'animation/le tournage et le montage. Nous travaillons en étroite collaboration avec vous pour nous assurer que le message est aligné avec la voix de votre marque et vos objectifs marketing.",
  },
  {
    question: "Comment les vidéos explicatives peuvent-elles être utilisées à travers les canaux marketing ?",
    answer:
      "Les vidéos explicatives sont extrêmement polyvalentes et peuvent être utilisées sur la page d'accueil de votre site web, les pages produits, les campagnes par e-mail, les plateformes de réseaux sociaux, les présentations commerciales et les ressources d'assistance client. Nous livrons plusieurs versions optimisées pour différents canaux et tailles d'écran.",
  },
]

export default function ExplainerVideoFAQSection() {
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
              FAQ VIDÉOS EXPLICATIVES
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos explicatives ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {explainerVideoFAQItems.map((item, index) => (
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