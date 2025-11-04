import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import HealthcareVideoFAQSection from "./healthcare-video-faq"
import FinalCTASection from "./healthcare-video-cta"

export const generateMetadata = async () => {
  return {
    title: "Production vidéo pour la santé | Asteraki",
    description: "Production vidéo pour les organisations de santé. Nous créons des vidéos qui éduquent les patients, expliquent les concepts médicaux et respectent les réglementations.",
  }
}

export default function HealthcareVideoProductionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Hero Section */}
        <section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <div className="text-sm font-semibold text-black mb-3 tracking-widest">
                  PRODUCTION VIDÉO SANTÉ
                </div>
                <h1 className="text-5xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Communication de santé compassionnelle par le storytelling vidéo stratégique.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos authentiques et cinématographiques spécialement conçues pour les organisations de santé qui équilibrent le storytelling empathique avec une stricte conformité réglementaire. De la conception initiale à la livraison finale, nous gérons tous les aspects de la production avec une expertise approfondie de l'industrie de la santé et des connaissances réglementaires.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quiz" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center h-96">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    
                  >
                    <source src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy" type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
  <section className="pt-0 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <p className="text-center text-black font-normal mt-4 sm:mt-6 text-sm sm:text-base px-4">
        Nous avons accompagné plus de 250 entreprises en France
      </p>

      {/* Logo Carousel */}
      <div className="relative overflow-hidden mb-8 sm:mb-12">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(237, 237, 237, 0), transparent)",
          }}
        ></div>
        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsla(0, 0%, 100%, 0.00), rgba(237, 237, 237, 0), transparent)",
          }}
        ></div>

        <div className="flex animate-scroll-seamless">
          {[
            { name: "sage", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV4bnvwY2lTHSXo8DmjG0ZWyuahPUIeOpds65E" },
            { name: "notion", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRjuai5V8xN4tsZSVcawW35TIh0CgyLOYHAiX" },
            { name: "dell", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyVJ83Vf7jHwWMkUO0E4Y25ImLfS3X8vyRBib" },
            { name: "deloitte", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVufQdOSMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2" },
            { name: "malt", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVN72SnQD45FgMDujBmTbOY28pnK0y4lkrZfWx" },
            { name: "aircall", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlYofGSq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
            { name: "sanofi", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlVYsEdq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
            { name: "uber", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVci8fmc9r3QfKI0dziE8sFt4BVwMqT2bChkLN" },
            { name: "zapier", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNLoseK45FgMDujBmTbOY28pnK0y4lkrZfWxe" },
          ]
            .concat([
              { name: "sage", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV4bnvwY2lTHSXo8DmjG0ZWyuahPUIeOpds65E" },
              { name: "notion", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRjuai5V8xN4tsZSVcawW35TIh0CgyLOYHAiX" },
              { name: "dell", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyVJ83Vf7jHwWMkUO0E4Y25ImLfS3X8vyRBib" },
              { name: "deloitte", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVufQdOSMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2" },
              { name: "malt", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVN72SnQD45FgMDujBmTbOY28pnK0y4lkrZfWx" },
              { name: "aircall", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlYofGSq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
              { name: "sanofi", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlVYsEdq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" }, 
              { name: "uber", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVci8fmc9r3QfKI0dziE8sFt4BVwMqT2bChkLN" },
              { name: "zapier", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNLoseK45FgMDujBmTbOY28pnK0y4lkrZfWxe" },
            ])
            .map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] mx-2 sm:mx-4"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="opacity-60 hover:opacity-80 transition-opacity object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>

        {/* Value Proposition */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-8xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMD3yucX6YLO1BSGiKj2D5WhHcuQrys4MloaJ"
                    alt="Image de vidéo de santé avec interface de clinique Mayo"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Médecine complexe. Communication claire. Confiance des patients.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos de santé constituent le moyen le plus efficace pour renforcer la confiance des patients et expliquer des informations médicales complexes dans un environnement compassionnel et conforme. Elles associent le storytelling stratégique à la conformité réglementaire pour améliorer les résultats des patients, renforcer la crédibilité de la marque et communiquer la valeur dans une industrie où la communication claire peut être une question de vie ou de mort.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis gratuit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24" style={{ backgroundColor: "#ffffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Comment nous assurons la livraison de vidéos de santé<br/> qui renforcent la confiance et respectent les normes
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Conformité HIPAA",
                  title: "Conformité HIPAA",
                  desc: "Notre équipe comprend d'anciens agents de conformité de la santé et des rédacteurs médicaux qui garantissent que tout le contenu respecte les réglementations HIPAA, FDA, FTC et autres normes de santé. Nous mettons en œuvre des flux de révision rigoureux qui satisfont même les départements de conformité les plus stricts.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q", 
                  alt: "Storytelling compassionnel",
                  title: "Storytelling compassionnel",
                  desc: "Nous créons des récits qui traitent des barrières émotionnelles spécifiques dans le domaine de la santé, en utilisant des techniques de narration empathiques qui renforcent la confiance tout en respectant les exigences réglementaires pour les divulgations et les mentions de risque.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Exactitude médicale",
                  title: "Exactitude médicale",
                  desc: "Nos experts médicaux traduisent des procédures et des pathologies complexes en explications claires et engageantes sans les simplifier excessivement ni violer les directives réglementaires, rendant des concepts médicaux sophistiqués accessibles à votre public cible.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-left border border-black rounded-3xl p-12 bg-beige-200"
                >
                  <div className="w-16 h-16 mb-8">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain invert-0 sepia saturate-200 hue-rotate-12"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6">{item.title}</h3>
                  <p className="text-lg text-black mb-8 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Communicate with Clarity Section */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Transformer l'information médicale complexe en clarté compassionnelle.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos de santé fonctionnent parce qu'elles résolvent le défi fondamental de la communication médicale : expliquer des traitements complexes tout en maintenant la conformité réglementaire et la sensibilité émotionnelle. 
                    Lorsque les patients voient une vidéo de haute qualité qui communique clairement 
                    leurs options de traitement tout en divulguant correctement les risques, cela renforce la confiance d'une manière que les documents textuels ne peuvent jamais atteindre.
                  </p>
                </div>
                <Link href="/contact" passHref>
                  <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                    Obtenir une consultation gratuite
                  </button>
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVaBLRs8ZsONX0DMj54Vk3gxKWAvEe9Tmohn6Y"
                    alt="Image de vidéo de marque Sanofi"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl">
              <div className="flex items-center mb-5">
                <img
                  src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVx8C1HvkdfVjkbuO409UhABiKIpeEqDgnCNwH"
                  alt="Logo Clinique Mayo"
                  className="w-24 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "La série vidéo qu'Asteraki a créée pour notre programme d'éducation des patients a été essentielle pour améliorer la compréhension et la satisfaction des patients. 
                Nous avons constaté une réduction de 38 % des questions des patients concernant les procédures et une amélioration de 29 % de l'observance des traitements après avoir mis en œuvre leurs vidéos dans nos canaux de communication avec les patients. 
                La connaissance médicale approfondie combinée à un storytelling compassionnel correspondait exactement à ce dont nos patients avaient besoin pour comprendre leurs options de traitement."
              </blockquote>
              <div className="text-black font-semibold mb-4">Gianrico Farrugia, PDG de la Clinique Mayo</div>
            </div>
          </div>
        </section>

        {/* Why Healthcare Videos Work */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  LA PUISSANCE DE LA COMMUNICATION COMPASSIONNELLE
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Pourquoi les vidéos de santé stimulent une meilleure compréhension et des résultats des patients
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Dans l'environnement sanitaire actuel, une communication claire peut être une question de vie ou de mort. 
                  Le contenu vidéo stratégique associe la conformité réglementaire au storytelling compassionnel pour 
                  renforcer la confiance des patients, expliquer des traitements complexes et améliorer les résultats de santé tout en 
                  satisfaisant les exigences strictes des régulateurs de la santé.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos de santé ne se contentent pas d'avoir un aspect professionnel - elles sont stratégiquement conçues avec une connaissance approfondie des réglementations 
                  pour communiquer clairement des concepts médicaux complexes tout en maintenant une pleine conformité et une sensibilité émotionnelle, 
                  transformant la vidéo en un actif de renforcement de la confiance plutôt qu'en un simple outil marketing.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Améliore la compréhension des patients</h3>
                      <p className="text-gray-400">Les organisations de santé utilisant des vidéos d'éducation des patients conformes constatent une compréhension de 38 % supérieure des options de traitement et des procédures par rapport à celles qui s'appuient uniquement sur des documents textuels, réduisant la confusion et l'anxiété.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Augmente l'observance des traitements</h3>
                      <p className="text-gray-400">Les patients qui s'engagent avec des vidéos explicatives de santé conformes montrent des taux d'observance des traitements 29 % plus élevés, car les explications visuelles claires des régimes médicamenteux et des procédures réduisent les malentendus qui conduisent à la non-observance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Réduit l'anxiété des patients</h3>
                      <p className="text-gray-400">Les patients qui consultent des vidéos explicatives de procédures signalent 33 % moins d'anxiété concernant les traitements à venir comparé à ceux qui reçoivent uniquement des explications verbales, car les démonstrations visuelles créent une compréhension de ce à quoi s'attendre.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Renforce la confiance dans les prestataires médicaux</h3>
                      <p className="text-gray-400">Les prestataires de santé utilisant des explications visuelles des options de traitement constatent des scores de confiance 31 % plus élevés de la part des patients, car la transparence concernant les procédures renforce la crédibilité et réduit le scepticisme concernant les recommandations de traitement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Réduit les risques de non-conformité</h3>
                      <p className="text-gray-400">Les organisations de santé utilisant des services de production vidéo spécialisés constatent 44 % moins de violations de conformité liées aux documents d'éducation des patients, car les exigences réglementaires sont intégrées dans le processus créatif dès l'origine.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne créons pas seulement des vidéos pour les organisations de santé - nous concevons des actifs de communication conformes aux réglementations conçus pour renforcer la confiance tout en satisfaisant les exigences réglementaires les plus strictes et en répondant aux besoins émotionnels des patients. Laissez-nous vous aider à transformer des concepts médicaux complexes en histoires claires et compassionnelles qui améliorent les résultats des patients.
                </blockquote>
                
                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                       Obtenir une consultation vidéo de santé gratuite
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Visual Elements */}
              <div className="relative">
                {/* Main Video - Auto-looping, silent */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/healthcare-video-demo.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">38%</div>
                    <p className="text-gray-400 text-sm">Meilleure compréhension des patients des options de traitement</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">29%</div>
                    <p className="text-gray-400 text-sm">Taux d'observance des traitements plus élevés</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">33%</div>
                    <p className="text-gray-400 text-sm">Moins d'anxiété concernant les traitements</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">60+</div>
                    <p className="text-gray-400 text-sm">Organisations de santé desservies avec des solutions vidéo conformes aux réglementations</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <HealthcareVideoFAQSection />     

        {/* Final CTA Section */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}