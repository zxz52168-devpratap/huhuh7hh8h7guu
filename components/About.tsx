import React from 'react';
import { SKILLS, EXPERIENCE } from '../constants';
import SkillChart from './SkillChart';
import { Calendar, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Biography & Experience */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="prose prose-invert text-gray-400 mb-8">
              <p>
                I am a passionate developer who bridges the gap between design and technology.
                With over 5 years of experience in the industry, I have honed my skills in
                creating intuitive user interfaces and robust backend systems.
              </p>
              <p className="mt-4">
                Recently, I have been deeply focused on integrating Large Language Models (LLMs)
                like Gemini into web applications to create smarter, more adaptive user experiences.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-gray-800">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                    <Briefcase size={14} className="mr-1" />
                    <span className="mr-3">{exp.company}</span>
                    <Calendar size={14} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Visualization */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
            <p className="text-gray-400 mb-6">
              A visual representation of my proficiency in key technologies.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-card border border-gray-700 rounded-full text-sm text-gray-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-card border border-gray-800 p-6 rounded-2xl shadow-lg">
               <h4 className="text-lg font-medium text-white mb-2">Proficiency Metrics</h4>
               <SkillChart skills={SKILLS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;