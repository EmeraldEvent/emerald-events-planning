'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';
import { dataset, projectId, studioUrl } from './src/sanity/env';

const singletonTypes = ['siteSettings', 'pricingPage'];

export default defineConfig({
  name: 'emeraldEventPlanning',
  title: 'Emerald Event Planning',
  basePath: studioUrl,
  projectId: projectId || 'replace-with-project-id',
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Website details')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Pricing page')
              .id('pricingPage')
              .child(S.document().schemaType('pricingPage').documentId('pricingPage')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => {
              const id = item.getId();
              return id ? !singletonTypes.includes(id) : true;
            }),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
