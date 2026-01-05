type Step = {
  step: string;
  title: string;
  desc: string;
};

// Définir les 3 étapes clés pour la production de vidéo d'entreprise
const criticalSteps: Step[] = [
  {
    step: "1",
    title: "Stratégie & Script",
    desc: "La production de vidéo d'entreprise à {{city}} commence par un échange pour définir vos objectifs—présentation de marque, témoignages clients, communication interne—et rédiger un script clair, orienté résultat.",
  },
  {
    step: "2",
    title: "Production & Tournage",
    desc: "À {{city}}, notre équipe réalise le tournage ou l’animation sur mesure, enregistre des voix professionnelles et crée des vidéos alignées avec l’identité visuelle et le ton de votre entreprise.",
  },
  {
    step: "3",
    title: "Livraison & Formats Multiples",
    desc: "La vidéo d'entreprise à {{city}} est livrée avec des formats prêts à diffuser sur vos sites, réseaux sociaux et présentations—optimisée pour mobile et multi-usage, dans un délai rapide.",
  },
];

type Props = {
  city: string;
};

export default function VideoEntrepriseProcessSection({ city }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Processus de production vidéo d’entreprise à {city}, étape par étape
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Un workflow clair, efficace et sans stress, pour des vidéos qui valorisent votre marque et vos projets.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criticalSteps.map((step, index) => {
            const description = step.desc.replace(/{{city}}/g, city);

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Number */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-lg mb-4">
                  {step.step}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
