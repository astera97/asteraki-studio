"use client"

import { useState } from "react"
import { useQuiz } from "../quiz-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Step4Assets() {
  const { quizData, updateQuizData, nextStep, prevStep } = useQuiz()
  const [assetQuantity, setAssetQuantity] = useState(quizData.assetQuantity || 2)

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, Math.min(20, assetQuantity + change))
    setAssetQuantity(newQuantity)
  }

  const handleNext = () => {
    updateQuizData({ assetQuantity })
    nextStep()
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

        <Button
          onClick={handleNext}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg flex items-center"
        >
          Suivant <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-orange-500 h-2 transition-all duration-300" style={{ width: "57%" }}></div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Contenu principal */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">De combien d'éléments vidéo avez-vous besoin ?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Cela inclut les différentes versions, durées et formats de vos vidéos.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={assetQuantity <= 1}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>

                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-500 mb-2">{assetQuantity}</div>
                  <div className="text-gray-600">{assetQuantity === 1 ? "Élément" : "Éléments"}</div>
                </div>

                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={assetQuantity >= 20}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Qu'est-ce qu'un élément ?</h3>
              <ul className="text-left text-gray-700 space-y-1">
                <li>• Différentes durées (versions de 30 s, 60 s, 90 s)</li>
                <li>• Formats spécifiques aux plateformes (carré, vertical, horizontal)</li>
                <li>• Variantes avec des messages ou des appels à l'action différents</li>
                <li>• Versions statiques pour la publicité display</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}