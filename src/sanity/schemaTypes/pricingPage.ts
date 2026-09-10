import { defineArrayMember, defineField, defineType } from 'sanity';
import { fallbackPricingContent } from '../../lib/fallbackContent';

export const pricingPage = defineType({
  name: 'pricingPage',
  title: 'Pricing page',
  type: 'document',
  fields: [
    defineField({
      name: 'eventSizes',
      title: 'Event sizes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'range', title: 'Range', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'range' },
          },
        }),
      ],
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({ name: 'price', title: 'Price', type: 'string' }),
            defineField({ name: 'note', title: 'Price note', type: 'string' }),
            defineField({
              name: 'includes',
              title: 'Includes',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'cta', title: 'Button label', type: 'string' }),
            defineField({ name: 'href', title: 'Button link', type: 'string' }),
            defineField({ name: 'featured', title: 'Featured package', type: 'boolean' }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'price' },
          },
        }),
      ],
    }),
    defineField({
      name: 'onDayAddon',
      title: 'On-the-day add-on',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge', type: 'string' }),
        defineField({ name: 'icon', title: 'Icon', type: 'string' }),
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
        defineField({
          name: 'includes',
          title: 'Includes',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'rate', title: 'Rate', type: 'string' }),
        defineField({ name: 'note', title: 'Rate note', type: 'text', rows: 3 }),
        defineField({ name: 'cta', title: 'Button label', type: 'string' }),
        defineField({ name: 'href', title: 'Button link', type: 'string' }),
      ],
    }),
    defineField({
      name: 'addOns',
      title: 'Additional services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'icon' },
          },
        }),
      ],
    }),
    defineField({ name: 'expenseNote', title: 'Expenses note', type: 'text', rows: 4 }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Question', type: 'string' }),
            defineField({ name: 'a', title: 'Answer', type: 'text', rows: 4 }),
          ],
          preview: {
            select: { title: 'q' },
          },
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom call to action',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'text', title: 'Text', type: 'text', rows: 2 }),
        defineField({ name: 'buttonLabel', title: 'Button label', type: 'string' }),
        defineField({ name: 'href', title: 'Button link', type: 'string' }),
      ],
    }),
  ],
  initialValue: fallbackPricingContent,
  preview: {
    prepare: () => ({ title: 'Pricing page' }),
  },
});
