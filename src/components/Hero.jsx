import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import resumePDF from '../assets/Varshitha_Updated_Resume.pdf';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4 transition-colors duration-300">
      {/* Background massive text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 
          className="text-[#EA4326] dark:text-emerald-500/80 font-black leading-none tracking-tighter whitespace-nowrap opacity-90 transition-colors duration-300"
          style={{ fontSize: 'clamp(8rem, 24vw, 35rem)', letterSpacing: '-0.05em' }}
        >
          AI ENG
        </h1>
      </div>

      {/* Foreground object (Profile Image) layered over text */}
      <div className="relative z-10 flex flex-col items-center mt-12 w-full max-w-5xl">
        <div className="w-64 h-80 md:w-80 md:h-[26rem] rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-500 mb-8 border-8 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
          <img
            src={profileImg}
            alt="Varshitha"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Details Below Image */}
        <div className="text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800/50 animate-on-scroll max-w-2xl mx-auto w-full transition-colors duration-300">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-slate-900 dark:text-white tracking-tight">
            Varshitha
          </h2>
          <p className="text-lg md:text-xl text-[#EA4326] dark:text-emerald-400 font-bold mb-4 uppercase tracking-wider transition-colors duration-300">
            AI Engineering Student
          </p>
          <p className="text-slate-600 dark:text-slate-300 font-medium mb-8 leading-relaxed transition-colors duration-300">
            Building intelligent systems to solve real-world problems. Fusing Machine Learning, Big Data, and modern robust design.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-900 rounded-full font-bold hover:bg-[#EA4326] dark:hover:bg-emerald-400 transition-colors duration-300 focus:outline-none shadow-md"
            >
              View Projects
            </a>
            <a
              href={resumePDF}
              download="Varshitha_Updated_Resume.pdf"
              className="flex items-center px-8 py-4 bg-transparent border-2 border-slate-900 dark:border-slate-400 text-slate-900 dark:text-slate-200 rounded-full font-bold hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white dark:hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <Download className="w-5 h-5 mr-3" /> Get Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 