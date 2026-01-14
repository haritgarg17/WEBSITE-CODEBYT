
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black">Digital <span className="text-pink-500">Insights</span></h1>
          <p className="text-xl text-gray-400">Strategies, trends, and engineering guides to help you master the digital landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group glass rounded-[35px] overflow-hidden flex flex-col hover:border-pink-500/30 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt={post.title} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <span className="flex items-center gap-1"><Tag size={12} className="text-pink-500" /> {post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-400 mb-8 flex-1">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-pink-500 font-bold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-12 rounded-[40px] text-center bg-pink-500/5 border-pink-500/20">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-gray-400 mb-8">Get the latest growth tactics delivered straight to your inbox.</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="email@company.com" className="flex-1 bg-black/40 border border-white/10 rounded-full px-6 focus:outline-none focus:border-pink-500" />
            <button className="px-8 py-3 bg-pink-600 text-white rounded-full font-bold">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
