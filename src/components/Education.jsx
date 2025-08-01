import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology inComputer Science and Engineering-Artificial Intelligence',
      institution: 'Amrita Vishwa Vidyapeetham',
      location: 'Ettimadai,Coimbatore',
      period: '2023 - 2027',
      description: ' I am basically a philomath passionate and driven individual with a keen interest in technology and innovation. Enjoy exploring AI, coding, and building practical solutions to real-world problems.With a blend of creativity and technical skills, would love to thrive in collaborative environments.Always eager to learn, continuously seek opportunities to grow and make a positive impact.',
      achievements: ['GPA: 8.47/10', 'CSE-AI'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      degree: '12th grade',
      institution: 'Velammal Vidyalaya',
      location: 'Mel-Ayyanambakkam,Chennai',
      period: '2023',
      description: '',
      color: 'from-purple-500 to-pink-400',
      achievements: ['I have completed my 12th grade in the year 2023 with a score of 87.2%']
    },
    {
      degree: '10th grade',
      institution: 'Maharishi Vidya Mandir',
      location: 'Mangadu,Chennai',
      period: '2021',
      description: '',
      color: 'from-purple-500 to-pink-400',
      achievements: ['I have completed my 10th grade in the year 2023 with a score of 93.6%']
    }
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-slate-400">
            Academic foundation in artificial intelligence and computer science
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className="animate-on-scroll relative mb-12 md:ml-20"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-12 top-8 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} hidden md:block shadow-lg`}></div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} p-3 md:hidden`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:ml-0 ml-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-blue-300 mb-2">{edu.institution}</h4>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{edu.description}</p>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                      >
                        {achievement}
                      </span>
                    ))}
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

export default Education; 