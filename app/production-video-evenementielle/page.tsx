import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import EventVideoFAQSection from "./event-faq"
import FinalCTASection from "./event-cta"
import ProcessTimelineSection from "./process-section";
import WhyChooseUsSection from './WhyChooseUsSection';

export const generateMetadata = async () => {
  return {
    title: "Production de vidéos d'événements | Asteraki",
    description: "Capturez votre événement avec une couverture vidéo professionnelle. Notre équipe livre des vidéos d'événements cinématographiques qui engagent les audiences et étendent la portée de votre événement.",
  }
}

export default function EventVideoProductionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Section Héro */}
        <section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <div className="text-sm font-semibold text-black mb-3 tracking-widest">
                  Services de production de vidéos d'événements
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Captation d’événements B2B : Vidéos stratégiques pour renforcer votre marque et convertir vos prospects
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos d’événements professionnelles grâce à une captation d’évènements sur-mesure 
                  qui capture l’énergie, l’émotion et les moments clés de votre conférence, salon professionnel ou événement 
                  d’entreprise. De la configuration multi-caméras aux réels de temps forts, nous gérons tous les aspects 
                  de la production — du brief à la livraison finale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" passHref>
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
                    poster="/event-video-poster.jpg"
                  >
                    <source src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        { /* Client Logos Section */ }
<section className="pt-0 pb-12" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}> {/* ⬇️ Reduced from pb-24 to pb-12 */}
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

{ /* Proposition de valeur */ }
<section className="py-12" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}> {/* ⬇️ Reduced from py-24 to py-12 */}
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="max-w-xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Une agence vidéo spécialisée dans tous les types de captation d’événements.
        </h2>
        <div className="text-lg text-black mb-10 leading-relaxed">
          <p className="mb-6">
            Spécialisés dans la réalisation de vidéos événementielles, nous accompagnons les entreprises 
            dans la captation professionnelle de leurs conférences, salons professionnels, 
            séminaires internes, lancements de produits, soirées de gala, conventions ou encore 
            sessions plénières. Chaque projet est traité avec rigueur : de la préparation à la livraison 
            en 24–48h pour les temps forts, en passant par un tournage multicaméras et un montage optimisé 
            pour LinkedIn, le site web ou la diffusion interne.
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
            src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvWc9HMGgmR8DzbQXG4njAStoPfq2aTk7JiFL"
            alt="Couverture de l'événement Salesforce Dreamforce"
            className="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Other sections */}
        <WhyChooseUsSection />


        {/* Section Portfolio */}
        <PortfolioSection />

        {/* Process — fully rewritten, human tone */}
        <ProcessTimelineSection />

        {/* Section Communiquer avec clarté */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Transformez votre événement en contenu intemporel.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos d'événements fonctionnent parce qu'elles capturent des moments authentiques qui résonnent avec votre audience. 
                    Lorsque les prospects voient l'énergie, l'engagement et la valeur de vos événements, 
                    cela renforce leur crédibilité et leur intérêt pour votre marque, ce que les photos statiques ne peuvent jamais atteindre.
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
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywplYRsP6IpEkOY8D0GBumXaioq9CjFLZxsPM1"
                    alt="Couverture de l'événement Salesforce Dreamforce"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi les vidéos d'événements fonctionnent */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonne de gauche - Contenu principal */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  La puissance des vidéos d'événements
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Pourquoi les vidéos d'événements offrent plus de valeur que vous ne le pensez
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Les événements sont des investissements coûteux qui ne durent que quelques jours. Les vidéos d'événements étendent leur valeur bien au-delà de l'expérience en direct, créant du contenu intemporel qui continue d'engager les audiences pendant des mois ou des années.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Notre production vidéo d'événements ne se contente pas de documenter ce qui s'est passé - nous créons des récits percutants qui mettent en valeur l'intérêt de votre événement, soulignent les points clés et créent des moments partageables qui amplifient l'impact de votre événement.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Étendre la portée de l'événement</h3>
                      <p className="text-gray-400">Atteignez les audiences qui n'ont pas pu assister en personne, multipliant ainsi le ROI de votre investissement événementiel.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Créer du contenu intemporel</h3>
                      <p className="text-gray-400">Transformez un événement unique en actifs marketing précieux qui peuvent être utilisés pendant des mois ou des années.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Booster l'engagement social</h3>
                      <p className="text-gray-400">Les vidéos d'événements génèrent 3 fois plus de partages sociaux que le contenu promotionnel standard.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Améliorer la perception de la marque</h3>
                      <p className="text-gray-400">Une couverture de haute qualité positionne votre marque comme professionnelle, organisée et innovante.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Soutenir les efforts commerciaux</h3>
                      <p className="text-gray-400">Utilisez les temps forts de l'événement dans les présentations commerciales pour mettre en valeur votre communauté et l'impact de votre produit.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne nous contentons pas de filmer des événements - nous créons des expériences cinématographiques qui capturent l'énergie, l'émotion et la valeur de votre rassemblement. Laissez-nous vous aider à transformer votre événement en actifs marketing puissants qui continuent à offrir de la valeur longtemps après le départ du dernier participant.
                </blockquote>
                
                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                       Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Colonne de droite - Éléments visuels */}
              <div className="relative">
                {/* Vidéo principale - Boucle automatique, silencieuse */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywn8vvPL2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE" type="video/mp4" />
                      Votre navigateur ne prend pas en charge la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Cartes de statistiques */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                    <p className="text-gray-400 text-sm">Augmentation de l'engagement des réseaux sociaux pour les clients utilisant des vidéos d'événements professionnelles</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">2.7x</div>
                    <p className="text-gray-400 text-sm">Plus de vues que la photographie événementielle standard</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">5.8x</div>
                    <p className="text-gray-400 text-sm">Taux d'engagement plus élevé sur LinkedIn vs. publications statiques</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">150+</div>
                    <p className="text-gray-400 text-sm">Événements d'entreprise et conférences couverts</p>
                  </div>
                </div>
                
                {/* Éléments décoratifs */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <EventVideoFAQSection />     

        {/* Section CTA finale */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}
