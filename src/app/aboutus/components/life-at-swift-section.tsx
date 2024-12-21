'use client';

import React, { useState } from 'react';
import {
  Smile,
  Trophy,
  Brain,
  Heart,
  CheckCircle
} from 'lucide-react';

// Define the types for the benefit categories
type BenefitCategory = 'culture' | 'benefits' | 'growth' | 'wellness';

const LifeAtSwiftSection = () => {
  // Define the active category state with proper typing
  const [activeCategory, setActiveCategory] = useState<BenefitCategory>('culture');
  const [picurl, setpicurl] = useState('/culture.jpg')
  // Define the categories
  const categories = [
    { id: 'culture', label: 'Culture' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'growth', label: 'Growth' },
    { id: 'wellness', label: 'Wellness' },
  ];

  function handleClick(id: string) {
    setActiveCategory(id as BenefitCategory);
    switch (id) {

      case 'culture':
        setpicurl('/culture.jpg')
        break;
      case 'benefits':
        setpicurl('/benefit.jpg')
        break;
      case 'growth':
        setpicurl('/growth.jpg')
        break;
      default:
        setpicurl('/wellness.jpg')
        break;
    }
  }
  // Define the culture highlights
  const cultureHighlights = [
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Work-Life Harmony",
      description: "Flexible work arrangements that respect your personal time",
      color: "bg-green-400",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Recognition",
      description: "Regular appreciation and rewards for exceptional performance",
      color: "bg-yellow-400",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation First",
      description: "Freedom to bring new ideas and drive meaningful change",
      color: "bg-blue-400",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Impact",
      description: "Make a real difference in South African communities",
      color: "bg-red-400",
    },
  ];

  // Define the benefits object with proper typing
  const benefits: Record<BenefitCategory, string[]> = {
    culture: [
      "Inclusive workplace environment",
      "Regular team building events",
      "Cross-functional collaboration",
      "Open door policy",
      "Recognition programs",
    ],
    benefits: [
      "Competitive salary packages",
      "Performance bonuses",
      "Medical aid contribution",
      "Retirement benefits",
      "Travel allowance",
    ],
    growth: [
      "Professional development programs",
      "Leadership training",
      "Skills workshops",
      "Mentorship opportunities",
      "Career advancement paths",
    ],
    wellness: [
      "Mental health support",
      "Fitness program allowance",
      "Work-life balance policies",
      "Wellness days",
      "Health and safety protocols",
    ],
  };

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 
          bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 
          bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-400 font-medium">Life at Swift!</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Innovation Meets
            <span className="text-yellow-400"> Purpose</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join a dynamic team passionate about transforming transportation in South Africa
            while building an exceptional workplace.
          </p>
        </div>

        {/* Culture Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {cultureHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 
                hover:border-yellow-400/50 transition-all duration-300 group"
            >
              <div className={`${highlight.color} rounded-xl p-4 inline-flex mb-6`}>
                {React.cloneElement(highlight.icon, { className: "text-black" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 
                transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Benefits Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              {/* Category Selection */}
              <div className="flex flex-wrap gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleClick(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all
                      ${activeCategory === category.id
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits[activeCategory].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-full min-h-[400px]">
              <img
                src={picurl}
                alt="Life at Swift"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtSwiftSection;
