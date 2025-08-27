"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const financeVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos financières créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos explicatives de gestion de patrimoine, les démonstrations de produits d'investissement, les consultations de planification financière, les formations sur la conformité réglementaire, les séquences d'intégration des clients et le contenu personnalisé pour les institutions financières. Chaque vidéo est conçue pour répondre à des défis spécifiques de communication financière tout en maintenant une stricte conformité réglementaire avec les réglementations SEC, FINRA, GDPR et autres normes applicables.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos financières ?",
    answer:
      "La plupart des projets vidéo financiers prennent 3 à 5 semaines de la conception initiale à la livraison finale. Cela inclut les points de contrôle de révision réglementaire, les consultations de conformité, le développement du scénario, le storyboard, la production et le montage. Pour le contenu hautement réglementé (produits d'investissement, planification de la retraite), nous prévoyons du temps supplémentaire pour les révisions juridiques et de conformité. Nous pouvons accommoder des délais plus serrés pour les besoins urgents avec des ressources supplémentaires.",
  },
  {
    question: "Comment garantissez-vous la conformité réglementaire dans les vidéos financières ?",
    answer:
      "Notre processus commence par une plongée réglementaire approfondie pour identifier toutes les exigences applicables à votre contenu et à votre public spécifiques. Nous intégrons ensuite les exigences de conformité dans le processus créatif dès les premières étapes, avec des points de contrôle de conformité dédiés tout au long de la production. Chaque vidéo subit un examen par nos spécialistes internes de la conformité avant la livraison, et nous fournissons une documentation détaillée de conformité avec chaque projet. Notre équipe comprend d'anciens régulateurs financiers et des agents de conformité qui comprennent les nuances des réglementations de marketing financier.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos financières ?",
    answer:
      "La longueur idéale varie selon l'objectif : 90 à 120 secondes pour les aperçus de produits (avec les avertissements obligatoires), 2 à 3 minutes pour les explications d'investissement, et 3 à 5 minutes pour les consultations de planification financière complètes. Pour la formation à la conformité, nous créons souvent du contenu modulaire qui peut être utilisé comme éléments autonomes ou combinés pour des sessions plus longues. Notre équipe déterminera la longueur optimale en fonction de votre contenu financier spécifique, des exigences réglementaires et des besoins de votre public.",
  },
  {
    question: "Combien coûtent les vidéos financières ?",
    answer:
      "La production de vidéos financières commence à 5 000 € par vidéo pour le contenu explicatif de base, avec la plupart des projets se situant entre 7 500 € et 15 000 € par vidéo selon la complexité réglementaire, les exigences d'animation et la qualité de production. Le contenu hautement réglementé (produits d'investissement, planification de la retraite) se situe généralement entre 12 000 € et 25 000 € par vidéo en raison des exigences supplémentaires de révision de conformité. Nous fournissons des devis détaillés sans frais cachés, afin que vous sachiez exactement ce qui est inclus.",
  },
  {
    question: "Travaillez-vous avec des départements de conformité financière ?",
    answer:
      "Oui, nous avons une vaste expérience de travail direct avec des départements de conformité financière. Nous comprenons leurs préoccupations et parlons leur langage, ce qui réduit considérablement les cycles de révision et les révisions. Nous fournissons une documentation conforme, un suivi de versions et des justificatifs clairs pour les décisions créatives afin de rationaliser le processus d'approbation. De nombreux clients signalent des délais de révision de conformité 33 % plus rapides après avoir mis en œuvre notre processus de production spécifique à la finance.",
  },
  {
    question: "Comment les vidéos financières peuvent-elles aider à l'acquisition et à la fidélisation des clients ?",
    answer:
      "Les vidéos financières stratégiques renforcent la confiance, expliquent clairement les produits complexes et font preuve d'expertise - autant de facteurs critiques dans la prise de décision financière. Les clients qui s'engagent avec des vidéos explicatives financières conformes sont 27 % plus susceptibles de devenir des prospects qualifiés et démontrent une compréhension 28 % meilleure des caractéristiques et des risques des produits. Pour la fidélisation, le contenu éducatif régulier maintient les clients engagés et informés, réduisant le turn-over et augmentant la part de portefeuille. Nous intégrons des cadres de mesure directement dans votre stratégie vidéo pour suivre ces indicateurs.",
  },
]

export default function FinanceVideoFAQSection() {
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
              FAQ VIDÉO FINANCE
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services vidéo de finance ?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {financeVideoFAQItems.map((item, index) => (
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