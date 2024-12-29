'use client'
import React from 'react';
import { CheckCircle, ArrowRight, PhoneCall, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

const RecruitmentProcess = () => {
  const steps = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      number: "01",
      title: "Initial Conversation",
      description: "A casual chat about your experience and aspirations. We'll share more about Swift! and explore how we can grow together.",
      highlights: [
        "30-minute video call",
        "Team culture discussion",
        "Role expectations",
        "Two-way Q&A session"
      ],
      imageSrc: "/initial.jpg",
      imageAlt: "Virtual Interview Process"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "02",
      title: "Skills Assessment",
      description: "Show us your expertise through practical exercises designed to reflect real-world scenarios you'll encounter at Swift!",
      highlights: [
        "Role-specific tasks",
        "Collaborative exercises",
        "Problem-solving focus",
        "Real-world scenarios"
      ],
      imageSrc: "/assesment.jpg",
      imageAlt: "Skills Assessment Session"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      number: "03",
      title: "Team Connection",
      description: "Meet your potential teammates and leaders. Get a feel for the culture and see yourself as part of the Swift! family.",
      highlights: [
        "Meet the team",
        "Office tour",
        "Culture immersion",
        "Final discussions"
      ],
      imageSrc: "/team.jpg ",
      imageAlt: "Team Meeting"
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Simple & Transparent</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Recruitment
            <span className="text-yellow-400"> Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A straightforward three-step process designed to help us get to know each other better
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex items-center flex-col md:flex-row gap-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-xl p-4 inline-flex">
                    {React.cloneElement(step.icon, { className: "text-gray-900" })}
                  </div>
                  <div>
                    <div className="text-yellow-400 font-bold text-lg mb-2">
                      Step {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {index === steps.length - 1 && (
                  <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 group mt-6">
                    <Link href='#open-positions'>View Open Positions</Link>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="relative">
                  {/* Number Background */}
                  {/* <div className="absolute -right-6 -top-6 text-9xl font-bold text-yellow-400/10 select-none">
                    {step.number}
                  </div> */}
                  
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-white p-4 shadow-xl">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img 
                        src={step.imageSrc} 
                        alt={step.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Connector */}
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-yellow-400/20" /> */}
      </div>
    </section>
  );
};

export default RecruitmentProcess;
