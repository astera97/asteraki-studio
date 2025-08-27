import HeroSection from "@/components/home/hero-section"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProcessTimeline from "@/components/shared/process-timeline"
import FAQSection from "@/components/shared/faq-section"
import ServicesSection from "@/components/services-section"
import VideoTypesSection from "@/components/video-types-section"
import LocationSection from "@/components/location-section"
import ClientsSection from "@/components/clients-section"
import AboutAgencySection from "@/components/about-agency-section"
import TeamSection from "@/components/team-section"
import IndustriesSection from "@/components/industries-section"
import FinalCTASection from "@/components/final-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#ffffffff" }}>
      <Header />

      <HeroSection />

      <ServicesSection />

      <ProcessTimeline />

      <AboutAgencySection />

      <VideoTypesSection />

      <IndustriesSection />

      <ClientsSection />

      <LocationSection />

      <FAQSection />

      <FinalCTASection />

      <Footer />
    </div>
  )
}
