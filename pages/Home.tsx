
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  PlayCircle, 
  Zap, 
  Globe, 
  Sparkles,
  Award,
  Activity,
  Lightbulb,
  Cpu,
  BarChart,
  Layers
} from 'lucide-react';
import { SERVICES } from '../constants';
import ROISimulator from '../components/ROISimulator';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms for diverse background elements
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1200], [0, 450]);
  const y4 = useTransform(scrollY, [0, 800], [0, -350]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 45]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="overflow-hidden bg-black">
      {/* Enhanced Multi-Layer Parallax Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Layer 1: Massive Deep Blue Pulse */}
        <motion.div 
          style={{ y: y1, opacity: opacityParallax }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-15%] left-[-15%] w-[80%] h-[80%] bg-blue-600 blur-[150px] rounded-full"
        ></motion.div>

        {/* Layer 2: Deep Purple Counter-Movement */}
        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            x: [0, 50, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[130px] rounded-full"
        ></motion.div>

        {/* Layer 3: Floating Cyan Accent (Faster Scroll) */}
        <motion.div 
          style={{ y: y3, rotate: rotateParallax }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-400/10 blur-[90px] rounded-full"
        ></motion.div>

        {/* Layer 4: Floating Pink Accent (Upward Movement) */}
        <motion.div 
          style={{ y: y4 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-pink-500/10 blur-[110px] rounded-full"
        ></motion.div>

        {/* Layer 5: Static Grain/Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] hero-pattern"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Empowering 200+ Businesses Worldwide
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black tracking-tight leading-[1] text-white">
              Scale Your <br/>
              <span className="gradient-text italic">Vision</span> with <br/>
              Precision.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Codebyt is where world-class engineering meets high-impact marketing. We don't just build sites; we build digital empires.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/40 flex items-center gap-2 group relative overflow-hidden">
                <span className="relative z-10">Start Your Growth Journey</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link to="/portfolio" className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold transition-all flex items-center gap-2">
                Our Work <PlayCircle className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative glass p-4 rounded-[40px] border border-white/10">
              <img src="https://picsum.photos/seed/agency-tech/1200/900" alt="Tech Visual" className="rounded-[30px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl glow-blue border-blue-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black">12.5x</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Average Client ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-[0.2em] mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {['MICROSOFT', 'ADOBE', 'SHOPIFY', 'STRIPE', 'AIRBNB'].map(brand => (
              <span key={brand} className="text-2xl font-black">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-black mb-6 italic">Engineering <span className="text-blue-500">Growth.</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 glass rounded-[40px] hover:bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-8 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 group-hover:scale-110 transition-all">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">Learn Strategy</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW USP SECTION: THE CODEBYT ADVANTAGE */}
      <section className="py-32 relative z-10 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              Unique Selling Propositions
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">Why We Are <span className="gradient-text">Different</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              We don't just provide services; we provide a strategic partnership built on three unshakeable pillars of digital excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* USP 1: Expertise */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative p-10 glass rounded-[50px] border border-blue-500/20 group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition-all"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white">Full-Stack Expertise</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our core team consists of senior engineers from tier-1 tech firms. We bring deep technical knowledge in React, Node.js, and Cloud Infrastructure to every project.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['Scalable Architecture', 'Performance Code', 'Security First'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-blue-300 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* USP 2: Client Results */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative p-10 glass rounded-[50px] border border-purple-500/20 group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 blur-3xl rounded-full group-hover:bg-purple-600/20 transition-all"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl flex items-center justify-center shadow-lg shadow-purple-500/20 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <BarChart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white">Hyper-Growth Results</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We are obsessed with data. Our digital marketing strategies have consistently delivered over 400% organic growth for our partners within the first year of collaboration.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['4x ROI Avg.', 'Data Analytics', 'Conversion Focused'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-purple-300 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* USP 3: Innovation */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative p-10 glass rounded-[50px] border border-emerald-500/20 group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/10 blur-3xl rounded-full group-hover:bg-emerald-600/20 transition-all"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-500/20 rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white">Innovative Approach</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don't follow trends; we set them. By integrating proprietary AI tools and cutting-edge UI design, we ensure your business stays 2 steps ahead of the competition.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {['AI Integrated', 'Modern UI/UX', 'Future Proof'].map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-emerald-300 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Tool Section: ROI Simulator */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">Interactive Planning</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Calculate Your Potential</h3>
          </div>
          <ROISimulator />
        </div>
      </section>

      {/* Why Choose Us (Stats section) */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="glass p-6 rounded-3xl text-center">
                  <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                  <div className="text-3xl font-black mb-1">200%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Avg. ROI Boost</div>
                </div>
                <div className="glass p-6 rounded-3xl text-center">
                  <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                  <div className="text-3xl font-black mb-1">99.9%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Uptime Promise</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass p-6 rounded-3xl text-center">
                  <Users className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                  <div className="text-3xl font-black mb-1">150+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Clients Worldwide</div>
                </div>
                <div className="glass p-6 rounded-3xl text-center">
                  <ShieldCheck className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                  <div className="text-3xl font-black mb-1">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Quality Code</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-blue-500 font-bold uppercase text-sm tracking-widest">Why Codebyt</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">We Build Tech That <span className="text-blue-500">Scales</span></h3>
            <p className="text-lg text-gray-400">At Codebyt, we don't just deliver projects; we build partnerships. Our holistic approach ensures that every pixel and every line of code serves a business purpose.</p>
            <div className="space-y-4">
              {[
                'Data-Driven Decision Making',
                'Agile Development Processes',
                'End-to-End Growth Strategy',
                'Premium Technical Support'
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link to="/about" className="text-blue-500 font-bold flex items-center gap-2 hover:gap-4 transition-all underline decoration-blue-500/30 underline-offset-8">
                Discover our methodology <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Bento Grid Features */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 glass rounded-[40px] p-12 flex flex-col justify-end bg-gradient-to-tr from-blue-600/20 to-transparent group overflow-hidden relative">
              <Globe className="absolute top-10 right-10 w-32 h-32 text-white/5 group-hover:scale-150 group-hover:rotate-12 transition-transform duration-1000" />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">Global Reach, <br/>Local Expertise.</h3>
                <p className="text-gray-400 max-w-md">Our network spans across 15 countries, providing localized insights with a world-class standard of engineering.</p>
              </div>
            </div>
            <div className="md:col-span-4 glass rounded-[40px] p-12 bg-purple-600/10 flex flex-col items-center justify-center text-center">
              <Zap className="w-16 h-16 text-purple-500 mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold mb-2">99.9%</h3>
              <p className="text-gray-500 text-sm">Performance Uptime</p>
            </div>
            <div className="md:col-span-4 glass rounded-[40px] p-12 bg-emerald-600/10">
              <h3 className="text-2xl font-bold mb-4">Secured by Design</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Enterprise-grade security protocols baked into every line of code we ship.</p>
            </div>
            <div className="md:col-span-8 glass rounded-[40px] p-12 flex items-center gap-12 bg-gradient-to-br from-pink-600/10 to-transparent">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Human-First AI</h3>
                <p className="text-gray-400">We use AI to amplify human creativity, not replace it. The result? Unmatched efficiency.</p>
              </div>
              <div className="hidden sm:block w-32 h-32 rounded-3xl bg-white/5 border border-white/10 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Animated CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative rounded-[50px] p-16 md:p-24 overflow-hidden text-center glass border-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-8xl font-black leading-none">Ready to <br/><span className="gradient-text">Evolve?</span></h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="px-12 py-6 bg-white text-black rounded-full font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                  Let's Talk Business
                </Link>
                <Link to="/about" className="px-12 py-6 glass text-white rounded-full font-black text-xl hover:bg-white/10 transition-all">
                  Our Story
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;
