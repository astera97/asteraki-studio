import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "./portfolio-section"
import VideoFAQSection from "./video-faq"
import FinalCTASection from "./video-cta"
import Script from "next/script"

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Agence Vidéo Professionnelle | Production Vidéo Sur Mesure - Asteraki Studio",
    description:
      "Création de vidéos professionnelles impactantes pour renforcer votre communication. Expertise technique et créative pour des résultats qui transforment votre image et boostent votre croissance.",
    alternates: {
      canonical: "https://asterakistudio.com/agence-video-professionnelle"
    },
    openGraph: {
      title: "Agence Vidéo Professionnelle | Production Vidéo Sur Mesure - Asteraki Studio",
      description: "Création de vidéos professionnelles impactantes pour renforcer votre communication. Expertise technique et créative pour des résultats qui transforment votre image.",
      url: "https://asterakistudio.com/agence-video-professionnelle",
      siteName: "Asteraki Studio",
      images: [
        {
          url: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVZgrZvGsT3M8YKQp7XOUWxIjLVJhstl1Gv6iq",
          width: 1200,
          height: 630,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
  }
}

export default function VideoProductionPage() {
  // Structured data for LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "VideoProductionAgency",
    "name": "Asteraki Studio",
    "image": "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVZgrZvGsT3M8YKQp7XOUWxIjLVJhstl1Gv6iq",
    "@id": "https://asterakistudio.com/agence-video-professionnelle",
    "url": "https://asterakistudio.com",
    "telephone": "+33276555123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Rue Jeanne d'Arc",
      "addressLocality": "Rouen",
      "postalCode": "76000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.4432,
      "longitude": 1.0993
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "€€€",
    "description": "Agence de production vidéo professionnelle créant des contenus impactants pour les entreprises",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Clients satisfaits"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    }
  }

  return (
    <>
      {/* Structured Data */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>

      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Hero Section */}
        <section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <div className="text-sm font-semibold text-black mb-3 tracking-widest">
                  PRODUCTION VIDÉO PROFESSIONNELLE
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                  Des Vidéos Professionnelles qui Transforment Votre Communication.
                </h1>
                <p className="text-normal mb-5">
                  Chez Asteraki Studio, nous combinons expertise technique et créativité pour produire des vidéos professionnelles qui captivent votre audience et renforcent votre image de marque. Notre processus rigoureux et collaboratif vous garantit un résultat qui correspond parfaitement à vos objectifs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg">
                      Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center h-96">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywO1YZG6DldM8Th1Y46jXqf7KG5xJvzIoicVbS" type="video/mp4" />
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
                Nous avons accompagné plus de 250 entreprises en France
              </p>
        
              {/* Logo Carousel */}
              <div className="relative overflow-hidden mb-8 sm:mb-12">
                {/* Left fade gradient */}
                <div
                  className="absolute left-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(237, 237, 237, 0), transparent)",
                  }}
                ></div>
                {/* Right fade gradient */}
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

        <ServicesSection />

        {/* Our Process Section */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                Notre Processus de Production Vidéo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour des résultats exceptionnels
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Stratégie et Briefing</h3>
                <p className="text-gray-600">
                  Nous commençons par comprendre vos objectifs, votre public cible et vos défis. Ensemble, nous définissons les KPI à atteindre et la stratégie créative adaptée à vos besoins.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Création et Production</h3>
                <p className="text-gray-600">
                  Notre équipe réalise le scénario, le storyboard, le tournage et le montage avec un souci constant de qualité. Nous vous présentons régulièrement des jalons pour validation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Livraison et Optimisation</h3>
                <p className="text-gray-600">
                  Nous livrons votre vidéo dans les formats adaptés à vos canaux de diffusion et vous accompagnons pour optimiser son utilisation et mesurer son impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Pourquoi Choisir Notre Agence Vidéo ?
                </h2>
                <div className="text-lg text-black leading-relaxed space-y-6">
                  <p>
                    Dans un marché saturé de prestataires vidéo, nous nous distinguons par notre approche rigoureuse et professionnelle. Nous ne créons pas simplement des vidéos - nous développons des solutions de communication qui répondent à des objectifs business clairs.
                  </p>
                  <p>
                    Nos clients constatent en moyenne <strong>35% d'engagement accru</strong> avec leur public cible après l'intégration de nos vidéos stratégiques, et <strong>28% de leads qualifiés supplémentaires</strong> sur leurs canaux digitaux.
                  </p>
                  <p>
                    Nous mettons notre expertise à votre service pour créer des contenus qui <strong>captent l'attention, renforcent la notoriété de votre marque et génèrent des résultats mesurables</strong>.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg">
                      Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/video-production-process.webp"
                    alt="Processus de production vidéo professionnelle"
                    width={800}
                    height={450}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                    Notre processus de production vidéo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-24" style={{ backgroundColor: "#ffffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Notre Expertise en Production Vidéo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions vidéo sur mesure pour répondre à vos besoins spécifiques
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Vidéo corporate",
                  title: "Vidéo Corporate",
                  desc: "Présentez votre entreprise avec professionnalisme. Nous créons des vidéos qui racontent votre histoire, vos valeurs et votre vision pour renforcer votre image de marque et inspirer confiance.",
                  url: "/services/video-corporate"
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Vidéo de démonstration",
                  title: "Vidéo de Démonstration",
                  desc: "Montrez plutôt que vous ne dites. Nos vidéos de démonstration mettent en avant vos produits ou services de manière claire et engageante pour augmenter vos conversions.",
                  url: "/services/video-demonstration"
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Vidéo explicative",
                  title: "Vidéo Explicative",
                  desc: "Simplifiez les concepts complexes. Nos animations et vidéos explicatives transforment les informations techniques en contenus accessibles et mémorables pour votre audience.",
                  url: "/services/video-explicative"
                },
              ].map((item, idx) => (
                <Link 
                  key={idx}
                  href={item.url}
                  className="block text-left border border-black rounded-3xl p-12 bg-beige-200 hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-16 h-16 mb-8">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain invert-0 sepia saturate-200 hue-rotate-12"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-black mb-8 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center text-orange-500 font-semibold">
                    En savoir plus
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Case Studies Section */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
                RÉSULTATS CONCRÊTS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comment Nos Vidéos Ont Transformé la Communication de Nos Clients
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez comment nos solutions vidéo ont aidé nos clients à atteindre leurs objectifs business
              </p>
            </div>

            <div className="space-y-24">
              {/* Case Study 1 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
                    Secteur de la santé
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    42% Plus d'Engagement et 35% Plus de Demandes de Contact
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Un laboratoire pharmaceutique avait besoin de simplifier la présentation de ses technologies complexes pour des audiences multiples (professionnels de santé, patients, investisseurs).
                  </p>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Nous avons créé une série de vidéos explicatives adaptées à chaque public cible. Résultat : <strong>42% d'engagement accru</strong> sur leurs canaux digitaux et <strong>35% de demandes de contact supplémentaires</strong> grâce à une communication plus claire et engageante.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full">Vidéo explicative</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full">Segmentation de public</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full">Marketing digital</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden border border-gray-600">
                    <Image
                      src="/case-study-healthcare.jpg"
                      alt="Laboratoire pharmaceutique"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                      Vidéo explicative pour le secteur de la santé
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-start">
                <div className="relative order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden border border-gray-600">
                    <Image
                      src="/case-study-restaurant.jpg"
                      alt="Restaurant"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                      Vidéo de présentation pour restaurant
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-4 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-4">
                    Restauration
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    38% Plus de Réservations et 29% Plus d'Engagement sur les Réseaux
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Un restaurant gastronomique souhaitait attirer une clientèle plus jeune et augmenter ses réservations en ligne.
                  </p>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Nous avons créé une vidéo de présentation dynamique mettant en avant l'ambiance, les plats signature et l'équipe. Résultat : <strong>38% d'augmentation des réservations</strong> et <strong>29% plus d'engagement sur les réseaux sociaux</strong> grâce à une vidéo qui capture l'essence de l'établissement.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full">Vidéo de présentation</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full">Contenu engageant</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full">Marketing digital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <VideoFAQSection />

        {/* Final CTA Section */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}