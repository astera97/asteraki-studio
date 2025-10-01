"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function CEOPersonalBrandVideoPost() {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Découvrez cet article : Pourquoi les PDG et dirigeants publient plus de vidéos en 2025";

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
            Pourquoi les PDG et dirigeants publient plus de vidéos en 2025
          </h1>

          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-sm text-black mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Lecture de 8 min</span>
            </div>
            <div>27 août 2025</div>
            <div>Par Nora Robinson</div>
          </div>

          {/* Image de héros */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-8">
            <Image
              src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVq2bKoyEJ71KVf4mZNtnHaRrMPQjFOAu6wxlD"
              alt="PDG s'adressant à la caméra dans un environnement professionnel"
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
              Les dirigeants ont subi une transformation spectaculaire en 2025, avec les PDG et leaders d'entreprise qui adoptent de plus en plus la vidéo comme leur principal moyen d'engagement avec les parties prenantes. Ce changement représente plus qu'une tendance temporaire ; c'est une évolution fondamentale de la façon dont le leadership se connecte avec les audiences dans un monde de plus en plus numérique. La vidéo domine désormais 82 % du trafic internet, ce qui en fait l'outil le plus puissant pour percer le bruit numérique et établir des connexions authentiques avec les parties prenantes.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Quels sont les principaux cas d'usage pour les vidéos de PDG ? (Interne + Externe)
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Applications de communication interne</h3>
            <p className="text-black">
              Les PDG utilisent le contenu vidéo pour combler les distances physiques et créer des connexions significatives avec les employés à travers les équipes mondiales. Les visites virtuelles des bureaux sont devenues un moyen puissant de favoriser l'appartenance chez les travailleurs à distance, les entreprises signalant une augmentation de l'engagement lorsque les dirigeants offrent des aperçus en coulisses des sièges sociaux et des emplacements satellites.
            </p>

            <br />

            <p className="text-black">
              Les programmes de reconnaissance ont été transformés grâce à la vidéo, avec des messages personnalisés du PDG entraînant une augmentation de 35 % du moral des employés par rapport aux reconnaissances écrites traditionnelles. Pendant les périodes de changement organisationnel ou de crise, les communications vidéo des dirigeants s'avèrent particulièrement précieuses. Les études montrent que 86 % des employés préfèrent recevoir des mises à jour vidéo directes de leur PDG pendant les périodes d'incertitude, car le médium permet aux leaders de transmettre de l'empathie et de l'authenticité tout en maintenant un message clair.
            </p>

            <br />

            <p className="text-black">
              Les initiatives de formation ont également connu un changement dramatique vers un contenu axé sur la vidéo, avec des modules narrés par le PDG augmentant la rétention d'informations de 40 % par rapport aux manuels de formation traditionnels. Cette amélioration découle de la combinaison d'indices d'apprentissage visuels et auditifs, ainsi que de l'autorité perçue et de l'engagement qui viennent de la livraison exécutive. Chez Hootsuite, le PDG Irina Novoselsky a démontré la puissance des mises à jour vidéo authentiques pendant une restructuration majeure, obtenant un taux d'adoption du changement de 22 % plus élevé grâce à des communications vidéo régulières.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Engagement des parties prenantes externes</h3>
            <p className="text-black">
              Pour les audiences externes, la vidéo est devenue une pierre angulaire de la stratégie moderne de communication exécutive. Les vidéos de thought leadership, en particulier les sessions de questions-réponses en direct, génèrent six fois plus d'interactions que le contenu préenregistré, aidant à positionner les PDG comme des autorités de l'industrie tout en établissant des connexions authentiques avec les parties prenantes. Ce format permet aux exécutifs de démontrer leur expertise tout en maintenant de la spontanéité et de l'accessibilité.
            </p>

            <br />

            <p className="text-black">
              La communication de crise a également évolué de manière significative grâce à la vidéo, avec les réponses vidéo menées par le PDG réduisant les dommages à la réputation de 50 % par rapport aux déclarations écrites. United Airlines a démontré cet effet lorsque leurs excuses vidéo ont entraîné une réduction de 33 % du sentiment négatif par rapport aux réponses écrites initiales. L'immediateté et la nature personnelle de la vidéo permettent aux exécutifs de transmettre de la sincérité et de la responsabilité tout en maintenant le contrôle du récit.
            </p>

            <br />

            <p className="text-black">
              En exploitant stratégiquement les applications vidéo internes et externes, les PDG peuvent créer une stratégie de communication cohésive qui construit la confiance, stimule l'engagement et délivre des résultats commerciaux mesurables à travers tous les groupes de parties prenantes. La clé réside dans l'adaptation du format de contenu et de la livraison aux besoins spécifiques de l'audience tout en maintenant la cohérence de la présence et des messages exécutifs à travers toutes les communications vidéo.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Quels types de vidéos fonctionnent le mieux pour les dirigeants ?
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Stratégie de contenu court</h3>
            <p className="text-black">
              Le paysage du contenu vidéo exécutif s'est résolument orienté vers des messages brefs et ciblés qui s'alignent sur les durées d'attention modernes et les préférences de plateforme. Les analyses de LinkedIn révèlent que les vidéos de moins de 90 secondes atteignent des taux d'achèvement 50 % plus élevés que les formats plus longs, avec un engagement optimal entre 45 et 90 secondes. Cette tendance reflète les modèles de consommation plus larges, puisque 79 % des utilisateurs regardent principalement des vidéos sur smartphones, exigeant un contenu concis et optimisé pour mobile.
            </p>

            <br />

            <p className="text-black">
              Le succès du contenu exécutif court réside dans sa capacité à délivrer des messages ciblés sans sacrifier l'impact. La série "office walk-and-talk" du PDG de Microsoft Satya Nadella exemplit cette approche, générant trois fois plus de partages que les vidéos d'entreprise traditionnelles en combinant brièveté et authenticité. Ces aperçus rapides de la pensée de direction résonnent particulièrement bien sur des plateformes comme LinkedIn, où le format "selfie de PDG" atteint régulièrement des taux de commentaires 200 % plus élevés que le contenu produit en studio.
            </p>

            <br />

            <p className="text-black">
              Les données spécifiques à la plateforme renforcent ce changement, l'algorithme de LinkedIn favorisant activement le contenu vidéo de moins de 60 secondes, générant jusqu'à trois fois plus d'impressions que les posts textuels. Cette préférence algorithmique, combinée aux modèles de comportement des utilisateurs, a établi la vidéo courte comme la pierre angulaire de la stratégie de communication exécutive en 2025.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Optimisation du format</h3>
            <p className="text-black">
              Les vidéos exécutives les plus efficaces équilibrent la qualité professionnelle avec une livraison authentique, exploitant des formats spécifiques basés sur les objectifs de communication. Le contenu brut en coulisses est devenu un outil puissant de construction de confiance, avec des moments non scriptés générant un engagement significativement plus élevé que la messagerie d'entreprise polie.
            </p>

            <br />

            <p className="text-black">
              Le contenu éducatif prospère dans des formats légèrement plus longs, en particulier sur YouTube, où les tutoriels détaillés et les pièces de thought leadership maintiennent l'attention des spectateurs. La série éducative du PDG de Plumbing a généré 100 millions de vues et raccourci les cycles de vente de 40 %, démontrant le potentiel d'un contenu instructif bien exécuté. Les webinaires en direct mettant en vedette des sessions de questions-réponses exécutives atteignent des taux de participation de 80 %, tandis que les vidéos interactives achetables pendant les démonstrations de produits par le PDG convertissent 17 % des spectateurs directement en ventes.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Approches spécifiques aux plateformes</h3>
            <p className="text-black">
              Le succès dans le contenu vidéo exécutif exige d'adapter les approches aux caractéristiques uniques et aux attentes des audiences de chaque plateforme. LinkedIn favorise l'insight professionnel livré dans un style conversationnel, avec des vidéos éducatives de 45-90 secondes performant mieux lorsqu'elles sont accompagnées de sous-titres – cruciaux puisque 85 % des vidéos mobiles sont regardées sans son. YouTube supporte le contenu plus long, avec des tutoriels de 8-12 minutes performant bien lorsqu'ils sont structurés avec des horodatages clairs et des écrans de fin.
            </p>

            <br />

            <p className="text-black">
              TikTok exige une approche totalement différente, avec des clips de 15 secondes alignés sur les tendances utilisant des effets natifs s'avérant les plus efficaces pour la présence exécutive. La clé de l'optimisation par plateforme réside dans la réutilisation stratégique du contenu de base – comme l'a démontré le PDG d'Adobe, qui a transformé une présentation de keynote en 32 extraits spécifiques à la plateforme, augmentant la portée de 70 % à travers les canaux.
            </p>

            <br />

            <p className="text-black">
              Le succès en 2025 exige des dirigeants qu'ils adaptent leur présence vidéo à travers les plateformes tout en maintenant une messagerie cohérente. Cette approche multi-plateforme, combinée à l'optimisation spécifique au format, permet aux leaders de maximiser l'impact tout en échelonnant efficacement leur présence vidéo à travers l'écosystème numérique.
            </p>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              Quelles sont les bonnes pratiques de production pour les vidéos menées par le PDG ?
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Exigences techniques</h3>
            <p className="text-black">
              La qualité vidéo professionnelle reste essentielle pour le contenu exécutif, même si l'authenticité occupe le centre de l'attention. Les fondamentaux d'éclairage approprié peuvent réduire les besoins de post-production de 40 %, avec une lumière naturelle diffusée fournissant le look le plus flatteur et professionnel. La clarté audio est non négociable – les microphones à clip éliminent 75 % des problèmes audio communs qui affectent les enregistrements amateurs. Pour un cadrage optimal, les données montrent que 94 % des utilisateurs tiennent leurs téléphones verticalement, rendant l'orientation verticale cruciale pour le succès sur les plateformes sociales.
            </p>

            <br />

            <p className="text-black">
              La sélection d'équipement devrait prioriser la fiabilité et la facilité d'utilisation. Les caméras de smartphone de haute qualité peuvent désormais égaler l'équipement professionnel pour de nombreuses applications, particulièrement lorsqu'elles sont associées à des outils de stabilisation basiques et des microphones externes. La clé est la cohérence – maintenir des standards techniques similaires à travers tout le contenu exécutif aide à construire la confiance des spectateurs et la reconnaissance de marque.
            </p>

            <br />

            <p className="text-black">
              Les principes de composition basiques impactent de manière significative l'engagement des spectateurs. La règle des tiers augmente la concentration de 30 %, tandis que le placement de caméra au niveau des yeux crée une connexion plus forte avec les spectateurs. Pour les présentations virtuelles, les webcams dédiées et les configurations d'éclairage appropriées sont devenues standard, avec 82 % des exécutifs maintenant des arrangements de studio domestique professionnels.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Équilibre de l'authenticité</h3>
            <p className="text-black">
              Les données sont claires : 85 % des spectateurs privilégient l'authenticité par rapport à une production polie. Cela ne signifie pas abandonner les standards de qualité, mais plutôt trouver le juste milieu entre professionnel et accessible. De nombreux exécutifs réussis, comme le PDG de Hootsuite, filmant délibérément dans des environnements naturels comme des taxis ou des couloirs, notant que "l'authenticité brute génère des impressions".
            </p>

            <br />

            <p className="text-black">
              La "règle des trois prises" est devenue une bonne pratique, limitant les enregistrements à trois tentatives pour préserver la spontanéité et la livraison naturelle. Cette approche augmente en réalité l'engagement, avec le contenu de PDG non scripté générant des taux de commentaires 200 % plus élevés que les vidéos d'entreprise fortement produites.
            </p>

            <br />

            <p className="text-black">
              Lors de l'équilibre entre le poli et l'authenticité, concentrez-vous sur les qualités fondamentales tout en permettant à la personnalité naturelle de briller. Des touches simples comme des arrière-plans d'aspect professionnel et un audio clair maintiennent la crédibilité sans sacrifier la proximité. L'objectif est de créer un contenu qui semble à la fois digne de confiance et authentique.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">Stratégie de distribution</h3>
            <p className="text-black">
              L'optimisation spécifique à la plateforme est cruciale pour maximiser la portée et l'engagement. Les recherches montrent que la réutilisation du contenu de base à travers les plateformes augmente la portée de 70 %. Pour des résultats optimaux, suivez ces directives spécifiques à la plateforme :
            </p>

            <br />

            <p className="text-black">
              LinkedIn favorise les vidéos éducatives de 45-90 secondes avec des sous-titres, cruciales puisque 85 % des vidéos mobiles sont regardées sans son. YouTube performe mieux avec des tutoriels de 8-12 minutes qui incluent des horodatages et des écrans de fin. TikTok exige des clips de 15 secondes alignés sur les tendances qui utilisent des effets natifs.
            </p>

            <br />

            <p className="text-black">
              Le timing de distribution compte autant que le format. Les données montrent que les plannings de publication cohérents augmentent l'engagement de 43 %. Les stratégies de promotion croisée entre plateformes devraient être coordonnées, avec du contenu principal adapté pour les canaux secondaires plutôt que simplement reposté. Le PDG d'Adobe a démontré cela efficacement en transformant une keynote en 32 extraits spécifiques à la plateforme, chacun optimisé pour son canal prévu.
            </p>

            <br />

            <p className="text-black">
              L'exploitation des outils d'IA est devenue une pratique standard pour une distribution efficace. Les logiciels d'édition assistés par IA automatisent désormais le sous-titrage et le redimensionnement spécifique à la plateforme, économisant environ 12 heures par semaine en temps de production. Pour la rédaction de scripts, l'assistance IA aide à rédiger des points de discussion du PDG alignés sur la voix de marque, réduisant le temps de préparation de 50 %. De manière importante, 84 % des exécutifs approuvent désormais les vidéos assistées par IA lorsque l'autorité de révision finale est maintenue.
            </p>

            <br /><br />

            <section>
              <h2 className="text-2xl font-bold text-black mt-12 mb-6">Et si vous développiez votre marque personnelle ?</h2>
              
              <p className="text-black">
                Développer une présence vidéo forte en tant que dirigeant, c'est plus qu'une tendance - c'est une nécessité stratégique dans le paysage commercial européen de 2025. Cela demande de penser à l'authenticité, à la cohérence et à l'impact de votre message.
              </p>
              <br />
              <p className="text-black">
                Chez Asteraki, nous accompagnons les dirigeants européens dans la création de contenus vidéo percutants qui renforcent leur crédibilité, humanisent leur leadership et connectent avec leurs audiences internes et externes.
              </p>
              <br />
              <p className="text-black">
                Prêt à transformer votre présence numérique en tant que leader ?
              </p>
              <br /><br />
              <div className="flex justify-center items-center">
                 <Link href="/contact" passHref>
                   <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                     Développer ma marque personnelle
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
              Points clés
            </h2>
            
            <ul className="list-disc list-inside text-black space-y-2 mt-3">
              <li>En 2025, la vidéo est devenue le médium dominant pour la communication exécutive, entraînée par les algorithmes de plateforme, les exigences de confiance et des résultats commerciaux clairs.</li>
              <li>Les posts vidéo LinkedIn délivrent jusqu'à trois fois plus d'impressions que le texte, tandis que des plateformes comme YouTube et TikTok récompensent le contenu court, authentique et engageant.</li>
              <li>Les spectateurs retiennent 95 % d'un message lorsqu'il est délivré via vidéo comparé à seulement 10 % par le texte, et 91 % des consommateurs disent que la qualité vidéo influence la confiance dans une marque.</li>
              <li>Les mises à jour vidéo exécutives conduisent à un engagement plus élevé, une meilleure rétention des employés, de meilleures conversions de produits, et même une réduction de 35 % des retours de produits.</li>
              <li>La qualité professionnelle reste importante, mais les moments non scriptés et authentiques génèrent souvent 200 % plus d'engagement que les vidéos d'entreprise fortement produites.</li>
            </ul>

            <br /><br />

            <h2
              className="text-2xl font-bold text-black mt-8 mb-4"
              style={{ fontWeight: '700', fontSize: '1.5rem' }}
            >
              FAQ
            </h2>
            
            <h3 className="text-xl font-semibold text-black mt-6 mb-3">1. Pourquoi les PDG adoptent-ils le contenu vidéo maintenant ?</h3>
            <p className="text-black">
              Parce que l'engagement numérique s'est déplacé de manière spectaculaire vers la vidéo. Les algorithmes privilégient les posts vidéo, les consommateurs font confiance à la vidéo plutôt qu'au texte, et des plateformes comme LinkedIn et TikTok récompensent les exécutifs qui partagent des mises à jour vidéo authentiques et cohérentes.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">2. Quels types de vidéos de PDG performe le mieux ?</h3>
            <p className="text-black">
              Les vidéos courtes (45–90 secondes) optimisées pour mobile et les formats axés sur l'authenticité comme les mises à jour "style selfie" et les clips en coulisses performe le mieux sur les canaux sociaux. Pour des insights plus profonds, YouTube supporte le contenu éducatif plus long et les webinaires.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">3. Comment la vidéo bénéficie-t-elle aux communications internes ?</h3>
            <p className="text-black">
              La vidéo aide à combler le fossé dans le travail hybride, augmente le moral grâce à la reconnaissance personnalisée, et améliore la rétention d'informations dans les programmes de formation. Pendant les périodes de changement ou de crise, les employés préfèrent de loin les mises à jour vidéo pour la clarté et l'empathie.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">4. La haute qualité de production est-elle encore nécessaire si l'authenticité compte le plus ?</h3>
            <p className="text-black">
              Oui, mais l'équilibre est essentiel. Les bases professionnelles comme un bon éclairage et un audio clair construisent la crédibilité, tandis que garder un ton conversationnel et naturel assure la proximité. Les vidéos d'entreprise trop polies peuvent sembler déconnectées des audiences.
            </p>

            <br />

            <h3 className="text-xl font-semibold text-black mt-6 mb-3">5. Quel est le ROI du contenu vidéo exécutif ?</h3>
            <p className="text-black">
              L'impact s'étend sur plusieurs domaines : engagement plus élevé (jusqu'à 2,5 fois plus que le texte), confiance renforcée, branding employeur plus fort, taux de conversion accrus pour les lancements de produits, et coûts de production de contenu réduits grâce aux flux de travail pilotés par l'IA.
            </p>

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