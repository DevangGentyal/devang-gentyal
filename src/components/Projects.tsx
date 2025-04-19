import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute right-0 top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Check out my latest work"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 transition-all duration-500 hover:border-cyan-500/50 flex flex-col h-full"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl pointer-events-none" />


              <div className="p-6 flex flex-col h-full">
                {/* Icon and Title Section - Fixed Height */}
                <div className="mb-4">
                  <div className="text-4xl mb-3">{project.icon}</div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Description Section - Fixed Height */}
                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Section - Fixed Height */}
                <div className="mb-6">

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1.5 rounded-full bg-gray-700/50 text-cyan-300 border border-cyan-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Section */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 transition-opacity duration-500 pointer-events-none ${hoverIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;