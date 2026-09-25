import React, { useState } from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { Check, Calendar, Clock, MapPin, Mail, Instagram, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialServiceId?: string;
  onBookingSubmitted?: (details: any) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId, onBookingSubmitted }) => {
  const [selectedService, setSelectedService] = useState(initialServiceId || 'cut-style');
  const [date, setDate] = useState('2026-10-05');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const bookingDetails = {
      service: SALON_SERVICES.find((s) => s.id === selectedService)?.title,
      date,
      timeSlot,
      name,
      email,
      phone,
      notes,
    };

    setIsSubmitted(true);
    if (onBookingSubmitted) {
      onBookingSubmitted(bookingDetails);
    }
  };

  return (
    <section id="contact" className="relative bg-[#21150F] text-[#F4ECE5] py-28 px-6 md:px-12 border-t border-[#3B2920]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#60483B]/40">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] font-sans text-[#C9A98D] uppercase mb-3">
              <span>STUDIO ATELIER & RESERVATIONS</span>
              <span className="text-[#A77D60]">✦</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight text-[#F4ECE5]">
              GET IN TOUCH
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#CFC0B5] font-sans leading-relaxed mt-4 md:mt-0">
            Reserve your bespoke hair consultation or reach out directly for bridal suite and editorial commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Salon Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <div className="font-serif text-3xl sm:text-4xl text-[#F4ECE5] tracking-wide mb-2">
                AURORA HAIR STUDIO
              </div>
              <p className="text-xs tracking-[0.25em] font-sans text-[#C9A98D] uppercase">
                HAIR • BEAUTY • STYLE
              </p>
            </div>

            {/* Studio Hours */}
            <div className="space-y-2 pt-6 border-t border-[#60483B]/30">
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#A77D60] uppercase font-sans font-medium">
                <Clock size={14} />
                <span>OPENING HOURS</span>
              </div>
              <div className="text-sm font-sans text-[#F4ECE5]">
                Monday – Saturday
              </div>
              <div className="text-xs text-[#CFC0B5]">
                10:00 AM – 7:00 PM (By Appointment)
              </div>
              <div className="text-xs text-[#A77D60]/80">
                Sunday · Closed for private bridal parties
              </div>
            </div>

            {/* Studio Location (Placeholder as specified) */}
            <div className="space-y-2 pt-6 border-t border-[#60483B]/30">
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#A77D60] uppercase font-sans font-medium">
                <MapPin size={14} />
                <span>LOCATION</span>
              </div>
              <div className="text-sm font-sans text-[#F4ECE5]">
                Worldwide / Location placeholder
              </div>
              <div className="text-xs text-[#CFC0B5]">
                Private studio atelier address provided upon reservation confirmation
              </div>
            </div>

            {/* Direct Connect */}
            <div className="space-y-3 pt-6 border-t border-[#60483B]/30">
              <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#A77D60] uppercase font-sans font-medium">
                <Mail size={14} />
                <span>DIRECT ENQUIRIES</span>
              </div>
              <div>
                <a
                  href="mailto:hello@aurorahairstudio.com"
                  className="font-serif text-xl text-[#F4ECE5] hover:text-[#E3D7CC] transition-colors border-b border-[#A77D60]/50 pb-0.5"
                >
                  hello@aurorahairstudio.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] font-sans text-[#C9A98D] hover:text-[#F4ECE5] transition-colors"
                >
                  <Instagram size={14} />
                  <span>INSTAGRAM: @AURORAHAIRSTUDIO</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Booking Form */}
          <div className="lg:col-span-7 bg-[#2A1D16] border border-[#60483B]/60 p-8 sm:p-10 rounded-2xl relative shadow-xl">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#E3D7CC] text-[#21150F] flex items-center justify-center shadow-lg">
                  <Check size={28} />
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4ECE5]">
                  Reservation Requested
                </h3>
                <p className="text-sm font-sans text-[#CFC0B5] max-w-md leading-relaxed">
                  Thank you, <span className="text-[#E3D7CC] font-medium">{name}</span>. We have reserved your appointment slot on <span className="text-[#E3D7CC]">{date}</span> at <span className="text-[#E3D7CC]">{timeSlot}</span> for <span className="text-[#E3D7CC]">{SALON_SERVICES.find((s) => s.id === selectedService)?.title}</span>.
                </p>
                <p className="text-xs text-[#A77D60] tracking-wide">
                  A personalized confirmation email has been sent to {email}.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-sans tracking-[0.2em] uppercase text-[#F4ECE5] border border-[#A77D60] hover:bg-[#E3D7CC] hover:text-[#21150F] transition-colors"
                >
                  MAKE ANOTHER RESERVATION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-[10px] tracking-[0.25em] text-[#C9A98D] uppercase font-sans font-medium mb-1 flex items-center gap-2">
                    <Sparkles size={12} className="text-[#A77D60]" />
                    <span>ONLINE APPOINTMENT RESERVATION</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4ECE5]">
                    Select Your Ritual & Date
                  </h3>
                </div>

                {/* Service Selector */}
                <div>
                  <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                    Service Experience
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SALON_SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s.id)}
                        className={`p-3 text-left border rounded-lg transition-all ${
                          selectedService === s.id
                            ? 'bg-[#3B2920] border-[#A77D60] text-[#F4ECE5]'
                            : 'bg-[#21150F]/70 border-[#60483B]/40 text-[#CFC0B5] hover:border-[#60483B]'
                        }`}
                      >
                        <div className="text-xs font-medium font-sans">{s.title}</div>
                        <div className="text-[11px] text-[#C9A98D] mt-0.5">{s.price} · {s.duration}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] focus:outline-none focus:border-[#A77D60]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                      Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] focus:outline-none focus:border-[#A77D60]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Clara Montgomery"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="clara@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                      Hair Notes or Goals
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. dimensional blonde balayage, fine wavy hair"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-sans tracking-[0.24em] uppercase font-semibold text-[#21150F] bg-[#E3D7CC] hover:bg-[#CBBBAE] transition-all duration-300 shadow-md cursor-pointer active:scale-98"
                >
                  CONFIRM APPOINTMENT RESERVATION ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
