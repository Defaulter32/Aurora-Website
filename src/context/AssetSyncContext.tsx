import React, { createContext, useContext, useState, useEffect } from 'react';
import { StoredAsset, getAllAssets, saveAsset, deleteAsset } from '../services/assetStorage';

export type AssetStatus = 'EMPTY' | 'UPLOADED' | 'CONNECTED' | 'ERROR';

export interface SlotConfig {
  id: string;
  slotNumber: string;
  title: string;
  targetFileName: string;
  purpose: string;
  assignedSection: string;
  status: AssetStatus;
  currentAsset: StoredAsset | null;
  errorMessage?: string;
}

export const INITIAL_SLOTS: Omit<SlotConfig, 'status' | 'currentAsset'>[] = [
  {
    id: 'slot-01',
    slotNumber: 'SLOT 01',
    title: 'HERO',
    targetFileName: 'Screenshot 2026-09-24 233015.png',
    purpose: 'Main Aurora Hair Studio hero photograph.',
    assignedSection: 'Hero Section (Main Arched Frame) & Final CTA',
  },
  {
    id: 'slot-02',
    slotNumber: 'SLOT 02',
    title: 'FEATURED TRANSFORMATION',
    targetFileName: 'Screenshot 2026-09-24 231404.png',
    purpose: 'Featured transformation section & Lookbook Signature Cut.',
    assignedSection: 'The Signature Transformation Section & Lookbook (Signature Cut)',
  },
  {
    id: 'slot-03',
    slotNumber: 'SLOT 03',
    title: 'CURL / TEXTURE',
    targetFileName: 'Screenshot 2026-09-24 233023.png',
    purpose: 'Curl and texture section.',
    assignedSection: 'Lookbook (Curl & Texture Gallery Card)',
  },
  {
    id: 'slot-04',
    slotNumber: 'SLOT 04',
    title: 'LONG WAVES / LOOKBOOK',
    targetFileName: 'Screenshot 2026-09-23 152555.png',
    purpose: 'Long waves / lookbook section.',
    assignedSection: 'Lookbook (Long Waves Editorial Showcase)',
  },
  {
    id: 'slot-05',
    slotNumber: 'SLOT 05',
    title: 'BRIDAL / OCCASION',
    targetFileName: 'Screenshot 2026-09-24 233146.png',
    purpose: 'Bridal and occasion styling section.',
    assignedSection: 'Bridal / Occasion Section & Lookbook (Bridal Style)',
  },
];

interface AssetSyncContextType {
  slots: SlotConfig[];
  isSyncModalOpen: boolean;
  setIsSyncModalOpen: (open: boolean) => void;
  assignFileToSlot: (slotId: string, file: File) => Promise<boolean>;
  processBatchFiles: (files: File[]) => Promise<{ matchedCount: number; unassignedCount: number }>;
  removeAssetFromSlot: (slotId: string) => Promise<void>;
  getSlotImageSrc: (slotId: string) => string | null;
  connectedCount: number;
}

const AssetSyncContext = createContext<AssetSyncContextType | undefined>(undefined);

export const AssetSyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [slots, setSlots] = useState<SlotConfig[]>(() =>
    INITIAL_SLOTS.map((config) => ({
      ...config,
      status: 'EMPTY' as AssetStatus,
      currentAsset: null,
    }))
  );
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load persistent assets on startup from IndexedDB
  useEffect(() => {
    async function loadStoredAssets() {
      try {
        const stored = await getAllAssets();
        setSlots((prevSlots) =>
          prevSlots.map((slot) => {
            const asset = stored[slot.id];
            if (asset && asset.dataUrl) {
              return {
                ...slot,
                status: 'CONNECTED' as AssetStatus,
                currentAsset: asset,
              };
            }
            return {
              ...slot,
              status: 'EMPTY' as AssetStatus,
              currentAsset: null,
            };
          })
        );
      } catch (err) {
        console.error('Failed to load assets from IndexedDB:', err);
      } finally {
        setIsInitialized(true);
      }
    }

    loadStoredAssets();
  }, []);

  // Helper to read File to Base64 DataURL
  const readFileAsDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error || new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  };

  // Assign individual file to slot
  const assignFileToSlot = async (slotId: string, file: File): Promise<boolean> => {
    try {
      // Mark as UPLOADED while processing
      setSlots((prev) =>
        prev.map((s) => (s.id === slotId ? { ...s, status: 'UPLOADED' as AssetStatus } : s))
      );

      const dataUrl = await readFileAsDataUrl(file);

      const newAsset: StoredAsset = {
        slotId,
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.type || 'image/png',
        dataUrl,
        timestamp: Date.now(),
      };

      await saveAsset(newAsset);

      // Verify connection by pre-loading image in memory
      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Image failed to render'));
        img.src = dataUrl;
      });

      // Update state to CONNECTED
      setSlots((prev) =>
        prev.map((s) =>
          s.id === slotId
            ? {
                ...s,
                status: 'CONNECTED' as AssetStatus,
                currentAsset: newAsset,
                errorMessage: undefined,
              }
            : s
        )
      );
      return true;
    } catch (err: any) {
      console.error(`Failed to assign asset to ${slotId}:`, err);
      setSlots((prev) =>
        prev.map((s) =>
          s.id === slotId
            ? {
                ...s,
                status: 'ERROR' as AssetStatus,
                errorMessage: err?.message || 'Failed to connect asset',
              }
            : s
        )
      );
      return false;
    }
  };

  // Automatic match based on filename or target identifiers
  const matchFileToSlotId = (fileName: string): string | null => {
    const lower = fileName.toLowerCase();

    // Direct screenshot timestamp or keyword matches
    if (lower.includes('233015') || lower.includes('hero') || lower.includes('main')) {
      return 'slot-01';
    }
    if (lower.includes('231404') || lower.includes('transformation') || lower.includes('bob')) {
      return 'slot-02';
    }
    if (lower.includes('233023') || lower.includes('curl') || lower.includes('texture')) {
      return 'slot-03';
    }
    if (lower.includes('152555') || lower.includes('waves') || lower.includes('long')) {
      return 'slot-04';
    }
    if (lower.includes('233146') || lower.includes('bridal') || lower.includes('updo') || lower.includes('occasion')) {
      return 'slot-05';
    }

    return null;
  };

  // Process batch of files (from Upload Photos or Drag-and-Drop)
  const processBatchFiles = async (
    files: File[]
  ): Promise<{ matchedCount: number; unassignedCount: number }> => {
    let matchedCount = 0;
    let unassignedCount = 0;

    for (const file of files) {
      const targetSlotId = matchFileToSlotId(file.name);
      if (targetSlotId) {
        const success = await assignFileToSlot(targetSlotId, file);
        if (success) matchedCount++;
      } else {
        // If not matched by filename, assign to first empty slot
        const emptySlot = slots.find((s) => s.status === 'EMPTY');
        if (emptySlot) {
          const success = await assignFileToSlot(emptySlot.id, file);
          if (success) matchedCount++;
        } else {
          unassignedCount++;
        }
      }
    }

    return { matchedCount, unassignedCount };
  };

  // Remove asset from slot
  const removeAssetFromSlot = async (slotId: string): Promise<void> => {
    await deleteAsset(slotId);
    setSlots((prev) =>
      prev.map((s) =>
        s.id === slotId
          ? {
              ...s,
              status: 'EMPTY' as AssetStatus,
              currentAsset: null,
              errorMessage: undefined,
            }
          : s
      )
    );
  };

  // Retrieve current active image source for a slot
  const getSlotImageSrc = (slotId: string): string | null => {
    const slot = slots.find((s) => s.id === slotId);
    if (slot && slot.status === 'CONNECTED' && slot.currentAsset?.dataUrl) {
      return slot.currentAsset.dataUrl;
    }
    return null;
  };

  const connectedCount = slots.filter((s) => s.status === 'CONNECTED').length;

  return (
    <AssetSyncContext.Provider
      value={{
        slots,
        isSyncModalOpen,
        setIsSyncModalOpen,
        assignFileToSlot,
        processBatchFiles,
        removeAssetFromSlot,
        getSlotImageSrc,
        connectedCount,
      }}
    >
      {children}
    </AssetSyncContext.Provider>
  );
};

export const useAssetSync = (): AssetSyncContextType => {
  const context = useContext(AssetSyncContext);
  if (!context) {
    throw new Error('useAssetSync must be used within an AssetSyncProvider');
  }
  return context;
};
