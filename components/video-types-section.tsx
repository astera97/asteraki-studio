"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface VideoType {
  id: string
  title: string
  description: string
  image: string
  link?: string  // Added optional link property
}

const videoTypes: VideoType[] = [
  {
    id: "motion-design",
    title: "Motion Design",
    description: "Transformez vos diapositives en contenus percutants.",
    image: "/illustration_vt.webp?height=200&width=300&text=Motion+Design",
    link: "/motion-design",  // Custom link
  },
  {
    id: "recruitment-video",
    title: "Vidéo de Recrutement",
    description: "Scale your social media design effortlessly.",
    image: "/social_ads_vt.webp?height=200&width=300&text=Social+Media",
    link: "/production-video-recrutement",  // Default pattern
  },
  {
    id: "crowdfunding-video",
    title: "Vidéo de financement",
    description: "Gagnez en visibilité avec des vidéos sociales mensuelles.",
    image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywC58mNn6dH7rVT25qFa9GQY8gkxhfvsZSXJMC?height=200&width=300&text=Social+Video",
    link: "/production-video-financement",  // Default pattern
  },
  {
    id: "app-video",
    title: "Vidéo d'Application",
    description: "Visualisez vos applications, produits digitaux, interfaces et workflows.",
    image: "/app_vt.webp?height=200&width=300&text=App+Video",
    link: "/production-video-application",  // Default pattern
  },
  {
    id: "brand-video",
    title: "Vidéo de Marque",
    description: "Contenu personnalisé et sur mesure pour votre prochaine campagne.",
    image: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywciX7BI0w7eqHupO4CMz98UaWrhviA3ItxKEd  ",
    link: "/production-video-marque",  // Default pattern
  },
  {
    id: "explainer-video",
    title: "Vidéo Explicative",
    description: "Simplifiez les concepts complexes avec des animations engageantes.",
    image: "/tutorial_vt.webp?height=200&width=300&text=Explainer+Video",
    link: "/production-video-explicative",  // Default pattern
  },
  {
    id: "product-demo",
    title: "Démonstration Produit",
    description: "Mettez en valeur les fonctionnalités de votre produit en action.",
    image: "/overview_vt.webp?height=200&width=300&text=Product+Demo",
    link: "/production-video-demonstration-produit",  // Default pattern
  },
  {
    id: "customer-story",
    title: "Témoignage Client",
    description: "Renforcez la confiance avec des histoires clients authentiques.",
    image: "/testimonial_vt.webp?height=200&width=300&text=Testimonial",
    link: "/production-video-temoignage-client",  // Default pattern
  },
  {
    id: "event-video",
    title: "Vidéos d'Événement",
    description: "Capturez vos moments clés pendant vos événements.",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVawLVXGpZsONX0DMj54Vk3gxKWAvEe9Tmohn6  ",
    link: "/production-video-evenementielle",  // Default pattern
  },

]

export default function VideoTypesSection() {
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const cardWidth = 284 // 280px card + 4px gap
  const totalOriginalWidth = videoTypes.length * cardWidth

  // Create multiple copies for seamless infinite scrolling
  const extendedVideoTypes = [
    ...videoTypes,
    ...videoTypes,
    ...videoTypes,
    ...videoTypes,
    ...videoTypes, // 5 copies to ensure smooth infinite scroll
  ]

  const nextSlide = () => {
    if (isDragging) return
    setTranslateX((prev) => {
      const newTranslateX = prev - cardWidth
      // Reset position seamlessly when we've moved through one full set
      if (Math.abs(newTranslateX) >= totalOriginalWidth * 2) {
        return -totalOriginalWidth
      }
      return newTranslateX
    })
  }

  const prevSlide = () => {
    if (isDragging) return
    setTranslateX((prev) => {
      const newTranslateX = prev + cardWidth
      // Reset position seamlessly when we've moved back through one full set
      if (newTranslateX >= 0) {
        return -totalOriginalWidth
      }
      return newTranslateX
    })
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    setDragOffset(0)
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const currentOffset = e.clientX - dragStart
    setDragOffset(currentOffset)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (containerRef.current) {
      containerRef.current.style.cursor = "grab"
    }

    // Determine if we should snap to next/previous slide based on drag distance
    const threshold = cardWidth / 3 // Minimum drag distance to trigger slide change

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right, go to previous slide
        setTranslateX((prev) => {
          const newTranslateX = prev + cardWidth
          if (newTranslateX >= 0) {
            return -totalOriginalWidth
          }
          return newTranslateX
        })
      } else {
        // Dragged left, go to next slide
        setTranslateX((prev) => {
          const newTranslateX = prev - cardWidth
          if (Math.abs(newTranslateX) >= totalOriginalWidth * 2) {
            return -totalOriginalWidth
          }
          return newTranslateX
        })
      }
    }

    setDragOffset(0)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setDragStart(e.touches[0].clientX)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentOffset = e.touches[0].clientX - dragStart
    setDragOffset(currentOffset)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = cardWidth / 3

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        setTranslateX((prev) => {
          const newTranslateX = prev + cardWidth
          if (newTranslateX >= 0) {
            return -totalOriginalWidth
          }
          return newTranslateX
        })
      } else {
        setTranslateX((prev) => {
          const newTranslateX = prev - cardWidth
          if (Math.abs(newTranslateX) >= totalOriginalWidth * 2) {
            return -totalOriginalWidth
          }
          return newTranslateX
        })
      }
    }

    setDragOffset(0)
  }

  return (
    <>
      {/* Header Section with constrained width */}
      <section className="py-16 sm:py-20 md:py-24 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
        <div className="max-w-[1300px] mx-auto px-4">
          {/* Header Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            {/* Left - Title */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Votre équipe créative 
                
                tout-en-un pour la production vidéo
              </h2>
            </div>

            {/* Right - Description */}
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Dites adieu à la gestion des freelances et aux cycles de révisions interminables. 
                Notre équipe s'intègre parfaitement à votre équipe interne, agissant comme votre département créatif dédié. 
                Nous livrons des résultats exceptionnels de manière efficace, en éliminant les défis liés aux ressources et en donnant vie à votre vision sans stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Carousel Section */}
      <section className="bg-black pb-16 sm:pb-20 md:pb-24">
        <div className="relative overflow-hidden">
          {/* Navigation Arrows - Orange colored at very edges */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
          </button>

          {/* Cards Container - Full Width with drag support */}
          <div className="w-full overflow-hidden px-12 sm:px-16">
            <div
              ref={containerRef}
              className={`flex gap-3 sm:gap-4 select-none ${isDragging ? "" : "transition-transform duration-500 ease-in-out"}`}
              style={{
                transform: `translateX(${translateX - totalOriginalWidth + dragOffset}px)`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {extendedVideoTypes.map((videoType, index) => (
                <Link
                  key={`${videoType.id}-${index}`}
                  href={videoType.link || `/services/${videoType.id}`}
                  className="flex-shrink-0 bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  style={{ width: "260px", minWidth: "260px" }}
                  draggable={false}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={videoType.image || "/placeholder.svg"}
                      alt={videoType.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      draggable={false}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{videoType.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{videoType.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}