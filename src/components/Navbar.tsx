import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'LOOKBOOK', href: '#lookbook' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#21150F]/95 backdrop-blur-md py-4 border-b border-[#60483B]/30 shadow-lg shadow-black/20'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element in editorial serif) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 text-left"
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-light text-[#F4ECE5] group-hover:text-[#E3D7CC] transition-colors">
              AURORA
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans font-medium text-[#C9A98D] uppercase pl-1 border-l border-[#60483B]/60">
              HAIR STUDIO
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-xs tracking-[0.25em] font-sans text-[#CFC0B5] hover:text-[#F4ECE5] transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A77D60] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-sans tracking-[0.2em] uppercase text-[#F4ECE5] border border-[#A77D60]/70 hover:border-[#E3D7CC] hover:bg-[#E3D7CC] hover:text-[#21150F] transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              BOOK APPOINTMENT ✦
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-[10px] font-sans tracking-[0.18em] uppercase text-[#F4ECE5] border border-[#A77D60]/70 hover:bg-[#E3D7CC] hover:text-[#21150F] transition-colors"
            >
              BOOK
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4ECE5] hover:text-[#A77D60] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#21150F]/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="text-[10px] tracking-[0.3em] text-[#C9A98D] uppercase pb-4 border-b border-[#60483B]/30">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-3xl tracking-widest text-[#F4ECE5] hover:text-[#C9A98D] transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-xs text-[#A77D60] font-sans tracking-normal">✦</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-8 border-t border-[#60483B]/30">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-4 text-center text-xs tracking-[0.25em] font-sans uppercase bg-[#E3D7CC] text-[#21150F] font-semibold hover:bg-[#CBBBAE] transition-colors"
          >
            BOOK AN APPOINTMENT ✦
          </button>
          <div className="flex flex-col items-center gap-1 text-xs text-[#CFC0B5]/70">
            <span>Monday – Saturday · 10:00 AM – 7:00 PM</span>
            <span className="text-[#A77D60]">hello@aurorahairstudio.com</span>
          </div>
        </div>
      </div>
    </>
  );
};
