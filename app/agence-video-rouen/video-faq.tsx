// src/app/components/video-faq.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

const videoFAQItems: FAQItem[] = [
  {
    question: "Quel est votre processus de production vidéo ?",
    answer:
      "Notre processus est structuré en <strong>trois étapes clés</strong> :<br/><br/>1. <strong>Stratégie et briefing</strong> : Nous commençons par comprendre vos objectifs, votre public cible et vos défis. Ensemble, nous définissons les KPI à atteindre.<br/>2. <strong>Création et production</strong> : Notre équipe réalise le scénario, le storyboard, le tournage et le montage avec un souci constant de qualité. Nous vous présentons régulièrement des jalons pour validation.<br/>3. <strong>Livraison et optimisation</strong> : Nous livrons votre vidéo dans les formats adaptés à vos canaux de diffusion et vous accompagnons pour mesurer son impact.",
  },
  {
    question: "Combien de temps faut-il pour produire une vidéo professionnelle ?",
    answer:
      "La durée varie selon la complexité du projet, mais <strong>la plupart des vidéos sont livrées en 2 à 3 semaines</strong>. Pour un projet standard :<br/><br/>- Semaine 1 : Briefing, stratégie et scénario<br/>- Semaine 2 : Tournage et montage initial<br/>- Semaine 3 : Révisions et livraison finale<br/><br/>Nous proposons également des options express pour les projets urgents, avec livraison possible en 5-7 jours.",
  },
  {
    question: "Quels types de vidéos produisez-vous ?",
    answer:
      "Nous créons une large gamme de contenus vidéo professionnels :<br/><br/>- <strong>Vidéos corporate</strong> : Présentation de votre entreprise, vos valeurs et votre vision<br/>- <strong>Vidéos de démonstration</strong> : Mise en avant de vos produits ou services<br/>- <strong>Vidéos explicatives</strong> : Simplification de concepts complexes<br/>- <strong>Contenu pour réseaux sociaux</strong> : Vidéos optimisées pour chaque plateforme<br/>- <strong>Vidéos de formation</strong> : Contenu éducatif pour vos équipes ou clients<br/><br/>Chaque projet est adapté à vos besoins spécifiques et à vos objectifs business.",
  },
  {
    question: "Comment mesurez-vous l'impact de vos vidéos ?",
    answer:
      "Nous définissons des <strong>métriques précises dès le début du projet</strong>, en fonction de vos objectifs :<br/><br/>- Pour les vidéos de conversion : Taux de clic, taux de conversion, durée de visionnage<br/>- Pour les vidéos de notoriété : Portée, engagement, partages<br/>- Pour les vidéos de formation : Taux de complétion, évaluations, application des connaissances<br/><br/>Nous utilisons des outils analytiques professionnels pour suivre ces métriques et vous fournir un rapport détaillé sur l'impact de votre vidéo.",
  },
  {
    question: "Quel est le coût d'une vidéo professionnelle ?",
    answer:
      "Le coût dépend de la complexité du projet, mais <strong>la plupart des projets commencent à 2 500€</strong> pour une vidéo de 60 à 90 secondes de qualité professionnelle. Les facteurs influençant le coût incluent :<br/><br/>- Durée de la vidéo<br/>- Lieux de tournage<br/>- Complexité des animations ou effets spéciaux<br/>- Nombre de révisions<br/>- Besoins en matière de droits d'auteur pour la musique ou les images<br/><br/>Nous fournissons des devis détaillés sans frais cachés, avec une transparence totale sur ce qui est inclus.",
  },
  {
    question: "Pouvez-vous travailler avec des contraintes budgétaires spécifiques ?",
    answer:
      "Absolument. Nous comprenons que chaque entreprise a des contraintes budgétaires différentes. <strong>Nous proposons des solutions adaptées à votre budget</strong> :<br/><br/>- Packages modulaires : Vous choisissez les éléments essentiels pour votre projet<br/>- Échelonnement des paiements pour les projets plus importants<br/>- Conseils sur la priorisation des éléments pour maximiser l'impact avec votre budget<br/><br/>Notre objectif est de vous offrir le meilleur rapport qualité-prix, en créant une vidéo qui répond à vos besoins sans dépasser votre budget.",
  },
  {
    question: "Quelle est votre approche créative ?",
    answer:
      "Notre approche est <strong>centrée sur vos objectifs business</strong> plutôt que sur la simple esthétique :<br/><br/>- Nous commençons par comprendre vos défis et objectifs spécifiques<br/>- Nous développons des concepts qui répondent à ces défis de manière créative<br/>- Nous utilisons des techniques de narration éprouvées pour capter et maintenir l'attention<br/>- Nous adaptons le style à votre public cible et à vos canaux de diffusion<br/><br/>Notre priorité est de créer des vidéos qui <strong>génèrent des résultats mesurables</strong>, pas seulement des vidéos jolies.",
  },
  {
    question: "Comment gérez-vous les révisions et les modifications ?",
    answer:
      "Nous avons un <strong>processus de révision structuré et transparent</strong> :<br/><br/>- Nous prévoyons systématiquement 2 à 3 tours de révision dans notre processus<br/>- Nous utilisons des outils professionnels pour les commentaires synchronisés sur la vidéo<br/>- Nous limitons les demandes de modifications à des éléments créatifs pertinents (pas de changements de fond après validation du scénario)<br/>- Nous communiquons clairement les impacts sur les délais et coûts de toute modification majeure<br/><br/>Ce processus garantit un résultat final qui correspond à vos attentes, tout en respectant les délais et le budget.",
  }
];

export default function VideoFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Generate structured data for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": videoFAQItems.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
          .replace(/<[^>]*>/g, "") // Strip HTML tags for clean schema
          .replace(/\s+/g, " ") // Normalize whitespace
          .trim(),
        "answerExplanation": {
          "@type": "WebContent",
          "text": "Chez Asteraki Studio, nous appliquons une méthodologie éprouvée pour chaque projet vidéo, en nous concentrant sur les objectifs business de nos clients."
        }
      },
      "suggestedAnswer": {
        "@type": "Answer",
        "text": item.answer
          .replace(/<[^>]*>/g, "") // Strip HTML tags for clean schema
          .replace(/\s+/g, " ") // Normalize whitespace
          .trim()
      },
      "answerCount": 1
    })),
  };

  return (
    <>
      {/* Inject JSON-LD structured data */}
      <Script
        id="video-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      {/* FAQ UI */}
      <section
        style={{ backgroundColor: "#111111" }}
        className="py-24 text-white"
        aria-labelledby="faq-title"
      >
        <div className="max-w-[1300px] mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <span
                className="inline-block px-6 py-2 border border-white rounded-full text-sm font-medium text-white uppercase tracking-wider"
                role="note"
              >
                FAQ PRODUCTION VIDÉO
              </span>
            </div>
            <h2
              id="faq-title"
              className="text-5xl lg:text-6xl font-bold leading-tight"
            >
              Des questions sur la production vidéo ?
              <br /> Nous avons les réponses.
            </h2>
          </div>

          {/* FAQ Items */}
          <div
            className="max-w-4xl mx-auto space-y-4"
            aria-label="Foire aux questions"
          >
            {videoFAQItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className="text-xl font-bold text-black pr-4"
                    itemProp="name"
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-black transition-transform duration-500 flex-shrink-0 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  itemProp="suggestedAnswer acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div className="mx-4 mb-4 bg-gray-100 rounded-2xl px-8 py-6">
                    <div
                      className="text-gray-700 text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                      itemProp="text"
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