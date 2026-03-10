'use client';

import Link from 'next/link';
import { useInView } from '../hooks/useInView';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

function TyreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3 L12 7 M12 17 L12 21 M3 12 L7 12 M17 12 L21 12" />
    </svg>
  );
}

export default function Footer() {
  const { ref: footerRef, isInView } = useInView({ threshold: 0.2 });

  // Social links with brand colors and hover effects
  const socialLinks = [
    { 
      icon: Facebook, 
      href: '#', 
      label: 'Facebook',
      color: '#1877f2', // Facebook blue
      hoverBg: '#1877f2'
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram',
      color: '#E1306C', // Instagram pink
      hoverBg: '#E1306C'
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter',
      color: '#1DA1F2', // Twitter blue
      hoverBg: '#1DA1F2'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Mobile Tyres', href: '/mobile-tyres' },
    { name: 'Recovery', href: '/recovery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-[#0a0f0f] text-gray-300 overflow-hidden">
      {/* Subtle background tyre pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <TyreIcon className="absolute top-1/2 left-1/4 w-24 h-24 text-white rotate-12" />
      </div>

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & social */}
          <div
            className={`space-y-6 animate-on-enter ${
              isInView ? 'animate-in-view animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#00E0C6] rounded-xl flex items-center justify-center text-black font-bold text-2xl shadow-lg">
                RRT
              </div>
              <span className="text-xl font-bold text-white">Roadside Rescue</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fast, reliable 24/7 mobile tyre fitting and vehicle recovery across the UK.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-700 hover:scale-110 hover:rotate-3 hover:shadow-lg"
                  style={{
                    backgroundColor: '#1a1f1f',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={18} 
                    style={{ color: social.color }} 
                    className="transition-all duration-300 group-hover:text-white"
                  />
                  {/* Tooltip on hover */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                  {/* Hover background effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: social.hoverBg }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (unchanged) */}
          <div
            className={`space-y-6 animate-on-enter ${
              isInView ? 'animate-in-view animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#00E0C6] transition-colors group"
                  >
                    <ChevronRight size={16} className="text-gray-500 group-hover:text-[#00E0C6] group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations & Registration (unchanged) */}
          <div
            className={`space-y-6 animate-on-enter ${
              isInView ? 'animate-in-view animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <h4 className="text-lg font-bold text-white">Locations</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a1f1f] rounded-lg flex items-center justify-center text-gray-300">
                <MapPin size={20} />
              </div>
              <span className="text-gray-300">Nationwide Coverage</span>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-sm font-semibold text-[#00E0C6] uppercase tracking-wider mb-2">
                Company Reg
              </h4>
              <p className="text-gray-400">16163981</p>
            </div>
          </div>

          {/* Column 4: Contact (unchanged) */}
          <div
            className={`space-y-6 animate-on-enter ${
              isInView ? 'animate-in-view animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <h4 className="text-lg font-bold text-white">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:03335778247"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-[#1a1f1f] rounded-lg flex items-center justify-center text-gray-300 group-hover:bg-[#00E0C6] group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-[#00E0C6] transition-colors">
                  0333 577 8247
                </span>
              </a>
              <a
                href="mailto:support@mobiletyresnationwide.co.uk"
                className="flex items-center gap-3 group break-all"
              >
                <div className="w-10 h-10 bg-[#1a1f1f] rounded-lg flex items-center justify-center text-gray-300 group-hover:bg-[#00E0C6] group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-[#00E0C6] transition-colors text-sm">
                  support@mobiletyresnationwide.co.uk
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar (unchanged) */}
      <div className="relative z-10 border-t border-gray-800 bg-[#050808]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mobile Tyres Nationwide. All rights reserved.</p>
          <Link href="/terms" className="hover:text-[#00E0C6] transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}