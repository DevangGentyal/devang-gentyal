import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Experience" subtitle="Where I've worked" />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div 
            className="relative group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50"
            data-aos="fade-up"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl" />
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-md bg-gray-700/50 flex items-center justify-center">
                <div className="text-3xl">💻</div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">Backend Developer Intern</h3>
                <p className="text-cyan-400 font-medium mb-2">Crystal Web Pune</p>
                
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Apr 2023 – June 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
                
                <p className="text-gray-300">
                  Worked on backend systems for Ecommerce, Listing & Classified sites using PHP.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                    PHP
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                    MySQL
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                    Backend
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 rounded-xl bg-gray-800/20 border border-gray-800">
            <p className="text-center text-gray-400 italic">
              Currently open to new opportunities and collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;