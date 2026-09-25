import React from 'react';
import { SalonImage } from './SalonImage';
import { FINAL_CTA_IMAGE } from '../data/salonData';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#21150F] text-[#F4ECE5] py-28 px-6 md:px-12 border-t border-[#3B2920] overflow-hidden">
      {/* Background warm atmospheric glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#A77D60]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Prose, and Action */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#C9A98D] uppercase">
            <span>RESERVATIONS OPEN</span>
            <span className="text-[#A77D60]">✦</span>
            <span>ATELIER CONSULTATIONS</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4ECE5] leading-[0.98]">
            LET'S CREATE
            <br />
            YOUR SIGNATURE
            <br />
            <span className="italic text-[#E3D7CC]">LOOK.</span>
          </h2>

          <p className="font-serif text-2xl sm:text-3xl text-[#CFC0B5] max-w-lg leading-snug">
            "Ready for a style that feels completely yours?"
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-9 py-4 text-xs font-sans tracking-[0.24em] uppercase font-semibold text-[#21150F] bg-[#E3D7CC] hover:bg-[#CBBBAE] transition-all duration-300 shadow-xl cursor-pointer active:scale-95 whitespace-nowrap"
            >
              BOOK AN APPOINTMENT ✦
            </button>

            <a
              href="mailto:hello@aurorahairstudio.com"
              className="text-xs font-sans tracking-[0.2em] text-[#C9A98D] hover:text-[#F4ECE5] transition-colors border-b border-[#A77D60]/60 pb-1"
            >
              hello@aurorahairstudio.com
            </a>
          </div>
        </div>

        {/* Right Column: Hairstyle Image Partially Integrated into Circular/Arched Composition */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
            {/* Outer Circular Ring and Halo */}
            <div className="absolute -inset-6 rounded-full border border-[#60483B]/40 pointer-events-none" />
            <div className="absolute -inset-3 rounded-full border border-[#A77D60]/30 pointer-events-none" />

            {/* Arched image container */}
            <div className="relative rounded-t-full rounded-b-3xl overflow-hidden border border-[#A77D60]/50 shadow-2xl bg-[#2A1D16]">
              <SalonImage
                src={FINAL_CTA_IMAGE}
                slotId="slot-01"
                alt="Signature Brunette Hair Artistry"
                aspectRatioClass="aspect-[4/5]"
                badgeLabel="AURORA SIGNATURE ✦"
                className="hover:scale-105 transition-transform duration-700 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
