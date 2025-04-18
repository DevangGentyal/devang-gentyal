import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'BTech in AI & DS',
      institution: 'Vishwakarma Institute of Technology',
      period: '2024 - 2027',
      grade: 'Pursuing',
      icon: '🎓',
      color: 'from-cyan-500 to-cyan-300'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Government Polytechnic Pune',
      period: '2021 - 2024',
      grade: '93%',
      icon: '💻',
      color: 'from-purple-500 to-purple-300'
    },
    {
      degree: 'Secondary School',
      institution: 'Dynanprabodhini English Medium School',
      period: '2020 - 2021',
      grade: '96%',
      icon: '📚',
      color: 'from-fuchsia-500 to-fuchsia-300'
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey" 
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-fuchsia-500 hidden md:block"></div>
            
            {educationData.map((item, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row gap-4 mb-12"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 z-10 w-16 h-16 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center">
                  <div className="text-3xl">{item.icon}</div>
                </div>
                
                {/* Content */}
                <div className="flex-1 md:pt-2">
                  <div 
                    className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl" />
                    
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    
                    <p className={`bg-gradient-to-r ${item.color} text-transparent bg-clip-text font-medium mb-3`}>
                      {item.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap size={14} />
                        <span>{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;