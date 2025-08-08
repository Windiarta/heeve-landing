import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Nama Klien',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Kutipan',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'clientImage',
      title: 'Foto Klien',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
}) 