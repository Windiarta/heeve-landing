import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  contactEmail: string;
  whatsapp?: string;
}

export default function Footer({ contactEmail, whatsapp }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/heeve.id',
      icon: <FaInstagram className="w-5 h-5" />
    },
    { 
      name: 'Email', 
      href: `mailto:${contactEmail}`,
      icon: <FaEnvelope className="w-5 h-5" />
    },
    ...(whatsapp ? [{
      name: 'WhatsApp', 
      href: `https://wa.me/${whatsapp}`,
      icon: <FaWhatsapp className="w-5 h-5" />
    }] : []),
  ];

  return (
    <footer className="bg-gradient-to-r from-darkgrey-900 via-darkgrey-800 to-darkgrey-900 text-white py-12 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-700 pb-8">
          <span className="text-lg font-medium tracking-tight">
            &copy; {currentYear} Heeve. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-blue-400 
                          transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {link.icon}
                <span className="text-sm font-medium">
                  {link.name === 'Email' ? contactEmail : link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          Designed with care by Heeve
        </div>
      </div>
    </footer>
  );
}