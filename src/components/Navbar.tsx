'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = pathname === '/' || pathname === '/tours' || pathname === '/destinations' || pathname?.startsWith('/tours/');
  
  // Force scrolled styling if the page doesn't have a dark hero at the top
  const applyScrolledStyle = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        applyScrolledStyle
          ? 'bg-white/95 backdrop-blur-md border-pearl-200 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Compass className={`w-8 h-8 transition-colors ${applyScrolledStyle ? 'text-forest-950' : 'text-white'}`} />
          <span className={`font-heading font-bold text-xl tracking-widest uppercase transition-colors ${
            applyScrolledStyle ? 'text-forest-950' : 'text-white'
          }`}>
            Ceylon<span className="font-light">Trails</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/destinations" className={`text-sm font-medium transition-colors tracking-wide ${applyScrolledStyle ? 'text-forest-950 hover:text-gold-600' : 'text-white/90 hover:text-white'}`}>
            Destinations
          </Link>
          <Link href="/tours" className={`text-sm font-medium transition-colors tracking-wide ${applyScrolledStyle ? 'text-forest-950 hover:text-gold-600' : 'text-white/90 hover:text-white'}`}>
            Experiences
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors tracking-wide ${applyScrolledStyle ? 'text-forest-950 hover:text-gold-600' : 'text-white/90 hover:text-white'}`}>
            About Us
          </Link>
          <Link
            href="/contact"
            className={`px-6 py-2.5 rounded-full text-sm font-heading font-bold transition-all duration-300 ${
              applyScrolledStyle 
                ? 'bg-forest-950 text-white hover:bg-gold-500 hover:text-forest-950' 
                : 'bg-white text-forest-950 hover:bg-gold-500 hover:text-forest-950'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${applyScrolledStyle ? 'text-forest-950' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col p-8 z-50"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-forest-950 p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 mt-16 items-center">
              <Link href="/destinations" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading text-forest-950 hover:text-gold-600 tracking-wide">
                Destinations
              </Link>
              <Link href="/tours" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading text-forest-950 hover:text-gold-600 tracking-wide">
                Experiences
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-heading text-forest-950 hover:text-gold-600 tracking-wide">
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 bg-forest-950 text-white rounded-full font-heading font-bold tracking-wide w-full text-center hover:bg-gold-500 hover:text-forest-950 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
