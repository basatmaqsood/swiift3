'use client'
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Globe, MenuIcon } from 'lucide-react';
import Link from 'next/link';

// src/global.d.ts

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const CareersHeroSection = () => {



  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'ur' },
          'google_translate_element'
        );
      }
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);


  const [isWaffleMenuOpen, setIsWaffleMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <nav className="fixed w-full bg-gray-900/95 border-b border-gray-800 px-6 py-4 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo and Language */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-white">
              Swift<span className="text-yellow-400">!</span>
            </Link>

            <div className="relative hidden md:block">
              <div id="google_translate_element" style={{display:'none'}}></div>
              <button
              id='translate'
                onClick={() => {
                  console.log('I am clicking')
                  const widget = document.querySelector('#google_translate_element');
                  console.log(widget)
                  if (widget) {
                    (widget as HTMLElement).style.display = 'block';
                  }
                 const button = document.getElementById('translate');
                 (button as HTMLElement).style.display = 'none'
                }}
                className="flex items-center space-x-2 bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
              >
                <Globe className="w-6 h-6" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>



              {isLangMenuOpen && (
                <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-lg shadow-xl py-2 w-40 z-50">
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">English</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Afrikaans</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">isiZulu</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">isiXhosa</a>
                </div>
              )}
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/support" className="hidden md:block text-white hover:bg-gray-800 px-4 py-2 rounded-lg">
              Support
            </Link>
            <Link href="/joinus" className="hidden md:block bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300">
              Register
            </Link>
            {/* Waffle Tab */}
            <div className="relative md:block">

              <button
                onClick={() => setIsWaffleMenuOpen(!isWaffleMenuOpen)}
                className="flex items-center bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700"
              >
                <MenuIcon className="w-6 h-6" />
              </button>

              {isWaffleMenuOpen && (
                <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-xl py-2 w-48 z-50">
                  <a href="/aboutus" className="block px-4 py-2 text-white hover:bg-gray-700">About</a>
                  <a href="/resources" className="block px-4 py-2 text-white hover:bg-gray-700">Resources</a>
                  <a href="/careers" className="block px-4 py-2 text-white hover:bg-gray-700">Careers</a>
                </div>
              )}
            </div>



          </div>
        </div>
      </nav>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen relative">
        {/* Navigation */}
        {/* Fixed Navigation */}


        {/* Hero Content */}
        <div className="max-w-4xl mt-24">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Shape the Future of</span>
            <br />
            <span className="text-yellow-400">Transportation</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Join our mission to revolutionize mobility in South Africa.
            Build innovative solutions that connect communities and create opportunities.
          </p>

          <button className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-xl font-medium text-lg hover:bg-yellow-300 transition-all duration-300 group">
            <Link href='/joinus#registerForm'>Explore Opportunities</Link>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
