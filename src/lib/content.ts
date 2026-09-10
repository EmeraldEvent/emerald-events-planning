import { client, hasSanityConfig } from '@/sanity/lib/client';
import { pricingContentQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import {
  fallbackPricingContent,
  fallbackSiteSettings,
  type PricingContent,
  type SiteSettings,
} from './fallbackContent';

const revalidate = 60;

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!hasSanityConfig) {
    return fallbackSiteSettings;
  }

  try {
    const settings = await client.fetch<Partial<SiteSettings> | null>(siteSettingsQuery, {}, { next: { revalidate } });
    return { ...fallbackSiteSettings, ...stripEmpty(settings) };
  } catch {
    return fallbackSiteSettings;
  }
}

export async function getPricingContent(): Promise<PricingContent> {
  if (!hasSanityConfig) {
    return fallbackPricingContent;
  }

  try {
    const pricing = await client.fetch<Partial<PricingContent> | null>(pricingContentQuery, {}, { next: { revalidate } });
    return {
      ...fallbackPricingContent,
      ...stripEmpty(pricing),
      onDayAddon: {
        ...fallbackPricingContent.onDayAddon,
        ...stripEmpty(pricing?.onDayAddon),
      },
      cta: {
        ...fallbackPricingContent.cta,
        ...stripEmpty(pricing?.cta),
      },
    };
  } catch {
    return fallbackPricingContent;
  }
}

function stripEmpty<T extends object>(value: Partial<T> | null | undefined): Partial<T> {
  if (!value) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value).filter(([, fieldValue]) => {
      if (Array.isArray(fieldValue)) {
        return fieldValue.length > 0;
      }

      return fieldValue !== undefined && fieldValue !== null && fieldValue !== '';
    }),
  ) as Partial<T>;
}
