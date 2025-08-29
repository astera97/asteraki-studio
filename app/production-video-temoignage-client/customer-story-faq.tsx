"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const customerStoryFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos témoignages clients créez-vous ?",
    answer:
      "Nous nous spécialisons dans les témoignages clients authentiques, les études de cas vidéo, les témoignages de clients et les récits de parcours utilisateurs. Chaque vidéo met en valeur des résultats concrets, les défis relevés et l'impact réel de votre produit ou service sur la vie ou les entreprises de vos clients.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo témoignage client ?",
    answer:
      "La plupart des vidéos témoignages clients prennent 2 à 3 semaines, de la planification initiale à la livraison finale. Cela inclut l'identification des bons clients, la réalisation d'entretiens, le tournage sur site et la création d'un récit percutant. Nous pouvons adapter les délais en fonction de vos besoins spécifiques.",
  },
  {
    question: "Comment garantissez-vous l'authenticité des vidéos témoignages clients ?",
    answer:
      "Nous nous concentrons sur des moments réels et non scénarisés en menant des entretiens approfondis et en capturant des plans naturels. Notre approche met en valeur des émotions authentiques et des résultats spécifiques, en évitant un contenu trop poli ou commercial. Nous laissons vos clients raconter leurs histoires avec leurs propres mots.",
  },
  {
    question: "Pouvez-vous nous aider à identifier les bons clients à mettre en avant ?",
    answer:
      "Absolument. Nous travaillerons avec vous pour identifier les clients qui ont obtenu des résultats exceptionnels, représentent votre public cible et peuvent articuler efficacement leur expérience. Nous nous occupons de l'approche et de la coordination, rendant le processus fluide pour vous.",
  },
  {
    question: "Combien coûte une vidéo témoignage client ?",
    answer:
      "La production de vidéos témoignages clients commence à 2 500 €, avec la plupart des projets entre 3 000 € et 5 500 € selon les exigences de déplacement, le nombre de lieux de tournage et la complexité de la production. Nous fournissons des devis détaillés sans frais cachés, pour que vous sachiez exactement ce qui est inclus.",
  },
  {
    question: "Gérez-vous les entretiens clients et les autorisations ?",
    answer:
      "Oui, notre équipe gère l'ensemble du processus, de la planification des entretiens à l'obtention des formulaires de consentement signés. Nous mettons les clients à l'aise pendant le tournage et nous assurons que toutes les exigences légales sont respectées pour l'utilisation commerciale de leur témoignage.",
  },
]

export default function CustomerStoryFAQSection() {
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
              FAQ VIDÉOS TÉMOIGNAGES CLIENTS
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de témoignages clients ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {customerStoryFAQItems.map((item, index) => (
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
