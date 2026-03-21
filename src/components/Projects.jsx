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
      title: 'Oil Spill Detection',
      description: 'An AI-powered system designed to detect oil spills from satellite imagery using advanced computer vision techniques, helping protect marine ecosystems.',
      icon: 'Waves',
      tech: ['Python', 'Deep Learning', 'Computer Vision'],
      gradient: 'from-emerald-500 to-cyan-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Oil_Spill_Detection'
    },
    {
      title: 'GitHub Vulnerability Analytics',
      description: 'A Big Data analytics pipeline that processes and analyzes vulnerability data from GitHub repositories to uncover security trends and insights.',
      icon: 'ShieldCheck',
      tech: ['Big Data', 'Spark', 'Python', 'Analytics'],
      gradient: 'from-teal-500 to-cyan-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/GitHub_Vulnerability_Analytics_using_BigData'
    },
    {
      title: 'ABMEL – Marketing Engagement Loop',
      description: 'A predictive marketing analytics model that uses machine learning to optimize user engagement and improve marketing campaign ROI.',
      icon: 'LineChart',
      tech: ['Machine Learning', 'Data Analysis', 'Python'],
      gradient: 'from-cyan-500 to-emerald-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/ABMEL---Marketing-Engagement-loop'
    },
    {
      title: 'DDoS Detection in SDN',
      description: 'Real-time DDoS detection and mitigation system in Software Defined Networking environments utilizing machine learning algorithms.',
      icon: 'Activity',
      tech: ['Python', 'Mininet', 'RYU', 'ML Models'],
      gradient: 'from-green-500 to-teal-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/DDoS-Detection-using-ML-in-SDN-env'
    },
    {
      title: 'MovieInferno DBMS Cloud',
      description: 'Cloud-based movie management platform integrating a structured database with an AI chatbot for personalized movie suggestions.',
      icon: 'Popcorn',
      tech: ['Next.js', 'Supabase', 'Cloud DB', 'API'],
      gradient: 'from-yellow-500 to-orange-400',
      link: 'https://movie-inferno-dbms-cloud.vercel.app/#',
      github: 'https://github.com/Varshithathi2006/MovieInferno_DBMS_Cloud'
    },
    {
      title: 'Cryptography Web Applications',
      description: 'A suite of web-based cryptographic tools demonstrating various encryption algorithms and secure communication protocols.',
      icon: 'ShieldCheck',
      tech: ['Cryptography', 'Web Security', 'Algorithms'],
      gradient: 'from-red-500 to-orange-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Cryptography_and_its_web_applications'
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