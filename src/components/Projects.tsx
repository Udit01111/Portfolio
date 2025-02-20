import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  longDescription: string;
  features: string[];
  technologies: string[];
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'The Josh Squad',
      description: 'A full-featured online education platform built with MERN for defence aspirants.',
      longDescription: 'A comprehensive e-commerce solution that provides a seamless shopping experience with features like real-time inventory management, secure payments, and order tracking.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=500',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist',
        'Secure payment processing',
        'Order management and tracking',
      ],
      technologies: [
        'Next.js 13',
        'TypeScript',
        'Stripe API',
        'PostgreSQL',
        'Prisma ORM',
        'Tailwind CSS',
      ],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Trucker Bid',
      description: ' a digital logistics marketplace revolutionizing the freight industry by seamlessly connecting shippers with truck drivers.',
      longDescription:'The Platform enables businesses to post their shipping needs while truckers bid for jobs, ensuring cost-effective, efficient, and transparent logistics solutions. By leveraging real-time bidding, AI-driven route optimization, and secure payment systems, TruckerBid eliminates inefficiencies, reduces empty miles, and maximizes earnings for drivers.It simplifies freight logistics and aims to bridge the gap between demand and supply, empowering both small businesses and independent truckers. Join us in redefining the future of trucking with TruckerBid – where every load finds the right truck at the right price.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&h=500',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time updates using WebSocket',
        'Team collaboration tools',
        'Task assignments and deadlines',
        'Progress tracking and reporting',
        'File attachments and comments',
      ],
      technologies: [
        'React 18',
        'Node.js',
        'Socket.io',
        'MongoDB',
        'Express.js',
        'JWT Authentication',
      ],
      demoUrl: 'https://trucker-bid-cxkd.vercel.app/',
      githubUrl: 'https://github.com/Udit01111/TruckerBid',
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool using OpenAI GPT-3 API.',
      longDescription: 'An innovative content generation platform that leverages AI to help creators produce high-quality content efficiently with customizable templates and styles.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?fit=crop&w=800&h=500',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
      features: [
        'AI-powered content generation',
        'Multiple content types support',
        'Custom templates and styles',
        'Content history and versioning',
        'Export in multiple formats',
      ],
      technologies: [
        'Python',
        'FastAPI',
        'React',
        'OpenAI API',
        'PostgreSQL',
        'Redis',
      ],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-yellow-400 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-yellow-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
                >
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border-2 border-yellow-500 text-yellow-500 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-colors text-center"
                >
                  View Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}