// src/app/components/video-cta.tsx
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function FinalCTASection() {
  // Local Business Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoProductionAgency",
    "name": "Asteraki Studio",
    "description": "Agence de production vidéo professionnelle créant des contenus impactants pour les entreprises",
    "url": "https://asterakistudio.com",
    "logo": "/logos/asteraki-logo.png",
    "image": "/images/video-team-working.jpg",
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
    "telephone": "+33-2-76-55-51-23",
    "sameAs": [
      "https://www.linkedin.com/company/asteraki",
      "https://www.instagram.com/asterakistudio",
      "https://www.vimeo.com/asteraki"
    ],
    "founder": "Pierre-Louis Basse",
    "foundingDate": "2018",
    "priceRange": "€€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Carte bancaire, Virement",
    "availableLanguage": "Français, Anglais"
  }

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(schema)}
      </Script>

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-[1300px] mx-auto px-4">
          {/* Main CTA Card with Background Image */}
          <div className="relative rounded-[3rem] p-16 max-w-4xl mx-auto overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/video-cta-bg.jpg"
                alt="Production vidéo professionnelle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="max-w-2xl">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Prêt à Transformer Votre Communication ?
                  <br />
                  Créons Votre Vidéo.
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                  Notre processus collaboratif et professionnel vous garantit une vidéo qui répond à vos objectifs business. Obtenez une estimation personnalisée en 24 heures.
                </p>

                <Link href="/contact" passHref>
                  <Button className="btn-luxury border-0 px-8 py-3 rounded-full text-base sm:text-lg">
                    Obtenir un devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}