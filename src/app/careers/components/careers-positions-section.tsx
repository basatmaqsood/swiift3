'use client'
import React, { useState } from 'react';
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Upload,
  X,
  Send,
  AlertCircle
} from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

type Position = {
  id: number;
  title: string;
  department: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
};

const OpenPositionsSection = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null); // Explicitly define the type
  const [applicationFile, setApplicationFile] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const positions = {
    johannesburg: [
      {
        id: 1,
        title: "Senior Software Engineer",
        department: "Technology",
        type: "Full-time",
        experience: "5+ years",
        description: "Join our core engineering team to build and scale our mobility platform.",
        requirements: [
          "Strong background in React and Node.js",
          "Experience with distributed systems",
          "Knowledge of AWS services",
          "Excellent problem-solving skills"
        ]
      },
      {
        id: 2,
        title: "Operations Manager",
        department: "Operations",
        type: "Full-time",
        experience: "3+ years",
        description: "Lead our Johannesburg operations team in delivering excellent service.",
        requirements: [
          "Previous experience in operations management",
          "Strong leadership skills",
          "Data-driven decision making",
          "Excellence in team management"
        ]
      }
    ],
    capetown: [
      {
        id: 3,
        title: "Marketing Specialist",
        department: "Marketing",
        type: "Full-time",
        experience: "2+ years",
        description: "Drive our marketing initiatives in the Cape Town region.",
        requirements: [
          "Digital marketing expertise",
          "Content creation skills",
          "Analytics and reporting",
          "Campaign management"
        ]
      }
    ],
    durban: [
      {
        id: 4,
        title: "Regional Manager",
        department: "Management",
        type: "Full-time",
        experience: "4+ years",
        description: "Oversee our expansion and operations in the Durban region.",
        requirements: [
          "Regional management experience",
          "Strategic planning",
          "Team building",
          "Market analysis"
        ]
      }
    ]
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Safe access to the first file
    if (file && file.type === 'application/pdf') {
      setApplicationFile(file);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };
  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle application submission
    console.log({
      position: selectedPosition,
      file: applicationFile,
      coverLetter
    });
    // Reset form
    setApplicationFile(null);
    setCoverLetter('');
    setSelectedPosition(null);
  };

  return (
    <section className="bg-white py-24" id='open-positions'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Join Our Team</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Open Positions<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your next opportunity across our offices in South Africa
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setSelectedCity('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all
              ${selectedCity === 'all' 
                ? 'bg-yellow-400 text-black' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All Locations
          </button>
          {Object.keys(positions).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-6 py-2 rounded-full font-medium transition-all
                ${selectedCity === city 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </button>
          ))}
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(positions).map(([city, cityPositions]) => (
            selectedCity === 'all' || selectedCity === city ? (
              cityPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {city.charAt(0).toUpperCase() + city.slice(1)}
                        </div>
                        <div className="hidden md:flex  items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedPosition(position)}
                    className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : null
          ))}
        </div>

        {/* Application Modal */}
        {selectedPosition && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Apply for {selectedPosition.title}
                    </h3>
                    <p className="text-gray-600">
                      Complete the form below to submit your application
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPosition(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {showAlert && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Please upload a PDF file only
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload your CV (PDF)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-yellow-400 transition-colors">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="flex flex-col items-center cursor-pointer"
                      >
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-gray-600">
                          {applicationFile ? applicationFile.name : 'Click to upload your CV'}
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={6}
                      className="w-full rounded-xl border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                      placeholder="Tell us why you'd be great for this role..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!applicationFile || !coverLetter}
                    className="w-full bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium 
                      hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50 
                      disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <span>Submit Application</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositionsSection;
