import React, { useState } from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { X, Check, Calendar, Clock, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  bridalMode?: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId = 'cut-style',
  bridalMode = false,
}) => {
  const [serviceId, setServiceId] = useState(
    bridalMode ? 'bridal-events' : preselectedServiceId
  );
  const [date, setDate] = useState('2026-10-06');
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const times = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#21150F]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#2A1D16] border border-[#60483B] max-w-xl w-full max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl p-6 sm:p-10 text-[#F4ECE5]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-[#60483B] text-[#CFC0B5] hover:text-[#F4ECE5] hover:border-[#A77D60] transition-colors"
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E3D7CC] text-[#21150F] flex items-center justify-center mx-auto shadow-lg">
              <Check size={28} />
            </div>
            <div className="text-xs tracking-[0.3em] font-sans text-[#A77D60] uppercase font-semibold">
              RESERVATION SECURED
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F4ECE5]">
              We Look Forward to Welcoming You
            </h3>
            <p className="text-sm font-sans text-[#CFC0B5] max-w-md mx-auto leading-relaxed">
              Your appointment for{' '}
              <span className="text-[#E3D7CC] font-medium">
                {SALON_SERVICES.find((s) => s.id === serviceId)?.title}
              </span>{' '}
              on <span className="text-[#E3D7CC]">{date}</span> at{' '}
              <span className="text-[#E3D7CC]">{time}</span> has been confirmed.
            </p>
            <div className="text-xs text-[#C9A98D] pt-2">
              Confirmation & preparation guidelines sent to: {email}
            </div>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#E3D7CC] text-[#21150F] text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-[#CBBBAE] transition-colors"
              >
                RETURN TO ATELIER
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.28em] font-sans text-[#C9A98D] uppercase font-semibold mb-1">
                <Sparkles size={12} className="text-[#A77D60]" />
                <span>AURORA APPOINTMENT ATELIER</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4ECE5]">
                {bridalMode ? 'Bridal & Occasion Enquiry' : 'Reserve an Appointment'}
              </h3>
              <p className="text-xs font-sans text-[#CFC0B5] mt-1">
                Experience personalized cuts, dimensional colour, and effortless styling.
              </p>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                Choose Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SALON_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceId(s.id)}
                    className={`p-3 text-left border rounded-lg transition-all ${
                      serviceId === s.id
                        ? 'bg-[#3B2920] border-[#A77D60] text-[#F4ECE5]'
                        : 'bg-[#21150F]/70 border-[#60483B]/40 text-[#CFC0B5] hover:border-[#60483B]'
                    }`}
                  >
                    <div className="text-xs font-medium font-sans">{s.title}</div>
                    <div className="text-[10px] text-[#C9A98D]">{s.price} · {s.duration}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2 flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#A77D60]" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] focus:outline-none focus:border-[#A77D60]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2 flex items-center gap-1.5">
                  <Clock size={13} className="text-[#A77D60]" />
                  <span>Time</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] focus:outline-none focus:border-[#A77D60]"
                >
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Client Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Julianne Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="julianne@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans tracking-wider text-[#CFC0B5] uppercase mb-2">
                Special Requests or Texture Notes
              </label>
              <textarea
                rows={2}
                placeholder="Share your current hair condition, past color, or inspiration..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#21150F] border border-[#60483B]/60 rounded-lg px-4 py-2.5 text-xs text-[#F4ECE5] placeholder-[#60483B] focus:outline-none focus:border-[#A77D60] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-xs font-sans tracking-[0.22em] uppercase font-semibold text-[#21150F] bg-[#E3D7CC] hover:bg-[#CBBBAE] transition-colors shadow-lg active:scale-98"
            >
              CONFIRM APPOINTMENT ✦
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
