import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import resumePDF from '../assets/Varshitha_Thilak_Kumar_Resume.pdf';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 flex items-center justify-center overflow-hidden">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Varshitha Thilak Kumar
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 mb-6">
            Aspiring AI Engineer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about artificial intelligence, machine learning, and creating innovative solutions 
            that bridge the gap between cutting-edge technology and real-world applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href={resumePDF}
            download="Varshitha_Thilak_Kumar_Resume.pdf"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Varshithathi2006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/25"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/varshitha-thilak-kumar-56a668315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/25"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:varshithathi006@gamil.com"
              className="p-3 bg-slate-700/50 rounded-full hover:bg-slate-600/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/25"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 