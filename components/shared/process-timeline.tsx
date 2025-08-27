"use client"

import React from "react"
import type { ReactNode } from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronRight, Star, Pencil, Square, Camera, Edit } from "lucide-react"
import Image from "next/image"

interface ProcessStage {
  id: string
  title: string
  icon: ReactNode
  heading: string
  description: string
  image: string
}

const stages: ProcessStage[] = [
  {
    id: "kick-off",
    title: "Kick-off",
    icon: <Star className="w-6 h-6" />,
    heading: "Lancer votre projet vidéo",
    description:
      "Le kick-off démarre officiellement votre projet vidéo. Nous alignons les objectifs, le public, le message clé et les besoins techniques pour définir une direction claire.",
    image: "/kickoff_process.webp?height=300&width=400&text=Kick-off+Meeting",
  },
  {
    id: "conception",
    title: "Conception",
    icon: <Pencil className="w-6 h-6" />,
    heading: "Développer le concept créatif",
    description:
      "Durant la conception, nous transformons vos idées en vision créative, en définissant le storytelling, les visuels, le ton et le style artistique.",
    image: "/conception_process.webp?height=300&width=400&text=Creative+Concept",
  },
  {
    id: "pre-production",
    title: "Pré-production",
    icon: (
      <div className="flex gap-1">
        <Square className="w-3 h-3" />
        <Square className="w-3 h-3" />
      </div>
    ),
    heading: "Planifier soigneusement la production de votre vidéo",
    description:
      "La pré-production planifie chaque détail : lieux, équipe, permis, planning et logistique pour assurer un tournage fluide et maîtrisé.",
    image: "/pre-production_process.webp?height=300&width=400&text=Pre-production+Planning",
  },
  {
    id: "production",
    title: "Production",
    icon: <Camera className="w-6 h-6" />,
    heading: "Filmer votre vidéo",
    description:
      "La production donne vie à votre projet avec un tournage professionnel, du son, de l'éclairage et une direction experte pour capturer des images et un son de qualité.",
    image: "/production_process.webp?height=300&width=400&text=Video+Production",
  },
  {
    id: "post-production",
    title: "Post-production",
    icon: <Edit className="w-6 h-6" />,
    heading: "Finaliser et livrer votre vidéo terminée",
    description:
      "La post-production affine les images par le montage, l'étalonnage, le son et les effets, pour livrer la vidéo finale prête à être diffusée.",
    image: "/post-production_process.webp?height=300&width=400&text=Post-production+Editing",
  },
]

export default function ProcessTimeline() {
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<number>(0)
  const sectionRef = useRef<HTMLElement>(null)

  const stageDuration = 8000
  const updateInterval = 50

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          setIsAutoPlaying(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      intervalRef.current = setInterval(() => {
        progressRef.current += updateInterval
        const stageProgress = (progressRef.current % stageDuration) / stageDuration
        const stageIndex = Math.floor(progressRef.current / stageDuration) % stages.length

        setProgress(stageProgress)

        if (stageProgress === 0 && progressRef.current > 0) {
          setCurrentStage(stageIndex)
        }
      }, updateInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, isVisible])

  const handleStageClick = (index: number) => {
    setCurrentStage(index)
    setIsAutoPlaying(false)
    progressRef.current = index * stageDuration
    setProgress(0)

    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 1000)
  }

  const goToNext = () => {
    const nextIndex = currentStage < stages.length - 1 ? currentStage + 1 : 0
    handleStageClick(nextIndex)
  }

  const getProgressWidth = () => {
    const baseProgress = (currentStage / (stages.length - 1)) * 100
    const additionalProgress = (progress / (stages.length - 1)) * 100
    return Math.min(baseProgress + additionalProgress, 100)
  }

  const isPointActive = (index: number) => {
    const pointProgress = getProgressWidth()
    const pointPosition = (index / (stages.length - 1)) * 100
    return pointProgress >= pointPosition
  }

  return (
    <section ref={sectionRef} className="pt-12 pb-24 text-black" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-8 text-center sm:text-center">
            <span className="inline-block px-6 py-2 border border-black rounded-full text-sm font-medium text-black uppercase tracking-wider">
              Notre Processus
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black text-center sm:text-center">
            Un process de production
            <br/>simple en 4 étapes
          </h2>
        </div>

        {/* Progress Timeline */}
        <div className="mb-16">
          {/* Stage Icons Row - Using Flexbox with justify-between for perfect alignment */}
          <div className="flex justify-between items-center mb-8 px-2">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className="flex flex-col items-center cursor-pointer transition-all duration-500"
                onClick={() => handleStageClick(index)}
              >
                {/* Icon Container */}
                <div
                  className={`mb-3 p-4 rounded-xl transition-all duration-500 ${
                    isPointActive(index) ? "bg-orange-500 shadow-lg shadow-orange-500/25" : "bg-white"
                  } ${index === currentStage ? "scale-110" : "scale-100"}`}
                >
                  <div
                    className={`transition-all duration-500 ${index === currentStage ? "text-white" : "text-black"}`}
                  >
                    {stage.id === "pre-production" ? (
                      <div className="flex gap-1">
                        <Square className="w-3 h-3 fill-current" />
                        <Square className="w-3 h-3 fill-current" />
                      </div>
                    ) : (
                      React.cloneElement(stage.icon as React.ReactElement, {
                        className: "w-6 h-6",
                      })
                    )}
                  </div>
                </div>

                {/* Stage Label */}
                <span
                  className={`text-sm font-medium text-center transition-all duration-300 max-w-[100px] leading-tight whitespace-nowrap ${
                    index === currentStage ? "text-black" : "text-gray-500"
                  }`}
                >
                  {stage.title}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar Container - Matching the exact width of icons */}
          <div className="relative px-2">
            {/* Background Bar */}
            <div className="h-1 bg-black rounded-full">
              <div
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-75 ease-linear"
                style={{ width: `${getProgressWidth()}%` }}
              />
            </div>

            {/* Progress Points - Perfectly aligned with icons above */}
            <div className="absolute top-0 left-0 right-0 h-1 px-2">
              <div className="relative h-full flex justify-between">
                {stages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full -mt-1 cursor-pointer transition-all duration-300 ${
                      isPointActive(index)
                        ? "bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25"
                        : "bg-black"
                    }`}
                    onClick={() => handleStageClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="border border-black rounded-2xl p-8 bg-white">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="w-full h-60 relative overflow-hidden rounded-lg">
                <Image
                  src={stages[currentStage].image || "/placeholder.svg"}
                  alt={stages[currentStage].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6 leading-tight text-black transition-all duration-500">
                {stages[currentStage].heading}
              </h3>
              <p className="text-black text-lg leading-relaxed transition-all duration-500">
                {stages[currentStage].description}
              </p>
            </div>

            {/* Next Button */}
            <div className="flex-shrink-0">
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-2 border-orange-500 bg-transparent text-orange-500 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}