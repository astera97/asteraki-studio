// src/app/production-video-entreprise/[city]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Enterprise video–specific sections
import HeroSection from "./templates/HeroSection";
import PortfolioSection from "./templates/portfolio-section";
import WhyWorkEntrepriseSection from "./templates/WhyWorkEntrepriseSection";
import FaqSection from "./templates/FaqSection";
import CtaSection from "./templates/CtaSection";
import InvisibleInterlinkBlock from "./templates/InvisibleInterlinkBlock";

// Enterprise video production sections
import VideoEntrepriseSection from "./templates/VideoEntrepriseSection";
import VideoEntrepriseTeamSection from "./templates/VideoEntrepriseTeamSection";
import VideoEntrepriseProcessSection from "./templates/VideoEntrepriseProcessSection";
import VideoEntrepriseWhySection from "./templates/VideoEntrepriseWhySection";
import HowToCorporateVideoSection from "./templates/HowToCorporateVideoSection";
import PriceVideoEntrepriseSection from "./templates/PriceVideoEntrepriseSection";
// Data fetchers
import { getVideoEntreprise } from "./data/getVideoEntreprise";
import { getCorporateTeamSection } from "./data/getCorporateTeamSection";
import { getCorporateWhyNeeded } from "./data/getCorporateWhyNeeded";
import { getHowToCorporateVideo } from "./data/getHowToCorporateVideo";
import { getPriceVideoEntreprise } from "./data/getPriceVideoEntreprise";

// Existing data
import { CITIES } from "./data/cities";
import { getHeroContent } from "./data/getHeroContent";
import { getWhyWorkContent } from "./data/getWhyWorkContent";
import { getFaqContent } from "./data/getFaqContent";
import { getCtaContent } from "./data/getCtaContent";
import { getLocalSchema } from "./data/getLocalSchema";

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export async function generateStaticParams() {
  return CITIES.map(city => ({ city: city.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: cityId } = await params;
  const city = CITIES.find(c => c.id === cityId);
  
  if (!city) {
    return {
      title: "Production de vidéo d’entreprise | Asteraki",
      description: "Vidéos d’entreprise percutantes pour booster votre communication B2B. Rapide, efficace et impactant.",
    };
  }

  const heroHeadlines = [
    `Production de vidéo d'entreprise à {{city}} pour simplifier votre communication d’entreprise.`,
    `Production de vidéo d'entreprise à {{city}} pour entreprises : institutionnel, témoignages, événements.`,
    `Production de vidéo d'entreprise à {{city}} pour créer des contenus d’entreprise clairs et efficaces.`,
    `Production de vidéo d'entreprise à {{city}} : livraison rapide, multi-format et ROI mesurable.`,
    `Production de vidéo d'entreprise à {{city}} qui valorise vos projets et votre marque.`,
  ];

  const seed = simpleHash(city.name);
  const rawHeadline = heroHeadlines[seed % heroHeadlines.length];
  const heroHeadline = rawHeadline.replace(/{{city}}/g, city.name);

  return {
    title: `Production de vidéo d’entreprise à ${city.name} | Asteraki`,
    description: heroHeadline,
    openGraph: {
      title: `Production de vidéo d’entreprise à ${city.name}`,
      description: heroHeadline,
      type: "website",
      locale: "fr_FR",
      url: `https://asterakistudio.com/production-video-entreprise/${cityId}`,
      siteName: "Asteraki",
      images: [
        {
          url: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywgz2z1QVfVWtRqG5128kLSxdCylOInE6DP3Ac",
          width: 1200,
          height: 630,
          alt: `Production de vidéo d’entreprise à ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Production de vidéo d’entreprise à ${city.name}`,
      description: heroHeadline,
      images: ["https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywgz2z1QVfVWtRqG5128kLSxdCylOInE6DP3Ac"],
    },
    alternates: {
      canonical: `https://asterakistudio.com/production-video-entreprise/${cityId}`,
    },
  };
}

export default async function EntrepriseVideoCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityId } = await params;
  const cityData = CITIES.find(c => c.id === cityId);
  if (!cityData) return notFound();

  const cityDisplayName = cityData.name;

  // Fetch enterprise video content
  const heroContent = getHeroContent(cityDisplayName);
  const entrepriseVideo = getVideoEntreprise(cityId);
  const teamSection = getCorporateTeamSection(cityId);
  const whyNeededSection = getCorporateWhyNeeded(cityId);
  const howToSection = getHowToCorporateVideo(cityDisplayName);
  const whyWorkContent = getWhyWorkContent(cityDisplayName);
  const faqContent = getFaqContent(cityDisplayName);
  const ctaContent = getCtaContent(cityId, cityDisplayName);
  const localSchema = getLocalSchema(cityId);
  const priceSection = getPriceVideoEntreprise(cityDisplayName);


  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {localSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
          />
        )}

        <HeroSection heroContent={heroContent} />
        <VideoEntrepriseSection data={entrepriseVideo} />
        <PortfolioSection city={cityDisplayName} />
        <VideoEntrepriseWhySection city={cityDisplayName} content={whyNeededSection} />
        <VideoEntrepriseTeamSection city={cityDisplayName} data={teamSection} />
        <VideoEntrepriseProcessSection city={cityDisplayName} />
        <WhyWorkEntrepriseSection whyWorkContent={whyWorkContent} />
        <FaqSection cityName={cityDisplayName} faqItems={faqContent.faqItems} />
        <CtaSection ctaContent={ctaContent} cityName={cityDisplayName} />
        <HowToCorporateVideoSection city={cityDisplayName} data={howToSection} />
        <InvisibleInterlinkBlock currentCityId={cityId} />
        <PriceVideoEntrepriseSection data={priceSection} />
      </main>
      <Footer />
    </>
  );
}
