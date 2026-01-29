import React from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-darker to-darker pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
               Available for work
             </span>
          </div>

          {/* Titles */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {HERO_TITLE}
            <span className="text-primary">.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-400 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {HERO_SUBTITLE}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary/25"
            >
              View Projects
            </a>
            <a
              href="#"
              download
              className="px-8 py-3 rounded-full bg-card hover:bg-gray-800 text-white border border-gray-700 font-medium transition-all duration-300 flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Social Links Mini */}
          <div className="pt-8 flex justify-center space-x-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;