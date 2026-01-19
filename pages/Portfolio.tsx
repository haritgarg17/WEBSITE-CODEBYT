
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Web App', 'Branding'];

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  // Enhanced animation variants for the project image zoom
  const imageVariants = {
    initial: { 
      scale: 1,
      filter: 'grayscale(100%) brightness(0.8)',
    },
    hover: { 
      scale: 1.12,
      filter: 'grayscale(0%) brightness(1)',
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1] // Custom quint ease for a smooth, high-end feel
      }
    }
  };

  // Variants for project card transitions (filtering)
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.98,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      y: 10,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  // Variants for the overlay content reveal
  const overlayVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              Our <span className="text-purple-500 italic">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400">
              A curated selection of digital excellence, from high-performance e-commerce to scalable SaaS platforms.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-2 p-1 glass rounded-full">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors z-10 ${
                  filter === cat ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                className="group relative overflow-hidden rounded-[40px] glass h-full cursor-pointer border border-white/5"
              >
                {/* Image Container with overflow hidden for the zoom effect */}
                <div className="aspect-[16/10] overflow-hidden bg-gray-900">
                  <motion.img 
                    variants={imageVariants}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover origin-center"
                    loading="lazy"
                  />
                </div>
                
                {/* Hover Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <motion.div
                    variants={overlayVariants}
                  >
                    <span className="text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-3 block">{project.category}</span>
                    <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                    <div className="flex gap-4">
                      <a 
                        href={project.link} 
                        className="px-8 py-3 bg-white text-black rounded-full text-sm font-bold flex items-center gap-2 hover:bg-purple-600 hover:text-white transition-all transform active:scale-95"
                      >
                        Explore Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Always-visible Badge (fades out on hover) */}
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass p-16 rounded-[50px] border border-purple-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Inspired by our work?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Every great project starts with a conversation. Let's discuss how we can bring your digital vision to life with precision and craftsmanship.
            </p>
            <button className="px-12 py-5 bg-purple-600 text-white rounded-full font-black text-lg hover:bg-white hover:text-black transition-all shadow-xl shadow-purple-600/20 active:scale-95">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
