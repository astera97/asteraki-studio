"use client"

import { useState } from "react"
import { useQuiz } from "../quiz-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const goals = [
  "Expliquer mon produit/service",
  "Commercialiser mon produit/service",
  "Générer des prospects",
  "Créer ou refondre une marque",
  "Améliorer la notoriété de marque",
  "Augmenter les taux de conversion",
  "Créer une preuve sociale",
  "Améliorer le référencement (SEO)",
  "Recruter des talents",
  "Financer un projet via le crowdfunding",
  "Montrer des cas d'utilisation",
  "Créer des vidéos de formation",
]

export default function Step1Goals() {
  const { quizData, updateQuizData, nextStep } = useQuiz()
  const [selectedGoal, setSelectedGoal] = useState<string>(quizData.goal)

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal)
    updateQuizData({ goal })
  }

  const handleNext = () => {
    if (selectedGoal) {
      nextStep()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        {/* Logo - Cliquer pour revenir à l'accueil */}
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

        {/* Informations de contact (desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <span>Prêt à nous rencontrer ?</span>
          <button className="text-gray-900 font-medium hover:text-orange-500 border border-gray-300 px-4 py-2 rounded-lg">
            Réserver un appel découverte
          </button>
        </div>

        {/* Bouton Suivant */}
        <Button
          onClick={handleNext}
          disabled={!selectedGoal}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          Suivant <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-orange-500 h-2 transition-all duration-300" style={{ width: "14%" }}></div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Créons ensemble votre devis !</h1>
          <p className="text-xl text-gray-600">Quel est l'objectif principal de votre campagne ?</p>
        </div>

        {/* Grille des objectifs */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {goals.map((goal) => (
            <button
              key={goal}
              onClick={() => handleGoalSelect(goal)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all whitespace-nowrap ${
                selectedGoal === goal
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}