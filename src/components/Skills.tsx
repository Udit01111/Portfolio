import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import { clsx } from 'clsx';

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-6 h-6" />,
      gradient: 'from-pink-500 via-red-500 to-yellow-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-green-400 via-cyan-500 to-blue-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'FastAPI', level: 75 },
        { name: 'Express', level: 90 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Prisma', level: 85 },
      ],
    },
    {
      title: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'Kubernetes', level: 70 },
      ],
    },
  ];

  const TiltCard = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      
      const width = rect.width;
      const height = rect.height;
      
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full"
      >
        <div className={clsx(
          "absolute inset-0 rounded-lg bg-gradient-to-br opacity-20",
          gradient
        )} />
        <div className="bg-gray-800 rounded-lg p-6 relative transform-gpu transition-transform duration-200 hover:scale-[1.02] h-full">
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="perspective-1000"
              >
                <TiltCard gradient={category.gradient}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={clsx(
                      "w-12 h-12 rounded-lg flex items-center justify-center text-gray-900",
                      `bg-gradient-to-br ${category.gradient}`
                    )}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-yellow-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className={clsx(
                              'h-full rounded-full bg-gradient-to-r',
                              category.gradient
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}