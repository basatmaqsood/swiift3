// ServicesSection.jsx
import React from 'react';
import { Car, Shield, Package, ShieldAlert } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Rides",
      description: "Affordable, request in seconds, ride in minutes",
      features: ["Quick pickup", "Fixed pricing", "24/7 availability"]
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Swift! Security",
      description: "24/7 emergency services for riders and drivers",
      features: ["Armed response", "Vehicle tailing", "Incident management"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Parcel Deliveries",
      description: "For parcels less than 20kg's and worth less than R2000.00",
      features: ["Real-time tracking", "Secure handling", "Swift delivery"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Vehicles",
      description: "Latest model vehicles maintained to the highest standards",
      features: ["Regular inspections", "Clean vehicles", "Air-conditioned"]
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Swift<span className="text-yellow-400">!</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the difference with our premium features
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="bg-yellow-400 rounded-2xl p-4 inline-flex items-center justify-center mb-6">
                {React.cloneElement(service.icon, { 
                  className: "w-8 h-8 text-gray-900" 
                })}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
