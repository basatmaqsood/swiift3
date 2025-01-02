'use client'

import React from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    company: [
      { title: 'About Us', href: '/aboutus' },
      { title: 'Careers', href: '/careers' },
      // { title: 'Press', href: '/#' },
      // { title: 'Blog', href: '/#' }
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
                South Africa&apos;s most innovative e-hailing service.               </p>
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

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
