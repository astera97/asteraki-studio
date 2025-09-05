// src/app/services/customer-stories/customer-story-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const customerStoryFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos témoignage client créez-vous ?",
    answer:
      "Nous réalisons des témoignages filmés sur site qui capturent l'essence des succès clients. Chaque réalisation met en valeur des résultats concrets, les défis relevés et l'impact réel de votre solution, sans artifice ni scénario préparé.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo témoignage client ?",
    answer:
      "La plupart des projets prennent 2 à 3 semaines, de la planification à la livraison finale. Cela inclut l'identification des bons clients, les entretiens approfondis, le tournage sur site et le montage respectueux des silences et émotions authentiques.",
  },
  {
    question: "Comment créez-vous des vidéos témoignage client authentiques ?",
    answer:
      "Notre approche consiste à capturer des moments réels en menant des entretiens sans téléprompteur. Nous privilégions les plans naturels où vos clients parlent avec leurs propres mots, mettant en lumière leurs succès de manière crédible et engageante.",
  },
  {
    question: "Pouvez-vous nous aider à identifier les bons clients à mettre en avant ?",
    answer:
      "Absolument. Nous travaillons avec vous pour sélectionner les clients qui représentent parfaitement votre cible, ont obtenu des résultats mesurables et peuvent partager leur expérience avec authenticité. Nous gérons toute la coordination avec eux.",
  },
  {
    question: "Combien coûte une réalisation de ces vidéos témoignage client ?",
    answer:
      "La production commence à 2 500 €, avec la plupart des projets entre 3 000 € et 5 500 € selon les déplacements nécessaires et la complexité. Nous fournissons des devis détaillés sans frais cachés, spécifiques à vos besoins en vidéo témoignage client.",
  },
  {
    question: "Comment gérez-vous les entretiens et autorisations ?",
    answer:
      "Notre équipe gère l'ensemble du processus : planification des entretiens, mise à l'aise des clients pendant le tournage, et obtention des formulaires de consentement. Nous assurons le respect des exigences légales pour l'utilisation commerciale de vos témoignages.",
  },
];

export default function CustomerStoryFAQSection() {
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
    mainEntity: customerStoryFAQItems.map((item) => ({
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
        id="customer-story-faq-schema"
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
                FAQ VIDÉOS TÉMOIGNAGE CLIENT
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services de vidéos témoignage client ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {customerStoryFAQItems.map((item, index) => (
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