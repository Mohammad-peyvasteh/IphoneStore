
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'soygap32',
  dataset: 'production',
  apiVersion: '2023-04-24',
  useCdn: true,
  
  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
