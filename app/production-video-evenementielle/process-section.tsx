// Define the 3 critical steps with focus on event capture process and timelines
const criticalSteps = [
  {
    step: "1",
    title: "Brief & Planning",
    desc: "On échange rapidement pour cerner le format de votre événement (conférence, salon, séminaire, lancement produit, etc.), les moments clés à filmer et vos besoins en diffusion. On vous confirme la présence de notre équipe sur site et le matériel adapté. Délai : brief finalisé en 24 à 48h.",
  },
  {
    step: "2",
    title: "Captation sur Site",
    desc: "Notre équipe intervient le jour J avec un dispositif multicaméras discret et efficace. On filme l’intégralité de l’événement ou les temps forts selon votre choix, en s’adaptant en temps réel à la dynamique du lieu. Aucune intervention logistique n’est nécessaire de votre côté.",
  },
  {
    step: "3",
    title: "Montage & Livraison Rapide",
    desc: "Dès le lendemain, on vous livre les temps forts en format court (idéal pour LinkedIn ou Instagram). La version complète (conférence, keynote, etc.) est livrée sous 5 jours ouvrés, en plusieurs formats : horizontal, vertical, sous-titré, etc.",
  },
];

export default function ProcessGridSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Notre processus de captation événementielle en 3 étapes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, réactif et pensé pour les professionnels : de la préparation à la diffusion, on gère tout pour que vous puissiez valoriser votre événement sans délai.
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