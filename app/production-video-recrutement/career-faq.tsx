"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const careerVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos de carrière créez-vous ?",
    answer:
      "Nous nous spécialisons dans des vidéos authentiques sur la culture de l'entreprise, des témoignages d'employés, des reportages sur une journée type et des mises en valeur des valeurs de l'entreprise. Chaque vidéo met en lumière votre environnement de travail authentique, la dynamique d'équipe et la culture de votre entreprise pour attirer les bons talents.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo de carrière ?",
    answer:
      "La plupart des vidéos de carrière prennent 2 à 3 semaines, de la planification initiale à la livraison finale. Cela inclut l'identification des employés à mettre en avant, la réalisation d'entretiens, le tournage sur site et la création d'un récit percutant. Nous pouvons adapter les délais en fonction de vos besoins spécifiques.",
  },
  {
    question: "Comment garantissez-vous l'authenticité des vidéos de carrière ?",
    answer:
      "Nous nous concentrons sur des moments réels et non scénarisés en menant des entretiens approfondis et en capturant des images naturelles du lieu de travail. Notre approche met en valeur les expériences authentiques des employés et la culture unique de votre entreprise, en évitant tout contenu trop poli ou commercial.",
  },
  {
    question: "Pouvez-vous nous aider à identifier les employés à mettre en avant ?",
    answer:
      "Absolument. Nous travaillerons avec vous pour identifier les employés qui représentent votre culture cible, montrent une diversité de rôles et peuvent exprimer efficacement leur expérience. Nous nous occupons de l'approche et de la coordination, rendant le processus fluide pour vous.",
  },
  {
    question: "Combien coûte une vidéo de carrière ?",
    answer:
      "La production de vidéos de carrière commence à 2 500 €, avec la plupart des projets entre 3 500 € et 7 500 € selon les exigences de déplacement, le nombre d'employés mis en avant et la complexité de la production. Nous fournissons des devis détaillés sans frais cachés, pour que vous sachiez exactement ce qui est inclus.",
  },
  {
    question: "Gérez-vous les entretiens et les autorisations des employés ?",
    answer:
      "Oui, notre équipe gère l'ensemble du processus, de la planification des entretiens à l'obtention des formulaires de consentement signés. Nous mettons les employés à l'aise pendant le tournage et nous assurons que toutes les exigences légales sont respectées pour l'utilisation commerciale de leurs témoignages.",
  },
  {
    question: "Comment les vidéos de carrière peuvent-elles être utilisées dans le recrutement ?",
    answer:
      "Ces puissantes vidéos peuvent être utilisées sur votre page carrière, dans les offres d'emploi, lors de salons de recrutement, dans des campagnes par e-mail et sur les réseaux sociaux. Nous livrons plusieurs versions optimisées pour différents canaux, y compris des histoires complètes, des extraits de 60 secondes et des vignettes pour les réseaux sociaux.",
  },
]

export default function CareerVideoFAQSection() {
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
              FAQ VIDÉOS DE CARRIÈRE
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos de carrière ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {careerVideoFAQItems.map((item, index) => (
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