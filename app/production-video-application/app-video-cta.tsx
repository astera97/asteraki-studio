// src/app/services/app-video-production/app-video-cta.tsx
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AppVideoFinalCTASection() {
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
                alt="Équipe de production de vidéos d'applications"
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
              <h2 className="text-3xl xs:text-2xl sm:text-2xl lg:text-5xl font-bold leading-tight mb-4 xs:mb-6 sm:mb-8">
                Prêt à transformer votre
                <span className="text-orange-400 block mt-2">expérience utilisateur d'application ?</span>
              </h2>

              <p className="text-gray-300 text-base xs:text-lg leading-relaxed mb-6 xs:mb-8 sm:mb-12 max-w-lg">
                Notre équipe se spécialise dans la création de vidéos d'applications intuitives qui guident les utilisateurs à travers l'intégration, la découverte de fonctionnalités et les flux de travail avancés pour augmenter l'engagement et réduire les coûts d'assistance.
              </p>

              <Link href="/contact" passHref>
                <Button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                  Obtenir un script gratuit
                </Button>
              </Link>
            </div>

            {/* Avatars flottants - Positionnement optimisé pour mobile */}
            <div className="absolute top-4 right-1 xs:top-6 xs:right-4 sm:top-10 sm:right-10 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRY6y0WhV8xN4tsZSVcawW35TIh0CgyLOYHAi  "
                alt="Spécialiste des vidéos d'applications"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute top-10 right-16 xs:top-10 xs:right-20 sm:top-30 sm:right-32 w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMRYpodX6YLO1BSGiKj2D5WhHcuQrys4MloaJ  "
                alt="Expert en production de vidéos d'applications"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute bottom-10 right-1 xs:bottom-6 xs:right-6 sm:bottom-20 sm:right-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVWYoNQ4iEG0j4rIlZeaBmiPMNq6kRYybfWv2S  "
                alt="Éditeur de vidéos d'applications"
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