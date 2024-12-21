'use client'

import React from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin,
  Download,
  FileText,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const GetStartedAndFooter = () => {
  const quickSteps = [
    {
      number: "01",
      title: "Download Documents",
      description: "Get all required documentation ready"
    },
    {
      number: "02",
      title: "Submit Application",
      description: "Complete your driver application"
    },
    {
      number: "03",
      title: "Vehicle Check",
      description: "Schedule your vehicle inspection"
    },
    {
      number: "04",
      title: "Start Earning",
      description: "Begin your journey with Swift!"
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Support Chat",
      description: "24/7 dedicated line",
      action: "Start Chat",
      isPrimary: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant assistance",
      action: "Start Chat",
      isPrimary: false
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Help Center",
      description: "Browse FAQs",
      action: "View Articles",
      isPrimary: false
    }
  ];

  const footerLinks = {
    company: [
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/press' },
      { title: 'Blog', href: '/blog' }
    ],
    legal: [
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Cookie Policy', href: '/cookies' },
      { title: 'Disclaimer', href: '/disclaimer' }
    ],
    support: [
      { title: 'Help Center', href: '/help' },
      { title: 'Safety', href: '/safety' },
      { title: 'Lost & Found', href: '/lost-found' },
      { title: 'Contact Us', href: '/contact' }
    ],
    cities: [
      { title: 'Johannesburg', href: '/cities/johannesburg' },
      { title: 'Cape Town', href: '/cities/cape-town' },
      { title: 'Durban', href: '/cities/durban' },
      { title: 'Pretoria', href: '/cities/pretoria' }
    ]
  };

  return (
    <>
      {/* Get Started Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 
            bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 
            bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-400 font-medium">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Swift<span className="text-yellow-400">!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to begin your journey with South Africa&apos;s most 
              innovative e-hailing platform.
            </p>
          </div>

          {/* Quick Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {quickSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 
                  hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="text-yellow-400 font-bold text-4xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
              >
                <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 mb-6">{channel.description}</p>
                <button 
                  className={`w-full py-3 rounded-xl font-medium transition-colors
                    ${channel.isPrimary 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                >
                  {channel.action}
                </button>
              </div>
            ))}
          </div>

          {/* Download App CTA */}
          <div className="text-center">
            <button className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 
              rounded-xl font-medium hover:bg-yellow-300 transition-all duration-300 group">
              <Download className="w-5 h-5 mr-2" />
              <span>Download Swift! Driver App</span>
            </button>
            <p className="text-gray-400 mt-4">
              Available on iOS and Android
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Swift<span className="text-yellow-400">!</span>
                </h3>
                <p className="text-gray-600 mt-2">
                  South Africa&apos;s most innovative e-hailing service, committed to safety,
                  reliability, and driver success.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>0800 SWIFT SA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>support@swift.co.za</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gray-900 font-semibold mb-4 uppercase text-sm">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.title}>
                      <Link 
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Swift! All rights reserved.
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GetStartedAndFooter;
