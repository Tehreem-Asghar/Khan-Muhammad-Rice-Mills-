/**
 * Official Company Data & Configuration
 * Khan Muhammad Rice Mill
 * Shah Kareem Main Road, Sijawal, Tando Muhammad Khan, Sindh, Pakistan
 */

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description?: string;
  photoUrl: string | null;
  isCustomUploaded?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  variety: string;
  description: string;
  packaging: string;
  imageUrl: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'facility' | 'processing' | 'grains' | 'storage' | 'videos';
  description: string;
  imageUrl: string;
  type?: 'image' | 'video';
  videoUrl?: string;
  platform?: 'file' | 'tiktok' | 'facebook';
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  businessType: string;
  logoUrl: string;
  location: {
    street: string;
    city: string;
    district: string;
    province: string;
    country: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
  };
  leadership: {
    director: {
      name: string;
      designation: string;
      description: string;
      photoUrl: string | null;
    };
    director2: {
      name: string;
      designation: string;
      description: string;
      photoUrl: string | null;
    };
    director3: {
      name: string;
      designation: string;
      description: string;
      photoUrl: string | null;
    };
    founderCeo1: {
      name: string;
      designation: string;
      description: string;
      photoUrl: string | null;
    };
    founderCeo2: {
      name: string;
      designation: string;
      description: string;
      photoUrl: string | null;
    };
    bothCeosPhotoUrl?: string | null;
    contactPerson: {
      name: string;
      designation: string;
      phone: string;
      phoneClean: string;
      description: string;
      photoUrl: string | null;
    };
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneClean: string;
    whatsappUrl: string;
    email: string;
  };
  social: {
    facebook: string;
    tiktok: string;
  };
}

export const COMPANY_DATA: CompanyConfig = {
  name: 'Khan Muhammad Rice Mills',
  tagline: 'Quality Rice. Trusted Processing. Lasting Partnerships.',
  businessType: 'Rice Milling and Agricultural Processing',
  logoUrl: '/assets/aistudio/813966193_1648741980596388_6136195013385306395_n_839e01b9.jpg',
  location: {
    street: 'Shah Kareem Main Road',
    city: 'Sijawal',
    district: 'Tando Muhammad Khan',
    province: 'Sindh',
    country: 'Pakistan',
    fullAddress: 'Shah Kareem Main Road, Sijawal, Tando Muhammad Khan, Sindh, Pakistan',
    googleMapsEmbedUrl: 'https://www.google.com/maps?q=Shah+Kareem+Main+Road,+Sijawal,+Tando+Muhammad+Khan,+Sindh,+Pakistan&output=embed',
  },
  leadership: {
    director: {
      name: 'Abdul Sattar Unar',
      designation: 'Director',
      description:
        'Providing strategic governance, industry insight, and board leadership to maintain Khan Muhammad Rice Mills’ standard of agricultural integrity and responsible milling operations.',
      photoUrl: '/assets/aistudio/Professional_Portrait_in_a_Navy_Three-Piece_Suit_cebb4b9e.png',
    },
    director2: {
      name: 'Khalil Ahmed Unar',
      designation: 'Director',
      description:
        'Providing strategic board direction, commercial oversight, and corporate development counsel to support Khan Muhammad Rice Mills in sustainable growth and operational reliability.',
      photoUrl: '/assets/aistudio/Professional_Navy_Suit_Portrait_8a3b8f39.png',
    },
    director3: {
      name: 'Ghulam Abbas Unar',
      designation: 'Director & Mill Operations Manager',
      description:
        'Director, Milling Plant Supervisor, and Business Contact Representative overseeing daily processing operations, quality standards, and wholesale customer partnerships.',
      photoUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
    },
    founderCeo1: {
      name: 'Atta Muhammad Unar',
      designation: 'Founder & CEO',
      description:
        'As Founder & Chief Executive Officer, Atta Muhammad Unar leads the strategic foundation of Khan Muhammad Rice Mills, upholding strict milling quality and enduring grower relationships.',
      photoUrl: '/assets/aistudio/Professional_Portrait_in_a_Navy_Suit_047b8ef2.png',
    },
    founderCeo2: {
      name: 'Naresh Kumar',
      designation: 'Founder & CEO',
      description:
        'As Founder & Chief Executive Officer, Naresh Kumar drives executive operations, modern milling technologies, and strategic wholesale distribution networks across Pakistan.',
      photoUrl: '/assets/aistudio/Polished_Three-Piece_Suit_Portrait_381bb90f.png',
    },
    bothCeosPhotoUrl: '/assets/aistudio/both_ceos_in_one_frame.jpg',
    contactPerson: {
      name: 'Ghulam Abbas Unar',
      designation: 'Director, Business Contact & Mill Operations Manager',
      phone: '+923003942922',
      phoneClean: '923003942922',
      description:
        'Director, Milling Plant Supervisor, and Operations Manager overseeing daily mill processing, quality standards, wholesale inquiries, and client partnerships.',
      photoUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
    },
  },
  contact: {
    phone: '+923003942922',
    phoneFormatted: '+92 300 3942922',
    phoneClean: '923003942922',
    whatsappUrl: 'https://wa.me/923003942922?text=Hello%20Ghulam%20Abbas%20Unar,%20I%20am%20inquiring%20about%20Khan%20Muhammad%20Rice%20Mills%20products%20and%20processing.',
    email: 'contact@khanmuhammadricemill.com',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100063818054955&mibextid=ZbWKwL',
    tiktok: 'https://www.tiktok.com/@khanricemill?_r=1&_t=ZS-9B9VXLXwpj0',
  },
};

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ghulam Abbas Unar',
    designation: 'Director, Business Contact & Mill Operations Manager',
    description: 'Oversees commercial wholesale inquiries, customer agreements, and overall mill management.',
    photoUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
  },
  {
    id: 'team-2',
    name: 'Ghulam Abbas Unar',
    designation: 'Milling Plant Supervisor',
    description: 'Directs daily paddy intake, processing machinery operations, and plant floor maintenance.',
    photoUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
  },
  {
    id: 'team-3',
    name: 'Ghulam Abbas Unar',
    designation: 'Grain Quality Inspector',
    description: 'Supervises grain sorting, moisture evaluation, polishing uniformity, and bag packaging standards.',
    photoUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
  },
  {
    id: 'team-4',
    name: 'Ghulam Abbas Unar',
    designation: 'Storage & Logistics Head',
    description: 'Coordinates secure warehouse sack stacking, inventory preservation, and timely dispatch logistics.',
    photoUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
  },
];

export const PROCESSING_STAGES = [
  {
    stageNumber: 1,
    title: 'Paddy Reception',
    description: 'Receiving and handling harvested paddy directly from regional growers with thorough intake verification.',
    detail: 'Careful unloading and initial moisture assessment to ensure raw paddy is primed for clean processing.',
    iconName: 'Truck',
  },
  {
    stageNumber: 2,
    title: 'Cleaning',
    description: 'Removing unwanted materials, chaff, and impurities through multi-stage pre-cleaning screens.',
    detail: 'Ensures only pure, clean paddy enters the milling line, safeguarding grain purity and mill machinery.',
    iconName: 'Sparkles',
  },
  {
    stageNumber: 3,
    title: 'Milling',
    description: 'Processing paddy to obtain polished, whole rice grains through dedicated husking and de-husking stages.',
    detail: 'Balanced friction milling that preserves grain integrity and achieves uniform texture.',
    iconName: 'Cpu',
  },
  {
    stageNumber: 4,
    title: 'Sorting & Quality Inspection',
    description: 'Inspecting rice for consistency, grain length, color uniformity, and overall processing quality.',
    detail: 'Rigorous manual and mechanical checks to isolate broken grains and maintain strict standard grades.',
    iconName: 'ShieldCheck',
  },
  {
    stageNumber: 5,
    title: 'Packaging & Handling',
    description: 'Preparing processed rice in protective packaging for appropriate storage and wholesale distribution.',
    detail: 'Secure bagging in standard breathable jute and woven polypropylene sacks for maximum shelf preservation.',
    iconName: 'PackageCheck',
  },
];

export const QUALITY_PILLARS = [
  {
    title: 'Careful Rice Processing',
    description: 'Every batch of harvested paddy is processed with attentive oversight to preserve natural grain attributes.',
    iconName: 'Layers',
  },
  {
    title: 'Consistent Quality Standards',
    description: 'Uniform milling standards ensure reliability across every sack and shipment delivered to our partners.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Proper Handling & Storage',
    description: 'Well-ventilated, dry warehouse premises protect packaged rice from moisture and environmental contaminants.',
    iconName: 'Warehouse',
  },
  {
    title: 'Attention to Cleanliness',
    description: 'Strict cleanliness guidelines are upheld across all mill grounds, sorting screens, and packaging areas.',
    iconName: 'ShieldAlert',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We listen closely to the specifications of grain wholesalers, retailers, and commercial buyers.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Reliable Business Relationships',
    description: 'Long-term partnership built on integrity, transparent communication, and timely order fulfillment.',
    iconName: 'Handshake',
  },
];

export const WHY_CHOOSE_US_BENEFITS = [
  {
    number: '01',
    title: 'Commitment to Quality',
    description: 'Uncompromising dedication to uniform milling, clean grain separation, and high standard presentation.',
  },
  {
    number: '02',
    title: 'Careful Processing',
    description: 'Systematic 5-stage processing designed to protect grain texture and reduce broken grain percentage.',
  },
  {
    number: '03',
    title: 'Customer-Focused Service',
    description: 'Direct communication with dedicated representative Ghulam Abbas Unar for swift quotes and order updates.',
  },
  {
    number: '04',
    title: 'Reliable Business Relationships',
    description: 'Dependable supplier for agricultural distributors and wholesalers across Sindh and wider Pakistan.',
  },
  {
    number: '05',
    title: 'Agricultural Industry Expertise',
    description: 'Deep understanding of regional rice cultivation, paddy harvesting cycles, and seasonal market dynamics.',
  },
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Premium Milled White Rice',
    variety: 'Long Grain White Rice',
    description: 'Carefully milled and polished long grain rice with uniform grain length, clean appearance, and dependable cooking quality.',
    packaging: 'Available in 25 kg & 50 kg Standard Jute / Woven Poly Sacks',
    imageUrl: '/src/assets/images/milled_rice_grains_1793883701238.jpg',
    category: 'Milled Rice',
  },
  {
    id: 'prod-2',
    name: 'Wholesale Processed Rice (Bulk)',
    variety: 'Sindh Grain Selection',
    description: 'Thoroughly cleaned and processed rice tailored for commercial food distributors, supermarkets, and grain wholesalers.',
    packaging: 'Custom Bulk Sacks: 40 kg, 50 kg, or Containerised Pallet Lots',
    imageUrl: '/assets/aistudio/images_d6a94c2d.jpg',
    category: 'Wholesale Lots',
  },
  {
    id: 'prod-3',
    name: 'Harvested Paddy Rice (Pre-Cleaned)',
    variety: 'Regional Harvest Paddy',
    description: 'Quality seasonal paddy received directly from local Sindh farmers, pre-screened to remove extraneous chaff and field dust.',
    packaging: 'Standard Agricultural Jute Bags & Bulk Truckload Loads',
    imageUrl: '/assets/aistudio/images__2__7d74f0a8.jpg',
    category: 'Raw Paddy',
  },
  {
    id: 'prod-4',
    name: 'Commercial Sorting & Custom Milling',
    variety: 'Custom Milling Service',
    description: 'Dedicated toll milling, de-husking, polishing, and bag handling services for agricultural partners and farm owners.',
    packaging: 'Packaged in client-specified or standard mill sacks',
    imageUrl: '/assets/aistudio/images__1__54377b79.jpg',
    category: 'Processing Services',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-vid-1',
    title: 'Mill Operations & Paddy Unloading in Action',
    category: 'videos',
    description: 'Watch live video footage of harvested paddy intake, transport trucks, and milling activities at Khan Muhammad Rice Mills.',
    imageUrl: '/assets/aistudio/images__2__7d74f0a8.jpg',
    type: 'video',
    videoUrl: 'https://www.tiktok.com/@khanricemill?_r=1&_t=ZS-9B9VXLXwpj0',
    platform: 'tiktok',
  },
  {
    id: 'gal-vid-2',
    title: 'Grain Quality Sorting & Packing Reels',
    category: 'videos',
    description: 'Video reel of our operational team inspecting golden milled rice and preparing wholesale sack shipments.',
    imageUrl: '/assets/aistudio/images_d6a94c2d.jpg',
    type: 'video',
    videoUrl: 'https://www.facebook.com/profile.php?id=100063818054955&mibextid=ZbWKwL',
    platform: 'facebook',
  },
  {
    id: 'gal-real-facility',
    title: 'Khan Muhammad Rice Mills Facility & Dispatch',
    category: 'facility',
    description: 'The authentic mill warehouse building on Shah Kareem Main Road, Sijawal, with a grain transport truck loaded with packaged rice.',
    imageUrl: '/assets/aistudio/images__1__54377b79.jpg',
  },
  {
    id: 'gal-real-inspection',
    title: 'Grain Quality Inspection & Handling',
    category: 'grains',
    description: 'On-site quality inspection of golden milled grains and careful bag handling by our dedicated processing team.',
    imageUrl: '/assets/aistudio/images_d6a94c2d.jpg',
  },
  {
    id: 'gal-real-yard',
    title: 'Paddy Reception & Unloading Yard',
    category: 'processing',
    description: 'Active mill processing grounds with harvested paddy unloading, grain screening, and stacked sacks ready for processing.',
    imageUrl: '/assets/aistudio/images__2__7d74f0a8.jpg',
  },
  {
    id: 'gal-real-sunset',
    title: 'Khan Muhammad Rice Mills at Sunset',
    category: 'facility',
    description: 'Evening view across our expansive milling grounds and paddy drying yard under the Sindh sunset.',
    imageUrl: '/assets/aistudio/images__3__1525dfc8.jpg',
  },
  {
    id: 'gal-logo',
    title: 'Khan Muhammad Official Company Seal',
    category: 'facility',
    description: 'Official corporate emblem and brand hallmark: Quality, Harvest & Tradition | Est. 1985.',
    imageUrl: '/assets/aistudio/813966193_1648741980596388_6136195013385306395_n_839e01b9.jpg',
  },
  {
    id: 'gal-chairman',
    title: 'Abdul Sattar Unar — Director',
    category: 'facility',
    description: 'Director providing board governance and strategic oversight at Khan Muhammad Rice Mills.',
    imageUrl: '/assets/aistudio/Professional_Portrait_in_a_Navy_Three-Piece_Suit_cebb4b9e.png',
  },
  {
    id: 'gal-director2',
    title: 'Khalil Ahmed Unar — Director',
    category: 'facility',
    description: 'Director providing strategic counsel and board oversight at Khan Muhammad Rice Mills.',
    imageUrl: '/assets/aistudio/Professional_Navy_Suit_Portrait_8a3b8f39.png',
  },
  {
    id: 'gal-both-ceos',
    title: 'Atta Muhammad Unar & Naresh Kumar — Founders & CEOs',
    category: 'facility',
    description: 'Founders & Chief Executive Officers standing united in one frame at Khan Muhammad Rice Mills.',
    imageUrl: '/assets/aistudio/both_ceos_in_one_frame.jpg',
  },
  {
    id: 'gal-ceo',
    title: 'Atta Muhammad Unar — Founder & CEO',
    category: 'facility',
    description: 'Founder & CEO leading the strategic foundation and agricultural processing excellence at Khan Muhammad Rice Mills.',
    imageUrl: '/assets/aistudio/Professional_Portrait_in_a_Navy_Suit_047b8ef2.png',
  },
  {
    id: 'gal-ceo2',
    title: 'Naresh Kumar — Founder & CEO',
    category: 'facility',
    description: 'Founder & CEO driving modern milling operations and wholesale distribution partnerships at Khan Muhammad Rice Mills.',
    imageUrl: '/assets/aistudio/Polished_Three-Piece_Suit_Portrait_381bb90f.png',
  },
  {
    id: 'gal-rep',
    title: 'Ghulam Abbas Unar — Director & Mill Operations Manager',
    category: 'processing',
    description: 'Director & Operations Lead heading daily mill processing, plant supervision, and client inquiries.',
    imageUrl: '/assets/aistudio/Modern_Business_Portrait_with_Warm_Studio_Accents_801c9d4f.png',
  },
  {
    id: 'gal-1',
    title: 'Lush Sindh Rice Fields',
    category: 'processing',
    description: 'Golden paddy fields ready for harvest in the fertile agricultural lands surrounding Sijawal.',
    imageUrl: '/src/assets/images/hero_rice_fields_1793883684222.jpg',
  },
  {
    id: 'gal-3',
    title: 'Pristine Polished Milled Grains',
    category: 'grains',
    description: 'Detailed inspection of clean, polished long grains ready for packaging.',
    imageUrl: '/src/assets/images/milled_rice_grains_1793883701238.jpg',
  },
  {
    id: 'gal-5',
    title: 'Organized Warehouse & Bagged Inventory',
    category: 'storage',
    description: 'Neatly arranged pallets of packaged rice sacks stored in dry, well-ventilated warehouse bays.',
    imageUrl: '/src/assets/images/rice_warehouse_storage_1793883703112.jpg',
  },
];
