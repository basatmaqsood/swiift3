
'use client'
import React, { useState } from 'react';
import { 
  Calendar,
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

const NewsAndFooter = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsCategories = [
    { id: 'all', label: 'All Updates' },
    { id: 'business', label: 'Business Updates' },
    { id: 'community', label: 'Community Impact' },
    { id: 'security', label: 'Security Updates' }
  ];

  const newsItems = [
    {
      id: 1,
      category: 'business',
      title: "Swift! Launches New Security Operations Center in Johannesburg",
      date: "November 15, 2024",
      image: "growth.jpg",
      description: "State-of-the-art facility to enhance rider and driver safety across Gauteng region",
      tag: "Operations"
    },
    {
      id: 2,
      category: 'community',
      title: "500 New Jobs Created Through Driver Partnership Program",
      date: "November 10, 2024",
      image: "/hubs.jpg",
      description: "Swift! continues to drive employment opportunities in local communities",
      tag: "Community"
    },
    {
      id: 3,
      category: 'security',
      title: "Enhanced Security Features Released for Night Rides",
      date: "November 5, 2024",
      image: "2.png",
      description: "New safety measures including real-time monitoring and rapid response integration",
      tag: "Safety"
    }
  ];

  const footerLinks = {
    company: [
      { title: 'About Us', href: '/aboutus' },
      { title: 'Careers', href: '/careers' },
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
    {/* 
     */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">


          {/* App Download Section */}
          <div className="bg-black rounded-3xl overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-12 lg:p-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Experience Swift<span className="text-yellow-400">!</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Download the app and join millions of South Africans who trust Swift! for safe, reliable rides.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                <button className=" hover:bg-yellow-400 transition-colors rounded-xl">
                    <img 
                      src="/appstore.jpg" 
                      alt="Play Store" 
                      className="w-auto h-12  "
                    />
                  </button>

                  <button className=" hover:bg-yellow-400 transition-colors rounded-xl">
                    <img 
                      src="/googleplay.png" 
                      alt="Play Store" 
                      className="w-auto h-12  "
                    />
                  </button>
                  <button className=" hover:bg-yellow-400 transition-colors rounded-xl">
                    <img 
                      src="huaweiStore.jpg" 
                      alt="Play Store" 
                      className="w-auto h-12  "
                    />
                  </button>
                </div>
              </div>

              <div className="relative lg:h-[600px] p-8 flex items-center justify-center">
                <img 
                  src="/downloadGirl.jpg" 
                  alt="Swift App Interface"
                  className="rounded-2xl h-full object-cover shadow-lg"
                />
              </div>
            </div>
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
                &copy; {new Date().getFullYear()} Swift! All rights reserved.
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
    </>
  );
};

export default NewsAndFooter;
