import { GraduationCap, Briefcase, BookOpen, TrendingUp, CheckCircle, ArrowRight, Clock, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <GraduationCap size={20} />,
      title: 'Academic Writing',
      description: 'BSc, MSc, PhD dissertations, theses, and research papers crafted with academic rigor.',
      longDescription: 'Our team of PhD-level writers specializes in creating compelling academic content that meets the highest standards of scholarly excellence. Same flat rate for all academic levels.',
      features: ['Research Papers', 'Dissertations', 'Literature Reviews', 'Academic Editing'],
      duration: '10+ days',
      pricePerWord: '€0.035',
      pricePer100: '€3.50',
      minWords: 1000
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Business Writing',
      description: 'Professional business documents, reports, and strategic content for corporate excellence.',
      longDescription: 'Transform your business ideas into powerful, professional documents that drive results and communicate effectively. Consistent pricing across all business writing types.',
      features: ['Business Plans', 'Reports', 'Proposals', 'Case Studies'],
      duration: '10+ days',
      pricePerWord: '€0.035',
      pricePer100: '€3.50',
      minWords: 1000
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Research Consultancy',
      description: 'Expert guidance and consulting for your writing projects from concept to completion.',
      longDescription: 'Get end-to-end research support from experienced consultants for methodology design and publication. Same transparent pricing structure applies.',
      features: ['Project Planning', 'Research Guidance', 'Data Analysis', 'Publication Support'],
      duration: '10+ days',
      pricePerWord: '€0.035',
      pricePer100: '€3.50',
      minWords: 1000
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Content Strategy',
      description: 'Strategic content development for academic publications and professional portfolios.',
      longDescription: 'Develop comprehensive content strategies that elevate your academic or professional profile. Flat rate pricing for all strategy and content services.',
      features: ['Publication Strategy', 'Editorial Support', 'Peer Review', 'Formatting'],
      duration: '10+ days',
      pricePerWord: '€0.035',
      pricePer100: '€3.50',
      minWords: 1000
    }
  ];

  const serviceStats = [
    { value: '50+', label: 'Expert Writers' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' },
    { value: '€3.50', label: 'Per 100 Words' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -2,
      transition: { duration: 0.3 }
    }
  };

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
    <section id="services" className="relative py-16 md:py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/5 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-500/5 rounded-full animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-xs font-medium">Our Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Writing Solutions
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-3">
            Professional writing services for academics, researchers, and business professionals
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">€3.50 per 100 words</span>
            <Tooltip text="Same flat rate for all services and academic levels">
              <Info size={14} className="text-cyan-400 cursor-help" />
            </Tooltip>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {serviceStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            >
              <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveService(index)}
              onClick={() => setActiveService(index)}
            >
              <motion.div 
                className="relative p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm cursor-pointer"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-purple-400">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm flex-wrap">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Clock size={14} />
                        {service.duration}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-cyan-400 font-medium">
                          {service.pricePer100}/100w
                        </span>
                        <Tooltip text="Standard delivery (10+ days). Rush orders available - contact us">
                          <Info size={12} className="text-gray-400 cursor-help" />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing Info Badge */}
                <div className="mb-4 p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-xs text-blue-300">
                    <Info size={12} />
                    <span>Same rate for BSc, MSc, PhD</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-purple-400 font-medium text-sm group/btn">
                    Learn More
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Active Indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
                  animate={{ 
                    width: activeService === index ? '100%' : '0%' 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Service View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
          >
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <h3 className="text-xl font-semibold text-white">
                    {services[activeService].title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {services[activeService].longDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Price per 100 words</div>
                    <div className="text-cyan-400 font-bold text-lg">{services[activeService].pricePer100}</div>
                  </div>
                  <div className="px-4 py-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Price per word</div>
                    <div className="text-cyan-400 font-bold text-lg">{services[activeService].pricePerWord}</div>
                  </div>
                  <div className="px-4 py-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Standard Delivery</div>
                    <div className="text-purple-400 font-bold text-lg">{services[activeService].duration}</div>
                  </div>
                </div>

                {/* Example Pricing */}
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="text-sm font-medium text-green-400 mb-2">Example Pricing:</div>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>1,000 words:</span>
                      <span className="font-semibold text-white">€35.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5,000 words:</span>
                      <span className="font-semibold text-white">€175.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>10,000 words:</span>
                      <span className="font-semibold text-white">€350.00</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-green-500/30 text-xs text-green-300">
                    Rush delivery (&lt;10 days) available - contact us
                  </div>
                </div>

                <button className="w-full px-5 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm">
                  Start {services[activeService].title} Project
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-purple-400 mt-1">
                      {services[activeService].icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">Ready to start?</div>
                      <div className="text-gray-400 text-sm">Free consultation available</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      <span>Same rate for all academic levels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      <span>Transparent pricing, no hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      <span>Standard delivery: 10+ days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      <span>Rush orders available (contact us)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-orange-300">
                      <strong>Need it faster?</strong> Orders with less than 10 days delivery require 
                      premium pricing. Contact us for rush order quotes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl"
        >
          <h3 className="text-xl font-bold text-white mb-2">Simple, Transparent Pricing</h3>
          <p className="text-gray-300 text-sm mb-4">
            €3.50 per 100 words for all services. No matter if it's BSc, MSc, or PhD level.
          </p>
          <button className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors duration-300 text-sm">
            Calculate Your Price Now
          </button>
        </motion.div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
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