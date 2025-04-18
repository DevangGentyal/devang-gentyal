import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform translate-y-2" />
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;