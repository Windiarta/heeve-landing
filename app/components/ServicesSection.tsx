"use client"
import { motion } from 'framer-motion'

type ServiceItem = { title: string; desc: string }

export default function ServicesSection({ title, items }: { title: string; items: ServiceItem[] }) {
  return (
    <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-950/30 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((s, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl shadow-lg bg-white dark:bg-gray-900 p-6 border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">{s.title}</h3>
              <p className="text-gray-800 dark:text-gray-200">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


