import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'AI & ML Certification',
      organization: 'Plasmid Edutech',
      date: 'October 2023',
      description: 'Completed hands-on training in Artificial Intelligence & Machine Learning over a 2-month intensive course.',
      icon: Star,
      color: 'from-green-500 to-teal-400'
    },
    {
      title: 'Full Stack Development Course',
      organization: 'Copter Code-IITM research park',
      date: 'June 2025',
      description: 'Completed hands-on training in Full Stack Development(MERN).',
      icon: Star,
      color: 'from-green-500 to-teal-400'
    },
    {
      title: 'IEEE Conference Paper Presenter',
      organization: 'ETIS, Trivandrum – IEEE',
      date: 'April 2024',
      description: 'Presented a paper on “Time-Frequency Analysis on PQD” using advanced signal processing techniques. Published in IEEE Xplore.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-400'
    },
    {
      title: 'GenAI Hackathon Finalist',
      organization: 'Value Health Org',
      date: 'February 2024',
      description: 'Selected as finalist for “GenJournals,” an AI-powered mental health journaling tool designed with contextual NLP.',
      icon: Medal,
      color: 'from-purple-500 to-pink-400'
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

          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
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
                      <Icon className="w-6 h-6 text-white" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards; 