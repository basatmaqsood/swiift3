'use client'
import React, { useState, ChangeEvent } from 'react';
import { 
  Send, 
  FileUp, 
  X, 
  AlertCircle, 
  UserCircle, 
  Car 
} from 'lucide-react';

interface FormData {
  userType: 'rider' | 'driver' | '';
  category: string;
  description: string;
  attachments: File[];
}

function SimpleTicketSystem ()  {
  const [formData, setFormData] = useState<FormData>({
    userType: '',
    category: '',
    description: '',
    attachments: []
  });

  const categories: Record<'rider' | 'driver', string[]> = {
    rider: [
      'Payment Issue',
      'Trip Issue',
      'Lost Item',
      'Account Help',
      'Other'
    ],
    driver: [
      'Earnings Issue',
      'Vehicle Support',
      'Account Help',
      'App Problems',
      'Other'
    ]
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files].slice(0, 2)
    }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 relative overflow-hidden" id='ticket'>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 rounded-full px-4 py-2 mb-6">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-sm">24/7 Support Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-400">
            We&apos;re here to help. Tell us about your issue and we&apos;ll find the best solution.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 to-transparent rounded-2xl" />

          <div className="relative">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setFormData((prev) => ({ ...prev, userType: 'rider', category: '' }))}
                className={`p-4 rounded-xl border transition-all flex items-center space-x-3 group
                  ${formData.userType === 'rider' 
                    ? 'border-yellow-400 bg-yellow-400/10 text-white shadow-lg shadow-yellow-400/10' 
                    : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:bg-gray-700/30'}`}
              >
                <UserCircle className="w-5 h-5" />
                <span>I&apos;m a Rider</span>
              </button>
              <button
                onClick={() => setFormData((prev) => ({ ...prev, userType: 'driver', category: '' }))}
                className={`p-4 rounded-xl border transition-all flex items-center space-x-3 group
                  ${formData.userType === 'driver' 
                    ? 'border-yellow-400 bg-yellow-400/10 text-white shadow-lg shadow-yellow-400/10' 
                    : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:bg-gray-700/30'}`}
              >
                <Car className="w-5 h-5" />
                <span>I&apos;m a Driver</span>
              </button>
            </div>

            {formData.userType && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What can we help you with?
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white 
                      focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all
                      hover:border-gray-600 hover:bg-gray-900/70"
                  >
                    <option value="">Select a category</option>
                    {categories[formData.userType].map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us more about your issue
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Please provide details about your issue..."
                    rows={5}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 
                      text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 
                      focus:border-transparent transition-all hover:border-gray-600 hover:bg-gray-900/70
                      resize-none"
                  />
                </div>

                <div>
                  <div className="border border-dashed border-gray-700 rounded-xl p-4 
                    transition-all hover:border-gray-600 hover:bg-gray-900/30 group">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept="image/*,.pdf"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <FileUp className="w-6 h-6 text-gray-400 group-hover:text-yellow-400" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300">
                        Add screenshots or documents (optional)
                      </span>
                    </label>
                  </div>

                  {formData.attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-900/50 rounded-lg
                            border border-gray-800 hover:border-gray-700"
                        >
                          <span className="text-sm text-gray-300">{file.name}</span>
                          <button
                            onClick={() => removeFile(index)}
                            className="text-gray-500 hover:text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    disabled={!formData.category || !formData.description.trim()}
                    onClick={() => console.log('Submit:', formData)}
                    className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-medium 
                      hover:bg-yellow-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed 
                      flex items-center space-x-2 shadow-lg shadow-yellow-400/10"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-start space-x-2 text-center justify-center">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 animate-pulse" />
          <p className="text-sm text-gray-400">
            For immediate emergency assistance, please contact our 24/7 support line at 0800 SWIFT SA
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleTicketSystem;
