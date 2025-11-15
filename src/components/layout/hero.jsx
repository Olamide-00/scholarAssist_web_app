import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '98%', label: 'Success Rate', icon: '🎯' },
    { number: '10+', label: 'Years Experience', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: '💫' }
  ];

  const floatingShapes = [
    { style: 'top-1/4 left-10 w-6 h-6 bg-purple-500/20 animate-float-slow' },
    { style: 'top-1/3 right-20 w-8 h-8 bg-cyan-500/15 animate-float-medium' },
    { style: 'bottom-1/4 left-20 w-4 h-4 bg-pink-500/25 animate-float-fast' },
    { style: 'bottom-1/3 right-10 w-7 h-7 bg-purple-500/15 animate-float-slow' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Subtle Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=20"
            alt="Academic research and writing"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[2px]" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/90 to-cyan-900/30" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Shapes */}
          {floatingShapes.map((shape, i) => (
            <div
              key={i}
              className={`absolute rounded-full blur-xl ${shape.style}`}
            />
          ))}
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-500" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Floating Academic Elements */}
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-float-slow">
              <span className="text-3xl">📚</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400/20 rounded-full backdrop-blur-sm border border-yellow-400/30 animate-pulse" />
          </div>
        </div>

        <div className="absolute bottom-40 left-20 hidden lg:block">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-float-medium">
              <span className="text-2xl">✍️</span>
            </div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-400/20 rounded-full backdrop-blur-sm border border-green-400/30 animate-pulse" />
          </div>
        </div>

        <div className="absolute top-1/3 left-1/4 hidden xl:block">
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-pink-500/30 flex items-center justify-center animate-float-fast">
              <span className="text-xl">🎓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Animated Badge */}
        <div className={`inline-flex items-center gap-2 mt-16 mb-8 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Sparkles size={16} className="text-purple-400 animate-pulse" />
          <span className="text-purple-400 text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            🚀 Professional Writing Services
          </span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
        </div>
        
        {/* Main Heading with Stagger Animation */}
        <div className="space-y-4 mb-8">
          <h1 className={`text-5xl md:text-8xl font-bold leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Transform Ideas
            </span>
          </h1>
          <h1 className={`text-4xl md:text-7xl font-bold leading-tight transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white relative">
              Into Powerful Words
              <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 transition-transform duration-1000 delay-1000 group-hover:scale-x-100" />
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Expert academic and professional writing services for{' '}
          <span className="text-purple-400 font-semibold">BSc, MSc, PhD</span> and business projects. 
          Elevate your research with precision, creativity, and excellence.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-700 group-hover:to-cyan-700 transition-all" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group relative px-10 py-5 bg-slate-800/30 border border-purple-500/30 rounded-2xl text-white font-semibold hover:bg-slate-800/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-3">
            <Play size={18} className="text-purple-400 group-hover:text-cyan-400 transition-colors" />
            <span>View Demo</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group p-8 bg-gradient-to-br from-slate-800/20 to-slate-900/40 border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 hover:bg-slate-800/30 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-2xl mb-2 opacity-80">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
              
              {/* Animated Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-16 flex flex-col items-center gap-4 transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-gray-500 text-sm font-medium">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 px-4 py-3 bg-slate-800/30 border border-purple-500/20 rounded-2xl backdrop-blur-sm">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-gray-300 text-sm">Rated 4.9/5</span>
      </div>
    </section>
  );
};