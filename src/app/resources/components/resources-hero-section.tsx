'use client'

import React, { useEffect, useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Shield,
  FileText,
  ChevronDown,
  ExternalLink,
  Globe,
  MenuIcon
} from 'lucide-react';
import Link from 'next/link';

const ResourcesHeroSection = () => {

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
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isWaffleMenuOpen, setIsWaffleMenuOpen] = useState(false);
  const quickAccess = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Driver Guides",
      description: "Essential manuals and training documents",
      count: "12 Documents"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Security",
      description: "Safety protocols and emergency procedures",
      count: "8 Documents"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Legal Documents",
      description: "Policies, terms, and agreements",
      count: "6 Documents"
    }
  ];

  const popularSearches = [
    "Driver Training Manual",
    "Security Protocols",
    "Vehicle Requirements",
    "Emergency Procedures"
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
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
      <div className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Tech Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-gray-500/20">
                  {[...Array(12)].map((_, j) => (
                    <div key={j} className="border-b border-gray-500/20 h-24" />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
            bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 
            bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Swift<span className="text-yellow-400">!</span> Resource Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access all the tools, guides, and documents you need. Your comprehensive hub for 
              success with Swift!
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search for guides, documents, or topics..."
                className="w-full pl-14 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm rounded-xl 
                  border border-gray-700 text-white placeholder-gray-400 focus:ring-2 
                  focus:ring-yellow-400 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Popular Searches */}
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <span className="text-gray-400 text-sm">Popular:</span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full 
                    hover:bg-gray-700 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickAccess.map((item, index) => (
              <button
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-left border 
                  border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                  {React.cloneElement(item.icon, { className: "text-black" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 
                  transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {item.description}
                </p>
                
                <Link href='#download' className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{item.count}</span>
                  <ExternalLink className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 
                    transition-transform" />
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeroSection;
