"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Client {
  name: string
  title: string
  company: string
  companyLogo: string
  testimonial: string
  avatar: string
}

const clients: Client[] = [
  {
    name: "Emi Erdeyli",
    title: "Senior Project Manager, LABA Global",
    company: "",
    companyLogo: "",
    testimonial: "Nous avons travaillé avec Asteraki sur une vidéo de marque pour notre campagne marketing, et l'expérience n'aurait pas pu être meilleure. L'équipe était incroyablement réactive, flexible et a apporté des idées créatives fraîches dès le premier jour. Même avec un délai serré, ils ont livré en avance sur le planning — et la vidéo finale a touché toutes les bonnes notes. Je recommanderais absolument Asteraki. Nous étions ravis du résultat !",
    avatar: "/emi.webp?height=80&width=80&text=OJ",
  },
  {
    name: "Stephanie Ngpy",
    title: "Head of Marketing, HSBC",
    company: "",
    companyLogo: "",
    testimonial:
      "Nous avons eu une excellente expérience en collaborant avec l'équipe d'Asteraki sur un ensemble de vidéos témoignages filmées dans leur studio pour notre convention annuelle. L'équipe était attentive, créative, efficace et a fourni des conseils précieux tout au long de la production. Ils ont vraiment compris nos besoins et ont rendu tout le processus fluide et agréable. Les vidéos finales ont dépassé nos espérances. C'était un vrai plaisir de travailler avec une équipe aussi professionnelle et talentueuse !",
    avatar: "/stephanie.webp?height=80&width=80&text=HS",
  },
  {
    name: "Laurent Deschaux",
    title: "Customer Success Manager, HP",
    company: "",
    companyLogo: "",
    testimonial:
      "Nous avons travaillé avec Asteraki sur une série de vidéos, et ils ont parfaitement réussi. Les vidéos finales étaient engageantes et correspondaient exactement à ce dont nous avions besoin. Toute l'équipe était formidable avec qui travailler. Ils étaient professionnels mais aussi très sympathiques, rendant le processus fluide du début à la fin. Ils ont respecté nos délais, travaillé dans notre budget et tout gardé sans stress. À la fin, ils ont vérifié que nous étions satisfaits, ce qui était une belle attention.",
    avatar: "/Laurent_deschaux.webp?height=80&width=80&text=CP",
  },
  {
    name: "Kayli Hankins",
    title: "Sales and Marketing Coordinator, Citadel",
    company: "",
    companyLogo: "",
    testimonial: "L'équipe d'Asteraki a vraiment compris nos défis et a livré des vidéos qui reflètent parfaitement notre identité de marque. Leur professionnalisme, leur créativité et leur attention aux détails ont joué un rôle clé pour nous aider à atteindre nos objectifs de communication. De la première réunion au rendu final, la collaboration a été fluide, efficace et inspirante. Nous nous sommes sentis soutenus à chaque étape, et les résultats ont dépassé nos attentes.",
    avatar: "/kayli.webp?height=80&width=80&text=SL",
  },
]

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Responsive card dimensions
  const cardWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? 280 : 340
  const cardGap = typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 32

  const canScrollLeft = currentIndex > 0
  const canScrollRight = currentIndex < clients.length - (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3)

  const nextSlide = () => {
    if (canScrollRight) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (canScrollLeft) {
      setCurrentIndex((prev) => prev - 1)
    }
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
    const threshold = (cardWidth + cardGap) / 3 // Minimum drag distance to trigger slide change

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right, go to previous slide
        if (canScrollLeft) {
          setCurrentIndex((prev) => prev - 1)
        }
      } else {
        // Dragged left, go to next slide
        if (canScrollRight) {
          setCurrentIndex((prev) => prev + 1)
        }
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

    const threshold = (cardWidth + cardGap) / 3

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        if (canScrollLeft) {
          setCurrentIndex((prev) => prev - 1)
        }
      } else {
        if (canScrollRight) {
          setCurrentIndex((prev) => prev + 1)
        }
      }
    }

    setDragOffset(0)
  }

  // Get card style based on its position relative to the active window
  const getCardStyle = (index: number) => {
    const activeStart = currentIndex
    const activeCards = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3
    const activeEnd = currentIndex + activeCards - 1

    if (index >= activeStart && index <= activeEnd) {
      // Active cards: full opacity and normal positioning
      return {
        opacity: 1,
        transform: `translateX(${-currentIndex * (cardWidth + cardGap) + dragOffset}px)`,
        transitionProperty: isDragging ? "none" : "all",
        transitionDuration: isDragging ? "0ms" : "0.8s",
        transitionTimingFunction: isDragging ? "ease" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: isDragging ? "0ms" : `${(index - activeStart) * 50}ms`,
      }
    } else if (index === activeStart - 1) {
      // Previous card (30% visible on the left)
      return {
        opacity: 0.5,
        transform: `translateX(${-currentIndex * (cardWidth + cardGap) + dragOffset}px)`,
        transitionProperty: isDragging ? "none" : "all",
        transitionDuration: isDragging ? "0ms" : "0.8s",
        transitionTimingFunction: isDragging ? "ease" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: isDragging ? "0ms" : "0ms",
      }
    } else if (index === activeEnd + 1) {
      // Next card (30% visible on the right)
      return {
        opacity: 0.5,
        transform: `translateX(${-currentIndex * (cardWidth + cardGap) + dragOffset}px)`,
        transitionProperty: isDragging ? "none" : "all",
        transitionDuration: isDragging ? "0ms" : "0.8s",
        transitionTimingFunction: isDragging ? "ease" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: isDragging ? "0ms" : "100ms",
      }
    } else {
      // Hidden cards
      return {
        opacity: 0,
        transform: `translateX(${-currentIndex * (cardWidth + cardGap) + dragOffset}px)`,
        transitionProperty: isDragging ? "none" : "all",
        transitionDuration: isDragging ? "0ms" : "0.8s",
        transitionTimingFunction: isDragging ? "ease" : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: isDragging ? "0ms" : "0ms",
      }
    }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 overflow-hidden bg-white">
      {/* Section Header - Centered with max-width */}
      <div className="max-w-[1300px] mx-auto px-4 mb-12 sm:mb-16">
        {/* Badge */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 border border-black rounded-full text-xs sm:text-sm font-medium text-black uppercase tracking-wider">
            CLIENTS
          </span>
        </div>

        {/* Title and Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-black">
            +100 Clients Satisfaits
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={prevSlide}
              disabled={!canScrollLeft}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-gray-300 text-gray-900 hover:bg-gray-100"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" draggable={false} />
            </button>
            <button
              onClick={nextSlide}
              disabled={!canScrollRight}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-gray-300 text-gray-900 hover:bg-gray-100"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" draggable={false} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Viewport - responsive width */}
        <div
          className="mx-auto overflow-hidden"
          style={{
            width: "min(1320px, 100vw)",
            paddingLeft: "max(0px, calc((100vw - 1320px) / 2))",
          }}
        >
          <div
            ref={containerRef}
            className={`flex gap-5 sm:gap-8 ${isDragging ? "cursor-grabbing" : "cursor-grab"} select-none`}
            style={{
              width: `${clients.length * (cardWidth + cardGap)}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white border-2 border-gray-200 select-none"
                style={{
                  userSelect: "none",
                  borderRadius: "20px",
                  padding: "20px",
                  width: `${cardWidth}px`,
                  ...getCardStyle(index),
                }}
              >
                {/* Client Info */}
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden">
                    <Image
                      src={client.avatar || "/placeholder.svg"}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      draggable={false}
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-medium text-gray-900">{client.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{client.title}</p>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="mb-4 sm:mb-6">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900" draggable={false}>
                    {client.companyLogo}
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed" draggable={false}>
                  {client.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays to create the fade effect on partial cards */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}