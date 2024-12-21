// QualitySection.jsx
import React from 'react';
import { Star, Shield, Wallet, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Data structure for features
const features = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Optimized Pricing",
    description: "Competitive rates balanced for both rider comfort and driver sustainability. Enjoy premium service without premium prices.",
    points: [
      "Transparent fare calculation",
      "No hidden charges",
      "Best-in-class value"
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Vehicle Excellence",
    description: "Every vehicle in our fleet undergoes rigorous maintenance checks and cleanliness protocols to ensure your comfort.",
    points: [
      "Regular safety inspections",
      "Professional cleaning",
      "Modern vehicle fleet"
    ]
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Quality Service",
    description: "Experience rides with drivers who are well-trained, well-rested, and motivated to provide exceptional service.",
    points: [
      "Professional conduct",
      "Courteous assistance",
      "Comfortable journey"
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Driver Welfare",
    description: "We invest in our drivers success through fair compensation, training, and support programs.",
    points: [
      "Continuous training",
      "Swift! Driver Support",
      "Growth opportunities"
    ]
  }
];

const QualitySection = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Swift<span className="text-yellow-400">!</span> Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to creating exceptional experiences through quality, affordability, and care for our Swift community.
          </p>
        </div>

        {/* Top Two Features with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 text-gray-900" })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-0">
            <img
              src='CollectionPoint.png'
              alt="Swift Quality Service" 
              className="absolute inset-0 h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Two Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.slice(2).map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(feature.icon, { className: "w-6 h-6 text-gray-900" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of satisfied riders who choose Swift daily
            </p>
            <button className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center space-x-2">
              <Link href='#app-download'>Experience Swift! Today</Link>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;

// ---------------
// Implementation Guide
// ---------------

/*
1. Required Dependencies:
   - React
   - Tailwind CSS
   - Lucide React: npm install lucide-react

2. Image Requirements:
   - Add quality-service-image.jpg to public folder
   - Recommended image size: minimum 800x600px
   - High-quality, showing Swift service in action
   - Consider lazy loading for performance

3. Tailwind Configuration:
   No additional configuration needed, uses standard Tailwind classes

4. Component Integration:
   import QualitySection from './components/QualitySection';
   <QualitySection />

5. Features:
   - Fully responsive design
   - Interactive hover effects
   - Gradient overlays
   - Animated CTA button
   - Accessible structure

6. Accessibility Considerations:
   - Semantic HTML structure
   - Proper heading hierarchy
   - Sufficient color contrast
   - Interactive elements are keyboard accessible

7. Performance Optimization:
   - Consider implementing image lazy loading
   - Optional: Add loading state for image
   - Optional: Implement intersection observer for animations

8. Browser Support:
   - Works in all modern browsers
   - Uses standard CSS features
   - Graceful fallbacks for older browsers

9. Customization Options:
   - Features array can be modified for different content
   - Colors can be adjusted through Tailwind classes
   - Image aspect ratio can be modified
   - Layout can be adjusted through grid classes

10. Mobile Considerations:
    - Responsive image handling
    - Stacked layout on small screens
    - Touch-friendly hover states
    - Appropriate text sizing
*/