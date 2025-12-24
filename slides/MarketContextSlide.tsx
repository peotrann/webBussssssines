import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { TrendingUp, Globe, Home, Zap, ArrowUpRight } from 'lucide-react';

const MarketContextSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          <span className="text-emerald-500">BỐI CẢNH & CƠ HỘI</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-10 backdrop-blur-md rounded-[60px] border relative group overflow-hidden bg-white/90 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="absolute top-6 right-6 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
            <Globe size={80} />
          </div>
          <h3 className="text-2xl font-black mb-6 text-emerald-600 dark:text-emerald-400 uppercase">Toàn Cầu</h3>
          <p className="text-slate-700 dark:text-slate-400 text-sm mb-8 leading-relaxed">Thị trường cây cảnh trong nhà dự kiến đạt <span className="text-slate-900 dark:text-white font-bold">29,89 tỷ USD</span> vào năm 2032.</p>
          
          <div className="space-y-3">
             <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 dark:text-slate-500">
                <span>Market Size</span>
                <span className="text-emerald-600 dark:text-emerald-400">+4.9% CAGR</span>
             </div>
             <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-[2px]">
                <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} transition={{ duration: 2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
             </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-10 backdrop-blur-md rounded-[60px] border relative group overflow-hidden bg-white/90 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="absolute top-6 right-6 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
            <Home size={80} />
          </div>
          <h3 className="text-2xl font-black mb-6 text-blue-600 dark:text-blue-400 uppercase">Việt Nam</h3>
          <p className="text-slate-700 dark:text-slate-400 text-sm mb-8 leading-relaxed">Giá trị tiêu thụ nội địa đạt <span className="text-slate-900 dark:text-white font-bold">45.000 tỷ VNĐ</span> (~1.9 tỷ USD) năm 2023.</p>
          
          <div className="space-y-3">
             <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 dark:text-slate-500">
                <span>Local Demand</span>
                <span className="text-blue-600 dark:text-blue-400">Booming</span>
             </div>
             <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-[2px]">
                <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ rotate: -2 }}
          animate={{ rotate: 0 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="bg-emerald-600 p-10 rounded-[60px] shadow-2xl shadow-emerald-900/40 flex flex-col justify-center text-center relative group overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
           <TrendingUp className="text-white mx-auto mb-6 group-hover:scale-125 transition-transform" size={64} />
           <h4 className="text-3xl font-black text-white mb-4 uppercase italic">CƠ HỘI VÀNG</h4>
           <p className="text-emerald-50 text-sm font-medium leading-relaxed">
             Xu hướng <span className="underline decoration-white/30 italic">"Biophilic Design"</span> bùng nổ mạnh mẽ, mỗi gia đình đều muốn có một góc xanh.
           </p>
           <ArrowUpRight className="absolute bottom-6 right-6 text-white/40" size={32} />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 flex justify-center items-center gap-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
      >
        <div className="flex items-center gap-3">
          <Zap className="text-yellow-600 dark:text-yellow-500" size={20} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600 dark:text-slate-400">Sống Xanh</span>
        </div>
        <div className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
        <div className="flex items-center gap-3">
          <Zap className="text-yellow-600 dark:text-yellow-500" size={20} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600 dark:text-slate-400">Công Nghệ IoT</span>
        </div>
        <div className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
        <div className="flex items-center gap-3">
          <Zap className="text-yellow-600 dark:text-yellow-500" size={20} />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600 dark:text-slate-400">An Tâm Tuyệt Đối</span>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketContextSlide;