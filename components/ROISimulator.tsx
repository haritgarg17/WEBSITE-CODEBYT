
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Rocket, IndianRupee, BarChart3 } from 'lucide-react';

const ROISimulator: React.FC = () => {
  // Initial budget set to ₹50,000
  const [budget, setBudget] = useState(50000);
  const [industryMultiplier, setIndustryMultiplier] = useState(2.4);

  // Simple calculation logic for demonstration
  const estimatedReach = Math.floor(budget * 0.15 * (industryMultiplier / 2));
  const estimatedRevenue = Math.floor(budget * industryMultiplier * 3.5);

  return (
    <div className="w-full max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-12 border border-blue-500/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Growth Simulator</h3>
            <p className="text-gray-400 text-sm">See how Codebyt's data-driven strategies can scale your business revenue in India.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                <span>Monthly Ad Budget</span>
                <span className="text-blue-400">₹{budget.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="5000000" 
                step="10000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase">
                <span>₹10k</span>
                <span>₹50L</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm font-bold uppercase tracking-wider">
                <span>Industry Competitiveness</span>
                <span className="text-purple-400">
                  {industryMultiplier < 1.5 ? 'Low' : industryMultiplier < 3 ? 'Medium' : 'High'}
                </span>
              </div>
              <div className="flex gap-2">
                {[1.2, 2.4, 4.5].map((val, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndustryMultiplier(val)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                      industryMultiplier === val ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {['Niche', 'Standard', 'Enterprise'][idx]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/40 rounded-3xl p-8 border border-white/5 flex flex-col justify-center space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              key={estimatedReach}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-1"
            >
              <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase">
                <BarChart3 size={14} className="text-blue-400" /> Projected Reach
              </div>
              <div className="text-3xl font-black text-white">
                {estimatedReach.toLocaleString('en-IN')}+
              </div>
            </motion.div>

            <motion.div 
              key={estimatedRevenue}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="space-y-1"
            >
              <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase">
                <IndianRupee size={14} className="text-emerald-400" /> Est. Revenue
              </div>
              <div className="text-3xl font-black text-emerald-400">
                ₹{estimatedRevenue.toLocaleString('en-IN')}
              </div>
            </motion.div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <TrendingUp className="text-blue-400 flex-shrink-0" />
              <p className="text-xs text-gray-300 leading-relaxed">
                Based on Indian market averages. Our top clients see up to <span className="text-white font-bold">12x ROI</span> within 6 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROISimulator;
