import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Main CTA Card with Background Image */}
        <div className="relative rounded-[3rem] p-16 max-w-4xl mx-auto overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/cta_bg.svg?height=400&width=800&text=CTA+Background"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Main Content */}
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Besoin d'un devis pour
                <br />
                votre prochain projet ?
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-lg">
                Notre équipe répond à vos questions et crée des solutions personnalisées adaptées à vos besoins.
              </p>

              <Link href="/quiz" passHref>
      <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
        Obtenir un devis
      </Button>
    </Link>

            </div>

            {/* Floating Avatars */}
            <div className="absolute top-16 right-16 w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVTA9kki0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2"
                alt="Membre de l'équipe 1"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute top-32 right-32 w-14 h-14 rounded-full overflow-hidden">
              <Image
                src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV5j8jtbrsL7zTQVi2HU8O5SmBt4lP6dAIRbFv"
                alt="Membre de l'équipe 2"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute bottom-20 right-20 w-14 h-14 rounded-full overflow-hidden">
              <Image
                src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVZgrZvGsT3M8YKQp7XOUWxIjLVJhstl1Gv6iq"
                alt="Membre de l'équipe 3"
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