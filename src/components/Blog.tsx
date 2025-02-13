import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  category: 'musings' | 'hobbies' | 'photos' | 'trips' | 'friends';
  date: string;
  author: string;
  location?: string;
  image: string;
  excerpt: string;
  likes: number;
}

export function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Journey Through the Himalayas",
      category: 'trips',
      date: "March 15, 2024",
      author: "Udit",
      location: "Ladakh, India",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?fit=crop&w=800&h=400",
      excerpt: "Exploring the breathtaking landscapes and rich culture of the Himalayas...",
      likes: 245
    },
    {
      id: 2,
      title: "The Art of Street Photography",
      category: 'hobbies',
      date: "March 10, 2024",
      author: "Udit",
      image: "https://images.unsplash.com/photo-1570993492881-25240ce854f4?fit=crop&w=800&h=400",
      excerpt: "Capturing life's candid moments through the lens...",
      likes: 189
    },
    {
      id: 3,
      title: "Reflections on Technology",
      category: 'musings',
      date: "March 5, 2024",
      author: "Udit",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=800&h=400",
      excerpt: "Thoughts on the future of web development and AI...",
      likes: 156
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <section id="blog" className="py-20 bg-purple-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 dark:text-white text-center mb-12">
            Blog & Stories
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                animate={{ x: `-${activeIndex * 100}%` }}
              >
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                          {post.category}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-purple-900 dark:text-white mb-3">
                          {post.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-purple-600 dark:text-purple-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          {post.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{post.location}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <button className="text-purple-500 dark:text-purple-400 font-semibold hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                            Read More
                          </button>
                          <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
                            <Heart size={18} />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-purple-500 dark:bg-purple-400'
                    : 'bg-purple-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}