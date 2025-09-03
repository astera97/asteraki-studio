// src/app/services/event-video-production/event-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const eventVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos d'événements créez-vous ?",
    answer:
      "Nous nous spécialisons dans la couverture de conférences, les vidéos de salons professionnels, les temps forts d'événements d'entreprise, les enregistrements d'intervenants principaux et le contenu personnalisé pour événements. Chaque vidéo est conçue pour capturer l'énergie et les moments clés de votre événement tout en mettant en valeur votre marque.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo d'événement ?",
    answer:
      "Pour les réels de temps forts, nous pouvons livrer dans les 24 à 48 heures suivant votre événement. Les enregistrements de sessions complètes sont généralement livrés dans un délai de 3 à 5 jours ouvrables. Nous proposons également des réels du même jour pour les besoins urgents de réseaux sociaux.",
  },
  {
    question: "Combien de caméras utilisez-vous généralement pour la couverture d'un événement ?",
    answer:
      "Notre forfait standard comprend 3 angles de caméra pour capturer des plans larges, des gros plans sur l'orateur et les réactions du public. Pour les événements plus importants, nous passons à 5 à 8 caméras afin d'assurer une couverture complète de tous les points de vue.",
  },
  {
    question: "Gérez-vous l'enregistrement audio pour les événements ?",
    answer:
      "Oui, nous utilisons des microphones sans fil professionnels pour les intervenants, des micros pour le public lors des sessions de questions-réponses et un enregistrement audio ambiant pour capturer l'atmosphère complète de votre événement.",
  },
  {
    question: "Combien coûte la production vidéo d'événements ?",
    answer:
      "La production vidéo d'événements commence à 1 500 € pour une configuration à une seule caméra pour les petits événements. La plupart des événements d'entreprise se situent entre 3 500 € et 8 500 € selon la durée, le nombre de caméras et les exigences de post-production. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Proposez-vous des services de diffusion en direct ?",
    answer:
      "Oui, nous proposons des services de diffusion en direct professionnels avec plusieurs angles de caméra, intégration de graphismes et diffusion fiable sur des plateformes comme YouTube, Vimeo ou des plateformes d'événements personnalisées.",
  },
  {
    question: "Comment les vidéos d'événements peuvent-elles être utilisées après l'événement ?",
    answer:
      "Les vidéos d'événements peuvent être utilisées pour : la promotion sur les réseaux sociaux, les campagnes de marketing par e-mail, les présentations commerciales, la formation interne, le contenu de site web et comme réels de temps forts pour les événements futurs. Nous livrons plusieurs versions optimisées pour différents canaux.",
  },
];

export default function EventVideoFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // ✅ Generate structured data for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eventVideoFAQItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* ✅ Inject JSON-LD structured data */}
      <Script
        id="event-video-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      {/* FAQ UI */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-[1300px] mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
                FAQ VIDÉOS D'ÉVÉNEMENTS
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services de vidéos d'événements ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {eventVideoFAQItems.map((item, index) => (
              <div key={index} className="bg-[#F1F1F1] rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                >
                  <span className="text-[19px] font-medium text-black pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-black transition-transform duration-500 flex-shrink-0 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
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
    </>
  );
}