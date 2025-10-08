// Define the 3 critical steps with focus on process and timelines - Reworded for Paris
const criticalSteps = [
  {
    step: "1",
    title: "Brief & Stratégie",
    desc: "Un échange initial permet de comprendre vos objectifs et votre audience cible. Ensemble, nous définissons la stratégie et validons le concept. Délai : 1 à 3 jours ouvrés après le premier contact.",
  },
  {
    step: "2",
    title: "Tournage & Post-Production",
    desc: "Le tournage s'organise selon vos disponibilités à Paris ou en Île-de-France. Il est généralement achevé en demi-journée. Le montage est ensuite effectué en interne. Délai : 2 à 3 jours ouvrés post-tournage.",
  },
  {
    step: "3",
    title: "Livraison & Formats",
    desc: "Vous recevez votre vidéo finale en plusieurs formats (long, court, vertical, etc.), prêts pour toutes vos plateformes. Délai : 5 jours ouvrés maximum après le tournage.",
  },
];

export default function ProcessGridSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Le déroulé de votre projet vidéo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthodologie claire et structurée pour une collaboration fluide et une livraison dans les temps.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criticalSteps.map((step, index) => (
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
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}