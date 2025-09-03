// src/app/services/logistics-video-production/logistics-video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const logisticsVideoFAQItems: FAQItem[] = [
  {
    question: "Quels types de vidéos logistiques créez-vous ?",
    answer:
      "Nous nous spécialisons dans les vidéos explicatives de chaîne d'approvisionnement, les démonstrations de suivi d'expéditions, les visites guidées d'opérations d'entrepôt, les explications de livraison de dernier kilomètre, les démonstrations de plateformes technologiques logistiques et du contenu personnalisé pour les entreprises de logistique. Chaque vidéo est conçue pour répondre à des défis spécifiques de communication logistique tout en maintenant l'exactitude et la clarté des opérations complexes.",
  },
  {
    question: "Combien de temps faut-il pour produire des vidéos logistiques ?",
    answer:
      "La plupart des projets vidéo logistiques prennent 3 à 4 semaines de la conception initiale à la livraison finale. Cela inclut les sessions d'analyse logistique approfondie, le développement du scénario, le storyboard, la production et le montage. Pour les concepts logistiques très complexes (chaîne d'approvisionnement mondiale, transport multimodal), nous pouvons avoir besoin de temps supplémentaire pour la validation opérationnelle. Nous pouvons accommoder des délais plus serrés pour les lancements de produits urgents avec des ressources supplémentaires.",
  },
  {
    question: "Comment gérez-vous les opérations logistiques complexes dans les vidéos ?",
    answer:
      "Notre processus commence par des sessions approfondies avec votre équipe d'opérations pour comprendre pleinement vos processus de chaîne d'approvisionnement. Nous traduisons ensuite cette connaissance en récits clairs et engageants en utilisant des métaphores visuelles, des animations et un rythme stratégique. Chaque vidéo subit un examen opérationnel par votre équipe avant la livraison finale pour garantir une exactitude de 100 %. Notre équipe comprend d'anciens professionnels de la logistique qui comprennent les nuances des opérations de chaîne d'approvisionnement et peuvent parler couramment le langage de la logistique.",
  },
  {
    question: "Quelle est la longueur idéale pour les vidéos logistiques ?",
    answer:
      "La longueur idéale varie selon l'objectif : 90 à 120 secondes pour les aperçus de service, 2 à 3 minutes pour les explications opérationnelles spécifiques (comme la livraison de dernier kilomètre) et 3 à 5 minutes pour les démonstrations complètes de chaîne d'approvisionnement. Pour l'éducation des clients, nous créons souvent du contenu modulaire qui peut être utilisé comme éléments autonomes ou combinés pour des présentations plus longues. Notre équipe déterminera la longueur optimale en fonction de votre contenu logistique spécifique et des besoins de votre audience.",
  },
  {
    question: "Combien coûtent les vidéos logistiques ?",
    answer:
      "La production de vidéos logistiques commence à 4 500 € par vidéo pour le contenu explicatif de base, avec la plupart des projets se situant entre 6 500 € et 12 500 € par vidéo selon la complexité opérationnelle, les exigences d'animation et la qualité de production. Le contenu logistique hautement spécialisé (chaîne d'approvisionnement mondiale, transport multimodal) se situe généralement entre 10 000 € et 20 000 € par vidéo. Nous fournissons des devis détaillés sans frais cachés, afin que vous sachiez exactement ce qui est inclus.",
  },
  {
    question: "Travaillez-vous avec des plateformes technologiques logistiques ?",
    answer:
      "Oui, nous travaillons régulièrement avec des plateformes technologiques logistiques, notamment les TMS (Systèmes de Gestion des Transports), les WMS (Systèmes de Gestion d'Entrepôt) et les plateformes de suivi. Nous pouvons transformer des interfaces système complexes en démonstrations claires destinées aux clients, expliquer les flux de données et visualiser les métriques opérationnelles de manière compréhensible pour les professionnels de la logistique et les clients finaux.",
  },
  {
    question: "Comment les vidéos logistiques peuvent-elles être intégrées à notre expérience client ?",
    answer:
      "Nos vidéos logistiques sont livrées dans plusieurs formats optimisés pour une intégration dans votre expérience client : pages de destination de site web, emails de confirmation d'expédition, portails de suivi, bases de connaissances du service client et présentations commerciales. Nous fournissons des spécifications techniques et des conseils d'implémentation pour garantir une intégration transparente avec votre pile technologique logistique existante et vos canaux de communication client.",
  },
];

export default function LogisticsVideoFAQSection() {
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
    mainEntity: logisticsVideoFAQItems.map((item) => ({
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
        id="logistics-video-faq-schema"
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
                FAQ VIDÉO LOGISTIQUE
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Des questions sur nos <br />
              services vidéo logistique ?
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {logisticsVideoFAQItems.map((item, index) => (
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