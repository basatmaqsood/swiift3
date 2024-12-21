'use client'
import React, { useEffect, useState } from 'react';
import { Briefcase, TrendingUp, Users, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

const jobCategories = [
  {
    title: "Safety Officers",
    description: "Armed response and emergency support specialists",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Operations",
    description: "Support roles ensuring smooth service delivery",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "Customer Support",
    description: "Dedicated team providing excellent service",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Management",
    description: "Leadership roles driving growth and innovation",
    icon: <Briefcase className="w-8 h-8" />
  }
];

const MissionSection = () => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const counterElement = document.getElementById('counter-section');
    if (counterElement) observer.observe(counterElement);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const duration = 2000; // Animation duration in ms
      const steps = 50; // Number of steps for the counter
      const increment = 1000 / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= 1000) {
          setCount(1000);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <div className="bg-gray-50 py-16 px-4" id="counter-section">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mission at Swift<span className="text-yellow-400">!</span>
          </h2>
          <p className="text-lg text-gray-600">
            Empowering people with secure, reliable, and efficient services.
          </p>
        </div>

        {/* Counter */}
        <div className="text-center mb-16">
          <h4 className='text-3xl font-md text-gray-700'>We aim to Create</h4>
          <h3 className="text-6xl font-bold text-yellow-400 my-2">
            {count}+
          </h3>
          <p className="text-3xl text-gray-700">
            Jobs
          </p>
        </div>

        {/* Job Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="bg-yellow-400 rounded-2xl p-4 inline-flex items-center justify-center mb-6">
                {React.cloneElement(category.icon, { className: "text-gray-900" })}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="/careers"
            className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Join Our Team
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
