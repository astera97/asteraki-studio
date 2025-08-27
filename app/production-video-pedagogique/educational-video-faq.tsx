"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const educationalVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos pédagogiques créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos de formation professionnelle, le contenu de cours académiques, les tutoriels logiciels, les formations de conformité, les programmes d'intégration, la préparation aux certifications et les modules d'apprentissage personnalisés. Chaque vidéo est conçue pour appliquer des principes d'apprentissage basés sur des preuves tout en répondant aux objectifs d'apprentissage spécifiques et aux besoins du public.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos pédagogiques ?",
    answer:
      "La plupart des projets de vidéos pédagogiques prennent 3 à 4 semaines, de la conception initiale à la livraison finale. Cela inclut la définition des objectifs d'apprentissage, le développement du scénario, le storyboard, la production et le montage. Pour le développement de cours complets avec plusieurs modules, les délais varient de 6 à 10 semaines selon l'ampleur.",
  },
  {
    question: "Comment garantissez-vous l'efficacité des vidéos pédagogiques pour l'apprentissage ?",
    answer:
      "Nous appliquons des principes d'apprentissage basés sur des preuves, notamment la théorie de la charge cognitive, le codage dual, la répétition espacée et la pratique de rappel. Notre processus inclut la définition d'objectifs d'apprentissage clairs, l'intégration de vérifications des connaissances, l'utilisation de l'intégration visuel-verbal et la structuration du contenu pour une rétention optimale. Nous réalisons également des tests avec les apprenants pour valider l'efficacité avant la livraison finale.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos pédagogiques ?",
    answer:
      "Les recherches montrent que les vidéos de 6 à 12 minutes maximisent l'engagement et la rétention dans la plupart des contextes d'apprentissage. Pour les sujets complexes, nous divisons le contenu en segments de micro-apprentissage de 3 à 6 minutes. Notre équipe déterminera la longueur optimale en fonction de la complexité du contenu, des schémas d'attention des apprenants et des objectifs d'apprentissage spécifiques.",
  },
  {
    question: "Combien coûtent les vidéos pédagogiques ?",
    answer:
      "La production de vidéos pédagogiques commence à 3 000 € par vidéo pour les projets de base, avec la plupart des projets entre 5 000 € et 10 000 € par vidéo selon la complexité, les besoins en animation et la qualité de production. Le développement de cours complets (5 à 10 vidéos) coûte généralement entre 25 000 € et 75 000 €. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Travaillez-vous avec des experts du domaine ?",
    answer:
      "Oui, notre processus inclut une collaboration structurée avec des experts du domaine pour garantir l'exactitude et la pertinence du contenu. Nous fournissons des guides d'entretien avec les experts, facilitons les sessions de transfert de connaissances et intégrons les retours des experts tout au long du processus de développement pour créer un contenu à la fois pédagogiquement pertinent et techniquement exact.",
  },
  {
    question: "Comment les vidéos pédagogiques peuvent-elles être intégrées dans les systèmes d'apprentissage existants ?",
    answer:
      "Nos vidéos pédagogiques sont livrées dans plusieurs formats optimisés pour l'intégration avec tous les principaux Systèmes de Gestion de l'Apprentissage (LMS), y compris la conformité SCORM et xAPI. Nous fournissons des fichiers vidéo, des transcriptions, des sous-titres, des vérifications des connaissances et des documents d'accompagnement qui peuvent être intégrés de manière transparente dans votre écosystème de formation existant.",
  },
]

export default function EducationalVideoFAQSection() {
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
              FAQ VIDÉOS PÉDAGOGIQUES
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
            Des questions sur nos <br />
            services de vidéos pédagogiques ?
          </h2>
        </div>

        {/* Questions fréquentes */}
        <div className="max-w-4xl mx-auto space-y-4">
          {educationalVideoFAQItems.map((item, index) => (
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