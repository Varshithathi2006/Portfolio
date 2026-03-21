import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import hack2skillCert from '../assets/Hack2skill-Certificate (2).png';
import ociCert from '../assets/OCI25AICFA.jpeg';
import genJournalsImage from '../assets/image.png';

const Awards = () => {
  const awards = [
    {
      title: 'IEEE Conference Paper Presenter',
      organization: 'ETIS, Trivandrum (2024)',
      date: '2024',
      description: 'Presented paper at IEEE Conference on Time-Frequency Analysis of PQD (MATLAB); published on IEEE Xplore.',
      link: 'https://ieeexplore.ieee.org/document/10961578',
      icon: Trophy,
      color: 'from-emerald-500 to-teal-400'
    },
    {
      title: 'Finalist, Cubicle Code 5.0 Hackathon',
      organization: 'Geek Rooms with Pathway & TRAE at Microsoft, Bangalore',
      date: '2025',
      description: 'Recognized for building innovative and efficient solutions in the Cubicle Code 5.0 hackathon.',
      icon: Medal,
      color: 'from-cyan-500 to-emerald-400'
    },
    {
      title: 'Finalist, GenAI Hackathon',
      organization: 'Value Health Org',
      date: '2024',
      description: 'Built GenJournals AI journaling app utilizing contextual NLP and GenAI models.',
      icon: Medal,
      color: 'from-teal-500 to-emerald-400',
      imageUrl: genJournalsImage
    },
    {
      title: 'Full Stack (MERN) Course',
      organization: 'IITM Research Park',
      date: '',
      description: 'Completed extensive training in Full Stack Development using MongoDB, Express, React, and Node.js.',
      icon: Star,
      color: 'from-emerald-500 to-cyan-400'
    },
    {
      title: 'GenAI Course (Multimodal RAG)',
      organization: 'GenAI Academy',
      date: '',
      description: 'Completed specialized GenAI course focused on Multimodal RAG implementations.',
      icon: Star,
      color: 'from-cyan-500 to-teal-400',
      imageUrl: hack2skillCert
    },
    {
      title: 'Oracle CI 2025 Certified Foundations Associate',
      organization: 'Oracle',
      date: '2025',
      description: 'Achieved certification demonstrating foundational knowledge in Oracle Cloud Infrastructure.',
      icon: Award,
      color: 'from-emerald-500 to-cyan-400',
      imageUrl: ociCert
    }
  ];

  return (
    <section id="awards" className="py-20 px-6 lg:px-12 mb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EA4326] dark:text-emerald-400 transition-colors">
            Awards & Recognition
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors">
            Celebrating achievements in artificial intelligence and research
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-400 hidden md:block"></div>

          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={award.title}
                className="animate-on-scroll relative mb-12 md:ml-20"
                style={{ animationDelay: `${Math.min(index * 0.2, 1)}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-12 top-8 w-6 h-6 rounded-full bg-gradient-to-r ${award.color} hidden md:block shadow-lg`}></div>
                
                <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 p-8 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none hover:border-emerald-500/50 dark:hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                     {/* Mobile Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${award.color} p-3 flex-shrink-0 md:hidden`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Desktop Icon - optional, but user likes it. The previous layout actually always showed the mobile icon even on desktop, looking at the code `flex-shrink-0`. */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${award.color} p-3 flex-shrink-0 hidden md:block`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 transition-colors">
                        {award.link ? (
                          <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white hover:text-[#EA4326] dark:hover:text-emerald-400 hover:underline transition-colors duration-300">
                            {award.title}
                          </a>
                        ) : (
                          <span className="text-slate-900 dark:text-white transition-colors">{award.title}</span>
                        )}
                      </h3>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-[#EA4326] dark:text-emerald-400 font-semibold transition-colors">{award.organization}</span>
                        {award.date && <span className="text-slate-500 dark:text-slate-400 transition-colors">{award.date}</span>}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 transition-colors">{award.description}</p>
                      
                      {award.imageUrl && (
                        <div className="mt-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-900/50 overflow-hidden transition-colors">
                          <img 
                            src={award.imageUrl} 
                            alt={`${award.title} Certificate`} 
                            className="w-full h-auto max-h-96 object-contain mix-blend-multiply dark:mix-blend-normal transition-all"
                          />
                        </div>
                      )}
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