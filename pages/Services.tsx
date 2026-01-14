
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  // Variants for the card container to handle stagger and basic appearance
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Variants for the icon container - triggered when the parent card is hovered
  const iconVariants = {
    initial: { scale: 1, boxShadow: '0 0 0px rgba(59, 130, 246, 0)' },
    hover: { 
      scale: 1.15,
      boxShadow: '0 0 25px 5px rgba(59, 130, 246, 0.3)',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-3xl mb-20 space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-black">Strategic <span className="text-blue-500">Solutions</span> for Modern Brands</h1>
          <p className="text-xl text-gray-400">From conceptual design to enterprise-grade development and performance marketing, we cover the entire digital lifecycle.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id} 
              custom={index}
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={cardVariants}
              className={`flex flex-col lg:flex-row gap-12 items-center p-8 md:p-12 glass rounded-[40px] border border-white/5 hover:border-blue-500/20 transition-colors duration-500 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <motion.div 
                  variants={iconVariants}
                  className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center relative"
                >
                  {/* Subtle pulsing glow for when card is hovered */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      hover: { opacity: 1, scale: 1.2 }
                    }}
                    className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full -z-10"
                  />
                  {service.icon}
                </motion.div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      </div>
                      <span className="text-gray-200">{feat}</span>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-600/20"
                >
                  Request Info <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <motion.div 
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.02 }
                }}
                className="flex-1 w-full h-[300px] md:h-[400px] rounded-[30px] overflow-hidden relative shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={`https://picsum.photos/seed/service-${index}/800/600`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={service.title} 
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
