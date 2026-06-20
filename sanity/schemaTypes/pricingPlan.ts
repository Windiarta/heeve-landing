import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Paket',
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
      name: 'targetUser',
      title: 'Target User',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pageCount',
      title: 'Jumlah Halaman (Page Count)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'design',
      title: 'Desain',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'technology',
      title: 'Teknologi',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'databaseCms',
      title: 'Database & CMS',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'paymentIntegration',
      title: 'Payment & Integrasi',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'aiFeatures',
      title: 'Fitur AI',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'maintenanceSupport',
      title: 'Maintenance & Support',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'domain',
      title: 'Domain',
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
      name: 'recommended',
      title: 'Rekomendasi (Recommended)',
      type: 'boolean',
      initialValue: false,
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
