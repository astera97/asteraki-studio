"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function MotionDesignCostPost() {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Découvrez cet article : Combien coûte une vidéo motion design";

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
            Combien coûte une vidéo motion design
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-8 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de 12 min</span>
            </div>
            <div>Publié le 20 août 2025</div>
          </div>

          {/* Image de héros */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfio5cua93bxoLyhcW8aNnVRf0tO2vu4mHdZJ"
              alt="Exemple de motion design avec des éléments animés"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Contenu de l'article */}
          <article className="mb-12">
            <p className="text-black leading-relaxed">
              Le motion design est aujourd'hui un élément incontournable dans la communication visuelle moderne. Il permet de capter l'attention, de transmettre des messages complexes de manière claire et engageante, et de renforcer l'identité de marque. Cependant, déterminer le coût d'un projet de motion design peut s'avérer complexe en raison des nombreux facteurs en jeu. Dans cet article, nous allons explorer en profondeur les différents éléments qui influencent les tarifs du motion design et vous aider à comprendre comment établir un budget adapté à vos besoins.
            </p>

            <br /><br />

            {/* Main Content */}
            <section id="agence-freelance">
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Agence motion design VS Freelance motion designer ?</h2>
              
              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Freelance</h3>
              <p className="text-black">
                Côté positif, c'est souvent moins cher. Les tarifs sont plus souples, et si vous avez un projet ponctuel, c'est une bonne option. En plus, certains sont hyper réactifs et prennent le temps d'échanger directement avec vous.
              </p>
              <br />
              <p className="text-black">
                Mais attention : ce n'est pas toujours complet. Beaucoup se concentrent sur l'animation, sans forcément proposer une réflexion globale sur le fond ou la stratégie. Et comme tout repose sur une seule personne, la gestion du temps, les retours ou les imprévus peuvent ralentir le projet. Moins de structure, c'est aussi parfois plus de stress.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Agence spécialisée (comme Asteraki)</h3>
              <p className="text-black">
                Là, vous avez une équipe derrière. Un chef de projet qui suit tout, des motion designers expérimentés, parfois des scénaristes, des infographistes, des monteurs son. Du coup, le suivi est plus fluide, les délais mieux tenus, et vous avez quelqu'un pour penser le projet dans son ensemble.
              </p>
              <br />
              <p className="text-black">
                Oui, c'est souvent plus cher. Mais ce prix, il se justifie : il y a plus de compétences, plus de contrôle qualité, et souvent des services en plus (stratégie, adaptation aux réseaux, retours rapides, etc.). Si votre projet est ambitieux ou qu'il doit être parfait, l'agence, c'est la sécurité.
              </p>
            </section>

            <br /><br />

            <section id="prix-facteurs">
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Les critères qui font évoluer le prix d'un motion design</h2>

              <p className="text-black">
                Le tarif d'une vidéo motion design, ça ne se tire pas du chapeau. Plusieurs éléments entrent en ligne de compte. Voici les principaux :
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">La durée de la vidéo</h3>
              <p className="text-black">
                Logique : plus c'est long, plus il y a d'animation, de dessin, de montage. Une vidéo de 30 secondes, c'est léger. Deux minutes, c'est déjà beaucoup plus de travail. Il faut donc trouver le bon équilibre : assez long pour dire ce qu'il faut, mais pas trop pour ne pas griller le budget.
              </p>

              

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Le style et le niveau de détail</h3>
              <p className="text-black">
                Un design simple, épuré, avec peu de couleurs et d'effets ? C'est rapide à faire, donc moins cher. Mais si vous voulez des illustrations sur mesure, des animations 3D, des effets de lumière, du morphing ou des transitions complexes, là, ça prend du temps. Et du temps, ça coûte.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Le storyboard et les éléments graphiques</h3>
              <p className="text-black">
                Si vous arrivez avec un scénario clair, un storyboard détaillé et vos visuels, c'est gagné. Le motion designer peut directement passer à l'animation. Mais s'il doit tout créer depuis zéro: personnages, univers graphique, ambiance. Ca rajoute des heures de travail. Et donc, du coût.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Le script</h3>
              <p className="text-black">
                Un bon script, c'est la base. S'il est déjà prêt, nickel. Sinon, il faut le rédiger : chercher les bons mots, structurer le message, penser le rythme. Ce travail-là, il est payant. Et il vaut mieux l'inclure dès le départ, parce qu'un mauvais script, ça rend l'animation plus difficile.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">La voix-off et le son</h3>
              <p className="text-black">
                Une voix pro, bien posée, ça change tout. Mais ça coûte. Le prix varie selon la langue, le ton (sérieux, dynamique, chaleureux), ou encore la notoriété du comédien. Sans oublier le son : la musique, les bruitages, les effets. Faire du sur-mesure ou acheter des licences, c'est un budget à part entière.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Le type d'animation</h3>
              <p className="text-black">
                Une animation fluide et simple, c'est accessible. Mais dès qu'on parle de motion capture, de particules, de rotoscoping ou de VFX, on entre dans un autre niveau. Là, il faut des logiciels puissants, des compétences pointues, et beaucoup plus de temps. Le prix monte en flèche.
              </p>
            </section>
            <br /><br />

            <section id="exemples-tarifs">
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">3 exemples de tarifs pour la création d'un motion design</h2>
              
              <p className="text-black">
                Pour que ce soit plus clair, voici trois cas réels réalisés par Asteraki :
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Exemple 1 : Université Sorbonne – Vidéo explicative</h3>
              <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
                 <iframe
                    src="https://player.vimeo.com/video/1113950694"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Vidéo de l'université Sorbonne montrant des éléments de motion design"
                 ></iframe>
              </div>
              <p className="text-orange-500 font-light italic"><strong>Client : Université Sorbonne</strong></p>
              <br />
              <p className="text-black">
                Style épuré, animations légères, pas de personnages. Parfait pour des tutos ou des messages internes.  
              </p>
              <br />
              <p className="text-black font-semibold text-orange-500">Budget : Entre 2 500 € – 4 000 €</p>

              <br /><br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Exemple 2 : Kuehne+Nagel – Tour produit</h3>
              <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
                 <iframe
                    src="https://player.vimeo.com/video/1111696360"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Vidéo Kuehne+Nagel montrant des éléments de motion design"
                 ></iframe>
              </div>
              <p className="text-orange-500 font-light italic"><strong>Client : Kuehne+Nagel</strong></p>
              <br />
              <p className="text-black">
                Ici, il faut expliquer une interface logicielle. Beaucoup de précision, de découpage, de fluidité. Le but ? Rendre un outil complexe facile à comprendre.  
              </p>
              <br />
              <p className="text-black font-semibold text-orange-500">Budget : 5 000 € – 10 000 €</p>

              <br /><br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Exemple 3 : Udemy – Animation 2D</h3>
              <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
                 <iframe
                    src="https://player.vimeo.com/video/1111297326"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Vidéo Udemy montrant des éléments de motion design"
                 ></iframe>
              </div>
              <p className="text-orange-500 font-light italic"><strong>Client : Udemy</strong></p>
              <br />
              <p className="text-black">
                Un projet profond, avec une animation avancée, des personnages animés, des décors, un vrai récit. 
              </p>
              <br />
              <p className="text-black font-semibold text-orange-500">Budget : 15 000 € – 25 000 €</p>
            </section>

            <br /><br />

            <section id="definir-budget">
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Comment définir mon budget ?</h2>
              
              <p className="text-black">
                Avant de lancer quoi que ce soit, posez-vous les bonnes questions.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Quel est l'objectif de la vidéo ?</h3>
              <p className="text-black">
                Est-ce pour vendre ? Expliquer ? Former ? Inspirer ? Selon la réponse, le ton, la durée et le style changent. Et donc, le prix aussi.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">À qui vous parlez ?</h3>
              <p className="text-black">
                Un public corporate attend autre chose qu'un jeune public sur TikTok. Le style, le rythme, les visuels doivent coller à votre cible. Et ça, ça influence la complexité du projet.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Où la vidéo sera diffusée ?</h3>
              <p className="text-black">
                Instagram, LinkedIn, site web, présentation en réunion… Chaque support a ses règles (format, durée, son). Adapter la vidéo, c'est parfois du travail supplémentaire.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Quel style vous inspire ?</h3>
              <p className="text-black">
                Montrez des exemples. Des vidéos que vous aimez, qui ressemblent à ce que vous imaginez. Ça évite les malentendus et permet une estimation plus juste du temps de travail.
              </p>

              <br />

              <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vous voulez une voix-off ?</h3>
              <p className="text-black">
                Pas obligatoire. Parfois, une bonne musique et des textes bien placés suffisent. Mais si vous avez besoin d'une narration claire, il faut compter ce coût-là dès le départ.
              </p>
            </section>
            <br />

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

          {/* Articles liés */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6 text-black">Vous aimerez peut-être aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/what-kind-of-video-do-i-need-for-my-business/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVSTLP9vUCDrvtja6n9zgLHo1Uq5I0Mu78VS4d"
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