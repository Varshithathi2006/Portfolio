import React from 'react';
import { User, Code, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'awards', icon: Award, label: 'Awards' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border-r border-slate-200 dark:border-slate-700/50 z-50 hidden lg:flex flex-col items-center py-8 transition-colors duration-300">
      <div className="flex flex-col space-y-8">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative p-3 rounded-xl bg-slate-100 dark:bg-slate-700/30 hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-all duration-300 hover:scale-110 shadow-sm dark:shadow-none"
            title={label}
          >
            <Icon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
            <div className="absolute left-full ml-3 px-2 py-1 bg-slate-900 text-white dark:bg-slate-800 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              {label}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation; 