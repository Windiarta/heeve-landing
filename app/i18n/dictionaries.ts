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
      { 
        title: "Digital Marketing", 
        desc: "Comprehensive digital marketing solutions that help your brand grow online. From SEO and social media to performance ads and content strategy, we drive measurable results and stronger customer engagement." 
      },
      { 
        title: "System Development", 
        desc: "End-to-end system development services tailored to your business needs. We design and build scalable, secure, and reliable applications that improve efficiency and support long-term growth." 
      },
      { 
        title: "AI-Based System", 
        desc: "Smart AI-powered solutions to transform your business. From intelligent automation to predictive analytics, we deliver innovative systems that boost decision-making and unlock new opportunities." 
      }
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
      { 
        title: "Digital Marketing", 
        desc: "Solusi digital marketing terintegrasi untuk mengembangkan brand Anda secara online. Mulai dari SEO, media sosial, iklan berbayar, hingga strategi konten—kami menghadirkan hasil nyata dan meningkatkan interaksi pelanggan." 
      },
      { 
        title: "System Development", 
        desc: "Layanan pengembangan sistem end-to-end yang dirancang sesuai kebutuhan bisnis Anda. Kami membangun aplikasi yang skalabel, aman, dan andal untuk meningkatkan efisiensi serta mendukung pertumbuhan jangka panjang." 
      },
      { 
        title: "AI-Based System", 
        desc: "Solusi cerdas berbasis AI untuk mentransformasi bisnis Anda. Dari otomasi pintar hingga analitik prediktif, kami menghadirkan inovasi yang memperkuat pengambilan keputusan dan membuka peluang baru." 
      }
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


