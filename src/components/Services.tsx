import React, { useState } from 'react';
import { SALON_SERVICES, ServiceItem } from '../data/salonData';
import { ChevronDown, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="relative bg-[#21150F] text-[#F4ECE5] py-28 px-6 md:px-12 border-t border-[#3B2920]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#60483B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#A77D60]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#60483B]/40">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#C9A98D] uppercase mb-3">
              <span>RITUALS & OFFERINGS</span>
              <span className="text-[#A77D60]">✦</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#F4ECE5] leading-none">
              OUR SERVICES
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#CFC0B5] font-sans leading-relaxed mt-6 md:mt-0">
            Tailored hair artistry using clean organic botanicals and advanced architectural cutting techniques. Every service includes an in-depth texture consultation.
          </p>
        </div>

        {/* Elegant Numbered Service Rows */}
        <div className="divide-y divide-[#60483B]/40">
          {SALON_SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group relative transition-all duration-300 py-8 sm:py-10 cursor-pointer"
                onClick={() => toggleExpand(service.id)}
              >
                {/* Subtle caramel hover background effect */}
                <div className="absolute inset-0 -mx-4 px-4 bg-gradient-to-r from-[#3B2920]/40 via-[#60483B]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Number and Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                    <span className="font-serif text-3xl sm:text-4xl text-[#A77D60] group-hover:translate-x-1.5 transition-transform duration-300 w-12 shrink-0">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4ECE5] group-hover:text-[#E3D7CC] group-hover:translate-x-1 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CFC0B5] font-sans mt-1.5 max-w-xl">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Duration, Price, and Expand Trigger */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10 pl-16 sm:pl-0">
                    <div className="text-left lg:text-right font-sans">
                      <div className="text-xs text-[#C9A98D] tracking-wider">{service.duration}</div>
                      <div className="font-serif text-lg sm:text-xl text-[#F4ECE5] tracking-wide mt-0.5">
                        {service.price}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-sans tracking-[0.18em] uppercase text-[#E3D7CC] border border-[#A77D60]/60 hover:bg-[#E3D7CC] hover:text-[#21150F] transition-colors"
                      >
                        <Sparkles size={13} className="text-[#A77D60]" />
                        <span>RESERVE</span>
                      </button>

                      <div
                        className={`w-9 h-9 rounded-full border border-[#60483B]/80 flex items-center justify-center text-[#CFC0B5] group-hover:border-[#A77D60] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 bg-[#3B2920]' : ''
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Service Atelier Details */}
                {isExpanded && (
                  <div className="relative z-10 pt-6 mt-6 border-t border-[#60483B]/30 pl-16 sm:pl-22 grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
                    <div className="md:col-span-7">
                      <p className="text-sm font-sans text-[#E3D7CC] leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        <div className="text-[10px] tracking-[0.25em] text-[#C9A98D] uppercase font-semibold">
                          SERVICE INCLUDES:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CFC0B5]">
                          {service.includes.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-[#A77D60]">✦</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col justify-end items-start md:items-end gap-3 pt-4 md:pt-0">
                      <span className="text-xs text-[#CFC0B5]/80">
                        Consultation included in all bookings
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        className="px-6 py-2.5 bg-[#E3D7CC] text-[#21150F] text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-[#CBBBAE] transition-colors"
                      >
                        BOOK THIS SERVICE ✦
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
