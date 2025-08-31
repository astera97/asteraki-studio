import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Main CTA Card with Background Image */}
        <div className="relative rounded-[3rem] p-6 sm:p-10 md:p-16 max-w-4xl mx-auto overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/cta_bg.svg"
                alt="Équipe de production vidéo Asteraki"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Main Content */}
            <div className="max-w-xl">
              <h2 className="text-2xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-6 xs:mb-6 sm:mb-8">
                Prêt à amplifier votre vidéo
                <span className="text-orange-400 block mt-2">à l'échelle mondiale ?</span>
              </h2>

              <p className="text-gray-300 text-base xs:text-lg leading-relaxed mb-6 xs:mb-8 sm:mb-12 max-w-lg">
                Notre équipe se spécialise dans la création de vidéos d'entreprise authentiques qui maintiennent l'intégrité de la marque à travers les marchés mondiaux tout en délivrant un ROI mesurable grâce à des processus de production de niveau entreprise et des systèmes vidéo stratégiques.
              </p>

              <Link href="/quiz" passHref>
                <Button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                  Estimer votre projet
                </Button>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
