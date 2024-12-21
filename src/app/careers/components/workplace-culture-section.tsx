'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Globe, Heart, Building } from 'lucide-react';

const WorkplaceCultureSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const workspaceFeatures = [
    {
      image: "/workspace.jpg",
      title: "Modern Workspaces",
      description: "State-of-the-art facilities designed for collaboration and innovation"
    },
    {
      image: "/centers.jpg",
      title: "Wellness Centers",
      description: "Dedicated spaces for mental and physical well-being"
    },
    {
      image: "/hubs.jpg",
      title: "Learning Hubs",
      description: "Continuous learning and development spaces"
    }
  ];

  const stats = [
    { number: "45%", label: "Female Leadership" },
    { number: "90%", label: "Employee Satisfaction" },
    { number: "100%", label: "Pay Equity" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workspaceFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workspaceFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workspaceFeatures.length) % workspaceFeatures.length);
  };

  const initiatives = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusive Culture",
      description: "Creating an environment where everyone belongs and thrives"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "South African Values",
      description: "Embracing and celebrating our diverse South African heritage"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Employee Well-being",
      description: "Comprehensive programs supporting work-life harmony"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Growth Focus",
      description: "Clear career paths and development opportunities"
    }
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Our Workplace</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Where Innovation Meets
            <span className="text-yellow-400"> Inclusivity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building world-class spaces where South African talent collaborates to create extraordinary solutions
          </p>
        </div>

        {/* Workspace Slider */}
        <div className="relative mb-16 group">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/9]">
              <div
                className="absolute w-full h-full transition-transform duration-500 ease-out flex"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {workspaceFeatures.map((feature, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <div className="relative w-full h-full">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-200">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {workspaceFeatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-yellow-400 w-4' : 'bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(initiative.icon, { className: "text-gray-900" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkplaceCultureSection;
