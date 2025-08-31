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

              <Link href="/contact" passHref>
      <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
        Obtenir un devis
      </Button>
    </Link>

            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}