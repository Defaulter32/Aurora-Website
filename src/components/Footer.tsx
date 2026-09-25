import React from 'react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'LOOKBOOK', href: '#lookbook' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#21150F] text-[#F4ECE5] pt-20 pb-12 px-6 md:px-12 border-t border-[#3B2920]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-16 border-b border-[#60483B]/40">
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-[#F4ECE5] tracking-[0.15em] mb-2">
              AURORA HAIR STUDIO
            </div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#C9A98D] uppercase">
              <span>HAIR</span>
              <span className="text-[#A77D60]">✦</span>
              <span>BEAUTY</span>
              <span className="text-[#A77D60]">✦</span>
              <span>STYLE</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-sans tracking-[0.22em] text-[#CFC0B5]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#E3D7CC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action & Instagram */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-sans tracking-[0.2em] text-[#C9A98D] hover:text-[#F4ECE5] transition-colors"
            >
              INSTAGRAM
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-sans tracking-[0.2em] uppercase text-[#F4ECE5] border border-[#A77D60] hover:bg-[#E3D7CC] hover:text-[#21150F] transition-colors whitespace-nowrap"
            >
              BOOK APPOINTMENT ✦
            </button>
          </div>
        </div>

        {/* Bottom Credits & Email */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#CFC0B5]/60">
          <div>
            <span>hello@aurorahairstudio.com</span>
            <span className="mx-3 text-[#60483B]">·</span>
            <span>Worldwide / Location placeholder</span>
          </div>

          <div>
            © {new Date().getFullYear()} Aurora Hair Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
