import { createClient } from 'next-sanity';
import { apiVersion, dataset, hasSanityConfig, projectId } from '../env';

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
});

export { hasSanityConfig };
