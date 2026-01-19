
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(BLOG_POSTS.map(post => post.category))];
    return cats;
  }, []);

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  // Animation variants for blog cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-black">Digital <span className="text-pink-500">Insights</span></h1>
            <p className="text-xl text-gray-400">Strategies, trends, and engineering guides to help you master the digital landscape.</p>
          </motion.div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2 p-1 glass rounded-full self-start md:self-auto">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-2 rounded-full text-sm font-bold transition-colors z-10 ${
                  activeCategory === cat ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeBlogFilter"
                    className="absolute inset-0 bg-pink-600 rounded-full -z-10"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredPosts.map((post, index) => (
              <motion.div 
                layout
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.05 }}
                className="group glass rounded-[35px] overflow-hidden flex flex-col hover:border-pink-500/30 transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" 
                    alt={post.title} 
                  />
                  <div className="absolute top-4 left-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCategory(post.category);
                      }}
                      className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-pink-400 border border-white/10 hover:bg-pink-600 hover:text-white transition-colors"
                    >
                      {post.category}
                    </button>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    <span className="flex items-center gap-1"><Tag size={12} className="text-pink-500" /> {post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-400 mb-8 flex-1">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-pink-500 font-bold group-hover:gap-4 transition-all w-fit">
                    Read Article <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass p-12 rounded-[40px] text-center bg-pink-500/5 border-pink-500/20"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-400 mb-8">Get the latest growth tactics delivered straight to your inbox.</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="email@company.com" 
              className="flex-1 bg-black/40 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-pink-500" 
            />
            <button className="px-8 py-3 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-500 transition-colors shadow-lg shadow-pink-600/20">
              Join
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
