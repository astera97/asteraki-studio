"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "En quoi Asteraki est-elle différente ?",
    answer:
      "Chez Asteraki, nous nous intégrons parfaitement à votre flux de travail — alignant nos objectifs et créant du contenu vidéo qui respecte votre charte, axé sur la performance et facile à exécuter. Nous ne sommes pas seulement un partenaire de production — nous devenons une extension de votre équipe, conçue pour augmenter votre production créative avec rapidité et précision."
  },
  {
    question: "À quoi ressemble votre processus de production vidéo ?",
    answer:
      "Notre agence de production vidéo simplifie l'ensemble du processus pour garantir des résultats de haute qualité. Tout commence par un brief créatif pour recueillir les propositions de valeur de votre produit, vos directives de marque et vos logos. En pré-production, nous développons des concepts, concevons le son, rédigeons les scénarios et trouvons les meilleurs talents pour votre projet. Pour l'animation, nous illustrons le storyboard complet avant de passer au motion design. La post-production est gérée par des monteurs ou des graphistes experts qui s'assurent que votre vidéo atteint les normes les plus élevées. Enfin, après votre approbation, la vidéo finale est livrée et prête à être téléchargée.",
  },
  {
    question: "Quels types de contenus vidéo produisez-vous ?",
    answer:
      "La plupart des agences de production vidéo se spécialisent soit dans la prise de vue en direct, soit dans l'animation, mais chez Asteraki, nos équipes d'experts collaborent pour fournir des vidéos de haute qualité en prise de vue réelle et en animation. Avec plus de 200 ans d'expérience combinée, nous produisons un large éventail de contenus, notamment des vidéos sociales, des vidéos explicatives, des démonstrations de produits, des campagnes marketing, des clips musicaux, des supports de formation, des reportages d'événements, des contenus d'entreprise, des histoires de marque, et bien plus encore.",
  },
  {
    question: "Où se trouve votre agence vidéo ?",
    answer:
      "Nous avons trois bureaux principaux à Paris, Toulouse et Lyon, soutenus par des équipes partout en France et dans 125 pays pour vous aider à produire des vidéos engageantes et de haute qualité. Avec une forte présence internationale, incluant des partenaires de production vidéo aux US, à Singapour et au Royaume-Uni, nous sommes prêts à créer des vidéos captivantes qui élèvent votre marque dans le monde entier.",
  },
  {
    question: "Quel type de vidéo convient à notre entreprise ?",
    answer:
      "Les campagnes de marketing vidéo se concentrent généralement sur l'un des trois objectifs : l'acquisition de clients, l'engagement ou la fidélisation. Nous prenons également en compte le public cible et les meilleurs canaux de distribution — que ce soit la télévision, Facebook, YouTube ou TikTok. Consulter une agence de production vidéo experte comme Asteraki peut vous aider à choisir le bon type de publicités vidéo et à obtenir des résultats de haute qualité.",
  },
  {
    question: "Qu'est-ce qui fait une bonne stratégie de marketing vidéo ?",
    answer:
      "Les nouveaux formats et canaux créent de passionnantes opportunités, et comme les marques, les marketeurs et les agences accordent de plus en plus d'importance au contenu de qualité, faire appel à une agence de production vidéo professionnelle est essentiel pour obtenir des résultats exceptionnels. Si vous souhaitez développer une stratégie de produit ou affiner une stratégie existante, notre équipe de stratégie vidéo est là pour vous aider — programmez un appel avec nous dès aujourd'hui.",
  },
  {
    question: "Combien coûte l'embauche d'une agence de production vidéo ?",
    answer:
      "Les vidéos simples commencent généralement autour de 2 500 €, tandis que les spots publicitaires haut de gamme ou les vidéos de présentation d'application peuvent dépasser 20 000 €. Les coûts de production de vidéos pour les réseaux sociaux varient considérablement en fonction de facteurs comme le type de vidéo, la durée, la complexité, des délais serrés et le style de production. Pour un devis personnalisé, réservez un appel de stratégie de 30 minutes où nous discuterons en détail de vos objectifs et de votre budget.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section style={{ backgroundColor: "#111111" }} className="py-24 text-white">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-white rounded-full text-sm font-medium text-white uppercase tracking-wider">
              FAQ
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Des questions ?
            <br/> Nous avons des réponses.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <span className="text-xl font-bold text-black pr-4">{item.question}</span>
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
                <div className="mx-4 mb-4 bg-gray-100 rounded-2xl px-8 py-6">
                  <div
                    className="text-gray-700 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}