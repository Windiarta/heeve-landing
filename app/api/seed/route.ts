import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../../../sanity/env'

export async function POST() {
  try {
    const token = process.env.SANITY_WRITE_TOKEN
    if (!token) {
      return NextResponse.json({ ok: false, error: 'Missing SANITY_WRITE_TOKEN env for write access' }, { status: 400 })
    }

    const writeClient = createClient({ projectId, dataset, apiVersion, token, useCdn: false })
    const tx = writeClient.transaction()
    const portfolios: Array<{ _id: string; _type: 'portfolio'; title: string; description: string; link?: string }> = [
      {
        _id: 'portfolio-1',
        _type: 'portfolio',
        title: 'Corporate Website Redesign',
        description: 'Modern redesign with improved UX and performance.',
        link: 'https://example.com',
      },
      {
        _id: 'portfolio-2',
        _type: 'portfolio',
        title: 'E-commerce Platform',
        description: 'Scalable storefront with secure checkout.',
        link: 'https://shop.example.com',
      },
      {
        _id: 'portfolio-3',
        _type: 'portfolio',
        title: 'Landing Page Campaign',
        description: 'High-converting landing with A/B testing.',
      },
    ]

    const testimonials: Array<{ _id: string; _type: 'testimonial'; clientName: string; quote: string }> = [
      { _id: 'testimonial-1', _type: 'testimonial', clientName: 'Andi Pratama', quote: 'Heeve delivered beyond expectations. Great team!' },
      { _id: 'testimonial-2', _type: 'testimonial', clientName: 'Sarah Johnson', quote: 'Professional, fast and communicative. Highly recommended.' },
      { _id: 'testimonial-3', _type: 'testimonial', clientName: 'Budi Santoso', quote: 'Website kami jadi jauh lebih cepat dan menarik.' },
    ]

    // Upsert homepage (Indonesian copy)
    tx.createOrReplace({
      _id: 'homepage',
      _type: 'homepage',
      title: 'Wujudkan Website Impian Anda Bersama Heeve',
      description: 'Heeve adalah software house yang mengkhususkan diri dalam menciptakan website inovatif dan ramah pengguna.',
      ctaText: 'Dapatkan Konsultasi Gratis',
      ctaLink: '#contact',
    })

    portfolios.forEach((doc) => tx.createOrReplace(doc))
    testimonials.forEach((doc) => tx.createOrReplace(doc))
    await tx.commit()
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 500 })
  }
}


