
import { Button } from "@/components/ui/button"
import Image from "next/image"

const teamPhotos = [
  { id: 1, src: "/placeholder.svg?height=300&width=300&text=Team+1", alt: "Équipe Yalp 1" },
  { id: 2, src: "/placeholder.svg?height=300&width=300&text=Team+2", alt: "Équipe Yalp 2" },
  { id: 3, src: "/placeholder.svg?height=300&width=300&text=Team+3", alt: "Équipe Yalp 3" },
  { id: 4, src: "/placeholder.svg?height=300&width=300&text=Team+4", alt: "Équipe Yalp 4" },
  { id: 5, src: "/placeholder.svg?height=300&width=300&text=Team+5", alt: "Équipe Yalp 5" },
  { id: 6, src: "/placeholder.svg?height=300&width=300&text=Team+6", alt: "Équipe Yalp 6" },
  { id: 7, src: "/placeholder.svg?height=300&width=300&text=Team+7", alt: "Équipe Yalp 7" },
  { id: 8, src: "/placeholder.svg?height=300&width=300&text=Team+8", alt: "Équipe Yalp 8" },
  { id: 9, src: "/placeholder.svg?height=300&width=300&text=Team+9", alt: "Équipe Yalp 9" },
  { id: 10, src: "/placeholder.svg?height=300&width=300&text=Team+10", alt: "Équipe Yalp 10" },
  { id: 11, src: "/placeholder.svg?height=300&width=300&text=Team+11", alt: "Équipe Yalp 11" },
  { id: 12, src: "/placeholder.svg?height=300&width=300&text=Team+12", alt: "Équipe Yalp 12" },
]

export default function TeamSection() {
  return (
    <section style={{ backgroundColor: "#111111" }} className="py-24 text-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-gray-600 rounded-full text-sm font-medium text-gray-300 uppercase tracking-wider">
              À PROPOS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-12">
            Nous sommes <em className="italic font-bold">passionnés</em>
            <br />
            et ça se ressent
          </h2>

          {/* CTA Button */}
          <Button className="btn-luxury text-white hover:text-white border-0 px-8 py-3 rounded-full text-lg mb-16">
            Découvrir notre agence
          </Button>
        </div>
      </div>

      {/* Photo Carousels - Full Width */}
      <div className="space-y-8">
        {/* First Row - Right to Left */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-reverse">
            {/* First set of photos */}
            {teamPhotos.slice(0, 6).map((photo) => (
              <div key={`first-${photo.id}`} className="flex-shrink-0 w-80 mx-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {teamPhotos.slice(0, 6).map((photo) => (
              <div key={`first-dup-${photo.id}`} className="flex-shrink-0 w-80 mx-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}

            {/* Third set for extra seamless loop */}
            {teamPhotos.slice(0, 6).map((photo) => (
              <div key={`first-trip-${photo.id}`} className="flex-shrink-0 w-80 mx-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Left to Right */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of photos */}
            {teamPhotos.slice(6, 12).map((photo) => (
              <div key={`second-${photo.id}`} className="flex-shrink-0 w-80 mx-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {teamPhotos.slice(6, 12).map((photo) => (
              <div key={`second-dup-${photo.id}`} className="flex-shrink-0 w-80 mx-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}

            {/* Third set for extra seamless loop */}
            {teamPhotos.slice(6, 12).map((photo) => (
              <div key={`second-trip-${photo.id}`} className="flex-shrink-0 w-80 mx-4">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
