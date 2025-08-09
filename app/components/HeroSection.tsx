"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import SmoothScrollLink from './SmoothScrollLink'

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  heroImage?: {
    src: string
    alt: string
  }
}

export default function HeroSection({ title, description, ctaText, ctaLink, heroImage }: HeroSectionProps) {
  return (
    <section id="home" className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16 md:py-24 px-4 md:px-16 bg-gradient-to-br from-blue-950/40 to-transparent">
      <motion.div
        className="flex-1 text-center md:text-left text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0">
          {description}
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block"
        >
          <SmoothScrollLink
            href={ctaLink}
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg"
          >
            {ctaText}
          </SmoothScrollLink>
        </motion.div>
      </motion.div>
      {heroImage?.src && (
        <motion.div
          className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt || 'Heeve Hero'}
            width={800}
            height={800}
            // className="rounded-2xl shadow-2xl object-cover w-[60vw] max-w-[320px] h-[60vw] max-h-[320px] md:w-[480px] md:h-[480px]"
            priority
          />
        </motion.div>
      )}
    </section>
  )
} 