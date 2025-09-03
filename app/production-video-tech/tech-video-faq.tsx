// src/app/services/tech-video-production/tech-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const techVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos tech créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos explicatives de produits, les vidéos de démonstration technique, les présentations de plateformes SaaS, les explications de concepts d'IA/ML, les aperçus de solutions d'entreprise, les vidéos de documentation API et le contenu personnalisé pour les entreprises technologiques à tous les stades. Chaque vidéo est conçue pour répondre à des défis spécifiques de communication technique tout en maintenant l'exactitude et la clarté.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos tech ?",
    answer:
      "La plupart des projets vidéo tech prennent 3 à 4 semaines de la conception initiale à la livraison finale. Cela inclut les sessions d'analyse technique approfondie, le développement du scénario, le storyboard, la production et le montage. Pour les sujets techniques très complexes, nous pouvons avoir besoin de temps supplémentaire pour la validation technique. Nous pouvons accommoder des délais plus serrés pour les lancements de produits urgents avec des ressources supplémentaires.",
  },
  {
    question: "Comment gérez-vous le contenu hautement technique ?",
    answer:
      "Notre processus commence par des sessions techniques approfondies avec vos experts du sujet pour assurer une compréhension complète des concepts. Nous traduisons ensuite cette connaissance en récits clairs et engageants en utilisant des métaphores visuelles, des animations et un rythme stratégique. Chaque vidéo subit un examen technique par votre équipe avant la livraison finale pour garantir une exactitude de 100 %. Notre équipe comprend d'anciens ingénieurs qui peuvent parler couramment le langage de la technologie.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos tech ?",
    answer:
      "La longueur idéale varie selon l'objectif : 90 à 120 secondes pour les aperçus de produits, 2 à 3 minutes pour les explications de fonctionnalités, et 3 à 5 minutes pour les concepts techniques complexes. Pour l'accompagnement commercial d'entreprise, nous créons souvent du contenu modulaire qui peut être utilisé comme éléments autonomes ou combinés pour des présentations plus longues. Notre équipe déterminera la longueur optimale en fonction de votre contenu technique spécifique et des besoins de votre audience.",
  },
  {
    question: "Combien coûtent les vidéos tech ?",
    answer:
      "La production de vidéos tech commence à 4 000 € par vidéo pour le contenu explicatif de base, avec la plupart des projets se situant entre 6 000 € et 12 000 € par vidéo selon la complexité technique, les exigences d'animation et la qualité de production. Le contenu technique hautement spécialisé (IA, blockchain, informatique quantique) se situe généralement entre 10 000 € et 20 000 € par vidéo. Nous fournissons des devis détaillés sans frais cachés, afin que vous sachiez exactement ce qui est inclus.",
  },
  {
    question: "Travaillez-vous avec la documentation technique et les API ?",
    answer:
      "Oui, nous travaillons régulièrement avec la documentation technique, les spécifications API et les exemples de code pour créer des représentations visuelles précises. Nous pouvons transformer les spécifications Swagger/OpenAPI en démonstrations d'interface claires, expliquer des flux de données complexes et visualiser l'architecture technique de manière à ce qu'elle ait du sens pour les audiences techniques et non techniques.",
  },
  {
    question: "Comment les vidéos tech peuvent-elles être intégrées dans notre écosystème commercial et marketing ?",
    answer:
      "Nos vidéos tech sont livrées dans plusieurs formats optimisés pour une intégration à travers votre écosystème : présentations commerciales, pages de destination de site web, documentation produit, flux d'intégration, campagnes par email et réseaux sociaux. Nous fournissons des spécifications techniques et des conseils d'implémentation pour garantir une intégration transparente avec votre CRM, votre automatisation marketing et vos plateformes produit.",
  },
];

export default function TechVideoFAQSection() {
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
    mainEntity: techVideoFAQItems.map((item) => ({
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
        id="tech-video-faq-schema"
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
                FAQ VIDÉO TECH
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services vidéo tech ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {techVideoFAQItems.map((item, index) => (
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