"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import PortfolioModal from "./portfolio-modal"

interface CarouselItem {
  id: string
  image: string
  title: string
  videoUrl?: string
  description?: string
  subtitle?: string
  services?: string[]
}

interface PortfolioCarouselProps {
  items?: CarouselItem[]
  autoplay?: boolean
  autoplayInterval?: number
  onSlideChange?: (index: number) => void
}

const defaultItems: CarouselItem[] = [
  {
    id: "1",
    image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
    title: "Uber",
    subtitle: "Témoignage client",
    videoUrl: "https://vimeo.com/1104750452",
    description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
  },
  {
    id: "2",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV2AB1ak7WJBOGwHyYpLQ8mtukDFsr9nVZ07eK",
    title: "Kuehne+Nagel",
    subtitle: "Démonstration produit",
    videoUrl: "https://vimeo.com/1111696360",
    description: "Vidéo explcative sur la solution de Kuehne+Nagel, myFairLOG.",
    services: ["Scénario", "Motion design", "Storyboard"],
  },
  {
    id: "3",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnA96qWDx46ydSpE25FeO3PBXUsDz80LqGmi7",
    title: "Geodis",
    subtitle: "Vidéo explicative",
    videoUrl: "https://vimeo.com/1114621314",
    description: "Vidéo explcative sur le processus de Geodis.",
    services: ["Scénario", "Motion design", "Storyboard"],
  },
  {
    id: "4",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsLcFyba93bxoLyhcW8aNnVRf0tO2vu4mHdZ",
    title: "Deloitte",
    subtitle: "Vidéo de recrutement",
    videoUrl: "https://vimeo.com/1114334550",
    description: "Campagne de recrutement pour Deloitte, Women in Tech.",
    services: ["Tournage", "Graphismes animés", "Étalonnage des couleurs"],
  },
]

export function PortfolioCarousel({
  items = defaultItems,
  autoplay = true,
  autoplayInterval = 8000,
  onSlideChange,
}: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplayActive, setIsAutoplayActive] = useState(autoplay)
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoplayActive) {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
      return
    }

    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoplayInterval)

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [isAutoplayActive, items.length, autoplayInterval])

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)
    setIsAutoplayActive(false)
  }

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)
    setIsAutoplayActive(false)
  }

  const openModalWithAnimation = (item: CarouselItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="relative w-screen bg-black py-8 sm:py-12 lg:py-8 -mx-[calc(50vw-50%)]">
        {/* Title and Description Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-white pt-12">
              Découvrez nos services de production audiovisuelle pour les entreprises
            </h2>
            <p className="text-white/80 text-normal sm:text-lg max-w-4xl mx-auto leading-relaxed">
              Produire des vidéos ne suffit plus. Il est désormais crucial de choisir les bons formats,
              d’en maîtriser les codes, et de développer des idées créatives pertinentes
              pour optimiser l’impact de vos contenus.
            </p>
          </div>
        </div>

        {/* Carousel Container - New wrapper for proper arrow positioning */}
        <div className="relative">
          <div className="flex items-center justify-center min-h-80 sm:min-h-96 lg:min-h-[500px]">
            {/* Left Navigation Arrow - Positioned relative to carousel container */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4 sm:gap-6 pl-4 sm:pl-8 lg:pl-12">
              <button
                onClick={handlePrev}
                className="text-white hover:text-gray-300 transition-colors p-1.5 sm:p-2 hover:bg-white/10 rounded-full"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="relative w-screen h-80 sm:h-96 lg:h-[500px] overflow-hidden">
              <div className="flex w-full h-full items-center">
                {items.map((item, index) => {
                  const offset = (index - currentIndex + items.length) % items.length
                  const isCenter = offset === 0
                  const isLeft = offset === items.length - 1
                  const isRight = offset === 1

                  let positionClass = ""
                  if (isLeft) {
                    positionClass = "left-0"
                  } else if (isCenter) {
                    positionClass = "left-1/2 -translate-x-1/2"
                  } else if (isRight) {
                    positionClass = "right-0"
                  } else {
                    positionClass = "left-full"
                  }

                  const opacityClass = isCenter ? "opacity-100" : "opacity-30"
                  const visibilityClass = !isCenter && !isLeft && !isRight ? "hidden" : ""

                  // Adjust widths slightly to accommodate spacing
                  const widthClass = isCenter ? "w-[58%]" : "w-[19%]"

                  return (
                    <div
                      key={item.id}
                      className={`absolute will-change-transform h-full transition-all duration-500 ease-in-out ${positionClass} ${visibilityClass} ${widthClass} ${opacityClass} px-1 sm:px-2`}
                    >
                      <div
                        className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
                        onClick={() => openModalWithAnimation(item)}
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover transform-gpu"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 transform-gpu"></div>

                        {/* Title */}
                        <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white text-lg sm:text-xl lg:text-2xl font-semibold transform-gpu">
                          {item.title}
                        </div>

                        {isCenter && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              openModalWithAnimation(item)
                            }}
                            className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-orange-400 rounded-full backdrop-blur-sm transition-colors duration-300 transform-gpu"
                            aria-label="Play video"
                          >
                            <Play size={18} className="text-white ml-0.5 sm:w-5 sm:h-5 fill-current" />
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Navigation Arrow - Positioned relative to carousel container */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pr-4 sm:pr-8 lg:pr-12">
              <button
                onClick={handleNext}
                className="text-white hover:text-gray-300 transition-colors p-1.5 sm:p-2 hover:bg-white/10 rounded-full"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          
        </div>
      </div>

      {selectedItem && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedItem.title}
          subtitle={selectedItem.subtitle}
          description={selectedItem.description || ""}
          services={selectedItem.services}
          vimeoUrl={selectedItem.videoUrl || ""}
        />
      )}
    </>
  )
}