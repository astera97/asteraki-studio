"use client"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface DropdownItem {
  title: string
  description: string
  image: string
  badge?: string
  color?: string
  href?: string
}

interface DropdownSection {
  title: string
  description: string
  items: DropdownItem[]
  href?: string
  heroImage?: string
  specialItem?: {
    title: string
    description: string
    image: string
    backgroundColor: string
    href?: string
  }
}

const servicesDropdown = {
  sections: [
    {
      title: "Animation & Illustration",
      description: "Animation et illustration exceptionnelles pour votre marque",
      items: [
        {
          title: "Vidéos explicatives",
          description: "Animation 2D/3D de haut niveau",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywLGxauPLEFAvwOdGUzS8rfWxIcVho5ekmLqYl?height=40&width=40&text=🎬",
          href: "/production-video-explicative"
        },
        {
          title: "Vidéos de démonstration",
          description: "Votre meilleur vendeur",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZq2L825DmjQM0nVEs2BHNKk8yJeWpug7rf34?height=40&width=40&text=🎯",
          href: "/production-video-demonstration-produit"
        }
      ],
    },
    {
      title: "Prises de vue en direct",
      description: "Tournages sur site et studio high-tech pour des prises de qualité",
      items: [
        {
          title: "Vidéos de marque",
          description: "Campagnes de marque & TVC",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw6HsLmAagHJ3YwbVFM7BDCv2nIdW8y1stzLeO?height=40&width=40&text=🏢",
          href: "/production-video-marque"
        },
        {
          title: "Vidéos d'événements",
          description: "Unir talents et produits",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywjOrOlmAXDwEq0U4C87KsF9Tplh2ZmP5R1adB?height=40&width=40&text=📦",
          href: "/production-video-evenementielle"
        },
        {
          title: "Vidéos de crowdfunding",
          description: "Plus de +25m $ levés",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw6lIiYvagHJ3YwbVFM7BDCv2nIdW8y1stzLeO?height=40&width=40&text=💰",
          href: "/production-video-financement"
        },
        {
          title: "Vidéos de recrutement",
          description: "Recrutez les meilleurs talents",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiAQuGIBrTARJGXZkYLKW6sdH5N4B0vywIojm?height=40&width=40&text=👥",
          href: "/production-video-recrutement"
        },
        {
          title: "Vidéos de témoignages clients",
          description: "Montrez des histoires de réussite",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtCNQt6134vBTOxF8dARqINU9EX5yck2foZjG?height=40&width=40&text=📊",
          href: "/production-video-temoignage-client"
        },
      ],
    },
    {
      title: "Éducation & Formations",
      description: "Contenu authentique produit en volume, pour publicités, réseaux et formation",
      items: [
        {
          title: "Éducation & Infodivertissement",
          description: "Pour l'éducation à grande échelle",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywjmhaQLAXDwEq0U4C87KsF9Tplh2ZmP5R1adB?height=40&width=40&text=🎓",
          href: "/production-video-pedagogique"
        },
      ],
    },
    {
      title: "Créatif & Design",
      description: "Design complet qui soutient votre équipe marketing de bout en bout.",
      badge: "BIENTÔT !",
      items: [
        {
          title: "Créations publicitaires",
          description: "Pour un impact multi-canal",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZs9Dkn5DmjQM0nVEs2BHNKk8yJeWpug7rf34?height=40&width=40&text=🎯",
          href: "/#"
        },
        {
          title: "Créations pour réseaux sociaux",
          description: "Suite d'actifs multi-formats",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywOfaJ4BNDldM8Th1Y46jXqf7KG5xJvzIoicVb?height=40&width=40&text=social_creative_video",
          href: "/#"
        },
        {
          title: "Design de présentations",
          description: "Modifiable sur n'importe quelle plateforme",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw07N1xNR8WsTpDM4vfx3okKnUj7QwOVuazAZl?height=40&width=40&text=presentation_video",
          href: "/#"
        },
        {
          title: "Design d'infographies",
          description: "Style visuel aligné à la marque",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywybBEhRtsdpIWi7BXtnEN2YOvmFLjb4rV6Pux?height=40&width=40&text=infographic_video",
          href: "/#"
        },
      ],
    },
  ],
  bottomMessages: [
    { icon: "", text: "" },
    { icon: "", text: "" },
    { icon: "", text: "" },
  ],
}

const expertiseDropdown = {
  sections: [
    {
      title: "Pour la technologie & SaaS",
      description: "Aucune société de production n'a autant travaillé pour le secteur technologique qu'Asteraki",
      heroImage: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywa6Nj6vQW6cbV58LvMdJS0skQ9yGeoPAiFT3Y",
      href: "/production-video-tech",
      items: [
        {
          title: "SaaS & Applications",
          description: "Générez plus de pipeline + revenus",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVz96gwZk9bJcHXMNUQfstv87OVhrZn4GzoAa?height=40&width=40&text=💻",
          href: "/production-video-saas"
        },
        {
          title: "Pour les startups",
          description: "Tarification adaptée aux startups",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywJn9GcksXNLP2QdFWhK9OvG3Rr0fZVD4Htsme?height=40&width=40&text=🚀",
          href: "/production-video-startup"
        },
      ],
    },
    {
      title: "Pour les entreprises",
      description: "En plus de notre engagement envers la qualité, nous respectons les guidelines de marque",
      heroImage: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywhPxURjesIX8uUOrt39b1FRWBpdfEcgCMKvw6?height=200&width=350&text=Enterprise+Meeting",
      href: "/production-video-b2b",
      items: [
        {
          title: "Services financiers",
          description: "Conçu pour le succès fintech",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw1bhZY3L0yHGBKOREhLxl4Ti6nuevra7FcWC5?height=40&width=40&text=💰",
          href: "/production-video-bancaire"
        },
        {
          title: "Services logistiques",
          description: "Conçu pour les entreprises logistiques",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCwGN7Z6dH7rVT25qFa9GQY8gkxhfvsZSXJMC?height=40&width=40&text=🚚",
          href: "/production-video-logistique"
        },
      ],
    },
    {
      title: "Pour le grand public",
      description: "Nous produisons ce genre de publicités grand public dont les gens parlent à leurs amis",
      heroImage: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywXNTUP5qqNEZxSsUah86LOQRFMbvitf9woCdj?height=200&width=350&text=Consumer+Ads",
      href: "/production-video-b2c",
      items: [
        {
          title: "E-commerce & DTC",
          description: "Marques, TV et publicités",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywpljVSKvIpEkOY8D0GBumXaioq9CjFLZxsPM1?height=40&width=40&text=🛒",
          href: "/production-video-ecommerce"
        },
      ],
      specialItem: {
        title: "Fashion brand?",
        description: "Séances photo rapides et simples pour la mode. Contactez-nous pour discuter de votre projet",
        image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywMPzHKyjroe97sS0GkHRwD6OVtv1Ez4ubBYFa?height=120&width=200&text=Vidi+Service",
        backgroundColor: "bg-orange-500",
        href: "/#"
      },
    },
  ],
  // Removed `rightColumn` entirely
  bottomMessages: [
    { icon: "", text: "" },
    { icon: "", text: "" },
    { icon: "", text: "" },
  ],
}

const resourcesDropdown = {
  sections: [
    {
      title: "Notre agence",
      description: "On produit du contenu que vous adorerez",
      heroImage: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywjd5d0D1AXDwEq0U4C87KsF9Tplh2ZmP5R1ad?height=200&width=350&text=Vidico+Office",
      href: "/a-propos",
      items: [],
    },
    {
      title: "Pourquoi choisir Asteraki",
      description: "Découvrez ce qui nous rend différents",
      heroImage: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywlrrX99RNjhtsPvHbSRacMYefKT2gQAxB90k3?height=200&width=350&text=Creative+Process",
      href: "/pourquoi-asteraki",
      items: [],
    },
    {
      title: "Conseils créatifs actionnables",
      description: "Rejoignez plus de 5000 marketeurs",
      heroImage: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw1aH2UwL0yHGBKOREhLxl4Ti6nuevra7FcWC5?height=200&width=350&text=Newsletter+Preview",
      href: "#",
      items: [
        {
          title: "Blog",
          description: "Nos dernières nouvelles et opinions",
          image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywI6hp3mopGrnZVX0LtSThgBy46AKYEQ2fqO89?height=40&width=40&text=📝",
          href: "/journal"
        },
      ],
    },
  ],
  featuredReport: {
    title: "Le guide marketing vidéo 2025",
    description: "Obtenez notre guide complet pour réussir votre marketing vidéo",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVT1mSpf0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2",
    backgroundColor: "bg-gradient-to-br from-orange-500 to-orange-600",
    ctaButton: "Télécharger maintenant",
    href: "#"
  },
  bottomMessages: [
    { icon: "", text: "" },
    { icon: "", text: "" },
    { icon: "", text: "" },
  ],
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null)
  const [mobileActiveSubsection, setMobileActiveSubsection] = useState<string | null>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setMobileActiveSection(null)
      setMobileActiveSubsection(null)
    }
  }

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    if (!isVideoOpen) {
      setActiveDropdown(null)
    }
  }

  const handleMobileSectionClick = (section: string) => {
    setMobileActiveSection(mobileActiveSection === section ? null : section)
    setMobileActiveSubsection(null)
  }

  const handleMobileSubsectionClick = (subsection: string) => {
    setMobileActiveSubsection(mobileActiveSubsection === subsection ? null : subsection)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`border-b ${isScrolled ? 'bg-white border-gray-200 shadow-sm' : 'bg-white border-white'} relative sticky top-0 z-50`}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="flex items-center justify-between relative z-50">
          {/* Logo */}
          <Link
            href="/"
            className={`relative z-50 transition-opacity duration-30 ${isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVsSyyzZk9bJcHXMNUQfstv87OVhrZn4GzoAa?height=40&width=120&text=Asteraki+LOGO"
              alt="Logo Asteraki"
              width={180}
              height={60}
              className="h-10 sm:h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <div className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center space-x-1 cursor-pointer text-black">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </div>
            </div>
            <div className="relative" onMouseEnter={() => handleMouseEnter("expertises")} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center space-x-1 cursor-pointer text-black">
                <span>Expertise</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "expertises" ? "rotate-180" : ""}`} />
              </div>
            </div>
            <Link href="/realisations" className="cursor-pointer text-black hover:text-black transition-colors">
              Réalisations
            </Link>
            <div className="relative" onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center space-x-1 cursor-pointer text-black">
                <span>Ressources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
              </div>
            </div>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-50">
            <button onClick={toggleMobileMenu} className="text-black p-2">
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" passHref>
              <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-2">
                Devis gratuit en 1h
              </Button>
            </Link>
          </div>
        </nav>

        {/* Expertise Dropdown - Cleaned, 3-column layout */}
        {activeDropdown === "expertises" && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[95vw] max-w-[1280px] bg-white rounded-3xl shadow-2xl border border-gray-200 z-50 p-6 sm:p-8 lg:p-10"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[400px]">
              {expertiseDropdown.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-6">
                  <Link
                    href={section.href || "#"}
                    className="block"
                    onClick={() => {
                      setActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <div>
                      <h3 className="text-gray-900 text-lg font-bold mb-2 hover:text-orange-500 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{section.description}</p>
                      <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={section.heroImage || "/placeholder.svg"}
                          alt={section.title}
                          width={350}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href || "#"}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 group transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-gray-900 font-medium text-sm group-hover:text-gray-700">
                              {item.title}
                            </h4>
                            <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                    {section.specialItem && (
                      <Link
                        href={section.specialItem.href || "#"}
                        className="block rounded-lg overflow-hidden mt-2"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <div className={`${section.specialItem.backgroundColor} p-4`}>
                          <div className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                              <Image
                                src={section.specialItem.image || "/placeholder.svg"}
                                alt={section.specialItem.title}
                                width={80}
                                height={60}
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-medium text-sm">{section.specialItem.title}</h4>
                              <p className="text-white text-xs mt-1">{section.specialItem.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                {expertiseDropdown.bottomMessages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {message.icon.endsWith(".svg") ? (
                      <img
                        src={message.icon}
                        alt="Icone"
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="text-2xl">{message.icon}</div>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed">{message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Dropdown */}
        {activeDropdown === "services" && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[95vw] max-w-[1280px] bg-white rounded-3xl shadow-2xl border border-gray-200 z-50 p-6 sm:p-8 lg:p-10"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 min-h-[300px] sm:min-h-[400px]">
              {servicesDropdown.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-gray-900 text-lg font-bold">{section.title}</h3>
                      {section.badge && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {section.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href || "#"}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 group transition-colors"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-gray-900 font-medium text-sm group-hover:text-gray-700">
                              {item.title}
                            </h4>
                            <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                {servicesDropdown.bottomMessages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {message.icon.endsWith(".svg") ? (
                      <img
                        src={message.icon}
                        alt="Icon"
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="text-2xl">{message.icon}</div>
                    )}
                    <p className="text-gray-600 text-sm">{message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Resources Dropdown */}
        {activeDropdown === "resources" && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[95vw] max-w-[1280px] bg-white rounded-3xl shadow-2xl border border-gray-200 z-50 p-6 sm:p-8 lg:p-10"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[400px]">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {resourcesDropdown.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-6">
                    <Link
                      href={section.href || "#"}
                      className="block"
                      onClick={() => {
                        setActiveDropdown(null)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <div>
                        <h3 className="text-gray-900 text-lg font-bold mb-2 hover:text-orange-500 transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{section.description}</p>
                        <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
                          <Image
                            src={section.heroImage || "/placeholder.svg"}
                            alt={section.title}
                            width={350}
                            height={200}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href || "#"}
                          className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 group transition-colors"
                          onClick={() => {
                            setActiveDropdown(null)
                            setIsMobileMenuOpen(false)
                          }}
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="object-cover w-full h-full rounded-lg"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-gray-900 font-medium text-sm group-hover:text-gray-700">
                                {item.title}
                              </h4>
                              <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className={`${resourcesDropdown.featuredReport.backgroundColor} p-6 rounded-lg text-white`}>
                  <h3 className="text-lg font-bold mb-2">{resourcesDropdown.featuredReport.title}</h3>
                  <p className="text-sm mb-4 opacity-90">{resourcesDropdown.featuredReport.description}</p>
                  <div className="w-full h-60 bg-white bg-opacity-20 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={resourcesDropdown.featuredReport.image || "/placeholder.svg"}
                      alt={resourcesDropdown.featuredReport.title}
                      width={250}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <Link
                    href={resourcesDropdown.featuredReport.href || "#"}
                    className="w-full block bg-white text-orange-600 hover:bg-gray-100 text-center py-2 px-4 rounded-full font-medium transition-colors"
                    onClick={() => {
                      setActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {resourcesDropdown.featuredReport.ctaButton}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                {resourcesDropdown.bottomMessages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {message.icon.endsWith(".svg") ? (
                      <img
                        src={message.icon}
                        alt="Icone"
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="text-2xl">{message.icon}</div>
                    )}
                    <p className="text-gray-600 text-sm">{message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 animate-modal-backdrop" />
            <div
              className={`lg:hidden fixed top-0 left-0 h-full w-full z-40 bg-black transform transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="h-[88px] px-4 flex items-center justify-between relative z-50">
                  <Link href="/" onClick={toggleMobileMenu}>
                    <Image
                      src="/asteraki_logo.webp?height=60&width=180&text=Asteraki+LOGO"
                      alt="Logo Asteraki"
                      width={220}
                      height={90}
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-2">
                    <div>
                      <button
                        onClick={() => handleMobileSectionClick("services")}
                        className="w-full flex items-center justify-between py-4 text-white text-lg font-medium border-b border-gray-800"
                      >
                        <span>Services</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileActiveSection === "services" ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {mobileActiveSection === "services" && (
                        <div className="pl-4 py-2 space-y-2 animate-dropdown-enter">
                          {servicesDropdown.sections.map((section, index) => (
                            <div key={index}>
                              <button
                                onClick={() => handleMobileSubsectionClick(section.title)}
                                className="w-full flex items-center justify-between py-3 text-gray-300 text-base border-b border-gray-700"
                              >
                                <span>{section.title}</span>
                                <ChevronRight
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    mobileActiveSubsection === section.title ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                              {mobileActiveSubsection === section.title && (
                                <div className="pl-4 py-2 space-y-2 animate-dropdown-enter">
                                  {section.items.map((item, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      href={item.href || "#"}
                                      className="block py-2 text-gray-400 text-sm hover:text-white transition-colors"
                                      onClick={toggleMobileMenu}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={() => handleMobileSectionClick("expertises")}
                        className="w-full flex items-center justify-between py-4 text-white text-lg font-medium border-b border-gray-800"
                      >
                        <span>Expertise</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileActiveSection === "expertises" ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {mobileActiveSection === "expertises" && (
                        <div className="pl-4 py-2 space-y-2 animate-dropdown-enter">
                          {expertiseDropdown.sections.map((section, index) => (
                            <div key={index}>
                              <button
                                onClick={() => handleMobileSubsectionClick(section.title)}
                                className="w-full flex items-center justify-between py-3 text-gray-300 text-base border-b border-gray-700"
                              >
                                <span>{section.title}</span>
                                <ChevronRight
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    mobileActiveSubsection === section.title ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                              {mobileActiveSubsection === section.title && (
                                <div className="pl-4 py-2 space-y-2 animate-dropdown-enter">
                                  {section.items.map((item, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      href={item.href || "#"}
                                      className="block py-2 text-gray-400 text-sm hover:text-white transition-colors"
                                      onClick={toggleMobileMenu}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <Link
                        href="/realisations"
                        className="block py-4 text-white text-lg font-medium border-b border-gray-800"
                        onClick={toggleMobileMenu}
                      >
                        Réalisations
                      </Link>
                    </div>
                    <div>
                      <button
                        onClick={() => handleMobileSectionClick("resources")}
                        className="w-full flex items-center justify-between py-4 text-white text-lg font-medium border-b border-gray-800"
                      >
                        <span>Ressources</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileActiveSection === "resources" ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {mobileActiveSection === "resources" && (
                        <div className="pl-4 py-2 space-y-2 animate-dropdown-enter">
                          {resourcesDropdown.sections.map((section, index) => (
                            <div key={index}>
                              <button
                                onClick={() => handleMobileSubsectionClick(section.title)}
                                className="w-full flex items-center justify-between py-3 text-gray-300 text-base border-b border-gray-700"
                              >
                                <span>{section.title}</span>
                                <ChevronRight
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    mobileActiveSubsection === section.title ? "rotate-90" : ""
                                  }`}
                                />
                              </button>
                              {mobileActiveSubsection === section.title && (
                                <div className="pl-4 py-2 space-y-2 animate-dropdown-enter">
                                  {section.items.map((item, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      href={item.href || "#"}
                                      className="block py-2 text-gray-400 text-sm hover:text-white transition-colors"
                                      onClick={toggleMobileMenu}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-800">
                  <Link href="/contact" passHref>
                    <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-2">
                      Devis gratuit en 1h
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Video Modal (kept for possible future use in other sections) */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center px-2"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative max-w-7xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-50 text-white text-4xl font-bold cursor-pointer"
              aria-label="Fermer la vidéo"
            >
              &times;
            </button>
            <div className="w-full h-0 pb-[56.25%] relative rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1105886150?autoplay=1&controls=1&muted=0"
                title="Lecteur vidéo"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}