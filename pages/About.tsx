
import React from 'react';
import { Target, Eye, Users2, Zap, Award, Globe2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black">We Are <span className="text-emerald-500">Codebyt</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">Founded by a group of engineers and marketers, Codebyt was born out of a simple mission: to bridge the gap between complex technology and business growth.</p>
            <p className="text-lg text-gray-500">We believe that every business, regardless of size, deserves access to premium digital tools and high-level strategy that were once reserved for Fortune 500 companies.</p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-black text-white mb-2">5+</div>
                <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Years of Innovation</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">30+</div>
                <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">Expert Strategists</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden glass p-4">
              <img src="https://picsum.photos/seed/about-team/1000/1000" className="w-full h-full object-cover rounded-[30px]" alt="Team working" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block border-emerald-500/20">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-emerald-500" />
                <div>
                  <div className="font-bold text-xl">Top Rated Agency</div>
                  <div className="text-sm text-gray-400 text-nowrap">Clutch Leader 2023-24</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="glass p-12 rounded-[40px] space-y-6">
            <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-lg text-gray-400">To democratize enterprise-grade technology and marketing for startups and growing businesses, enabling them to compete on a global scale.</p>
          </div>
          <div className="glass p-12 rounded-[40px] space-y-6 border-blue-500/20">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-lg text-gray-400">To become the world's most trusted partner for digital transformation, recognized for our commitment to data-driven growth and technical excellence.</p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest mb-4">Our Approach</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-12">How We Deliver Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: 'Agile Mindset', desc: 'We iterate fast and adapt to market changes in real-time.' },
              { icon: <Users2 />, title: 'User-Centric', desc: 'Everything we build starts with understanding the end user.' },
              { icon: <Globe2 />, title: 'Global Standards', desc: 'We follow industry best practices for security and performance.' }
            ].map((step, i) => (
              <div key={i} className="p-10 glass rounded-[35px] hover:border-white/20 transition-all group">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
