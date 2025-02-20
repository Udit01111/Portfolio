import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "First Place - Global Hackathon 2024",
      description: "Led a team of 4 to develop an AI-powered sustainability solution",
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?fit=crop&w=800&h=600",
      category: "Hackathon",
      date: "March 2024"
    },
    {
      title: "First Place - Global Hackathon 2024",
      description: "Led a team of 4 to develop an AI-powered sustainability solution",
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?fit=crop&w=800&h=600",
      category: "Hackathon",
      date: "March 2024"
    },
    {
      title: "First Place - Global Hackathon 2024",
      description: "Led a team of 4 to develop an AI-powered sustainability solution",
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?fit=crop&w=800&h=600",
      category: "Hackathon",
      date: "March 2024"
    },
    {
      title: "First Place - Global Hackathon 2024",
      description: "Led a team of 4 to develop an AI-powered sustainability solution",
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?fit=crop&w=800&h=600",
      category: "Hackathon",
      date: "March 2024"
    },
    {
      title: "First Place - Global Hackathon 2024",
      description: "Led a team of 4 to develop an AI-powered sustainability solution",
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?fit=crop&w=800&h=600",
      category: "Hackathon",
      date: "March 2024"
    },
    {
      title: "Best Innovation Award",
      description: "Developed a revolutionary healthcare monitoring system",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=800&h=600",
      category: "Innovation",
      date: "December 2023"
    },
    {
      title: "Tech Conference Speaker",
      description: "Keynote speaker at International Developer Conference",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?fit=crop&w=800&h=600",
      category: "Speaking",
      date: "October 2023"
    },
    {
      title: "Open Source Contribution",
      description: "Major contribution to React ecosystem with 1000+ stars",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fit=crop&w=800&h=600",
      category: "Development",
      date: "August 2023"
    }
  ];

  const createTiltCard = (index: number) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
    const brightness = useTransform(mouseXSpring, [-0.5, 0.5], [1.1, 0.9]);

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
        key={index}
        className="relative perspective-1000"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="relative group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* RGB Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
          
          {/* Card Content */}
          <div className="relative flex flex-col bg-white dark:bg-gray-900 rounded-xl p-6 h-full transform-gpu transition-all duration-200 group-hover:scale-[1.02]">
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <motion.img
                src={achievements[index].image}
                alt={achievements[index].title}
                className="w-full h-full object-cover"
                style={{ brightness }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                  {achievements[index].category}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {achievements[index].title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {achievements[index].description}
            </p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
                <Trophy size={16} />
                <span>Achievement</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400">
                {achievements[index].date}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="achievements" className="relative py-20 overflow-hidden bg-gray-900">
      {/* Smoky Animation Background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0
                  ? 'rgba(168,85,247,0.15)'
                  : i % 3 === 0
                  ? 'rgba(236,72,153,0.15)'
                  : 'rgba(234,179,8,0.15)'
              } 0%, transparent 70%)`,
              filter: 'blur(80px)',
              mixBlendMode: 'screen',
              transform: `translate(-50%, -50%) scale(${1 + i * 0.2})`,
              left: '50%',
              top: '50%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((_, index) => createTiltCard(index))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}