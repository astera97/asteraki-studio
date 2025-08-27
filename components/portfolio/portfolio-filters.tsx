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
  { value: "Brand Video", label: "Vidéo de marque" },
  { value: "Product Demo", label: "Démonstration produit" },
  { value: "Explainer Video", label: "Vidéo explicative" },
  { value: "App Video", label: "Vidéo d'application" },
  { value: "Social Video", label: "Vidéo sociale" },
  { value: "Commercial", label: "Publicité" },
  { value: "Testimonial", label: "Témoignage" },
  { value: "Training Video", label: "Vidéo de formation" },
  { value: "Event Video", label: "Vidéo d'événement" },
  { value: "Animation", label: "Animation" },
  { value: "Documentary", label: "Documentaire" },
  { value: "Corporate Video", label: "Vidéo d'entreprise" },
  { value: "Promotional Video", label: "Vidéo promotionnelle" },
  { value: "Educational Video", label: "Vidéo éducative" },
  { value: "Recruitment Video", label: "Vidéo de recrutement" },
  { value: "Case Study Video", label: "Vidéo d'étude de cas" },
  { value: "How-to Video", label: "Vidéo tutoriel" },
  { value: "Webinar", label: "Webinaire" },
  { value: "Live Action", label: "Prise de vue réelle" },
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