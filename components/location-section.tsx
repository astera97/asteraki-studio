import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


export default function LocationSection() {
  return (
    <section style={{ backgroundColor: "#111111" }} className="py-24 text-white">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-white rounded-full text-sm font-medium text-white uppercase tracking-wider">
              LOCALISATION
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Découvrez nos bureaux principaux
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Avec des bureaux à Paris, Lyon et Marseille, nous sommes parfaitement positionnés 
            <br />
            pour répondre à vos besoins de production vidéo en France.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Paris */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <div className="aspect-[4/3] relative">
              <Image
                src="/paris_office.webp?height=300&width=400&text=Office+Paris"
                alt="Bureau de Paris"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-medium">Bureau de Paris</h3>
              </div>
            </div>
          </div>

          {/* Lyon */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <div className="aspect-[4/3] relative">
              <Image
                src="/new_york_office.webp?height=300&width=400&text=Office+Rennes"
                alt="Bureau de Lyon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-medium">Bureau de Lyon</h3>
              </div>
            </div>
          </div>

          {/* Marseille */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <div className="aspect-[4/3] relative">
              <Image
                src="/sf_office.webp?height=300&width=400&text=Office+Paris"
                alt="Bureau de Marseille"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-medium">Bureau de Marseille</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/contact" passHref>
      <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
        Obtenir un devis
      </Button>
    </Link>
        </div>
      </div>
    </section>
  )
}