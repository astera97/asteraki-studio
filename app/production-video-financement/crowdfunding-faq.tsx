// src/app/services/crowdfunding-video-production/crowdfunding-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const crowdfundingVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos de financement participatif créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos de campagne Kickstarter et Indiegogo authentiques, les vidéos de démonstration de produits, les vidéos d'histoire du créateur et les vidéos de présentation des récompenses. Chaque vidéo est conçue pour raconter votre histoire captivante, présenter votre produit et motiver les contributeurs à soutenir votre projet.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo de financement participatif ?",
    answer:
      "La plupart des vidéos de financement participatif prennent 2 à 3 semaines, de la planification initiale à la livraison finale. Cela inclut le développement de l'histoire, le tournage de votre produit et de votre équipe, et la création d'un récit percutant. Nous pouvons travailler avec des délais serrés pour les lancements de campagne à venir.",
  },
  {
    question: "Comment garantissez-vous un taux de conversion élevé pour les vidéos de financement participatif ?",
    answer:
      "Nous appliquons des principes de financement participatif éprouvés, notamment un récit émotionnel fort, une structuration claire problème-solution, une présentation authentique du créateur, des démonstrations de produits percutantes et des appels à l'action stratégiques qui incitent les spectateurs à soutenir votre projet.",
  },
  {
    question: "Pouvez-vous aider avec la stratégie de financement participatif au-delà de la vidéo ?",
    answer:
      "Oui, nous fournissons un accompagnement complet pour le financement participatif, notamment l'optimisation des pages de campagne, la stratégie des paliers de récompenses, les recommandations de calendrier de lancement et les tactiques d'engagement des contributeurs pour maximiser le succès de votre financement.",
  },
  {
    question: "Combien coûte une vidéo de financement participatif ?",
    answer:
      "La production de vidéos de financement participatif commence à 3 500 €, avec la plupart des projets entre 5 000 € et 10 000 € selon la complexité de la production, les exigences de tournage sur site et l'accompagnement stratégique supplémentaire. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Garantissez-vous le succès de la campagne ?",
    answer:
      "Bien que nous ne puissions garantir des montants de financement spécifiques (car de nombreux facteurs contribuent au succès d'une campagne), nos vidéos atteignent régulièrement des taux de conversion de 50 à 70 %, passant de spectateurs à contributeurs, ce qui est nettement supérieur aux moyennes sectorielles. Nous nous concentrons sur la création de l'élément le plus important de votre campagne.",
  },
  {
    question: "Comment les vidéos de financement participatif peuvent-elles être utilisées après la campagne ?",
    answer:
      "Votre vidéo de financement participatif constitue votre principale ressource marketing même après la fin de votre campagne. Elle peut être utilisée pour les dossiers de presse, les présentations commerciales, le marketing sur les réseaux sociaux et comme base pour les lancements de produits futurs. Nous livrons plusieurs versions optimisées pour différents canaux.",
  },
];

export default function CrowdfundingVideoFAQSection() {
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
    mainEntity: crowdfundingVideoFAQItems.map((item) => ({
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
        id="crowdfunding-video-faq-schema"
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
                FAQ VIDÉOS FINANCEMENT PARTICIPATIF
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services de vidéos de financement participatif ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {crowdfundingVideoFAQItems.map((item, index) => (
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