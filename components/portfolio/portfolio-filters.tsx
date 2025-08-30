"use client"

import CustomSelect from "@/components/ui/custom-select"

interface PortfolioFiltersProps {
  selectedIndustry: string
  selectedVideoType: string
  onIndustryChange: (industry: string) => void
  onVideoTypeChange: (videoType: string) => void
  onSearch: () => void
  resultCount: number
}

const industries = [
  { value: "All", label: "Tous" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "Éducation", label: "Éducation" },
  { value: "B2C", label: "B2C" },
  { value: "B2B", label: "B2B" },
  { value: "Finance", label: "Finance" },
  { value: "Santé", label: "Santé" },
  { value: "SaaS", label: "SaaS" },
  { value: "Technologie", label: "Technologie" },
]

const videoTypes = [
  { value: "All", label: "Tous" },
  { value: "Vidéo de marque", label: "Vidéo de marque" },
  { value: "Démonstration produit", label: "Démonstration produit" },
  { value: "Vidéo explicative", label: "Vidéo explicative" },
  { value: "Vidéo d'application", label: "Vidéo d'application" },
  { value: "Témoignage client", label: "Témoignage client" },
  { value: "événement", label: "événement" },
  { value: "Animation 2D", label: "Animation 2D" },
  { value: "Vidéo éducative", label: "Vidéo éducative" },
  { value: "Vidéo de recrutement", label: "Vidéo de recrutement" },
]

export default function PortfolioFilters({
  selectedIndustry,
  selectedVideoType,
  onIndustryChange,
  onVideoTypeChange,
  onSearch,
  resultCount,
}: PortfolioFiltersProps) {
  return (
    <div className="mb-12">
      {/* Carte de filtres */}
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {/* Filtre par secteur */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choisissez un secteur</label>
            <CustomSelect
              options={industries}
              value={selectedIndustry}
              onChange={onIndustryChange}
              placeholder="Sélectionnez un secteur"
            />
          </div>

          {/* Filtre par type de vidéo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choisissez un type de vidéo</label>
            <CustomSelect
              options={videoTypes}
              value={selectedVideoType}
              onChange={onVideoTypeChange}
              placeholder="Sélectionnez un type de vidéo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}