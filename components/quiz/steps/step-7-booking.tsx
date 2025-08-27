"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "../quiz-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Play, Check, ExternalLink, ArrowRight } from "lucide-react"
import { calculatePriceEstimate } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"

export default function Step7Booking() {
  const { quizData, updateQuizData, prevStep } = useQuiz()
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [priceEstimate, setPriceEstimate] = useState({ minPrice: 5000, maxPrice: 1000, breakdown: [] })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  // Calcul du devis basé sur les réponses du questionnaire
  useEffect(() => {
    const estimate = calculatePriceEstimate(
      quizData.videoTypes || [],
      quizData.channels || [],
      quizData.assetQuantity ? String(quizData.assetQuantity) : "2",
    )
    setPriceEstimate(estimate)
  }, [quizData])

  // Écouteur d'événement Calendly pour détecter le rendez-vous pris
  useEffect(() => {
    const handleCalendlyEvent = (event) => {
      // Ne traiter que les messages provenant de Calendly
      if (event.origin === "https://calendly.com" && event.data.event === 'calendly.event_scheduled') {
        // Mettre à jour les données du quiz avec les infos de réservation
        updateQuizData({
          booking: {
            date: new Date().toISOString(),
            time: new Date().toTimeString(),
          },
        })
        
        // Afficher la page de remerciement après la réservation
        setShowThankYou(true)
        
        // Optionnel : remonter en haut de la page
        window.scrollTo(0, 0)
      }
    }

    // Ajouter l'écouteur d'événement pour les messages de Calendly
    window.addEventListener('message', handleCalendlyEvent)

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [updateQuizData])

  // Gestion du chargement de l'iframe
  const handleIframeLoad = () => {
    setCalendlyLoaded(true)
  }

  // Page de remerciement
  if (showThankYou) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Merci !</h1>
            <p className="text-xl text-gray-600 mb-8">
              Votre session stratégique a été réservée avec succès.
              Nous vous enverrons un e-mail de confirmation sous peu
              avec tous les détails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Que se passe-t-il ensuite ?</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Vous recevrez une invitation dans votre calendrier dans les prochaines minutes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Nous vous enverrons un guide de préparation pour tirer le meilleur parti de notre session</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Notre équipe examinera vos réponses au questionnaire avant l'appel</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Vous obtiendrez une feuille de route stratégique personnalisée pendant notre session</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Besoin d'aide immédiate ?</h3>
              <p className="text-gray-700 mb-4">
                Des questions sur votre réservation ou souhaitez discuter de votre projet tout de suite ?
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  📞 Appelez-nous au <strong>+1 (415) 579-3030</strong>
                </p>
                <p>
                  ✉️ Écrivez-nous à <strong>hello@asterakiagency.com</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="border-t pt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">En attendant…</h2>
              <p className="text-gray-600">Explorez nos réalisations et trouvez l'inspiration pour votre projet à venir</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CTA Projets */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Découvrez nos projets</h3>
                <p className="text-gray-600 mb-6">
                  Parcourez notre portfolio de campagnes vidéo réussies et découvrez ce que nous pouvons créer pour votre marque.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Voir le portfolio
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* CTA Blog */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lisez notre blog</h3>
                <p className="text-gray-600 mb-6">
                  Obtenez des insights sur les tendances du marketing vidéo, les bonnes pratiques et les stratégies pour développer votre entreprise.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  Lire les articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Ressources supplémentaires */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Plus de ressources</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  Études de cas
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  Exemples de vidéos
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  Guide des prix
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        {/* Logo - cliquable */}
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center mr-3">
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVsSyyzZk9bJcHXMNUQfstv87OVhrZn4GzoAa"
              alt="Logo Asteraki"
              width={80}
              height={80}
              className="w-22 h-22"
            />
          </div>
        </Link>

        <div className="text-right text-sm text-gray-600">
          <div>1 produit ajouté</div>
          <div>2 à 4 éléments par mois</div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne de gauche */}
          <div className="space-y-6">
            {/* Section vidéo avec fenêtre modale */}
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
              <Image
                src="/illustration_vt.webp"
                alt="Approche 10x d'Asteraki"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-orange-500 bg-opacity-100 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all transform hover:scale-105"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm font-medium">
                L'approche 10x d'Asteraki
              </div>
            </div>

            {/* Section estimation de prix */}
            <div className="space-y-6">
              <div className="flex items-start">
                <h2 className="text-2xl font-bold text-gray-900">
                  Votre fourchette de projet estimée est de {priceEstimate.minPrice.toLocaleString()} € – {priceEstimate.maxPrice.toLocaleString()} €.
                </h2>
                <div className="ml-2 mt-1 w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gray-400">?</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Ce n'est pas seulement pour un seul contenu — un projet moyen comprend plus de 10 fois différents éléments,
                pour que vous tiriez le meilleur parti de chaque projet.
              </p>

              {/* Ce à quoi vous pouvez vous attendre */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">À quoi vous attendre ?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Un projet → plusieurs éléments (versions courtes, variations, formats statiques)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Adapté à vos objectifs : publicités payantes, contenu organique, campagnes de marque, etc.
                    </span>
                  </div>
                </div>
              </div>

              {/* Prochaine étape */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Prochaine étape : planifions votre stratégie créative</h3>
                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Vous souhaitez développer votre contenu sans embaucher ? Nous vous proposerons un système reproductible.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Vous avez besoin de meilleures performances publicitaires ? Nous partagerons ce qui fonctionne pour les meilleures marques.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2">→</span>
                    <span>Vous souhaitez plus de conversions ? Nous vous recommanderons du contenu adapté à votre entonnoir.</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Réservez une session stratégique de 30 minutes</strong> pour définir la meilleure approche pour votre marque.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Intégration Calendly */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Réservez votre session stratégique</h3>
              
              {/* Widget intégré Calendly */}
              <div className="aspect-video mb-6">
                <iframe
                  src="https://calendly.com/elsir_hatim/discovery-call"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Prendre rendez-vous avec Asteraki"
                  className="rounded-lg border border-gray-200"
                  onLoad={handleIframeLoad}
                ></iframe>
              </div>

              {/* Option alternative de réservation */}
              <div className="text-center text-sm text-gray-600 mt-4">
                <p>Vous préférez voir les disponibilités ?</p>
                <button 
                  onClick={() => window.open('https://calendly.com/elsir_hatim/discovery-call', '_blank')}
                  className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center mt-1"
                >
                  Voir toutes les disponibilités <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Indicateurs de confiance */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Fait confiance à plus de 452 entreprises de toutes tailles</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-100 rounded p-4 flex items-center justify-center h-12">
                  <Image
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfPZAFBa93bxoLyhcW8aNnVRf0tO2vu4mHdZJ"
                    alt="Logo UPS"
                    width={90}
                    height={90}
                    className="w-10 h-12"
                  />
                </div>
                <div className="bg-gray-100 rounded p-4 flex items-center justify-center h-12">
                  <Image
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVpHdP5wR2lYTb4od16OBLW0sgaN7xrmhqJup5"
                    alt="Logo Snowflake"
                    width={90}
                    height={90}
                    className="w-24 h-20"
                  />
                </div>
                <div className="bg-gray-100 rounded p-4 flex items-center justify-center h-12">
                  <Image
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVWYoNQ4iEG0j4rIlZeaBmiPMNq6kRYybfWv2S"
                    alt="Logo Patagonia"
                    width={90}
                    height={90}
                    className="w-20 h-20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded p-4 flex items-center justify-center h-12">
                  <Image
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV7E6XiJvacRN46sgXHj5wbCPAzVvtyO2rFJEo"
                    alt="Logo Coursera"
                    width={90}
                    height={90}
                    className="w-20 h-15"
                  />
                </div>
                <div className="bg-gray-100 rounded p-4 flex items-center justify-center h-12">
                  <Image
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMRYpodX6YLO1BSGiKj2D5WhHcuQrys4MloaJ"
                    alt="Logo Plaid"
                    width={90}
                    height={90}
                    className="w-20 h-12"
                  />
                </div>
                <div className="bg-gray-100 rounded p-4 flex items-center justify-center h-12">
                  <Image
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVpvaKw3R2lYTb4od16OBLW0sgaN7xrmhqJup5"
                    alt="Logo Oatly"
                    width={90}
                    height={50}
                    className="w-20 h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fenêtre modale vidéo */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl font-bold z-10 hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                src="/video_marketing.mp4"
                poster="/video_thumbnail.jpg"
                controls
                autoPlay
                className="w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                Votre navigateur ne prend pas en charge la balise vidéo.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}