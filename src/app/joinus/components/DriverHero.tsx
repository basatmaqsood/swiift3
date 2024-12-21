'use client'

import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Shield, Clock, Wallet, Globe, MenuIcon } from 'lucide-react';
import Link from 'next/link';
const DriverHero = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isWaffleMenuOpen, setIsWaffleMenuOpen] = useState(false)
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}

      <nav className="fixed w-full bg-gray-900/95 border-b border-gray-800 px-6 py-4 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo and Language */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-white">
              Swift<span className="text-yellow-400">!</span>
            </Link>

            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
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
            <Link href="/joinus" className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300">
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
      <div className="relative min-h-screen bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img
            src='1.png'
            alt="Swift Driver" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto  lg:mx-16 px-6 py-32">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                Your Journey to
                <span className="text-yellow-400"> Success </span>
                Starts Here
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Join South Africa&apos;s fastest-growing e-hailing platform. Enjoy better earnings, flexible hours, and comprehensive support.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-2 lg:p-4 border border-gray-800">
                  <Wallet className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-white">R5k+</div>
                  <p className="text-gray-400 text-sm">Weekly Earnings</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-2 lg:p-4 border border-gray-800">
                  <Clock className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-white">Flexible</div>
                  <p className="text-gray-400 text-sm">Working Hours</p>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-2 lg:p-4 border border-gray-800">
                  <Shield className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-white">24/7</div>
                  <p className="text-gray-400 text-sm">Driver Support</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Link href="/joinus#registerForm" className="bg-yellow-400 text-black px-2 md:px-8 py-4 rounded-xl font-medium text-lg hover:bg-yellow-300 transition-colors flex items-center">
                  <span>Start Earning Today</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverHero;
