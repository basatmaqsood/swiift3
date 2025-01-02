'use client'

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Radio,
  TrendingUp,
  Activity,
  ArrowUpRight,
  CheckCircle,
  AlertOctagon,
} from 'lucide-react';

const InnovationSection = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const industryStats = [
    {
      stat: "73%",
      label: "of drivers reported safety concerns",
      description: "Previous industry statistics"
    },
    {
      stat: "45%",
      label: "income lost to high commission fees",
      description: "Traditional e-hailing platforms"
    },
    {
      stat: "89%",
      label: "drivers lack proper support systems",
      description: "Current industry standard"
    },
    {
      stat: "58%",
      label: "increase in security incidents",
      description: "Year-on-year industry average"
    }
  ];

  const solutions = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Armed Response Integration",
      description: "24/7 rapid response units and live monitoring",
      features: [
        "Real-time incident response",
        "Dedicated security command center",
        "Emergency panic button",
        "Live trip monitoring"
      ]
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Driver Support Network",
      description: "Comprehensive support system for drivers",
      features: [
        "24/7 dedicated support line",
        "Roadside assistance",
        "Vehicle maintenance network",
        "Insurance coverage"
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Fair Earnings Model",
      description: "Maximizing driver earnings and stability",
      features: [
        "Lower commission rates",
        "Peak time incentives",
        "Fuel rewards program",
        "Performance bonuses"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % industryStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-gray-500/20">
              {[...Array(12)].map((_, j) => (
                <div key={j} className="border-b border-gray-500/20 h-24" />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
          bg-yellow-400/10 rounded-full blur-3xl transition-all duration-1000" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 
          bg-yellow-400/5 rounded-full blur-3xl transition-all duration-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-400 font-medium">Revolutionary Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming E-hailing in
            <span className="text-yellow-400"> South Africa</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive solution designed specifically for South African drivers and riders,
            addressing unique local challenges with innovative technology and security.
          </p>
        </div>

        {/* Industry Problem Stats */}
        <div className="mb-24">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <AlertOctagon className="w-6 h-6 text-yellow-400 mr-3" />
              Industry Challenges
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {industryStats.map((stat, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 transform ${
                      currentStat === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8 absolute'
                    }`}
                  >
                    <div className="text-6xl font-bold text-yellow-400 mb-4">
                      {stat.stat}
                    </div>
                    <div className="text-xl text-white mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Activity Monitor */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-300">Security Incident Monitor</span>
                  <Activity className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="h-48 flex items-end space-x-1">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-yellow-400/20 rounded-t transition-all duration-500 hover:bg-yellow-400"
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animation: `pulse 2s infinite ${i * 0.1}s` 
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 
                hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="bg-yellow-400 rounded-xl p-4 inline-flex mb-6">
                {React.cloneElement(solution.icon, { className: "text-black" })}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {solution.description}
              </p>

              <ul className="space-y-3">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Real-time Operations Display */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 lg:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6">
                Real-Time Security Operations
              </h3>
              <p className="text-gray-300 mb-8">
                Our advanced security system provides comprehensive protection through integrated
                technology and rapid response units, ensuring safety for both drivers and riders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Response Time", value: "<5 min" },
                  { label: "Active Security Units", value: "100+" },
                  { label: "Coverage Area", value: "Major Cities" },
                  { label: "Incident Prevention Rate", value: "94%" }
                ].map((metric, index) => (
                  <div key={index} className="bg-black/30 rounded-xl p-6">
                    <div className="text-2xl font-bold text-yellow-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Security Status */}
            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-white font-semibold">Live Security Status</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                  <span className="text-green-500">Active</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Armed Response Units", status: "Ready" },
                  { label: "Command Center", status: "Online" },
                  { label: "Monitoring Systems", status: "Active" },
                  { label: "Emergency Response", status: "Standing By" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-gray-400">
                    <span>{item.label}</span>
                    <span className="text-green-400">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 
            rounded-xl font-medium hover:bg-yellow-300 transition-all duration-300 group">
            <a href='/#app-download'>Download Swift! App</a>
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 
              group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-gray-400 mt-4">
            Experience safer, more reliable rides with Swift!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
