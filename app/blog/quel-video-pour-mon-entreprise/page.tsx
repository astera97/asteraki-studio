"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function WhatKindOfVideoPost() {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Découvrez cet article : De quel type de vidéo ai-je besoin pour mon entreprise ?";

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
            De quel type de vidéo ai-je besoin pour mon entreprise ?
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de 6 min</span>
            </div>
            <div>13 août 2025</div>
            <div>Par Nora Robinson</div>
          </div>

          {/* Image de héros */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjkQYWaQnk6Z0aKAOH3TspmrCuFeME74fB5Qq"
              alt="Types de vidéos pour entreprise"
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
              Vous savez que votre entreprise a besoin d'une vidéo, mais déterminer quel type de vidéo vous convient peut s'avérer difficile. Vous avez peut-être des idées créatives en tête, une chanson spécifique que vous souhaitez utiliser, ou quelques slogans que vous voulez intégrer dans le texte, mais avant d'aller aussi loin, il est essentiel d'élaborer une stratégie concernant l'objectif de votre vidéo et comment l'atteindre de la meilleure façon.
            </p>

            <br />

            <p className="text-black leading-relaxed">
              Par exemple, une petite boucherie locale peut vouloir attirer plus de clients dans son magasin physique, tandis qu'une grande entreprise de logiciels peut chercher à obtenir davantage de soumissions de formulaires en ligne. Ces objectifs différents nécessitent une approche différente, ce qui signifie qu'ils exigent une vidéo différente.
            </p>

            <br />

            <p className="text-black leading-relaxed">
              Alors, par où commencer ?
            </p>

            <br />

            <p className="text-black leading-relaxed">
              Avant de détailler tous les types de vidéos que votre entreprise pourrait envisager, parlons de l'objectif de votre vidéo. Cela nous aidera à remonter la piste jusqu'au type de contenu le mieux adapté à votre entreprise.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Quel est votre objectif ?
            </h2>
            
            <p className="text-black">
              Nous avons beaucoup parlé de l'importance de commencer votre plan de marketing vidéo en définissant d'abord votre objectif de marketing vidéo. Reprenons rapidement l'entonnoir de marketing pour mémoire.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Attirer</h3>
            <p className="text-black">
              Si votre objectif est d'accroître la notoriété de votre marque, vous êtes à l'étape d'attraction. Cela signifie que vous voulez présenter votre marque à davantage de personnes et les amener à interagir avec vous d'une certaine manière pour la première fois. Cela se traduit généralement par la collecte de nombreuses vues de vidéos, ou vous pouvez souhaiter que davantage de personnes visitent votre site web ou votre magasin physique. Quoi qu'il en soit, ces vidéos sont en haut de l'entonnoir et constituent le premier point de contact d'un client potentiel avec votre marque.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Engager</h3>
            <p className="text-black">
              Si votre objectif est que les utilisateurs en apprennent davantage sur vous, vous êtes à l'étape d'engagement. Cela signifie que vous voulez que les utilisateurs passent du temps avec vous d'une certaine manière, que ce soit en ligne sur votre site web en lisant votre contenu ou en explorant davantage de pages, ou en personne en s'informant sur ce que vous proposez et les avantages de vos produits. À ce stade de considération, vous voulez apporter de la valeur afin d'établir la crédibilité et la résonance de votre marque.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Nourrir</h3>
            <p className="text-black">
              Si votre objectif est de conclure une vente, alors vous êtes à l'étape de nourrissage. Cela signifie que vous voulez convaincre vos utilisateurs que vous êtes meilleurs que la concurrence et que leur achat les rendra heureux à la fin. Vous pouvez corréler directement le succès de cet objectif à un chiffre, soit un nombre de ventes, soit un montant de chiffre d'affaires ; mais en termes de vidéo, ce stade signifie fournir à vos spectateurs un avantage concret qui les poussera à finaliser l'affaire.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Satisfaire</h3>
            <p className="text-black">
              Si votre objectif est de continuer à apporter de la valeur après la conversion d'un client, alors vous êtes à l'étape de satisfaction. Le contenu ici réengage un utilisateur et ancre pourquoi votre marque est si formidable. Que vous satisfassiez littéralement les utilisateurs en leur arrachant un sourire, ou que vous leur apportiez de la valeur d'une autre manière, comme en leur montrant comment faire quelque chose ou en les remerciant directement, le contenu ici est généralement lié aux chiffres de fidélisation des clients, aux taux de conversion de ventes incitatives, aux parrainages, et plus encore.
            </p>

            <br />

            <p className="text-black">
              En décomposant ces quatre étapes, où votre vidéo s'inscrit-elle ? Voulez-vous que votre vidéo attire, engage, nourrisse ou satisfasse les utilisateurs ? Une fois que vous connaissez la réponse à cette question vitale, vous pouvez passer à la détermination du type de vidéo dont votre entreprise a besoin.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              8 Types de Vidéos pour Votre Entreprise
            </h2>
            
            <p className="text-black">
              Vous avez peut-être un objectif vidéo maintenant, mais rappelez-vous : à mesure que vos utilisateurs descendent dans l'entonnoir, vous voudrez continuer à les cibler avec du contenu vidéo qui parle au stade d'acheteur dans lequel ils se trouvent.
            </p>

            <br />

            <p className="text-black">
              C'est pourquoi nous vous proposons quelques options de types de vidéos qui s'appliquent tout au long de l'entonnoir. Selon votre secteur d'activité, votre objectif et ce que vous voulez communiquer à votre audience, vous pouvez explorer les vidéos ci-dessous et voir laquelle convient à votre marque.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Publicité</h3>
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1111297326"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo publicitaire Udemy"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Udemy</strong></p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Attirer</li>
              <li><strong>Durée :</strong> 15-30 secondes</li>
            </ul>
            <br />
            <p className="text-black">
              Les publicités sont le type de vidéos de marque le plus populaire. Ce sont des vidéos brèves et captivantes qui ne divulguent pas trop d'informations sur votre marque, mais donnent au spectateur juste assez d'informations pour l'attirer. Travaillez à créer un lien personnel avec votre audience, présentez un problème courant auquel elle est confrontée, et présentez votre produit ou service comme la solution dont elle a besoin. Terminez par un appel à l'action clair.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéo « Comment faire »</h3>
            <p className="text-black">
              Une vidéo « comment faire » est exactement ce que son nom indique : une vidéo qui se concentre sur une tâche ou une action spécifique et explique comment la réaliser de manière claire et étape par étape. Ces vidéos sont excellentes pour introduire subtilement votre marque à une nouvelle audience. Grâce à leur large attrait, elles constituent un excellent outil d'optimisation pour la recherche et peuvent vous aider à établir comme source crédible d'information. Gardez le branding discret et concentrez-vous sur la fourniture d'informations précieuses – puis ciblez à nouveau les utilisateurs en fonction de leurs habitudes de visionnage.
            </p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Attirer</li>
              <li><strong>Durée :</strong> Moins de 2 minutes</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéo de marque</h3>
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1106893991"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo de marque Framery"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Framery</strong></p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Engager</li>
              <li><strong>Durée :</strong> 1-2 minutes</li>
            </ul>
            <br />
            <p className="text-black">
              Les vidéos de marque fournissent un aperçu de haut niveau de votre entreprise et des informations sur votre mission, votre histoire et votre parcours. Ces vidéos devraient être attrayantes visuellement tout en maintenant l'attention du spectateur avec des informations perspicaces qui lui en disent davantage sur votre entreprise. Ici, l'utilisateur connaît déjà votre identité – votre travail consiste à poser les bases d'une relation solide afin de rester en tête de ses pensées.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéo produit</h3>
            <p className="text-black">
              Une vidéo produit décrit ce que fait un produit, ainsi que ses caractéristiques, ses avantages, ses utilisations, et plus encore. Grâce à leur nature engageante et visuelle, les vidéos produits sont le moyen préféré par les gens pour en apprendre davantage sur les produits. La vôtre devrait montrer comment votre produit ou service résout un problème particulier pour les utilisateurs en utilisant des images de haute qualité et une voix-off ou des textes engageants, tout en montrant votre produit en action. Les vidéos produits peuvent également être diffusées presque partout, vous aidant à propager rapidement des informations à une large audience.
            </p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Engager</li>
              <li><strong>Durée :</strong> 30-60 secondes</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Témoignage client</h3>
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1106899743"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Témoignage client Salesforce"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Salesforce</strong></p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Nourrir</li>
              <li><strong>Durée :</strong> 30-60 secondes</li>
            </ul>
            <br />
            <p className="text-black">
              Les témoignages sont des outils incroyablement puissants pour aider à nourrir une vente. Ils montrent généralement des clients actuels ou passés parlant de leur expérience en travaillant avec vous ou en utilisant votre produit ou service de manière positive. Parce qu'ils proviennent de la perspective d'utilisateurs réels, ils portent souvent plus de crédit et de crédibilité que tout ce que vous pourriez créer vous-même. Et puisque tant de gens recherchent des retours d'utilisateurs avant un achat, la bonne vidéo témoignage pourrait aider à pousser davantage d'utilisateurs vers une vente.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéo FAQ</h3>
            <p className="text-black">
              Les vidéos FAQ répondent aux questions courantes des utilisateurs, aidant les clients potentiels à se sentir plus confiants dans leur achat, et aidant l'équipe interne d'une entreprise à économiser du temps et des ressources. Ces vidéos fonctionnent à la fois dans les étapes de nourrissage et de satisfaction, où les gens posent le plus souvent des questions et des préoccupations à une entreprise. En y répondant ouvertement, vous créez de la valeur qui peut aider votre équipe à être plus efficace et aider les utilisateurs à se sentir plus confiants en vous choisissant plutôt que la concurrence.
            </p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Nourrir</li>
              <li><strong>Durée :</strong> Moins d'une minute</li>
            </ul>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vidéo de bienvenue</h3>
            <div className="relative w-full aspect-video max-w-none mx-auto my-4 overflow-hidden rounded-lg border border-gray-200">
               <iframe
                  src="https://player.vimeo.com/video/1104267844"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Vidéo de bienvenue Klarna"
               ></iframe>
            </div>
            <p className="text-orange-500 font-light italic"><strong>Client : Klarna</strong></p>
            <br />
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li><strong>Objectif :</strong> Satisfaire</li>
              <li><strong>Durée :</strong> 1-2 minutes</li>
            </ul>
            <br />
            <p className="text-black">
              Les vidéos de bienvenue offrent un accueil sympathique aux utilisateurs qui ont acheté ou souscrit à vos services, tout en leur montrant les étapes suivantes du processus. Les vidéos de formation pour les employés récemment embauchés entrent également dans cette catégorie. Elles sont sympathiques dans le ton et vous aident à donner la meilleure image de vous. Ces vidéos constituent également généralement le premier point de contact qu'un client a avec vous après sa conversion, donc vous voulez équilibrer le fait d'être en adéquation avec votre marque et d'être informatif.
            </p>

            <br /><br />

            <section>
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Et si vous vous faisiez accompagner ?</h2>
              
              <p className="text-black">
                Nous ne pouvons pas vous dire exactement de quelle vidéo votre entreprise a besoin sans d'abord vous parler, mais nous espérons que cela vous a aidé à mieux comprendre ce qui existe.
              </p>
              <br />
              <p className="text-black">
                Chez Asteraki, nous aidons les entreprises françaises à créer des vidéos percutantes qui répondent à leurs objectifs marketing spécifiques. Avec la bonne stratégie en place et la bonne équipe pour vous accompagner, votre vidéo peut vous emmener très loin.
              </p>
              <br />
              <p className="text-black">
                Prêt à trouver la vidéo parfaite pour votre entreprise ?
              </p>
              <br /><br />
              <div className="flex justify-center items-center">
                 <Link href="/contact" passHref>
                   <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                     Déterminer mon type de vidéo
                   </Button>
                 </Link>
              </div>
              <br /><br />
            </section>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              En résumé
            </h2>
            
            <p className="text-black">
              Et rappelez-vous : nous espérons que c'est un excellent guide, mais ce n'est en aucun cas une liste exhaustive. L'entonnoir de marketing est assez fluide, ce qui signifie qu'une seule vidéo peut servir à plus d'un seul objectif. La clé est d'utiliser la vidéo de manière intelligente et réfléchie pour vous aider à faire progresser vos objectifs de marketing.
            </p>

          </article>

          <br /><br />

          {/* Articles liés */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6 text-black">Vous aimerez peut-être aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/corporate-video-production/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVTA9kki0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2"
                      alt="Production vidéo d'entreprise"
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
                      Qu'est-ce que la production vidéo d'entreprise ?
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