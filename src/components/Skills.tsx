import React, { useState } from 'react';
import { Code, Database, Layout, Smartphone, GitBranch, Figma } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  
  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming',
      icon: <Code className="w-5 h-5" />,
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'PHP']
    },
    {
      id: 'web',
      name: 'Web',
      icon: <Layout className="w-5 h-5" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    {
      id: 'app',
      name: 'App Dev',
      icon: <Smartphone className="w-5 h-5" />,
      skills: ['Flutter', 'Java']
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database className="w-5 h-5" />,
      skills: ['MySQL', 'Supabase', 'Firebase']
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: <Figma className="w-5 h-5" />,
      skills: ['GitHub', 'Figma']
    }
  ];
  
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute right-10 top-1/3 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Skills" 
          subtitle="What I'm good at" 
        />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {/* Skills Categories */}
          <div 
            className="flex overflow-x-auto pb-4 gap-2 md:gap-4 mb-8 md:justify-center"
            data-aos="fade-up"
          >
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 py-2 px-4 md:px-6 rounded-full transition-all whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium' 
                    : 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/60 hover:text-gray-300'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            data-aos="fade-up"
          >
            {activeSkills.map((skill, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl" />
                
                <div className="text-4xl mb-3">
                  {
                    skill === 'Python' ? '🐍' :
                    skill === 'Java' ? '☕' :
                    skill === 'C/C++' ? '©️' :
                    skill === 'JavaScript' ? '🟨' :
                    skill === 'PHP' ? '🐘' :
                    skill === 'HTML' ? '🌐' :
                    skill === 'CSS' ? '🎨' :
                    skill === 'Flutter' ? '💙' :
                    skill === 'MySQL' ? '🛢️' :
                    skill === 'Supabase' ? '⚡' :
                    skill === 'Firebase' ? '🔥' :
                    skill === 'GitHub' ? '🐙' :
                    skill === 'Figma' ? '🎯' : '🔧'
                  }
                </div>
                <span className="text-center font-medium text-white">{skill}</span>
                
                <div className="w-full h-1 mt-3 rounded-full overflow-hidden bg-gray-700">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" style={{ 
                    width: `${(Math.random() * 40) + 60}%` 
                  }} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Skill Label */}
          <div className="mt-8 text-center text-gray-400">
            <span>And many more skills continuously being developed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;