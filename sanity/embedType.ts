// sanity/embedType.ts
export default {
  name: 'embed',
  title: 'Embedded Video (Vimeo / YouTube)',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      validation: (Rule: any) => Rule.uri({
        scheme: ['https'],
        allowRelative: false
      }).required()
    }
  ],
  preview: {
    select: { url: 'url' },
    prepare({ url }) {
      return {
        title: 'Embedded Video',
        subtitle: url
      }
    }
  }
}