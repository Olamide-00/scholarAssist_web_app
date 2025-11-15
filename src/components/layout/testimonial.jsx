import { Star, Quote, ThumbsUp, TrendingUp, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Olamide Oladele',
      role: 'PhD Candidate, Computer Science',
      content: 'WriteForge helped me transform my research into a compelling dissertation. Their attention to detail and academic rigor exceeded my expectations.',
      rating: 5,
      avatar: 'OO',
      project: 'PhD Dissertation',
      duration: '3 months'
    },
    {
      id: 2,
      name: 'Adekunle John',
      role: 'Business Consultant',
      content: 'The business proposals crafted by WriteForge have been instrumental in securing major client contracts. Professional, timely, and exceptional quality.',
      rating: 5,
      avatar: 'AJ',
      project: 'Business Proposals',
      duration: 'Ongoing'
    },
    {
      id: 3,
      name: 'Dr. Paul Onifade',
      role: 'University Professor',
      content: 'As an academic advisor, I confidently recommend WriteForge to my students. Their work consistently meets the highest academic standards.',
      rating: 5,
      avatar: 'PO',
      project: 'Academic Papers',
      duration: '2 years'
    },
    {
      id: 4,
      name: 'Michael Olanrewaju',
      role: 'Startup Founder',
      content: 'The content strategy service helped us establish thought leadership in our industry. The team understands both academic and business perspectives.',
      rating: 5,
      avatar: 'MO',
      project: 'Content Strategy',
      duration: '6 months'
    }
  ];

  const stats = [
    { number: '200+', label: 'Happy Clients', icon: <ThumbsUp size={18} /> },
    { number: '4.9/5', label: 'Average Rating', icon: <Star size={18} /> },
    { number: '98%', label: 'Success Rate', icon: <TrendingUp size={18} /> },
    { number: '50+', label: 'Expert Writers', icon: <Award size={18} /> }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
      />
    ));
  };

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
    <section id="testimonials" className="relative py-16 md:py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/5 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-500/5 rounded-full animate-float-medium" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-xs font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Client Stories
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Hear from professionals who trusted us with their important projects
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            >
              <div className="text-purple-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveTestimonial(index)}
            >
              <motion.div 
                className="relative p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm cursor-pointer"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 text-purple-500/20 w-8 h-8" />
                
                {/* Client Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                        {testimonial.project}
                      </span>
                      <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                        {testimonial.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                  <span className="text-yellow-400 text-sm font-semibold ml-2">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Verified Client
                  </div>
                  <div className="text-xs text-gray-500">
                    Project #{testimonial.id}
                  </div>
                </div>

                {/* Active Indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
                  animate={{ 
                    width: activeTestimonial === index ? '100%' : '0%' 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-purple-400 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {renderStars(5)}
              </div>
              <span className="text-white font-semibold text-sm">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="text-gray-400 text-sm">
              Trusted by <span className="text-white font-semibold">200+</span> professionals
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};