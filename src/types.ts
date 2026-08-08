export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'pulverbeschichtung' | 'sandstrahlen' | 'mobiles-sandstrahlen' | 'vorarbeiten';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  imageUrl?: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'felgen' | 'mobiles-sandstrahlen' | 'industrie' | 'fahrzeugteile' | 'moebel';
  description: string;
  imageUrl: string;
  badge: string;
  details?: string;
}

export interface CapacitySpec {
  label: string;
  value: string;
  unit: string;
  icon: string;
  note: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  partType: string;
  quantity: string;
  dimensions: string;
  colorTone: string;
  finishType: string;
  surfaceFinish: string;
  currentCondition: string[];
  message: string;
}
