import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Phone, MessageCircle, ChevronDown, Star, Zap } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'process', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { 
      href: '#services', 
      label: 'Services',
      dropdown: [
        { href: '#academic', label: 'Academic Writing' },
        { href: '#business', label: 'Business Writing' },
        { href: '#consultancy', label: 'Research Consultancy' },
        { href: '#content', label: 'Content Strategy' }
      ]
    },
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/95 backdrop-blur-2xl border-b border-purple-500/30 shadow-2xl shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Star size={14} className="text-white fill-white" />
            <span className="text-white text-sm font-medium">Trusted by 200+ Professionals</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="w-1 h-1 bg-white/50 rounded-full" />
            <span className="text-white/90 text-sm">24/7 Support Available</span>
            <div className="w-1 h-1 bg-white/50 rounded-full" />
            <span className="text-white/90 text-sm">98% Success Rate</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ScholarAssist
              </span>
              <span className="text-xs text-gray-400 font-medium -mt-1">Academic Excellence</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 transition-all duration-300 group ${
                      activeSection === item.href.substring(1) 
                        ? 'text-purple-400' 
                        : 'text-gray-300 hover:text-purple-400'
                    }`}
                  >
                    {item.label}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                      activeSection === item.href.substring(1) ? 'w-3/4' : 'group-hover:w-1/2'
                    }`} />
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && isDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-2xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 py-3"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <button
                        key={dropdownIndex}
                        onClick={() => scrollToSection(dropdownItem.href)}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-3 group"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{dropdownItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+2349110383911"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
            >
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">+234 911 0383911</span>
            </a>
            
            <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <Zap size={18} className="group-hover:scale-110 transition-transform" />
                Get Started
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 bg-slate-800/50 border border-purple-500/30 rounded-xl text-white hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-2xl border-b border-purple-500/30 shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <div className="text-gray-400 font-semibold px-3 py-2 border-l-2 border-purple-500">
                      {item.label}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          onClick={() => scrollToSection(dropdownItem.href)}
                          className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-purple-400 bg-purple-500/10 border-l-4 border-purple-500'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-purple-500/20">
              <a 
                href="tel:+2349110383911"
                className="flex items-center gap-3 w-full px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
              >
                <Phone size={18} />
                <span>Call Now: +234 911 0383911</span>
              </a>
              
              <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                <Zap size={18} />
                Start Your Project
              </button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                  <Star size={14} className="fill-yellow-400" />
                </div>
                <span className="text-gray-400 text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};