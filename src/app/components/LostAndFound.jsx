import React from "react";
import { Search, Package, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Easy Reporting",
    description: "Report your lost item through the app with just a few taps",
    details: ["Quick and simple", "Intuitive interface", "Available 24/7"],
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Secure Storage",
    description: "Items safely stored at designated Swift! Collection Points",
    details: ["Monitored locations", "Secure packaging", "Accessible facilities"],
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Quick Recovery",
    description: "Regular collection runs ensure items are quickly secured",
    details: ["Frequent pickups", "Reliable processes", "Minimal delays"],
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Convenient Collection",
    description: "Multiple Collection Points across major cities",
    details: ["Wide coverage", "Easy navigation", "Extended hours"],
  },
];

const steps = [
  {
    number: "01",
    title: "Report Lost Item",
    description: "Use the Swift! app to report your lost item with trip details",
  },
  {
    number: "02",
    title: "We Track & Collect",
    description: "Our support team locates and secures your item",
  },
  {
    number: "03",
    title: "Item Secured",
    description: "Item is taken to the nearest Swift! Collection Point",
  },
  {
    number: "04",
    title: "Ready for Pickup",
    description: "Collect your item at your convenience",
  },
];

const LostAndFoundSection = () => {
  return (
    <div className="w-full bg-gray-50 pt-8 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Swift<span className="text-yellow-400">!</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how we make it easy to recover your lost items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="bg-yellow-400 rounded-2xl p-4 inline-flex items-center justify-center mb-6">
                {React.cloneElement(feature.icon, { className: "w-8 h-8 text-gray-900" })}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>

              {/* Details List */}
              <ul className="space-y-4">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Steps Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Follow these steps to recover your lost item seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-yellow-400 text-4xl font-bold mb-4">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundSection;
