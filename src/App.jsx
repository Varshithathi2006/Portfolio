import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Awards from './components/Awards';
import ScrollStory from './components/ScrollStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initScrollAnimations } from './utils/scrollAnimations';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    initScrollAnimations();
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply previously saved theme, defaults to Light mode otherwise.
    if (savedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Floating Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 lg:top-8 lg:right-8 z-[100] p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </button>

      <Navigation />

      <div className="ml-0 lg:ml-20">
        <Hero />
        <ScrollStory />
        <Skills />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App; 