import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { SITE_URL } from '@/lib/site';
import { getPricingContent } from '@/lib/content';

const title = 'Event Planner Pricing — Packages From £150';
const description = 'Transparent event planner pricing across Surrey, West Sussex and Hampshire. From £150 for essential planning support to fully bespoke quotes for larger events — no hidden fees.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['event planner pricing Surrey', 'event planner West Sussex', 'event planner Hampshire', 'party planner cost', 'event planning packages'],
  alternates: { canonical: '/pricing' },
  openGraph: { title, description, url: '/pricing' },
  twitter: { title, description },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${SITE_URL}/pricing` },
  ],
};

export default async function PricingPage() {
  const pricing = await getPricingContent();
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricing.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Transparent Pricing</span>
          <h1>Simple, Clear Pricing</h1>
          <p>No hidden fees. No surprises. Just honest, professional event planning at fair prices.</p>
        </div>
      </div>

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

      {/* Additional Add-ons */}
      <section className="section-sm" style={{ background: 'var(--cream)', padding: '4rem 0' }}>
        <div className="container text-center">
          <span className="section-label">Add-Ons</span>
          <h2>Additional Services</h2>
          <p style={{ maxWidth: 560, margin: '0.75rem auto 2.5rem' }}>Available as standalone additions to any package.</p>
          <div className={styles.addonsGrid}>
            {pricing.addOns.map(({ icon, label }) => (
              <div key={label} className={styles.addonCard}>
                <span className={styles.addonIcon}>{icon}</span>
                <span className={styles.addonLabel}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>Pricing for add-ons is agreed individually. <Link href="/contact" style={{ color: 'var(--emerald)', textDecoration: 'underline' }}>Contact us to discuss.</Link></p>
        </div>
      </section>

      {/* FAQ */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* CTA */}
      <section style={{ background: 'var(--emerald-dark)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>{pricing.cta.heading}</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>{pricing.cta.text}</p>
          <Link href={pricing.cta.href} className="btn btn-gold">{pricing.cta.buttonLabel}</Link>
        </div>
      </section>
    </>
  );
}
