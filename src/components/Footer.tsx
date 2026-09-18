'use client';

import Link from 'next/link';
import { Compass, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-pearl-100 pt-20 pb-10 border-t border-forest-800">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Compass className="w-8 h-8 text-gold-500" />
              <span className="font-heading font-bold text-xl tracking-widest uppercase text-white">
                Ceylon<span className="font-light">Trails</span>
              </span>
            </Link>
            <p className="text-forest-200 text-sm leading-relaxed max-w-xs font-light">
              Curating luxury experiences and bespoke journeys through the heart of Sri Lanka since 2010.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-forest-800 flex items-center justify-center text-pearl-300 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-forest-800 flex items-center justify-center text-pearl-300 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-forest-800 flex items-center justify-center text-pearl-300 hover:bg-gold-500 hover:text-forest-950 hover:border-gold-500 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white tracking-widest uppercase text-sm mb-6">Journeys</h4>
            <ul className="space-y-4 text-sm font-light text-forest-200">
              <li><Link href="/tours?type=cultural" className="hover:text-gold-400 transition-colors">Cultural Heritage</Link></li>
              <li><Link href="/tours?type=wildlife" className="hover:text-gold-400 transition-colors">Wildlife Safaris</Link></li>
              <li><Link href="/tours?type=adventure" className="hover:text-gold-400 transition-colors">Adventure Trails</Link></li>
              <li><Link href="/tours?tier=premium" className="hover:text-gold-400 transition-colors">Luxury Exclusives</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white tracking-widest uppercase text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-light text-forest-200">
              <li><Link href="/about" className="hover:text-gold-400 transition-colors">The Curator</Link></li>
              <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/#faq" className="hover:text-gold-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white tracking-widest uppercase text-sm mb-6">Inquiries</h4>
            <ul className="space-y-4 text-sm font-light text-forest-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>124 Galle Road,<br />Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>concierge@ceylontrails.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-forest-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-forest-400">
          <p>&copy; {currentYear} Ceylon Trails Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
