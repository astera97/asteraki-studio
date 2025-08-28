"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function VideoMarketingKPIsPost() {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Découvrez cet article : Les KPI de marketing vidéo que vous devez connaître";

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
            Les KPI de marketing vidéo que vous devez connaître
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de 7 min</span>
            </div>
            <div>7 août 2025</div>
            <div>Par Nora Robinson</div>
          </div>

          {/* Image de héros */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVnAAJPBex46ydSpE25FeO3PBXUsDz80LqGmi7"
              alt="Analyse des KPI de marketing vidéo"
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
              De nombreux marketeurs pensent que la viralité est le meilleur moyen de mesurer le succès d'une vidéo, ce qui signifie que plus elle obtient de vues ou de likes, mieux c'est. Mais si vos seuls repères de succès sont de haut niveau et cosmétiques, vous serez probablement déçu.
            </p>

            <br />

            <p className="text-black leading-relaxed">
              Bien qu'un grand nombre de vues ne soit jamais une mauvaise chose, le nombre de vues est souvent considéré comme une métrique de vanité - une métrique qui a bonne allure sur le papier, mais qui ne se corréle pas réellement avec la rentabilité ou le retour sur investissement (ROI).
            </p>

            <br />

            <p className="text-black leading-relaxed">
              Alors, comment savoir quelles métriques vous devez mesurer pour déterminer le succès de vos actifs vidéo ? Plongeons dans quelques éléments à considérer à chaque étape de l'entonnoir de marketing.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Associer vos objectifs vidéo aux bons KPI
            </h2>
            
            <p className="text-black">
              Avant de créer votre vidéo, vous devriez avoir réfléchi à votre stratégie globale de marketing vidéo. C'est là que vous avez détaillé non seulement vos idées créatives, mais l'étendue complète de vos objectifs vidéo. Vous avez décidé à quel stade de l'entonnoir de marketing vidéo se trouvait votre audience et planifié vos efforts pour des résultats optimaux.
            </p>

            <br />

            <p className="text-black">
              Connaître vos objectifs signifie que vous pouvez choisir les bons indicateurs de performance clés (KPI) à mesurer.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Attirer
            </h2>
            
            <p className="text-black">
              Si votre objectif est d'attirer de nouveaux utilisateurs, votre audience cible est au stade de sensibilisation. Ils découvrent encore le problème auquel ils sont confrontés et sont introduits à votre marque. Ils font des recherches, réfléchissent à leurs options et ne savent pas encore s'ils ont besoin d'aide. C'est le stade le plus en amont de l'entonnoir, donc vous voulez atteindre l'audience la plus large possible.
            </p>

            <br />

            <p className="text-black">
              À ce stade, concentrez-vous sur la mesure :
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Vues</h3>
            <p className="text-black">
              Les vues sont définies différemment selon l'éditeur. Une vue sur YouTube compte comme regarder une vidéo jusqu'à la marque des 30 secondes. Sur TikTok, dès que votre vidéo commence à jouer, elle est comptée comme une vue. Quel que soit l'hébergeur vidéo que vous utilisez, assurez-vous que votre décompte de vues est clairement défini et cohérent.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Impressions</h3>
            <p className="text-black">
              Les impressions sont généralement comptées après la lecture de la première image d'une vidéo. Bien que ce ne soit pas la meilleure mesure d'engagement, le décompte des impressions peut vous donner une bonne idée du nombre de personnes à qui votre marque ou produit a été présentée.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Utilisateurs uniques</h3>
            <p className="text-black">
              C'est le nombre de personnes distinctes qui voient votre vidéo. La même personne peut regarder votre vidéo plus d'une fois, mais elle n'est comptée qu'une seule fois. Cela vous donne une bonne idée du nombre d'individus qui regardent votre vidéo et de combien la regardent plusieurs fois.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation de la notoriété</h3>
            <p className="text-black">
              Ce nombre est une estimation basée sur une recherche consommateur de combien de personnes se souviennent de votre marque après un certain nombre de jours. Après le lancement de votre vidéo, vous devriez voir une augmentation du nombre de personnes se souvenant de votre marque ou produit.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation du rappel publicitaire</h3>
            <p className="text-black">
              Ce nombre est une estimation basée sur une recherche consommateur de combien de personnes se souviennent de votre publicité vidéo après un certain nombre de jours (par exemple, deux jours sur Facebook). Les études montrent que plus une vidéo est regardée longtemps, plus l'augmentation du rappel publicitaire est élevée.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Engager
            </h2>
            
            <p className="text-black">
              Si votre objectif est d'engager les clients potentiels, votre audience cible est probablement au stade de considération. Ils ont interagi avec votre marque d'une certaine manière et sont conscients de leur problème ; maintenant, ils forment des opinions, lisent des avis et demandent des recommandations. À ce stade, vous voulez vous assurer que votre vidéo les engage et suscite leur intérêt. Vous regardez au-delà des métriques d'interaction de base, comme les vues et les impressions, et mesurez à quel point le spectateur est réellement intéressé par votre marque.
            </p>

            <br />

            <p className="text-black">
              À ce stade, concentrez-vous sur la mesure :
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Taux de visionnage complet</h3>
            <p className="text-black">
              C'est votre nombre total de vues divisé par votre nombre d'impressions. Il vous indique combien de personnes non seulement commencent votre vidéo, mais la regardent entièrement. Votre TRV sera le pourcentage de personnes réellement intéressées par votre vidéo.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Temps de visionnage</h3>
            <p className="text-black">
              Le temps de visionnage est la durée totale pendant laquelle votre vidéo a été regardée. Il additionne les minutes de manière cumulative, et les hébergeurs vidéo comme YouTube donnent la priorité aux vidéos avec des temps de visionnage plus élevés. Faites également attention à la durée moyenne de visionnage, qui vous donne une moyenne des spectateurs sur le temps passé à regarder votre vidéo. Plus ces deux chiffres sont élevés, plus votre vidéo est engageante.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation de la sympathie</h3>
            <p className="text-black">
              Ce nombre est une estimation basée sur une recherche consommateur mesurant si les gens perçoivent votre marque de manière plus favorable ou positive après avoir regardé votre vidéo. Bien que les métriques de visionnage mesurent généralement le comportement, ce chiffre est généralement atteint par des inférences basées sur l'expérience de la publicité vidéo et les enquêtes de perception.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation de la considération</h3>
            <p className="text-black">
              C'est une estimation basée sur une recherche consommateur de l'augmentation de la probabilité de conversion après avoir regardé votre publicité vidéo. C'est une métrique cruciale pour comprendre l'effet de votre vidéo. Si elle augmente la considération, votre vidéo de marque augmente probablement les ventes.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation de l'intérêt pour la marque</h3>
            <p className="text-black">
              C'est une estimation basée sur une recherche consommateur de l'augmentation, tout simplement, de l'intérêt pour la marque. Elle peut être mesurée via un questionnaire direct, une augmentation de l'interaction avec la marque, ou une augmentation des requêtes de recherche liées à la marque.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Nourrir
            </h2>
            
            <p className="text-black">
              Si votre objectif est de nourrir vos prospects, votre audience cible est au stade de décision. Ils sont sur le point de faire un achat et vous devez vous assurer que votre vidéo aide à conclure la vente. Ici, il est important de suivre les métriques liées aux ventes qui montrent que l'intérêt des utilisateurs pour votre marque est élevé. Votre objectif doit être d'apporter de la valeur et de vous assurer que votre marque reste en tête de pensée. Mettez en avant les avantages uniques de votre produit et aidez le spectateur à se visualiser en train d'utiliser votre produit ou service.
            </p>

            <br />

            <p className="text-black">
              À ce stade, concentrez-vous sur la mesure :
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Clics</h3>
            <p className="text-black">
              Cela mesure combien de fois les gens cliquent sur un élément de votre vidéo, les emmenant généralement vers un lien externe comme votre site web ou la page produit. Plus un spectateur regarde votre vidéo longtemps, plus il est engagé avec le contenu et plus il est susceptible de cliquer.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Appels</h3>
            <p className="text-black">
              Les appels sont définis par combien de personnes appellent votre entreprise après avoir regardé votre vidéo. Que vous utilisiez le suivi d'appels dynamique ou que vous suiviez les cookies sur les téléphones mobiles de vos spectateurs, un pourcentage élevé d'appels montre un niveau d'intérêt élevé.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Inscriptions</h3>
            <p className="text-black">
              Les inscriptions montrent l'intérêt des spectateurs pour recevoir plus d'informations. Vous pouvez demander un email, un nom complet, un numéro de téléphone, ou plus. C'est une forme de capture de prospects et plus vous en obtenez, plus l'engagement dans votre vidéo est élevé.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Ventes</h3>
            <p className="text-black">
              Les ventes sont directement liées au nombre de personnes qui achètent votre produit ou service après avoir regardé votre vidéo. Les ventes ne se produisent généralement pas immédiatement après, donc assurez-vous de suivre le comportement de vos utilisateurs à chaque point de contact possible et de construire un modèle d'attribution fiable.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation de l'intention d'achat</h3>
            <p className="text-black">
              Bien que vous ne receviez peut-être pas immédiatement une augmentation des ventes après le lancement de votre vidéo, vous devez mesurer toute augmentation de l'intention d'achat, ou la volonté de vos spectateurs d'acheter votre produit ou service.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Satisfaire
            </h2>
            
            <p className="text-black">
              Si votre objectif est de satisfaire vos clients après l'achat, votre audience cible est au stade de fidélisation. Vous savez qu'ils ont acheté chez vous, et vous voulez leur apporter autant de valeur ajoutée que possible pour qu'ils reviennent vers vous pour de futurs achats et vous recommandent à leurs amis. Une clé pour comprendre l'effet de la vidéo sur la fidélisation des clients sera de développer une analyse client - déterminez le cycle de vie de vos clients et où se trouvent leurs plus grands points de douleur après leur achat.
            </p>

            <br />

            <p className="text-black">
              À ce stade, concentrez-vous sur la mesure :
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Visites de retour</h3>
            <p className="text-black">
              Les visites de retour sur le site web peuvent être une bonne mesure de l'efficacité de votre contenu vidéo. Les visites de retour peuvent être influencées par un certain nombre de facteurs, donc assurez-vous que votre suivi est correctement configuré.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Interaction sociale</h3>
            <p className="text-black">
              L'interaction sociale peut se produire à n'importe quel stade de l'entonnoir de marketing, mais se produit à un taux plus élevé après l'achat. Veillez à surveiller vos canaux sociaux - c'est souvent le premier endroit où les spectateurs iront poster un avis positif (ou négatif). Gardez un œil sur les partages sociaux, les commentaires et le nombre de fans.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Augmentation de la sympathie</h3>
            <p className="text-black">
              C'est une métrique importante à mesurer à la fois dans les stades de décision et de fidélisation. Si votre vidéo apporte de la valeur ajoutée après l'achat, les associations positives de votre marque augmenteront. Concentrez-vous sur la création de vidéos qui répondront aux questions des clients et les divertiront.
            </p>
            
          </article>

          <br /><br />

          {/* Articles liés */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6 text-black">Vous aimerez peut-être aussi</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/quel-video-pour-mon-entreprise/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVSTLP9vUCDrvtja6n9zgLHo1Uq5I0Mu78VS4d"
                      alt="Frame à partir d'une vidéo d'entreprise"
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
              <Link href="/blog/pourquoi-les-pdg-publient-plus-de-videos-en-2025/" className="group">
                <div className="space-y-3">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-gray-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                    <Image
                      src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVq2bKoyEJ71KVf4mZNtnHaRrMPQjFOAu6wxlD"
                      alt="Interview vidéo avec un PDJ d'entreprise"
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
            </div>
          </div>
        </div>
      </main>

      {/* Pied de page */}
      <Footer />
    </>
  );
}