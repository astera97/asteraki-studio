// src/app/production-audiovisuelle-rouen/rouen-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const rouenVideoFAQItems: FAQItem[] = [
  {
    question: "Intervenez-vous uniquement à Rouen ?",
    answer:
      "Non. Nous couvrons toute la Normandie (Seine-Maritime, Eure, Calvados, Manche, Orne) et pouvons intervenir partout en France grâce à notre réseau de partenaires locaux et à notre équipe mobile. Que vous soyez à Caen, Le Havre, Évreux ou même à Paris, Lyon ou Marseille, nous assurons la même qualité et les mêmes délais et sans frais de déplacement.",
  },
  {
    question: "Quel est le budget pour une vidéo professionnelle à Rouen ?",
    answer:
      "Nos projets à Rouen commencent à partir de 2 500 €, tout inclus : brief, scénario, tournage local (sans frais de déplacement), montage, et livraison de plusieurs formats optimisés. La majorité de nos vidéos corporate se situent entre 3 500 € et 6 000 €, selon la durée, le nombre de lieux ou d’intervenants. Et pour votre premier projet, les frais de pré-production sont offerts (valeur 600 €).",
  },
  {
    question: "Combien de temps dure la production d’une vidéo ?",
    answer:
      "Une fois le brief validé, nous pouvons tourner sous 24h à Rouen si besoin. Après le tournage, vous recevez votre vidéo finale en 5 jours ouvrés maximum. Ce délai est garanti grâce à notre processus interne optimisé et à une équipe dédiée — pas de sous-traitance aléatoire.",
  },
  {
    question: "Quels types de vidéos créez-vous ?",
    answer:
      "Nous réalisons tous les formats utiles aux entreprises B2B :<br/>• Vidéos institutionnelles<br/>• Témoignages clients<br/>• Vidéos de recrutement<br/>• Présentations de solutions ou produits<br/>• Retours d’événements (salons, conférences)<br/>• Contenus pour les réseaux sociaux (LinkedIn, Instagram)<br/>Chaque projet inclut plusieurs versions : longue, teaser 15-30s, format carré ou vertical — prêtes à diffuser partout.",
  },
  {
    question: "Et si on n’est pas satisfait du résultat ?",
    answer:
      "Nous travaillons main dans la main avec vous : du brief au storyboard, en passant par une première version de montage. Mais si des ajustements sont nécessaires, 3 tours de retouches sont inclus dans le prix. Notre objectif ? Que vous soyez 100 % satisfait, sans stress.",
  },
  
];

export default function RouenVideoFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // ✅ Generate structured data for SEO (FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rouenVideoFAQItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<br\/>/g, " "), // Remove HTML for schema
      },
    })),
  };

  return (
    <>
      {/* ✅ Inject JSON-LD schema */}
      <Script
        id="rouen-video-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      {/* FAQ UI */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-[1300px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
                QUESTIONS FRÉQUENTES
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Vous avez des questions ? <br />
              On a les réponses.
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {rouenVideoFAQItems.map((item, index) => (
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
                    <p
                      className="text-white leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
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