import { ShieldCheck, Lightbulb, Heart } from 'lucide-react';

export default function VideoEntrepriseWhySection({
  city,
  content
}: {
  city: string;
  content: [ 
    { title: string; description: string },
    { title: string; description: string },
    { title: string; description: string }
  ];
}) {
  const icons = [<ShieldCheck size={40} />, <Lightbulb size={40} />, <Heart size={40} />];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Pourquoi la production vidéo professionnelle est essentielle à {city}
          </h2>
          <p className="text-lg text-black max-w-4xl mx-auto">
            La production vidéo d’entreprise à {city} ne se limite pas à filmer ou animer. Elle combine un message stratégique, un storytelling centré sur l’humain et une équipe qui comprend vos objectifs business. Vidéos institutionnelles, témoignages clients, démonstrations de produits ou vidéos de recrutement : tout est conçu pour valoriser votre marque, capter l’attention et générer des résultats concrets.
          </p>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-16">
          {content.map((item, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 flex items-center justify-center text-orange-500">
                  {icons[idx]}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
