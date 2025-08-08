import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Heeve - Software House',
  description: 'Heeve adalah software house yang mengkhususkan diri dalam menciptakan website inovatif dan ramah pengguna.',
}

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}


