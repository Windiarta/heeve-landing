"use client"
import { motion } from 'framer-motion'

export default function AboutSection({ title, content, points }: { title: string; content: string; points: string[] }) {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black px-4 md:px-16">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">{content}</p>
        <ul className="grid sm:grid-cols-2 gap-4 list-disc pl-5 text-gray-800 dark:text-gray-100">
          {points.map((p, idx) => (
            <motion.li key={idx} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: idx * 0.05 }} viewport={{ once: true }}>
              {p}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}


