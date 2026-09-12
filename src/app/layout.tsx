import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import { getSiteSettings } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Emerald Event Planning — Making Occasions Unforgettable', template: '%s | Emerald Event Planning' },
  description: 'Emerald Event Planning is a boutique event planning service for elegant, personal celebrations across Surrey, West Sussex and Hampshire.',
  keywords: ['event planning', 'event planner Surrey', 'event planner West Sussex', 'event planner Hampshire', 'party planning', 'milestone events', 'wedding planning', 'baby shower', 'anniversary'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerald Event Planning — Making Occasions Unforgettable',
    description: 'Boutique event planning for milestone celebrations, anniversaries, baby showers, birthdays and more across Surrey, West Sussex and Hampshire.',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  const sameAs = [
    settings.facebookUrl,
    settings.instagramUrl,
    settings.tiktokUrl,
    settings.linkedinUrl,
  ].filter(Boolean);
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: settings.legalName,
    founder: {
      '@type': 'Person',
      name: settings.founder,
    },
    image: `${SITE_URL}/emerald-events_logo_v2.png`,
    url: SITE_URL,
    telephone: settings.telephone,
    email: settings.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: settings.addressLocality,
      ...(settings.postalCode ? { postalCode: settings.postalCode } : {}),
      addressRegion: settings.addressRegion,
      addressCountry: settings.addressCountry,
    },
    areaServed: [
      ...settings.areasServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    ],
    sameAs,
  };

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
