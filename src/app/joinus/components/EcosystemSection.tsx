"use client";

import React from "react";
import {
  Car,
  ShieldCheck,
  Gift,
  Users,
  Award,
  CheckCircle,
  CarFront,
  Timer,
} from "lucide-react";

const EcosystemSection = () => {
  const ecosystemBenefits = [
    {
      icon: <Car />,
      title: "Professional Car Care",
      description:
        "Keep your vehicle in pristine condition with two complimentary car washes every month",
      highlight: "2 FREE car washes monthly",
    },
    {
      icon: <ShieldCheck />,
      title: "Secure Parking & Support",
      description:
        "Access to secure parking facilities and dedicated breakdown zones for vehicle safety",
      highlight: "24/7 secure facilities",
    },
    {
      icon: <Gift />,
      title: "Loyalty Rewards",
      description:
        "Exclusive rewards program for full-time drivers with carefully selected meaningful benefits",
      highlight: "Monthly reward milestones",
    },
    {
      icon: <Users />,
      title: "Support Network",
      description:
        "Comprehensive support system designed to meet all your needs as a Swift! driver",
      highlight: "Complete driver care",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Swift! Ecosystem</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            More Than Just a Platform,
            <span className="text-yellow-400"> It&apos;s a Community</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join our ecosystem of support and benefits designed to help you
            succeed on the road.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ecosystemBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-black/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-black rounded-xl p-4 inline-flex">
                  {React.cloneElement(benefit.icon, {
                    className: "w-6 h-6 text-yellow-400",
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="inline-flex items-center bg-yellow-400/10 rounded-full px-4 py-1">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-gray-900 font-medium text-sm">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qualification Section */}
        <div className="bg-black rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Qualification Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-2 mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">
                  Qualification Criteria
                </h3>
              </div>

              <p className="text-gray-300 mb-8">
                Access these exclusive benefits by meeting our simple
                qualification requirements and maintaining your active status.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/10 rounded-lg p-2">
                    <CarFront className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Initial Qualification
                    </h4>
                    <p className="text-gray-400">
                      Complete 100 rides on the Swift! platform
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400/10 rounded-lg p-2">
                    <Timer className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Maintain Eligibility
                    </h4>
                    <p className="text-gray-400">
                      Complete minimum 50 rides monthly
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-400/10 rounded-xl">
                <h4 className="text-white font-semibold mb-2">
                  Ready to Join?
                </h4>
                <p className="text-gray-400 text-sm">
                  Start your journey today and become part of the Swift!
                  ecosystem. Our community is waiting for dedicated drivers like
                  you.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <img
                src='qualification.png'
                alt="Swift Ecosystem Benefits"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
