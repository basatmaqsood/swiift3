// HeroSection.jsx
'use client'
import React, { useEffect, useState } from 'react';
import { ChevronDown, Globe, MenuIcon } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isWaffleMenuOpen, setIsWaffleMenuOpen] = useState(false);

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
  return (
    <div className="relative min-h-screen">
      {/* Fixed Navigation */}
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
      {/* Hero Content */}
      <div className="relative h-screen w-full">
        {/* Background Image Area */}
        <div className="absolute inset-0">
          <img
            src='2.png'
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-gray-900/60" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:mx-0 md:px-16 pt-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Proudly
                <div className="inline-block">
                  <span className="text-green-600 bg-clip-text"> South </span>
                  <span className="text-yellow-500 bg-clip-text">African</span>
                </div>
                <span className="block">Ride-Sharing Platform</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Experience safer, smarter transportation with South Africa&apos;s most innovative e-hailing service.
              </p>

              <div className="flex items-center space-x-4">
                <Link href='#app-download' className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-medium text-base hover:bg-yellow-300 transition-colors">
                  Get App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
