"use client"

import Link from 'next/link'
import SmoothScrollLink from './SmoothScrollLink'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'

const locales = ["id", "en"] as const

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams<{ locale?: string }>()
  const pathname = usePathname()
  const currentLocale = params?.locale && locales.includes(params.locale as 'id' | 'en') ? (params.locale as 'id' | 'en') : 'id'

  const switchLocaleHref = (loc: 'id' | 'en') => {
    if (!pathname) return `/${loc}`
    const segments = pathname.split('/')
    if (locales.includes(segments[1] as 'id' | 'en')) {
      segments[1] = loc
      return segments.join('/')
    }
    return `/${loc}${pathname}`
  }

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/60 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3">
        <Link href={`/${currentLocale}`} className="text-2xl font-extrabold text-white tracking-tight">
          <span className="inline-flex items-center gap-2">
            <img src="/heeve.svg" alt="Heeve Logo" className="w-7 h-7 inline-block" />
            Heeve
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className="sm:hidden rounded border border-white/20 text-white px-3 py-1.5"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
          <ul className="hidden sm:flex gap-6 text-gray-200 font-medium">
            <li><SmoothScrollLink href="#home" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Beranda' : 'Home'}</SmoothScrollLink></li>
            <li><SmoothScrollLink href="#about" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Tentang' : 'About'}</SmoothScrollLink></li>
            <li><SmoothScrollLink href="#services" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Layanan' : 'Services'}</SmoothScrollLink></li>
            <li><SmoothScrollLink href="#portfolio" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Portofolio' : 'Portfolio'}</SmoothScrollLink></li>
            <li><SmoothScrollLink href="#testimonials" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Testimoni' : 'Testimonials'}</SmoothScrollLink></li>
            <li><SmoothScrollLink href="#contact" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Kontak' : 'Contact'}</SmoothScrollLink></li>
          </ul>

          <div className="flex items-center gap-2">
            {locales.map(loc => (
              <Link key={loc} href={switchLocaleHref(loc)} className={`px-2 py-1 rounded text-sm border ${currentLocale === loc ? 'bg-blue-600 text-white border-blue-600' : 'text-white border-white/30'}`}>
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Dark mode forced globally; theme toggle removed */}
        </div>
      </nav>
      {isOpen && (
        <div className="sm:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 text-white">
            <SmoothScrollLink href="#home" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Beranda' : 'Home'}
            </SmoothScrollLink>
            <SmoothScrollLink href="#portfolio" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Portofolio' : 'Portfolio'}
            </SmoothScrollLink>
            <SmoothScrollLink href="#testimonials" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Testimoni' : 'Testimonials'}
            </SmoothScrollLink>
            <SmoothScrollLink href="#contact" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Kontak' : 'Contact'}
            </SmoothScrollLink>
          </div>
        </div>
      )}
    </header>
  )
}