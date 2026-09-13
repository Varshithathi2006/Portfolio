import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experience = {
    role: 'AI/ML Intern',
    company: 'Michelin India Private Limited',
    location: 'Pune',
    period: 'Aug 2026 - Present',
    responsibilities: [
      'Working on AI-powered NL2SQL projects that enable users to interact with and retrieve insights from enterprise data using conversational queries.',
      'Contributing to semantic layer solutions that standardize business definitions and improve consistency in data interpretation and analytics.',
      'Exploring LLM, NLP, and data-to-query workflows while collaborating with data and AI teams to translate business requirements into scalable AI/ML solutions.'
    ]
  };

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EA4326] dark:text-emerald-400 transition-colors">
            Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors">
            Building practical AI solutions with data and language models
          </p>
        </div>

        <div className="relative animate-on-scroll md:ml-20">
          <div className="absolute -left-12 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 hidden md:block shadow-lg"></div>
          <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 shadow-sm hover:shadow-xl dark:shadow-none hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-400 p-3 flex-shrink-0 md:hidden">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{experience.role}</h3>
                <h4 className="text-xl text-emerald-600 dark:text-emerald-300 transition-colors">{experience.company}</h4>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-slate-600 dark:text-slate-400 transition-colors">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>

            <ul className="space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed list-disc pl-5 transition-colors">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;