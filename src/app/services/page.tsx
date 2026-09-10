import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { SITE_URL } from '@/lib/site';
import { getPricingContent } from '@/lib/content';

const title = 'Event Planning Services — Surrey, West Sussex and Hampshire';
const description = 'Full event planning services from Emerald Event Planning: venue sourcing, supplier coordination, styling, budget management and on-the-day coordination. Serving Surrey, West Sussex and Hampshire.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['event planning services Surrey', 'event planner West Sussex', 'event planner Hampshire', 'venue sourcing', 'supplier coordination', 'event styling', 'on-the-day coordination'],
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services' },
  twitter: { title, description },
};

const services = [
  {
    icon: '📋',
    title: 'Basic Planning Support',
    description: 'A clear planning foundation with consultation, venue ideas, supplier guidance and a personalised checklist.',
  },
  {
    icon: '✨',
    title: 'Full Event Planning',
    description: 'End-to-end planning support from concept and suppliers through to timelines and event delivery.',
  },
  {
    icon: '📅',
    title: 'On-the-Day Coordination',
    description: 'Setup supervision, supplier arrivals, guest flow and calm troubleshooting while your event is live.',
  },
  {
    icon: '🏛️',
    title: 'Venue Sourcing',
    description: 'Personalised venue recommendations to suit your occasion, guest numbers and desired atmosphere.',
  },
  {
    icon: '🤝',
    title: 'Supplier Coordination',
    description: 'Supplier recommendations, communication and coordination so every contributor stays aligned.',
  },
  {
    icon: '🌿',
    title: 'Event Styling & Decorating',
    description: 'Decor direction, styling options and finishing touches for a polished, cohesive celebration.',
  },
  {
    icon: '💷',
    title: 'Budget Management',
    description: 'Practical budget planning and tracking to keep priorities clear and decisions confident.',
  },
  {
    icon: '💌',
    title: 'Invitation Design & Management',
    description: 'Invitation concepts and guest communication support to set the tone before the day arrives.',
  },
  {
    icon: '✓',
    title: 'Guest List & RSVP Tracking',
    description: 'Guest lists, replies and attendance details organised so nothing gets missed.',
  },
  {
    icon: '🔎',
    title: 'Vendor Sourcing & Vetting',
    description: 'Shortlisted vendors and practical checks to help you choose the right people for your event.',
  },
  {
    icon: '🛡️',
    title: 'Risk Assessments',
    description: 'Sensible risk planning for venues, suppliers and logistics, handled with care and clarity.',
  },
  {
    icon: '🗂️',
    title: 'Event Administration',
    description: 'Planning documents, schedules, supplier notes and admin organised into one reliable structure.',
  },
  {
    icon: '🎁',
    title: 'Party Bag Preparation',
    description: 'Party bags, favours and guest gifts prepared with consistency and thoughtful finishing details.',
  },
  {
    icon: '🎨',
    title: 'Mood Boards & Theme Creation',
    description: 'Visual direction for colour, styling and atmosphere so every creative choice feels connected.',
  },
];

const eventTypes = [
  { icon: '💍', label: 'Engagements', description: 'Elegant celebrations for proposals, engagement parties and the joyful start of a new chapter.' },
  { icon: '🥂', label: 'Anniversaries', description: 'Meaningful milestone moments styled with warmth, detail and a sense of occasion.' },
  { icon: '🍼', label: 'Baby Showers', description: 'Soft, thoughtful gatherings for parents-to-be, from intimate teas to themed celebrations.' },
  { icon: '🎉', label: 'Birthdays', description: 'Personal birthday parties with polished styling, smooth planning and memorable details.' },
  { icon: '🕊️', label: 'Wakes & Repasts', description: 'Respectful, calm support for remembrance gatherings where care and sensitivity matter most.' },
  { icon: '⭐', label: 'Milestone Events', description: 'Special life moments planned with structure, personality and beautiful finishing touches.' },
  { icon: '☕', label: 'Afternoon Teas', description: 'Charming tea gatherings with considered presentation, guest flow and refined details.' },
  { icon: '🏢', label: 'Corporate Events', description: 'Professional events and small business occasions delivered with clarity and confidence.' },
  { icon: '🌟', label: 'Community Events', description: 'Welcoming gatherings for charities, organisations and local groups with practical planning support.' },
  { icon: '🍽️', label: 'Intimate Gatherings', description: 'Small private occasions shaped around atmosphere, comfort and effortless hosting.' },
];

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services & Pricing', item: `${SITE_URL}/services` },
  ],
};

export default async function ServicesPage() {
  const pricing = await getPricingContent();
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Event Planning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Emerald Event Planning',
    },
    areaServed: ['Surrey', 'West Sussex', 'Hampshire'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Planning Packages',
      itemListElement: pricing.packages.map((pkg) => ({
        '@type': 'Offer',
        name: pkg.name,
        description: pkg.subtitle,
        url: `${SITE_URL}/services`,
      })),
    },
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1>Services &amp; Pricing</h1>
          <p>Planning, styling and coordination for thoughtful events that feel beautifully run from start to finish &mdash; with clear, honest pricing.</p>
        </div>
      </div>

      <section id="events" className="section">
        <div className="container text-center">
          <div className={styles.sectionIntro}>
            <span className="section-label">Occasions</span>
            <h2>Events We Plan</h2>
            <div className="section-divider"><span>✦</span></div>

          </div>
          <div className={styles.eventTypeGrid}>
            {eventTypes.map(({ icon, label, description }) => (
              <Link key={label} href="/contact" className={styles.eventType}>
                <span className={styles.eventTypeIcon}>{icon}</span>
                <h3>{label}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="section-label">Planning Services</span>
            <h2>Additional Services</h2>
            <div className="section-divider"><span>✦</span></div>

          </div>

          <div className={styles.serviceGrid}>
            {services.map(({ icon, title, description }) => (
              <article key={title} className={styles.serviceCard}>
                <div className={styles.serviceCardHead}>
                  <span className={styles.serviceIcon}>{icon}</span>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}


      {/* Pricing Packages */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Our Packages</span>
            <h2>Package Pricing</h2>
            <div className="section-divider"><span>✦</span></div>
          </div>

          <div className={styles.packageGrid}>
            {pricing.packages.map((pkg) => (
              <article key={pkg.name} className={`${styles.packageCard} ${pkg.featured ? styles.featuredCard : ''}`}>
                <div className={styles.badgeSlot}>
                  {pkg.featured && <span className={styles.popularBadge}>Most Popular</span>}
                </div>
                <div className={styles.packageTop}>
                  <span className={styles.packageIcon}>{pkg.icon}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.subtitle}</p>
                  </div>
                </div>
                <div className={styles.packagePrice}>
                  <span>{pkg.price}</span>
                  <small>{pkg.note}</small>
                </div>
                <ul className={styles.packageIncludes}>
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={pkg.href} className={`btn ${pkg.featured ? 'btn-gold' : 'btn-primary'}`}>{pkg.cta}</Link>
              </article>
            ))}
          </div>

          <aside className={styles.onDayAddon}>
            <div className={styles.addonIntro}>
              <span className={styles.addonBadge}>{pricing.onDayAddon.badge}</span>
              <div className={styles.packageTop}>
                <span className={styles.packageIcon}>{pricing.onDayAddon.icon}</span>
                <div>
                  <h3>{pricing.onDayAddon.name}</h3>
                  <p>{pricing.onDayAddon.subtitle}</p>
                </div>
              </div>
            </div>
            <ul className={styles.addonIncludes}>
              {pricing.onDayAddon.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.addonRate}>
              <span>{pricing.onDayAddon.rate}</span>
              <small>{pricing.onDayAddon.note}</small>
            </div>
            <Link href={pricing.onDayAddon.href} className="btn btn-gold">{pricing.onDayAddon.cta}</Link>
          </aside>

          {/* Expenses note */}
          <div className={styles.expenseNote}>
            <span>ℹ️</span>
            <p><strong>About expenses:</strong> {pricing.expenseNote}</p>
          </div>
        </div>
      </section>

      {/* Event Size Guide */}
      <section className="section" style={{ background: 'var(--cream)', paddingBottom: '3rem' }}>
        <div className="container text-center">
          <span className="section-label">Event Sizes</span>
          <h2>How We Size Your Event</h2>
          <div className="section-divider"><span>✦</span></div>
          <div className={styles.sizeGrid}>
            {pricing.eventSizes.map(({ icon, title, range, description }) => (
              <div key={title} className={styles.sizeCard}>
                <div className={styles.sizeNumber}>{icon}</div>
                <h3>{title}</h3>
                <div className={styles.sizeRange}>{range}</div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Questions</span>
            <h2>Frequently Asked</h2>
            <div className="section-divider"><span>✦</span></div>
          </div>
          <div className={styles.faqGrid}>
            {pricing.faqs.map(({ q, a }) => (
              <div key={q} className={styles.faqCard}>
                <h4 className={styles.faqQ}>{q}</h4>
                <p className={styles.faqA}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className={styles.serviceCta}>
        <div className="container text-center">
          <h2>Not sure where to begin?</h2>
          <p>Book a free initial consultation and we&apos;ll recommend the right planning support for your event.</p>
          <Link href="/contact" className="btn btn-gold">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
