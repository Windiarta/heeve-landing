import { Locale } from "./config"

const en = {
  nav: { portfolio: "Portfolio", testimonials: "Testimonials", contact: "Contact" },
  hero: {
    defaultTitle: "Build your dream website with Heeve",
    defaultDesc: "Heeve is a software house focused on developing innovative, intuitive, and user-experience-oriented websites, helping businesses deliver effective and sustainable digital solutions.",
    cta: "Get Free Consultation",
  },
  // Contact email for EN locale
  contactEmail: "info@heeve.id",
  // Optional WhatsApp phone for EN locale (E.164 format without +). Example: 6281234567890
  contactWhatsapp: "6281234567890",
  about: {
    title: "About Heeve",
    content: "We help businesses deliver fast, responsive, secure, and captivating web experiences, blending modern technology with user-focused design.",
    points: [
      "Expert team with a consistent and high-quality delivery track record",
      "Transparent communication at every stage of development",
      "Modern technology and stack with best practice implementation",
      "Results-oriented, delivering real value to your business",
    ],
  },
  services: {
    title: "Our Services",
    items: [
      { title: "Website Development", desc: "Corporate, landing pages, POS, and custom web apps." },
      { title: "Mobile App Development", desc: "Custom mobile app development (Android & iOS) for your business needs." },
      { title: "AI-Based System", desc: "AI-based system development for automation and efficiency improvement." },
    ],
  },
  portfolio: { title: "Project Portfolio", view: "View Project" },
  testimonials: { title: "Client Testimonials" },
  contact: {
    title: "Contact Us",
    name: "Name",
    phone: "Phone number",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
  },
}

const id = {
  nav: { portfolio: "Portofolio", testimonials: "Testimoni", contact: "Kontak" },
  hero: {
    defaultTitle: "Wujudkan Website Impian Anda Bersama Heeve",
    defaultDesc: "Heeve adalah software house yang berfokus pada pengembangan website inovatif, intuitif, dan berorientasi pada pengalaman pengguna, membantu bisnis menghadirkan solusi digital yang efektif dan berkelanjutan.",
    cta: "Dapatkan Konsultasi Gratis",
  },
  // Contact email for ID locale
  contactEmail: "info@heeve.id",
  // Optional WhatsApp phone for ID locale (E.164 format without +). Example: 6281234567890
  contactWhatsapp: "6281234567890",
  about: {
    title: "Tentang Heeve",
    content: "Kami membantu bisnis menghadirkan pengalaman web yang cepat, responsif, aman, dan memikat, memadukan teknologi modern dengan desain yang berfokus pada pengguna.",
    points: [
      "Tim ahli dengan rekam jejak delivery yang konsisten dan berkualitas",
      "Komunikasi transparan di setiap tahap pengembangan",
      "Teknologi dan stack modern dengan penerapan best practices",
      "Berorientasi pada hasil yang memberikan nilai nyata bagi bisnis Anda",
    ],
  },
  services: {
    title: "Layanan Kami",
    items: [
      { title: "Website", desc: "Company profile, landing page, POS, hingga web app kustom." },
      { title: "Aplikasi Mobile", desc: "Pembuatan aplikasi mobile (Android & iOS) untuk kebutuhan bisnis Anda." },
      { title: "Sistem Berbasis AI", desc: "Pengembangan sistem berbasis AI untuk otomatisasi dan peningkatan efisiensi." },
    ],
  },
  portfolio: { title: "Portofolio Proyek", view: "Lihat Proyek" },
  testimonials: { title: "Testimoni Klien" },
  contact: {
    title: "Hubungi Kami",
    name: "Nama",
    phone: "No. HP",
    message: "Pesan",
    send: "Kirim Pesan",
    sending: "Mengirim...",
    success: "Pesan berhasil dikirim!",
  },
}

export async function getDictionary(locale: Locale) {
  return locale === 'en' ? en : id
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>


