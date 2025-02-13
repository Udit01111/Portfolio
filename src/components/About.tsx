import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://i.postimg.cc/vHg5k4pw/1.png',
    'https://i.postimg.cc/LX81T5z7/2.png',
    'https://i.postimg.cc/x8kNwZp3/3.png',
    'https://i.postimg.cc/fT90569w/4.png',
    'https://i.postimg.cc/1tdfrHRn/5.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const timelineItems = [
    {
      year: '2020 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      year: '2018 - 2020',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      year: '2014 - 2018',
      title: 'Computer Science, BSc',
      company: 'Tech University',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-lg rotate-3 blur-lg opacity-30"></div>
              <div className="relative transform-gpu transition-transform duration-200 hover:scale-[1.02]">
                <div className="relative rounded-lg overflow-hidden">
                  {images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`About Me ${index + 1}`}
                      className="rounded-lg absolute top-0 left-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
                    />
                  ))}
                  {/* Placeholder div to maintain aspect ratio */}
                  <div className="w-full pb-[125%]"></div>
                </div>
              </div>
            </motion.div>
            
            <div>
              <p className="text-gray-300 mb-6">
                With over 6 years of experience in full-stack development, I specialize in building
                scalable web applications using modern technologies. My passion lies in creating
                elegant solutions to complex problems while ensuring the best possible user experience.
              </p>
              
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-yellow-400 font-medium">{item.year}</div>
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-gray-400">{item.company}</div>
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