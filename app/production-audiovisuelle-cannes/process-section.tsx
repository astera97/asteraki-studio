// Define the 3 critical steps with focus on process and timelines - Reworded for Cannes
const criticalSteps = [
  {
    step: "1",
    title: "Brief Express & Validation",
    desc: "Un appel rapide pour comprendre votre besoin urgent (événement, témoignage, pitch). On vous envoie un scénario clair que vous validez. Une fois validé, on fixe la date de tournage. Délai : 1 à 2 jours ouvrés pour le brief et la validation.",
  },
  {
    step: "2",
    title: "Tournage Rapide & Montage Intensif",
    desc: "On intervient sur site à la date convenue, souvent en urgence. Le tournage se fait généralement en une demi-journée maximum. Ensuite, on procède au montage intensif en interne. Délai : 2 à 3 jours ouvrés après le tournage.",
  },
  {
    step: "3",
    title: "Livraison Multi-Format Express",
    desc: "On vous livre plusieurs versions de la vidéo : longue, courte, sans son, etc. Prêtes à diffuser sur tous vos canaux. Délai : 5 jours ouvrés max après le tournage.",
  },
];

export default function ProcessGridSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Notre processus express pour votre vidéo à Cannes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple, clair et ultra-rapide. Découvrez comment on procède de la conception à la livraison en 5 jours chrono.
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