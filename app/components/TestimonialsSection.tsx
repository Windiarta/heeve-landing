"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface TestimonialItem {
  _id: string
  clientName: string
  quote: string
  clientImage?: {
    src: string
    alt: string
  }
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function TestimonialsSection({ testimonials, title = 'Testimoni Klien' }: { testimonials: TestimonialItem[]; title?: string }) {
  return (
    <section className="py-16 md:py-24 bg-transparent px-4 md:px-16 scroll-mt-24" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{title}</h2>
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t) => (
          <motion.div key={t._id} variants={item} className="bg-white/5 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform text-gray-100 border border-white/10">
            {t.clientImage?.src && (
              <Image
                src={t.clientImage.src}
                alt={t.clientImage.alt || t.clientName}
                width={80}
                height={80}
                className="rounded-full mb-4 object-cover"
              />
            )}
            <blockquote className="text-lg italic text-gray-200 mb-4">“{t.quote}”</blockquote>
            <span className="font-semibold text-blue-300">{t.clientName}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 