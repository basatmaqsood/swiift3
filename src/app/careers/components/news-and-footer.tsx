
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
      { title: 'About Us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/press' },
      { title: 'Blog', href: '/blog' }
    ],
    partners: [
      { title: 'Become a Driver', href: '/drive' },
      { title: 'Fleet Solutions', href: '/fleet' },
      { title: 'Security Services', href: '/security' },
      { title: 'Business Travel', href: '/business' }
    ],
    safety: [
      { title: 'Safety Center', href: '/safety' },
      { title: 'Insurance', href: '/insurance' },
      { title: 'COVID-19 Response', href: '/covid' },
      { title: 'Emergency Support', href: '/emergency' }
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
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
              <span className="text-gray-900 font-medium">Latest Updates</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              News & Updates<span className="text-yellow-400">.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about Swift&apos;s latest developments, community initiatives, and security updates
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all
                  ${activeCategory === category.id 
                    ? 'bg-yellow-400 text-black' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {newsItems
              .filter(item => activeCategory === 'all' || item.category === activeCategory)
              .map((item) => (
                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    
                    <button className="text-yellow-400 font-medium inline-flex items-center hover:text-yellow-500 transition-colors group">
                      Read Full Story
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
            ))}
          </div>

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
                </div>
              </div>

              <div className="relative lg:h-[600px] p-8 flex items-center justify-center">
                <img 
                  src="/desktop.webp" 
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

export default NewsAndFooter;
