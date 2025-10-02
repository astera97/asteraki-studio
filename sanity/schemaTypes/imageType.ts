// sanity/schemaTypes/imageType.ts
export default {
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Important for SEO and accessibility.',
    },
  ],
}