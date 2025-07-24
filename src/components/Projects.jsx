import React from 'react';
import { ExternalLink, Github, Bot, Image, BarChart3, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot',
      description: 'Developed an intelligent conversational AI using natural language processing and machine learning algorithms.',
      icon: Bot,
      tech: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'React'],
      gradient: 'from-blue-500 to-cyan-400',
      link: '#',
      github: '#'
    },
    {
      title: 'Computer Vision System',
      description: 'Built a real-time object detection and classification system using deep learning models.',
      icon: Image,
      tech: ['PyTorch', 'OpenCV', 'YOLO', 'Python', 'Docker'],
      gradient: 'from-purple-500 to-pink-400',
      link: '#',
      github: '#'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Created a comprehensive analytics dashboard for business intelligence and forecasting.',
      icon: BarChart3,
      tech: ['Scikit-learn', 'Pandas', 'Plotly', 'Streamlit', 'AWS'],
      gradient: 'from-indigo-500 to-blue-400',
      link: '#',
      github: '#'
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'Developed a social media sentiment analysis tool using transformer models and NLP techniques.',
      icon: MessageSquare,
      tech: ['Transformers', 'BERT', 'Twitter API', 'FastAPI', 'PostgreSQL'],
      gradient: 'from-green-500 to-teal-400',
      link: '#',
      github: '#'
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
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-on-scroll group relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow`}>
                <project.icon className="w-8 h-8 text-white" />
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
                  href={project.link}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.github}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 