import React, { useState } from 'react';
import { LOOKBOOK_GALLERY, LookbookItem } from '../data/salonData';
import { SalonImage } from './SalonImage';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface LookbookProps {
  onBookLook: (look: LookbookItem) => void;
}

export const Lookbook: React.FC<LookbookProps> = ({ onBookLook }) => {
  const [activeModalItem, setActiveModalItem] = useState<LookbookItem | null>(null);

  const signatureCut = LOOKBOOK_GALLERY.find((item) => item.id === 'signature-cut')!;
  const curlTexture = LOOKBOOK_GALLERY.find((item) => item.id === 'curl-texture')!;
  const longWaves = LOOKBOOK_GALLERY.find((item) => item.id === 'long-waves')!;
  const bridalStyle = LOOKBOOK_GALLERY.find((item) => item.id === 'bridal-style')!;

  return (
    <section id="lookbook" className="relative bg-[#21150F] text-[#F4ECE5] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Lookbook Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#60483B]/40">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#C9A98D] uppercase mb-3">
              <span>EDITORIAL ARCHIVE</span>
              <span className="text-[#A77D60]">✦</span>
              <span>VOLUME 01</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#F4ECE5]">
              THE LOOKBOOK
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#CFC0B5] font-sans leading-relaxed mt-4 md:mt-0">
            A curated portfolio of lived-in cuts, multidimensional brunette & caramel tones, and textured styling captured in our atelier. Click any look for technique insights.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Card 1: Arched Image Container (SIGNATURE CUT) - col-span-5 */}
          <div
            className="md:col-span-5 group cursor-pointer"
            onClick={() => setActiveModalItem(signatureCut)}
          >
            <div className="relative rounded-t-[100px] overflow-hidden border border-[#A77D60]/40 shadow-xl bg-[#2A1D16]">
              <SalonImage
                src={signatureCut.image}
                slotId="slot-02"
                alt="Signature Cut - Highlighted Wavy Bob"
                aspectRatioClass="aspect-[3/4]"
                badgeLabel={signatureCut.label}
              />
            </div>
            <div className="pt-4 flex items-baseline justify-between border-b border-[#60483B]/30 pb-2">
              <div>
                <h3 className="font-serif text-2xl text-[#F4ECE5] group-hover:text-[#E3D7CC] transition-colors">
                  {signatureCut.title}
                </h3>
                <p className="text-xs text-[#CFC0B5] font-sans mt-0.5">{signatureCut.technique}</p>
              </div>
              <span className="text-xs text-[#A77D60] group-hover:translate-x-1 transition-transform">
                ✦ VIEW
              </span>
            </div>
          </div>

          {/* Card 2: Portrait Vertical Image (CURL & TEXTURE) - col-span-7 */}
          <div
            className="md:col-span-7 group cursor-pointer md:mt-12"
            onClick={() => setActiveModalItem(curlTexture)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#60483B]/50 shadow-xl bg-[#2A1D16]">
              <SalonImage
                src={curlTexture.image}
                slotId="slot-03"
                alt="Curl & Texture - Bouncy Honey Spirals"
                aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
                badgeLabel={curlTexture.label}
              />
            </div>
            <div className="pt-4 flex items-baseline justify-between border-b border-[#60483B]/30 pb-2">
              <div>
                <h3 className="font-serif text-2xl text-[#F4ECE5] group-hover:text-[#E3D7CC] transition-colors">
                  {curlTexture.title}
                </h3>
                <p className="text-xs text-[#CFC0B5] font-sans mt-0.5">{curlTexture.technique}</p>
              </div>
              <span className="text-xs text-[#A77D60] group-hover:translate-x-1 transition-transform">
                ✦ VIEW
              </span>
            </div>
          </div>

          {/* Card 3: Large Editorial Showcase (LONG WAVES) - col-span-7 */}
          <div
            className="md:col-span-7 group cursor-pointer"
            onClick={() => setActiveModalItem(longWaves)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#60483B]/50 shadow-xl bg-[#2A1D16]">
              <SalonImage
                src={longWaves.image}
                slotId="slot-04"
                alt="Long Waves - Dimensional Mocha Waves"
                aspectRatioClass="aspect-[4/3] sm:aspect-[16/10]"
                badgeLabel={longWaves.label}
              />
            </div>
            <div className="pt-4 flex items-baseline justify-between border-b border-[#60483B]/30 pb-2">
              <div>
                <h3 className="font-serif text-2xl text-[#F4ECE5] group-hover:text-[#E3D7CC] transition-colors">
                  {longWaves.title}
                </h3>
                <p className="text-xs text-[#CFC0B5] font-sans mt-0.5">{longWaves.technique}</p>
              </div>
              <span className="text-xs text-[#A77D60] group-hover:translate-x-1 transition-transform">
                ✦ VIEW
              </span>
            </div>
          </div>

          {/* Card 4: Smaller Supporting Arched Portrait (BRIDAL STYLE) - col-span-5 */}
          <div
            className="md:col-span-5 group cursor-pointer md:-mt-10"
            onClick={() => setActiveModalItem(bridalStyle)}
          >
            <div className="relative rounded-t-[100px] overflow-hidden border border-[#A77D60]/40 shadow-xl bg-[#2A1D16]">
              <SalonImage
                src={bridalStyle.image}
                slotId="slot-05"
                alt="Bridal Style - The Textured Chignon"
                aspectRatioClass="aspect-[3/4]"
                badgeLabel={bridalStyle.label}
              />
            </div>
            <div className="pt-4 flex items-baseline justify-between border-b border-[#60483B]/30 pb-2">
              <div>
                <h3 className="font-serif text-2xl text-[#F4ECE5] group-hover:text-[#E3D7CC] transition-colors">
                  {bridalStyle.title}
                </h3>
                <p className="text-xs text-[#CFC0B5] font-sans mt-0.5">{bridalStyle.technique}</p>
              </div>
              <span className="text-xs text-[#A77D60] group-hover:translate-x-1 transition-transform">
                ✦ VIEW
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Lookbook Item */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#21150F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-[#2A1D16] border border-[#60483B] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 sm:p-10 text-[#F4ECE5]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-[#60483B] text-[#CFC0B5] hover:text-[#F4ECE5] hover:border-[#A77D60] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden border border-[#60483B]/60 shadow-lg">
                <SalonImage
                  src={activeModalItem.image}
                  slotId={
                    activeModalItem.id === 'signature-cut'
                      ? 'slot-02'
                      : activeModalItem.id === 'curl-texture'
                      ? 'slot-03'
                      : activeModalItem.id === 'long-waves'
                      ? 'slot-04'
                      : 'slot-05'
                  }
                  alt={activeModalItem.title}
                  aspectRatioClass="aspect-[3/4]"
                />
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#C9A98D] uppercase font-sans mb-2">
                    <span>{activeModalItem.category}</span>
                    <span>✦</span>
                    <span>{activeModalItem.label}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F4ECE5]">
                    {activeModalItem.title}
                  </h3>
                </div>

                <p className="text-sm font-sans text-[#E3D7CC] leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#60483B]/40 text-xs font-sans">
                  <div>
                    <span className="text-[#A77D60] uppercase tracking-wider block">Technique:</span>
                    <span className="text-[#F4ECE5]">{activeModalItem.technique}</span>
                  </div>
                  <div>
                    <span className="text-[#A77D60] uppercase tracking-wider block">Ideal Hair Type:</span>
                    <span className="text-[#F4ECE5]">{activeModalItem.hairType}</span>
                  </div>
                  <div>
                    <span className="text-[#A77D60] uppercase tracking-wider block">Maintenance Schedule:</span>
                    <span className="text-[#F4ECE5]">{activeModalItem.maintenance}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      const item = activeModalItem;
                      setActiveModalItem(null);
                      onBookLook(item);
                    }}
                    className="flex-1 py-3 px-6 bg-[#E3D7CC] text-[#21150F] text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-[#CBBBAE] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>RESERVE THIS LOOK</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
