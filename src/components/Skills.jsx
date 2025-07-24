import React from 'react';
import { Brain, Code2, Database, Cpu, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Neural Networks'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'R', 'Java', 'C++'],
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Data Science',
      icon: TrendingUp,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
      color: 'from-indigo-500 to-blue-400'
    },
    {
      title: 'Cloud & MLOps',
      icon: Cpu,
      skills: ['AWS', 'Docker', 'Kubernetes', 'MLflow', 'Git'],
      color: 'from-green-500 to-teal-400'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'NoSQL'],
      color: 'from-orange-500 to-red-400'
    },
    {
      title: 'AI Tools',
      icon: Zap,
      skills: ['OpenAI API', 'Hugging Face', 'LangChain', 'NLTK', 'spaCy'],
      color: 'from-yellow-500 to-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-400">
            Expertise across the AI and software development spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-on-scroll group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:shadow-lg transition-shadow`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-600/50 transition-colors"
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