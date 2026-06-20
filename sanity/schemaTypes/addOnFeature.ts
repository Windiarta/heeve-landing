import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'addOnFeature',
  title: 'Add On Feature',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'AI', value: 'AI'},
          {title: 'Page', value: 'Page'},
          {title: 'Technical Feature', value: 'Technical Feature'},
          {title: 'Legality, Security, Ownership', value: 'Legality, Security, Ownership'},
          {title: 'Domain & Hosting', value: 'Domain & Hosting'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'feature',
      title: 'Nama Fitur',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Harga',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'locale',
      title: 'Bahasa / Locale',
      type: 'string',
      options: {
        list: [
          {title: 'Indonesian (id)', value: 'id'},
          {title: 'English (en)', value: 'en'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Urutan (Order)',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required(),
    }),
  ],
})
