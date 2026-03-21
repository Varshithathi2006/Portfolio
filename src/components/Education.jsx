import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering-Artificial Intelligence',
      institution: 'Amrita Vishwa Vidyapeetham',
      location: 'Ettimadai,Coimbatore',
      period: '2023 - 2027',
      description: ' I am basically a philomath passionate and driven individual with a keen interest in technology and innovation. Enjoy exploring AI, coding, and building practical solutions to real-world problems.With a blend of creativity and technical skills, would love to thrive in collaborative environments.Always eager to learn, continuously seek opportunities to grow and make a positive impact.',
      achievements: ['GPA: 8.5/10', 'CSE-AI'],
      color: 'from-emerald-500 to-cyan-400'
    },
    {
      degree: '12th grade',
      institution: 'Velammal Vidyalaya',
      location: 'Mel-Ayyanambakkam,Chennai',
      period: '2023',
      description: '',
      color: 'from-teal-500 to-cyan-400',
      achievements: ['I have completed my 12th grade in the year 2023 with a score of 87.2%']
    },
    {
      degree: '10th grade',
      institution: 'Maharishi Vidya Mandir',
      location: 'Mangadu,Chennai',
      period: '2021',
      description: '',
      color: 'from-teal-500 to-cyan-400',
      achievements: ['I have completed my 10th grade in the year 2023 with a score of 93.6%']
    }
  ];

  return (
    <section id="education" className="py-20 px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EA4326] dark:text-emerald-400 transition-colors">
            Education
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 transition-colors">
            Academic foundation in artificial intelligence and computer science
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-400 hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className="animate-on-scroll relative mb-12 md:ml-20"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-12 top-8 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} hidden md:block shadow-lg`}></div>

              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 hover:border-emerald-500/50 dark:hover:border-slate-600/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} p-3 md:hidden`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 md:ml-0 ml-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{edu.degree}</h3>
                    <h4 className="text-xl text-emerald-600 dark:text-emerald-300 mb-2 transition-colors">{edu.institution}</h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-slate-600 dark:text-slate-400 transition-colors">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {edu.description && <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed transition-colors">{edu.description}</p>}

                <div>
                  <h5 className="text-slate-900 dark:text-white font-semibold mb-2 transition-colors">Key Achievements:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 rounded-full text-sm text-slate-700 dark:text-slate-300 transition-colors"
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