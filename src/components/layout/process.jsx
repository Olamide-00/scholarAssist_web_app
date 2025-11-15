import { MessageCircle, Search, PenTool, CheckCircle, ArrowRight, Clock, Users, Target } from 'lucide-react';
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
      longDescription: 'During this phase, we analyze your objectives, target audience, and project scope. Our experts work closely with you to define clear deliverables and establish project timelines.',
      icon: <MessageCircle size={20} />,
      duration: '1-2 hours',
      features: ['Project Analysis', 'Goal Setting', 'Timeline Planning', 'Expert Matching']
    },
    {
      step: '02',
      title: 'Research',
      description: 'Comprehensive research and data gathering using academic databases and credible sources.',
      longDescription: 'Our research team conducts thorough literature review, data analysis, and source verification to build a strong foundation for your project.',
      icon: <Search size={20} />,
      duration: '2-5 days',
      features: ['Literature Review', 'Data Collection', 'Source Verification', 'Outline Creation']
    },
    {
      step: '03',
      title: 'Writing',
      description: 'Expert writing with multiple quality checks and continuous collaboration.',
      longDescription: 'Our specialized writers craft your content while maintaining regular communication. Each section undergoes rigorous quality assurance checks.',
      icon: <PenTool size={20} />,
      duration: '3-10 days',
      features: ['Expert Writing', 'Quality Checks', 'Regular Updates', 'Revision Rounds']
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final review, formatting, and timely delivery with ongoing support.',
      longDescription: 'We conduct final proofreading, formatting according to requirements, and ensure plagiarism-free delivery with post-delivery support.',
      icon: <CheckCircle size={20} />,
      duration: '1-2 days',
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
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A systematic approach to delivering exceptional academic and professional writing services
          </p>
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
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{step.duration}</span>
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
                <button className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm">
                  Start Your Project
                </button>
              </div>
              <div className="lg:text-right">
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-slate-700/50 rounded-lg">
                  <div className="text-purple-400">
                    {steps[activeStep].icon}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium text-sm">Estimated Duration</div>
                    <div className="text-gray-400 text-sm">{steps[activeStep].duration}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};