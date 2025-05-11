"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [language, setLanguage] = useState('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'DE' : 'EN');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 py-3 px-4 sm:py-4 sm:px-6 ${
      scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Custom Logo */}
          <div className="relative h-9 w-36 sm:h-10 sm:w-40 transition-all duration-300">
            <Logo 
              className="w-full h-full" 
              color={scrolled ? "#1e4b57" : "#ffffff"} 
              altColor={scrolled ? "#10b981" : "#4ade80"}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-5 lg:gap-8 items-center">
          <Link href="/" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            Home
          </Link>
          <Link href="/technology" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            Technology
          </Link>
          <Link href="/use-cases" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            Use Cases
          </Link>
          <Link href="/about" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            About
          </Link>
          <Link href="/blog" className={`text-sm font-medium ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-emerald-500 transition-colors`}>
            Blog
          </Link>
          <button 
            onClick={toggleLanguage}
            className={`ml-4 px-3 py-1 text-sm font-medium border rounded-md transition-colors ${
              scrolled 
                ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            {language}
          </button>
          <Link 
            href="/contact" 
            className="bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm hover:shadow"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 flex flex-col gap-5 rounded-b-xl animate-fadeIn">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/technology" 
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </Link>
          <Link 
            href="/use-cases" 
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Use Cases
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <div className="flex justify-between items-center mt-2 border-t border-gray-100 pt-4">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 text-gray-700"
            >
              {language}
            </button>
            <Link 
              href="/contact" 
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 