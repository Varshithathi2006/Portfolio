import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-900/80 backdrop-blur-md py-8 mt-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Varshitha. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-[#EA4326] dark:hover:text-emerald-400 transition-colors font-medium">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
