import React from 'react';
import { SalonImage } from './SalonImage';
import { TRANSFORMATION_IMAGE } from '../data/salonData';

interface TransformationFeatureProps {
  onOpenBooking: () => void;
}

export const TransformationFeature: React.FC<TransformationFeatureProps> = ({ onOpenBooking }) => {
  const scrollToLookbook = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#lookbook');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#2A1D16] text-[#F4ECE5] py-28 px-6 md:px-12 overflow-hidden border-y border-[#3B2920]">
      {/* Subtle warm halo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#A77D60]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Organic Sculptural Image Frame */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px]">
            {/* Layered Arched Frames inspired by Aurora reference design */}
            <div className="absolute -inset-4 rounded-tl-[160px] rounded-br-[160px] rounded-tr-[40px] rounded-bl-[40px] border border-[#60483B]/60 pointer-events-none" />
            <div className="absolute -inset-2 rounded-tl-[150px] rounded-br-[150px] rounded-tr-[30px] rounded-bl-[30px] border border-[#A77D60]/30 pointer-events-none" />

            <div className="relative rounded-tl-[140px] rounded-br-[140px] rounded-tr-[24px] rounded-bl-[24px] overflow-hidden shadow-2xl bg-[#21150F] border border-[#A77D60]/50">
              <SalonImage
                src={TRANSFORMATION_IMAGE}
                slotId="slot-02"
                alt="Highlighted Wavy Bob - Side Profile Transformation"
                aspectRatioClass="aspect-[4/5]"
                badgeLabel="THE SIGNATURE BOB ✦"
                className="hover:scale-105 transition-transform duration-700 object-cover"
              />
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#21150F]/95 border border-[#A77D60] p-4 rounded-xl shadow-xl max-w-[200px]">
              <div className="text-[10px] tracking-[0.25em] text-[#C9A98D] uppercase font-sans mb-1">
                TECHNIQUE
              </div>
              <p className="font-serif text-sm text-[#F4ECE5]">
                Dimensional balayage with graduated perimeter weight removal.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Typography & Copy */}
        <div className="lg:col-span-6 space-y-8 order-1 lg:order-2 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#C9A98D] uppercase mb-4">
              <span>FEATURED ARTISTRY</span>
              <span className="text-[#A77D60]">✦</span>
              <span>ATELIER PROFILE</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4ECE5] leading-[0.98]">
              THE SIGNATURE
              <br />
              <span className="italic text-[#E3D7CC]">TRANSFORMATION</span>
            </h2>
          </div>

          {/* Three Key Transformation Pillars */}
          <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs tracking-[0.25em] text-[#A77D60] uppercase font-sans font-medium py-3 border-y border-[#60483B]/40">
            <span>PERSONALISED CUT</span>
            <span className="text-[#C9A98D]">✦</span>
            <span>DIMENSIONAL COLOUR</span>
            <span className="text-[#C9A98D]">✦</span>
            <span>SIGNATURE STYLE</span>
          </div>

          <p className="text-sm sm:text-base font-sans text-[#CFC0B5] leading-relaxed max-w-xl">
            Our signature transformation reimagines the classic bob with lived-in elegance. By weaving micro-strands of honey and cool caramel into deep espresso tones, we create radiant light reflection that complements your skin’s natural undertones while maintaining effortless regrowth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#lookbook"
              onClick={scrollToLookbook}
              className="px-8 py-3.5 text-xs font-sans tracking-[0.22em] uppercase font-medium text-[#21150F] bg-[#E3D7CC] hover:bg-[#CBBBAE] transition-all duration-300 shadow-md cursor-pointer"
            >
              VIEW OUR WORK ✦
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 text-xs font-sans tracking-[0.22em] uppercase text-[#F4ECE5] border border-[#60483B] hover:border-[#A77D60] transition-colors"
            >
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
