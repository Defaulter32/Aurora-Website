/**
 * Aurora Hair Studio - Persistent Asset Storage Service
 * Uses IndexedDB to reliably store and retrieve uploaded photograph Blobs/DataURLs.
 */

const DB_NAME = 'aurora_hair_studio_assets_db';
const DB_VERSION = 1;
const STORE_NAME = 'hair_studio_assets';

export interface StoredAsset {
  slotId: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  dataUrl: string; // Base64 Data URL for universal compatibility across reloads
  timestamp: number;
}

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'slotId' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error || new Error('Failed to open IndexedDB'));
    };
  });

  return dbPromise;
}

export async function saveAsset(asset: StoredAsset): Promise<void> {
  try {
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.put(asset);

      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    // Also store metadata in localStorage for backup index
    try {
      localStorage.setItem(`aurora_asset_meta_${asset.slotId}`, JSON.stringify({
        slotId: asset.slotId,
        fileName: asset.fileName,
        fileSize: asset.fileSize,
        mimeType: asset.mimeType,
        timestamp: asset.timestamp
      }));
    } catch {
      // Ignore localStorage quota errors
    }
  } catch (err) {
    console.warn('IndexedDB save failed, attempting localStorage fallback:', err);
    try {
      localStorage.setItem(`aurora_asset_${asset.slotId}`, JSON.stringify(asset));
    } catch (fallbackErr) {
      console.error('All storage attempts failed:', fallbackErr);
      throw fallbackErr;
    }
  }
}

export async function getAsset(slotId: string): Promise<StoredAsset | null> {
  try {
    const db = await getDB();
    return await new Promise<StoredAsset | null>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.get(slotId);

      req.onsuccess = () => {
        resolve(req.result || null);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB get failed, trying fallback:', err);
    try {
      const raw = localStorage.getItem(`aurora_asset_${slotId}`);
      if (raw) return JSON.parse(raw);
    } catch {
      // Ignore
    }
    return null;
  }
}

export async function getAllAssets(): Promise<Record<string, StoredAsset>> {
  const result: Record<string, StoredAsset> = {};
  try {
    const db = await getDB();
    const assets = await new Promise<StoredAsset[]>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.getAll();

      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });

    assets.forEach((item) => {
      result[item.slotId] = item;
    });
  } catch (err) {
    console.warn('IndexedDB getAll failed, using fallback:', err);
    const slots = ['slot-01', 'slot-02', 'slot-03', 'slot-04', 'slot-05'];
    for (const slot of slots) {
      const raw = localStorage.getItem(`aurora_asset_${slot}`);
      if (raw) {
        try {
          result[slot] = JSON.parse(raw);
        } catch {}
      }
    }
  }
  return result;
}

export async function deleteAsset(slotId: string): Promise<void> {
  try {
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const req = store.delete(slotId);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB delete failed:', err);
  }
  localStorage.removeItem(`aurora_asset_${slotId}`);
  localStorage.removeItem(`aurora_asset_meta_${slotId}`);
}
