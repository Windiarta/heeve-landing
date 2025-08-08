import { Locale } from "./config"

const en = {
  nav: { portfolio: "Portfolio", testimonials: "Testimonials", contact: "Contact" },
  hero: {
    defaultTitle: "Build your dream website with Heeve",
    defaultDesc: "Heeve is a software house specializing in innovative, user-friendly websites.",
    cta: "Get Free Consultation",
  },
  about: {
    title: "About Heeve",
    content: "We help businesses craft fast, accessible and beautiful web experiences.",
    points: [
      "Expert team with solid delivery",
      "Modern stacks and best practices",
      "Transparent communication",
      "Result-oriented approach",
    ],
  },
  services: {
    title: "Our Services",
    items: [
      { title: "Website Development", desc: "Corporate, landing pages, and custom web apps." },
      { title: "E-commerce", desc: "Online store setup and optimization." },
      { title: "SEO & Performance", desc: "Improve rankings and loading speed." },
    ],
  },
  portfolio: { title: "Project Portfolio", view: "View Project" },
  testimonials: { title: "Client Testimonials" },
  contact: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
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
    defaultDesc: "Heeve adalah software house yang mengkhususkan diri dalam menciptakan website inovatif dan ramah pengguna.",
    cta: "Dapatkan Konsultasi Gratis",
  },
  about: {
    title: "Tentang Heeve",
    content: "Kami membantu bisnis membangun pengalaman web yang cepat, aksesibel, dan indah.",
    points: [
      "Tim ahli dengan delivery yang solid",
      "Stack modern dan best practices",
      "Komunikasi transparan",
      "Fokus pada hasil",
    ],
  },
  services: {
    title: "Layanan Kami",
    items: [
      { title: "Pengembangan Website", desc: "Company profile, landing page, hingga web app kustom." },
      { title: "E-commerce", desc: "Pembuatan toko online dan optimasinya." },
      { title: "SEO & Performa", desc: "Tingkatkan peringkat dan kecepatan loading." },
    ],
  },
  portfolio: { title: "Portofolio Proyek", view: "Lihat Proyek" },
  testimonials: { title: "Testimoni Klien" },
  contact: {
    title: "Hubungi Kami",
    name: "Nama",
    email: "Email",
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


