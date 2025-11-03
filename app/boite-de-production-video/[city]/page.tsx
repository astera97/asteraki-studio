// src/app/production-audiovisuelle/[city]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "./templates/HeroSection";
import ProcessSection from "./templates/ProcessSection";
import WhyChooseSection from "./templates/WhyChooseSection";
import FaqSection from "./templates/FaqSection";
import CtaSection from "./templates/CtaSection";
import InvisibleInterlinkBlock from "./templates/InvisibleInterlinkBlock";
import { CITIES } from "./data/cities";
import { getHeroContent } from "./data/getHeroContent";
import { getProcessContent } from "./data/getProcessContent";
import { getWhyChooseContent } from "./data/getWhyChooseContent";
import { getCtaContent } from "./data/getCtaContent";
import { getFaqContent } from "./data/getFaqContent";
import { getLocalSchema } from "./data/getLocalSchema";
import ServicesSection from "@/components/services-section";
import Script from "next/script";

// ✅ Define simpleHash at the module level so it can be used by both generateMetadata and the main component
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Ensure 32-bit integer
  }
  return Math.abs(hash);
}

export async function generateStaticParams() {
  return CITIES.map(city => ({ city: city.id }));
}

// ✅ Corrected generateMetadata signature for Next.js 15+
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: cityId } = await params; // ✅ Await params
  const city = CITIES.find(c => c.id === cityId);
  
  if (!city) {
    return {
      title: "Production audiovisuelle | Agence vidéo professionnelle en France",
      description: "Agence de production audiovisuelle spécialisée dans les vidéos professionnelles pour les entreprises. Livraison rapide, multi-format, ROI clair.",
    };
  }

  // ✅ Define heroHeadlines array locally within generateMetadata
  const heroHeadlines = [
    "Production audiovisuelle à {{city}} pour entreprises ambitieuses.",
    "Agence vidéo à {{city}} spécialisée en production multi-format.",
    "Boîte de production vidéo à {{city}} livrant en 5 jours ouvrés.",
    "Production vidéo à {{city}} sans frais cachés ni mauvaises surprises.",
    "Production audiovisuelle à {{city}} incluant plusieurs formats optimisés.",
    "Agence de production vidéo à {{city}} pour des contenus percutants et stratégiques.",
    "Production vidéo à {{city}} avec un retour sur investissement clair.",
    "Boîte de production vidéo à {{city}} pour des entreprises qui veulent se démarquer.",
    "Production audiovisuelle à {{city}} conçue pour tous vos canaux de communication.",
    "Agence vidéo à {{city}} alliant rapidité, qualité et transparence tarifaire.",
    "Production vidéo à {{city}} pour des campagnes de recrutement, événements, et plus.",
    "Boîte de production vidéo à {{city}} spécialisée dans les témoignages clients.",
    "Production audiovisuelle à {{city}} livrée avec 5+ formats prêts à l'emploi.",
    "Agence de production vidéo à {{city}} pour maximiser votre impact marketing.",
    "Production vidéo à {{city}} qui transforme votre stratégie de communication."
  ];
  
  // ✅ Use the locally defined simpleHash function
  const seed = simpleHash(city.name);
  const rawHeadline = heroHeadlines[seed % heroHeadlines.length];
  const heroHeadline = rawHeadline.replace(/{{city}}/g, city.name);

  return {
    title: `Boîte de production vidéo à ${city.name} | Asteraki Studio`,
    description: heroHeadline,
    openGraph: {
      title: `Boîte de production vidéo à ${city.name}`,
      description: heroHeadline,
      locale: "fr_FR",
      type: "website",
      url: `https://asterakistudio.com/production-audiovisuelle/${cityId}`, // ✅ Replace with your domain
      siteName: "Asteraki Studio",
      images: [
        {
          url: "https://asterakistudio.com/logo.png", // ✅ Replace with your image URL
          width: 1200,
          height: 630,
          alt: `Boîte de production vidéo à ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Boîte de production vidéo à ${city.name}`,
      description: heroHeadline,
      images: ["https://asterakistudio.com/logo.png"], // ✅ Replace with your image URL
    },
    alternates: {
      canonical: `https://asterakistudio.com/production-audiovisuelle/${cityId}`, // ✅ Replace with your domain
    },
  };
}

export default async function ProductionAudiovisuellePage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityId } = await params; // ✅ Await params
  const cityData = CITIES.find(c => c.id === cityId);
  if (!cityData) return notFound(); // ✅ Handle not found

  // ✅ Get all content for this specific city using the same hash
  const seed = simpleHash(cityData.name);
  
  const heroContent = getHeroContent(cityData.name);
  const processContent = getProcessContent(cityData.name);
  const whyChooseContent = getWhyChooseContent(cityData.name);
  const faqContent = getFaqContent(cityData.name);
  const ctaContent = getCtaContent(cityData.name);
  
  // ✅ Get local schema for this city
  const localSchema = getLocalSchema(cityId); // ✅ Pass cityId, not params.city

  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Local Schema */}
        {localSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
          />
        )}
        
        <HeroSection heroContent={heroContent} />
        
        {/* Client Logos Section */}
                <section className="pt-0 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
                  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-center text-black font-normal mt-4 sm:mt-6 text-sm sm:text-base px-4">
                      Plus de 250 entreprises accompagnées en France.
                    </p>
        
                    <div className="relative overflow-hidden mb-8 sm:mb-12">
                      <div
                        className="absolute left-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(237, 237, 237, 0), transparent)",
                        }}
                      ></div>
                      <div
                        className="absolute right-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to left, hsla(0, 0%, 100%, 0.00), rgba(237, 237, 237, 0), transparent)",
                        }}
                      ></div>
        
                      <div className="flex animate-scroll-seamless">
                        {[
                          { name: "sage", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV4bnvwY2lTHSXo8DmjG0ZWyuahPUIeOpds65E" },
                          { name: "notion", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRjuai5V8xN4tsZSVcawW35TIh0CgyLOYHAiX" },
                          { name: "dell", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyVJ83Vf7jHwWMkUO0E4Y25ImLfS3X8vyRBib" },
                          { name: "deloitte", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVufQdOSMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2" },
                          { name: "malt", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVN72SnQD45FgMDujBmTbOY28pnK0y4lkrZfWx" },
                          { name: "aircall", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlYofGSq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
                          { name: "sanofi", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlVYsEdq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
                          { name: "uber", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVci8fmc9r3QfKI0dziE8sFt4BVwMqT2bChkLN" },
                          { name: "zapier", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNLoseK45FgMDujBmTbOY28pnK0y4lkrZfWxe" },
                        ]
                          .concat([
                            { name: "sage", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV4bnvwY2lTHSXo8DmjG0ZWyuahPUIeOpds65E" },
                            { name: "notion", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRjuai5V8xN4tsZSVcawW35TIh0CgyLOYHAiX" },
                            { name: "dell", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyVJ83Vf7jHwWMkUO0E4Y25ImLfS3X8vyRBib" },
                            { name: "deloitte", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVufQdOSMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2" },
                            { name: "malt", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVN72SnQD45FgMDujBmTbOY28pnK0y4lkrZfWx" },
                            { name: "aircall", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlYofGSq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
                            { name: "sanofi", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlVYsEdq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
                            { name: "uber", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVci8fmc9r3QfKI0dziE8sFt4BVwMqT2bChkLN" },
                            { name: "zapier", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNLoseK45FgMDujBmTbOY28pnK0y4lkrZfWxe" },
                          ])
                          .map((logo, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] mx-2 sm:mx-4"
                            >
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </section>

        {/* Portfolio / Services */}
        <ServicesSection/>        
        <ProcessSection processContent={processContent} />
        <WhyChooseSection whyChooseContent={whyChooseContent} />
        <FaqSection faqContent={faqContent} />
        <CtaSection ctaContent={ctaContent} />

        {/* Add the invisible interlink block here, before the Footer */}
        <InvisibleInterlinkBlock currentCityId={cityId} /> {/* ✅ Pass cityId */}
      </main>
      <Footer />
    </>
  );
}