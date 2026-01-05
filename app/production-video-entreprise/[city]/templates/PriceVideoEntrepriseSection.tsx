"use client";

interface Props {
  city: string;
  data: {
    heading: string;
    intro: string;
    paragraphs: string[];
    factors: { number: string; title: string; description: string }[];
    estimation: { title: string; priceRange: string; note: string };
  };
}

export default function PriceVideoEntrepriseSection({ city, data }: Props) {
  return (
    <section className="py-24" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
          Estimation de budget
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {data.heading}
        </h2>

        {/* Intro */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          {data.intro}
        </p>

        {/* Paragraphs */}
        {data.paragraphs.map((p, idx) => (
          <p key={idx} className="text-gray-300 mb-6 leading-relaxed pb-8">{p}</p>
        ))}

        {/* Factors */}
        <div className="space-y-6">
          {data.factors.map((factor) => (
            <div key={factor.number} className="bg-black p-8 pb-8 rounded-2xl shadow-lg border border-white text-left mx-auto max-w-3xl">
              <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-4">
                {factor.number}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{factor.title}</h3>
              <p className="text-gray-300">{factor.description}</p>
            </div>
          ))}
        </div>

        {/* Carte estimation */}
        <div className="bg-black p-10 rounded-3xl shadow-2xl border border-orange-400 mt-10 relative mx-auto max-w-7xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{data.estimation.title}</h3>
          <p className="text-xl font-semibold text-orange-400 mb-3">{data.estimation.priceRange}</p>
          <p className="text-gray-300 text-sm">{data.estimation.note}</p>

          {/* Élément décoratif */}
          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-orange-500/20"></div>
        </div>

      </div>
    </section>
  );
}
