'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Car,
  Shield,
  Download,
  Search,
  BadgeCheck,
  AlertCircle,
} from 'lucide-react';

const DriverResourcesSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'training', label: 'Training' },
    { id: 'safety', label: 'Safety' },
    { id: 'operations', label: 'Operations' },
    { id: 'compliance', label: 'Compliance' },
  ];

  const resources = [
    {
      title: 'Driver Onboarding Guide',
      category: 'training',
      type: 'PDF',
      size: '2.4 MB',
      lastUpdated: 'December 2024',
      description: 'Complete guide for new Swift! drivers',
      essential: true,
      filePath: '/files/driver-onboarding-guide.pdf', // Replace with actual path
      icon: <BookOpen className="w-6 h-6" />,
      sections: [
        'Platform Introduction',
        'App Navigation',
        'Earnings Structure',
        'Service Standards',
      ],
    },
    {
      title: 'Vehicle Standards Manual',
      category: 'compliance',
      type: 'PDF',
      size: '1.8 MB',
      lastUpdated: 'December 2024',
      description: 'Vehicle requirements and maintenance standards',
      essential: true,
      filePath: '/files/vehicle-standards-manual.pdf', // Replace with actual path
      icon: <Car className="w-6 h-6" />,
      sections: [
        'Vehicle Requirements',
        'Maintenance Schedule',
        'Inspection Checklist',
        'Cleaning Standards',
      ],
    },
    {
      title: 'Security Protocols Handbook',
      category: 'safety',
      type: 'PDF',
      size: '3.1 MB',
      lastUpdated: 'December 2024',
      description: 'Comprehensive security guidelines and procedures',
      essential: true,
      filePath: '/files/security-protocols-handbook.pdf', // Replace with actual path
      icon: <Shield className="w-6 h-6" />,
      sections: [
        'Emergency Procedures',
        'Armed Response Integration',
        'Panic Button Usage',
        'Incident Reporting',
      ],
    },
    {
      title: 'Professional Conduct Guide',
      category: 'training',
      type: 'PDF',
      size: '1.5 MB',
      lastUpdated: 'December 2024',
      description: 'Professional standards and customer service',
      essential: true,
      filePath: '/files/professional-conduct-guide.pdf', // Replace with actual path
      icon: <BadgeCheck className="w-6 h-6" />,
      sections: [
        'Customer Service Excellence',
        'Communication Guidelines',
        'Conflict Resolution',
        'Dress Code',
      ],
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      (activeCategory === 'all' || resource.category === activeCategory) &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDownload = (filePath: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'download';
    link.click();
  };

  return (
    <section className="bg-white py-24" id='download'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Driver Resources</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Essential Documents & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all the resources you need to succeed as a Swift! driver. From training
            materials to security protocols, everything you need in one place.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 
                  focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all
                    ${
                      activeCategory === category.id
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-yellow-400 rounded-xl p-4 inline-flex">
                  {resource.icon}
                </div>
                {resource.essential && (
                  <span className="inline-flex items-center bg-yellow-400/10 rounded-full px-3 py-1">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mr-1" />
                    <span className="text-sm font-medium text-yellow-600">
                      Essential
                    </span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>

              <p className="text-gray-600 mb-6">{resource.description}</p>

              {/* Sections Preview */}
              <div className="mb-6 space-y-2">
                {resource.sections.map((section, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                    {section}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  <span className="mr-4">
                    {resource.type} · {resource.size}
                  </span>
                  <span>Updated: {resource.lastUpdated}</span>
                </div>
                <button
                  onClick={() => handleDownload(resource.filePath)}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 
                  font-medium transition-colors group"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverResourcesSection;
