import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import CustomerStoryFAQSection from "./customer-story-faq"
import FinalCTASection from "./customer-story-cta"

export const generateMetadata = async () => {
  return {
    title: "Vidéo Témoignage Client | Créez une Preuve Sociale Authentique - Asteraki",
    description: "Vous cherchez une agence pour produire une vidéo témoignage client ? Découvrez comment des témoignages authentiques boostent la confiance des prospects et augmentent vos conversions en France.",
    alternates: {
      canonical: "https://asteraki.com/production-video-temoignage-client"
    }
  }
}

export default function CustomerStoryVideoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Section Héro */}
        {/* Section Héro - MODIFICATIONS MINIMALES */}
<section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-xl">
        {/* SUPPRESSION de la div "Production de vidéos témoignages clients" */}
        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
          Vidéo témoignage client <br/>Transformez vos clients en vos meilleurs vendeurs.
        </h1>
        <p className="text-normal mb-5">
          Nous créons des vidéos témoignage client authentiques et cinématographiques qui renforcent la confiance, démontrent de vrais résultats et convertissent les prospects en clients. De la conception initiale à la livraison finale, nous gérons tous les aspects de la production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/quiz" passHref>
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
              Estimer votre projet en 1-minute
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
            poster="/customer-story-poster.jpg"
          >
            <source src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy" type="video/mp4" />
            Votre navigateur ne prend pas en charge la balise vidéo.
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

        {/* Proposition de valeur */}
{/* Proposition de valeur - VERSION FINALE (1 PHRASE) */}
<section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
  <div className="max-w-8xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnrVMma2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE"
            alt="Tournage témoignage client sur site"
            className="w-full"
          />
        </div>
      </div>
      <div className="max-w-xl">
        {/* MODIFICATION CLÉ (1 SEULE PHRASE) */}
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Des vidéos témoignage client qui transforme la confiance en ventes
        </h2>
        <div className="space-y-6 text-lg text-black leading-relaxed">
          <p>
            Nous capturons des moments réels où vos clients partagent leurs succès, 
            créant une confiance immédiate auprès des prospects en phase de décision. 
            
          </p>
        </div>
        <div className="mt-10">
          <Link href="/contact" passHref>
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg">
              Obtenir un devis
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Fonctionnalités */}
        <section className="py-24" style={{ backgroundColor: "#ffffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Vidéo témoignage client par un processus de production maîtrisé
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Récit authentique",
                  title: "Récit authentique",
                  desc: "Nous nous concentrons sur des moments réels et non scénarisés qui mettent en valeur des émotions authentiques et des résultats spécifiques obtenus par vos clients.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q", 
                  alt: "Production de bout en bout",
                  title: "Production de bout en bout",
                  desc: "De l'identification des bons clients au tournage sur site et au montage de la pièce finale, nous gérons tout pour que vous puissiez vous concentrer sur votre entreprise.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Distribution multi-canaux",
                  title: "Distribution multi-canaux",
                  desc: "Nous livrons votre témoignage client dans plusieurs formats optimisés pour le site web, les présentations commerciales, les réseaux sociaux et les campagnes par e-mail.",
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

        {/* Section Portfolio */}
        <PortfolioSection />

        {/* Section Communiquer avec clarté */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  La confiance durable se construit autour de la vidéo témoignage client
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos témoignages clients fonctionnent parce qu'elles proviennent d'un lieu d'authenticité. 
                    Lorsque les prospects voient de vraies personnes comme eux réussir avec votre solution, 
                    cela crée de la confiance et réduit le risque perçu d'une manière que le texte marketing ne pourra jamais atteindre.
                  </p>
                </div>
                <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis
                    </button>
                  </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywLGDK1jBEFAvwOdGUzS8rfWxIcVho5ekmLqYl?height=400&width=500&text=Customer+Testimonial"
                    alt="Témoignage client"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi les témoignages clients fonctionnent */}
        {/* Section "Preuve sociale" - VERSION FRANÇAISE PROFESSIONNELLE */}
<section className="py-24" style={{ backgroundColor: "#111111" }}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Colonne de gauche - Contenu principal */}
      <div>
        <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
          La preuve sociale en pratique
        </div>
        
        {/* H2 RETRAVAILLÉ - Intégration mid-sentence */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Pourquoi la vidéo témoignage client s'impose face au marketing traditionnel
        </h2>
        
        <p className="text-white mb-8 leading-relaxed">
          En France, 7 décideurs sur 10 se méfient des arguments marketing classiques. 
          Ils préfèrent écouter leurs pairs. Une vidéo témoignage client bien réalisée 
          devient alors votre meilleure alliée pour établir une relation de confiance authentique.
        </p>
        
        <p className="text-white mb-10 leading-relaxed">
          Chez Asteraki, nous ne montrons pas simplement des clients satisfaits – 
          nous capturons leur parcours réel : le défi initial, la mise en œuvre concrète, 
          et les résultats mesurables obtenus grâce à votre solution.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Confiance immédiate</h3>
              <p className="text-gray-400">Un client parlant de ses résultats réels crée plus de crédibilité en 2 minutes qu'une campagne marketing en 2 mois.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Décision apaisée</h3>
              <p className="text-gray-400">Voir des entreprises similaires réussir réduit l'appréhension naturelle face à un nouvel investissement.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Argumentation complète</h3>
              <p className="text-gray-400">Les témoignages répondent aux objections avant même qu'elles ne soient formulées, accélérant le processus décisionnel.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Preuve tangible</h3>
              <p className="text-gray-400">Des chiffres concrets, des avantages théoriques. Vos clients idéaux s'identifient aux résultats présentés.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Impact durable</h3>
              <p className="text-gray-400">Une histoire vraie avec des émotions sincères laisse une empreinte plus forte qu'un argument rationnel seul.</p>
            </div>
          </div>
        </div>
        
        <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
          "Chez Asteraki, nous croyons qu'un témoignage client réussi ne se compose pas – il se capture. 
          Notre rôle : mettre en lumière la transformation réelle vécue par vos clients, sans artifice."
        </blockquote>
        
        <div className="mt-12">
          <Link href="/contact" passHref>
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg">
              Obtenir un devis
            </button>
          </Link>
        </div>
      </div>
      
      {/* Colonne de droite - Éléments visuels */}
      <div className="relative">
        {/* Vidéo principale */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
          <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7IlAPs3wavFUfw5SNg3PlOHYAIuB0yjRm1hp" type="video/mp4" />
              Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        {/* Cartes de statistiques - TERMES FRANÇAIS */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">+35%</div>
            <p className="text-gray-400 text-sm">De conversions supplémentaires pour les entreprises utilisant des vidéos témoignage client</p>
          </div>
          
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">4,2x</div>
            <p className="text-gray-400 text-sm">Plus d'engagement que les vidéos de démonstration produits</p>
          </div>
          
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">2,8x</div>
            <p className="text-gray-400 text-sm">De temps passé sur la vidéo vs les contenus explicatifs</p>
          </div>
          
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">200+</div>
            <p className="text-gray-400 text-sm">De témoignages clients réalisés pour des ETI et grands comptes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Section FAQ */}
        <CustomerStoryFAQSection />     

        {/* Section CTA finale */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}
