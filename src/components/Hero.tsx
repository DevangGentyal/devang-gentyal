import React, { useEffect, useState } from 'react';
import { FileText, Github } from 'lucide-react';
import Button from './common/Button';
import '../assets/fonts.css';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Interactive gradient background */}
      <div 
        className="absolute inset-0 transition-all duration-200 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(147, 51, 234, 0.3) 0%, 
            rgba(79, 70, 229, 0.3) 25%,
            rgba(0, 0, 0, 0.95) 50%
          )`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-violet-600/20 rounded-full blur-[100px] animate-pulse animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-8">
            <h2 className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 font-medium relative z-10 mb-2">
              Hey, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter relative z-10 font-myfont tracking-wide">
              Devang Gentyal
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl pt-5">
            <span className="font-medium text-cyan-400">AI & DS student</span> ·
            <span className="mx-2 font-medium text-purple-400">Coder</span> ·
            <span className="font-medium text-fuchsia-400">Creator</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" icon={<FileText size={18} />}>
                Resume PDF
              </Button>
            </a>

            <a href="https://github.com/DevangGentyal/" target="_blank">
              <Button variant="secondary" icon={<Github size={18} />}>
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;