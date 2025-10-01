"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function MotionDesignTrends2025Post() {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Découvrez cet article : Les tendances du Motion Design en 2025";

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
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
      {/* En-tête */}
      <Header />

      {/* Contenu principal */}
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
            Les tendances du Motion Design en 2025
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de 18 min</span>
            </div>
            <div>5 octobre 2025</div>
            <div>Par Nora Robinson</div>
          </div>

          {/* Image de héros */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVmpBGIc5MHqgpiKfXLTktCOlh2Dac86JuZso9"
              alt="Tendances du motion design 2025 avec éléments animés"
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
            <p className="text-black leading-relaxed">
              En 2025, le motion design ne cesse d'accélérer. Il intègre de nouvelles technologies, explore des esthétiques inédites et s'adapte aux attentes des marques. Dans cet article, on plonge dans les grandes tendances de l'année, les outils qui marquent le terrain et les formats à privilégier pour une communication visuelle forte, percutante et bien ancrée dans son temps.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              L'importance du Motion Design dans le marketing digital
            </h2>
            
            <p className="text-black">
              Le motion design est aujourd'hui un pilier du marketing digital. Il permet aux marques de capter l'attention en quelques secondes, de raconter une histoire claire et de renforcer leur identité. Grâce à des animations fluides et un visuel soigné, il transforme un message complexe en quelque chose de simple, de fluide, d'immediat.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Avantages du Motion Design pour les entreprises
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Engagement accru</h3>
            <p className="text-black">
              Une vidéo animée attire plus que du texte ou une image fixe. Elle retient l'attention, surtout sur les réseaux sociaux, où chaque seconde compte.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Clarté de la communication</h3>
            <p className="text-black">
              Elle permet de rendre compréhensible un produit technique, un service nouveau ou une idée abstraite, sans surcharger le spectateur.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Renforcement de la marque</h3>
            <p className="text-black">
              Un style animé bien défini devient un marqueur visuel. Il rend la marque plus reconnaissable, plus vivante.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Amélioration du SEO</h3>
            <p className="text-black">
              Une vidéo bien intégrée augmente le temps passé sur la page et diminue le taux de rebond. Un atout pour le référencement.
            </p>

            <br />

            <p className="text-black">
              L'agence vidéo Asteraki maîtrise ce type de production. <Link href="/contact" className="text-orange-500">Découvrez ici l'agence</Link>.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Les tendances en Motion Design
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">1. Intelligence Artificielle (IA) et Automatisation</h3>
            <p className="text-black">
              L'IA change tout. Elle accélère la création, simplifie les processus et ouvre la porte à de nouvelles formes d'animation. Des outils comme Runway ML ou Adobe Sensei permettent de générer des effets, d'automatiser des calques ou de créer des transitions en quelques clics. Moins de temps passé sur la technique, plus sur la création.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Applications Pratiques de l'IA</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Génération Automatique de Contenus</strong> : Produire plusieurs versions d'une même animation pour des tests ou des campagnes ciblées.</li>
              <li><strong>Optimisation des Workflows</strong> : Automatiser les tâches répétitives (exports, calques, rendus) pour gagner en efficacité.</li>
              <li><strong>Analyse des Performances</strong> : Utiliser l'IA pour mesurer l'impact d'une vidéo et ajuster le style ou le rythme en fonction des données.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">2. Animations 3D Hyperréalistes</h3>
            <p className="text-black">
              Avec des logiciels comme Blender ou Cinema 4D, la 3D atteint un niveau de détail impressionnant. On voit des textures réalistes, des lumières naturelles, des objets qui semblent sortir de l'écran. Parfait pour montrer un produit, simuler une utilisation ou plonger le spectateur dans un univers immersif.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Avantages des animations 3D</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Immersion Totale</strong> : Une 3D bien faite capte, impressionne, reste en mémoire.</li>
              <li><strong>Flexibilité Créative</strong> : Créer des scènes impossibles à filmer en vrai, sans contrainte de budget ou de logistique.</li>
              <li><strong>Applications Industrielles</strong> : Très utilisée en architecture, en médecine ou en ingénierie pour visualiser des projets complexes.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">3. Esthétique Rétro-Futuriste</h3>
            <p className="text-black">
              Un mélange de vintage années 80-90 et de design futuriste. On retrouve des couleurs saturées, des gradients, des polices géométriques, des effets VHS ou CRT. Ce style crée une ambiance à la fois nostalgique et moderne. Il attire le regard, surtout dans un flux numérique uniformisé.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Pourquoi le rétro-futurisme fonctionne</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Evocation Émotionnelle</strong> : Il fait appel à des souvenirs, à une culture pop, ce qui crée un lien immédiat.</li>
              <li><strong>Différenciation</strong> : Dans un monde de design épuré, ce style sort du lot. Il ose, il marque.</li>
              <li><strong>Polyvalence</strong> : Il s'adapte à la tech, au jeu vidéo, à la mode ou à la musique.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">4. Minimalisme Animé</h3>
            <p className="text-black">
              Moins, c'est plus. Le minimalisme animé mise sur des formes simples, des couleurs sobres, des mouvements fluides. Pas de fioritures. Juste l'essentiel, bien mis en scène. Idéal pour les tutoriels, les infographies ou les présentations d'entreprise.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Les principes du minimalisme animé</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Simplicité</strong> : Des lignes nettes, des icônes claires, un message direct.</li>
              <li><strong>Elégance</strong> : Des animations discrètes mais précises, qui ajoutent du mouvement sans distraire.</li>
              <li><strong>Efficacité</strong> : Un format parfait pour capter vite et bien, sans perdre le spectateur.</li>
            </ul>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Outils phares en 2025
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Adobe After Effects</h3>
            <p className="text-black">
              Toujours incontournable. After Effects reste le standard pour l'animation 2D, les effets visuels et la post-production. Sa compatibilité avec Photoshop, Illustrator et Premiere Pro en fait un pilier des workflows pro.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Fonctionnalités Clés</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Intégration Adobe</strong> : Tout est connecté. Le transfert entre logiciels est fluide.</li>
              <li><strong>Plugins et Extensions</strong> : Des milliers d'outils pour aller plus loin (Duik, Rubberhose, etc.).</li>
              <li><strong>Communauté Active</strong> : Tutos, forums, ressources : tout est là pour apprendre ou débloquer une situation.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Cinema 4D</h3>
            <p className="text-black">
              Le chouchou de la 3D stylisée. Très utilisé en branding et en publicité, Cinema 4D permet de créer des visuels puissants, dynamiques, avec un rendu haut de gamme. Interface claire, résultats rapides.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Points forts de Cinema4D</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Interface Intuitive</strong> : Moins technique que d'autres logiciels 3D, plus accessible.</li>
              <li><strong>Modélisation et Animation</strong> : Outils solides pour créer des objets, des scènes, des mouvements.</li>
              <li><strong>Rendu de Haute Qualité</strong> : Des images nettes, lumineuses, prêtes pour la diffusion.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Blender</h3>
            <p className="text-black">
              Open source, gratuit, puissant. Blender a tout pour concurrencer les logiciels payants. Il fait de la modélisation, de l'animation, du rendu, même de la vidéo. De plus en plus utilisé, surtout par les freelances et les petites structures.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Avantages de Blender</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Gratuité</strong> : Un gros avantage quand le budget est serré.</li>
              <li><strong>Communauté Dynamique</strong> : Une base d'utilisateurs en croissance, avec plein de tutos et de ressources gratuites.</li>
              <li><strong>Flexibilité</strong> : Il sert autant pour un projet pro que pour un jeu ou un court-métrage.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Runway ML</h3>
            <p className="text-black">
              Basé sur l'IA, Runway ML simplifie la création d'effets, d'animations ou de fonds. Il permet de générer des visuels à partir de texte, de supprimer un fond en un clic, ou d'ajouter du mouvement à une image fixe. Un allié pour aller vite.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Cas d'utilisation de Runway ML</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Prototypage Rapide</strong> : Tester des idées sans tout animer à la main.</li>
              <li><strong>Personnalisation</strong> : Adapter un visuel à un public cible en quelques secondes.</li>
              <li><strong>Optimisation</strong> : Améliorer la qualité d'une animation automatiquement.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Jitter</h3>
            <p className="text-black">
              Une plateforme récente, mais qui monte vite. Jitter permet de créer des animations vectorielles interactives, surtout pensées pour le web et les réseaux sociaux. L'idée ? Des animations légères, rapides à produire, faciles à intégrer.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Caractéristiques de Jitter</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Rapidité</strong> : Interface simple, résultats immédiats.</li>
              <li><strong>Interactivité</strong> : Les animations réagissent au scroll, au clic, au mouvement.</li>
              <li><strong>Compatibilité</strong> : Export en SVG, Lottie ou MP4. Parfait pour le digital.</li>
            </ul>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Types de motion design à réaliser pour les entreprises
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos Promotionnelles</h3>
            <p className="text-black">
              Pour lancer un produit, annoncer une offre ou créer du buzz. Courte, dynamique, percutante. Elle doit capter, convaincre, pousser à l'action.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Stratégies pour des vidéos promotionnelles efficaces</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Storytelling</strong> : Raconter une mini-histoire pour créer une émotion.</li>
              <li><strong>Appels à l'Action</strong> : Ajouter un bouton, un lien, un message clair.</li>
              <li><strong>Personnalisation</strong> : Adapter le ton selon le public visé.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéos Explicatives</h3>
            <p className="text-black">
              Pour expliquer un service, un processus ou une technologie. L'objectif ? Rendre simple ce qui est complexe.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Bonnes pratiques</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Clarté</strong> : Langage simple, visuels parlants.</li>
              <li><strong>Structure</strong> : Début, milieu, fin. Tout doit s'enchaîner logiquement.</li>
              <li><strong>Durée</strong> : Idéalement entre 60 et 90 secondes. Pas plus.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Identités visuelles animées</h3>
            <p className="text-black">
              Animer son logo, ses icônes, ses transitions. C'est ce qui donne du mouvement à une marque. Une signature visuelle en mouvement.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Applications</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Logos Animés</strong> : Une apparition subtile, mais reconnaissable.</li>
              <li><strong>Transitions</strong> : Entre les slides d'une présentation ou les pages d'un site.</li>
              <li><strong>Signatures Électroniques</strong> : Un petit logo animé en bas d'un email.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Contenus pour les réseaux sociaux</h3>
            <p className="text-black">
              Court, vertical, sans son obligatoire. L'objectif ? Faire arrêter le scroll.
            </p>

            <br />

            <h4 className="text-lg font-semibold text-black mt-4 mb-2">Conseils pour les réseaux sociaux</h4>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Format Vertical</strong> : 9:16, optimisé mobile.</li>
              <li><strong>Sous-titres</strong> : Toujours. Beaucoup regardent sans le son.</li>
              <li><strong>Tendances</strong> : S'inspirer des formats qui marchent (Reels, Shorts, TikTok).</li>
            </ul>

            <br />

            <p className="text-black">
              Vous pouvez <Link href="/contact" className="text-orange-500">contacter Asteraki</Link> si vous cherchez une agence spécialisée dans la création de vidéos en motion design.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Optimisation SEO pour les vidéos animées
            </h2>
            
            <p className="text-black">
              Pour que votre vidéo soit vue, elle doit être bien référencée.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">1. Utilisation de mots-clés adaptés</h3>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Titres et Descriptions</strong> : Intégrez des mots-clés pertinents dès le départ.</li>
              <li><strong>Tags</strong> : Utilisez des tags précis pour aider les algorithmes.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">2. Transcriptions et sous-titres</h3>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Accessibilité</strong> : Permet de toucher plus de monde, y compris les malentendants.</li>
              <li><strong>SEO Local</strong> : Ajoutez des mots-clés locaux si vous ciblez une région.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">3. Hébergement et intégration</h3>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Plateformes de Vidéos</strong> : YouTube reste le deuxième moteur de recherche. Vimeo pour un rendu pro.</li>
              <li><strong>Intégration sur le Site Web</strong> : Une vidéo intégrée augmente le temps passé sur la page.</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">4. Partage et engagement</h3>
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Réseaux Sociaux</strong> : Plus elle est partagée, plus elle gagne en visibilité.</li>
              <li><strong>Backlinks</strong> : Des liens de qualité vers votre page vidéo boostent son autorité.</li>
            </ul>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Conclusion
            </h2>
            
            <p className="text-black">
              En 2025, le motion design est plus stratégique que jamais. Entre IA, 3D, minimalisme et rétro-futurisme, les possibilités sont nombreuses. Le tout, c'est de choisir le bon style, le bon format, le bon outil. Bien utilisé, le motion design devient un levier puissant pour raconter, convaincre et marquer les esprits.
            </p>

            <br /><br />

             <section>
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Et si vous vous faisiez accompagner ?</h2>
              
              <p className="text-black">
                Réaliser une bonne vidéo motion design, c'est pas juste joli à regarder. C'est penser le fond, la forme, le rythme, le son, le message et la diffusion. Pour que tout tienne debout, avoir un partenaire expérimenté, c'est un vrai atout.
              </p>
              <br />
              <p className="text-black">
                Chez Asteraki, on prend le temps de comprendre votre besoin, d'ajuster le format à votre budget, et de vous proposer un devis clair. 
              </p>
              <br />
              <p className="text-black">
                Alors, prêt à réaliser votre prochaine vidéo motion design ?
              </p>
              <br /><br />
              <div className="flex justify-center items-center">
                 <Link href="/quiz" passHref>
                   <Button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                     Estimer votre projet
                   </Button>
                 </Link>
              </div>
              <br /><br />
            </section>

          </article>



          {/* Mobile Sharing Buttons */}
          <div className="md:hidden flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-4 w-4 mr-1" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-4 w-4 mr-1" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-4 w-4 mr-1" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-300 hover:bg-gray-50 bg-transparent text-black hover:text-black"
              onClick={() => handleShare("clipboard")}
            >
              <Share2 className="h-4 w-4 mr-1" />
            </Button>
          </div>

          <br /><br />

          {/* Articles liés */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6 text-black">Vous aimerez peut-être aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/combien-coute-un-motion-design/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ"
                      alt="Production vidéo d'animation pour Udemy"
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
                      Combien coûte une vidéo motion design ?
                    </h3>
                  </div>
                </div>
              </Link>
              <Link href="/blog/the-video-marketing-kpis-you-need-to-know/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnAAJPBex46ydSpE25FeO3PBXUsDz80LqGmi7"
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

      {/* Pied de page */}
      <Footer />
    </>
  );
}