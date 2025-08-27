"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const startupVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos créez-vous pour les startups ?",
    answer:
      "Nous nous spécialisons dans les vidéos de pitch, les vidéos de démonstration de produits, les vidéos explicatives, les témoignages clients, le contenu pour les réseaux sociaux et des vidéos personnalisées axées sur la croissance. Chaque vidéo est conçue pour répondre à des défis spécifiques aux startups et à leurs objectifs de croissance, que ce soit pour lever des fonds, acquérir des utilisateurs ou renforcer la notoriété de la marque.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos pour startups ?",
    answer:
      "La plupart des projets vidéo pour startups prennent 2 à 3 semaines, de la conception initiale à la livraison finale, avec des options accélérées disponibles pour les besoins urgents (aussi rapide que 5 à 7 jours). Cela inclut la session de stratégie, le développement du scénario, le storyboard, la production et le montage. Nous comprenons les délais des startups et pouvons accommoder des échéances serrées pour les levées de fonds ou les lancements de produits.",
  },
  {
    question: "Quel est votre modèle de tarification pour les startups ?",
    answer:
      "Nous proposons des modèles de tarification flexibles conçus spécifiquement pour les startups à différents stades : pré-seed (options en actions disponibles), seed (paiements basés sur les jalons) et Series A+ (tarification standard avec remises sur volume). La plupart des projets se situent entre 2 500 € et 7 500 € selon la complexité, avec des forfaits personnalisés qui s'adaptent à votre stade de croissance et à vos levées de fonds.",
  },
  {
    question: "Comment garantissez-vous que les vidéos génèrent de vrais résultats commerciaux pour les startups ?",
    answer:
      "Nous commençons par une session de stratégie de croissance pour identifier vos indicateurs clés (objectifs de levée de fonds, cibles d'acquisition d'utilisateurs, taux de conversion) et concevons des vidéos spécifiquement pour influencer ces indicateurs. Nous fournissons des KPI clairs, des cadres de mesure et une analyse post-lancement pour nous assurer que votre vidéo délivre des résultats commerciaux tangibles, pas seulement des vues.",
  },
  {
    question: "Pouvez-vous travailler avec nos ressources limitées et nos délais serrés ?",
    answer:
      "Absolument. Nous avons travaillé avec plus de 150 startups et comprenons les contraintes auxquelles vous faites face. Notre processus est rationalisé pour la rapidité sans sacrifier la qualité, et nous pouvons travailler avec les actifs dont vous disposez (même seulement un pitch deck ou un prototype). Nous sommes fiers d'être le partenaire de production vidéo qui comprend réellement les réalités des startups.",
  },
  {
    question: "Aidez-vous à la stratégie de diffusion ?",
    answer:
      "Oui, nous fournissons une stratégie de diffusion personnalisée avec chaque vidéo, incluant où la placer pour un impact maximum (présentations aux investisseurs, pages de destination, canaux sociaux), comment suivre les performances et des recommandations d'optimisation. Nous ne livrons pas seulement une vidéo - nous livrons un actif de croissance avec un chemin clair vers le ROI.",
  },
  {
    question: "Comment les vidéos pour startups peuvent-elles aider à lever des fonds ?",
    answer:
      "Les vidéos de pitch professionnelles aident les fondateurs à communiquer leur vision plus efficacement, à renforcer leur crédibilité et à se démarquer dans des marchés de financement saturés. Les startups utilisant la vidéo dans leur processus de levée de fonds obtiennent des rendez-vous 42 % plus rapidement et concluent leurs levées 27 % plus vite. Nous nous spécialisons dans la création de vidéos qui mettent en avant votre opportunité de marché, votre traction et votre équipe dans un récit convaincant axé sur les investisseurs.",
  },
]

export default function StartupVideoFAQSection() {
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
              FAQ VIDÉO STARTUP
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services vidéo pour startups ?
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {startupVideoFAQItems.map((item, index) => (
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