import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Carte CTA principale avec image de fond */}
        <div className="relative rounded-[3rem] p-6 sm:p-10 md:p-16 max-w-4xl mx-auto overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/cta_bg.svg"
                alt="Équipe de production vidéo travaillant sur un projet"
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
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                Prêt à créer votre
                <span className="text-orange-400 block mt-2">vidéo de marque primée ?</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 sm:mb-12 max-w-lg">
                Notre équipe d'experts vidéo est prête à vous aider à créer un récit de marque percutant qui transforme les spectateurs en clients.
              </p>

              <Link href="/contact" passHref>
                <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                  Parler à un expert
                </Button>
              </Link>
            </div>

            {/* Avatars flottants - Positionnement responsive */}
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywworbnbXp8bKgyaVXAm3Widen0SEzUPqYQGJF  "
                alt="Spécialiste de production vidéo"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute top-20 right-20 sm:top-40 sm:right-32 w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywciX7BI0w7eqHupO4CMz98UaWrhviA3ItxKEd  "
                alt="Directeur créatif"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute bottom-6 right-20 sm:bottom-20 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-500/30">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywp7yzsFIpEkOY8D0GBumXaioq9CjFLZxsPM1b  "
                alt="Éditeur vidéo"
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