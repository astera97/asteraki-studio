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
  thumbnail: string
}

const projectsRow1: Project[] = [
  
  {
    id: "2",
    title: "Kuehne+Nagel",
    category: "Démonstration produit",
    client: "Kuehne+Nagel",
    description: "Vidéo explcative sur la solution de Kuehne+Nagel, myFairLOG.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1111696360",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV2AB1ak7WJBOGwHyYpLQ8mtukDFsr9nVZ07eK",
  },
  {
    id: "3",
    title: "Malt",
    category: "Keynote",
    client: "Malt",
    description: "Keynote à propos de la nouvelle fonctionnalité de Malt, AI search.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1114349973",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVJeYdFwKuqgdOsGVhtpIHWTxEMPov1QX37nkB",
  },
  {
    id: "4",
    title: "Aircall",
    category: "Vidéo de marque",
    client: "Aircall",
    description: "Vidéo de marque pour l'entreprise Aircall.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1114342036",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVcmINPu9r3QfKI0dziE8sFt4BVwMqT2bChkLN",
  },
  {
    id: "5",
    title: "Lucca",
    category: "Témoignage client",
    client: "Lucca",
    description: "Vidéo témoignage client avec le client Lucca, ICSEO.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1114336847",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVAxxMJwhHjGD6UJSv1WeB5b7LYpa8COcwltVf",
  },
  {
    id: "6",
    title: "HP France",
    category: "Conseil d'expert",
    client: "HP France",
    description: "Série HP sur la cybersécurité en partenariat avec le Figaro.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1114325979",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVvGjVXi13dJewK5HDhqcx2ks9fTPaG0RgtMrU",
  },
]

const projectsRow2: Project[] = [
  {
    id: "1",
    title: "Girard Perregaux",
    category: "Vidéo de marque",
    client: "Girard Perregaux",
    description: "Vidéo promotionnelle pour Girard Perregaux présentant leur dernière montre.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1102877371",
    thumbnail: "/gp_portfolio.webp?height=180&width=320&text=Girard+Perregaux+Watch",
  },
  {
    id: "2",
    title: "Deloitte",
    category: "Témoignage client",
    client: "Deloitte",
    description: "Vidéo témoignage client avec le client de Deloitte, EXEL.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1113694980",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZN3ImH5DmjQM0nVEs2BHNKk8yJeWpug7rf34",
  },
  {
    id: "3",
    title: "Sage",
    category: "Vidéo explicative",
    client: "Sage",
    description: "Vidéo d'animation expliquant comment utiliser Sage.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1113692995",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVVINHJYcCRjU0PEv7T9OCi5BZ8hqeAgSKnaIz",
  },
  {
    id: "4",
    title: "Bolt",
    category: "Évènement",
    client: "Bolt",
    description: "Aftermovie avec Bolt lors de leur événement team building.",
    details: ["Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1104168315",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywbwgrntOiCeEItjw1VXN8kvL65WuUqFRDcO24",
  },
  {
    id: "5",
    title: "Tag Heuer",
    category: "Vidéo d'animation",
    client: "Tag Heuer",
    description: "Vidéo promotionnelle animée présentant la dernière montre TAG Heuer en collaboration avec Malbon Golf.",
    details: ["Scénario", "Cinématographie", "Mixage sonore", "Étalonnage colorimétrique"],
    videoUrl: "https://player.vimeo.com/video/1104256442",
    thumbnail: "/tag_heuer_portfolio.webp?height=180&width=320&text=TAG+Heuer+Malbon+Golf",
  },
]

export default function ServicesSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [translateX1, setTranslateX1] = useState(0)
  const [translateX2, setTranslateX2] = useState(0)
  const animationRef = useRef<number>()

  useEffect(() => {
    const itemWidth = 320 + 24
    const totalWidth = itemWidth * projectsRow2.length
    setTranslateX2(-totalWidth)
  }, [])

  useEffect(() => {
    const animate = () => {
      const speed = isHovered ? 0.2 : 0.8
      setTranslateX1((prev) => {
        const itemWidth = 320 + 24
        const resetPoint = -(itemWidth * projectsRow1.length)
        const newX = prev - speed
        return newX <= resetPoint ? 0 : newX
      })

      setTranslateX2((prev) => {
        const itemWidth = 320 + 24
        const totalWidth = itemWidth * projectsRow2.length
        const newX = prev + speed
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

  const duplicatedProjectsRow1 = [...projectsRow1, ...projectsRow1]
  const duplicatedProjectsRow2 = [...projectsRow2, ...projectsRow2]

  return (
    <>
      {/* Section Title */}
      <section className="py-12 sm:py-1" style={{ backgroundColor: "#ffffffff" }}>
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-black">
            Nos services de production <br />
            audiovisuelle pour entreprises
          </h2>
          <p className="text-black text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Produire des vidéos ne suffit plus. Il est désormais crucial de choisir les bons formats,
            <br />
            d’en maîtriser les codes, et de développer des idées créatives pertinentes <br />
            pour optimiser l’impact de vos contenus.
          </p>
        </div>
      </section>

      {/* First Carousel (Row 1) */}
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
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={320}
                    height={180}
                    className="object-cover w-full h-full"
                  />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Title + Category with reduced spacing and orange branding */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white space-y-0">
                    <div className="font-bold text-base sm:text-lg mb-0.5">{project.title}</div>
                    <div
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: "#FF6B35" }} // Couleur orange de branding
                    >
                      {project.id === "1" ? `${project.client} • ${project.category}` : project.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Carousel (Row 2) */}
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
              <div
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
  <Image
    src={project.thumbnail}
    alt={project.title}
    width={320}
    height={180}
    className="object-cover w-full h-full"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Title + Category for Row 2 */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white space-y-0">
                    <div className="font-bold text-base sm:text-lg mb-0.5">{project.title}</div>
                    <div
                      className="text-xs sm:text-sm font-medium"
                      style={{ color: "#FF6B35" }}
                    >
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speed Indicator */}
      <div className="flex justify-center mb-8 sm:mb-12" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div
            className={`w-2 h-2 rounded-full transition-colors ${isHovered ? "bg-yellow-400" : "bg-green-400"}`}
          ></div>
          <span>{isHovered ? "" : ""}</span>
        </div>
      </div>

      {/* Portfolio Button */}
      <section className="pb-12 sm:pb-16" style={{ backgroundColor: "hsla(0, 0%, 100%, 1.00)" }}>
        <div className="text-center px-4">
          <Link href="/realisations" passHref>
            <Button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
              Découvrez nos réalisations
            </Button>
          </Link>
          <p className="text-black text-sm max-w-md mx-auto">
            Trouvez l'inspiration pour votre prochain projet parmi <br />des dizaines de vidéos créées par notre agence.
          </p>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-modal-backdrop">
          <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden relative animate-modal-content">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center z-10 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
              {/* Left Panel - Dark */}
              <div className="bg-black text-white p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-light mb-2">{selectedProject.client}</h1>
                    <div className="w-16 h-1 bg-white mb-4"></div>
                    <h2 className="text-2xl lg:text-3xl font-light text-gray-300 mb-6">{selectedProject.category}</h2>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aperçu du projet</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
                  </div>

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

                <div className="pt-8">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-4 rounded-2xl font-semibold transition-colors">
                    Obtenir un devis similaire
                  </Button>
                </div>
              </div>

              {/* Right Panel - Video */}
              <div className="bg-white p-8 lg:p-12 flex flex-col">
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