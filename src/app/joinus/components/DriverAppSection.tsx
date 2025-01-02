'use client'

import React from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
const DriverAppSection = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Live Earnings",
      description: "Track your earnings in real-time"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Access support & security anytime"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Drive whenever it suits you"
    }
  ];

  const footerLinks = {
    company: [
      { title: 'About Us', href: '/aboutus' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/#' },
      { title: 'Blog', href: '/#' }
    ],
    legal: [
      { title: 'Terms of Service', href: '/resources#terms' },
      { title: 'Privacy Policy', href: '/resources#privacy' },
      { title: 'Cookie Policy', href: '/resources#privacy' },
      { title: 'Disclaimer', href: '/resources#insurance' }
    ],
    support: [
      { title: 'Help Center', href: '/support' },
      { title: 'Safety', href: '/support' },
      { title: 'Lost & Found', href: '/support' },
      { title: 'Contact Us', href: '/support' }
    ],
    cities: [
      { title: 'Johannesburg', href: '/careers#positions' },
      { title: 'Cape Town', href: '/careers#positions' },
      { title: 'Durban', href: '/careers#positions' },
      { title: 'Pretoria', href: '/careers#positions' }
    ]
  };

  return (
    <>
      {/* App Download Section */}
      <section className="bg-black py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Earning With The
                <span className="text-yellow-400"> Swift! </span>
                Driver App
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join South Africa&apos;s fastest-growing e-hailing platform. Download the Swift! Driver app and start earning on your own terms.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="bg-yellow-400 rounded-lg p-2 inline-flex mb-3">
                      {React.cloneElement(feature.icon, { className: "text-black" })}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Download Buttons - Side by side */}
              <div className="flex items-center space-x-4">
                {/* App Store Button */}
                <a href="#">
                  <img
                    src='appstore.jpg'
                    alt="App Store" 
                    width={165}
                    height={48}
                  />
                  
                </a>

                {/* Play Store Button */}
                <a href="#">
                  <img
                    src='googleplay.png'
                    alt="Play Store" 
                    width={165}
                    height={48}
                  />
                  </a>
                  <a href='#' className=" hover:bg-yellow-400 transition-colors rounded-xl">
                    <img 
                      src="huaweiStore.jpg" 
                      alt="Play Store" 
                      className="w-auto h-12  "
                    />
                  </a>
              </div>
            </div>

            {/* App Preview Image */}
            <div className="relative">
              {/* <div className="aspect-auto  backdrop-blur-sm rounded-3xl overflow-hidden"> */}
                <div className=" flex items-center justify-center">
                  
                </div>
                {/* Actual image will replace this placeholder */}
                < img
                  src = 'DriverApp.png'
                  alt="Swift Driver App" 
                  className="w-full h-full object-cover"
                />
              </div>
            {/* </div> */}
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
                  South Africa&apos;s most innovative e-hailing service.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>0800 SWIFT SA</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>info@swift.co.za</span>
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
                      <a 
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.title}
                      </a>
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
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DriverAppSection;
