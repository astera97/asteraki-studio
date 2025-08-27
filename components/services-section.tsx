"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, X, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  category: string
  client: string
  description: string
  details: string[]
  videoUrl: string
  logo?: string
  thumbnail: string
}

const projectsRow1: Project[] = [
  {
    id: "Bolt",
    title: "Bolt",
    category: "Vidéo carrière",
    client: "Vidéo carrière",
    description: "Campagne de recrutement pour Bolt mettant en avant la culture d'entreprise à travers les parcours des employés.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1104256442  ",
    thumbnail: "/bolt_portfolio.webp?height=180&width=320&text=Career+Videos+Klarna",
  },
  {
    id: "Mercury Bank",
    title: "Mercury Bank",
    category: "Vidéo marque",
    client: "Mercury Bank",
    description: "Campagne vidéo promotionnelle pour Mercury, mettant en avant les valeurs uniques de l'entreprise.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1104166857  ",
    logo: "💻",
    thumbnail: "/paid_ch.webp?height=180&width=320&text=SaaS+Presentation+TechCorp",
  },
  {
    id: "career-video",
    title: "Klarna",
    category: "Vidéo carrière",
    client: "Vidéo carrière",
    description: "Portrait d'employés chez Klarna pour présenter la culture d'entreprise.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1104267844  ",
    thumbnail: "/klarna_portfolio.webp?height=180&width=320&text=Client+Testimonial+StartupXYZ",
  },
  {
    id: "brand-video",
    title: "Vacheron Constantin",
    category: "Vidéo marque",
    client: "Vidéo marque",
    description: "Mise en avant de la collaboration entre la marque et l'artiste à travers des images cinématographiques.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1104169646  ",
    thumbnail: "/vacheron_portfolio.webp?height=180&width=320&text=TV+Advertisement+BrandCorp",
  },
  {
    id: "customer-testimonial",
    title: "HSBC",
    category: "Témoignage client",
    client: "Témoignage client",
    description: "Témoignage du directeur financier de Cinépolis sur la manière dont HSBC soutient leur croissance.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1102894973  ",
    thumbnail: "/hsbc_testim_portfolio.webp?height=180&width=320&text=Motion+Design+Creative",
  },
  {
    id: "expert talk",
    title: "Okta",
    category: "Discussion d'expert",
    client: "Discussion d'expert",
    description: "Un aperçu de l'avenir avec des leaders de la sécurité informatique.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1103750819  ",
    thumbnail: "/okta_portfolio.webp?height=180&width=320&text=Motion+Design+Creative",
  },
]

const projectsRow2: Project[] = [
  {
    id: "Girard Perregaux",
    title: "Girard Perregaux",
    category: "Vidéo Marque",
    client: "Vidéo Marque",
    description: "Vidéo promotionnelle pour Girard Perregaux présentant leur dernière montre.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1102877371  ",
    thumbnail: "/gp_portfolio.webp?height=180&width=320&text=Explainer+Video+FinTech",
  },
  {
    id: "Promotional video",
    title: "Framery",
    category: "Vidéo promotionnelle",
    client: "Vidéo promotionnelle",
    description: "Vidéo promotionnelle pour Framery présentant leur nouveau meuble et ses caractéristiques.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1106893991  ",
    thumbnail: "/framery_portfolio.webp?height=180&width=320&text=Explainer+Video+FinTech",
  },
  {
    id: "Brand video",
    title: "Xencelabs",
    category: "Vidéo marque",
    client: "Vidéo marque",
    description: "Vidéo marque pour Xencelabs afin de promouvoir le Xencelabs Pen Display 24.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1106895426  ",
    thumbnail: "/xencelabs_portfolio.webp?height=180&width=320&text=Corporate+Film+Global",
  },
  {
    id: "Customer testimonial",
    title: "HP",
    category: "Témoignage client",
    client: "Témoignage client",
    description: "Témoignage de Digital Etikett sur la manière dont HP soutient leurs opérations.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1106899507  ",
    thumbnail: "/hp_portfolio.webp?height=180&width=320&text=Training+Video+LearnCorp",
  },
  {
    id: "Animation",
    title: "Tag Heuer",
    category: "Vidéo d'animation",
    client: "Tag Heuer",
    description: "Vidéo promotionnelle animée présentant la dernière montre TAG Heuer en collaboration avec Malbon Golf.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1103809113  ",
    thumbnail: "/tag_heuer_portfolio.webp?height=180&width=320&text=Product+Demo+InnovateTech",
  },
  {
    id: "promo-video",
    title: "Native Instruments",
    category: "Vidéo promotionnelle",
    client: "Vidéo promotionnelle",
    description: "Vidéo promotionnelle pour Native Instruments présentant leur nouvel instrument Kontrol/N.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1106896654  ",
    thumbnail: "/native_instruments_portfolio.webp?height=180&width=320&text=Event+Coverage+EventPro",
  },
  {
    id: "Customer testimonial",
    title: "Salesforce",
    category: "Témoignage client",
    client: "Témoignage client",
    description: "Témoignage de Fisher & Paykel sur la manière dont Salesforce Dreamforce soutient leurs opérations.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1106899743  ",
    thumbnail: "/salesforce_portfolio.webp?height=180&width=320&text=Social+Media+BrandBoost",
  },
  
]

export default function ServicesSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [translateX1, setTranslateX1] = useState(0)
  const [translateX2, setTranslateX2] = useState(0)
  const animationRef = useRef<number>()

  // Initialiser le deuxième carrousel pour qu'il commence depuis la gauche (position négative)
  useEffect(() => {
    const itemWidth = 320 + 24
    const totalWidth = itemWidth * projectsRow2.length
    setTranslateX2(-totalWidth)
  }, [])

  // Mouvement continu du carrousel avec animation de référence
  useEffect(() => {
    const animate = () => {
      const speed = isHovered ? 0.2 : 0.8 // Plus lent au survol
      setTranslateX1((prev) => {
        const itemWidth = 320 + 24 // largeur + écart
        const resetPoint = -(itemWidth * projectsRow1.length)
        const newX = prev - speed
        return newX <= resetPoint ? 0 : newX
      })

      setTranslateX2((prev) => {
        const itemWidth = 320 + 24 // largeur + écart
        const totalWidth = itemWidth * projectsRow2.length
        const newX = prev + speed
        // Réinitialiser à la largeur totale négative quand on atteint 0 (pour le mouvement de droite à gauche)
        return newX >= 0 ? -totalWidth : newX
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovered])

  const openModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  // Dupliquer les éléments pour une boucle continue
  const duplicatedProjectsRow1 = [...projectsRow1, ...projectsRow1]
  const duplicatedProjectsRow2 = [...projectsRow2, ...projectsRow2]

  return (
    <>
      <section className="py-12 sm:py-1" style={{ backgroundColor: "#ffffffff" }}>
        {/* Titre de la section - Centré avec padding */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-black">
            Nos services de production <br/>
            audiovisuelle pour entreprises
          </h2>
          <p className="text-black text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Produire des vidéos ne suffit plus. Il est désormais crucial de choisir les bons formats, 
            <br/>d’en maîtriser les codes, et de développer des idées créatives pertinentes <br/>pour optimiser l’impact de vos contenus. 
            
          </p>
        </div>
      </section>

      {/* Première ligne de carrousel vidéo - Responsive avec animation fluide */}
      <div
        className="overflow-hidden mb-6 sm:mb-8"
        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex gap-6 transition-none"
          style={{
            transform: `translateX(${translateX1}px)`,
            width: "fit-content",
          }}
        >
          {duplicatedProjectsRow1.map((project, index) => (
            <div key={`row1-${project.id}-${index}`} className="flex-shrink-0 w-64 sm:w-80 group">
              <div className="relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    width={320}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium text-sm sm:text-base">
                    {project.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deuxième ligne de carrousel vidéo - Responsive avec animation inversée */}
      <div
        className="overflow-hidden mb-8 sm:mb-12"
        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex gap-6 transition-none"
          style={{
            transform: `translateX(${translateX2}px)`,
            width: "fit-content",
          }}
        >
          {duplicatedProjectsRow2.map((project, index) => (
            <div key={`row2-${project.id}-${index}`} className="flex-shrink-0 w-64 sm:w-80 group">
              <div className="relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    width={320}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium text-sm sm:text-base">
                    {project.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateur de vitesse */}
      <div className="flex justify-center mb-8 sm:mb-12" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div
            className={`w-2 h-2 rounded-full transition-colors ${isHovered ? "bg-yellow-400" : "bg-green-400"}`}
          ></div>
          <span>{isHovered ? "" : ""}</span>
        </div>
      </div>

      {/* Section du bouton Portfolio */}
      <section className="pb-12 sm:pb-16" style={{ backgroundColor: "hsla(0, 0%, 100%, 1.00)" }}>
  <div className="text-center px-4">
    <Link href="/work" passHref>
      <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
        Découvrez nos réalisations
      </Button>
    </Link>
    <p className="text-black text-sm max-w-md mx-auto">
      Trouvez l'inspiration pour votre prochain projet parmi <br/>des dizaines de vidéos créées par notre agence.
    </p>
  </div>
</section>

      {/* Nouveau design de la modale - Inspiré par Asteraki */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-modal-backdrop">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden relative animate-modal-content">
            {/* Bouton de fermeture */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center z-10 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
              {/* Panneau de gauche - Sombre */}
              <div className="bg-black text-white p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Section du titre */}
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-light mb-2">{selectedProject.client}</h1>
                    <h2 className="text-2xl lg:text-3xl font-light text-gray-300 mb-6">{selectedProject.title}</h2>
                    <div className="w-16 h-1 bg-white"></div>
                  </div>

                  {/* Résumé du projet */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aperçu du projet</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
                  </div>

                  {/* Implication d'Asteraki */}
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Notre rôle</h3>
                    <div className="space-y-4">
                      {selectedProject.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-gray-300 text-lg">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bouton CTA */}
                <div className="pt-8">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-4 rounded-2xl font-semibold transition-colors">
                    Obtenir un devis similaire
                  </Button>
                </div>
              </div>

              {/* Panneau de droite - Clair */}
              <div className="bg-white p-8 lg:p-12 flex flex-col">
                {/* Lecteur vidéo */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-2xl">
                    <div className="aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <iframe
                        src={selectedProject.videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={selectedProject.title}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}