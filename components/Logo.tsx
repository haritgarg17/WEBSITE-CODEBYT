
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, size = 40 }) => {
  return (
    <motion.div 
      className={`flex items-center gap-3 cursor-pointer ${className}`}
      initial={false}
      animate={{
        filter: [
          'drop-shadow(0 0 2px rgba(37, 99, 235, 0.1))',
          'drop-shadow(0 0 12px rgba(37, 99, 235, 0.6))',
          'drop-shadow(0 0 2px rgba(37, 99, 235, 0.1))'
        ],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="binaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Shield / Bracket Container */}
        <path 
          d="M30 30L15 50L30 70" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M70 30L85 50L70 70" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Inner Braces */}
        <path 
          d="M42 35C38 35 36 37 36 41V46C36 49 34 50 32 50C34 50 36 51 36 54V59C36 63 38 65 42 65" 
          stroke="url(#logoGradient)" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        
        {/* Binary Pattern Representation */}
        <g fill="url(#binaryGradient)" fontSize="10" fontWeight="bold" fontFamily="monospace">
          <text x="52" y="42">1011</text>
          <text x="52" y="52">0   10</text>
          <text x="52" y="62">1011</text>
        </g>
        
        {/* Connecting Lines */}
        <path d="M48 30H65M48 70H65" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" />
      </motion.svg>
      
      {showText && (
        <div className="relative">
          <span className="text-2xl font-black tracking-tighter uppercase text-white">
            Code<span className="text-blue-500">byt</span>
          </span>
          {/* Stylized Cursor on the 'O' */}
          <motion.div 
            className="absolute left-[18px] top-[14px] pointer-events-none"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.1, 1],
              y: [0, -1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
             <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1">
                <path d="M5.5 3.21V20.8L10.2 15.94H18.5L5.5 3.21Z" />
             </svg>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
