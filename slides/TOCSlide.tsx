
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { ArrowRight, ListChecks, Sparkles } from 'lucide-react';

const toc = [
  "Tóm tắt dự án",
  "Mô tả doanh nghiệp & Sản phẩm",
  "Chiến lược Marketing",
  "Kế hoạch vận hành",
  "Kế hoạch quản lý",
  "Dự báo tài chính",
  "Rủi ro trọng yếu",
  "Chiến lược thu hoạch"
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
};

const TOCSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/40">
          <ListChecks className="text-emerald-400" size={32} />
        </div>
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          <span className="text-slate-800/40 dark:text-emerald-500">MỤC LỤC CHIẾN LƯỢC</span>
        </h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {toc.map((item, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ x: 15, scale: 1.02 }}
            className="group relative flex items-center justify-between p-7 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-[35px] transition-all cursor-pointer overflow-hidden bg-white dark:bg-slate-900/40 shadow-lg shadow-slate-200/50 dark:shadow-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center gap-6 relative z-10">
              <span className="text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors font-mono">0{i + 1}</span>
              <span className="text-xl font-bold transition-colors text-slate-900 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-white">{item}</span>
            </div>
            
            <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
              <Sparkles className="text-emerald-400 animate-pulse" size={16} />
              <ArrowRight className="text-emerald-400" size={24} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TOCSlide;
