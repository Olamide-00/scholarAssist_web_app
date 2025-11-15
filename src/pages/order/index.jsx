import { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Upload,
  Info,
  Clock,
  User,
  Mail,
  Phone,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Order = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    serviceType: '',
    academicLevel: '',
    subjectArea: '',
    
    // Step 2: Project Details
    topic: '',
    wordCount: 1000,
    description: '',
    files: [],
    
    // Step 3: Requirements
    formatting: '',
    references: 0,
    deadline: '',
    specialInstructions: '',
    
    // Step 4: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: ''
  });

  const serviceTypes = [
    {
      id: 'academic',
      name: 'Academic Writing',
      icon: '🎓',
      description: 'Dissertations, theses, research papers',
      price: '£3.5 per 100 words'
    },
    {
      id: 'business',
      name: 'Business Writing',
      icon: '💼',
      description: 'Business plans, reports, proposals',
      price: '£3.5 per 100 words'
    },
    {
      id: 'creative',
      name: 'Creative Writing',
      icon: '✍️',
      description: 'Content writing, blogs, stories',
      price: '£3.5 per 100 words'
    },
    {
      id: 'editing',
      name: 'Editing & Proofreading',
      icon: '📝',
      description: 'Proofreading and editing services',
      price: '£3.5 per 100 words'
    }
  ];

  const academicLevels = [
    { id: 'high-school', name: 'High School' },
    { id: 'bachelor', name: 'Bachelor (BSc)' },
    { id: 'master', name: 'Master (MSc)' },
    { id: 'phd', name: 'PhD/Doctoral' },
    { id: 'professional', name: 'Professional' }
  ];

  const formattingStyles = [
    'APA', 'MLA', 'Chicago', 'Harvard', 'IEEE', 'Vancouver', 'Other'
  ];

  // Calculate minimum date (10 days from today)
  const getMinDate = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 10);
    return minDate.toISOString().split('T')[0];
  };

  // Calculate maximum date (1 year from today)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate.toISOString().split('T')[0];
  };

  const calculatePrice = () => {
    const pricePerWord = 0.035; // £3.5 per 100 words = £0.035 per word
    return Math.round(formData.wordCount * pricePerWord);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitOrder = () => {
    // Handle order submission
    console.log('Order submitted:', formData);
    alert('Order submitted successfully! We will contact you within 24 hours.');
  };

  const steps = [
    { number: 1, title: 'Service Type', icon: <FileText size={18} /> },
    { number: 2, title: 'Project Details', icon: <FileText size={18} /> },
    { number: 3, title: 'Requirements', icon: <CheckCircle size={18} /> },
    { number: 4, title: 'Your Info', icon: <User size={18} /> }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-sm font-semibold">New Order</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Project
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Provide details about your writing project and get a free quote
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2 -z-10" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 -translate-y-1/2 -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
            
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 border-transparent text-white'
                    : 'bg-slate-800 border-slate-600 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle size={20} />
                  ) : (
                    step.icon
                  )}
                </div>
                <span className={`mt-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl backdrop-blur-sm p-6">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Choose Your Service</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {serviceTypes.map(service => (
                      <button
                        key={service.id}
                        onClick={() => handleInputChange('serviceType', service.id)}
                        className={`p-4 border-2 rounded-xl text-left transition-all ${
                          formData.serviceType === service.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <div className="font-semibold text-white">{service.name}</div>
                            <div className="text-cyan-400 text-sm font-medium">{service.price}</div>
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm">{service.description}</div>
                      </button>
                    ))}
                  </div>

                  {formData.serviceType && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Academic Level
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {academicLevels.map(level => (
                          <button
                            key={level.id}
                            onClick={() => handleInputChange('academicLevel', level.id)}
                            className={`p-3 border rounded-lg text-center transition-all ${
                              formData.academicLevel === level.id
                                ? 'border-cyan-500 bg-cyan-500/10 text-white'
                                : 'border-slate-600 bg-slate-700/30 text-gray-400 hover:border-slate-500'
                            }`}
                          >
                            <div className="font-medium text-sm">{level.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Subject Area
                    </label>
                    <input
                      type="text"
                      value={formData.subjectArea}
                      onChange={(e) => handleInputChange('subjectArea', e.target.value)}
                      placeholder="e.g., Computer Science, Business Management, Psychology"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Project Topic/Title
                      </label>
                      <input
                        type="text"
                        value={formData.topic}
                        onChange={(e) => handleInputChange('topic', e.target.value)}
                        placeholder="Enter your project topic or title"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Word Count: <span className="text-purple-400">{formData.wordCount.toLocaleString()} words</span>
                      </label>
                      <input
                        type="range"
                        min="500"
                        max="50000"
                        step="500"
                        value={formData.wordCount}
                        onChange={(e) => handleInputChange('wordCount', parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>500 words</span>
                        <span>50,000 words</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Project Description
                      </label>
                      <textarea
                        rows={6}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe your project in detail. Include any specific requirements, research questions, or objectives..."
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Upload Files (Optional)
                      </label>
                      <div className="border-2 border-dashed border-slate-600 rounded-xl p-6 text-center">
                        <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                        <p className="text-gray-400 text-sm mb-3">
                          Upload guidelines, references, or previous work
                        </p>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="px-4 py-2 bg-slate-700 text-white rounded-lg cursor-pointer hover:bg-slate-600 transition-colors"
                        >
                          Choose Files
                        </label>
                      </div>
                      
                      {formData.files.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {formData.files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-slate-700/50 rounded-lg px-3 py-2">
                              <span className="text-white text-sm">{file.name}</span>
                              <button
                                onClick={() => removeFile(index)}
                                className="text-red-400 hover:text-red-300"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Additional Requirements</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Formatting Style
                      </label>
                      <select
                        value={formData.formatting}
                        onChange={(e) => handleInputChange('formatting', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all"
                      >
                        <option value="">Select formatting style</option>
                        {formattingStyles.map(style => (
                          <option key={style} value={style}>{style}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Number of References
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={formData.references}
                        onChange={(e) => handleInputChange('references', parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Deadline Date
                      </label>
                      <div className="space-y-2">
                        <input
                          type="date"
                          min={getMinDate()}
                          max={getMaxDate()}
                          value={formData.deadline}
                          onChange={(e) => handleInputChange('deadline', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all"
                        />
                        <div className="flex items-start gap-2 text-sm text-amber-400 bg-amber-400/10 rounded-lg p-3">
                          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Minimum delivery time is 10 days</p>
                            <p className="text-amber-300 mt-1">
                              If you need your project sooner, please mention it in the special instructions below.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Special Instructions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.specialInstructions}
                        onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                        placeholder="Any additional requirements or specific instructions for the writer. Include here if you need urgent delivery (less than 10 days)..."
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Personal Info */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                        placeholder="+44 20 7946 0958"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all"
                      placeholder="Your country"
                    />
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    currentStep === 1
                      ? 'text-gray-500 cursor-not-allowed'
                      : 'text-white bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Previous
                </button>
                
                {currentStep < 4 ? (
                  <button
                    onClick={nextStep}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all flex items-center gap-2"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={submitOrder}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all flex items-center gap-2"
                  >
                    <CheckCircle size={18} />
                    Confirm Order
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl backdrop-blur-sm p-6 sticky top-6">
              <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                {formData.serviceType && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Service:</span>
                    <span className="text-white font-medium">
                      {serviceTypes.find(s => s.id === formData.serviceType)?.name}
                    </span>
                  </div>
                )}

                {formData.academicLevel && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white font-medium">
                      {academicLevels.find(l => l.id === formData.academicLevel)?.name}
                    </span>
                  </div>
                )}

                {formData.wordCount > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Words:</span>
                    <span className="text-white font-medium">{formData.wordCount.toLocaleString()}</span>
                  </div>
                )}

                {formData.deadline && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Deadline:</span>
                    <span className="text-white font-medium">
                      {new Date(formData.deadline).toLocaleDateString('en-GB')}
                    </span>
                  </div>
                )}

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-400">Estimated Price:</span>
                    <span className="text-cyan-400 font-bold text-xl">
                      £{calculatePrice().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1 text-right">
                    (£3.5 per 100 words)
                  </p>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <Info size={16} />
                    <span>What's included:</span>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Professional writing</li>
                    <li>• Proofreading & editing</li>
                    <li>• Plagiarism report</li>
                    <li>• Formatting</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>

                <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-amber-400 text-sm font-medium">Delivery Notice</p>
                      <p className="text-amber-300 text-xs mt-1">
                        Minimum delivery time is 10 days. Urgent requests require special arrangement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #a855f7;
          cursor: pointer;
          border: 2px solid #1e293b;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #a855f7;
          cursor: pointer;
          border: 2px solid #1e293b;
        }
      `}</style>
    </section>
  );
};