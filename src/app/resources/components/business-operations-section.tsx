'use client'
import React, { useState } from 'react';
import { 
  Wallet, 
  Clock, 
  CreditCard,
  Wrench,
  CheckCircle,
  BanknoteIcon,
} from 'lucide-react';

const BusinessOperationsSection = () => {
  const [activeRegion, setActiveRegion] = useState('johannesburg');
  console.log(activeRegion);
  const regions = {
    johannesburg: { status: 'Active', hours: '24/7', drivers: '5000+' },
    capetown: { status: 'Active', hours: '24/7', drivers: '3000+' },
    durban: { status: 'Active', hours: '24/7', drivers: '2000+' },
    pretoria: { status: 'Active', hours: '24/7', drivers: '1500+' }
  };

  const commissionStructure = [
    {
      title: "Standard Commission",
      rate: "20%",
      description: "Basic commission rate for all trips",
      features: [
        "Lower than industry average",
        "Transparent calculation",
        "Weekly settlements",
        "No hidden fees"
      ]
    },
    {
      title: "Peak Hours Bonus",
      rate: "5%",
      description: "Reduced commission during high demand",
      features: [
        "Morning rush (6AM-9AM)",
        "Evening rush (4PM-7PM)",
        "Weekend nights",
        "Special events"
      ]
    },
    {
      title: "Performance Rewards",
      rate:"",
      description: "Additional commission reductions",
      features: [
        "High rating bonus",
        "Completion rate rewards",
        "Long-term driver benefits",
        "Monthly incentives"
      ]
    }
  ];

  const paymentSystems = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "In-App Payments",
      description: "Secure digital transactions",
      features: [
        "Card payments",
        "Digital wallets",
        "QR code payments",
        "Contactless options"
      ]
    },
    {
      icon: <BanknoteIcon className="w-6 h-6" />,
      title: "Cash Handling",
      description: "Traditional payment option",
      features: [
        "Cash acceptance",
        "Change management",
        "Daily cash limits",
        "Security guidelines"
      ]
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Driver Wallet",
      description: "Earnings management system",
      features: [
        "Instant access",
        "Bank transfers",
        "Earning tracking",
        "Transaction history"
      ]
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Business & Operations</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Streamlined Operations for
            <span className="text-yellow-400"> Maximum Earnings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding our business model, payment systems, and operational procedures 
            to optimize your earnings and efficiency.
          </p>
        </div>

        {/* Commission Structure */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Industry-Leading Commission Structure
            </h3>
            <p className="text-gray-600">
              Transparent and competitive rates designed to maximize your earnings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commissionStructure.map((tier, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg 
                  transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-xl font-bold text-gray-900">{tier.title}</h4>
                  <span className="text-2xl font-bold text-yellow-400">{tier.rate}</span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Earnings Calculator Prompt */}
          <div className="mt-8 text-center">
            <button className="inline-flex items-center text-yellow-600 hover:text-yellow-700 
              font-medium group">
            </button>
          </div>
        </div>

        {/* Payment Systems */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible Payment Solutions
            </h3>
            <p className="text-gray-600">
              Multiple payment options ensuring smooth transactions and quick access to earnings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentSystems.map((system, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg 
                  transition-all duration-300"
              >
                <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                  {system.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{system.title}</h4>
                <p className="text-gray-600 mb-6">{system.description}</p>
                <ul className="space-y-3">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Maintenance & Operating Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Vehicle Maintenance */}
          <div className="bg-black rounded-2xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-yellow-400 rounded-xl p-4">
                <Wrench className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Vehicle Maintenance</h4>
                <p className="text-gray-400">Regular maintenance requirements and schedules</p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Weekly vehicle inspections required",
                "Partner workshop network available",
                "Maintenance tracking system",
                "Discounted service rates",
                "Emergency repair support"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>


          </div>

          {/* Operating Hours */}
          <div className="bg-yellow-400 rounded-2xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-black rounded-xl p-4">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Operating Hours</h4>
                <p className="text-yellow-900">Flexible hours with peak time incentives</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-black mb-2">Standard Hours</h5>
                <p className="text-yellow-900">24/7 Operation Available</p>
              </div>

              <div>
                <h5 className="font-semibold text-black mb-2">Peak Hours (Higher Earnings)</h5>
                <ul className="space-y-2">
                  {[
                    "Weekday Mornings: 06:00 - 09:00",
                    "Weekday Evenings: 16:00 - 19:00",
                    "Friday & Saturday Nights: 18:00 - 02:00",
                    "Special Events & Holidays"
                  ].map((time, index) => (
                    <li key={index} className="flex items-center text-yellow-900">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                      {time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Coverage Areas
              </h3>
              <p className="text-gray-400">
                Expanding network of operations across major South African cities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(regions).map(([region, data]) => (
                <div 
                  key={region}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all 
                    duration-300 cursor-pointer"
                  onClick={() => setActiveRegion(region)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white capitalize">
                      {region}
                    </h4>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                      <span className="text-green-400 text-sm">{data.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-400">
                      <span>Operating Hours</span>
                      <span>{data.hours}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Active Drivers</span>
                      <span>{data.drivers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage Map Placeholder */}
            <div className="mt-8 bg-gray-800 rounded-xl p-4 text-center">
              <div className="aspect-[16/9] relative">
                <img
                  src="/map.jpg" 
                  alt="Coverage Map"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Interactive Coverage Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOperationsSection;
