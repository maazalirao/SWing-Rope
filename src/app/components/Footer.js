"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
  const [language, setLanguage] = useState('EN');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'DE' : 'EN');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset status after delay
      setTimeout(() => {
        setSubscribeStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="w-40 h-12">
                <Logo className="w-full h-full" color="#ffffff" altColor="#10b981" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Revolutionizing wind energy with our innovative rope-based technology. Clean, efficient, and environmentally friendly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:shadow-lg hover:shadow-emerald-500/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:shadow-lg hover:shadow-emerald-500/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:shadow-lg hover:shadow-emerald-500/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-800 hover:shadow-lg hover:shadow-emerald-500/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="sm:col-span-1 lg:col-span-2 mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-6 border-l-2 border-emerald-500 pl-3">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-1 lg:col-span-2 mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-6 border-l-2 border-emerald-500 pl-3">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/product-variants" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Product Variants
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-px bg-emerald-500"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-6 border-l-2 border-emerald-500 pl-3">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and developments.
            </p>
            <form className="mb-6" onSubmit={handleSubscribe}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 rounded-md bg-gray-800 border ${
                    subscribeStatus === 'success' ? 'border-emerald-500' : 'border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white`}
                  disabled={isSubscribing}
                  required
                />
                <button 
                  type="submit" 
                  className={`absolute right-1 top-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${isSubscribing ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                  )}
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="mt-2 text-emerald-400 text-sm flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  Successfully subscribed to our newsletter!
                </p>
              )}
            </form>
            <div className="mt-8">
              <button 
                onClick={toggleLanguage}
                className="px-4 py-2 border border-gray-700 rounded-md text-gray-400 hover:text-white hover:border-emerald-500 transition-colors"
              >
                {language === 'EN' ? 'Switch to Deutsch' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SWingRope. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600/80 via-teal-500/80 to-emerald-600/80 opacity-50"></div>
    </footer>
  );
} 