import { GraduationCap, Briefcase, BookOpen, TrendingUp, CheckCircle, ArrowRight, Clock } from 'lucide-react';
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
      longDescription: 'Our team of PhD-level writers specializes in creating compelling academic content that meets the highest standards of scholarly excellence.',
      features: ['Research Papers', 'Dissertations', 'Literature Reviews', 'Academic Editing'],
      duration: '5-21 days',
      startingAt: '$49'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Business Writing',
      description: 'Professional business documents, reports, and strategic content for corporate excellence.',
      longDescription: 'Transform your business ideas into powerful, professional documents that drive results and communicate effectively.',
      features: ['Business Plans', 'Reports', 'Proposals', 'Case Studies'],
      duration: '3-14 days',
      startingAt: '$79'
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Research Consultancy',
      description: 'Expert guidance and consulting for your writing projects from concept to completion.',
      longDescription: 'Get end-to-end research support from experienced consultants for methodology design and publication.',
      features: ['Project Planning', 'Research Guidance', 'Data Analysis', 'Publication Support'],
      duration: 'Ongoing',
      startingAt: '$99'
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Content Strategy',
      description: 'Strategic content development for academic publications and professional portfolios.',
      longDescription: 'Develop comprehensive content strategies that elevate your academic or professional profile.',
      features: ['Publication Strategy', 'Editorial Support', 'Peer Review', 'Formatting'],
      duration: '2-8 weeks',
      startingAt: '$129'
    }
  ];

  const serviceStats = [
    { value: '50+', label: 'Expert Writers' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'Confidential' }
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
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Professional writing services for academics, researchers, and business professionals
          </p>
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
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Clock size={14} />
                        {service.duration}
                      </span>
                      <span className="text-cyan-400 font-medium">
                        From {service.startingAt}
                      </span>
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
                  <div className="px-3 py-2 bg-slate-700/50 rounded-lg">
                    <div className="text-xs text-gray-400">Starting at</div>
                    <div className="text-cyan-400 font-bold">{services[activeService].startingAt}</div>
                  </div>
                  <div className="px-3 py-2 bg-slate-700/50 rounded-lg">
                    <div className="text-xs text-gray-400">Duration</div>
                    <div className="text-purple-400 font-bold">{services[activeService].duration}</div>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm">
                  Start {services[activeService].title} Project
                </button>
              </div>
              <div className="lg:text-right">
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-slate-700/50 rounded-lg">
                  <div className="text-purple-400">
                    {services[activeService].icon}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium text-sm">Ready to start?</div>
                    <div className="text-gray-400 text-sm">Free consultation available</div>
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