import React from 'react';
import SectionHeading from './common/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="About Me" subtitle="Get to know more about me" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 to-cyan-500/20" />
            <img 
              src="../../public/about-img-1.png" 
              alt="Programmer working on code" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent h-1/3" />
          </div>
          
          <div data-aos="fade-left">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a student pursuing a BTech in <span className="text-cyan-400 font-medium">Artificial Intelligence and Data Science</span> at Vishwakarma Institute of Technology.
            </p>
            
            {/* <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I completed my Diploma in Information Technology from Government Polytechnic Pune with <span className="text-purple-400 font-medium">93%</span>.
            </p> */}
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Passionate about tech, I explore <span className="text-fuchsia-400 font-medium">Web & App Development</span> and <span className="text-cyan-400 font-medium">AI/ML</span>.
            </p>
            
            <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 mb-8 group hover:border-cyan-500/50 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl" />
              <blockquote className="relative text-xl italic text-gray-200">
                "Merging logic and creativity to build futuristic solutions."
              </blockquote>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                <div className="text-lg font-semibold mb-1 bg-gradient-to-r from-cyan-400 to-cyan-300 text-transparent bg-clip-text">
                  Education
                </div>
                <p className="text-gray-400">
                  BTech in AI & DS
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
                <div className="text-lg font-semibold mb-1 bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text">
                  Experience
                </div>
                <p className="text-gray-400">
                  Backend Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;