"use client"
import { motion } from 'framer-motion'

export default function LeadMagnet({ title = 'E-book Gratis: Tips Membuat Website yang Efektif', desc = 'Dapatkan e-book eksklusif berisi tips praktis untuk meningkatkan performa dan desain website Anda. Download gratis, cukup masukkan email Anda!', downloadText = 'Download E-book' }: { title?: string; desc?: string; downloadText?: string }) {
  return (
    <motion.section
      className="py-12 px-4 md:px-16 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/10 rounded-2xl shadow-lg my-16 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">{title}</h3>
      <p className="text-gray-800 dark:text-gray-200 mb-6">{desc}</p>
      <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <input
          type="email"
          placeholder="Email Anda"
          required
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none w-full md:w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg"
        >
          {downloadText}
        </button>
      </form>
    </motion.section>
  )
} 