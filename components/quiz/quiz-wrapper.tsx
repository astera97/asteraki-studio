"use client"

import { createContext, useContext, useState } from "react"
import Step1Goals from "./steps/step-1-goals"
import Step2VideoTypes from "./steps/step-2-video-types"
import Step3Channels from "./steps/step-3-channels"
import Step4Assets from "./steps/step-4-assets"
import Step5Email from "./steps/step-5-email"
import Step6Contact from "./steps/step-6-contact"
import Step7Booking from "./steps/step-7-booking"

interface QuizData {
  goal: string
  videoTypes: string[]
  channels: string[]
  assets: string
  assetQuantity?: number
  email: string
  contact: {
  firstName: string
  lastName: string
  company: string
  phone: string
  website?: string              // ADD THIS
  additionalNotes?: string      // ADD THIS  
  getExtraHooks?: boolean       // ADD THIS
}
  booking: {
    date: string
    time: string
  }
}

interface QuizContextType {
  currentStep: number
  quizData: QuizData
  updateQuizData: (data: Partial<QuizData>) => void
  nextStep: () => void
  prevStep: () => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function useQuiz() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error("useQuiz must be used within a QuizWrapper")
  }
  return context
}

export function QuizWrapper() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    goal: "",
    videoTypes: [],
    channels: [],
    assets: "",
    email: "",
    contact: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
    },
    booking: {
      date: "",
      time: "",
    },
  })

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 7))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Goals />
      case 2:
        return <Step2VideoTypes />
      case 3:
        return <Step3Channels />
      case 4:
        return <Step4Assets />
      case 5:
        return <Step5Email />
      case 6:
        return <Step6Contact />
      case 7:
        return <Step7Booking />
      default:
        return <Step1Goals />
    }
  }

  return (
    <QuizContext.Provider
      value={{
        currentStep,
        quizData,
        updateQuizData,
        nextStep,
        prevStep,
      }}
    >
      {renderStep()}
    </QuizContext.Provider>
  )
}