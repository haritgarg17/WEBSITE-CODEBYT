
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <Logo size={32} />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through modern technology and innovative digital marketing strategies. Your growth is our code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-500 transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">App Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">SEO Mastery</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Digital Branding</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Ads Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>codebyt123@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+91 97184 17771</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>India / Remote Operations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Codebyt Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
