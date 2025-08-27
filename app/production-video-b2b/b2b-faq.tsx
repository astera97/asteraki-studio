"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const b2bVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos B2B créez-vous ?",
    answer:
      "Nous nous spécialisons dans les campagnes de marque globales, les vidéos de stimulation des ventes, les programmes de formation B2B, les communications dirigeants, le contenu pour les relations investisseurs et les systèmes vidéo B2B personnalisés. Chaque vidéo est conçue pour répondre à des défis B2B spécifiques, notamment l'évolutivité mondiale, la cohérence de la marque, les exigences de conformité et la mesure du ROI à travers des structures organisationnelles complexes.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos B2B ?",
    answer:
      "La plupart des projets vidéo B2B prennent 4 à 6 semaines de la conception initiale à la livraison finale, les campagnes mondiales plus importantes prenant 8 à 12 semaines. Cela inclut les examens de gouvernance B2B, la planification de la localisation, les plongées techniques approfondies, le développement du scénario, le storyboard, la production et le montage. Nous prévoyons du temps pour plusieurs examens de parties prenantes et vérifications de conformité qui sont standard dans les environnements B2B.",
  },
  {
    question: "Comment garantissez-vous la cohérence de la marque à travers les marchés mondiaux ?",
    answer:
      "Nous utilisons notre système propriétaire BrandLock qui applique les directives de marque à chaque étape de la production. Cela inclut des modèles pré-approuvés, des vérifications automatiques de couleur et de typographie, des bibliothèques d'actifs centralisées et des flux de travail d'adaptation régionale qui maintiennent les éléments de base de la marque tout en permettant du contenu spécifique au marché. Nous fournissons également des rapports détaillés de conformité de marque avec chaque livrable.",
  },
  {
    question: "Quelle est votre approche de la conformité et de la gouvernance B2B ?",
    answer:
      "Notre processus de production B2B inclut plusieurs couches de vérifications de conformité : points de contrôle d'examen juridique, protections de confidentialité des données, normes d'accessibilité (WCAG 2.1) et flux de travail de gouvernance qui s'alignent sur les hiérarchies d'approbation B2B. Nous avons de l'expérience avec le RGPD, HIPAA et les exigences de conformité spécifiques à l'industrie, et nous documentons nos processus de conformité à des fins d'audit.",
  },
  {
    question: "Combien coûtent les vidéos B2B ?",
    answer:
      "La production de vidéos B2B commence à 8 000 € par vidéo pour le contenu de base de stimulation des ventes, avec la plupart des projets se situant entre 12 000 € et 25 000 € par vidéo selon la complexité, les exigences d'adaptation mondiale et la qualité de production. Les systèmes vidéo B2B (modèles, flux de travail, gouvernance) se situent généralement entre 50 000 € et 150 000 €. Nous fournissons des devis détaillés de niveau entreprise sans frais cachés, incluant des ventilations par région et langue.",
  },
  {
    question: "Travaillez-vous avec des piles technologiques marketing B2B ?",
    answer:
      "Oui, nous avons une vaste expérience de l'intégration avec les piles marketing B2B, notamment Salesforce Marketing Cloud, Adobe Experience Cloud, Marketo, HubSpot Enterprise et les plateformes CMS personnalisées. Nous fournissons des spécifications techniques, une documentation API et un support de mise en œuvre pour assurer une intégration transparente avec votre écosystème technologique existant.",
  },
  {
    question: "Comment mesurez-vous le ROI des programmes vidéo B2B ?",
    answer:
      "Nous intégrons la mesure du ROI directement dans votre stratégie vidéo en utilisant un cadre à trois niveaux : indicateurs d'engagement (vues, taux d'achèvement), impact commercial (productivité des ventes, taux de conversion) et renforcement de la marque (scores de cohérence, reconnaissance). Nous implémentons des codes de suivi, des paramètres UTM et des tableaux de bord analytiques personnalisés qui relient la performance vidéo à vos KPI commerciaux, fournissant des rapports trimestriels sur le ROI avec des informations exploitables.",
  },
]

export default function B2BVideoFAQSection() {
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
              FAQ VIDÉO B2B
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services vidéo B2B ?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {b2bVideoFAQItems.map((item, index) => (
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