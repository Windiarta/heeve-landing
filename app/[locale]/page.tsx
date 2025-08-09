import { groq } from 'next-sanity'
import { client } from '../../sanity/lib/client'
import HeroSection from '../components/HeroSection'
import PortfolioSection, { PortfolioItem } from '../components/PortfolioSection'
import TestimonialsSection, { TestimonialItem } from '../components/TestimonialsSection'
import ContactForm from '../components/ContactForm'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Metadata } from 'next'
import { urlForImage } from '../../sanity/lib/image'
import { getDictionary } from '../i18n/dictionaries'
import { Locale, isLocale } from '../i18n/config'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const revalidate = 60

export function generateStaticParams() {
  return [{ locale: 'id' }, { locale: 'en' }]
}

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await client.fetch(groq`*[_type == "homepage"][0]{title, description}`)
  return {
    title: homepage?.title || 'Heeve - Software House',
    description: homepage?.description || 'Heeve adalah software house yang mengkhususkan diri dalam menciptakan website inovatif dan ramah pengguna.',
    keywords: ['pengembangan website', 'software house', 'Heeve', 'jasa website', 'web development'],
  }
}

async function getHomepage() {
  return client.fetch(groq`*[_type == "homepage"][0]{
    title, description, ctaText, ctaLink, heroImage,
    services[]{title, desc},
    aboutPoints
  }`)
}

type RawPortfolio = { _id: string; title: string; description: string; image?: SanityImageSource; link?: string }
async function getPortfolio(): Promise<PortfolioItem[]> {
  const data: RawPortfolio[] = await client.fetch(groq`*[_type == "portfolio"] | order(_createdAt desc){
    _id, title, description, image, link
  }`)
  return data.map((item) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    link: item.link,
    image: item.image ? { src: urlForImage(item.image).width(600).url(), alt: item.title } : { src: '', alt: '' },
  }))
}

type RawTestimonial = { _id: string; clientName: string; quote: string; clientImage?: SanityImageSource }
async function getTestimonials(): Promise<TestimonialItem[]> {
  const data: RawTestimonial[] = await client.fetch(groq`*[_type == "testimonial"] | order(_createdAt desc){
    _id, clientName, quote, clientImage
  }`)
  return data.map((item) => ({
    _id: item._id,
    clientName: item.clientName,
    quote: item.quote,
    clientImage: item.clientImage ? { src: urlForImage(item.clientImage).width(80).height(80).url(), alt: item.clientName } : undefined,
  }))
}

export default async function HomePage({ params }: { params: Promise<{ locale?: string }> }) {
  const resolved = await params
  const locale: Locale = isLocale(resolved?.locale ?? '') ? (resolved!.locale as Locale) : 'id'
  const dict = await getDictionary(locale)
  const homepage = await getHomepage()
  const portfolio = await getPortfolio()
  const testimonials = await getTestimonials()

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={homepage?.title || dict.hero.defaultTitle}
          description={homepage?.description || dict.hero.defaultDesc}
          ctaText={homepage?.ctaText || dict.hero.cta}
          ctaLink={homepage?.ctaLink || '#contact'}
          heroImage={
            homepage?.heroImage
              ? { src: urlForImage(homepage.heroImage).width(480).height(480).url(), alt: homepage.title }
              : { src: require('../assets/hero.png').default, alt: '' }
          }
        />
        <AboutSection
          title={dict.about.title}
          content={dict.about.content}
          points={(homepage?.aboutPoints as string[] | undefined) ?? dict.about.points}
        />
        <ServicesSection
          title={dict.services.title}
          items={(homepage?.services as { title: string; desc: string }[] | undefined) ?? dict.services.items}
        />
        <PortfolioSection projects={portfolio} title={dict.portfolio.title} viewText={dict.portfolio.view} />
        <TestimonialsSection testimonials={testimonials} title={dict.testimonials.title} />
        <ContactForm locale={locale} copy={{ title: dict.contact.title, name: dict.contact.name, phone: dict.contact.phone, message: dict.contact.message, send: dict.contact.send, sending: dict.contact.sending, success: dict.contact.success }} />
      </main>
      <Footer contactEmail={dict.contactEmail} whatsapp={dict.contactWhatsapp} />
    </>
  )
}


