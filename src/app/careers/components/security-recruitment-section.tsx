'use client';

import React, { useState } from 'react';
import {
  Shield,
  Car,
  Radio,
  CheckCircle,
  Upload,
  Send,
} from 'lucide-react';
import Link from 'next/link';

type Position = {
  id: string;
  title: string;
  requirements: string[];
  documents: string[];
};

const SecurityRecruitmentSection = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [documents, setDocuments] = useState<Record<string, File | undefined>>({});
  const [showAlert, setShowAlert] = useState({ show: false, message: '' });
  console.log(showAlert);
  const cities = ['johannesburg', 'cape town', 'durban'];
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);

  const departments = [
    {
      id: 'patrol',
      name: 'Patrol Unit',
      icon: <Car className="w-6 h-6" />,
      description: 'Mobile security units providing regular patrols and rapid response',
    },
    {
      id: 'armed',
      name: 'Armed Response Unit',
      icon: <Shield className="w-6 h-6" />,
      description: 'Specialized armed response team for high-risk situations',
    },
    {
      id: 'command',
      name: 'Operation Command Unit',
      icon: <Radio className="w-6 h-6" />,
      description: 'Central command and coordination center',
    },
  ];

  const positions = {
    patrol: {
      title: 'Patrol Unit Positions',
      roles: [
        {
          id: 'patrol-supervisor',
          title: 'Patrol Supervisor',
          requirements: [
            'Valid Grade B or higher PSIRA registration',
            'Minimum 3 years supervisory experience',
            'Valid driver\'s license',
            'Clean criminal record',
          ],
          documents: ['psira', 'license', 'id'],
        },
        {
          id: 'patrol-guard',
          title: 'Patrol Guard',
          requirements: [
            'Valid Grade C or higher PSIRA registration',
            'Valid driver\'s license',
            'Clean criminal record',
            'Physical fitness certificate',
          ],
          documents: ['psira', 'license', 'id'],
        },
      ],
    },
    armed: {
      title: 'Armed Response Unit Positions',
      roles: [
        {
          id: 'armed-supervisor',
          title: 'Armed Response Supervisor',
          requirements: [
            'Valid Grade A PSIRA registration',
            'Firearm competency certificates',
            'Minimum 5 years armed response experience',
            'Advanced tactical training certification',
            'Valid driver\'s license',
          ],
          documents: ['psira', 'license', 'id', 'firearm', 'tactical'],
        },
        {
          id: 'armed-officer',
          title: 'Armed Response Officer',
          requirements: [
            'Valid Grade B PSIRA registration',
            'Firearm competency certificates',
            'Minimum 2 years armed response experience',
            'Valid driver\'s license',
          ],
          documents: ['psira', 'license', 'id', 'firearm'],
        },
      ],
    },
    command: {
      title: 'Operation Command Unit Positions',
      roles: [
        {
          id: 'area-manager',
          title: 'Area Manager',
          requirements: [
            'Valid Grade A PSIRA registration',
            'Minimum 5 years security management experience',
            'Computer literacy',
            'Leadership qualification',
          ],
          documents: ['psira', 'id', 'qualifications'],
        },
        {
          id: 'camera-operator',
          title: 'Camera Operator',
          requirements: [
            'Valid Grade C or higher PSIRA registration',
            'CCTV monitoring experience',
            'Computer literacy',
            'Control room experience',
          ],
          documents: ['psira', 'id'],
        },
      ],
    },
  };

  const handleFileChange = (documentType: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setDocuments((prev) => ({ ...prev, [documentType]: file }));
      } else {
        setShowAlert({
          show: true,
          message: 'Please upload PDF files only',
        });
        setTimeout(() => setShowAlert({ show: false, message: '' }), 3000);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submission logic
    console.log({
      position: selectedPosition,
      documents,
    });
    // Reset form
    setDocuments({});
    setSelectedPosition(null);
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-400 font-medium">Security Careers</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Join Swift<span className="text-yellow-400">!</span> Security
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of an elite security team dedicated to keeping our communities safe
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={() => setSelectedCity('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all
                ${selectedCity === 'all' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              All Locations
            </button>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-2 rounded-full font-medium transition-all
                  ${selectedCity === city ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`p-6 rounded-2xl transition-all text-left
                  ${selectedDepartment === dept.id ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`rounded-xl p-3 ${selectedDepartment === dept.id ? 'bg-black/10' : 'bg-black/30'}`}>
                    {React.cloneElement(dept.icon, { className: selectedDepartment === dept.id ? 'text-black' : 'text-yellow-400' })}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{dept.name}</h3>
                    <p className={`text-sm ${selectedDepartment === dept.id ? 'text-black/70' : 'text-gray-400'}`}>
                      {dept.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(positions).map(([deptId, dept]) =>
            (selectedDepartment === 'all' || selectedDepartment === deptId) &&
            dept.roles.map((role) => (
              <div
                key={role.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-yellow-400">{role.title}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                href="#apply-security"
                  onClick={() => setSelectedPosition(role)}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-300 transition-all duration-300 w-full"
                >
                  Apply Now
                </Link>
              </div>
            ))
          )}
        </div>

        {/* Application Form */}
        {selectedPosition && (
          <div id='apply-security' className="mt-12 bg-gray-800/50 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Apply for {selectedPosition.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {selectedPosition.documents.map((doc) => (
                <div key={doc}>
                  <label className="block text-sm font-medium mb-2">
                    {doc.toUpperCase()} Document
                  </label>
                  <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 
                    hover:border-yellow-400/50 transition-colors">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(doc, e)}
                      className="hidden"
                      id={`${doc}-upload`}
                    />
                    <label
                      htmlFor={`${doc}-upload`}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <Upload className="w-8 h-8 text-gray-500 mb-2" />
                      <span className="text-gray-400">
                        {documents[doc] ? documents[doc].name : `Upload your ${doc.toUpperCase()}`}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                disabled={selectedPosition.documents.some((doc) => !documents[doc])}
                className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium 
                  hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50 
                  disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecurityRecruitmentSection;
