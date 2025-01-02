'use client'

import React from 'react';
import { 
  Users, 
  Heart, 
  HandHeart,
  Orbit,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const EqualOpportunitiesSection = () => {
  const commitments = [
    {
      title: "Gender Equality",
      description: "Committed to achieving equal representation and opportunities across all levels",
      metrics: [
        "45% female representation target",
        "Equal pay for equal work",
        "Women leadership programs",
        "Female driver support initiatives"
      ]
    },
    {
      title: "Inclusive Workplace",
      description: "Creating an environment where everyone feels welcomed, valued, and heard",
      metrics: [
        "Diversity training programs",
        "Inclusive hiring practices",
        "Accessible facilities",
        "Multi-language support"
      ]
    },
    {
      title: "Youth Development",
      description: "Investing in South Africa's youth through employment and training",
      metrics: [
        "Graduate programs",
        "Skills development",
        "Internship opportunities",
        "Youth mentorship"
      ]
    }
  ];

  const initiatives = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Diversity Champions",
      description: "Internal advocacy group promoting workplace inclusivity"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Programs",
      description: "Partnerships with local organizations for skills development"
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Support Networks",
      description: "Employee resource groups for networking and support"
    },
    {
      icon: <Orbit className="w-6 h-6" />,
      title: "Fair Practices",
      description: "Transparent hiring and promotion processes"
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Equal Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Embracing Diversity, Driving
            <span className="text-yellow-400"> Change</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Swift!, we believe in creating opportunities for all South Africans. Our commitment to 
            diversity and inclusion drives innovation and strengthens our community.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {commitment.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {commitment.description}
              </p>
              <ul className="space-y-3">
                {commitment.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Statement Section */}
        <div className="bg-black rounded-3xl overflow-hidden mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16">
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Commitment to South Africa
              </h3>
              <p className="text-gray-300 mb-8">
                We&apos;re dedicated to creating meaningful employment opportunities that reflect 
                the diversity of our nation. Through inclusive hiring practices and continuous 
                development programs, we&apos;re building a workforce that represents all South Africans.
              </p>
              <ul className="space-y-4">
                {[
                  "Employment Equity compliant",
                  "Skills Development focused",
                  "Local community partnerships"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[400px]">
              <img
                src="commitment.jpg" 
                alt="Diversity at Swift"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {initiatives.map((initiative, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(initiative.icon, { className: "text-black" })}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h4>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Diverse Team
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Be part of a company that values your unique perspective and contribution. 
            We&apos;re always looking for talented individuals to join our team.
          </p>
          <button className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl 
            font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 group">
            <Link href='/careers'>View Opportunities</Link>
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EqualOpportunitiesSection;
