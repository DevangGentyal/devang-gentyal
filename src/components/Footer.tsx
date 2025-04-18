import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400">
            Devang Gentyal © {new Date().getFullYear()}
          </p>
        </div>
        
        <div className="flex items-center gap-1 text-gray-400">
          <span>Built with</span>
          <Heart size={14} className="text-red-500 animate-pulse" />
          <span>, code, and AI 🤖</span>
        </div>
        
        <div className="hidden md:block">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;