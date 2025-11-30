import React from 'react';
import { Zap, Shield, Globe2, ArrowRight } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-black relative overflow-hidden scroll-mt-28">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
            
            <div className="flex-1 md:sticky md:top-32">
                 <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Vision</span>
                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Building the <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Infrastructure</span> <br/>
                    of Tomorrow
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                    We believe in a future where AI, media, and commerce converge seamlessly. At Dnyantra, we aren't just building apps; we are architecting the protocol layer for the next generation of computing, bridging on-chain logic with real-world applications.
                </p>
                <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition-all group">
                    Read our manifesto <ArrowRight className="w-4 h-4 group-hover:text-blue-400" />
                </button>
            </div>

            <div className="flex-1 grid gap-6">
                <div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/40 transition-colors group">
                    <div className="mb-6 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Real-Time Performance</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Our solutions like Teleprompter Pro are optimized for 60fps rendering and low-latency processing, ensuring professional-grade reliability.
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/40 transition-colors group">
                    <div className="mb-6 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                        <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                    From creative automation in Jadui AI to local-first processing in Crystal AI, user security and privacy are our architectural baselines.
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/40 transition-colors group">
                    <div className="mb-6 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Globe2 className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Global Scale</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                    Infrastructure designed to scale globally from day one, supporting creators and vendors worldwide with edge-optimized performance.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};