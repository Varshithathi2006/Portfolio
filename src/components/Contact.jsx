import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 mb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#EA4326] dark:text-emerald-400 transition-colors">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:varshithathi006@gmail.com"
                className="flex items-center p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Email Me At</p>
                  <p className="text-lg text-slate-900 dark:text-white font-medium transition-colors">varshithathi006@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/varshitha-thilak-kumar-56a668315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mr-4 group-hover:bg-teal-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-teal-500 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Connect on</p>
                  <p className="text-lg text-slate-900 dark:text-white font-medium transition-colors">LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/Varshithathi2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Github className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors">Follow on</p>
                  <p className="text-lg text-slate-900 dark:text-white font-medium transition-colors">GitHub</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700/50 p-8 shadow-xl dark:shadow-2xl transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="Hello Varshitha, I'd like to discuss..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-slate-900 dark:bg-gradient-to-r dark:from-emerald-600 dark:to-teal-600 text-white rounded-lg px-6 py-4 font-medium hover:bg-[#EA4326] dark:hover:from-emerald-500 dark:hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-lg dark:hover:shadow-emerald-500/25"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
