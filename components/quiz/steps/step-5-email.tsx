"use client"

import type React from "react"
import { useState } from "react"
import { useQuiz } from "../quiz-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Step5Email() {
  const { quizData, updateQuizData, nextStep, prevStep } = useQuiz()
  const [email, setEmail] = useState(quizData.email || "")
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Veuillez entrer une adresse e-mail valide"
    }

    // Vérification des domaines personnels
    const personalDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com"]
    const domain = email.split("@")[1]?.toLowerCase()
    if (domain && personalDomains.includes(domain)) {
      return "Veuillez utiliser votre adresse e-mail professionnelle"
    }

    return ""
  }

  const handleContinue = () => {
    const validationError = validateEmail(email)
    if (validationError) {
      setError(validationError)
      return
    }

    updateQuizData({ email })
    nextStep()
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) setError("")
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
          onClick={handleContinue}
          disabled={!email}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          Suivant <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-orange-500 h-2 transition-all duration-300" style={{ width: "71%" }}></div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Icône e-mail */}
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-8">
          <Mail className="w-8 h-8 text-orange-500" />
        </div>

        {/* Titre */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Où pouvons-nous vous envoyer votre devis ?</h1>

        {/* Sous-titre */}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-lg">
          Nous vous enverrons un devis vidéo personnalisé en fonction de vos choix.
        </p>

        {/* Champ e-mail */}
        <div className="w-full max-w-md mb-8">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="votre.nom@entreprise.com"
            className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Note sur l'e-mail professionnel */}
        <p className="text-sm text-gray-600 text-center mb-12 max-w-md">
          E-mail professionnel uniquement.
        </p>
      </div>
    </div>
  )
}