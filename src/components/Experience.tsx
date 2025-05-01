import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'The Josh Squad',
      period: '2023 - 2024',
      achievements: [
        'Led a team of 5 developers in building a cloud-based SaaS platform that increased user retention by 30%',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      title: 'Technical Lead',
      company: 'Trucker Bid Ltd.',
      period: '2024 - present',
      achievements: [
        'Developed and maintained Web application transforming freight transportation in India using React and Node.js',
        'Integrated payment gateways and third-party APIs',
        'Led team of 6 and conducted code reviews',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Intoduction to Cloud Computing',
      issuer: 'IBM',
      date: '2023',
    },
    
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
    },
    {
      name: 'NPTEL IoT Certified Professional',
      issuer: 'NITTR Chandigarh',
      date: '2025',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Experience & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Work Experience</h3>
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-yellow-500 before:to-yellow-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-yellow-500"
                    />
                    <div className="mb-4">
                      <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="text-xl font-semibold text-gray-900 dark:text-white"
                      >
                        {exp.title}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        className="text-yellow-500 dark:text-yellow-400"
                      >
                        {exp.company}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {exp.period}
                      </motion.p>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + i * 0.1 }}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Certifications</h3>
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                      <p className="text-yellow-500 dark:text-yellow-400">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
