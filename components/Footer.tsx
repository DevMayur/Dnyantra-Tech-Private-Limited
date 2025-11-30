import React from 'react';
import { Hexagon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-gray-600" />
            <span className="text-gray-400 font-bold tracking-tight">DNYANTRA TECH</span>
        </div>

        <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Dnyantra Tech Pvt Ltd. All rights reserved.
        </div>

        <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};