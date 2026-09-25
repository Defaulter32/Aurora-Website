import React from 'react';
import { SalonImage } from './SalonImage';
import { PRIMARY_HERO_IMAGE } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#21150F] flex flex-col justify-between pt-28 md:pt-36 pb-16 overflow-hidden hero-gradient"
    >
      {/* Subtle Warm Atmospheric Gradients: Coffee Brown, Caramel, Honey Beige */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[#A77D60]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#60483B]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[450px] bg-[#C9A98D]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Editorial Monogram & Meta Subtext (inspired by the Aurora Studio reference badge) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mb-6 md:mb-8">
        {/* Monogram Crest */}
        <div className="inline-flex items-center justify-center w-10 h-14 rounded-full border border-[#A77D60]/50 mb-4 text-[#E3D7CC] font-serif text-sm tracking-widest bg-[#21150F]/60 backdrop-blur-sm shadow-inner">
          <div className="flex flex-col leading-none text-center">
            <span className="text-[8px] text-[#A77D60] mb-0.5">✦</span>
            <span className="font-serif">A</span>
            <span className="font-serif text-[10px] text-[#C9A98D]">S</span>
          </div>
        </div>

        {/* Small Supporting Label */}
        <div className="flex items-center gap-3 text-[11px] md:text-xs tracking-[0.35em] text-[#C9A98D] uppercase font-sans font-medium mb-3">
          <span>HAIR</span>
          <span className="text-[#A77D60]">✦</span>
          <span>BEAUTY</span>
          <span className="text-[#A77D60]">✦</span>
          <span>STYLE</span>
        </div>

        {/* Giant Editorial Serif Title: AURORA */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl lg:text-[10.5rem] tracking-[0.08em] font-light text-[#F4ECE5] uppercase leading-[0.9] select-none">
          AURORA
        </h1>
        <div className="text-sm sm:text-base md:text-xl lg:text-2xl tracking-[0.45em] text-[#CFC0B5] uppercase font-sans font-light mt-2 md:mt-3">
          HAIR STUDIO
        </div>
      </div>

      {/* Main Composition: Center Organic Arched Portrait with Flanking Editorial Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-4 md:my-8">
        {/* Left Editorial Pillar */}
        <div className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-8 text-left border-l border-[#60483B]/30 pl-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#A77D60] uppercase mb-2 font-sans font-semibold">
              ATELIER PHILOSOPHY
            </div>
            <p className="font-serif text-2xl text-[#F4ECE5] leading-snug">
              "Hair sculpted with editorial precision, living with effortless ease."
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#60483B]/30 text-xs tracking-[0.25em] text-[#CFC0B5] font-sans">
            <div className="flex items-center gap-2 hover:text-[#E3D7CC] transition-colors">
              <span className="text-[#A77D60]">✦</span>
              <span>PRECISION CUTS</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#E3D7CC] transition-colors">
              <span className="text-[#A77D60]">✦</span>
              <span>DIMENSIONAL COLOUR</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#E3D7CC] transition-colors">
              <span className="text-[#A77D60]">✦</span>
              <span>SIGNATURE STYLING</span>
            </div>
          </div>
        </div>

        {/* Center: The Brunette Wavy Bob in an Organic Arched Container */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px]">
            {/* Arched Background Halo & Double Border Inspired by Reference */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-t-full border border-[#A77D60]/30 pointer-events-none" />
            <div className="absolute -inset-1 sm:-inset-1.5 rounded-t-full border border-[#C9A98D]/20 pointer-events-none" />
            <div className="absolute inset-x-8 -top-6 h-12 bg-[#A77D60]/20 blur-xl rounded-full pointer-events-none" />

            {/* The Arched Image Frame */}
            <div className="relative rounded-t-full overflow-hidden border border-[#A77D60]/60 shadow-2xl shadow-black/60 bg-[#2A1D16]">
              <SalonImage
                src={PRIMARY_HERO_IMAGE}
                slotId="slot-01"
                alt="Brunette Wavy Bob with dimensional highlights"
                aspectRatioClass="aspect-[4/5]"
                priority={true}
                className="hover:scale-105 transition-transform duration-700 object-cover"
              />
              {/* Subtle Warm Amber Gradient Overlay at Bottom */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#21150F] via-transparent to-transparent opacity-60" />
            </div>

            {/* Arched Base Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#21150F] border border-[#A77D60] px-4 py-1.5 rounded-full shadow-lg">
              <span className="text-[10px] tracking-[0.25em] font-sans text-[#E3D7CC] uppercase whitespace-nowrap">
                SIGNATURE BRUNETTE BOB ✦
              </span>
            </div>
          </div>
        </div>

        {/* Right Editorial Pillar */}
        <div className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-8 text-right border-r border-[#60483B]/30 pr-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] text-[#A77D60] uppercase mb-2 font-sans font-semibold">
              CURATED ARTISTRY
            </div>
            <p className="text-sm text-[#CFC0B5] font-sans leading-relaxed">
              Every appointment begins with an in-depth conversation exploring texture, natural fall, and the hues that bring warmth to your complexion.
            </p>
          </div>

          <div className="pt-4 border-t border-[#60483B]/30 text-xs text-[#C9A98D] font-sans tracking-widest space-y-1">
            <p className="font-serif text-lg text-[#F4ECE5]">EST. 2026</p>
            <p className="text-[11px] text-[#CFC0B5]/80">APPOINTMENTS BY RESERVATION</p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Fallback text for the pillars */}
      <div className="lg:hidden max-w-md mx-auto px-6 text-center mt-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs tracking-[0.2em] text-[#C9A98D] uppercase font-sans mb-3">
          <span>PRECISION CUTS</span>
          <span className="text-[#A77D60]">·</span>
          <span>COLOUR</span>
          <span className="text-[#A77D60]">·</span>
          <span>STYLING</span>
        </div>
        <p className="text-xs text-[#CFC0B5] leading-relaxed">
          Personalised cuts, dimensional colour and effortless styling created around your individual style, texture and beauty.
        </p>
      </div>

      {/* Primary & Secondary Call To Actions */}
      <div className="relative z-10 max-w-md mx-auto px-6 w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <button
          onClick={onOpenBooking}
          className="w-full sm:w-auto px-8 py-3.5 text-xs font-sans tracking-[0.22em] uppercase font-medium text-[#F4ECE5] bg-transparent border border-[#A77D60] hover:bg-[#E3D7CC] hover:text-[#21150F] hover:border-[#E3D7CC] transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap active:scale-95"
        >
          BOOK AN APPOINTMENT ✦
        </button>

        <a
          href="#services"
          onClick={scrollToServices}
          className="w-full sm:w-auto px-7 py-3.5 text-xs font-sans tracking-[0.22em] uppercase text-[#CFC0B5] border border-[#60483B]/60 hover:text-[#F4ECE5] hover:border-[#A77D60] transition-all duration-300 text-center cursor-pointer whitespace-nowrap"
        >
          EXPLORE SERVICES
        </a>
      </div>
    </section>
  );
};
