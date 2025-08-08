"use client"

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const locales = ["id", "en"] as const

export default function Header() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const params = useParams<{ locale?: string }>()
  const pathname = usePathname()
  const currentLocale = params?.locale && locales.includes(params.locale as 'id' | 'en') ? (params.locale as 'id' | 'en') : 'id'

  useEffect(() => setMounted(true), [])

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
    <header className="fixed top-0 left-0 w-full z-30 bg-white/90 dark:bg-black/60 backdrop-blur border-b border-black/10 dark:border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 py-4">
        <Link href={`/${currentLocale}`} className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
          Heeve
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 text-gray-800 dark:text-gray-100 font-medium">
            <li><a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Portofolio' : 'Portfolio'}</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Testimoni' : 'Testimonials'}</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{currentLocale === 'id' ? 'Kontak' : 'Contact'}</a></li>
          </ul>

          <div className="flex items-center gap-2">
            {locales.map(loc => (
              <Link key={loc} href={switchLocaleHref(loc)} className={`px-2 py-1 rounded text-sm border ${currentLocale === loc ? 'bg-blue-600 text-white border-blue-600' : 'text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600'}`}>
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Dark mode forced globally; theme toggle removed */}
        </div>
      </nav>
    </header>
  )
}