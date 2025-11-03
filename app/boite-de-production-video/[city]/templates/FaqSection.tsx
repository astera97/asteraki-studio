// src/app/boite-de-production-video/[city]/templates/FaqSection.tsx

"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqContent: {
    heading: string;
    faqItems: FAQItem[];
  };
}

export default function FaqSection({ faqContent }: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Generate the structured data for FAQ schema using the dynamic content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqContent.faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/<[^>]*>/g, '') // Strip HTML for schema
      }
    }))
  };

  return (
    <>
      {/* Schema.org structured data for SEO */}
      <Script
        id="event-video-faq-schema"
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
                QUESTIONS FRÉQUENTES
              </span>
            </div>
            <h2 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
              {faqContent.heading} {/* Use the dynamic heading */}
            </h2>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqContent.faqItems.map((item, index) => (
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