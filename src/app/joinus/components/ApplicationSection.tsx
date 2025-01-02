'use client'
import React, { useState } from 'react';
import { UserCircle, Car, FileCheck,  ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
// import { useForm, SubmitHandler } from 'react-hook-form'

type FormData = {
  // Personal Information
  fullName: string
  idNumber: string
  dateOfBirth: string
  email: string
  phone: string
  address: string

  // Driver Documentation
  driversLicense: File | null
  prDP: File | null
  policeClearance: File | null
  proofOfAddress: File | null

  // Vehicle Information
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleRegistration: string
  vehicleColor: string
  vehicleInsurance: string
  registrationPapers: File | null
  insuranceCertificate: File | null
  roadworthyCertificate: File | null

  // Background Check
  criminalRecordCheck: boolean
  drivingRecordCheck: boolean
  employmentVerification: boolean
  termsAcceptance: boolean
  dataProcessingConsent: boolean
}

const steps = [
  'Select Application Type',
  'Personal Information',
  'Driver Documentation',
  'Vehicle Information',
  'Background Check',
]

const ApplicationSection = () => {
  const [applicationType, setApplicationType] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  // const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   console.log(data)
  //   alert('Application submitted successfully!')
  //   reset()
  //   console.log(applicationType);
  // }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const requiredDocuments = {
    driver: [
      { 
        id: 'idDocument',
        name: 'ID Document/Passport',
        description: 'Valid South African ID or Passport',
        required: true
      },
      {
        id: 'driversLicense',
        name: 'Driver\'s License',
        description: 'Valid Professional Driving Permit (PrDP)',
        required: true
      },
      {
        id: 'policeCheck',
        name: 'Police Clearance',
        description: 'Not older than 3 months',
        required: true
      }
    ],
    vehicle: [
      {
        id: 'vehicleRegistration',
        name: 'Vehicle Registration',
        description: 'Valid vehicle registration documents',
        required: true
      },
      {
        id: 'roadworthy',
        name: 'Roadworthy Certificate',
        description: 'Current roadworthy certificate',
        required: true
      },
      {
        id: 'derkaReport',
        name: 'DERKA Inspection Report',
        description: 'Valid DERKA vehicle inspection report',
        required: true
      },
      {
        id: 'insurance',
        name: 'Vehicle Insurance',
        description: 'Comprehensive vehicle insurance certificate',
        required: true
      }
    ]
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => {
                  setApplicationType('driver');
                  nextStep();
                }}
                className="bg-gray-50 rounded-2xl p-8 border border-black/5 hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-xl p-4 inline-flex">
                    <UserCircle className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-400 transition-colors">
                      Apply as Driver
                    </h3>
                    <p className="text-gray-600">
                      You&apos;ll be driving your own or someone else&apos;s vehicle
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setApplicationType('owner');
                  nextStep();
                }}
                className="bg-gray-50 rounded-2xl p-8 border border-black/5 hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-black rounded-xl p-4 inline-flex">
                    <Car className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-400 transition-colors">
                      Apply as Vehicle Owner
                    </h3>
                    <p className="text-gray-600">
                      You own a vehicle and want to register a driver
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Document Requirements Preview */}
            <div className="mt-12 bg-black rounded-3xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-6">
                  <FileCheck className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Required Documents</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4">Driver Requirements</h4>
                    <ul className="space-y-4">
                      {requiredDocuments.driver.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-gray-400">{doc.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4">Vehicle Requirements</h4>
                    <ul className="space-y-4">
                      {requiredDocuments.vehicle.map((doc, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-gray-400">{doc.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-400/10 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Important Notice</h4>
                      <p className="text-gray-400 text-sm">
                        All documents must be valid and clearly legible. The DERKA inspection report must be from an authorized center and not older than 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                // {...register('fullName', { required: 'Full name is required' })}
                id="fullName"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID/Passport Number</label>
              <input
                // {...register('idNumber', { required: 'ID/Passport number is required' })}
                id="idNumber"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.idNumber && <p className="mt-1 text-sm text-red-600">{errors.idNumber.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                // {...register('dateOfBirth', { required: 'Date of birth is required' })}
                id="dateOfBirth"
                type="date"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                // {...register('email', { required: 'Email is required' })}
                id="email"
                type="email"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                // {...register('phone', { required: 'Phone number is required' })}
                id="phone"
                type="tel"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                // {...register('address', { required: 'Address is required' })}
                id="address"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>} */}
            </div>
          </>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="mb-4">
              <label htmlFor="driversLicense" className="block text-sm font-medium text-gray-700">Driver&apos;s License</label>
              <input
                // {...register('driversLicense', { required: 'Driver\'s license is required' })}
                id="driversLicense"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {/* {errors.driversLicense && <p className="mt-1 text-sm text-red-600">{errors.driversLicense.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="prDP" className="block text-sm font-medium text-gray-700">PrDP</label>
              <input
                // {...register('prDP', { required: 'PrDP is required' })}
                id="prDP"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {/* {errors.prDP && <p className="mt-1 text-sm text-red-600">{errors.prDP.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="policeClearance" className="block text-sm font-medium text-gray-700">Police Clearance</label>
              <input
                // {...register('policeClearance', { required: 'Police clearance is required' })}
                id="policeClearance"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {/* {errors.policeClearance && <p className="mt-1 text-sm text-red-600">{errors.policeClearance.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="proofOfAddress" className="block text-sm font-medium text-gray-700">Proof of Address</label>
              <input
                // {...register('proofOfAddress', { required: 'Proof of address is required' })}
                id="proofOfAddress"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {/* {errors.proofOfAddress && <p className="mt-1 text-sm text-red-600">{errors.proofOfAddress.message}</p>} */}
            </div>
          </div>
        );
      case 3:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">Vehicle Make</label>
              <input
                // {...register('vehicleMake', { required: 'Vehicle make is required' })}
                id="vehicleMake"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.vehicleMake && <p className="mt-1 text-sm text-red-600">{errors.vehicleMake.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">Vehicle Model</label>
              <input
                // {...register('vehicleModel', { required: 'Vehicle model is required' })}
                id="vehicleModel"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.vehicleModel && <p className="mt-1 text-sm text-red-600">{errors.vehicleModel.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700">Vehicle Year</label>
              <input
                // {...register('vehicleYear', { required: 'Vehicle year is required' })}
                id="vehicleYear"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.vehicleYear && <p className="mt-1 text-sm text-red-600">{errors.vehicleYear.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleRegistration" className="block text-sm font-medium text-gray-700">Vehicle Registration</label>
              <input
                // {...register('vehicleRegistration', { required: 'Vehicle registration is required' })}
                id="vehicleRegistration"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.vehicleRegistration && <p className="mt-1 text-sm text-red-600">{errors.vehicleRegistration.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleColor" className="block text-sm font-medium text-gray-700">Vehicle Color</label>
              <input
                // {...register('vehicleColor', { required: 'Vehicle color is required' })}
                id="vehicleColor"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.vehicleColor && <p className="mt-1 text-sm text-red-600">{errors.vehicleColor.message}</p>} */}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleInsurance" className="block text-sm font-medium text-gray-700">Insurance Details</label>
              <input
                // {...register('vehicleInsurance', { required: 'Insurance details are required' })}
                id="vehicleInsurance"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {/* {errors.vehicleInsurance && <p className="mt-1 text-sm text-red-600">{errors.vehicleInsurance.message}</p>} */}
            </div>
            <div className="space-y-4 mt-6">
              <div className="mb-4">
                <label htmlFor="registrationPapers" className="block text-sm font-medium text-gray-700">Registration Papers</label>
                <input
                  // {...register('registrationPapers', { required: 'Registration papers are required' })}
                  id="registrationPapers"
                  type="file"
                  className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
                />
                {/* {errors.registrationPapers && <p className="mt-1 text-sm text-red-600">{errors.registrationPapers.message}</p>} */}
              </div>
              <div className="mb-4">
                <label htmlFor="insuranceCertificate" className="block text-sm font-medium text-gray-700">Insurance Certificate</label>
                <input
                  // {...register('insuranceCertificate', { required: 'Insurance certificate is required' })}
                  id="insuranceCertificate"
                  type="file"
                  className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
                />
                {/* {errors.insuranceCertificate && <p className="mt-1 text-sm text-red-600">{errors.insuranceCertificate.message}</p>} */}
              </div>
              <div className="mb-4">
                <label htmlFor="roadworthyCertificate" className="block text-sm font-medium text-gray-700">Roadworthy Certificate</label>
                <input
                  // {...register('roadworthyCertificate', { required: 'Roadworthy certificate is required' })}
                  id="roadworthyCertificate"
                  type="file"
                  className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
                />
                {/* {errors.roadworthyCertificate && <p className="mt-1 text-sm text-red-600">{errors.roadworthyCertificate.message}</p>} */}
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  // {...register('criminalRecordCheck', { required: 'Criminal record check consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to a criminal record check</span>
              </label>
              {/* {errors.criminalRecordCheck && <p className="mt-1 text-sm text-red-600">{errors.criminalRecordCheck.message}</p>} */}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  // {...register('drivingRecordCheck', { required: 'Driving record check consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to a driving record check</span>
              </label>
              {/* {errors.drivingRecordCheck && <p className="mt-1 text-sm text-red-600">{errors.drivingRecordCheck.message}</p>} */}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  // {...register('employmentVerification', { required: 'Employment verification consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to employment verification</span>
              </label>
              {/* {errors.employmentVerification && <p className="mt-1 text-sm text-red-600">{errors.employmentVerification.message}</p>} */}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  // {...register('termsAcceptance', { required: 'Terms acceptance is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I accept the terms and conditions</span>
              </label>
              {/* {errors.termsAcceptance && <p className="mt-1 text-sm text-red-600">{errors.termsAcceptance.message}</p>} */}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  // {...register('dataProcessingConsent', { required: 'Data processing consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to data processing</span>
              </label>
              {/* {errors.dataProcessingConsent && <p className="mt-1 text-sm text-red-600">{errors.dataProcessingConsent.message}</p>} */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-24" id='registerForm'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-yellow-400/10 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-900 font-medium">Start Your Journey</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join the Swift<span className="text-yellow-400">!</span> Family
          </h2>
          <p className="text-xl text-gray-600">
            Complete your application in a few simple steps. Make sure you have all required documents ready.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 hidden md:block">
          <div className="flex justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center relative ${
                  index <= currentStep ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    index < currentStep 
                      ? 'bg-yellow-400' 
                      : index === currentStep 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100'
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="w-6 h-6 text-black" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="text-sm font-medium">{step}</div>
                {index < steps.length - 1 && (
                  <div 
                    className={`absolute top-5 left-full w-full h-0.5 -ml-2 ${
                      index < currentStep ? 'bg-yellow-400' : 'bg-gray-100'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto my-4 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
          <form 
          // onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6">
            {renderStep()}
            <div className="flex justify-between">
              {currentStep > 0 && (
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400">
                  <ChevronRight className="inline-block rotate-180" />
                  Previous
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button type="button" onClick={nextStep} className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400">
                  Next
                  <ChevronRight className="inline-block" />
                </button>
              ) : (
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-400">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;