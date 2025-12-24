
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideProps } from '../types';
import { Mail, Globe, Phone, Leaf, Instagram, Facebook, Sparkles, Gift } from 'lucide-react';

const Snowfall = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          initial={{ 
            top: -10, 
            left: `${Math.random() * 100}%` 
          }}
          animate={{ 
            top: '100%',
            left: `${(Math.random() * 100) + (Math.random() * 6 - 3)}%`,
          }}
          transition={{ 
            duration: 4 + Math.random() * 4, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  );
};

const ClosingSlide: React.FC<SlideProps> = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`w-full flex flex-col items-center justify-center text-center py-4 transition-colors duration-500 relative rounded-[40px] overflow-visible ${
        isHovered ? 'bg-red-950/80 shadow-[inset_0_0_60px_rgba(220,38,38,0.3)]' : 'bg-transparent'
      }`}
      style={{ minHeight: 'fit-content' }}
    >
      <AnimatePresence>
        {isHovered && <Snowfall />}
      </AnimatePresence>

      {/* Tối ưu hóa background decor */}
      {!isHovered && (
        <div className="absolute w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
      )}

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer relative z-20 w-full flex flex-col items-center overflow-visible"
      >
        <motion.div 
          className="mb-4 relative w-20 h-20"
          whileHover={{ rotate: [0, -5, 5, 0] }}
        >
          <div className={`absolute inset-0 blur-xl opacity-30 transition-colors duration-300 ${isHovered ? 'bg-yellow-400' : 'bg-emerald-500'}`} />
          <div className={`w-full h-full rounded-[25px] flex items-center justify-center shadow-xl transition-colors duration-300 relative z-10 ${
            isHovered ? 'bg-red-600' : 'bg-emerald-600'
          }`}>
            {isHovered ? <Gift className="text-white" size={32} /> : <Leaf className="text-white" size={32} />}
            <Sparkles className="absolute -top-2 -right-2 text-yellow-300 animate-pulse" size={18} />
          </div>
        </motion.div>
        
        {/* H2 container với leading-[2.5] và overflow-visible cực kỳ quan trọng để không cắt dấu */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 italic tracking-tight leading-[2.5] px-10 overflow-visible flex flex-wrap items-center justify-center gap-x-6">
          <span className={`bg-clip-text text-transparent italic transition-all duration-500 inline-block py-4 px-8 -mx-4 whitespace-nowrap overflow-visible ${
            isHovered ? 'bg-gradient-to-r from-yellow-300 to-white' : 'bg-gradient-to-r from-emerald-400 to-blue-500'
          }`}>CẢM ƠN QUÝ VỊ ĐÃ LẮNG NGHE!</span>
        </h2>

        {isHovered && (
          <motion.p 
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg text-yellow-300 font-black uppercase tracking-widest mb-4 drop-shadow-md"
          >
            🎄 MERRY CHRISTMAS 🎄
          </motion.p>
        )}
      </motion.div>
      
      <p className={`text-base md:text-lg max-w-2xl mb-8 italic font-medium transition-colors duration-300 relative z-10 px-6 ${
        isHovered ? 'text-red-100' : 'text-slate-400'
      }`}>
        "Lá Lành GardenCare - Đồng hành cùng đam mê sống xanh."
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl relative z-10 px-4">
        {[
          { icon: Globe, label: "Website", val: "lalanhtv.com", color: "emerald" },
          { icon: Mail, label: "Email", val: "contact@lalanhtv.com", color: "blue" },
          { icon: Phone, label: "Hotline", val: "0123.456.789", color: "orange" },
        ].map((item, i) => (
          <div 
            key={i}
            className={`flex flex-col items-center p-4 backdrop-blur-md rounded-[30px] border transition-all duration-300 ${
              isHovered 
              ? 'bg-white/5 border-white/10' 
              : 'bg-slate-900/40 border-slate-800'
            }`}
          >
             <div className={`p-2.5 rounded-xl mb-2 transition-colors duration-300 ${
               isHovered ? 'bg-red-500/30 text-white' : `bg-slate-800 text-emerald-400`
             }`}>
               <item.icon size={18} />
             </div>
             <p className={`text-[9px] font-black tracking-widest uppercase mb-0.5 ${
               isHovered ? 'text-red-200' : 'text-slate-500'
             }`}>{item.label}</p>
             <p className="text-sm font-bold text-white">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 relative z-10">
        <div className="flex gap-6">
           <Instagram size={18} className={`cursor-pointer transition-colors ${isHovered ? 'text-white' : 'text-slate-600'}`} />
           <Facebook size={18} className={`cursor-pointer transition-colors ${isHovered ? 'text-white' : 'text-slate-600'}`} />
        </div>
        
        <div className={`flex items-center gap-4 text-[9px] font-black tracking-[0.3em] uppercase transition-colors duration-300 ${
          isHovered ? 'text-red-300' : 'text-slate-700'
        }`}>
           <span>NHÓM 10</span>
           <div className={`w-1 h-1 rounded-full ${isHovered ? 'bg-white' : 'bg-emerald-800'}`} />
           <span>STARTUP PLAN 2025</span>
           <div className={`w-1 h-1 rounded-full ${isHovered ? 'bg-white' : 'bg-emerald-800'}`} />
           <span>UIT - ĐHQG-HCM</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ClosingSlide;
