import { defineQuery } from 'next-sanity';

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  legalName,
  founder,
  telephone,
  telephoneDisplay,
  email,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  linkedinUrl,
  enquiryFormUrl,
  addressLocality,
  postalCode,
  addressRegion,
  addressCountry,
  areasServed,
  areasServedShort
}`);

export const pricingContentQuery = defineQuery(`*[_type == "pricingPage"][0]{
  eventSizes[]{icon, title, range, description},
  packages[]{icon, name, subtitle, price, note, includes, cta, href, featured},
  onDayAddon{
    badge,
    icon,
    name,
    subtitle,
    includes,
    rate,
    note,
    cta,
    href
  },
  addOns[]{icon, label},
  expenseNote,
  faqs[]{q, a},
  cta{heading, text, buttonLabel, href}
}`);
