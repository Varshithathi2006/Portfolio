import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Best AI Innovation Award',
      organization: 'Tech Innovation Summit 2024',
      date: 'March 2024',
      description: 'Recognized for developing an innovative AI solution that demonstrates exceptional creativity and technical excellence.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-400'
    },
    {
      title: 'Outstanding Research Paper',
      organization: 'International Conference on Machine Learning',
      date: 'December 2023',
      description: 'Published research on transformer architecture optimization, cited by leading AI researchers.',
      icon: Award,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Hackathon Winner - AI Category',
      organization: 'Global AI Hackathon',
      date: 'September 2023',
      description: 'First place winner for developing a real-time natural language processing application in 48 hours.',
      icon: Medal,
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Academic Excellence Scholarship',
      organization: 'Stanford University',
      date: 'August 2022',
      description: 'Merit-based scholarship awarded to top 5% of incoming graduate students in Computer Science.',
      icon: Star,
      color: 'from-green-500 to-teal-400'
    }
  ];

  return (
    <section id="awards" className="py-20 px-6 lg:px-12 mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-xl text-slate-400">
            Celebrating achievements in artificial intelligence and research
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

          {awards.map((award, index) => (
            <div
              key={award.title}
              className="animate-on-scroll relative mb-12 md:ml-20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-12 top-8 w-6 h-6 rounded-full bg-gradient-to-r ${award.color} hidden md:block shadow-lg`}></div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${award.color} p-3 flex-shrink-0`}>
                    <award.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-blue-300 font-medium">{award.organization}</span>
                      <span className="text-slate-400">{award.date}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 