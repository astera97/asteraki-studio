"use client"

import { X, Play } from "lucide-react"
import { useEffect } from "react"

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  subtitle?: string
  description: string
  services?: string[]
  vimeoUrl: string
  videoType?: string
  industry?: string
}

export default function PortfolioModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  services = [],
  vimeoUrl,
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

  // Extract Vimeo video ID from URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/)
    return match ? match[1] : null
  }

  const vimeoId = getVimeoId(vimeoUrl)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-75 animate-in fade-in duration-300" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Side - Video */}
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
                <h3 className="text-2xl font-bold mb-2">Sorry</h3>
                <p className="text-gray-300">This video does no longer exist.</p>
              </div>
            )}
          </div>

          {/* Right Side - Project Info */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
                {subtitle && <p className="text-xl text-gray-600 mb-6">{subtitle}</p>}
                <div className="w-12 h-1 bg-black"></div>
              </div>

              {/* Project Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project overview</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>

              {/* Services */}
              {services.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our role</h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200">
              Get a similar quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
