import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Carte CTA principale avec image de fond */}
        <div className="relative rounded-[3rem] p-6 sm:p-10 md:p-16 max-w-4xl mx-auto overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/cta_bg.svg"
                alt="Équipe de production de vidéos témoignages clients"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
            </div>
          </div>

          {/* Contenu */}
          <div className="relative z-10">
            {/* Contenu principal */}
            <div className="max-w-xl">
              <h2 className="text-2xl xs:text-2xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-4 xs:mb-6 sm:mb-8">
                Prêt à réaliser vos
                <span className="text-orange-400 block mt-2">témoignages clients les plus puissants ?</span>
              </h2>

              <p className="text-gray-300 text-base xs:text-lg leading-relaxed mb-6 xs:mb-8 sm:mb-12 max-w-lg">
                Notre équipe se spécialise dans la création de vidéos de témoignages clients authentiques qui renforcent la confiance, démontrent de vrais résultats et convertissent les prospects en clients.
              </p>

              <Link href="/contact" passHref>
                <Button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                  Estimer votre projet
                </Button>
              </Link>
            </div>

            {/* Avatars flottants - Positionnement optimisé pour mobile */}
            <div className="absolute top-4 right-1 xs:top-6 xs:right-4 sm:top-10 sm:right-10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywJaeBiHsXNLP2QdFWhK9OvG3Rr0fZVD4Htsme"
                alt="Spécialiste des interviews clients"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute top-20 right-16 xs:top-20 xs:right-20 sm:top-40 sm:right-32 w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtSZvvQ134vBTOxF8dARqINU9EX5yck2foZjG"
                alt="Expert en développement de récits"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute bottom-10 right-1 xs:bottom-6 xs:right-6 sm:bottom-20 sm:right-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywqSo613yucagDQM1fypRjomx7Ct05zsVwrhkY"
                alt="Éditeur de vidéos témoignages"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}