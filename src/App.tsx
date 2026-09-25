import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { TransformationFeature } from './components/TransformationFeature';
import { Lookbook } from './components/Lookbook';
import { SalonExperience } from './components/SalonExperience';
import { BridalSection } from './components/BridalSection';
import { Statistics } from './components/Statistics';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AssetSyncProvider } from './context/AssetSyncContext';
import { ServiceItem, LookbookItem } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('cut-style');
  const [isBridalMode, setIsBridalMode] = useState(false);

  const handleOpenGeneralBooking = () => {
    setIsBridalMode(false);
    setSelectedServiceId('cut-style');
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setIsBridalMode(service.id === 'bridal-events');
    setSelectedServiceId(service.id);
    setIsBookingOpen(true);
  };

  const handleBookLook = (look: LookbookItem) => {
    if (look.id === 'bridal-style') {
      setIsBridalMode(true);
      setSelectedServiceId('bridal-events');
    } else if (look.id === 'long-waves' || look.id === 'signature-cut') {
      setIsBridalMode(false);
      setSelectedServiceId('colour-dimension');
    } else {
      setIsBridalMode(false);
      setSelectedServiceId('cut-style');
    }
    setIsBookingOpen(true);
  };

  const handleEnquireBridal = () => {
    setIsBridalMode(true);
    setSelectedServiceId('bridal-events');
    setIsBookingOpen(true);
  };

  return (
    <AssetSyncProvider>
      <div className="min-h-screen bg-[#21150F] text-[#F4ECE5] font-sans selection:bg-[#A77D60] selection:text-[#F4ECE5]">
        {/* Fixed Navigation */}
        <Navbar onOpenBooking={handleOpenGeneralBooking} />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero onOpenBooking={handleOpenGeneralBooking} />

          {/* 2. Introduction Section (Warm Cream organic curved transition) */}
          <Introduction />

          {/* 3. Services Section (Numbered editorial list in Deep Espresso) */}
          <Services onSelectService={handleSelectService} />

          {/* 4. Featured Hair / Transformation (Organic sculptural composition) */}
          <TransformationFeature onOpenBooking={handleOpenGeneralBooking} />

          {/* 5. Lookbook Section (Asymmetric editorial gallery) */}
          <Lookbook onBookLook={handleBookLook} />

          {/* 6. Salon Experience Section (Warm Cream editorial columns) */}
          <SalonExperience />

          {/* 7. Bridal & Occasion Section (Soft Beige / Warm Cream) */}
          <BridalSection onEnquireBridal={handleEnquireBridal} />

          {/* 8. Statistics Section (Minimal numbers with celestial symbols) */}
          <Statistics />

          {/* 9. Final CTA Section (Deep Espresso with circular visual anchor) */}
          <FinalCTA onOpenBooking={handleOpenGeneralBooking} />

          {/* 10. Contact & Interactive Reservation Section */}
          <ContactSection initialServiceId={selectedServiceId} />
        </main>

        {/* 11. Minimal Editorial Footer */}
        <Footer onOpenBooking={handleOpenGeneralBooking} />

        {/* Interactive Booking Drawer / Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preselectedServiceId={selectedServiceId}
          bridalMode={isBridalMode}
        />
      </div>
    </AssetSyncProvider>
  );
}
