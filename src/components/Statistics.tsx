import React from 'react';

export const Statistics: React.FC = () => {
  const stats = [
    {
      symbol: '✦',
      number: '15+',
      label: 'YEARS OF CRAFT',
      detail: 'Honoring natural texture & form'
    },
    {
      symbol: '☾',
      number: '500+',
      label: 'CLIENT TRANSFORMATIONS',
      detail: 'Tailored dimensional balayage'
    },
    {
      symbol: '✧',
      number: '100%',
      label: 'PERSONALISED EXPERIENCE',
      detail: 'One-on-one atelier consultations'
    },
    {
      symbol: '☉',
      number: '1',
      label: 'SIGNATURE APPROACH',
      detail: 'Lived-in luxury & effortless ease'
    }
  ];

  return (
    <section className="relative bg-[#21150F] text-[#F4ECE5] py-20 px-6 md:px-12 border-t border-[#3B2920]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#60483B]/40">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 sm:p-8 ${
                index % 2 === 0 ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8'
              }`}
            >
              {/* Celestial Symbol */}
              <span className="text-[#A77D60] text-sm mb-3 opacity-80" aria-hidden="true">
                {item.symbol}
              </span>

              {/* Large Serif Number */}
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#F4ECE5] tabular-nums tracking-tight">
                {item.number}
              </div>

              {/* Label */}
              <div className="text-xs font-sans tracking-[0.22em] text-[#C9A98D] uppercase font-medium mt-3">
                {item.label}
              </div>

              {/* Supporting Note */}
              <p className="text-[11px] font-sans text-[#CFC0B5]/70 mt-1 max-w-[160px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
