'use client'

import React from 'react';
import {
  Siren,
  AlertTriangle,
  CheckCircle,
  Target,
  Bell,
  Eye,
  Clock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const SafetySecuritySection = () => {



  const securityFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Armed Response",
      status: "Active",
      description: "24/7 armed response units strategically positioned across coverage areas",
      features: [
        "< 5 minute response time",
        "GPS tracked units",
        "Trained security personnel",
        "Direct dispatch system"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Live Monitoring",
      status: "Operational",
      description: "Real-time trip monitoring and threat detection system",
      features: [
        "24/7 control room",
        "AI threat detection",
        "Route monitoring",
        "Area risk assessment"
      ]
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Alert System",
      status: "Online",
      description: "Multi-channel emergency alert and response system",
      features: [
        "In-app panic button",
        "Silent alarm feature",
        "Automated alerts",
        "Location tracking"
      ]
    }
  ];

  const emergencyProcedures = [
    {
      type: "Vehicle Breakdown",
      steps: [
        "Pull over to a safe location",
        "Activate hazard lights",
        "Press the 'Assistance' button in app",
        "Wait in vehicle with doors locked",
        "Follow control room instructions"
      ],
      responseTime: "15-20 minutes"
    },
    {
      type: "Security Threat",
      steps: [
        "Press panic button immediately",
        "Lock all doors",
        "Keep control room updated",
        "Follow armed response instructions",
        "Do not engage with threats"
      ],
      responseTime: "3-5 minutes"
    },
    {
      type: "Medical Emergency",
      steps: [
        "Press emergency medical button",
        "Park in a safe, accessible location",
        "Share exact location with control room",
        "Administer first aid if qualified",
        "Wait for medical response"
      ],
      responseTime: "8-12 minutes"
    }
  ];

  const safetyTips = [
    {
      category: "General Safety",
      tips: [
        "Always verify rider identity",
        "Keep doors locked during trips",
        "Maintain vehicle in good condition",
        "Keep emergency numbers saved",
        "Stay in well-lit areas when waiting"
      ]
    },
    {
      category: "Night Operations",
      tips: [
        "Use extra verification steps",
        "Stay in authorized operating areas",
        "Maintain regular check-ins",
        "Keep vehicle well-lit",
        "Use recommended waiting spots"
      ]
    },
    {
      category: "High-Risk Areas",
      tips: [
        "Follow area-specific protocols",
        "Maintain constant communication",
        "Use designated safe routes",
        "Enable enhanced monitoring",
        "Report suspicious activity"
      ]
    }
  ];

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
            <span className="text-yellow-400 font-medium">Safety & Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Safety is Our
            <span className="text-yellow-400"> Priority</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive safety features and protocols designed to protect our drivers
            and riders across South Africa.
          </p>
        </div>

        {/* Emergency Contacts Banner */}
        <div className="bg-red-500 rounded-2xl p-6 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10">
            <div className="flex items-center">
              <Siren className="w-8 h-8 text-white mr-4" />
              <div>
                <h3 className="text-xl font-bold text-white">Emergency Contacts</h3>
                <p className="text-red-100">Start an Emergency Live Chat</p>
              </div>
            </div>
            <Link href='/support'
              className={`px-16 bg-red-600 hover:bg-red-700  text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2`}
            >
              <span>Start Chat</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="bg-yellow-400 rounded-xl p-4">
                  {feature.icon}
                </div>
                <div className="flex items-center bg-green-400/10 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-green-400 text-sm">{feature.status}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>

              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Procedures */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 mb-16 overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Emergency Procedures</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {emergencyProcedures.map((procedure, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3 text-white">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold">{procedure.type}</h4>
                  </div>
                  <ul className="space-y-3">
                    {procedure.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="bg-yellow-400/10 rounded-full w-6 h-6 flex items-center 
                          justify-center text-yellow-400 text-sm mr-3 flex-shrink-0">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    Response Time: {procedure.responseTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Safety Tips & Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyTips.map((category, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-3">
                  {category.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySecuritySection;
