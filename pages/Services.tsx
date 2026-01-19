
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  // Color mapping helper for dynamic glow
  const colorMap: Record<string, string> = {
    blue: 'rgba(59, 130, 246, 0.4)',
    purple: 'rgba(168, 85, 247, 0.4)',
    emerald: 'rgba(16, 185, 129, 0.4)',
    pink: 'rgba(236, 72, 153, 0.4)',
    orange: 'rgba(249, 115, 22, 0.4)',
    indigo: 'rgba(79, 70, 229, 0.4)',
  };

  const bgLightMap: Record<string, string> = {
    blue: 'bg-blue-500/10',
    purple: 'bg-purple-500/10',
    emerald: 'bg-emerald-500/10',
    pink: 'bg-pink-500/10',
    orange: 'bg-orange-500/10',
    indigo: 'bg-indigo-500/10',
  };

  const borderHoverMap: Record<string, string> = {
    blue: 'hover:border-blue-500/20',
    purple: 'hover:border-purple-500/20',
    emerald: 'hover:border-emerald-500/20',
    pink: 'hover:border-pink-500/20',
    orange: 'hover:border-orange-500/20',
    indigo: 'hover:border-indigo-500/20',
  };

  const textAccentMap: Record<string, string> = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    emerald: 'text-emerald-400',
    pink: 'text-pink-400',
    orange: 'text-orange-400',
    indigo: 'text-indigo-400',
  };

  // Variants for the card container
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

  // Enhanced variants for the icon container
  const iconContainerVariants = {
    initial: { 
      scale: 1,
      filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))'
    },
    hover: (color: string) => ({ 
      scale: 1.1,
      filter: `drop-shadow(0 0 15px ${colorMap[color]})`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    })
  };

  // Variants for the radiant background glow
  const glowVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5,
      filter: 'blur(10px)'
    },
    hover: { 
      opacity: 0.6, 
      scale: 1.5,
      filter: 'blur(20px)',
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-3xl mb-20 space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tight">
            Strategic <span className="text-blue-500">Solutions</span>
          </h1>
          <p className="text-xl text-gray-400">
            From conceptual design to enterprise-grade development and performance marketing, we cover the entire digital lifecycle.
          </p>
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
              className={`flex flex-col lg:flex-row gap-12 items-center p-8 md:p-12 glass rounded-[40px] border border-white/5 transition-all duration-500 group ${borderHoverMap[service.themeColor]} ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <div className="relative">
                  {/* The Icon Container with its own animation variants */}
                  <motion.div 
                    variants={iconContainerVariants}
                    custom={service.themeColor}
                    className={`w-16 h-16 ${bgLightMap[service.themeColor]} rounded-2xl flex items-center justify-center relative z-10`}
                  >
                    {/* Inner soft glow */}
                    <motion.div 
                      variants={glowVariants}
                      className={`absolute inset-0 ${bgLightMap[service.themeColor]} rounded-full -z-10`}
                    />
                    {service.icon}
                  </motion.div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-gray-400 leading-relaxed">{service.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${bgLightMap[service.themeColor]} flex items-center justify-center`}>
                        <CheckCircle2 className={`w-3 h-3 ${textAccentMap[service.themeColor]}`} />
                      </div>
                      <span className="text-gray-200 font-medium text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 bg-white text-black font-bold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-black/20`}
                >
                  Request Info <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              <motion.div 
                variants={{
                  initial: { scale: 1, filter: 'grayscale(0.4)' },
                  hover: { scale: 1.02, filter: 'grayscale(0)' }
                }}
                className="flex-1 w-full h-[300px] md:h-[400px] rounded-[30px] overflow-hidden relative shadow-2xl border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={`https://picsum.photos/seed/service-${service.id}/800/600`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
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
