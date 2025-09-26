// src/app/production-audiovisuelle-caen/caen-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

// Updated FAQ items, more general, with focus keyword integrated
const caenVideoFAQItems: FAQItem[] = [
  {
    question: "Quel est le budget pour une vidéo professionnelle ?",
    answer:
      "Nos projets commencent à partir de 2 500 €, tout inclus : brief, scénario, tournage, montage, et livraison de plusieurs formats optimisés. La majorité de nos vidéos corporate se situent entre 3 500 € et 6 000 €, selon la durée, le nombre de lieux ou d’intervenants. Et pour votre premier projet, les frais de pré-production sont offerts (valeur 600 €).",
  },
  {
    question: "Combien de temps dure la production d’une vidéo ?",
    answer:
      "Une fois le brief validé, nous pouvons démarrer le tournage sous 24h si besoin. Après le tournage, vous recevez votre vidéo finale en 5 jours ouvrés maximum. Ce délai est garanti grâce à notre processus interne optimisé et à une équipe dédiée.",
  },
  {
    question: "Quels types de vidéos créez-vous ?",
    answer:
      "Nous réalisons tous les formats utiles aux entreprises B2B :<br/>• Vidéos institutionnelles<br/>• Témoignages clients<br/>• Vidéos de recrutement<br/>• Présentations de solutions ou produits<br/>• Retours d’événements (salons, conférences)<br/>• Contenus pour les réseaux sociaux (LinkedIn, Instagram)<br/>Chaque projet inclut plusieurs versions : longue, teaser 15-30s, format carré ou vertical — prêtes à diffuser partout.",
  },
  {
    question: "Comment se déroule la collaboration ?",
    answer:
      "Notre processus est simple : un échange pour comprendre votre besoin, un scénario validé par vos soins, le tournage et le montage en interne, et enfin la livraison de plusieurs formats. ",
  },
  {
    question: "Et si on n’est pas satisfait du résultat ?",
    answer:
      "Nous travaillons main dans la main avec vous : du brief au storyboard, en passant par une première version de montage. Mais si des ajustements sont nécessaires, 3 tours de retouches sont inclus dans le prix. Notre objectif ? Que vous soyez 100 % satisfait, sans stress.",
  },
  {
    question: "Quelle est la différence entre votre offre et celle d'autres agences ?",
    answer:
      "Notre approche se distingue par la rapidité (livraison en 5 jours), la clarté des tarifs (aucun frais caché), la qualité du rendu (équipe interne), et la flexibilité (nombreux formats inclus). Cela s'applique à chaque projet vidéo que nous menons à bien."
  }
];

export default function CaenVideoFAQSection() { // Updated component name
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
    "@context": "https://schema.org", // Removed extra spaces
    "@type": "FAQPage",
    mainEntity: caenVideoFAQItems.map((item) => ({
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
        id="caen-video-faq-schema" // Updated schema ID
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
            {caenVideoFAQItems.map((item, index) => (
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