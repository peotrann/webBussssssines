
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideProps } from '../types';
import { 
  ShoppingBag, Tag, MapPin, Megaphone, Users, Settings, Layout, Target, Zap
} from 'lucide-react';

const MarketingMixSlide: React.FC<SlideProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const radiusX = 320; 
  const radiusY = 260; 
  
  const pData = [
    { p: "Product", icon: ShoppingBag, color: "#10b981", desc: "Hệ sinh thái Hotel & Hospital kết hợp IoT độc quyền." },
    { p: "Price", icon: Tag, color: "#3b82f6", desc: "Linh hoạt: Gói lưu trú lẻ hoặc mua thiết bị trọn gói." },
    { p: "Place", icon: MapPin, color: "#f59e0b", desc: "Trạm Micro-station Q2, Q7, BT + Nền tảng App Lá Lành." },
    { p: "Promotion", icon: Megaphone, color: "#ef4444", desc: "Viral Content TikTok & Chiến dịch trải nghiệm IoT." },
    { p: "People", icon: Users, color: "#8b5cf6", desc: "Đội ngũ 'Bác sĩ cây' & Kỹ sư IoT hàng đầu." },
    { p: "Process", icon: Settings, color: "#06b6d4", desc: "Quy trình SOP 5 bước: Khám - Phác đồ - Chăm sóc." },
    { p: "Evidence", icon: Layout, color: "#eab308", desc: "Trạm vật lý hiện đại, App mượt, Báo cáo chuyên sâu." },
  ];

  return (
    <div className="min-h-[1200px] flex flex-col items-center justify-start pt-10 pb-40 overflow-visible relative">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-64 z-10"
      >
        <span className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Chiến lược tăng trưởng</span>
        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-tight">
          HỆ GIÁ TRỊ <br/>
          <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">MARKETING 7P</span>
        </h2>
      </motion.div>

      <div className="relative w-1 h-1 flex items-center justify-center">
        <svg className="absolute overflow-visible pointer-events-none z-0" width="1000" height="1000" viewBox="0 0 1000 1000">
          <defs>
            <radialGradient id="hubCircleGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="500" cy="500" r="200" fill="url(#hubCircleGrad)" className="animate-pulse" />
          <circle cx="500" cy="500" r={radiusY} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" className="opacity-10 text-slate-500" />
          {pData.map((item, i) => {
            const angle = (i * 360) / 7 - 90;
            const xNode = 500 + Math.cos(angle * (Math.PI / 180)) * radiusX;
            const yNode = 500 + Math.sin(angle * (Math.PI / 180)) * radiusY;
            return (
              <g key={`link-${i}`}>
                <motion.line x1="500" y1="500" x2={xNode} y2={yNode} stroke={item.color} strokeWidth="2" strokeOpacity={hoveredIndex === i ? "0.7" : "0.2"} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 1 }} />
              </g>
            );
          })}
        </svg>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative z-10 w-48 h-48 rounded-full bg-slate-950 border-4 border-emerald-500 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.5)] group">
          <Target className="text-emerald-500 mb-2 group-hover:scale-110 transition-transform" size={40} />
          <div className="text-center px-4">
             <h3 className="text-white font-black text-2xl tracking-tighter uppercase italic leading-none">LÁ LÀNH</h3>
             <p className="text-[9px] font-black text-emerald-500 tracking-[0.2em] mt-1 opacity-80 uppercase">STRATEGIC HUB</p>
          </div>
        </motion.div>

        {pData.map((item, i) => {
          const angle = (i * 360) / 7 - 90;
          const x = Math.cos(angle * (Math.PI / 180)) * radiusX;
          const y = Math.sin(angle * (Math.PI / 180)) * radiusY;
          const Icon = item.icon;
          const isHovered = hoveredIndex === i;
          return (
            <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, x: x, y: y }} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} className="absolute flex flex-col items-center" style={{ transform: 'translate(-50%, -50%)', zIndex: isHovered ? 100 : 20 }}>
              <div className={`w-32 h-32 rounded-[40px] flex flex-col items-center justify-center shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 border-2 cursor-pointer relative ${isHovered ? 'scale-110 border-emerald-500' : 'border-slate-200 dark:border-slate-800'}`}>
                <Icon size={36} style={{ color: item.color }} />
                <span className={`mt-2 text-[10px] font-black uppercase tracking-widest ${isHovered ? 'text-emerald-500' : 'text-slate-500'}`}>{item.p}</span>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-full mb-10 left-1/2 -translate-x-1/2 w-72 pointer-events-none z-[200]">
                      <div className="bg-slate-950/95 backdrop-blur-2xl text-white p-6 rounded-[35px] shadow-3xl border border-slate-700 text-center">
                        <p className="text-xs text-slate-300 font-medium italic leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-80 flex flex-col items-center gap-8 z-10">
        <div className="flex items-center gap-6 bg-emerald-500/10 px-12 py-6 rounded-full border border-emerald-500/20 backdrop-blur-2xl shadow-3xl shadow-emerald-900/40">
           <Zap size={24} className="text-emerald-500 animate-pulse" />
           <p className="text-xl font-black text-emerald-400 uppercase tracking-[0.3em] italic leading-none">Chiến lược đa kênh tập trung trải nghiệm</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingMixSlide;
