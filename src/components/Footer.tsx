import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/lib/content';
import styles from './Footer.module.css';

export default async function Footer() {
  const settings = await getSiteSettings();
  const year = new Date().getFullYear();
  const socialLinks = [
    { label: 'Facebook', url: settings.facebookUrl },
  ].filter((link): link is { label: string; url: string } => Boolean(link.url));

  const socialIcons: Record<string, JSX.Element> = {
    Facebook: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8.06h2.7l.4-3.14h-3.1V7.83c0-.91.25-1.53 1.56-1.53h1.66V3.5c-.29-.04-1.27-.12-2.4-.12-2.38 0-4.01 1.45-4.01 4.11v2.3H7.6v3.14h2.71V21h3.19z" />
      </svg>
    ),
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.bgOverlay} />
      
      <div className={`container ${styles.grid} ${styles.contentWrapper}`}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <Image src="/emerald-events_logo_v2_navbar_cropped.png" alt="Emerald Event Planning" width={1436} height={526} quality={100} unoptimized />
          </div>
          <p className={styles.desc}>Boutique event planning for elegant, personal celebrations across Surrey, West Sussex and Hampshire.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.links}>
            {[['/', 'Home'], ['/services', 'Services'], ['/pricing', 'Pricing'], ['/about', 'About Us'], ['/gallery', 'Gallery'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Our Services</h4>
          <ul className={styles.links}>
            {['Emerald Essentials', 'Emerald Complete', 'On-the-Day Coordination', 'Emerald Bespoke', 'Event Styling', 'Venue Sourcing'].map(s => (
              <li key={s}><Link href="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get In Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Phone</span>
              <a href={`tel:${settings.telephone}`}>{settings.telephoneDisplay}</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </li>
            {socialLinks.map(({ label, url }) => (
              <li key={label}>
                <span className={styles.contactLabel}>{label}</span>
                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {socialIcons[label]}
                  Visit our page
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`${styles.bottom} ${styles.contentWrapper}`}>
        <div className="container">
          <p>© {year} Emerald Event Planning. All rights reserved. Sole Trader registered in England.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
