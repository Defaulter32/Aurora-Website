import React from 'react';
import { SalonImage } from './SalonImage';
import { BRIDAL_HERO_IMAGE } from '../data/salonData';

interface BridalSectionProps {
  onEnquireBridal: () => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onEnquireBridal }) => {
  return (
    <section className="relative bg-[#CBBBAE] text-[#21150F] py-28 px-6 md:px-12 overflow-hidden border-t border-[#B5A395]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading, Supporting Text, and CTA */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#60483B] uppercase mb-4 font-semibold">
              <span>BRIDAL & CELEBRATION ATELIER</span>
              <span className="text-[#A77D60]">✦</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#21150F] leading-[0.96]">
              FOR THE
              <br />
              MOMENTS
              <br />
              <span className="italic font-light text-[#60483B]">THAT MATTER.</span>
            </h2>
          </div>

          <p className="font-serif text-2xl sm:text-3xl text-[#3B2920] leading-snug">
            "Elegant bridal and occasion styling designed around your moment."
          </p>

          <p className="text-sm font-sans text-[#60483B] leading-relaxed max-w-lg">
            From intimate ceremonies to grand black-tie galas, our bridal artists craft tailored hair pieces and fluid chignons that hold with security yet look as effortless as if caught by a gentle breeze. We offer private studio suite bookings as well as on-location destination bridal services.
          </p>

          <div className="pt-2">
            <button
              onClick={onEnquireBridal}
              className="px-8 py-3.5 text-xs font-sans tracking-[0.22em] uppercase font-semibold text-[#F4ECE5] bg-[#21150F] hover:bg-[#3B2920] transition-all duration-300 shadow-lg cursor-pointer active:scale-95"
            >
              ENQUIRE ABOUT BRIDAL ✦
            </button>
          </div>
        </div>

        {/* Right Column: Updo Portrait in Organic Arched Aesthetic */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[420px]">
            {/* Delicate border accents */}
            <div className="absolute -inset-4 rounded-t-full border border-[#60483B]/40 pointer-events-none" />
            <div className="absolute -inset-2 rounded-t-full border border-[#A77D60]/40 pointer-events-none" />

            <div className="relative rounded-t-full overflow-hidden shadow-2xl bg-[#21150F] border border-[#60483B]/60">
              <SalonImage
                src={BRIDAL_HERO_IMAGE}
                slotId="slot-05"
                alt="Bridal Elegant Updo - Low Chignon Artistry"
                aspectRatioClass="aspect-[4/5]"
                badgeLabel="THE BRIDAL SUITE ✦"
                className="hover:scale-105 transition-transform duration-700 object-cover"
              />
            </div>

            {/* Bottom Accent */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#E3D7CC] border border-[#A77D60] px-5 py-1.5 rounded-full shadow-md text-center">
              <span className="text-[10px] tracking-[0.25em] font-sans text-[#21150F] uppercase whitespace-nowrap font-medium">
                BRIDAL TRIALS & SUITE PACKAGES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
