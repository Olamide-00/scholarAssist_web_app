import { useState, useEffect } from 'react';
import { Calculator, Clock, Zap, Shield, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingCalculator = () => {
  const [wordCount, setWordCount] = useState(1000);
  const [deadline, setDeadline] = useState(7);
  const [serviceType, setServiceType] = useState('academic');
  const [academicLevel, setAcademicLevel] = useState('bachelor');
  const [quality, setQuality] = useState('standard');
  const [totalPrice, setTotalPrice] = useState(0);

  // Pricing structure (per word)
  const baseRates = {
    academic: {
      bachelor: 0.08,
      master: 0.12,
      phd: 0.18
    },
    business: {
      standard: 0.10,
      professional: 0.15
    },
    creative: {
      standard: 0.07,
      premium: 0.12
    }
  };

  // Quality multipliers
  const qualityMultipliers = {
    standard: 1.0,
    premium: 1.5,
    'premium-plus': 2.0
  };

  // Urgency multipliers
  const urgencyMultipliers = {
    1: 2.5,  // 24 hours
    2: 2.0,  // 48 hours
    3: 1.8,  // 3 days
    5: 1.5,  // 5 days
    7: 1.2,  // 7 days
    14: 1.0, // 14 days
    21: 0.9, // 21 days
    30: 0.8  // 30 days
  };

  // Calculate price in real-time
  useEffect(() => {
    calculatePrice();
  }, [wordCount, deadline, serviceType, academicLevel, quality]);

  const calculatePrice = () => {
    let baseRate;
    
    if (serviceType === 'academic') {
      baseRate = baseRates.academic[academicLevel];
    } else if (serviceType === 'business') {
      baseRate = baseRates.business[quality === 'standard' ? 'standard' : 'professional'];
    } else {
      baseRate = baseRates.creative[quality === 'standard' ? 'standard' : 'premium'];
    }

    const urgencyMultiplier = urgencyMultipliers[deadline] || 1.0;
    const qualityMultiplier = qualityMultipliers[quality] || 1.0;

    const calculatedPrice = wordCount * baseRate * urgencyMultiplier * qualityMultiplier;
    setTotalPrice(Math.max(calculatedPrice, 49)); // Minimum $49
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getDeadlineText = (days) => {
    if (days === 1) return '24 Hours';
    if (days === 2) return '48 Hours';
    if (days === 3) return '3 Days';
    return `${days} Days`;
  };

  const serviceTypes = [
    { id: 'academic', name: 'Academic Writing', icon: '📚' },
    { id: 'business', name: 'Business Writing', icon: '💼' },
    { id: 'creative', name: 'Creative Writing', icon: '✍️' }
  ];

  const academicLevels = [
    { id: 'bachelor', name: 'BSc/Bachelor', price: 'From $0.08/word' },
    { id: 'master', name: 'MSc/Master', price: 'From $0.12/word' },
    { id: 'phd', name: 'PhD/Doctoral', price: 'From $0.18/word' }
  ];

  const qualityLevels = [
    { id: 'standard', name: 'Standard', description: 'Professional quality writing' },
    { id: 'premium', name: 'Premium', description: 'Enhanced quality with expert review' },
    { id: 'premium-plus', name: 'Premium Plus', description: 'Highest quality with senior expert' }
  ];

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
            Get real-time pricing based on your specific project requirements
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
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Word Count: <span className="text-purple-400">{wordCount.toLocaleString()} words</span>
              </label>
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
              <label className="block text-sm font-medium text-gray-300 mb-3">Service Type</label>
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
                    <div>{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Academic Level (only for academic writing) */}
            {serviceType === 'academic' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Academic Level</label>
                <div className="space-y-2">
                  {academicLevels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setAcademicLevel(level.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        academicLevel === level.id
                          ? 'border-cyan-500 bg-cyan-500/10 text-white'
                          : 'border-slate-600 bg-slate-700/30 text-gray-400 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{level.name}</span>
                        <span className="text-xs text-cyan-400">{level.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                      <div>
                        <div className="font-medium">{level.name}</div>
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
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Deadline: <span className="text-orange-400">{getDeadlineText(deadline)}</span>
              </label>
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
              <div className="text-gray-400 text-sm mb-2">Total Price</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {formatPrice(totalPrice)}
              </div>
              <div className="text-gray-400 text-sm">
                {wordCount.toLocaleString()} words • {getDeadlineText(deadline)}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-400">Base Rate</span>
                <span className="text-white font-medium">
                  {serviceType === 'academic' 
                    ? formatPrice(wordCount * baseRates.academic[academicLevel])
                    : serviceType === 'business'
                    ? formatPrice(wordCount * baseRates.business[quality === 'standard' ? 'standard' : 'professional'])
                    : formatPrice(wordCount * baseRates.creative[quality === 'standard' ? 'standard' : 'premium'])
                  }
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-400">Quality ({quality})</span>
                <span className="text-green-400 font-medium">×{qualityMultipliers[quality]}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-700">
                <span className="text-gray-400">Urgency ({getDeadlineText(deadline)})</span>
                <span className="text-orange-400 font-medium">×{urgencyMultipliers[deadline]}</span>
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
                  quality !== 'standard' ? 'Expert Review' : 'Basic Quality Check',
                  quality === 'premium-plus' ? 'Senior Expert Assignment' : 'Standard Writer'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Check size={14} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2">
              <Zap size={18} />
              Proceed with Order
            </button>

            {/* Guarantee */}
            <div className="text-center mt-4">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <Shield size={12} />
                <span>100% Confidential • Money-Back Guarantee</span>
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
      `}</style>
    </section>
  );
};