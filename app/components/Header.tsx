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

  const isPricingPage = pathname?.includes('/pricing')

  const NavLink = ({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) => {
    if (isPricingPage && href.startsWith('#')) {
      return (
        <Link href={`/${currentLocale}${href === '#home' ? '' : href}`} className={className} onClick={onClick}>
          {children}
        </Link>
      )
    }
    return (
      <SmoothScrollLink href={href} className={className} onClick={onClick}>
        {children}
      </SmoothScrollLink>
    )
  }

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/60 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-3">
        <Link href={`/${currentLocale}`} className="text-2xl font-extrabold text-white tracking-tight">
          <span className="inline-flex items-center gap-2">
            <img src="/heeve.svg" alt="Heeve Logo" className="w-16 h-8 inline-block" />
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
            <li><NavLink href="#home" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Beranda' : 'Home'}</NavLink></li>
            <li><NavLink href="#about" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Tentang' : 'About'}</NavLink></li>
            <li><NavLink href="#services" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Layanan' : 'Services'}</NavLink></li>
            <li><NavLink href="#pricing" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Harga' : 'Pricing'}</NavLink></li>
            <li><NavLink href="#portfolio" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Portofolio' : 'Portfolio'}</NavLink></li>
            <li><NavLink href="#testimonials" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Testimoni' : 'Testimonials'}</NavLink></li>
            <li><NavLink href="#contact" className="hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Kontak' : 'Contact'}</NavLink></li>
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
            <NavLink href="#home" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Beranda' : 'Home'}
            </NavLink>
            <NavLink href="#about" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Tentang' : 'About'}
            </NavLink>
            <NavLink href="#services" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Layanan' : 'Services'}
            </NavLink>
            <NavLink href="#pricing" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Harga' : 'Pricing'}
            </NavLink>
            <NavLink href="#portfolio" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Portofolio' : 'Portfolio'}
            </NavLink>
            <NavLink href="#testimonials" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Testimoni' : 'Testimonials'}
            </NavLink>
            <NavLink href="#contact" className="py-1" onClick={() => setIsOpen(false)}>
              {currentLocale === 'id' ? 'Kontak' : 'Contact'}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}