"use client"
import { motion } from 'framer-motion'

export default function AboutSection({ title, content, points }: { title: string; content: string; points: string[] }) {
  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, x: -6 },
    show: { opacity: 1, x: 0, transition: { duration: 0.25 as number } },
  }
  return (
    <section className="py-16 md:py-24 bg-transparent px-4 md:px-16 scroll-mt-24" id="about">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">{title}</h2>
        <p className="text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto text-center">{content}</p>
        <motion.ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 list-disc pl-5 text-gray-100" variants={list} initial="hidden" animate="show">
          {points.map((p, idx) => (
            <motion.li key={idx} variants={item}>{p}</motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}


