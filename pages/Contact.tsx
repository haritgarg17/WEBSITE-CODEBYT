
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you within 24 hours.");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black">Let's Start a <span className="text-blue-500">Conversation</span></h1>
              <p className="text-xl text-gray-400 max-w-lg">Have a vision? We have the tools. Fill out the form and let's discuss how Codebyt can accelerate your growth.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-400">codebyt123@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-400">+91 97184 17771</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400">Global Operations<br/>New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-[30px] border border-blue-500/20 bg-blue-500/5">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Globe className="text-blue-500" /> Working globally
              </h4>
              <p className="text-sm text-gray-400">We support remote-first collaboration across all time zones. Our team is always just a Slack message or Zoom call away.</p>
            </div>
          </div>

          <div className="glass p-10 md:p-14 rounded-[40px] border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Work Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Service Interested In</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-white"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option className="bg-black text-white">Web Development</option>
                  <option className="bg-black text-white">App Development</option>
                  <option className="bg-black text-white">SEO Strategy</option>
                  <option className="bg-black text-white">Performance Marketing</option>
                  <option className="bg-black text-white">Branding</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tell us a bit about your project goals..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 group relative overflow-hidden shadow-lg shadow-blue-600/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.button>
              <p className="text-center text-xs text-gray-500 font-medium">By clicking send, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
