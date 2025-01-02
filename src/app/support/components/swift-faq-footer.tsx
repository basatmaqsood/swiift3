'use client'
import React, { useState } from 'react';
import { 
  ChevronDown,
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin,
  CarFront,
  User
} from 'lucide-react';
import Link from 'next/link';

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

const FAQSection = () => {
  const [activeRiderFaq, setActiveRiderFaq] = useState<number | null>(null);
  const [activeDriverFaq, setActiveDriverFaq] = useState<number | null>(null);

  const riderFaqs = [
    {
      question: "How do I track my ride in real-time?",
      answer: "Open your Swift! app and tap on your active ride. You'll see the driver's location updated in real-time on the map. You can also share your trip status with trusted contacts for added safety."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Swift! accepts credit/debit cards, mobile wallet payments, and cash. You can manage your payment methods in the app under Payment Options."
    },
    {
      question: "How do I report a lost item?",
      answer: "In the app, go to Trip History, select the relevant trip, and tap 'Report Lost Item'. Our support team will assist in connecting you with your driver."
    },
    {
      question: "How does Swift! ensure passenger safety?",
      answer: "We implement multiple safety features including driver verification, real-time trip tracking, emergency assistance button, and our dedicated Swift! Security response unit."
    }
  ];

  const driverFaqs = [
    {
      question: "How do I track my earnings?",
      answer: "Access your earnings dashboard in the Driver App under 'Earnings'. View daily, weekly, and monthly summaries, including bonuses and incentives."
    },
    {
      question: "What support is available during rides?",
      answer: "Swift! provides 24/7 driver support, including emergency assistance, Swift! Security response unit, and roadside assistance through our Driver Support Network."
    },
    {
      question: "How do I maintain my driver rating?",
      answer: "Maintain a high rating by providing excellent service, keeping your vehicle clean, following route guidance, and maintaining professional conduct."
    },
    {
      question: "What are the vehicle requirements?",
      answer: "Vehicles must be no older than 7 years, pass DERKA inspection, have valid insurance, and maintain regular service records. View full requirements in the Driver Portal."
    }
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Find answers to common questions about using Swift!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rider FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-yellow-400/10 rounded-lg p-2 mr-3">
                  <User className="w-5 h-5 text-yellow-400" />
                </span>
                For Riders
              </h3>
              <div className="space-y-4">
                {riderFaqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveRiderFaq(activeRiderFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="font-medium text-white">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          activeRiderFaq === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeRiderFaq === index && (
                      <div className="px-6 py-4 border-t border-gray-700/50 text-gray-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Driver FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-yellow-400/10 rounded-lg p-2 mr-3">
                  <CarFront className="w-5 h-5 text-yellow-400" />
                </span>
                For Drivers
              </h3>
              <div className="space-y-4">
                {driverFaqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveDriverFaq(activeDriverFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                    >
                      <span className="font-medium text-white">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          activeDriverFaq === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDriverFaq === index && (
                      <div className="px-6 py-4 border-t border-gray-700/50 text-gray-300">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


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

export default FAQSection;
