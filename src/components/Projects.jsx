import React from 'react';
import { Github, Bot, BarChart3 } from 'lucide-react';

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
  ClipboardList: FallbackIcon
};

const Projects = () => {
  const projects = [
    {
      title: 'Phishing Website Detection',
      description: 'Built a machine learning system to detect phishing websites by analyzing features and improving classification accuracy.',
      icon: 'ShieldCheck',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
      gradient: 'from-blue-500 to-cyan-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Phishing_Website_Detection-FAI'
    },
    {
      title: 'Smart Forklift Prototype',
      description: 'Designed an automated forklift simulation using Raspberry Pi and Pygame with stress visualization and predictive maintenance logic.',
      icon: 'Truck',
      tech: ['Python', 'Raspberry Pi 4B', 'Pygame', 'OpenGL'],
      gradient: 'from-purple-500 to-pink-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Automatic_Forklift_prototype'
    },
    {
      title: 'DDoS Detection in SDN',
      description: 'Developed a real-time DDoS detection and mitigation system using ML algorithms in SDN environments with RYU controller.',
      icon: 'Activity',
      tech: ['Python', 'Mininet', 'RYU', 'SVM', 'Random Forest'],
      gradient: 'from-indigo-500 to-blue-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/DDoS-Detection-using-ML-in-SDN-env'
    },
    {
      title: 'Eater Ease – Online Restaurant',
      description: 'Built a fully responsive UI for a restaurant web application, enhancing user experience and improving frontend skills.',
      icon: 'Utensils',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
      gradient: 'from-green-500 to-teal-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Responsive_Restaurant_website_using-HTML_CSS_Js'
    },
    {
      title: 'Time-Frequency Analysis on PQD',
      description: 'Applied advanced signal processing techniques in MATLAB to analyze power quality disturbances and waveform anomalies.',
      icon: 'Waves',
      tech: ['MATLAB', 'Signal Processing'],
      gradient: 'from-yellow-500 to-orange-400',
      github: 'https://github.com/Varshithathi2006/Time-Frequency-Analysis-of-PQD-using-Signal-Processing-techniques'
    },
    {
      title: 'Statistical Analysis Using ADMM',
      description: 'Explored Graphical Lasso and ADMM methods for statistical modeling and visualization using mathematical derivations.',
      icon: 'LineChart',
      tech: ['Mathematics', 'Graphical Lasso', 'ADMM'],
      gradient: 'from-rose-500 to-pink-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Optimization-using-ADMM'
    },
    {
      title: 'Text to Morse Code Converter',
      description: 'Created a Java-based GUI application that converts English text to Morse code with slider controls for speed and volume.',
      icon: 'MessageCircle',
      tech: ['Java', 'Swing', 'OOP'],
      gradient: 'from-red-500 to-orange-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Morse_Code_Converter'
    },
    {
      title: 'Canteen Management System',
      description: 'Developed a command-line based canteen order and inventory management tool, reinforcing core concepts in C programming.',
      icon: 'ClipboardList',
      tech: ['C', 'File Handling', 'Data Structures'],
      gradient: 'from-slate-600 to-gray-400',
      link: '#',
      github: 'https://github.com/Varshithathi2006/Canteen_Management_System'
    }    
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400">
            Innovative AI solutions and machine learning applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon] || FallbackIcon;
            return (
              <div
                key={project.title}
                className="animate-on-scroll group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-300"
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