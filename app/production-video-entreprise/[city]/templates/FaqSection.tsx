// src/app/production-video-entreprise/[city]/templates/FaqSection.tsx

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  cityName: string; // ← ADD THIS
  faqItems: FaqItem[];
}

export default function FaqSection({ cityName, faqItems }: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!faqItems || !Array.isArray(faqItems)) {
    console.warn('FaqSection received invalid faqItems:', faqItems);
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
                QUESTIONS FRÉQUENTES
              </span>
            </div>
            {/* ✅ FIXED: Use cityName prop, NOT faqItems[0].id */}
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              Tout savoir sur la vidéo d’entreprise à {cityName}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.id} className="bg-[#F1F1F1] rounded-3xl overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                >
                  <span className="text-lg font-semibold text-black">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems.includes(index) && (
                  <div className="px-8 pb-6 pt-4 bg-white">
                    <div
                      className="text-base text-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}