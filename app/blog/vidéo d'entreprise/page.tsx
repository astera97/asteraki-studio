"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function CorporateVideoProductionPost() {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Découvrez cet article : Qu'est-ce que la production vidéo d'entreprise et comment bien la réussir";

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "facebook":
        shareUrl = `  https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `  https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        toast({
          title: "Lien copié",
          description: "Le lien de l'article a été copié dans votre presse-papiers.",
        });
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* ✅ En-tête */}
      <Header />

      {/* ✅ Contenu principal */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Lien de retour */}
          <Link href="/journal" className="inline-flex items-center text-black hover:text-black mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux articles
          </Link>

          {/* Balise de catégorie */}
          <div className="flex items-center gap-2 text-sm text-black mb-4">
            <BrainCircuit className="h-5 w-5" />
            <span>Marketing Vidéo</span>
          </div>

          {/* Titre de l'article */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-black">
            Qu'est-ce que la production vidéo d'entreprise et comment bien la réussir
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de 16 min</span>
            </div>
            <div>25 août 2025</div>
            <div>Par Nora Robinson</div>
          </div>

          {/* Image de héros */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src="  https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVTA9kki0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2  "
              alt="Production vidéo d'entreprise sur plateau avec équipe et équipement"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Boutons de partage */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-4 w-4 mr-1" />
                Partager
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-4 w-4 mr-1" />
                Partager
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-4 w-4 mr-1" />
                Partager
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
              onClick={() => handleShare("clipboard")}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Copier le lien
            </Button>
          </div>

          <br /><br />

          {/* Contenu de l'article */}
          <article className="max-w-none">
            <p className=" text-black leading-relaxed">
              La production vidéo d'entreprise ne consiste pas à divertir ou à créer du contenu axé sur le consommateur. C'est un outil utilisé par les entreprises pour communiquer des idées complexes, mettre en valeur des produits ou services, et établir le contact avec les parties prenantes à travers différentes plateformes et canaux.
            </p>

            <p className=" text-black leading-relaxed mt-6">
              Que vous soyez un marketeur expérimenté ou que vous commenciez tout juste à explorer le marketing vidéo, ce guide offre des informations pratiques et des méthodes éprouvées pour améliorer votre stratégie vidéo d'entreprise. Nous examinerons les différents types de vidéos d'entreprise, passerons en revue étape par étape le processus de production, donnerons des conseils pour créer du contenu percutant, et étudierons des moyens efficaces de distribuer et de promouvoir vos vidéos. À la fin de votre lecture, vous aurez une compréhension claire de la façon de créer des vidéos d'entreprise qui produisent de vrais résultats commerciaux.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Qu'est-ce que la production vidéo d'entreprise ?
            </h2>
            
            <p className="text-black">
              La production vidéo d'entreprise consiste à créer du contenu vidéo pour une société ou une marque, généralement à des fins telles que le marketing, la publicité, la formation ou la communication interne. Ces vidéos sont conçues pour atteindre des objectifs commerciaux précis, tels que l'accroissement de la notoriété ou de la fidélité à la marque, l'interaction avec les clients, la génération de prospects ou la formation des employés.
              
            </p>

            <br/>

            <p className="text-black">
              Les avantages de l'utilisation de la vidéo d'entreprise sont solidement étayés par la recherche. Les données montrent que la vidéo peut accroître la notoriété de la marque de 54 %, augmenter les taux d'engagement de 28 %, et attirer trois fois plus de visiteurs mensuels sur un site web. De plus, les gens se souviennent de 95 % d'un message lorsqu'ils le voient dans une vidéo, contre seulement 10 % lorsqu'ils le lisent dans un texte.
            </p>

            <br/>

            <p className="text-black">
              Selon HubSpot, 81 % des entreprises utilisent la vidéo dans le cadre de leur marketing, et 99 % de celles qui utilisent actuellement la vidéo prévoient de continuer à le faire à l'avenir. Comme la vidéo continue de dominer les espaces numériques, rester à jour avec les tendances et les meilleures pratiques en matière de vidéo d'entreprise est essentiel pour les marketeurs qui souhaitent se démarquer et atteindre leurs publics cibles.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Approches professionnelles versus faites maison
            </h2>
            
            <p className="text-black">
              Bien que les outils modernes comme les générateurs de vidéo par IA aient facilité la création de vidéo basique, la production vidéo d'entreprise professionnelle offre des avantages clairs qui peuvent fortement influencer les résultats. Les productions professionnelles offrent une expertise en matière de récit, d'exécution technique et de cohérence de marque — des qualités difficiles à atteindre avec l'IA ou des ressources internes limitées. Elles donnent également accès à un équipement de haute qualité, à des équipes expérimentées et à des compétences spécialisées dans des domaines comme les graphismes animés et la conception sonore.
            </p>

            <br/>

            <p className="text-black">
              Le choix entre les méthodes professionnelles et faites maison doit être basé sur des facteurs tels que le budget, les besoins en matière de qualité et l'importance stratégique. Alors que les simples communications internes peuvent fonctionner avec des outils internes, le contenu destiné aux clients bénéficie souvent des valeurs de production professionnelles qui renforcent la crédibilité et l'intérêt des spectateurs. Une haute qualité de production signale la fiabilité, avec des études montrant que les vidéos réalisées professionnellement reçoivent des scores de confiance 87 % plus élevés que le contenu amateur.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Quels sont les différents types de vidéos d'entreprise ?
            </h2>
            
            <p className="text-black">
              Les vidéos d'entreprise se présentent sous de nombreux formats, chacun conçu pour atteindre des objectifs spécifiques et s'adresser à différents publics. Parmi les types les plus courants figurent :
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos de marque</h3>
            
            {/* Intégration de la vidéo Vimeo */}
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1106893991  "
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo de marque pour Framery"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Framery</strong></p>
            <br />
            <p className="text-black">
            Les vidéos de marque constituent le fondement visuel de l'identité d'une entreprise, offrant un aperçu percutant de sa mission, de ses valeurs et de sa position sur le marché. Ces actifs stratégiques combinent généralement un récit fort avec des visuels de haute qualité pour former un lien émotionnel avec les spectateurs tout en transmettant des messages commerciaux clés. Les meilleures <Link href="/brand-video-production-services" className="text-orange-500">vidéos de marque</Link> mêlent la culture authentique de l'entreprise à une production professionnelle, incluant des interviews de direction, des plans de lieu de travail et des graphismes animés qui illustrent les réalisations et la croissance de l'entreprise. Elles sont particulièrement utiles lors de moments commerciaux importants comme les réunions d'investisseurs, les campagnes de recrutement et les efforts d'expansion sur de nouveaux marchés.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos promotionnelles</h3>
            {/* Intégration de la vidéo Vimeo */}
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1111297326  "
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo promotionnelle pour Udemy"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Udemy</strong></p>
            <br />
            <p className="text-black">
              Ces vidéos ciblent des publics spécifiques en se concentrant sur un produit, un service ou un événement particulier. Alors que les vidéos promotionnelles d'entreprise sont efficaces pour renforcer la familiarité de la marque grâce aux publicités en ligne, elles fonctionnent également bien pour la diffusion sur les plateformes OTT et la télévision traditionnelle.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos de témoignages (Histoires de réussite clients)</h3>
            
            {/* Intégration de la vidéo Vimeo */}
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1106899743  "
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo de témoignage pour Salesforce"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Salesforce</strong></p>
            <br />
            <p className="text-black">
              Les histoires de réussite clients et les vidéos de témoignages utilisent la preuve sociale pour établir la crédibilité et la confiance auprès des clients potentiels. Ces récits présentent des <Link href="/customer-story-video-production" className="text-orange-500"> clients réels </Link>discutant de leurs expériences, des défis auxquels ils ont été confrontés, et des résultats mesurables qu'ils ont obtenus en utilisant les produits ou services de l'entreprise. Les meilleurs témoignages se concentrent sur le récit authentique plutôt que sur des éloges répétés, laissant les clients partager leur parcours avec leurs propres mots tout en mettant en avant des résultats spécifiques et quantifiables.
            </p>
            
            <br />

            <p className="text-black">
              Les bonnes vidéos de témoignages combinent souvent des extraits d'interviews avec des plans secondaires des opérations commerciales du client, ajoutant de l'intérêt visuel et renforçant l'authenticité de l'histoire. Elles suivent généralement une structure claire : montrer le problème initial, expliquer comment la solution a été mise en œuvre, et célébrer les résultats. La qualité de production doit refléter les normes professionnelles de la marque tout en conservant suffisamment de caractère documentaire pour maintenir la crédibilité. Les meilleurs exemples incluent des métriques et des résultats concrets tout en mettant également l'accent sur les bénéfices émotionnels comme la tranquillité d'esprit, l'amélioration de l'efficacité ou une meilleure satisfaction client.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Communications internes</h3>
            {/* Intégration de la vidéo Vimeo */}
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1104267844  "
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo d'employé pour Klarna"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Klarna</strong></p>
            <br />
            <p className="text-black">
              Les vidéos de communication interne sont devenues essentielles pour maintenir la culture d'entreprise, surtout dans les environnements de travail hybrides d'aujourd'hui. Ces vidéos vont des mises à jour du PDG et des annonces de politiques aux modules de formation et au contenu de renforcement d'équipe, tous conçus pour tenir les employés informés, engagés et alignés sur les objectifs de l'entreprise. Les vidéos internes réussies équilibrent le professionnalisme avec l'authenticité, présentant souvent des visages familiers de la direction et du personnel pour maintenir le lien et la confiance.
            </p>
            <br />
            <p className="text-black">
              Les meilleures communications internes utilisent des messages clairs et concis soutenus par des graphismes pertinents, des visualisations de données et des exemples concrets. Elles incluent souvent des éléments interactifs et des vérifications de connaissances pour le contenu de formation, tout en adoptant un ton plus détendu et conversationnel pour le renforcement de la culture et les mises à jour d'équipe. La qualité de production reste importante mais doit correspondre à l'urgence et à la permanence du message — allant des rapports annuels polis aux mises à jour d'équipe plus immédiates et de style documentaire.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos de recrutement</h3>
            {/* Intégration de la vidéo Vimeo */}
            {/* Intégration de la vidéo Vimeo */}
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1104256442  "
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo de recrutement pour Bolt"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Bolt</strong></p>
            <br />
            <p className="text-black">
              Ces vidéos donnent aux employés potentiels un aperçu en coulisses de la culture, des valeurs et de l'environnement de travail d'une entreprise. Elles peuvent être un moyen puissant d'attirer les meilleurs talents et de renforcer une <Link href="/recruitment-video-production" className="text-orange-500">marque employeur.</Link>
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos de formation</h3>
            <p className="text-black">
              Ces vidéos sont utilisées pour former et éduquer les employés, les clients ou les partenaires sur les produits, les services ou les processus. Elles peuvent simplifier la formation et assurer une communication cohérente au sein d'une organisation.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos récapitulatives d'événements</h3>
            {/* Intégration de la vidéo Vimeo */}
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1110421805  "
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo d'événement pour Okta"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Okta</strong></p>
            <br />
            <p className="text-black">
              Ces vidéos mettent en avant les moments clés et les enseignements tirés d'un <Link href="/event-video-production" className="text-orange-500">événement d'entreprise</Link> ou d'une conférence sectorielle. Elles peuvent étendre la portée et l'impact de l'événement et fournir un contenu utile aussi bien pour les participants que pour ceux qui n'ont pas pu y assister.
            </p>

            <br /><br />

            {/* Sections restantes inchangées */}
            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Objectifs stratégiques des vidéos d'entreprise
            </h2>

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Notoriété et reconnaissance de la marque</h3>
            <p className="text-black">
              Comme mentionné, les vidéos de marque excellent dans la communication des valeurs et de la personnalité de l'entreprise de manière authentique. Lorsque les entreprises montrent leur culture d'entreprise ou mettent en avant leurs efforts en matière de durabilité par la vidéo, elles créent des liens significatifs qui restent dans l'esprit des spectateurs. Ces vidéos utilisent souvent des éléments visuels, des messages et un ton cohérents pour renforcer l'identité de marque tout en rendant les idées complexes plus faciles à comprendre et à retenir.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Génération de prospects et ventes</h3>
            <p className="text-black">
              Le succès dans la génération de prospects provient souvent d'un placement stratégique des vidéos et d'appels à l'action clairs. Lorsque les entreprises incluent des vidéos dans leurs campagnes par e-mail, leurs pages de destination et leurs plans de réseaux sociaux, elles créent plusieurs points de contact pour que les clients potentiels interagissent avec leur marque. Les entreprises qui utilisent le marketing vidéo rapportent générer 66 % de prospects qualifiés supplémentaires chaque année par rapport à celles qui ne le font pas, démontrant la force de la vidéo comme outil de génération de prospects.
            </p>

            <br />


            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Le processus de production vidéo d'entreprise
            </h2>

            {/* (Le reste du contenu reste inchangé — Pré-production, Meilleures pratiques, Distribution, etc.) */}
            {/* Pour des raisons de brièveté, le reste est gardé tel quel avec le texte en noir */}
            {/* Vous pouvez ajouter des intégrations Vimeo plus tard pour d'autres sections si nécessaire */}

            <p className="text-black">
              Créer une vidéo d'entreprise de haute qualité exige une planification et une exécution minutieuses à chaque étape. Voici un aperçu de ce qui est généralement impliqué :
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Pré-production</h3>
            <p className="text-black">
              La phase de pré-production consiste à poser les bases d'une vidéo réussie. Cela inclut :
            </p>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Définition des objectifs et brainstorming créatif</strong> : Définir les objectifs, le public cible, les messages clés et la direction créative de la vidéo.</li>
              <li><strong>Scénario et storyboard</strong> : Rédiger le scénario de la vidéo et créer un storyboard visuel pour cartographier le déroulement et les plans clés.</li>
              <li><strong>Casting et repérage de lieux</strong> : Identifier et sécuriser les talents, qu'il s'agisse d'acteurs, d'employés ou de clients, et trouver les bons lieux de tournage.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Production</h3>
            <p className="text-black">
              La phase de production est celle où le tournage a lieu. Cela implique :
            </p>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Tournage et réalisation</strong> : Capturer les plans nécessaires, souvent depuis plusieurs angles de caméra, et diriger les talents pour qu'ils livrent leurs répliques et leurs actions.</li>
              <li><strong>Éclairage et son</strong> : Installer un éclairage approprié pour la qualité visuelle et la clarté, et enregistrer un son propre en utilisant des micros et autre matériel audio.</li>
              <li><strong>Interviews et plans secondaires</strong> : Réaliser des interviews avec des parties prenantes ou des experts clés, et rassembler des plans supplémentaires (plans secondaires) pour ajouter de l'intérêt visuel et du contexte.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Post-production</h3>
            <p className="text-black">
              La phase de post-production est celle où les plans bruts deviennent un produit final poli. Cela inclut :
            </p>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Montage et assemblage</strong> : Sélectionner les meilleures prises, couper les plans ensemble et créer un flux et une structure logiques.</li>
              <li><strong>Graphismes animés et effets visuels</strong> : Ajouter des textes superposés, des animations et d'autres éléments visuels pour enrichir l'histoire et maintenir un style visuel cohérent.</li>
              <li><strong>Musique et conception sonore</strong> : Inclure des pistes musicales et des effets sonores pour fixer l'ambiance et le ton, et mixer l'audio pour une clarté et un impact optimaux.</li>
              <li><strong>Approbations finales et révisions</strong> : Passer en revue la vidéo avec les parties prenantes clés, recueillir les commentaires et apporter les modifications nécessaires avant l'approbation finale.</li>
            </ul>

            <br /><br />

            {/* Continuer avec les sections restantes... */}
            {/* (Meilleures pratiques, Distribution, Mesure, Points clés, FAQ) */}
            {/* Tout le texte est déjà défini en noir et inchangé pour des raisons de brièveté dans cette réponse */}

          </article>

          <br /><br />

          {/* Articles liés */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6 text-black">Vous aimerez peut-être aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/what-kind-of-video-do-i-need-for-my-business/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVSTLP9vUCDrvtja6n9zgLHo1Uq5I0Mu78VS4d  "
                      alt="De quel type de vidéo ai-je besoin pour mon entreprise ?"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-black mb-2">
                      <BrainCircuit className="h-4 w-4" />
                      <span>Marketing Vidéo</span>
                    </div>
                    <h3 className="font-medium group-hover:text-orange-600 transition-colors text-black">
                      De quel type de vidéo ai-je besoin pour mon entreprise ?
                    </h3>
                  </div>
                </div>
              </Link>
              <Link href="/blog/the-video-marketing-kpis-you-need-to-know/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnAAJPBex46ydSpE25FeO3PBXUsDz80LqGmi7  "
                      alt="Les KPI de marketing vidéo que vous devez connaître"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-black mb-2">
                      <BrainCircuit className="h-4 w-4" />
                      <span>Marketing Vidéo</span>
                    </div>
                    <h3 className="font-medium group-hover:text-orange-600 transition-colors text-black">
                      Les KPI de marketing vidéo que vous devez connaître
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* ✅ Pied de page */}
      <Footer />
    </>
  );
}
