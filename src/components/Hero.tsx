import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import ParticlesHero from "./ParticlesHero";

export function Hero() {
  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Golden Stick Particles */}
      <ParticlesHero />


      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Udit
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <span className="text-yellow-500 dark:text-yellow-400">Front-End Developer</span>
              <span className="mx-2">|</span>
              <span>Innovator</span>
              <span className="mx-2">|</span>
              <span>Tech Enthusiast</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Crafting exceptional digital experiences through clean code and innovative solutions. 
              Specialized in building scalable web applications with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                <FileText size={20} />
                <a href='https://drive.google.com/file/d/1J1b8v75G3CjqQYaalO2oDynBWrUsxZ5M/view?usp=sharing'>Download Resume</a>
              </button>
              <button className="px-6 py-3 border-2 border-yellow-400 dark:border-yellow-500 text-yellow-500 dark:text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
                <a href="mailto:udit40115@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Mail size={24} />
               Hire Me</a>
              </button>
            </div>

            <div className="mt-8 flex gap-6 justify-center md:justify-start">
              <a href="https://github.com/Udit01111" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/udit011/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:udit40115@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-teal-500 to-yellow-500 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
              <img 
                src="https://i.postimg.cc/nrzVgQr8/Untitled-design-4.png?fit=crop&w=1000&h=1000" 
                alt="Profile" 
                className="rounded-full w-full aspect-square object-cover relative z-10 border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>
      </section>
  );
}
