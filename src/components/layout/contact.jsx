import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
    urgency: 'standard'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/your-form-id-here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Project Inquiry - ${formData.service}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        alert('Message sent successfully! We will get back to you within 24 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: '',
          urgency: 'standard'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please email us directly at Research4hq@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={18} />,
      title: 'Email Us',
      details: 'Research4hq@gmail.com',
      description: 'Send project details and requirements',
      action: 'mailto:Research4hq@gmail.com'
    },
    {
      icon: <Phone size={18} />,
      title: 'Call Us',
      details: '+234 911 0383911',
      description: 'Available 24/7 for urgent projects',
      action: 'tel:+2349110383911'
    },
    {
      icon: <MapPin size={18} />,
      title: 'Location',
      details: 'Worldwide Service',
      description: 'Serving clients globally',
      action: '#'
    }
  ];

  const serviceOptions = [
    { value: 'academic', label: 'Academic Writing' },
    { value: 'business', label: 'Business Writing' },
    { value: 'consultancy', label: 'Research Consultancy' },
    { value: 'content', label: 'Content Strategy' },
    { value: 'editing', label: 'Editing & Proofreading' },
    { value: 'other', label: 'Other Services' }
  ];

  const urgencyOptions = [
    { value: 'urgent', label: 'Urgent (24-48 hours)' },
    { value: 'priority', label: 'Priority (3-5 days)' },
    { value: 'standard', label: 'Standard (1-2 weeks)' },
    { value: 'flexible', label: 'Flexible (3+ weeks)' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="contact" className="relative py-16 md:py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900/50">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/5 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-cyan-500/5 rounded-full animate-float-medium" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-purple-400 text-xs font-medium">Get Started</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your Project
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Contact us for a free consultation and project estimate
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={method.action}
                  className="block p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center">
                      <div className="text-purple-400">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                      <p className="text-cyan-400 font-medium text-sm mb-1">{method.details}</p>
                      <p className="text-gray-400 text-xs">{method.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Support Info */}
            <motion.div 
              variants={itemVariants}
              className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="text-green-400" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">24/7 Support</h4>
                  <p className="text-gray-400 text-xs">Always available for urgent projects</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-400" size={16} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Expert Team</h4>
                  <p className="text-gray-400 text-xs">50+ specialized writers</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-3"
            >
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <div className="text-lg font-bold text-purple-400 mb-1">98%</div>
                <div className="text-gray-400 text-xs">Success Rate</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <div className="text-lg font-bold text-cyan-400 mb-1">24h</div>
                <div className="text-gray-400 text-xs">Response Time</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                <div className="text-lg font-bold text-green-400 mb-1">500+</div>
                <div className="text-gray-400 text-xs">Projects Done</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Send className="text-white" size={18} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Project Inquiry</h3>
                <p className="text-gray-400 text-sm">Get a free quote within hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm"
                    placeholder="Olamide"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm"
                    placeholder="Oladele"
                  />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm"
                  placeholder="olamide@gmail.com"
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Needed *
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Urgency *
                </label>
                <select 
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm"
                >
                  {urgencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all duration-300 text-sm resize-none"
                  placeholder="Tell us about your project requirements, deadlines, and specific instructions..."
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-center text-gray-500 text-xs">
                We respect your privacy. Your information is secure.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};