import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1)
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Header height + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
            {/* Blue Blob - Moves opposite to mouse */}
            <div 
                className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse-slow transition-transform duration-100 ease-out will-change-transform"
                style={{ 
                    transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` 
                }}
            ></div>
            
            {/* Purple Blob - Moves with mouse */}
            <div 
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse-slow delay-1000 transition-transform duration-100 ease-out will-change-transform"
                style={{ 
                    transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` 
                }}
            ></div>
            
            {/* Grid - Subtle movement */}
            <div 
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] transition-transform duration-75 ease-out will-change-transform"
                style={{ 
                    transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` 
                }}
            ></div>
        </div>

        <div className="container relative z-10 px-6 text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up">
                <span className="text-xs font-medium tracking-widest text-blue-400 uppercase">Innovating Reality</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 animate-fade-in-up delay-100">
                DNYANTRA
                <span className="block text-3xl md:text-5xl lg:text-6xl font-light text-gray-500 mt-2 tracking-widest uppercase">
                    Technology
                </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed animate-fade-in-up delay-200">
                Pioneering complex innovative solutions in Applied AI, Mobile Development, and Media Tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                <a 
                    href="#about"
                    onClick={(e) => handleScroll(e, '#about')}
                    className="group px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer"
                >
                    Discover Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                    href="#products"
                    onClick={(e) => handleScroll(e, '#products')}
                    className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all cursor-pointer"
                >
                    View Products
                </a>
            </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce pointer-events-none">
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
    </section>
  );
};