// src/app/services/b2b-video-production/b2b-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const b2bVideoFAQItems: FAQItem[] = [
  {
    question: "Est-ce que la vidéo est vraiment efficace pour les entreprises ?",
    answer:
      "Oui, et de plus en plus. Une vidéo bien faite capte l’attention 3x plus vite qu’un texte ou une présentation. Pour les décideurs B2B, c’est souvent la seule façon de comprendre un message complexe en peu de temps. Nos clients constatent une augmentation de 40 % du taux d’engagement sur leurs supports commerciaux après intégration de vidéos.",
  },
  {
    question: "Combien ça coûte ? Et est-ce que c’est un bon investissement ?",
    answer:
      "Nos vidéos corporate commencent à 2 000 € (hors TVA), avec la plupart des projets entre 3 500 € et 6 000 € selon la complexité. Pour votre premier projet, **les frais de pré-production sont offerts**. Et oui, c’est un excellent investissement : une seule vidéo bien utilisée en interne ou en prospection peut remplacer des dizaines d’heures de présentations répétées.",
  },
  {
    question: "Vous livrez vraiment en 5 jours après le tournage ?",
    answer:
      "Oui, c’est un engagement. Une fois le tournage terminé, vous recevez votre vidéo finale en 5 jours ouvrés maximum. Pas de retards, pas de mauvaises surprises. Nous tenons ce délai depuis plus de 100 projets, car nous avons un processus de montage optimisé et une équipe interne dédiée.",
  },
  {
    question: "Et si on n’est pas satisfait du résultat ?",
    answer:
      "Nous travaillons en étroite collaboration avec vous à chaque étape : brief, storyboard, première version. Mais si jamais un ajustement est nécessaire, nous proposons 3 tours de retouches inclus dans le prix. Notre objectif est que vous soyez 100 % satisfait.",
  },
  {
    question: "On a déjà une agence de com, pourquoi vous choisir ?",
    answer:
      "Beaucoup de nos clients viennent d’agences généralistes qui font de la vidéo “à côté”. Nous, c’est notre cœur de métier. On ne fait que ça. Résultat : une qualité cinéma, des délais respectés, et des formats prêts à diffuser partout. Vous gagnez du temps, de la qualité, et un contenu qui marche.",
  },
  {
    question: "Faut-il être à Paris pour faire appel à Asteraki ?",
    answer:
      "Pas du tout. Nous tournons dans toute la France et à l’international. Pour les interviews ou événements, notre équipe se déplace. Pour les autres formats, on peut tout gérer à distance : brief, validation, livraison. Beaucoup de nos clients sont basés à Lyon, Marseille, Lille, ou à l’étranger.",
  },
  {
    question: "On obtient plusieurs formats ? Ou juste un fichier ?",
    answer:
      "Vous obtenez plusieurs versions optimisées : version longue, teaser 15-30s, version verticale, format carré pour LinkedIn, etc. Tout est inclus. Vous pouvez diffuser votre contenu sur votre site, vos réseaux, vos présentations, ou vos emails, sans rien avoir à recadrer.",
  },
];

export default function B2BVideoFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // ✅ Generate structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: b2bVideoFAQItems.map((item) => ({
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
      {/* ✅ Inject JSON-LD schema */}
      <Script
        id="b2b-video-faq-schema"
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
            {b2bVideoFAQItems.map((item, index) => (
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