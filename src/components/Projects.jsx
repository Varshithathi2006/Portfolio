import React from 'react';
import { Github, Bot, BarChart3, Popcorn } from 'lucide-react';

// Fallback icon for any missing icons
const FallbackIcon = Bot;

const iconMap = {
  ShieldCheck: FallbackIcon,
  Truck: FallbackIcon,
  Activity: FallbackIcon,
  Utensils: FallbackIcon,
  Waves: FallbackIcon,
  LineChart: BarChart3,
  MessageCircle: FallbackIcon,
  ClipboardList: FallbackIcon,
  Popcorn: Popcorn
};

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Legal Assistant & Case Retrieval System',
      description: 'An AI-based legal assistant and case retrieval system designed to help users interact with legal information through intelligent retrieval and natural-language and speech-based interaction.',
      icon: 'MessageCircle',
      tech: ['Artificial Intelligence', 'NLP', 'Speech Processing', 'Information Retrieval', 'Legal Document Retrieval', 'Question Answering'],
      gradient: 'from-indigo-500 to-cyan-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Legal-Speech-project'
    },
    {
      title: 'Oil Spill Drift Forecasting',
      description: 'A CNN-LSTM-Attention forecasting system that predicts oil spill movement using SAR imagery, ocean currents, wind fields, and bathymetry.',
      icon: 'Waves',
      tech: ['Python', 'Deep Learning', 'Computer Vision'],
      gradient: 'from-emerald-500 to-cyan-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Oil_Spill_Detection'
    },
    {
      title: 'Battery Data Extraction - LLM + XAI Pipeline',
      description: 'A document analytics pipeline that extracts battery-performance metrics from scientific literature and produces explainable visual reports and CSV exports.',
      icon: 'LineChart',
      tech: ['Python', 'LLMs', 'XAI', 'Data Visualization'],
      gradient: 'from-teal-500 to-cyan-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Battery_DB_Extraction'
    },
    {
      title: 'Movie Inferno - AI Recommendation Platform',
      description: 'A full-stack movie recommendation platform with backend APIs, real-time database synchronization, and cloud deployment workflows.',
      icon: 'Popcorn',
      tech: ['Next.js', 'Supabase', 'REST APIs', 'Cloud Deployment'],
      gradient: 'from-yellow-500 to-orange-400',
      link: 'https://movie-inferno-dbms-cloud.vercel.app/#',
      github: 'https://github.com/Varshithathi2006/MovieInferno_DBMS_Cloud'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EA4326] dark:text-emerald-400 transition-colors">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors">
            Innovative AI solutions and machine learning applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || FallbackIcon;
            return (
              <div
                key={project.title}
                className="animate-on-scroll group relative p-8 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:transform hover:scale-105 shadow-sm hover:shadow-xl dark:shadow-none"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-shadow`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects; 