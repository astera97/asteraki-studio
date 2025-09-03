// src/app/services/healthcare-video-production/healthcare-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const healthcareVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos de santé créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos d'éducation des patients, les explications de procédures, les démonstrations de dispositifs médicaux, les communications de médecins, les campagnes de sensibilisation à la santé et le contenu personnalisé pour les organisations de santé. Chaque vidéo est conçue pour répondre à des défis spécifiques de communication en santé tout en maintenant une stricte conformité réglementaire avec HIPAA, FDA, FTC et autres réglementations sanitaires applicables.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos de santé ?",
    answer:
      "La plupart des projets vidéo de santé prennent 4 à 6 semaines de la conception initiale à la livraison finale. Cela inclut les points de contrôle de révision réglementaire, les consultations d'exactitude médicale, le développement du scénario, le storyboard, la production et le montage. Pour le contenu hautement réglementé (procédures médicales, explications pharmaceutiques), nous prévoyons du temps supplémentaire pour les révisions médicales et de conformité. Nous pouvons accommoder des délais plus serrés pour les besoins urgents avec des ressources supplémentaires.",
  },
  {
    question: "Comment garantissez-vous la conformité réglementaire dans les vidéos de santé ?",
    answer:
      "Notre processus commence par une plongée réglementaire approfondie pour identifier toutes les exigences applicables à votre contenu et à votre public spécifiques. Nous intégrons ensuite les exigences de conformité dans le processus créatif dès les premières étapes, avec des points de contrôle de conformité dédiés tout au long de la production. Chaque vidéo subit un examen par nos spécialistes internes en médecine et en conformité avant la livraison, et nous fournissons une documentation détaillée de conformité avec chaque projet. Notre équipe comprend d'anciens régulateurs de la santé et des professionnels médicaux qui comprennent les nuances des réglementations de marketing en santé.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos de santé ?",
    answer:
      "La longueur idéale varie selon l'objectif : 90 à 120 secondes pour la sensibilisation générale à la santé, 2 à 3 minutes pour les explications de procédures et 3 à 5 minutes pour les options de traitement complètes. Pour l'éducation des patients, nous créons souvent du contenu modulaire qui peut être utilisé comme éléments autonomes ou combinés pour des sessions plus longues. Notre équipe déterminera la longueur optimale en fonction de votre contenu de santé spécifique, des exigences réglementaires et des besoins des patients.",
  },
  {
    question: "Combien coûtent les vidéos de santé ?",
    answer:
      "La production de vidéos de santé commence à 6 000 € par vidéo pour le contenu d'éducation des patients de base, avec la plupart des projets se situant entre 8 500 € et 16 000 € par vidéo selon la complexité réglementaire, les exigences d'animation et la qualité de production. Le contenu hautement réglementé (procédures médicales, explications pharmaceutiques) se situe généralement entre 13 000 € et 25 000 € par vidéo en raison des exigences supplémentaires de révision de conformité. Nous fournissons des devis détaillés sans frais cachés, afin que vous sachiez exactement ce qui est inclus.",
  },
  {
    question: "Travaillez-vous avec des professionnels médicaux et des départements de conformité ?",
    answer:
      "Oui, nous avons une vaste expérience de travail direct avec des professionnels médicaux et des départements de conformité. Nous comprenons leurs préoccupations et parlons leur langage, ce qui réduit considérablement les cycles de révision et les révisions. Nous fournissons une documentation conforme, un suivi de versions et des justificatifs clairs pour les décisions créatives afin de rationaliser le processus d'approbation. De nombreux clients signalent des délais de révision de conformité 33 % plus rapides après avoir mis en œuvre notre processus de production spécifique à la santé.",
  },
  {
    question: "Comment les vidéos de santé peuvent-elles améliorer les résultats des patients ?",
    answer:
      "Les vidéos de santé stratégiques renforcent la confiance, expliquent clairement les traitements complexes et font preuve d'empathie - autant de facteurs critiques dans la prise de décision et l'observance thérapeutique des patients. Les patients qui s'engagent avec des vidéos explicatives de santé conformes montrent des taux d'observance thérapeutique 29 % plus élevés et signalent des niveaux d'anxiété 33 % plus faibles concernant les traitements. Pour l'éducation des patients, une communication claire et régulière maintient les patients informés et engagés, améliorant les résultats et réduisant les complications. Nous intégrons des cadres de mesure directement dans votre stratégie vidéo pour suivre ces indicateurs.",
  },
];

export default function HealthcareVideoFAQSection() {
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
    mainEntity: healthcareVideoFAQItems.map((item) => ({
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
        id="healthcare-video-faq-schema"
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
                FAQ VIDÉO SANTÉ
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services vidéo de santé ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {healthcareVideoFAQItems.map((item, index) => (
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