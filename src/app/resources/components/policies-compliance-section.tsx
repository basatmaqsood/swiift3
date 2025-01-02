'use client'

import React from 'react';
import { 
  FileText, 
  Shield, 
  Lock, 
  Scale,
  Download,
  ChevronRight,
  BadgeCheck,
  Eye,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

const PoliciesComplianceSection = () => {

  const handleDownload = (filePath: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop() || 'download';
    link.click();
  };


  const legalDocuments = [
    {
      category: "Driver Agreements",
      icon: <BadgeCheck className="w-6 h-6" />,
      id:'aggrements',
      documents: [
        {
          title: "Driver Service Agreement",
          version: "v2.1 - Dec 2024",
          size: "1.2 MB",
          required: true,
          description: "Primary agreement governing the relationship between drivers and Swift!",
          keyPoints: [
            "Service terms and conditions",
            "Rights and responsibilities",
            "Payment terms",
            "Termination conditions"
          ],
          filepath:'/files/driver-service-agreement.pdf'
        },
        {
          title: "Code of Conduct",
          version: "v1.8 - Dec 2024",
          size: "842 KB",
          required: true,
          description: "Professional standards and behavioral guidelines",
          keyPoints: [
            "Professional behavior",
            "Customer service standards",
            "Dress code",
            "Communication guidelines"
          ],
          filepath:'/files/code-of-conduct.pdf'
        }
      ]
    },
    {
      category: "Insurance Documents",
      icon: <Shield className="w-6 h-6" />,
      id:'insurance',
      documents: [
        {
          title: "Insurance Policy Overview",
          version: "v2.0 - Dec 2024",
          size: "1.5 MB",
          required: true,
          description: "Comprehensive coverage details for drivers",
          keyPoints: [
            "Coverage scope",
            "Claim procedures",
            "Liability limits",
            "Additional protections"
          ],
          filepath:'/files/insurance-policy-overview.pdf'
        },
        {
          title: "Accident Procedures",
          version: "v1.5 - Dec 2024",
          size: "985 KB",
          required: false,
          description: "Step-by-step guide for handling accidents",
          keyPoints: [
            "Emergency procedures",
            "Documentation requirements",
            "Contact protocols",
            "Claim filing process"
          ],
          filepath:'/files/accident-procedures-guide.pdf'
        }
      ]
    },
    {
      category: "Privacy & Data",
      icon: <Lock className="w-6 h-6" />,
      id:'privacy',
      documents: [
        {
          title: "Privacy Policy",
          version: "v2.2 - Dec 2024",
          size: "1.1 MB",
          required: true,
          description: "Data collection and protection guidelines",
          keyPoints: [
            "Data collection scope",
            "Usage policies",
            "Protection measures",
            "User rights"
          ],
          filepath:'/files/privacy-policy.pdf'
        },
        {
          title: "Data Handling Guidelines",
          version: "v1.7 - Dec 2024",
          size: "756 KB",
          required: true,
          description: "Protocols for handling user and trip data",
          keyPoints: [
            "Data security measures",
            "Storage guidelines",
            "Access controls",
            "Deletion procedures"
          ],
          filepath:'/files/data-handling-guidelines.pdf'
        }
      ]
    },
    {
      category: "Terms of Service",
      icon: <Scale className="w-6 h-6" />,
      id:'terms',
      documents: [
        {
          title: "Platform Terms of Service",
          version: "v2.3 - Dec 2024",
          size: "1.4 MB",
          required: true,
          description: "General terms governing platform usage",
          keyPoints: [
            "Service conditions",
            "User obligations",
            "Platform rules",
            "Dispute resolution"
          ],
          filepath:'/files/platform-terms-of-service.pdf'
        },
        {
          title: "Operating Guidelines",
          version: "v1.9 - Dec 2024",
          size: "892 KB",
          required: true,
          description: "Detailed operational procedures and requirements",
          keyPoints: [
            "Operating hours",
            "Service areas",
            "Vehicle requirements",
            "Quality standards"
          ],
          filepath:'/files/operating-guidelines.pdf'
        }
      ]
    }
  ];

  const handleDownloadAll = () => {
    const allFilePaths = legalDocuments.flatMap(category => 
      category.documents.map(doc => doc.filepath)
    );

    console.log(allFilePaths)
    allFilePaths.forEach((filePath, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = filePath.split('/').pop() || `document-${index + 1}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); // 500ms delay between downloads to avoid browser throttling
    });
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Policies & Compliance</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Legal Documents & Guidelines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access all legal documents, policies, and guidelines governing your partnership 
            with Swift!
          </p>
        </div>

        {/* Quick Access Banner */}
        <div className="bg-black rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Essential Documents</h3>
              <button  className="text-gray-400">
                Download and review all required documentation for Swift! drivers
              </button>
            </div>
            <button onClick={()=>{handleDownloadAll()}} className="flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 
              rounded-xl hover:bg-yellow-300 transition-colors">
              <Download className="w-5 h-5" />
              <span>Download All Documents</span>
            </button>
          </div>
        </div>

        {/* Document Categories */}
        <div className="space-y-12" >
          {legalDocuments.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8"  id={category.id}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-yellow-400 rounded-xl p-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.documents.map((doc, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg 
                      transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-gray-900">{doc.title}</h4>
                      {doc.required && (
                        <span className="inline-flex items-center bg-red-100 text-red-600 
                          rounded-full px-3 py-1 text-sm">
                          Required
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4">{doc.description}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="w-4 h-4 mr-2" />
                        {doc.version}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="w-4 h-4 mr-2" />
                        {doc.size}
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-3">
                        Key Points:
                      </h5>
                      <ul className="space-y-2">
                        {doc.keyPoints.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                      <Link className="text-yellow-600 hover:text-yellow-700 font-medium 
                        flex items-center" href={doc.filepath} target='_blank'>
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Link>
                      <button
                  onClick={() => handleDownload(doc.filepath)}
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 
                  font-medium transition-colors group"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        {/* <div className="mt-16 bg-yellow-400 rounded-2xl p-8">
          <div className="flex items-start space-x-6">
            <div className="bg-black rounded-xl p-4">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Need Help?</h3>
              <p className="text-yellow-900 mb-4">
                Our compliance team is available to help you understand any of these documents.
              </p>
              <button className="inline-flex items-center bg-black text-white px-6 py-3 
                rounded-xl hover:bg-gray-900 transition-colors">
                <span>Contact Compliance Team</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PoliciesComplianceSection;
