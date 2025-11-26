import { MessageCircle, Search, PenTool, CheckCircle, ArrowRight, Clock, Users, Target, Info, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We begin with an in-depth discussion to understand your project requirements, goals, and specific needs.',
      longDescription: 'During this phase, we analyze your objectives, target audience, and project scope. Our experts work closely with you to define clear deliverables and establish project timelines. We ensure all your requirements are captured for a successful delivery.',
      icon: <MessageCircle size={20} />,
      duration: '1-2 days',
      features: ['Project Analysis', 'Goal Setting', 'Timeline Planning', 'Expert Matching']
    },
    {
      step: '02',
      title: 'Research',
      description: 'Comprehensive research and data gathering using academic databases and credible sources.',
      longDescription: 'Our research team conducts thorough literature review, data analysis, and source verification to build a strong foundation for your project. We gather relevant materials and create a detailed outline.',
      icon: <Search size={20} />,
      duration: '2-3 days',
      features: ['Literature Review', 'Data Collection', 'Source Verification', 'Outline Creation']
    },
    {
      step: '03',
      title: 'Writing',
      description: 'Expert writing with multiple quality checks and continuous collaboration.',
      longDescription: 'Our specialized writers craft your content while maintaining regular communication. Each section undergoes rigorous quality assurance checks to ensure academic excellence and adherence to your requirements.',
      icon: <PenTool size={20} />,
      duration: '4-6 days',
      features: ['Expert Writing', 'Quality Checks', 'Regular Updates', 'Revision Rounds']
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final review, formatting, and timely delivery with ongoing support.',
      longDescription: 'We conduct final proofreading, formatting according to requirements, and ensure plagiarism-free delivery. Post-delivery support is available to address any concerns or minor revisions.',
      icon: <CheckCircle size={20} />,
      duration: '2-3 days',
      features: ['Final Review', 'Formatting', 'Plagiarism Check', 'Ongoing Support']
    }
  ];

  const stats = [
    { icon: <Clock size={18} />, value: '98%', label: 'On-Time Delivery' },
    { icon: <Users size={18} />, value: '50+', label: 'Expert Writers' },
    { icon: <Target size={18} />, value: '100%', label: 'Client Satisfaction' }
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
      y: -4,
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
    <section id="process" className="relative py-16 md:py-24 px-4">
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
            <span className="text-purple-400 text-xs font-medium">Our Workflow</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Process
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-4">
            A systematic approach to delivering exceptional academic and professional writing services
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <Clock size={14} className="text-green-400" />
            <span className="text-green-400 text-sm font-medium">Standard delivery: 10+ days</span>
            <Tooltip text="Rush orders available with premium pricing - contact us">
              <Info size={14} className="text-green-400 cursor-help" />
            </Tooltip>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 md:p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            >
              <div className="text-purple-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Info size={16} className="text-blue-400 flex-shrink-0" />
            <div className="text-sm text-blue-300 text-center">
              <strong>Total Process Duration:</strong> 10-14 days (standard delivery) • Rush orders (&lt;10 days) require premium pricing
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-slate-700/50" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-20 left-1/2 w-0.5 h-8 bg-slate-700/50 transform -translate-x-1/2" />
                )}

                {/* Step Card */}
                <motion.div 
                  className="relative p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <div className="text-purple-400">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-slate-700/50 rounded-lg border border-slate-600/50">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={14} className="text-cyan-400" />
                          <span className="text-cyan-400 font-medium">{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1.5">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
                    animate={{ 
                      width: activeStep === index ? '100%' : '0%' 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Step Progress - Desktop */}
                <div className="hidden lg:flex justify-center mt-4">
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-slate-600"
                    animate={{ 
                      backgroundColor: activeStep >= index ? '#a855f7' : '#475569' 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Detailed View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 md:mt-12 p-6 md:p-8 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
          >
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <h3 className="text-xl font-semibold text-white">
                    Phase {steps[activeStep].step}: {steps[activeStep].title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {steps[activeStep].longDescription}
                </p>
                
                {/* Key Deliverables */}
                <div className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Activities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {steps[activeStep].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle size={12} className="text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm">
                  Start Your Project
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-purple-400 mt-1">
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">Phase Duration</div>
                      <div className="text-cyan-400 font-bold text-lg">{steps[activeStep].duration}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-slate-600">
                    Part of our 10-14 day standard delivery process
                  </div>
                </div>

                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-orange-300">
                      <strong>Need faster delivery?</strong> Rush orders with less than 10 days delivery 
                      are available with premium pricing. Contact us for a custom quote.
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-green-300">
                      <strong>Pricing:</strong> €3.50 per 100 words for all academic levels (BSc, MSc, PhD) 
                      with standard 10+ day delivery timeline.
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
          <h3 className="text-xl font-bold text-white mb-2">Quality Takes Time</h3>
          <p className="text-gray-300 text-sm mb-4">
            Our standard 10-14 day process ensures thorough research, expert writing, and quality assurance. 
            Rush delivery available for urgent projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm">
              Start Standard Project
            </button>
            <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-300 text-sm">
              Request Rush Order
            </button>
          </div>
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