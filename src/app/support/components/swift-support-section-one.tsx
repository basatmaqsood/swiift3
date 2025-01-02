'use client'
import React, { useEffect, useState } from 'react';
import { 
  UserCircle, 
  Car, 
  Package,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  ChevronDown,
  MenuIcon
} from 'lucide-react';
import Link from 'next/link';

const SupportSectionOne = () => {

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
  const [isWaffleMenuOpen, setIsWaffleMenuOpen] = useState(false)
  const supportCategories = [
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: "Rider Support",
      description: "Get help with your rides, payments, and account",
      link: "/support#ticket",
      commonIssues: [
        "Track current ride",
        "Payment methods",
        "Ride history"
      ]
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Driver Support",
      description: "Access driver-specific support and resources",
      link: "/support#ticket",
      commonIssues: [
        "Earnings support",
        "Vehicle assistance",
        "Account verification"
      ]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Delivery Support",
      description: "Resolve delivery-related queries and tracking",
      link: "/support#ticket",
      commonIssues: [
        "Track package",
        "Delivery status",
        "Collection points"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

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
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm">24/7 Support Available</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Can We Help
            <span className="text-yellow-400">?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find quick answers, contact our support team, or browse through our help resources
          </p>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 group"
            >
              <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(category.icon, { className: "text-gray-900" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {category.description}
              </p>
              {/* Common Issues */}
              <ul className="space-y-2 mb-4">
                {category.commonIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    {issue}
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-yellow-400 font-medium">
                <span>Get help</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSectionOne;
