// src/data/video-entreprise-variations.ts

export type VideoEntrepriseContent = {
  title: string;
  description: string;
  features: string[];
};

// === FIXED: export as a function instead of const arrow function ===
export function videoEntrepriseByCity(city: string): VideoEntrepriseContent[] {
  return [
    // === Variations stratégiques principales (10) ===
    {
      title: `Vidéo d’entreprise à ${city} pensée pour votre stratégie de communication`,
      description: `Notre service de vidéo d’entreprise à ${city} accompagne les entreprises dans la création de vidéos corporate claires, professionnelles et alignées avec leurs objectifs de communication et d’image de marque.`,
      features: [
        "Définition des messages clés en amont du projet.",
        "Vidéo alignée avec votre positionnement et votre image de marque.",
        "Structure narrative claire et compréhensible.",
        "Formats adaptés au site web et à la communication globale."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} pour renforcer votre crédibilité`,
      description: `La vidéo d’entreprise à ${city} est un levier puissant pour inspirer confiance. Nous créons des vidéos qui montrent concrètement votre activité, votre expertise et votre savoir-faire.`,
      features: [
        "Images réelles de vos équipes et de vos locaux.",
        "Discours professionnel, clair et structuré.",
        "Mise en avant de votre expertise métier.",
        "Ton humain et authentique."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} à fort impact visuel`,
      description: `Nous réalisons des vidéos d’entreprise à ${city} conçues pour capter l’attention dès les premières secondes et transmettre votre message efficacement.`,
      features: [
        "Accroche visuelle dès le début de la vidéo.",
        "Montage dynamique et lisible.",
        "Rythme adapté aux usages web.",
        "Compréhension rapide du message."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} orientée storytelling`,
      description: `Une vidéo d’entreprise à ${city} efficace raconte une histoire claire. Nous aidons les entreprises à structurer leur discours autour de leur vision, de leur mission et de leurs valeurs.`,
      features: [
        "Storytelling centré sur l’entreprise.",
        "Narration fluide et cohérente.",
        "Valorisation de votre parcours.",
        "Vidéo pensée pour durer dans le temps."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} mettant en valeur vos équipes`,
      description: `La vidéo d’entreprise à ${city} est aussi un excellent moyen de montrer les femmes et les hommes qui font vivre votre entreprise.`,
      features: [
        "Interviews naturelles des dirigeants et collaborateurs.",
        "Captation sans jeu d’acteur.",
        "Valorisation du savoir-faire humain.",
        "Utilisable en communication externe et interne."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} optimisée pour le digital`,
      description: `Nos vidéos d’entreprise à ${city} sont pensées pour être performantes sur le web et les réseaux sociaux.`,
      features: [
        "Formats adaptés aux supports digitaux.",
        "Sous-titres pour une lecture sans le son.",
        "Déclinaisons horizontales et verticales.",
        "Durées optimisées selon les usages."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} pour une communication globale`,
      description: `Nous produisons des vidéos d’entreprise à ${city} utilisables sur l’ensemble de vos supports de communication.`,
      features: [
        "Vidéo corporate principale.",
        "Extraits courts pour les réseaux sociaux.",
        "Versions pour présentations commerciales.",
        "Banque d’images pour usages futurs."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} institutionnelle et corporate`,
      description: `La vidéo d’entreprise à ${city} est un pilier de la communication institutionnelle. Nous créons des vidéos corporate professionnelles et cohérentes.`,
      features: [
        "Positionnement institutionnel clair.",
        "Respect de votre identité visuelle.",
        "Ton professionnel et moderne.",
        "Image cohérente avec votre notoriété."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} axée expertise et savoir-faire`,
      description: `Nos vidéos d’entreprise à ${city} montrent concrètement ce que vous faites et comment vous le faites.`,
      features: [
        "Présentation de vos services ou processus.",
        "Illustration de votre expertise terrain.",
        "Exemples concrets et visuels.",
        "Aucune promesse abstraite."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} avec accompagnement complet`,
      description: `Notre approche de la vidéo d’entreprise à ${city} inclut un accompagnement complet, de la réflexion stratégique à la livraison finale.`,
      features: [
        "Brief stratégique et définition des objectifs.",
        "Préparation et organisation du tournage.",
        "Tournage professionnel sur site.",
        "Livraison de fichiers prêts à l’emploi."
      ]
    },

    // === Variations marque, discours & image (7) ===
    {
      title: `Vidéo d’entreprise à ${city} fidèle à votre image de marque`,
      description: `Chaque vidéo d’entreprise à ${city} est conçue pour respecter et renforcer l’identité de votre entreprise.`,
      features: [
        "Respect de votre ADN de marque.",
        "Discours aligné avec votre positionnement.",
        "Images authentiques et cohérentes.",
        "Communication homogène."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} pour la marque employeur`,
      description: `La vidéo d’entreprise à ${city} est un outil efficace pour valoriser votre culture d’entreprise et attirer de nouveaux talents.`,
      features: [
        "Mise en avant de la culture interne.",
        "Parole donnée aux collaborateurs.",
        "Ambiance de travail réelle.",
        "Utilisable pour le recrutement."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} authentique et naturelle`,
      description: `Nous privilégions une approche authentique pour chaque vidéo d’entreprise à ${city}, sans mise en scène artificielle.`,
      features: [
        "Aucun acteur.",
        "Tournage dans vos locaux.",
        "Ton naturel et professionnel.",
        "Image crédible et sincère."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} portée par la direction`,
      description: `La vidéo d’entreprise à ${city} permet aux dirigeants de porter leur vision de manière claire et structurée.`,
      features: [
        "Message incarné par la direction.",
        "Vision stratégique clairement exprimée.",
        "Discours accessible.",
        "Adapté aux partenaires et investisseurs."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} pédagogique et explicative`,
      description: `Nous réalisons des vidéos d’entreprise à ${city} qui expliquent simplement des activités ou des services complexes.`,
      features: [
        "Vulgarisation claire.",
        "Discours structuré.",
        "Visuels explicatifs.",
        "Compréhension rapide."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} pensée pour durer`,
      description: `Nos vidéos d’entreprise à ${city} sont conçues pour rester pertinentes sur le long terme.`,
      features: [
        "Contenu intemporel.",
        "Structure pérenne.",
        "Éviter les effets de mode.",
        "Réutilisable dans le temps."
      ]
    },
    {
      title: `Vidéo d’entreprise à ${city} sur mesure`,
      description: `Chaque vidéo d’entreprise à ${city} est unique et adaptée aux enjeux spécifiques de votre entreprise.`,
      features: [
        "Approche personnalisée.",
        "Aucun format standard.",
        "Vidéo alignée avec vos objectifs.",
        "Accompagnement humain et professionnel."
      ]
    }
  ];
}
