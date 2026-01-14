
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Web App', 'Branding'];

  const filteredProjects = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black">Our <span className="text-purple-500">Masterpieces</span></h1>
            <p className="text-xl text-gray-400">A collection of digital experiences we've crafted for ambitious brands worldwide.</p>
          </motion.div>
          
          <div className="flex flex-wrap gap-2 p-1 glass rounded-full">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
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
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[30px] glass h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                  <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-2">{project.category}</span>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <div className="flex gap-4">
                    <a href={project.link} className="px-6 py-2 bg-purple-600 rounded-full font-bold flex items-center gap-2 hover:bg-purple-500 transition-colors">
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass p-12 rounded-[40px] border border-white/5"
        >
          <h2 className="text-3xl font-bold mb-4">Want to see your project here?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We are always excited to start new innovative journeys. Let's discuss how we can make your vision a reality.</p>
          <button className="px-10 py-4 bg-white text-black rounded-full font-black hover:bg-purple-600 hover:text-white transition-all shadow-xl shadow-purple-600/10">
            Start a Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
