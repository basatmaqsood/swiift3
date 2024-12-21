'use client';

import React from 'react';
import { 
  FileText, 
  Shield, 
  Lock, 
  FileCheck,
  Download,
  ChevronRight,
  Scale,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const PoliciesSection = () => {
  const policies = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Terms & Conditions",
      description: "General terms of service and platform usage guidelines",
      category: "Legal",
      lastUpdated: "December 2024"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your data",
      category: "Privacy",
      lastUpdated: "December 2024"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Policy",
      description: "Our commitment to your safety and security",
      category: "Safety",
      lastUpdated: "December 2024"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Driver Policy",
      description: "Guidelines and requirements for Swift! drivers",
      category: "Operations",
      lastUpdated: "December 2024"
    }
  ];

  const quickLinks = [
    "Cookie Policy",
    "Refund Policy",
    "Insurance Coverage",
    "Community Guidelines",
    "Safety Standards",
    "Driver Requirements"
  ];

  return (
    <section>
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] mb-24">
        <div className="absolute inset-0">
          
          <img 
            src="/transparency.jpg" 
            alt="Swift Policy Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-white/20">
                  {[...Array(12)].map((_, j) => (
                    <div key={j} className="border-b border-white/20 h-24" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center w-full">
            <div className="inline-block bg-yellow-400/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-yellow-400 font-medium">Our Policies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparency & Trust
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access and review our comprehensive policies. We believe in complete transparency 
              and maintaining the highest standards of service.
            </p>
          </div>
        </div>
      </div>

      {/* Policies Content Section */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {policies.map((policy, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 
                  hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-yellow-400 rounded-xl p-4 inline-flex">
                    {React.cloneElement(policy.icon, { className: "text-black" })}
                  </div>
                  <span className="text-yellow-400 text-sm">{policy.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {policy.title}
                </h3>
                
                <p className="text-gray-400 mb-6 min-h-[60px]">
                  {policy.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Updated: {policy.lastUpdated}
                  </span>
                  <button className="inline-flex items-center text-yellow-400 hover:text-yellow-300 
                    transition-colors group">
                    <Link href='/resources'>Read</Link>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links & Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

            {/* Need Help Box */}
            <div className="bg-yellow-400 rounded-2xl p-8 w-max">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-black rounded-xl p-3">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Need Help?</h3>
                  <p className="text-gray-800">
                    Our support team is available 24/7 to help you understand our policies
                  </p>
                </div>
              </div>
              <Link href='/support' className="w-full bg-black text-white px-6 py-3 rounded-xl font-medium 
                hover:bg-gray-900 transition-colors flex items-center justify-center">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Download All Section */}
          {/* <div className="text-center">
            <button className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 
              rounded-xl font-medium hover:bg-yellow-300 transition-all duration-300 group">
              <Download className="w-5 h-5 mr-2" />
              <span>Download All Policies</span>
            </button>
            <p className="text-gray-400 mt-4">
              Available in PDF format
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PoliciesSection;
