"use client"

import { useState } from "react"
import { useQuiz } from "../quiz-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const channels = [
  {
    id: "internal",
    title: "Interne",
    description: ["Présentations d'entreprise", "Formation et éducation", "Recrutement et intégration", "Support à la vente"],
    image: "/internal_ch.webp?height=200&width=300&text=Interne",
  },
  {
    id: "website-socials",
    title: "Site web et réseaux sociaux",
    description: ["Réseaux sociaux", "Site internet de l'entreprise", "Pages produits", "Newsletters"],
    image: "/socials_ch.webp?height=200&width=300&text=Site+web+%26+réseaux",
  },
  {
    id: "paid-media",
    title: "Médias payants",
    description: ["Salons et événements", "Publicités YouTube", "Publicités LinkedIn", "Publicités Meta, etc."],
    image: "/paid_ch.webp?height=200&width=300&text=Médias+payants",
  },
  {
    id: "broadcast-ooh",
    title: "Diffusion & OOH",
    description: ["Télévision ou TV connectée", "Publicités en streaming", "Affichage extérieur, bannières...", "Presse écrite, etc."],
    image: "/broadcast_ch.webp?height=200&width=300&text=Diffusion+%26+OOH",
  },
]

export default function Step3Channels() {
  const { quizData, updateQuizData, nextStep, prevStep } = useQuiz()
  const [selectedChannels, setSelectedChannels] = useState<string[]>(quizData.channels)

  const handleChannelToggle = (channelId: string) => {
    const newSelectedChannels = selectedChannels.includes(channelId)
      ? selectedChannels.filter((id) => id !== channelId)
      : [...selectedChannels, channelId]

    setSelectedChannels(newSelectedChannels)
    updateQuizData({ channels: newSelectedChannels })
  }

  const handleNext = () => {
    if (selectedChannels.length > 0) {
      nextStep()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        {/* Logo - cliquable */}
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center mr-3">
            {/* Remplacer par le chemin de votre logo */}
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVsSyyzZk9bJcHXMNUQfstv87OVhrZn4GzoAa"
              alt="Logo Asteraki"
              width={80}
              height={80}
              className="w-22 h-22 text-white"
            />
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 bg-orange-100 px-3 py-1 rounded-full">
            {selectedChannels.length} produit(s) ajouté(s)
          </span>
          <Button
            onClick={handleNext}
            disabled={selectedChannels.length === 0}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            Suivant <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-orange-500 h-2 transition-all duration-300" style={{ width: "42%" }}></div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quels sont vos principaux canaux marketing ?</h1>
          <p className="text-lg text-gray-600">Où votre public verra-t-il votre contenu :</p>
        </div>

        {/* Grille des canaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {channels.map((channel) => {
            const isSelected = selectedChannels.includes(channel.id)

            return (
              <button
                key={channel.id}
                onClick={() => handleChannelToggle(channel.id)}
                className={`relative p-6 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                  isSelected
                    ? "border-orange-500 bg-orange-50 ring-2 ring-orange-200"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={channel.image || "/placeholder.svg"}
                    alt={channel.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-3">{channel.title}</h3>
                <ul className="space-y-1">
                  {channel.description.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}