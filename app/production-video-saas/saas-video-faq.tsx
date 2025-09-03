// src/app/services/saas-video-production/saas-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const saasVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos SaaS créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos d'intégration, les démonstrations de fonctionnalités, les vidéos de conversion d'essai gratuit, les histoires de réussite client, les annonces de mises à jour de produits et le contenu vidéo personnalisé pour chaque étape du parcours client SaaS. Chaque vidéo est conçue pour répondre à des objectifs de conversion spécifiques et aux problèmes des utilisateurs aux moments clés de leur cycle de vie.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos SaaS ?",
    answer:
      "La plupart des projets de vidéos SaaS prennent 2 à 3 semaines, de la conception initiale à la livraison finale. Cela inclut l'analyse du parcours utilisateur, le développement du scénario, le storyboard, l'enregistrement d'écran ou le tournage, et le montage. Nous pouvons adapter nos délais pour les lancements de produits ou les campagnes urgentes.",
  },
  {
    question: "Comment déterminez-vous quelles parties du parcours utilisateur nécessitent une vidéo ?",
    answer:
      "Nous analysons les données de votre tunnel de conversion, le comportement des utilisateurs et les points d'abandon pour identifier les moments clés où une vidéo aura le plus d'impact. Notre approche se concentre sur la création de vidéos pour les points spécifiques où les utilisateurs rencontrent des difficultés, partent ou ne perçoivent pas la valeur de votre produit.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos SaaS ?",
    answer:
      "La longueur idéale varie selon l'objectif : 30 à 60 secondes pour l'intégration et l'activation, 60 à 90 secondes pour les démos de fonctionnalités, et 90 à 120 secondes pour les histoires de réussite client. Notre équipe déterminera la longueur optimale en fonction de vos objectifs spécifiques, du comportement des utilisateurs et de la complexité du concept à communiquer.",
  },
  {
    question: "Combien coûtent les vidéos SaaS ?",
    answer:
      "La production de vidéos SaaS commence à 3 000 € par vidéo pour un contenu d'intégration basique, avec la plupart des projets entre 4 500 € et 9 000 € par vidéo selon la complexité, les besoins en animation et la qualité de production. Les stratégies vidéo complètes couvrant plusieurs points de contact coûtent généralement entre 25 000 € et 60 000 €. Nous fournissons des devis détaillés sans frais cachés.",
  },
  {
    question: "Intégrez-vous nos données d'analyse produit ?",
    answer:
      "Oui, nous travaillons avec vos données d'analyse pour comprendre où les utilisateurs abandonnent, quelles fonctionnalités favorisent la fidélisation, et où les interventions vidéo auront le plus d'impact. Nous pouvons également mettre en place le suivi de l'engagement vidéo pour mesurer l'impact direct sur les métriques de conversion et fournir une analyse du ROI.",
  },
  {
    question: "Comment intégrer les vidéos SaaS dans notre produit ?",
    answer:
      "Nos vidéos SaaS sont livrées dans plusieurs formats optimisés pour s'intégrer dans l'expérience de votre produit : fenêtres contextuelles, parcours d'intégration, bases de connaissances, séquences d'e-mails et portails d'assistance client. Nous fournissons les spécifications techniques et des conseils d'implémentation pour une intégration fluide avec votre environnement technique.",
  },
];

export default function SaaSVideoFAQSection() {
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
    mainEntity: saasVideoFAQItems.map((item) => ({
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
        id="saas-video-faq-schema"
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
                FAQ VIDÉOS SAAS
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services vidéo SaaS ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {saasVideoFAQItems.map((item, index) => (
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