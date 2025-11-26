import { useState, useEffect } from 'react';
import { Calculator, Clock, Zap, Shield, Check, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingCalculator = () => {
  const [wordCount, setWordCount] = useState(1000);
  const [deadline, setDeadline] = useState(10);
  const [serviceType, setServiceType] = useState('academic');
  const [quality, setQuality] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);
  const [showRushTooltip, setShowRushTooltip] = useState(false);

  // Flat rate pricing - €3.50 per 100 words = €0.035 per word
  const BASE_RATE_PER_WORD = 0.035;
  const BASE_RATE_PER_100_WORDS = 3.50;
  const MINIMUM_DELIVERY_DAYS = 10;

  // Quality multipliers
  const qualityMultipliers = {
    standard: 1.0,
    premium: 1.5,
    'premium-plus': 2.0
  };

  // Urgency multipliers (for rush orders < 10 days)
  const urgencyMultipliers = {
    1: 3.0,  // 24 hours - Contact us
    2: 2.8,  // 48 hours - Contact us
    3: 2.5,  // 3 days - Contact us
    5: 2.2,  // 5 days - Contact us
    7: 1.8,  // 7 days - Contact us
    10: 1.0, // 10 days - Standard
    14: 1.0, // 14 days
    21: 0.95, // 21 days
    30: 0.9  // 30 days
  };

  // Calculate price in real-time
  useEffect(() => {
    calculatePrice();
  }, [wordCount, deadline, quality]);

  const calculatePrice = () => {
    const basePrice = wordCount * BASE_RATE_PER_WORD;
    const urgencyMultiplier = urgencyMultipliers[deadline] || 1.0;
    const qualityMultiplier = qualityMultipliers[quality] || 1.0;

    const calculatedPrice = basePrice * urgencyMultiplier * qualityMultiplier;
    setTotalPrice(Math.max(calculatedPrice, 35)); // Minimum €35
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const getDeadlineText = (days) => {
    if (days === 1) return '24 Hours';
    if (days === 2) return '48 Hours';
    if (days === 3) return '3 Days';
    return `${days} Days`;
  };

  const isRushOrder = deadline < MINIMUM_DELIVERY_DAYS;

  const serviceTypes = [
    { id: 'academic', name: 'Academic Writing', icon: '📚' },
    { id: 'business', name: 'Business Writing', icon: '💼' },
    { id: 'creative', name: 'Creative Writing', icon: '✍️' }
  ];

  const qualityLevels = [
    { 
      id: 'standard', 
      name: 'Standard', 
      description: 'Professional quality writing',
      tooltip: 'High-quality writing with proper formatting and structure'
    },
    { 
      id: 'premium', 
      name: 'Premium', 
      description: 'Enhanced quality with expert review',
      tooltip: 'Expert review, advanced research, and premium quality assurance'
    },
    { 
      id: 'premium-plus', 
      name: 'Premium Plus', 
      description: 'Highest quality with senior expert',
      tooltip: 'Senior expert assignment, in-depth analysis, and comprehensive review'
    }
  ];

  const Tooltip = ({ text, children }) => {
    const [show, setShow] = useState(false);
    
    return (
      <div className="relative inline-block">
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {children}
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-xs text-gray-300 whitespace-nowrap shadow-lg"
            >
              {text}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="pricing" className="relative py-16 md:py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/5 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-500/5 rounded-full animate-float-medium" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Calculator size={14} className="text-purple-400" />
            <span className="text-purple-400 text-xs font-medium">Price Calculator</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Instant Price Quote
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Flat rate of €3.50 per 100 words for all writing services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div 
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Project Details</h3>

            {/* Word Count */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-300">
                  Word Count: <span className="text-purple-400">{wordCount.toLocaleString()} words</span>
                </label>
                <Tooltip text="Enter the total number of words needed">
                  <Info size={16} className="text-gray-400 cursor-help" />
                </Tooltip>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>500 words</span>
                <span>50,000 words</span>
              </div>
            </div>

            {/* Service Type */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-300">Service Type</label>
                <Tooltip text="All services are priced at €3.50 per 100 words">
                  <Info size={16} className="text-gray-400 cursor-help" />
                </Tooltip>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {serviceTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setServiceType(type.id)}
                    className={`p-3 rounded-lg border text-sm transition-all ${
                      serviceType === type.id
                        ? 'border-purple-500 bg-purple-500/10 text-white'
                        : 'border-slate-600 bg-slate-700/30 text-gray-400 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-lg mb-1">{type.icon}</div>
                    <div className="text-xs">{type.name}</div>
                  </button>
                ))}
              </div>
              <div className="mt-2 text-xs text-gray-400 text-center">
                Same price for all academic levels (BSc, MSc, PhD)
              </div>
            </div>

            {/* Quality Level */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">Quality Level</label>
              <div className="space-y-2">
                {qualityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setQuality(level.id)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      quality === level.id
                        ? 'border-green-500 bg-green-500/10 text-white'
                        : 'border-slate-600 bg-slate-700/30 text-gray-400 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{level.name}</span>
                          <Tooltip text={level.tooltip}>
                            <Info size={14} className="text-gray-400 cursor-help" />
                          </Tooltip>
                        </div>
                        <div className="text-xs text-gray-400">{level.description}</div>
                      </div>
                      <Check size={16} className={quality === level.id ? 'text-green-400' : 'text-transparent'} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Deadline */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-300">
                  Deadline: <span className={isRushOrder ? 'text-orange-400' : 'text-green-400'}>
                    {getDeadlineText(deadline)}
                  </span>
                </label>
                <Tooltip text="Standard delivery is 10+ days. Rush orders require contacting us">
                  <Info size={16} className="text-gray-400 cursor-help" />
                </Tooltip>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={deadline}
                onChange={(e) => setDeadline(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>24 Hours</span>
                <span>30 Days</span>
              </div>
              
              {/* Rush Order Warning */}
              <AnimatePresence>
                {isRushOrder && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg"
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-orange-300">
                        <strong>Rush Order:</strong> Orders with less than 10 days delivery require premium pricing. 
                        Please contact us for a custom quote.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div 
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Your Quote</h3>

            {/* Total Price */}
            <div className="text-center mb-8 p-6 bg-slate-700/30 rounded-xl border border-purple-500/20">
              <div className="text-gray-400 text-sm mb-2">
                {isRushOrder ? 'Estimated Price (Contact Required)' : 'Total Price'}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {formatPrice(totalPrice)}
              </div>
              <div className="text-gray-400 text-sm">
                {wordCount.toLocaleString()} words • {getDeadlineText(deadline)}
              </div>
              {isRushOrder && (
                <div className="mt-3 text-xs text-orange-400 font-medium">
                  Rush order pricing - Contact us for confirmation
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Base Rate</span>
                  <Tooltip text={`€${BASE_RATE_PER_100_WORDS} per 100 words`}>
                    <Info size={14} className="text-gray-400 cursor-help" />
                  </Tooltip>
                </div>
                <span className="text-white font-medium">
                  {formatPrice(wordCount * BASE_RATE_PER_WORD)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Quality ({quality})</span>
                  <Tooltip text="Premium quality includes expert review and enhanced features">
                    <Info size={14} className="text-gray-400 cursor-help" />
                  </Tooltip>
                </div>
                <span className="text-green-400 font-medium">×{qualityMultipliers[quality]}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Delivery ({getDeadlineText(deadline)})</span>
                  <Tooltip text={isRushOrder ? "Rush delivery requires premium pricing" : "Standard delivery time"}>
                    <Info size={14} className="text-gray-400 cursor-help" />
                  </Tooltip>
                </div>
                <span className={`${isRushOrder ? 'text-orange-400' : 'text-green-400'} font-medium`}>
                  ×{urgencyMultipliers[deadline]}
                </span>
              </div>
            </div>

            {/* Features Included */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">What's Included:</h4>
              <div className="space-y-2">
                {[
                  'Professional Writing',
                  'Proofreading & Editing',
                  'Plagiarism Report',
                  'Formatting',
                  '24/7 Support',
                  quality !== 'standard' ? 'Expert Review' : 'Quality Assurance',
                  quality === 'premium-plus' ? 'Senior Expert Assignment' : 'Experienced Writer',
                  !isRushOrder ? 'Standard Delivery (10+ days)' : 'Rush Delivery (Contact Required)'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Check size={14} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {isRushOrder ? (
              <button className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <AlertCircle size={18} />
                Contact Us for Rush Order
              </button>
            ) : (
              <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <Zap size={18} />
                Proceed with Order
              </button>
            )}

            {/* Guarantee */}
            <div className="text-center mt-4">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Shield size={12} />
                <span>100% Confidential • Money-Back Guarantee</span>
              </div>
            </div>

            {/* Pricing Note */}
            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-start gap-2">
                <Info size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-300">
                  <strong>Simple Pricing:</strong> €3.50 per 100 words for all services. 
                  Same rate for BSc, MSc, PhD, and all writing types.
                </div>
              </div>
            </div>
          </motion.div>
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

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};