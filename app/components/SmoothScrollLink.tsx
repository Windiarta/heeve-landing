"use client"

import Link from 'next/link'

export default function SmoothScrollLink({ href, children, offset = 88, className = '', onClick }: { href: string; children: React.ReactNode; offset?: number; className?: string; onClick?: () => void }) {
  const isHash = href.startsWith('#')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHash) return
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return
    const rect = el.getBoundingClientRect()
    const targetY = rect.top + window.scrollY - offset
    window.scrollTo({ top: Math.max(targetY, 0), behavior: 'smooth' })
    history.replaceState(null, '', href)
    onClick?.()
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}


