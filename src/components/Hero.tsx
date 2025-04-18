import React from 'react';
import { FileText, Github } from 'lucide-react';
import Button from './common/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-900 opacity-70" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full blur-[100px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-fuchsia-500 rounded-full blur-[100px] opacity-10 animate-blob animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-8">
            <h2 className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 font-medium relative z-10 mb-2">
              Hey, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter relative z-10">
              Devang Gentyal
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
            <span className="font-medium text-cyan-400">AI & DS student</span> · 
            <span className="mx-2 font-medium text-purple-400">Coder</span> · 
            <span className="font-medium text-fuchsia-400">Creator</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" icon={<FileText size={18} />}>
              Resume PDF
            </Button>
            <Button variant="secondary" icon={<Github size={18} />}>
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;