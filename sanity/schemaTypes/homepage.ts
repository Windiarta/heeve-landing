import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Teks CTA',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link CTA',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'services',
      title: 'Services Items',
      type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'title', type: 'string', title: 'Title', validation: Rule => Rule.required() },
        { name: 'desc', type: 'text', title: 'Description', rows: 2, validation: Rule => Rule.required() },
      ] }],
    }),
    defineField({
      name: 'aboutPoints',
      title: 'About Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
}) 