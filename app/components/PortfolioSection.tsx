"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export interface PortfolioItem {
  _id: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  link?: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function PortfolioSection({ projects, title = 'Portofolio Proyek', viewText = 'Lihat Proyek' }: { projects: PortfolioItem[]; title?: string; viewText?: string }) {
  return (
    <section className="py-16 md:py-24 bg-transparent px-4 md:px-16 scroll-mt-24" id="portfolio">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{title}</h2>
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div key={project._id} variants={item} className="bg-white/5 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform border border-white/10">
              {project.image?.src ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt || project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-56"
                />
              ) : (
                <div className="w-full h-56 bg-white/5" />
              )}
            <div className="p-6 flex-1 flex flex-col text-gray-900 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">{project.title}</h3>
              <p className="text-gray-200 mb-4 flex-1">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto">{viewText}</a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 