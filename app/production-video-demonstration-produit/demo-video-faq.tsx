"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const demoVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos de démonstration créez-vous ?",
    answer:
      "Nous nous spécialisons dans les démos de fonctionnalités de produits, les présentations d'interfaces logicielles, les démonstrations d'applications mobiles, les vitrines de plateformes SaaS et les démos interactives personnalisées. Chaque vidéo est conçue pour mettre en valeur les fonctionnalités clés de votre produit tout en présentant l'expérience et la proposition de valeur utilisateur.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo de démonstration ?",
    answer:
      "La plupart des vidéos de démonstration prennent 2 à 3 semaines, de la conception initiale à la livraison finale. Cela inclut le développement du scénario, le storyboard, l'enregistrement d'écran ou le tournage, et le montage. Nous pouvons adapter les délais pour les lancements de produits urgents.",
  },
  {
    question: "Comment déterminez-vous quelles fonctionnalités mettre en avant dans une vidéo de démonstration ?",
    answer:
      "Nous travaillons avec vous pour identifier les points de douleur de votre public cible et hiérarchiser les fonctionnalités qui résolvent ces problèmes. Notre approche se concentre sur la mise en valeur des avantages plutôt que sur les fonctionnalités seules, en soulignant comment votre produit facilite la vie ou rend vos utilisateurs plus productifs.",
  },
  {
    question: "Quelle est la longueur idéale pour une vidéo de démonstration de produit ?",
    answer:
      "La longueur idéale est généralement de 60 à 90 secondes pour la plupart des usages marketing. Pour les produits complexes ou les explications de fonctionnalités détaillées, nous recommandons 2 à 3 minutes. Notre équipe vous aidera à déterminer la longueur optimale en fonction de vos objectifs spécifiques et de votre audience.",
  },
  {
    question: "Combien coûte une vidéo de démonstration ?",
    answer:
      "La production de vidéos de démonstration commence à 2 500 € pour les enregistrements d'écran de base, avec la plupart des projets entre 4 000 € et 8 000 € selon la complexité, les besoins en animation et la qualité de production. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Gérez-vous l'enregistrement d'écran et l'animation de l'interface utilisateur ?",
    answer:
      "Oui, notre équipe gère tous les aspects techniques, notamment l'enregistrement d'écran de haute qualité, l'animation de l'interface utilisateur, la production de voix off et le montage. Nous utilisons des outils professionnels pour garantir des visuels nets et des transitions fluides qui présentent votre produit sous son meilleur jour.",
  },
  {
    question: "Comment les vidéos de démonstration peuvent-elles être utilisées à travers les canaux marketing ?",
    answer:
      "Les vidéos de démonstration sont extrêmement polyvalentes et peuvent être utilisées sur la page d'accueil de votre site web, les pages produit, les campagnes par e-mail, les plateformes de réseaux sociaux, les présentations commerciales et les parcours d'intégration client. Nous livrons plusieurs versions optimisées pour différents canaux et tailles d'écran.",
  },
]

export default function DemoVideoFAQSection() {
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
              FAQ VIDÉOS DE DÉMONSTRATION
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos de démonstration ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {demoVideoFAQItems.map((item, index) => (
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