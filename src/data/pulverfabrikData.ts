import { ServiceItem, GalleryItem, CapacitySpec } from '../types';

export const COMPANY_INFO = {
  name: 'Pulverfabrik',
  fullName: 'Pulverfabrik – Oberflächentechnik & Mobiles Sandstrahlen',
  tagline: 'Pulverbeschichtung & Sandstrahlen nach Maß',
  ceo: 'Mattia Mazzeo',
  role: 'Geschäftsführer',
  address: {
    street: 'Boschstraße 3a',
    zip: '63843',
    city: 'Niedernberg',
    full: 'Boschstraße 3a, 63843 Niedernberg',
    note: 'Anlieferung & Standort'
  },
  contact: {
    phone: '0151 / 500 611 00',
    phoneRaw: '+4915150061100',
    email: 'mm.pulverfabrik@gmail.com',
    website: 'pulver-fabrik.de',
    hours: 'Mo. - Fr.: 08:00 - 17:00 Uhr (Termine nach Vereinbarung)'
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pulverfabrik+Boschstra%C3%9Fe+3a+63843+Niedernberg',
  capacity: {
    length: '6000 mm (6,0 m)',
    width: '3000 mm (3,0 m)',
    height: '3500 mm (3,5 m)',
    weight: '2,5 Tonnen'
  }
};

export const CAPACITY_SPECS: CapacitySpec[] = [
  {
    label: 'Max. Bauteillänge',
    value: '6.000 mm',
    unit: '6,0 Meter',
    icon: 'Ruler',
    note: 'Ideal für Zäune, Träger, Serienteile & große Industriestrukturen'
  },
  {
    label: 'Max. Bauteilbreite',
    value: '3.000 mm',
    unit: '3,0 Meter',
    icon: 'Maximize2',
    note: 'Großzügige Kabinenmaße für breite Schweißkonstruktionen'
  },
  {
    label: 'Max. Bauteilhöhe',
    value: '3.500 mm',
    unit: '3,5 Meter',
    icon: 'ArrowUp',
    note: 'Optimale Höhe für sperrige Baugruppen & Geländer'
  },
  {
    label: 'Max. Stückgewicht',
    value: '2,5 t',
    unit: '2.500 kg',
    icon: 'Weight',
    note: 'Schwere Industriebauteile, Maschinenbau & Stahlbau'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'pulverbeschichtung',
    title: 'Bauteile & Pulverbeschichtung',
    subtitle: 'Für Industrie, Gewerbe & Privat',
    category: 'pulverbeschichtung',
    shortDesc: 'Extrem widerstandsfähige, schlag- und kratzfeste Oberflächenbeschichtung für Metalle im 2- oder 3-Schichtverfahren.',
    fullDesc: 'Der Fokus liegt auf höchster Qualität und Oberflächengüte. Wir beschichten Industrieteile, Serienteile, Maschinenbauteile, Zäune, Geländer, Möbel sowie Fahrzeug- & Motorradkomponenten. Durch das elektrostatische Pulververfahren wird das Bauteil lückenlos umschlossen.',
    iconName: 'Sparkles',
    badge: 'Neuer Standort Niedernberg',
    features: [
      'Industrieteile & Maschinenbau',
      'Serienteile & Prototypen',
      'Geländer, Zäune & Schweißkonstruktionen',
      '2- & 3-Schichtverfahren mit Korrosionsschutz-Grundierung',
      'Alle RAL-Farbtöne, Sonderfarben, Glanz, Matt & Struktur'
    ]
  },
  {
    id: 'felgen-fahrzeugteile',
    title: 'Felgen & Fahrzeugteile',
    subtitle: 'PKW, Motorrad & Restaurationen',
    category: 'pulverbeschichtung',
    shortDesc: 'Erstklassige Veredelung für Alufelgen, Motorradrahmen, Schwingen, Bremssättel und Oldtimer-Restaurationsobjekte.',
    fullDesc: 'Die Felgenveredelung erfolgt in 3 wesentlichen Schritten: Chemisches Entlacken, Prüfung & Vorbereitung, Abdecken von Pass- & Gewindeflächen und langlebiges Beschichten in Ihrer Wunschfarbe mit UV-Schutz.',
    iconName: 'Disc',
    badge: 'Beliebt bei Tuning & Restauration',
    features: [
      'Chemische Entlackung & Aufarbeitung',
      'Präzise Maskierung aller Plan- & Gewindeflächen',
      'Motorradrahmen, Schwingen & Anbauteile',
      'Brems- & Fahrwerksteile',
      'Höchste Beständigkeit gegen Steinschlag & Witterung'
    ]
  },
  {
    id: 'sandstrahlen-entlacken',
    title: 'Sandstrahlen & Chem. Entlacken',
    subtitle: 'Mechanische & Chemische Vorarbeiten',
    category: 'sandstrahlen',
    shortDesc: 'Gründliche Beseitigung von Rost, Altlack und Verunreinigungen als perfekte Basis für die Neubeschichtung.',
    fullDesc: 'Um langlebige Haftung zu garantieren, werden Stahl- und Metallteile durch Sandstrahlen oder chemisches Entlacken metallisch blank gemacht. Bei Stahlteilen entfernt dies Zunderschichten und schafft den optimalen Haftgrund.',
    iconName: 'Flame',
    features: [
      'Mechanisches Sandstrahlen mit angepasstem Strahlgut',
      'Schonendes chemisches Entlacken',
      'Rost- und Zunderentfernung',
      'Korrosionsschutz-Grundierung direkt im Anschluss'
    ]
  },
  {
    id: 'mobiles-sandstrahlen',
    title: 'Mobiles Sandstrahlen (Holz & Metall)',
    subtitle: 'Vor Ort bei Ihnen – z.B. Hausbalken im Wohnraum',
    category: 'mobiles-sandstrahlen',
    shortDesc: 'Flexibles Strahlen vor Ort für immobile Bauteile, Fachwerkhäuser, Dachstühle, Sichtgebälk, Tore und Fassaden.',
    fullDesc: 'Mobiles Sandstrahlen findet überall dort Anwendung, wo das Strahlen in einer Kabine aufgrund der Bauteilgröße oder örtlichen Gegebenheiten nicht möglich oder unwirtschaftlich ist. Perfekt z.B. für die Sanierung von Holz-Hausbalken in Wohnräumen oder historische Metallstrukturen.',
    iconName: 'Truck',
    badge: 'Spezialleistung vor Ort',
    features: [
      'Holzbalken & Sichtgebälk in Wohnräumen & Altbauten',
      'Fachwerk & historische Holzkonstruktionen',
      'Metalltore, Geländer, Fassaden & Zäune vor Ort',
      'Staubarme, schonende Strahltechnik'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Mobiles Sandstrahlen: Hausbalken im Wohnraum',
    category: 'mobiles-sandstrahlen',
    description: 'Schonendes Freistrahlen von Sichtgebälk und Deckenbalken direkt vor Ort im Wohnbereich.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Mobiles Sandstrahlen',
    details: 'Mobiles Sandstrahlen Holz vor Ort in Wohnräumen'
  },
  {
    id: '2',
    title: 'Yellow Industrial Components',
    category: 'industrie',
    description: 'Sonderanfertigung Pulverbeschichtung in leuchtendem Pulvergelb (RAL 1023) mit Aufhängung.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    badge: 'Industrie & Serie',
    details: 'Inkl. Korrosionsschutz-Grundierung'
  },
  {
    id: '3',
    title: 'Glanzschwarz gepulverte Motorrad- & Speichenfelgen',
    category: 'felgen',
    description: 'Perfekte Tiefe und Spiegelglanz für Motorrad-Radsätze nach chemischer Entlackung.',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
    badge: 'Felgen & KFZ',
    details: '3-Schicht-Aufbau mit Klarlack-Finish'
  },
  {
    id: '4',
    title: 'Custom Audi Sportfelge in Gold-Gelb',
    category: 'felgen',
    description: 'Hochwertige Farbveredelung mit feinem Metallic-Effekt für mehrteilige Performance-Felgen.',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    badge: 'Felgen & Tuning',
    details: 'Sonderfarbton mit Klarlack'
  },
  {
    id: '5',
    title: 'Industrie-Metalltischgestell in Seidenmatt-Schwarz',
    category: 'moebel',
    description: 'Massives Schweißkonstruktions-Tischgestell mit gleichmäßiger Pulverbeschichtung.',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    badge: 'Metall & Möbel',
    details: 'Robust für Innen- & Außenbereich'
  },
  {
    id: '6',
    title: 'Bunte Bremssättel & Motorrad-Baugruppen',
    category: 'fahrzeugteile',
    description: 'Farbige Akzente in Rot, Blau, Gelb, Grün und Gold für Fahrwerks- & Bremskomponenten.',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    badge: 'Motorrad & PKW',
    details: 'Hitzebeständige Pulverbeschichtung'
  }
];

export const ADVANTAGES = [
  {
    title: 'Neuer Standort in Niedernberg',
    description: 'In der Boschstraße 3a mit erweiterter Hallenkapazität und bester Anbindung in der Region Aschaffenburg/Miltenberg.',
    icon: 'MapPin'
  },
  {
    title: 'XXL-Kabinenabmessungen',
    description: 'Bauteile bis 6,0 m Länge, 3,0 m Breite, 3,5 m Höhe und 2,5 t Gewicht mühelos bearbeiten.',
    icon: 'Maximize'
  },
  {
    title: 'Mobiles Sandstrahlen vor Ort',
    description: 'Direkt bei Ihnen z.B. für Hausbalken im Wohnraum, Fachwerk, Tore und feste Außenstrukturen.',
    icon: 'Truck'
  },
  {
    title: 'Höchste Witterungs- & Schlagfestigkeit',
    description: 'Deutlich belastbarer, wirtschaftlicher und langlebiger als klassische Nasslackierung.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Präzise Maskierung',
    description: 'Sorgfältiges Abdecken aller Gewinde, Lager- und Passflächen vor der Beschichtung.',
    icon: 'CheckCircle2'
  },
  {
    title: '100% Cookie-frei & Direktkontakt',
    description: 'Keine störenden Cookie-Banner, direkte Kontaktaufnahme per Telefon, E-Mail oder Formular.',
    icon: 'Lock'
  }
];

export const FAQS = [
  {
    q: 'Wo befindet sich die Pulverfabrik jetzt?',
    a: 'Nach unserem Umzug finden Sie uns an unserem neuen Standort in der Boschstraße 3a, 63843 Niedernberg. Anlieferungen erfolgen nach vorheriger Terminvereinbarung.'
  },
  {
    q: 'Welche maximalen Bauteilgrößen können beschichtet werden?',
    a: 'Wir beschichten Bauteile bis zu 6,0 m Länge, 3,0 m Breite, 3,5 m Höhe und einem Maximalgewicht von 2,5 Tonnen (2.500 kg).'
  },
  {
    q: 'Wie funktioniert das mobile Sandstrahlen vor Ort?',
    a: 'Für nicht transportable Objekte (z.B. Sichtgebälk/Hausbalken in Wohnräumen, Fachwerkhäuser, fest installierte Tore oder Geländer) kommen wir mit mobiler Strahltechnik direkt zu Ihnen vor Ort.'
  },
  {
    q: 'Welche Vorteile hat die Pulverbeschichtung gegenüber Nasslack?',
    a: 'Pulverbeschichtung ist extrem schlag- und kratzfest, chemikalien- und witterungsbeständig, sofort nach dem Einbrennen belastbar und frei von umweltschädlichen Lösemitteln.'
  },
  {
    q: 'Wer ist mein Ansprechpartner?',
    a: 'Ihr Ansprechpartner und Geschäftsführer ist Mattia Mazzeo. Sie erreichen ihn direkt telefonisch unter 0151 / 500 611 00 oder per E-Mail an mm.pulverfabrik@gmail.com.'
  },
  {
    q: 'Werden Cookies auf dieser Website gespeichert?',
    a: 'Nein! Diese Website ist zu 100% cookie-frei aufgebaut. Auch der Anfahrts-Link zu Google Maps führt als externer Link direkt in Ihre Karten-App oder Ihren Browser, ohne Tracker oder Cookie-Banner.'
  }
];
