import { BUSINESS, ENQUIRY_FORM_URL } from './site';

export type PricingPackage = {
  icon: string;
  name: string;
  subtitle: string;
  price: string;
  note: string;
  includes: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export type EventSize = {
  icon: string;
  title: string;
  range: string;
  description: string;
};

export type OnDayAddon = {
  badge: string;
  icon: string;
  name: string;
  subtitle: string;
  includes: string[];
  rate: string;
  note: string;
  cta: string;
  href: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type PricingContent = {
  eventSizes: EventSize[];
  packages: PricingPackage[];
  onDayAddon: OnDayAddon;
  addOns: Array<{ icon: string; label: string }>;
  expenseNote: string;
  faqs: Faq[];
  cta: {
    heading: string;
    text: string;
    buttonLabel: string;
    href: string;
  };
};

export type SiteSettings = typeof BUSINESS & {
  enquiryFormUrl: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  linkedinUrl?: string;
};

export const fallbackSiteSettings: SiteSettings = {
  ...BUSINESS,
  enquiryFormUrl: ENQUIRY_FORM_URL,
  instagramUrl: '',
  tiktokUrl: '',
  linkedinUrl: '',
};

export const fallbackPricingContent: PricingContent = {
  eventSizes: [
    {
      icon: '👥',
      title: 'Small Events',
      range: '0 – 50 Guests',
      description: 'Intimate gatherings, afternoon teas, baby showers, small birthday parties and personal celebrations.',
    },
    {
      icon: '👥👥',
      title: 'Medium Events',
      range: '50 – 150 Guests',
      description: 'Anniversary parties, milestone birthdays, engagements, repasts, and community celebrations.',
    },
    {
      icon: '👥👥👥',
      title: 'Large Events',
      range: '150+ Guests',
      description: 'Corporate events, large award ceremonies, grand celebrations and multi-vendor productions.',
    },
  ],
  packages: [
    {
      icon: '📋',
      name: 'Emerald Essentials',
      subtitle: 'Basic Planning Support',
      price: '£150',
      note: 'flat fee',
      includes: [
        'Initial consultation',
        'Venue suggestions',
        'Supplier recommendations',
        'Decorating options',
        'Event checklist',
      ],
      cta: 'Book Now',
      href: '/contact',
    },
    {
      icon: '✨',
      name: 'Emerald Complete',
      subtitle: 'Full Event Planning',
      price: '£250 – £2,500',
      note: '+ expenses by event size',
      includes: [
        'End-to-end event management',
        'Venue sourcing & site visits',
        'Supplier negotiations',
        'Budget management',
        'Timeline planning',
        'On-the-day coordination',
      ],
      cta: 'Book Now',
      href: '/contact',
      featured: true,
    },
    {
      icon: '💎',
      name: 'Emerald Bespoke',
      subtitle: 'Tailored events, fully customised to you',
      price: 'Tailored Quote',
      note: 'Quote agreed to your needs',
      includes: [
        'Tailored events, fully customised to you',
        'Large-scale event logistics',
        'Corporate & community events',
        'Risk assessment included',
      ],
      cta: 'Get a Quote',
      href: '/contact',
    },
  ],
  onDayAddon: {
    badge: 'Add-on',
    icon: '📅',
    name: 'Emerald On-the-Day',
    subtitle: 'Coordination only, added after your main package is chosen.',
    includes: ['Event setup & supervision', 'Supplier management', 'Guest coordination', 'Troubleshooting'],
    rate: '£70 p/h',
    note: 'Minimum 2 hours. Reduced rates apply with Emerald Complete and Emerald Bespoke packages depending on event size.',
    cta: 'Add Coordination',
    href: '/contact',
  },
  addOns: [
    { icon: '🎨', label: 'Event Styling & Decorating' },
    { icon: '✉️', label: 'Invitation Management' },
    { icon: '📊', label: 'Guest List Tracking' },
    { icon: '🔍', label: 'Vendor Sourcing' },
    { icon: '📋', label: 'Risk Assessments' },
    { icon: '📁', label: 'Event Administration' },
    { icon: '🎁', label: 'Party Bag Preparation' },
    { icon: '🗓️', label: 'Mood Board Creation' },
  ],
  expenseNote:
    'Where quoted, expenses include reasonable out-of-pocket costs such as travel, printing, decorations, and materials sourced on your behalf. All expenses are pre-agreed with you in writing before any spend is incurred.',
  faqs: [
    {
      q: 'Do I need to pay a deposit?',
      a: 'Yes. A non-refundable booking deposit is required to confirm your date. The amount varies by package and is confirmed in your written quote.',
    },
    {
      q: 'What areas do you cover?',
      a: 'We serve Surrey, West Sussex and Hampshire. Events outside these areas can be discussed — additional travel expenses may apply.',
    },
    {
      q: 'What is included in "expenses"?',
      a: 'Expenses are out-of-pocket costs incurred on your behalf — for example, travel to venues, printing costs, decorations, or sourcing specific materials. All expenses are pre-agreed with you before any spend.',
    },
    {
      q: 'Can I add On-the-Day coordination?',
      a: 'Yes. When booked on its own, On-the-Day coordination is £70 per hour with a 2-hour minimum. When added to Emerald Complete or Emerald Bespoke, a reduced rate may apply depending on the size of your event.',
    },
    {
      q: 'What if I need to cancel?',
      a: 'Cancellation terms are set out in your booking agreement. Generally, if you cancel with 30+ days notice, any payments beyond the deposit may be refunded. See our Terms & Conditions for full details.',
    },
    {
      q: 'Do you work with a specific set of suppliers?',
      a: 'We work with a vetted network of trusted local suppliers, but we are happy to work with your preferred vendors too. Supplier selection is always discussed and agreed with you.',
    },
  ],
  cta: {
    heading: 'Ready to get started?',
    text: "Book your free initial consultation and let's start planning your perfect event.",
    buttonLabel: 'Book a Free Consultation',
    href: '/contact',
  },
};
