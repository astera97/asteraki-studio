// src/app/boite-de-production-video/[city]/templates/ProcessSection.tsx

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface ProcessSectionProps {
  processContent: {
    heading: string;
    steps: ProcessStep[];
  };
}

export default function ProcessSection({ processContent }: ProcessSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            {processContent.heading} {/* Use the dynamic heading */}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthodologie claire et structurée pour une collaboration fluide et une livraison dans les temps.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processContent.steps.map((step, index) => (
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
                {step.desc} {/* Use the personalized description */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}