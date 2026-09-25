import React, { useState } from 'react';
import { useAssetSync } from '../context/AssetSyncContext';

interface SalonImageProps {
  src: string;
  alt: string;
  slotId?: string;
  className?: string;
  wrapperClassName?: string;
  badgeLabel?: string;
  aspectRatioClass?: string;
  priority?: boolean;
}

export const SalonImage: React.FC<SalonImageProps> = ({
  src,
  alt,
  slotId,
  className = '',
  wrapperClassName = '',
  badgeLabel,
  aspectRatioClass = 'aspect-[3/4]',
  priority = false,
}) => {
  const { getSlotImageSrc } = useAssetSync();
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Retrieve synced runtime asset reference from persistent storage
  const syncedSrc = slotId ? getSlotImageSrc(slotId) : null;
  const activeSrc = syncedSrc || src;

  return (
    <div className={`relative overflow-hidden group bg-[#261912] ${aspectRatioClass} ${wrapperClassName}`}>
      {/* Background tone while rendering */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#2A1D16]" />
      )}

      {!hasError && activeSrc ? (
        <img
          key={activeSrc}
          src={activeSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
          onLoad={() => {
            setHasError(false);
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      ) : (
        /* Clean minimal container */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#261912] text-[#F4ECE5]">
          <div className="font-serif text-lg text-[#F4ECE5] max-w-[240px] leading-snug">
            {alt}
          </div>
        </div>
      )}

      {/* Subtle vignette for editorial depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#21150F]/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Optional Badge Label */}
      {badgeLabel && (
        <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
          <span className="text-[10px] tracking-[0.22em] font-sans font-medium uppercase text-[#F4ECE5] bg-[#21150F]/80 backdrop-blur-sm px-3 py-1 border border-[#60483B]/60 transition-colors duration-300 group-hover:border-[#A77D60]">
            {badgeLabel}
          </span>
        </div>
      )}
    </div>
  );
};
