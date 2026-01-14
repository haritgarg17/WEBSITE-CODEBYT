
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { getCodebytAssistantResponse } from '../services/geminiService';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'Welcome to Codebyt! I\'m your strategy assistant. Want to see how we can 10x your growth?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const aiResponse = await getCodebytAssistantResponse(userText);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mb-6 w-[350px] sm:w-[420px] h-[580px] glass rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-white/10 glow-blue"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 p-6 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg tracking-tight">Codebyt AI</h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-200 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    Strategic Advisor
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-xl transition-colors relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none shadow-lg' 
                      : 'bg-white/5 text-gray-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-bl-none border border-white/5">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/5 bg-black/40">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about ROI or SEO..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-14 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-sm group-hover:border-white/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading}
                  className="absolute right-2 top-2 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 disabled:opacity-50 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 text-center mt-3 uppercase tracking-widest font-bold">Powered by Gemini Pro Vision</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[22px] shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transition-all border border-white/10 relative group"
      >
        <div className="absolute inset-0 bg-white/20 rounded-[22px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
        {isOpen ? <X size={28} className="relative z-10" /> : <MessageSquare size={28} className="relative z-10" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-black animate-pulse"></div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatBot;
