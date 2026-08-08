import { ServiceItem, PortfolioItem, Testimonial, PricingOption, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Moderne Webentwicklung',
    category: 'web',
    shortDesc: 'Maßgeschneiderte HTML5, CSS3 & React Webanwendungen mit hoher Performance.',
    fullDesc: 'Wir erstellen responsive, saubere und performante Websites basierend auf modernen Webstandards und modernstem CSS Framework Design.',
    iconName: 'Code',
    features: ['Responsive Layouts für alle Geräte', 'Barrierefreies & semantisches HTML5', 'High-Speed Ladezeiten (< 1s)', 'Modernes CSS3 / Tailwind Styling'],
    techStack: ['HTML5', 'CSS3', 'TypeScript', 'React', 'Tailwind CSS']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Webdesign',
    category: 'design',
    shortDesc: 'Ästhetisches Interface-Design mit Fokus auf Konvertierung und Benutzerfreundlichkeit.',
    fullDesc: 'Ein durchdachtes Design-System sorgt für Wiedererkennungswert und begeisterte Nutzer.',
    iconName: 'Layout',
    features: ['Interaktives Prototyping', 'Design-Systeme & Styleguides', 'Dark / Light Mode Support', 'Optimierte User Journey'],
    techStack: ['Figma', 'CSS Grid', 'Flexbox', 'Tailwind']
  },
  {
    id: 'script-custom',
    title: 'HTML & CSS Scripts',
    category: 'script',
    shortDesc: 'Modulare UI-Komponenten, Animationen und Skripte zur Einbindung in jedes CMS.',
    fullDesc: 'Wiederverwendbare Skripte, Widgets und Animationen für WordPress, Webflow, Shopify oder Standard-HTML.',
    iconName: 'FileCode',
    features: ['Keine externen Abhängigkeiten', 'Leichtgewichtige Animationen', 'Flexibel anpassbar', 'Kompatibel mit allen Systemen'],
    techStack: ['CSS Keyframes', 'DOM Scripts', 'JavaScript ES6+', 'SVG Animation']
  },
  {
    id: 'seo-perf',
    title: 'Performance & SEO',
    category: 'optimization',
    shortDesc: 'Suchmaschinen-Optimierung und Core Web Vitals Performance-Tuning.',
    fullDesc: 'Maximieren Sie Ihre Sichtbarkeit bei Google und sorgen Sie für blitzschnelle Ladezeiten auf allen Endgeräten.',
    iconName: 'Zap',
    features: ['Core Web Vitals Optimierung', 'Structured Data & Schema.org', 'Lighthouse score 95+', 'Bilder- & Code-Komprimierung'],
    techStack: ['Lighthouse', 'Meta-SEO', 'OpenGraph', 'Asset Minification']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Nexus SaaS Landingpage',
    category: 'Landingpage',
    description: 'Ultra-moderne Landingpage mit interaktiver 3D-Kartenansicht, Dark Mode und Konvertierungs-Fokus.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['HTML5', 'Tailwind CSS', 'React', 'Animations'],
    metrics: { label: 'Conversion-Rate', value: '+142%' }
  },
  {
    id: 'project-2',
    title: 'Luminary E-Commerce Store',
    category: 'E-Commerce',
    description: 'Minimalistischer Online-Shop mit blitzschnellem Warenkorb und benutzerdefiniertem CSS Grid Produktraster.',
    imageUrl: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=800&q=80',
    tags: ['E-Commerce', 'CSS3', 'Shopify UI', 'JavaScript'],
    metrics: { label: 'Ladezeit', value: '0.4s' }
  },
  {
    id: 'project-3',
    title: 'Fintech Dashboard Portal',
    category: 'Web-App',
    description: 'Interaktives Analyse-Dashboard für Finanzdaten mit Echtzeit-Diagrammen und responsivem Admin-Panel.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    metrics: { label: 'Daily Users', value: '45k+' }
  },
  {
    id: 'project-4',
    title: 'Aura Design System',
    category: 'Design-System',
    description: 'Vollständige Bibliothek von HTML/CSS UI-Komponenten, Button-Stilen, Modals und Navigationsleisten.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['HTML/CSS', 'UI Kit', 'Tokens', 'Design'],
    metrics: { label: 'Komponenten', value: '120+' }
  }
];

export const PRICING_OPTIONS: PricingOption[] = [
  {
    id: 'base-landing',
    name: 'Landingpage Basis',
    price: 490,
    days: 3,
    category: 'base',
    description: 'Einzelseitige Website (Single Page) mit allen Kernsektionen, Responsive Design & Kontaktformular.'
  },
  {
    id: 'base-multi',
    name: 'Mehrseitige Unternehmens-Website',
    price: 990,
    days: 7,
    category: 'base',
    description: 'Umfangreiche Website mit bis zu 5 Unterseiten (Startseite, Über uns, Leistungen, Portfolio, Kontakt).'
  },
  {
    id: 'feat-cms',
    name: 'CMS Integration (Content Manager)',
    price: 350,
    days: 2,
    category: 'feature',
    description: 'Einfaches Verwalten von Inhalten, News und Projekten ohne Programmierkenntnisse.'
  },
  {
    id: 'feat-ecommerce',
    name: 'E-Commerce / Shop-Funktion',
    price: 550,
    days: 4,
    category: 'feature',
    description: 'Produktkatalog, Warenkorb-System und Anbindung bekannter Zahlungsanbieter.'
  },
  {
    id: 'feat-seo',
    name: 'SEO & Performance Paket',
    price: 250,
    days: 1,
    category: 'feature',
    description: 'Ladezeiten-Optimierung, Meta-Tags, Schema-Strukturierung & Google Indexierung.'
  },
  {
    id: 'feat-anim',
    name: 'Erweiterte HTML/CSS Animationen',
    price: 180,
    days: 1,
    category: 'feature',
    description: 'Interaktive Scroll-Effekte, Hover-Animationen und dynamic CSS micro-interactions.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Lindemann',
    role: 'Marketing Director',
    company: 'TechPulse Media',
    content: 'Die neue Website hat unsere Ladezeiten mehr als halbiert und die Anfragen über das Kontaktformular um 80% gesteigert. Der saubere HTML/CSS Code lässt sich perfekt erweitern.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Marc Obermeier',
    role: 'Gründer',
    company: 'Studio Horizon',
    content: 'Großartige Zusammenarbeit! Wir haben ein maßgeschneidertes Design erhalten, das exakt auf allen mobilen Geräten funktioniert und optisch absolut begeistert.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Vance',
    role: 'Product Owner',
    company: 'CloudFlow Solutions',
    content: 'Der interaktive Preiskalkulator und die schnellen Reaktionszeiten haben uns sofort überzeugt. Extrem professioneller HTML/CSS Aufbau.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Entwicklung',
    question: 'Welche Technologien werden für die Website genutzt?',
    answer: 'Wir setzen auf modernes, semantisches HTML5, performantes CSS3 (mit Tailwind CSS Framework), TypeScript und modernste JavaScript-Standards für schnelle und zukunftssichere Ergebnisse.'
  },
  {
    category: 'Entwicklung',
    question: 'Ist die Website voll responsive für Smartphones und Tablets?',
    answer: 'Ja, absolut. Jedes Element wird nach dem Mobile-First-Prinzip entworfen und auf unterschiedlichsten Bildschirmgrößen gründlich getestet.'
  },
  {
    category: 'Prozess',
    question: 'Wie lange dauert die Umsetzung einer Website?',
    answer: 'Eine Standard-Landingpage benötigt meist 3–5 Werktage, während umfangreichere Projekte oder Shops ca. 1–2 Wochen in Anspruch nehmen.'
  },
  {
    category: 'SEO',
    question: 'Wird die Website bei Google gefunden?',
    answer: 'Ja, alle Seiten werden mit sauberem HTML-Aufbau, korrekten Meta-Tags, OpenGraph-Daten und schnellen Ladezeiten für beste Google-Rankings optimiert.'
  }
];
