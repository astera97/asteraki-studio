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
  { value: "AI", label: "IA" },
  { value: "Beauty", label: "Beauté" },
  { value: "Computer Software", label: "Logiciels informatiques" },
  { value: "Consumer electronics", label: "Électronique grand public" },
  { value: "Consumer goods", label: "Biens de consommation" },
  { value: "Crypto & Blockchain", label: "Crypto et Blockchain" },
  { value: "Cybersecurity", label: "Cybersécurité" },
  { value: "Data & Analytics", label: "Données et Analytique" },
  { value: "eCommerce", label: "Commerce électronique" },
  { value: "Education", label: "Éducation" },
  { value: "Energy", label: "Énergie" },
  { value: "Enterprise", label: "Entreprise" },
  { value: "Environment", label: "Environnement" },
  { value: "Finance", label: "Finance" },
  { value: "FMCG", label: "Grands consommateurs" },
  { value: "Healthcare", label: "Santé" },
  { value: "HR-Tech", label: "Technologie RH" },
  { value: "Insurance", label: "Assurance" },
  { value: "Legal", label: "Juridique" },
  { value: "Manufacturing", label: "Industrie manufacturière" },
  { value: "Marketing", label: "Marketing" },
  { value: "Media & Entertainment", label: "Médias et divertissement" },
  { value: "Non-profit", label: "Organisme à but non lucratif" },
  { value: "Real Estate", label: "Immobilier" },
  { value: "Retail", label: "Commerce de détail" },
  { value: "SaaS", label: "SaaS" },
  { value: "Sports", label: "Sport" },
  { value: "Technology", label: "Technologie" },
  { value: "Travel & Tourism", label: "Voyage et tourisme" },
  { value: "Wellness", label: "Bien-être" },
]

const videoTypes = [
  { value: "All", label: "Tous" },
  { value: "Vidéo de marque", label: "Vidéo de marque" },
  { value: "Démonstration produit", label: "Démonstration produit" },
  { value: "Vidéo explicative", label: "Vidéo explicative" },
  { value: "Vidéo d'application", label: "Vidéo d'application" },
  { value: "B2C", label: "B2C" },
  { value: "Témoignage client", label: "Témoignage client" },
  { value: "événement", label: "événement" },
  { value: "Animation 2D", label: "Animation 2D" },
  { value: "Vidéo éducative", label: "Vidéo éducative" },
  { value: "Vidéo de recrutement", label: "Vidéo de recrutement" },
  { value: "Vidéo tutoriel", label: "Vidéo tutoriel" },
  
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