'use client';

import Link from 'next/link';
import { useInView } from '../hooks/useInView';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { ref: footerRef, isInView } = useInView({ threshold: 0.2 });

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mobile Tyres', href: '/mobile-tyres' },
    { name: 'Recovery', href: '/recovery' },
  ];

  return (
    <footer ref={footerRef}>
      {/* MAIN FOOTER */}
      <div className="bg-[#19d1bf] py-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Grid with borders */}
          <div className="grid grid-cols-1 md:grid-cols-4 border border-black/20 divide-y md:divide-y-0 md:divide-x divide-black/20">
            {/* FOLLOW US */}
            <div
              className={`p-8 animate-on-enter ${
                isInView ? 'animate-in-view animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              <h4 className="text-xl font-extrabold tracking-widest mb-6 text-black">
                FOLLOW US
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white hover:bg-teal-700 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-md animate-float-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* LOCATIONS */}
            <div
              className={`p-8 animate-on-enter ${
                isInView ? 'animate-in-view animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <h4 className="text-xl font-extrabold tracking-widest mb-6 text-black">
                LOCATIONS
              </h4>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white hover:bg-teal-700 hover:scale-110 transition-all duration-300 animate-float-icon">
                  <MapPin size={28} />
                </div>
                <span className="text-black font-medium">Nationwide</span>
              </div>
              <h4 className="text-xl font-extrabold tracking-widest mb-3 text-black">
                COMPANY REGISTRATION
              </h4>
              <p className="text-black font-medium ml-2">16163981</p>
            </div>

            {/* QUICK LINKS */}
            <div
              className={`p-8 animate-on-enter ${
                isInView ? 'animate-in-view animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <h4 className="text-xl font-extrabold tracking-widest mb-6 text-black">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-black hover:text-teal-800 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:scale-150 transition-transform"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div
              className={`p-8 animate-on-enter ${
                isInView ? 'animate-in-view animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <h4 className="text-xl font-extrabold tracking-widest mb-6 text-black">
                CONTACT
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:03335778247"
                  className="flex items-center gap-3 text-black hover:text-teal-800 transition-colors group"
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white hover:bg-teal-700 hover:scale-110 transition-all duration-300 animate-float-icon">
                    <Phone size={28} />
                  </div>
                  <span className="font-semibold">0333 577 8247</span>
                </a>
                <a
                  href="mailto:support@mobiletyresnationwide.co.uk"
                  className="flex items-center gap-3 text-black hover:text-teal-800 transition-colors group break-all"
                >
                 
                  <span>support@mobiletyresnationwide.co.uk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black text-[#19d1bf] py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-2">
          <p>© {new Date().getFullYear()} Mobile Tyres Nationwide</p>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}