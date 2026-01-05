// src/data/team-section-variations.ts

export type TeamSectionContent = {
  heading: string;
  subheading: string;
  cards: {
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
};

// Utility function to avoid repeating the same text logic
const make = (s: string) => s;

const images = {
  preProduction: (city: string) => ({
    src: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywwzqg8Jp8bKgyaVXAm3Widen0SEzUPqYQGJFT",
    alt: `Production de vidéo d'entreprise à ${city}`,
  }),
  filming: (city: string) => ({
    src: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywgz2z1QVfVWtRqG5128kLSxdCylOInE6DP3Ac",
    alt: `Réalisation de vidéo d'entreprise à ${city}`,
  }),
  postProduction: (city: string) => ({
    src: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywelUYPag0Z3GTRXw8eckHUyIdWt1AFNgSfMiQ",
    alt: `Post-production vidéo d'entreprise à ${city}`,
  }),
};

export function getTeamSectionVariations(city: string) {
  return [
    {
      heading: `Production de vidéo d'entreprise à ${city}`,
      subheading: `Nous réalisons des vidéos d'entreprise à ${city} qui mettent en valeur votre activité, votre équipe et vos produits, tout en renforçant votre image professionnelle.`,
      cards: [
        {
          title: "Pré-production stratégique",
          description: make(
            "Nous commençons par comprendre vos objectifs, votre audience et le message clé. Scénarisation, storyboards et plan de tournage sont définis pour garantir un contenu clair et impactant."
          ),
          image: images.preProduction(city)
        },
        {
          title: "Tournage professionnel",
          description: make(
            "Nous capturons des images authentiques de votre équipe, de vos locaux et de vos produits. Chaque plan est pensé pour refléter votre identité et créer de la confiance auprès de vos clients."
          ),
          image: images.filming(city)
        },
        {
          title: "Post-production et livrables",
          description: make(
            "Montage, colorimétrie, ajout de titres et sous-titres : nous livrons une vidéo principale et des formats courts pour vos réseaux sociaux, site web ou présentation commerciale."
          ),
          image: images.postProduction(city)
        }
      ]
    },
    {
      heading: `Réalisation de vidéos d'entreprise à ${city}`,
      subheading: `Nous aidons les entreprises à ${city} à produire des vidéos engageantes qui expliquent clairement leurs services et renforcent leur crédibilité.`,
      cards: [
        {
          title: "Storytelling & message",
          description: make(
            "Nous définissons le message principal et construisons un récit visuel cohérent, mettant en avant vos forces et votre valeur ajoutée."
          ),
          image: images.preProduction(city)
        },
        {
          title: "Tournage sur mesure",
          description: make(
            "Nous filmons vos équipes, produits et interactions clients dans des conditions naturelles, en privilégiant l'authenticité et le réalisme."
          ),
          image: images.filming(city)
        },
        {
          title: "Livraison optimisée",
          description: make(
            "Nous produisons des vidéos prêtes à diffuser, adaptées à tous les supports : site web, réseaux sociaux et présentations professionnelles."
          ),
          image: images.postProduction(city)
        }
      ]
    },
    {
      heading: `Vidéo d'entreprise professionnelle à ${city}`,
      subheading: `Notre production vidéo à ${city} combine storytelling et qualité visuelle pour valoriser votre entreprise et vos projets.`,
      cards: [
        {
          title: "Pré-production",
          description: make(
            "Planification complète : objectifs, scénarios, repérages et storyboards pour garantir une production fluide et efficace."
          ),
          image: images.preProduction(city)
        },
        {
          title: "Tournage",
          description: make(
            "Captation de vos équipes, produits et lieux dans un style professionnel et authentique, avec une attention particulière aux détails et à l’ambiance."
          ),
          image: images.filming(city)
        },
        {
          title: "Post-production",
          description: make(
            "Montage, colorimétrie, animations graphiques et sous-titres. Nous fournissons une vidéo principale et des formats courts pour vos communications digitales."
          ),
          image: images.postProduction(city)
        }
      ]
    },
    {
      heading: `Production de vidéos d'entreprise claire et impactante à ${city}`,
      subheading: `Nous simplifions la production de vidéos d'entreprise à ${city}, pour obtenir un contenu professionnel et efficace sans stress.`,
      cards: [
        {
          title: "Conception et message",
          description: make(
            "Nous clarifions votre message et construisons un récit qui engage votre audience et met en avant votre expertise."
          ),
          image: images.preProduction(city)
        },
        {
          title: "Tournage ciblé",
          description: make(
            "Nous capturons des images authentiques et représentatives de votre activité pour maximiser l’impact visuel."
          ),
          image: images.filming(city)
        },
        {
          title: "Livraison prête à l’usage",
          description: make(
            "Montage final et déclinaisons courtes pour les réseaux sociaux et les présentations, optimisées pour la lecture silencieuse et mobile."
          ),
          image: images.postProduction(city)
        }
      ]
    }
  ];
}
