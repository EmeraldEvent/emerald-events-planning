import { defineField, defineType } from 'sanity';
import { fallbackSiteSettings } from '../../lib/fallbackContent';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website details',
  type: 'document',
  fields: [
    defineField({ name: 'legalName', title: 'Business name', type: 'string' }),
    defineField({ name: 'founder', title: 'Founder', type: 'string' }),
    defineField({ name: 'telephone', title: 'Telephone link value', type: 'string' }),
    defineField({ name: 'telephoneDisplay', title: 'Telephone display text', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'enquiryFormUrl', title: 'Enquiry form URL', type: 'url' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'addressLocality', title: 'Address locality', type: 'string' }),
    defineField({ name: 'postalCode', title: 'Postal code', type: 'string' }),
    defineField({ name: 'addressRegion', title: 'Address region', type: 'string' }),
    defineField({ name: 'addressCountry', title: 'Address country', type: 'string' }),
    defineField({
      name: 'areasServed',
      title: 'Areas served',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'areasServedShort', title: 'Areas served summary', type: 'string' }),
  ],
  initialValue: fallbackSiteSettings,
  preview: {
    prepare: () => ({ title: 'Website details' }),
  },
});
