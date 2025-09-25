// Define the 3 critical steps with focus on process and timelines
const criticalSteps = [
  {
    step: "1",
    title: "Brief & Validation",
    desc: "On commence par un appel pour comprendre votre besoin. On vous envoie un scénario clair que vous validez. Une fois validé, on fixe la date de tournage. Délai : 1 à 3 jours ouvrés pour le brief et la validation.",
  },
  {
    step: "2",
    title: "Tournage & Montage",
    desc: "On intervient sur site à la date convenue. Le tournage se fait généralement en une demi-journée. Ensuite, on procède au montage en interne. Délai : 2 à 3 jours ouvrés après le tournage.",
  },
  {
    step: "3",
    title: "Livraison Multi-Format",
    desc: "On vous livre plusieurs versions de la vidéo : longue, courte, vertical, etc. Prêtes à diffuser sur tous vos canaux. Délai : 5 jours ouvrés max après le tournage.",
  },
];

export default function ProcessGridSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Notre processus de production en 3 étapes clés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple, clair et respectueux de vos délais. Découvrez comment on procède de la conception à la livraison.
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