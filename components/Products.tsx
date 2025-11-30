import React from 'react';
import { Product } from '../types';
import { Cpu, Camera, Wand2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const products: Product[] = [
  {
    id: 'crystal-ai',
    title: 'Crystal AI',
    description: "Building AI applications shouldn't require compromising on flexibility. Our platform gives you the freedom to implement multi-step AI agents and integrate with any service, maintaining code-level precision.",
    features: ['Multi-step AI Agents', 'Scalable Infrastructure', 'Coding-centric Control', 'Custom Service Integration'],
    launchDate: 'Q1 2026',
    icon: Cpu,
    category: 'AI Infrastructure'
  },
  {
    id: 'teleprompter-pro',
    title: 'Teleprompter Pro',
    description: "The ultimate desktop tool for creators. Built with Electron & React, offering hardware-level camera control, smooth 60fps scrolling, and studio-quality audio monitoring.",
    features: ['UVC Camera Control (ISO, Focus)', '60fps Smooth Engine', 'Real-time Audio VU Meters', 'High-bitrate Recording'],
    launchDate: 'Q1 2026',
    icon: Camera,
    category: 'Media Tools'
  },
  {
    id: 'jadui-ai',
    title: 'Jadui AI',
    description: "A magical, AI-powered design platform. Describe your idea, and instantly generate stunning social media templates, layouts, and assets. Zero design skills required—just pure AI magic.",
    features: ['Text-to-Design Generation', 'Smart Auto-Layout', 'Brand-Aware Styling', 'Instant Asset Creation'],
    launchDate: 'Q1 2026',
    icon: Wand2,
    category: 'Generative Design'
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-32 relative bg-black scroll-mt-28">
        {/* Section Header */}
        <div className="container mx-auto px-6 mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                    <span className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-2 block">Our Innovation</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Launching Soon</h2>
                </div>
                <div className="text-right">
                    <p className="text-gray-400">Target Release</p>
                    <p className="text-2xl font-mono text-white">Q1 2026</p>
                </div>
            </div>
        </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group relative bg-neutral-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
          >
            {/* Hover Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

            {/* Card Header */}
            <div className="p-8 pb-4 relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                        <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-wider text-gray-400 border border-white/5">
                        {product.category}
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {product.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {product.description}
                </p>
            </div>

            {/* Features List */}
            <div className="px-8 pb-8 relative z-10 flex-grow">
                <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                            <CheckCircle2 className="w-4 h-4 text-neutral-600 mt-0.5 shrink-0 group-hover:text-blue-500/50 transition-colors" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-auto border-t border-white/5 p-6 bg-white/[0.02] flex items-center justify-between group-hover:bg-white/[0.04] transition-colors relative z-10">
                <span className="text-xs text-gray-500 font-mono">Status: In Development</span>
                <button className="text-white text-sm font-medium flex items-center gap-2 group/btn">
                    Details <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};