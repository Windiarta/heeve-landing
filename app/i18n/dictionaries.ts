import { Locale } from "./config"

const en = {
  nav: { portfolio: "Portfolio", testimonials: "Testimonials", contact: "Contact" },
  hero: {
    defaultTitle: "Build your Digital Solution with Heeve",
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
  pricing: {
    title: "Service Packages & Pricing",
    subtitle: "Simple, transparent pricing to build and scale your digital solution",
    table: {
      feature: "Feature / Benefit",
      targetUser: "Target User",
      pageCount: "Page Count",
      design: "Design",
      technology: "Technology",
      databaseCms: "Database & CMS",
      paymentIntegration: "Payment & Integration",
      aiFeatures: "AI Features",
      maintenanceSupport: "Maintenance & Support",
      domain: "Domain",
      recommendedPrice: "Recommended Price",
    },
    addOns: {
      title: "Add-On Features",
      subtitle: "Customize your project with these additional capabilities",
      headers: {
        category: "Category",
        feature: "Feature",
        price: "Price",
      },
    },
    cta: {
      choose: "Choose Plan",
      contact: "Contact Sales",
    },
    plans: [
      {
        name: "Starter (Micro & MSME)",
        targetUser: "Personal, Small Shop, Small Olshop",
        pageCount: "1 Page (Landing Page)",
        design: "Template of Choice (No Custom UI)",
        technology: "Static Web / No-Code",
        databaseCms: "None",
        paymentIntegration: "WhatsApp Link / Single Payment",
        aiFeatures: "-",
        maintenanceSupport: "1 Month Bug Fix",
        domain: "Free Domain .com/.id",
        price: "Rp950,000",
        recommended: false,
        order: 1,
      },
      {
        name: "Standard (Growing Business)",
        targetUser: "Medium MSME, Agency",
        pageCount: "Up to 5 Pages",
        design: "Semi-Custom (Template + Edit)",
        technology: "CMS (WordPress/Webflow)",
        databaseCms: "Standard CMS",
        paymentIntegration: "Midtrans/Xendit Basic Integration",
        aiFeatures: "Add-on Only",
        maintenanceSupport: "3 Months Support",
        domain: "Not included (Setup service only)",
        price: "Rp 3,500,000 - Rp 5,000,000",
        recommended: false,
        order: 2,
      },
      {
        name: "Premium (Startup & Corporate)",
        targetUser: "Startup, Local Company",
        pageCount: "Up to 12 Pages",
        design: "100% Custom UI/UX (Figma)",
        technology: "MERN/Next.js/Robust Framework",
        databaseCms: "Advanced Database",
        paymentIntegration: "Full API & Payment Gateway",
        aiFeatures: "AI Suggestion Included",
        maintenanceSupport: "6 Months + Priority Support",
        domain: "Not included (Setup service only)",
        price: "Rp 12,000,000 - Rp 20,000,000",
        recommended: true,
        order: 3,
      },
      {
        name: "Enterprise (Custom)",
        targetUser: "Enterprise, Fintech",
        pageCount: "Unlimited / Custom",
        design: "100% Custom + Brand Guideline",
        technology: "Custom Stack",
        databaseCms: "High Security Database",
        paymentIntegration: "Multi-gateway & Custom API",
        aiFeatures: "Full AI Agent & Chatbot",
        maintenanceSupport: "SLA 99.9% / Dedicated Team",
        domain: "Not included (Setup service only)",
        price: "Ask Sales",
        recommended: false,
        order: 4,
      },
    ],
    addOnsList: [
      { category: "AI", feature: "AI Suggestion & Recommendation", price: "Rp1,500,000 - Rp3,000,000", order: 1 },
      { category: "AI", feature: "Advanced AI Chatbot (WA Integrated)", price: "Rp3,500,000 - Rp7,500,000", order: 2 },
      { category: "AI", feature: "AI Subscription", price: "Rp250,000 - Rp750,000 / month", order: 3 },
      { category: "Page", feature: "Page Extension", price: "Rp250,000 - Rp500,000 / page", order: 4 },
      { category: "Page", feature: "Design Revision", price: "Rp100,000 - Rp200,000 / page / revision", order: 5 },
      { category: "Page", feature: "Copywriting", price: "Rp150,000 - Rp300,000 / page", order: 6 },
      { category: "Page", feature: "Content Entry", price: "Rp300,000", order: 7 },
      { category: "Technical Feature", feature: "Payment Gateway Upgrade (Setup)", price: "Rp1,500,000 - Rp2,500,000", order: 8 },
      { category: "Technical Feature", feature: "CMS Upgrade", price: "Rp2,000,000 - Rp3,500,000", order: 9 },
      { category: "Technical Feature", feature: "Multi Language Update", price: "Rp1,000,000 - Rp2,000,000", order: 10 },
      { category: "Legality, Security, Ownership", feature: "Source Code", price: "50 - 100% Project price", order: 11 },
      { category: "Legality, Security, Ownership", feature: "Google Analytics Dashboard", price: "Rp1,500,000 - Rp3,000,000", order: 12 },
      { category: "Legality, Security, Ownership", feature: "SLA Maintenance", price: "Rp500,000 - Rp2,500,000/month", order: 13 },
      { category: "Domain & Hosting", feature: "Domain & Hosting Renewal", price: "Rp350,000/year", order: 14 },
    ]
  },
}

const id = {
  nav: { portfolio: "Portofolio", testimonials: "Testimoni", contact: "Kontak" },
  hero: {
    defaultTitle: "Wujudkan Solusi Digital Anda Bersama Heeve",
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
  pricing: {
    title: "Paket Layanan & Harga",
    subtitle: "Pilihan harga transparan yang disesuaikan dengan skala bisnis Anda",
    table: {
      feature: "Fitur / Benefit",
      targetUser: "Target User",
      pageCount: "Page Count",
      design: "Desain",
      technology: "Teknologi",
      databaseCms: "Database & CMS",
      paymentIntegration: "Payment & Integrasi",
      aiFeatures: "AI Features",
      maintenanceSupport: "Maintenance & Support",
      domain: "Domain",
      recommendedPrice: "Harga Rekomendasi",
    },
    addOns: {
      title: "Fitur Tambahan (Add-On)",
      subtitle: "Kustomisasi proyek Anda dengan fitur-fitur tambahan berikut",
      headers: {
        category: "Kategori",
        feature: "Fitur",
        price: "Harga",
      },
    },
    cta: {
      choose: "Pilih Paket",
      contact: "Hubungi Sales",
    },
    plans: [
      {
        name: "Starter (Micro & UMKM)",
        targetUser: "Personal, Warung, Olshop Kecil",
        pageCount: "1 Halaman (Landing Page)",
        design: "Template Pilihan (No Custom UI)",
        technology: "Static Web / No-Code",
        databaseCms: "Tidak Ada",
        paymentIntegration: "Link WhatsApp/Satu Payment",
        aiFeatures: "-",
        maintenanceSupport: "1 Bulan Bug Fix",
        domain: "Gratis Domain .com/.id",
        price: "Rp950.000",
        recommended: false,
        order: 1,
      },
      {
        name: "Standard (Growing Business)",
        targetUser: "UMKM Menengah, Agensi",
        pageCount: "Up to 5 Halaman",
        design: "Semi-Custom (Template + Edit)",
        technology: "CMS (WordPress/Webflow)",
        databaseCms: "Standard CMS",
        paymentIntegration: "Integrasi Midtrans/Xendit Basic",
        aiFeatures: "Add-on Only",
        maintenanceSupport: "3 Bulan Support",
        domain: "Tidak termasuk (Hanya jasa setup)",
        price: "Rp 3.500.000 - Rp 5.000.000",
        recommended: false,
        order: 2,
      },
      {
        name: "Premium (Startup & Corporate)",
        targetUser: "Startup, Perusahaan Lokal",
        pageCount: "Up to 12 Halaman",
        design: "100% Custom UI/UX (Figma)",
        technology: "MERN/Next.js/Robust Framework",
        databaseCms: "Advanced Database",
        paymentIntegration: "Full API & Payment Gateway",
        aiFeatures: "Termasuk AI Suggestion",
        maintenanceSupport: "6 Bulan + Priority Support",
        domain: "Tidak termasuk (Hanya jasa setup)",
        price: "Rp 12.000.000 - Rp 20.000.000",
        recommended: true,
        order: 3,
      },
      {
        name: "Enterprise (Custom)",
        targetUser: "Perusahaan Besar, Fintech",
        pageCount: "Unlimited / Custom",
        design: "100% Custom + Brand Guideline",
        technology: "Custom Stack",
        databaseCms: "High Security Database",
        paymentIntegration: "Multi-gateway & Custom API",
        aiFeatures: "Full AI Agent & Chatbot",
        maintenanceSupport: "SLA 99.9% / Dedicated Team",
        domain: "Tidak termasuk (Hanya jasa setup)",
        price: "Ask Sales",
        recommended: false,
        order: 4,
      },
    ],
    addOnsList: [
      { category: "AI", feature: "AI Suggestion & Recommendation", price: "Rp1.500.000 - Rp3.000.000", order: 1 },
      { category: "AI", feature: "Advanced AI Chatbot (WA Integrated)", price: "Rp3.500.000 - Rp7.500.000", order: 2 },
      { category: "AI", feature: "AI Subscription", price: "Rp250.000 - Rp750.000 / bulan", order: 3 },
      { category: "Page", feature: "Ekstensi Halaman", price: "Rp250.000 - Rp500.000 / halaman", order: 4 },
      { category: "Page", feature: "Revisi Desain", price: "Rp100.000 - Rp200.000 / halaman / revisi", order: 5 },
      { category: "Page", feature: "Copywriting", price: "Rp150.000 - Rp300.000 / halaman", order: 6 },
      { category: "Page", feature: "Content Entry", price: "Rp300.000", order: 7 },
      { category: "Technical Feature", feature: "Upgrade Payment Gateway (Setup)", price: "Rp1.500.000 - Rp2.500.000", order: 8 },
      { category: "Technical Feature", feature: "Upgrade CMS", price: "Rp2.000.000 - Rp3.500.000", order: 9 },
      { category: "Technical Feature", feature: "Pembaruan Multi Bahasa", price: "Rp1.000.000 - Rp2.000.000", order: 10 },
      { category: "Legality, Security, Ownership", feature: "Source Code", price: "50 - 100% Harga proyek", order: 11 },
      { category: "Legality, Security, Ownership", feature: "Google Analytics Dashboard", price: "Rp1.500.000 - Rp3.000.000", order: 12 },
      { category: "Legality, Security, Ownership", feature: "SLA Maintenance", price: "Rp500.000 - Rp2.500.000/bulan", order: 13 },
      { category: "Domain & Hosting", feature: "Perpanjangan Domain & Hosting", price: "Rp350.000/tahun", order: 14 },
    ]
  },
}

export async function getDictionary(locale: Locale) {
  return locale === 'en' ? en : id
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>


