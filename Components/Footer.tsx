import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface FooterLink {
  name: string;
  url: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  url?: string;
  isLink?: boolean;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      icon: <Facebook size={20} />,
      url: "https://www.facebook.com/profile.php?id=61553837827750",
      label: "Facebook",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/joeuneducation/?igshid=MWRsa3AxaDFvZmd6dQ==",
      label: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      url: "#",
      label: "YouTube",
    },
    {
      icon: <Linkedin size={20} />,
      url: "#",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "#",
      label: "Twitter",
    },
  ];

  const quickLinks: FooterLink[] = [
    { name: "Home", url: "/" },
    { name: "Study Destinations", url: "/countries" },
    { name: "Universities", url: "/universities" },
    { name: "Test Preparations", url: "/test-preparations" },
    { name: "About Us", url: "/about" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
    { name: "Our journey", url: "/gallery" },
  ];

  const destinations: FooterLink[] = [
    { name: "South Korea", url: "/south-korea" },
    { name: "Australia", url: "/australia" },
    { name: "UK", url: "/uk" },
  ];

  const testPreparations: FooterLink[] = [
    { name: "IELTS Preparation", url: "/test-preparations/ielts" },
    { name: "Korean Language", url: "/test-preparations/korean-language" },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="flex-shrink-0 mt-1" size={18} />,
      text: "Joeun Education Consultancy, Boudhanath, Nepal",
    },
    {
      icon: <Phone size={18} />,
      text: "+977-9862358543",
      url: "tel:+977-9862358543",
      isLink: true,
    },
    {
      icon: <Phone size={18} />,
      text: "+82-1067874320",
      url: "tel:+82-1067874320",
      isLink: true,
    },
    {
      icon: <Mail size={18} />,
      text: "info@joeuneducationconsultancy.com",
      url: "mailto:info@joeuneducationconsultancy.com",
      isLink: true,
    },
    {
      icon: <Mail size={18} />,
      text: "joeuneducationconsultancy@gmail.com",
      url: "mailto:joeuneducationconsultancy@gmail.com",
      isLink: true,
    },
    {
      icon: <Clock size={18} />,
      text: "Sun-Fri: 6:00 AM - 6:00 PM",
    },
    {
      icon: <Clock size={18} />,
      text: "Saturday: Closed",
    },
  ];

  const legalLinks: FooterLink[] = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Sitemap", url: "#" },
  ];

  return (
    <footer className="bg-[#232E2F] text-[#D9F1F1] pt-12 pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-[#D9F1F1]">Jeon Educa</span>
              <span className="text-[#D9F1F1] opacity-90">tion Consultancy</span>
            </h2>
            <p className="text-[#D9F1F1] opacity-80 text-sm sm:text-base">
              Transforming dreams into global education realities.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="text-[#D9F1F1] hover:text-white transition-colors duration-200"
                  aria-label={`Visit our ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#D9F1F1]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#D9F1F1] opacity-80">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations & Test Preparations */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#D9F1F1]">
                Study Destinations
              </h3>
              <ul className="space-y-2 text-[#D9F1F1] opacity-80">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <Link
                      href={destination.url}
                      className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#D9F1F1]">
                Test Preparations
              </h3>
              <ul className="space-y-2 text-[#D9F1F1] opacity-80">
                {testPreparations.map((test, index) => (
                  <li key={index}>
                    <Link
                      href={test.url}
                      className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {test.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#D9F1F1]">Contact Us</h3>
            <ul className="space-y-3 text-[#D9F1F1] opacity-80">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5">{info.icon}</span>
                  {info.isLink && info.url ? (
                    <Link
                      href={info.url}
                      className="hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <span className="text-sm sm:text-base">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D9F1F1]/30 my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#D9F1F1] opacity-80 text-xs sm:text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Joeun Education Foundation. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}