
import React, { useState } from 'react';
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
                  <p className="text-gray-400">hello@codebyt.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 000-0000</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-400">123 Tech Square, Suite 400<br/>San Francisco, CA 94105</p>
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
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                >
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>SEO Strategy</option>
                  <option>Performance Marketing</option>
                  <option>Branding</option>
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
              <button 
                type="submit" 
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 group"
              >
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-gray-500">By clicking send, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
