import React from 'react';

export const SalonExperience: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'PERSONALISED CONSULTATION',
      subtitle: 'In-Depth Hair & Lifestyle Discovery',
      description: 'We take the time to understand your style, hair and goals. By analyzing face contours, scalp vitality, and texture tendencies, we collaborate on a cut and tone that flatters your everyday routine.',
    },
    {
      number: '02',
      title: 'EXPERT CRAFT',
      subtitle: 'Precision Architecture & Organic Botanicals',
      description: 'Thoughtful cutting, colour and styling tailored to you. We blend bespoke scissor-over-comb techniques with low-ammonia, nutrient-rich toners that respect the natural protein integrity of each strand.',
    },
    {
      number: '03',
      title: 'EFFORTLESS BEAUTY',
      subtitle: 'Touchable, Lived-In Sophistication',
      description: 'A finished look that feels natural, polished and completely yours. We finish with customized diffuse or blowout rituals and teach you the exact gestures for styling your hair at home with ease.',
    },
  ];

  return (
    <section className="relative bg-[#E3D7CC] text-[#21150F] py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#CBBBAE]">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#60483B] uppercase mb-3 font-semibold">
              <span>THE SALON RITUAL</span>
              <span className="text-[#A77D60]">✦</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#21150F] leading-none">
              THE SALON EXPERIENCE
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#60483B] font-sans leading-relaxed mt-6 md:mt-0">
            Slow beauty at its most intentional. A serene space where craft, comfort, and mindful design converse.
          </p>
        </div>

        {/* Three Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col justify-between p-8 bg-[#EBE2D8] border border-[#CBBBAE] rounded-xl hover:border-[#A77D60] transition-colors duration-300 relative"
            >
              {/* Top Accent Index */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#CBBBAE]/70">
                  <span className="font-serif text-4xl text-[#60483B] font-light">
                    {step.number}
                  </span>
                  <span className="text-xs text-[#A77D60]">✦</span>
                </div>

                <div className="text-[10px] tracking-[0.25em] text-[#60483B] uppercase font-sans font-medium mb-2">
                  {step.subtitle}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#21150F] mb-4 group-hover:text-[#60483B] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm font-sans text-[#60483B] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Minimal Line Decorator */}
              <div className="pt-8 mt-6">
                <div className="w-10 h-[1.5px] bg-[#A77D60] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
