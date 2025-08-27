"use client"

import { X, Play } from "lucide-react"
import { useEffect } from "react"

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle: string
  description: string
  services: string[]
  vimeoUrl: string
  videoType: string
  industry: string
}

export default function PortfolioModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  services,
  vimeoUrl,
  videoType,
  industry,
}: PortfolioModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  // Extraire l'ID de la vidéo Vimeo à partir de l'URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/)
    return match ? match[1] : null
  }

  const vimeoId = getVimeoId(vimeoUrl)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Arrière-plan sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose} />

      {/* Fenêtre modale */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Côté gauche - Vidéo */}
          <div className="bg-black flex items-center justify-center p-8">
            {vimeoId ? (
              <div className="w-full aspect-video">
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=f97316&title=0&byline=0&portrait=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Désolé</h3>
                <p className="text-gray-300">Cette vidéo n'existe plus.</p>
              </div>
            )}
          </div>

          {/* Côté droit - Informations du projet */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              {/* En-tête */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-xl text-gray-600 mb-6">{subtitle}</p>
                <div className="w-12 h-1 bg-black"></div>
              </div>

              {/* Résumé du projet */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Aperçu du projet</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notre rôle</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bouton d'appel à l'action */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
              Obtenir un devis similaire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}