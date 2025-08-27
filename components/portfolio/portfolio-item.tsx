"use client"

import { Play } from "lucide-react"

interface PortfolioItemProps {
  title: string
  subtitle: string
  videoType: string
  industry: string
  thumbnail: string
  onClick: () => void
}

export default function PortfolioItem({
  title,
  subtitle,
  videoType,
  industry,
  thumbnail,
  onClick,
}: PortfolioItemProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-[#111111] rounded-[25px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={`${title} - ${subtitle}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-[#F1F1F1] mb-4">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-medium">{videoType}</span>
          <span className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full">{industry}</span>
        </div>
      </div>
    </div>
  )
}
