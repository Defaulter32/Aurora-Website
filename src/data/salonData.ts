export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  price: string;
  includes: string[];
}

export interface LookbookItem {
  id: string;
  title: string;
  category: string;
  label: string;
  image: string;
  aspect: string;
  description: string;
  technique: string;
  hairType: string;
  maintenance: string;
}

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'cut-style',
    number: '01',
    title: 'CUT & STYLE',
    tagline: 'Precision cuts, blowouts and signature styling tailored to you.',
    description: 'A bespoke cutting experience crafted specifically around your face shape, natural hair texture, and lifestyle. Every session includes a consultation, signature botanical wash, and lived-in finishing.',
    duration: '60 – 75 min',
    price: 'from $120',
    includes: ['Bespoke texture & face-framing analysis', 'Clarifying organic scalp cleanse', 'Precision dry & wet cutting', 'Signature effortless blowout']
  },
  {
    id: 'colour-dimension',
    number: '02',
    title: 'COLOUR & DIMENSION',
    tagline: 'Highlights, colour and dimensional tones designed to complement your look.',
    description: 'Artistic balayage, dimensional foiling, glossing, and root melts designed to enhance natural undertones with seamless grow-out and luminous depth.',
    duration: '120 – 180 min',
    price: 'from $220',
    includes: ['Custom tone & undertone mapping', 'Hand-painted balayage / micro-highlights', 'Nourishing bond-building treatment', 'Velvet gloss & gloss seal']
  },
  {
    id: 'texture-treatments',
    number: '03',
    title: 'TEXTURE & TREATMENTS',
    tagline: 'Curl definition, nourishing treatments and texture-focused styling.',
    description: 'Restorative moisture infusion, keratin smoothing, and specialized curl hydration designed to revive elasticity, eliminate frizz, and celebrate authentic texture.',
    duration: '45 – 75 min',
    price: 'from $95',
    includes: ['Micro-mist steam hydration', 'Botanical lipid replenishment', 'Curl pattern definition / smoothing', 'At-home maintenance prescription']
  },
  {
    id: 'bridal-events',
    number: '04',
    title: 'BRIDAL & EVENTS',
    tagline: 'Elegant hair styling for weddings, celebrations and special occasions.',
    description: 'Timeless architectural updos, modern textured chignons, and Hollywood waves tailored for unforgettable moments, red carpets, and bridal celebrations.',
    duration: '90 – 120 min',
    price: 'from $190',
    includes: ['In-depth bridal consultation & veil placement', 'Texturizing prep & structural pinning', 'Weather-resistant finishing seal', 'Travel & bridal suite options']
  }
];

export const PRIMARY_HERO_IMAGE = '/Screenshot 2026-09-24 233015.png';
export const TRANSFORMATION_IMAGE = '/Screenshot 2026-09-24 231404.png';
export const CURL_TEXTURE_IMAGE = '/Screenshot 2026-09-24 233023.png';
export const LONG_WAVES_IMAGE = '/Screenshot 2026-09-23 152555.png';
export const BRIDAL_HERO_IMAGE = '/Screenshot 2026-09-24 233146.png';
export const FINAL_CTA_IMAGE = '/Screenshot 2026-09-24 233015.png';

export const LOOKBOOK_GALLERY: LookbookItem[] = [
  {
    id: 'signature-cut',
    title: 'THE HIGHLIGHTED BOB',
    category: 'Precision Cuts',
    label: 'SIGNATURE CUT',
    // Exact uploaded file: Screenshot 2026-09-24 231404.png
    image: '/Screenshot 2026-09-24 231404.png',
    aspect: 'arched',
    description: 'Chic shoulder-skimming bob featuring soft layered graduation and sun-touched caramel balayage for organic, weightless movement.',
    technique: 'Freehand balayage + razor texturizing',
    hairType: 'Fine to medium wavy texture',
    maintenance: 'Trim every 8–10 weeks; gloss refresh at 6 weeks'
  },
  {
    id: 'curl-texture',
    title: 'BOUNCY HONEY SPIRALS',
    category: 'Curl Artistry',
    label: 'CURL & TEXTURE',
    // Exact uploaded file: Screenshot 2026-09-24 233023.png
    image: '/Screenshot 2026-09-24 233023.png',
    aspect: 'portrait',
    description: 'Luminous 3B curl sculpture cut in dry state for natural spring bounce, enriched with warm mocha and honey highlight ribbons.',
    technique: 'Curl-by-curl dry sculpting + lipid infusion',
    hairType: 'Type 3A–3C naturally curly hair',
    maintenance: 'Deep conditioning monthly; curl shape check every 12 weeks'
  },
  {
    id: 'long-waves',
    title: 'DIMENSIONAL MOCHA WAVES',
    category: 'Colour & Waves',
    label: 'LONG WAVES',
    // Exact uploaded file: Screenshot 2026-09-23 152555.png
    image: '/Screenshot 2026-09-23 152555.png',
    aspect: 'editorial-large',
    description: 'Cascading loose S-waves with seamless rich caramel and espresso balayage dimension, reflecting light with glass-hair brilliance.',
    technique: 'Foilayage + root smudge + warm caramel toner',
    hairType: 'Medium to thick wavy hair',
    maintenance: 'Toner touch-up at 8 weeks; full dimension at 16 weeks'
  },
  {
    id: 'bridal-style',
    title: 'THE TEXTURED CHIGNON',
    category: 'Bridal & Occasion',
    label: 'BRIDAL STYLE',
    // Exact uploaded file: Screenshot 2026-09-24 233146.png
    image: '/Screenshot 2026-09-24 233146.png',
    aspect: 'portrait',
    description: 'A softly undone low chignon with romantic face-framing tendrils and delicate airy twists that hold gracefully from first look to final dance.',
    technique: 'Backcomb foundation + soft twist pinning',
    hairType: 'All hair lengths (extensions optional)',
    maintenance: 'Bridal trial recommended 4–8 weeks prior'
  }
];
