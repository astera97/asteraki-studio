"use client"

import React, { useState, type ReactNode } from "react"
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
    heading: "Lancement de votre projet vidéo",
    description:
      "Le kick-off marque officiellement le début de votre projet. Nous définissons ensemble vos objectifs, votre audience, votre message clé et les besoins techniques pour avancer dans la bonne direction.",
    image: "/kickoff_process.webp?height=300&width=400&text=Kick-off+Meeting",
  },
  {
    id: "conception",
    title: "Conception",
    icon: <Pencil className="w-6 h-6" />,
    heading: "Développer le concept créatif",
    description:
      "Nous transformons vos idées en vision créative : storytelling, style visuel, ton, direction artistique… tout est défini pour poser les bases de votre vidéo.",
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
    heading: "Planifier minutieusement votre tournage",
    description:
      "La pré-production organise chaque détail : repérages, équipe, autorisations, planning et logistique. Tout est anticipé pour garantir un tournage fluide et maîtrisé.",
    image: "/pre-production_process.webp?height=300&width=400&text=Pre-production+Planning",
  },
  {
    id: "production",
    title: "Production",
    icon: <Camera className="w-6 h-6" />,
    heading: "Filmer votre vidéo",
    description:
      "Place à la production : captation professionnelle, lumière, son, direction… Nous donnons vie à votre projet en enregistrant des images et un son de haute qualité.",
    image: "/production_process.webp?height=300&width=400&text=Video+Production",
  },
  {
    id: "post-production",
    title: "Post-production",
    icon: <Edit className="w-6 h-6" />,
    heading: "Livrer vos assets vidéo finalisés",
    description:
      "Montage, étalonnage, mixage son, motion design… La post-production sublime votre contenu pour vous livrer une vidéo prête à être diffusée.",
    image: "/post-production_process.webp?height=300&width=400&text=Post-production+Editing",
  },
]

export default function ProcessTimeline() {
  const [currentStage, setCurrentStage] = useState(0)

  const handleStageClick = (index: number) => {
    setCurrentStage(index)
  }

  const goToNext = () => {
    const nextIndex = currentStage < stages.length - 1 ? currentStage + 1 : 0
    setCurrentStage(nextIndex)
  }

  return (
    <section 
      className="pt-24 pb-24 text-white bg-black"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Votre Parcours Complet de Production Vidéo
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Nous gérons chaque étape, du concept initial à la livraison finale. Un producteur dédié vous accompagne à chaque phase avec des validations claires et un planning transparent.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {stages.map((stage, index) => {
              const isActive = index === currentStage
              
              return (
                <div 
                  key={stage.id} 
                  className={`flex items-start p-4 rounded-xl cursor-pointer transition-colors duration-200 ${
                    isActive 
                      ? 'bg-orange-500/20 border border-orange-500' 
                      : 'bg-neutral-900'
                  }`}
                  onClick={() => handleStageClick(index)}
                >
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 ${
                    isActive ? 'bg-orange-500 text-white' : 'bg-white text-black'
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}>
                      {stage.title}
                    </h3>
                    <p className={`text-sm ${
                      isActive ? 'text-gray-200' : 'text-gray-500'
                    }`}>
                      {stage.heading}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8 pt-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[300px] border border-neutral-700">
                <Image
                  src={stages[currentStage].image || "/placeholder.svg"}
                  alt={stages[currentStage].title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-medium px-3 py-1.5 rounded">
                ÉTAPE {currentStage + 1}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 leading-tight text-white">
                {stages[currentStage].heading}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                {stages[currentStage].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
