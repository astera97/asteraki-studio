// src/app/boite-production-video/[city]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "./templates/HeroSection";
import ProcessSection from "./templates/ProcessSection";
import WhyChooseSection from "./templates/WhyChooseSection";
import FaqSection from "./templates/FaqSection";
import CtaSection from "./templates/CtaSection";
import IndustriesSection from "./templates/industries-section";
import { CITIES } from "./data/cities";
import { getHeroContent } from "./data/getHeroContent";
import { getProcessContent } from "./data/getProcessContent";
import { getWhyChooseContent } from "./data/getWhyChooseContent";
import { getCtaContent } from "./data/getCtaContent";
import { getFaqContent } from "./data/getFaqContent";
import { getLocalSchema } from "./data/getLocalSchema";
import ServicesSection from "@/components/services-section";
import Script from "next/script";
import { PortfolioCarousel } from "./templates/portfolio-carousel";
import CitySearch from "./templates/CitySearch";
import UspSection from './templates/UspSection';
import VideoAdvantagesSection from './templates/VideoAdvantagesSection';
import PopularCategoriesSection from './templates/PopularCategoriesSection';


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
      title: "Boîte de production vidéo | Production vidéo professionnelle en France",
      description: "Boîte de production vidéo spécialisée dans la création de contenus professionnels pour les entreprises. Livraison rapide, multi-format, tournage partout en France.",
    };
  }

  // ✅ Define heroHeadlines array locally within generateMetadata
  const heroHeadlines = [
  "Boîte de production vidéo à {{city}} pour les entreprises qui veulent se démarquer.",
  "Boîte de production vidéo à {{city}} spécialisée dans la création de contenus professionnels.",
  "Boîte de production vidéo à {{city}} — qualité, réactivité et transparence.",
  "Boîte de production vidéo à {{city}} pour tous vos projets vidéo et communication visuelle.",
  "Boîte de production vidéo à {{city}} qui transforme vos idées en résultats concrets.",
  "Boîte de production vidéo à {{city}} — production, créativité et stratégie réunies.",
  "Boîte de production vidéo à {{city}} pour des vidéos claires, modernes et efficaces.",
  "Boîte de production vidéo à {{city}} au service de votre image de marque.",
  "Boîte de production vidéo à {{city}} — votre partenaire pour une communication vidéo cohérente.",
  "Boîte de production vidéo à {{city}} qui simplifie la production de vos contenus.",
  "Boîte de production vidéo à {{city}} pour des vidéos qui soutiennent vos objectifs business.",
  "Boîte de production vidéo à {{city}} — votre solution complète en production audiovisuelle.",
  "Boîte de production vidéo à {{city}} qui garantit une expérience fluide et professionnelle.",
  "Boîte de production vidéo à {{city}} pour des contenus percutants et adaptés à vos canaux.",
  "Boîte de production vidéo à {{city}} — expertise, fiabilité et créativité au service de votre marque."
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
      url: `https://asterakistudio.com/boite-de-production-video/${cityId}`,
      siteName: "Asteraki Studio",
      images: [
        {
          url: "/team_agency.webp",
          width: 1200,
          height: 630,
          alt: `Logo de Asteraki Studio, la boîte de production vidéo #1 à ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Boîte de production vidéo à ${city.name}`,
      description: heroHeadline,
      images: ["https://asterakistudio.com/logo.png"],
    },
    alternates: {
      canonical: `https://asterakistudio.com/boite-de-production-video/${cityId}`,
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
        
        {/* Hero Section */}
        <HeroSection heroContent={heroContent} />

        {/* Portfolio */}
        <PortfolioCarousel />
        
        {/* Services */}
        <ServicesSection/>

        {/* Pourquoi Asteraki */}
        <UspSection pageIdentifier="home-page" />

        {/* Process Section */}
        <ProcessSection processContent={processContent} />

        {/* Advantages Section */}
        <VideoAdvantagesSection />

        {/* Video types */}
        <PopularCategoriesSection />

        {/* Industries */}
        <IndustriesSection/>

        {/* Why Asteraki */}
        <WhyChooseSection whyChooseContent={whyChooseContent} />

        {/* FAQ */}
        <FaqSection faqItems={faqContent} />

        {/* Call to action */}
        <CtaSection ctaContent={ctaContent} />

      </main>
      <Footer />
    </>
  );
}