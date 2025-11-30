import React from 'react';
import { Sparkles, Github, Code, Globe, Database, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden border-t border-white/5 scroll-mt-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-40 pointer-events-none"></div>
      
      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center">
        
        {/* Floating Icon */}
        <div className="mb-12 relative animate-float">
          <div className="w-20 h-20 bg-gradient-to-b from-neutral-800 to-black rounded-2xl border border-white/10 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Sparkles className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white/50 blur-[1px]"></div>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>

        {/* Introduction Pill */}
        <div className="mb-8">
           <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              INTRODUCTION
           </span>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl leading-[1.1]">
          What is <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500">Dnyantra</span> ?
        </h2>

        {/* Content Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-16 leading-relaxed font-light">
          Dnyantra is a tech startup working on cutting-edge, complex, and innovative solutions in a diverse range of fields.
          We specialize in <span className="text-white font-medium">Applied AI</span>, 
          <span className="text-white font-medium"> Mobile Application Development</span>, and 
          <span className="text-white font-medium"> Desktop Media Applications</span>.
        </p>

        {/* Tech Stack Strip */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 group cursor-default">
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold group-hover:text-white transition-colors">GitHub</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <Database className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-semibold group-hover:text-white transition-colors">Google Cloud</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <Code className="w-5 h-5 text-gray-300 group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm font-semibold group-hover:text-white transition-colors">TypeScript</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <Layers className="w-5 h-5 text-gray-300 group-hover:text-purple-400 transition-colors" />
                <span className="text-sm font-semibold group-hover:text-white transition-colors">Alchemy</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
                <Globe className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm font-semibold group-hover:text-white transition-colors">Electron</span>
            </div>
        </div>
      </div>
    </section>
  );
};