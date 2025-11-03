import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/services-section";
import VideoTypesSection from "@/components/video-types-section";
import ParisLocationsSection from "./locations"; // Assuming this component is generic enough
import ClientsSection from "@/components/clients-section";
import ParisVideoFAQSection from "./paris-video-faq"; // Updated import
import ParisVideoCTASection from "./paris-video-cta"; // Updated import
import ProcessTimelineSection from "./process-section";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    // Title includes the focus keyword
    title: "Production audiovisuelle à Paris | Asteraki Studio",
    // Description includes the focus keyword
    description:
      "Expert en production audiovisuelle à Paris. Vidéos sur mesure pour entreprises : institutionnelles, événementielles, recrutement. Livraison rapide, ROI garanti.",
    alternates: {
      canonical: "https://asterakistudio.com/production-audiovisuelle-paris", // Updated canonical
    },
    openGraph: {
      // Open Graph title includes the focus keyword
      title: "Production audiovisuelle à Paris | Asteraki Studio",
      // Open Graph description includes the focus keyword
      description:
        "Expert en production audiovisuelle à Paris. Vidéos sur mesure pour entreprises : institutionnelles, événementielles, recrutement. Livraison rapide, ROI garanti.",
      locale: "fr_FR",
      type: "website",
      url: "https://asterakistudio.com/production-audiovisuelle-paris", // Updated URL
    },
  };
};

export default function ParisVideoProductionPage() { // Updated function name
  return (
    <>
      {/* Schema — updated for Paris */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org", // Removed extra spaces
            "@type": "ProfessionalService",
            "name": "Asteraki Studio",
            "image": "https://asterakistudio.com/logo.png", // Removed extra spaces
            "url": "https://asterakistudio.com/production-audiovisuelle-paris", // Updated URL
            "telephone": "+33758116026",
            "serviceArea": [
              {
                "@type": "City",
                "name": "Paris",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "FR"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Île-de-France",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "FR"
                }
              }
            ],
            "areaServed": ["Paris", "Île-de-France"],
            "serviceType": "Production audiovisuelle",
            "description":
              "Production vidéo professionnelle pour entreprises à Paris et dans toute l'Île-de-France : témoignages clients, vidéos institutionnelles, recrutement, couverture d’événements.",
            "offers": {
              "@type": "Offer",
              "businessFunction": "ProvideService",
              "name": "Production audiovisuelle à Paris" // Updated name
            },
            "sameAs": ["https://www.linkedin.com/company/asteraki-studio"] // Removed extra spaces
          })
        }}
      />

      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Hero Section */}
        <section className="pt-16 pb-12" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                {/* H1 includes the focus keyword */}
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Société de production audiovisuelle à Paris pour entreprises
                </h1>
                {/* First paragraph of content includes the focus keyword */}
                <p className="text-normal mb-5">
                  En tant qu'équipe de <strong>production audiovisuelle à Paris</strong>, on se concentre sur la création de vidéos professionnelles sur mesure. Nous collaborons avec des entreprises de la région Île-de-France pour produire des contenus percutants : événements, témoignages, recrutement, institutionnel. Chaque projet est conçu pour être aligné avec votre stratégie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center h-96">
                  <video autoPlay loop muted className="w-full h-full object-cover">
                    <source
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy"
                      type="video/mp4"
                    />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={`${logo.name} logo`}
                        width={120}
                        height={40}
                        className="opacity-60 hover:opacity-80 transition-opacity object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Services */}
        <ServicesSection />

        {/* Process */}
        <ProcessTimelineSection />

        {/* Why Multi-Format Delivery is Essential */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  VOTRE VIDÉO, OPTIMISÉE POUR TOUS LES CANAUX
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Pourquoi nos services de <span className="text-orange-400">production audiovisuelle à Paris</span> incluent plusieurs formats?
                </h2>

                <p className="text-white mb-6 leading-relaxed">
                  Diffuser une vidéo sur plusieurs plateformes avec un seul fichier est inefficace. Chaque canal a ses propres exigences : durée, format, présence ou absence de son.
                  Notre <strong>production audiovisuelle à Paris</strong> vous fournit des versions optimisées pour maximiser votre impact et votre retour sur investissement.
                </p>

                <p className="text-white mb-10 leading-relaxed">
                  Contrairement à d'autres prestataires, <strong>la livraison multi-format est incluse dans notre offre</strong>. Vous ne payez pas de supplément pour des versions adaptées à vos besoins spécifiques.
                  C'est une caractéristique clé de notre <strong>production audiovisuelle à Paris</strong>, conçue pour répondre aux exigences de votre communication moderne.
                </p>

                {/* Numbered List Below Text */}
                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Maximise l'impact sur les réseaux sociaux</h3>
                      <p className="text-gray-400">Les vidéos optimisées pour chaque plateforme (carrées, verticales, avec ou sans son) obtiennent 3 à 5 fois plus d'engagement que les formats uniques non adaptés.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Économise du temps et des ressources</h3>
                      <p className="text-gray-400">Avoir plusieurs formats prêts à l'emploi vous évite de devoir retailler ou réencoder la vidéo pour chaque canal, gagnant ainsi des heures de travail interne.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Renforce la cohérence de marque</h3>
                      <p className="text-gray-400">Des versions créées par le même producteur garantissent une qualité visuelle et un ton constant sur tous vos supports de communication.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Stimule la conversion</h3>
                      <p className="text-gray-400">Des vidéos adaptées au comportement des utilisateurs sur chaque canal (court format sur LinkedIn, long format sur le site) augmentent les taux de conversion de 20 à 30%.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Optimise le référencement</h3>
                      <p className="text-gray-400">Publier du contenu vidéo optimisé sur divers canaux (site web, réseaux, e-mail) améliore la visibilité globale de votre marque et votre SEO.</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki Studio, notre approche de la production vidéo va au-delà de la simple création. Nous intégrons dès le départ la stratégie multi-canaux, vous offrant des formats variés sans coût supplémentaire, pour une communication vidéo percutante.
                </blockquote>

                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Video & Stats */}
              <div className="relative">
                {/* Main Video */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy" type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">+300%</div>
                    <p className="text-gray-400 text-sm">D'engagement potentiel avec formats adaptés</p>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">Inclus</div>
                    <p className="text-gray-400 text-sm">Aucun coût supplémentaire pour formats multiples</p>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
                    <p className="text-gray-400 text-sm">Formats livrés par projet moyen</p>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">+25%</div>
                    <p className="text-gray-400 text-sm">De taux de conversion typique avec la vidéo</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Types */}
        <VideoTypesSection />

        {/* Villes */}
        <ParisLocationsSection />

        {/* Client Section */}
        <ClientsSection />

        {/* FAQ */}
        <ParisVideoFAQSection />

        {/* CTA */}
        <ParisVideoCTASection />
      </main>
      <Footer />
    </>
  );
}