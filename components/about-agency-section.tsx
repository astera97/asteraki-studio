import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutAgencySection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 text-black">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 border border-black rounded-full text-xs sm:text-sm font-medium text-black uppercase tracking-wider">
              L'Agence
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="/team_agency.webp?height=400&width=500&text=Team+Working"
                  alt="Équipe d'Asteraki sur le tournage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Agence de Production vidéo & motion design
            </h2>

            {/* Description */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-black text-base sm:text-lg leading-relaxed">
                Asteraki est une agence vidéo et de motion design spécialisée dans la production de contenus 
                audiovisuels sur mesure pour les entreprises. Avec des bureaux à Paris, Lyon, Marseille et Bordeaux, 
                notre équipe accompagne les marques à chaque étape — de la création de films d'entreprise 
                à la production de formats courts pour les réseaux sociaux.
              </p>

              <p className="text-black text-base sm:text-lg leading-relaxed">
                Nous produisons des vidéos promotionnelles, des interviews, des films d'entreprise, du motion design 
                et des contenus pour l'employeur brand. <Link href="/pourquoi-asteraki" className="text-orange-500">Notre mission</Link> : créer des vidéos percutantes conçues 
                pour soutenir vos objectifs de communication, de marketing et de recrutement.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link href="/contact" passHref>
                <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg">
                  Contactez-nous
                </Button>
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}