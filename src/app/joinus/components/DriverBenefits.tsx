'use client'
import React from 'react';
import { Shield, Percent, Users, Car,  CircleDollarSign, BadgeHelp, ArrowRight } from 'lucide-react';

const DriverBenefits = () => {
  const mainBenefits = [
    {
      icon: <Percent className="w-8 h-8" />,
      title: "Higher Earnings",
      description: "Optimized rates and lower commissions mean more money in your pocket. Keep more of what you earn with Swift!",
      highlights: [
        "Lower commission rates",
        "Optimized pricing",
        "Better earnings potential"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Security",
      description: "Your safety is our priority. Drive with confidence knowing our armed response unit is ready to assist.",
      highlights: [
        "Armed response unit",
        "Emergency support",
        "Women driver protection"
      ]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Vehicle Support",
      description: "Never get stranded again. Access comprehensive vehicle support to keep you moving.",
      highlights: [
        "Roadside assistance",
        "Free battery charging",
        "Vehicle inspections"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-black/5 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Join Our Growing Team</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Drivers Choose
            <span className="text-yellow-400"> Swift!</span>
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference with better earnings, comprehensive support, and unmatched security features.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-black/5"
            >
              <div className="bg-black rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(benefit.icon, { className: "text-yellow-400" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-3">
                {benefit.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support Showcase */}
        <div className="bg-black rounded-3xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 w-auto lg:h-auto">
              <img
                src='support.jpg'
                alt="Swift Support Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-2 mb-6">
                <BadgeHelp className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Swift! Driver Support</h3>
              </div>

              <p className="text-gray-300 mb-8">
                Our dedicated support team is available 24/7 to ensure you&apos;re never alone on the road. From security to mechanical assistance, we&apos;ve got you covered.
              </p>

              {/* Support Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/10 rounded-lg p-2">
                    <Car className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Vehicle Support</h4>
                    <p className="text-gray-400 text-sm">Never worry about breakdowns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/10 rounded-lg p-2">
                    <CircleDollarSign className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Roadside Support</h4>
                    <p className="text-gray-400 text-sm">Quick assistance when you need it</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/10 rounded-lg p-2">
                    <Shield className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Armed Response</h4>
                    <p className="text-gray-400 text-sm">Enhanced security for your safety</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/10 rounded-lg p-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Women Driver Support</h4>
                    <p className="text-gray-400 text-sm">Specialized security measures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-black rounded-2xl p-1">
            <button 
              onClick={() => window.location.href = '/joinus#registerForm'}
              className="group bg-black hover:bg-yellow-400 text-white hover:text-black px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Your Application</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-gray-600 mt-4">
            Join thousands of satisfied drivers who chose Swift!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DriverBenefits;
