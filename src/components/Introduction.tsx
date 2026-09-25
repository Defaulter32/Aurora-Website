import React from 'react';

export const Introduction: React.FC = () => {
  const highlights = [
    { title: 'PRECISION HAIRCUTS', desc: 'Sculpted dry and wet tailored to your facial architecture and natural hair fall.' },
    { title: 'DIMENSIONAL COLOUR', desc: 'Hand-painted balayage and luminous toners that grow out seamlessly.' },
    { title: 'SIGNATURE STYLING', desc: 'Effortless, touchable texture that feels high-fashion yet lived-in.' },
    { title: 'BRIDAL & OCCASION HAIR', desc: 'Architectural updos and romantic waves for moments of celebration.' },
  ];

  return (
    <section id="about" className="relative bg-[#E3D7CC] text-[#21150F] pt-24 pb-28 px-6 md:px-12 -mt-1 overflow-hidden">
      {/* Top Organic Wave Transition (dark to cream inspired by Aurora Studio reference) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[98%]">
        <svg
          className="relative block w-full h-14 sm:h-20 md:h-28 text-[#E3D7CC]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C300,90 700,120 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Header Row with Stamp & Label */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-8 border-b border-[#CBBBAE]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#60483B] font-semibold">
              INTRODUCTION
            </span>
            <span className="text-[#A77D60]">✦</span>
            <span className="text-xs font-sans tracking-[0.25em] text-[#60483B]/80 uppercase">
              AURORA ATELIER
            </span>
          </div>

          {/* Celestial Circular Badge (Directly adapted from Aurora reference seal) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-full border border-[#A77D60]/60 flex items-center justify-center text-[#60483B] animate-[spin_20s_linear_infinite]">
              <svg className="w-14 h-14" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] uppercase tracking-[0.28em] fill-[#60483B]">
                  <textPath href="#circlePath" startOffset="0%">
                    ✦ THOUGHTFUL · TIMELESS · ARTISTRY ✦
                  </textPath>
                </text>
              </svg>
              <span className="absolute text-xs text-[#A77D60]">✦</span>
            </div>
          </div>
        </div>

        {/* Large Editorial Headline & Sub-Prose */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#21150F] leading-[1.02]">
              YOUR HAIR,
              <br />
              <span className="italic font-light text-[#60483B]">YOUR SIGNATURE.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-serif text-2xl md:text-3xl text-[#3B2920] leading-snug">
              "Personalised cuts, dimensional colour and effortless styling, created around your individual style, texture and beauty."
            </p>
            <p className="text-sm font-sans text-[#60483B] leading-relaxed pt-2">
              We reject one-size-fits-all treatments. In our studio, appointments are slow, dedicated rituals where every foil, angle, and conditioning mask is calibrated to honor your natural texture.
            </p>
          </div>
        </div>

        {/* Four Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#CBBBAE]/80">
          {highlights.map((item, index) => (
            <div key={item.title} className="group flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between text-xs text-[#A77D60] font-sans">
                <span>0{index + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
              </div>
              <h3 className="font-serif text-2xl text-[#21150F] group-hover:text-[#60483B] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-sans text-[#60483B] leading-relaxed">
                {item.desc}
              </p>
              <div className="w-8 h-[1px] bg-[#A77D60]/50 group-hover:w-full transition-all duration-300 pt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
