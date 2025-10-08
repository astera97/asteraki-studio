// src/app/production-audiovisuelle-cannes/cannes-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

// Updated FAQ items, more general, with focus keyword integrated where relevant
const cannesVideoFAQItems: FAQItem[] = [
  {
    question: "Quel est le budget pour une vidéo professionnelle à Cannes ?",
    answer:
      "Nos projets à Cannes commencent à partir de 2 800 €, tout inclus : brief, scénario, tournage local (sans frais de déplacement), montage, et livraison de plusieurs formats optimisés. La majorité de nos vidéos événementielles ou de témoignages se situent entre 3 800 € et 6 500 €, selon la durée, le nombre de lieux ou d’intervenants. Et pour votre premier projet, les frais de pré-production sont offerts (valeur 600 €).",
  },
  {
    question: "Combien de temps dure la production d’une vidéo ?",
    answer:
      "Une fois le brief validé, nous pouvons tourner sous 24h à Cannes si besoin. Après le tournage, vous recevez votre vidéo finale en 5 jours ouvrés maximum. Ce délai est garanti grâce à notre processus interne optimisé et à une équipe dédiée — pas de sous-traitance aléatoire.",
  },
  {
    question: "Quels types de vidéos créez-vous à Cannes ?",
    answer:
      "Nous réalisons tous les formats utiles aux événements internationaux et aux entreprises B2B :<br/>• Vidéos événementielles (conférences, lancements)<br/>• Témoignages clients multilingues<br/>• Pitchs et présentations de produits<br/>• Contenus courts pour les réseaux sociaux (LinkedIn, Instagram)<br/>• Résumés de sessions de festival/salon<br/>Chaque projet inclut plusieurs versions : longue, teaser 15-30s, format carré ou vertical — prêtes à diffuser partout.",
  },
  {
    question: "Comment gérez-vous les contraintes des événements à Cannes ?",
    answer:
      "Nous connaissons bien le rythme effréné des événements à Cannes. Notre processus est conçu pour être rapide et flexible : tournage express sur site, montage intensif en interne. Nous adaptons nos interventions à vos disponibilités serrées et livrons dans les délais les plus courts possibles, sans compromis sur la qualité.",
  },
  {
    question: "Et si on n’est pas satisfait du résultat ?",
    answer:
      "Nous travaillons main dans la main avec vous : du brief au storyboard, en passant par une première version de montage. Mais si des ajustements sont nécessaires, 3 tours de retouches sont inclus dans le prix. Notre objectif ? Que vous soyez 100 % satisfait, sans stress.",
  },
  {
    question: "Proposez-vous des services en anglais ou d'autres langues ?",
    answer:
      "Oui, absolument. Nous collaborons avec des traducteurs et voix-off professionnels pour produire des vidéos en anglais, espagnol, allemand et autres langues selon vos besoins. Cela s'applique à tous nos formats de <strong>production audiovisuelle à Cannes</strong>."
  }
];

export default function CannesVideoFAQSection() { // Updated component name
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
    mainEntity: cannesVideoFAQItems.map((item) => ({
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
        id="cannes-video-faq-schema" // Updated schema ID
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
            {cannesVideoFAQItems.map((item, index) => (
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