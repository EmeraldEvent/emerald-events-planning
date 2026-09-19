import type { Metadata } from 'next';
import styles from './page.module.css';
import { SITE_URL } from '@/lib/site';
import { getSiteSettings } from '@/lib/content';
import { socialIcons } from '@/components/SocialIcons';

const title = 'Contact Us — Get a Quote From Your Event Planner';
const description = 'Get in touch with Emerald Event Planning to book your event, request a quote, or simply have a chat about your ideas. Serving Haslemere, Surrey, West Sussex and Hampshire.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['contact event planner Surrey', 'event planner West Sussex', 'event planner Hampshire', 'event planning quote', 'book event planner', 'party planner enquiry'],
  alternates: { canonical: '/contact' },
  openGraph: { title, description, url: '/contact' },
  twitter: { title, description },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const socialLinks = [
    { label: 'Facebook', url: settings.facebookUrl },
    { label: 'Instagram', url: settings.instagramUrl },
    { label: 'TikTok', url: settings.tiktokUrl },
    { label: 'LinkedIn', url: settings.linkedinUrl },
  ].filter((link): link is { label: string; url: string } => Boolean(link.url));

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Let&apos;s Talk</span>
          <h1>Get In Touch</h1>
          <p>Ready to start planning? We&apos;d love to hear about your event. Contact us directly or fill in our enquiry form.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form Link */}
            <div className={styles.formWrap}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formSubtitle}>We aim to respond to all enquiries within 48 hours.</p>
              
              <div className={styles.externalFormBox}>
                <h3>Ready to tell us about your event?</h3>
                <p>Please click the button below to fill out our detailed enquiry form. This helps us gather all the essential details about your occasion so we can provide you with the best possible service and a tailored quote.</p>
                <a href={settings.enquiryFormUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.submitBtn}`}>
                  Open Enquiry Form ✦
                </a>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Direct Contact</h3>
                <div className={styles.infoItems}>
                  <a href={`tel:${settings.telephone}`} className={`${styles.infoItem} ${styles.inlineItem}`}>
                    <span className={styles.infoIcon}>📞</span>
                    <div>
                      <strong>Phone</strong>
                      <span>{settings.telephoneDisplay}</span>
                    </div>
                  </a>
                  <a href={`mailto:${settings.email}`} className={`${styles.infoItem} ${styles.inlineItem}`}>
                    <span className={styles.infoIcon}>✉️</span>
                    <div>
                      <strong>Email</strong>
                      <span>{settings.email}</span>
                    </div>
                  </a>
                </div>

                {socialLinks.length > 0 && (
                  <div className={styles.socialRow}>
                    <strong className={styles.socialRowLabel}>Follow Us</strong>
                    <div className={styles.socialBar}>
                      {socialLinks.map(({ label, url }) => (
                        <a key={label} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={label}>
                          {socialIcons[label]}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>What Happens Next?</h3>
                <ol className={styles.steps}>
                  <li>
                    <span className={styles.stepNum}>1</span>
                    <div>
                      <strong>We receive your enquiry</strong>
                      <p>We&apos;ll get back to you within 48 hours.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNum}>2</span>
                    <div>
                      <strong>Free initial consultation</strong>
                      <p>We&apos;ll chat through your vision, ideas and budget.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNum}>3</span>
                    <div>
                      <strong>Tailored quote</strong>
                      <p>We&apos;ll send you a personalised, detailed quote.</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNum}>4</span>
                    <div>
                      <strong>Secure your date</strong>
                      <p>Pay your deposit and let the planning begin!</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Areas We Cover</h3>
                <p className={styles.areasText}>{settings.addressLocality}, {settings.areasServedShort}</p>
                <p className={styles.areasSubtext}>Elegant, personal celebrations planned across these areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
