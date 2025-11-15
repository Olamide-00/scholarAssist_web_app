import { Sparkles, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' }
  ];

  const services = [
    { name: 'Academic Writing' },
    { name: 'Business Writing' },
    { name: 'Research Papers' },
    { name: 'Dissertations' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'Research4hq@gmail.com' },
    { icon: Phone, text: '+234 911 038 3911' },
    { icon: MapPin, text: 'Available Worldwide' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-purple-500/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className={`grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    ScholarAssist
                  </span>
                  <div className="text-xs text-gray-500 font-medium">Academic Excellence</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming ideas into powerful academic and professional content. 
                Trusted by researchers, students, and business professionals worldwide.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-3 bg-slate-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/50 hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm"
                    aria-label={social.label}
                  >
                    <social.icon 
                      size={18} 
                      className="text-gray-400 group-hover:text-purple-400 group-hover:scale-110 transition-all" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-default">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all">
                      <contact.icon size={18} className="text-purple-400" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={`border-t border-purple-500/20 pt-12 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with ScholarAssist
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Get the latest insights on academic writing, research methodologies, and professional development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`border-t border-purple-500/20 pt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-gray-400">
                <p className="flex items-center gap-2">
                  © {currentYear} ScholarAssist. Made with 
                  <Heart size={16} className="text-red-400 fill-red-400 animate-pulse" />
                  for the academic community.
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl text-white shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-purple-500/30 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
};