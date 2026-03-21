import React from 'react';
import { Brain, Code2, Database, Cpu, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Python', 'Scikit-learn', 'Machine Learning', 'Predictive Modeling'],
      color: 'from-emerald-500 to-cyan-400'
    },
    {
      title: 'Deep Learning',
      icon: Zap,
      skills: ['TensorFlow', 'PyTorch', 'Neural Networks', 'Computer Vision'],
      color: 'from-teal-500 to-cyan-400'
    },
    {
      title: 'Big Data & Analytics',
      icon: Database,
      skills: ['Apache Spark', 'Big Data', 'Data Analysis', 'Pandas'],
      color: 'from-cyan-500 to-emerald-400'
    },
    {
      title: 'Cybersecurity',
      icon: Cpu,
      skills: ['Network Security', 'Vulnerability Analytics', 'Phishing Detection', 'Cryptography'],
      color: 'from-green-500 to-teal-400'
    },
    {
      title: 'Programming & Web',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'React', 'Tailwind CSS', 'SQL'],
      color: 'from-orange-500 to-red-400'
    },
    {
      title: 'Tools & Technologies',
      icon: TrendingUp,
      skills: ['Git', 'GitHub', 'Cloud Computing', 'Jupyter', 'Linux'],
      color: 'from-yellow-500 to-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EA4326] dark:text-emerald-400 transition-colors">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors">
            Expertise across the AI and software development spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-on-scroll group p-6 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-xl dark:shadow-none"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:shadow-lg transition-shadow`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white transition-colors">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 