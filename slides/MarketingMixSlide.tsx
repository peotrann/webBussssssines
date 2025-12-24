
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideProps } from '../types';
import { 
  ShoppingBag, Tag, MapPin, Megaphone, Users, Settings, Layout, Target, Zap
} from 'lucide-react';

const MarketingMixSlide: React.FC<SlideProps> = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Bán kính sơ đồ - Điều chỉnh để các node lớn không chạm nhau
  const radiusX = 360; 
  const radiusY = 300; 
  
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
    <div className="min-h-[1700px] flex flex-col items-center justify-start pt-24 pb-80 overflow-visible relative">
      {/* Tiêu đề - Tách biệt hoàn toàn phía trên */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-[500px] z-10"
      >
        <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[12px] mb-6 block">Chiến lược tăng trưởng</span>
        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white leading-[1.1]">
          HỆ GIÁ TRỊ <br/>
          <span className="text-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">MARKETING 7P</span>
        </h2>
      </motion.div>

      {/* Sơ đồ Diagram */}
      <div className="relative w-1 h-1 flex items-center justify-center">
        
        {/* SVG Connections - Layer dưới cùng */}
        <svg className="absolute overflow-visible pointer-events-none z-0" width="1200" height="1200" viewBox="0 0 1200 1200">
          <defs>
            <radialGradient id="hubCircleGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          
          <circle cx="600" cy="600" r="240" fill="url(#hubCircleGrad)" className="animate-pulse" />
          <circle cx="600" cy="600" r={radiusY} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="12 12" className="opacity-10 text-slate-500" />

          {pData.map((item, i) => {
            const angle = (i * 360) / 7 - 90;
            const xNode = 600 + Math.cos(angle * (Math.PI / 180)) * radiusX;
            const yNode = 600 + Math.sin(angle * (Math.PI / 180)) * radiusY;
            
            return (
              <g key={`link-${i}`}>
                <motion.line
                  x1="600" y1="600"
                  x2={xNode} y2={yNode}
                  stroke={item.color}
                  strokeWidth="2.5"
                  strokeOpacity={hoveredIndex === i ? "0.7" : "0.2"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                />
              </g>
            );
          })}
        </svg>

        {/* Nút trung tâm - Đã được mở rộng và tối ưu hiển thị chữ */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative z-10 w-56 h-56 rounded-full bg-slate-950 border-4 border-emerald-500 flex flex-col items-center justify-center shadow-[0_0_120px_rgba(16,185,129,0.5)] group"
        >
          <div className="absolute inset-[-12px] bg-emerald-500/10 rounded-full animate-ping opacity-20" />
          <Target className="text-emerald-500 mb-3 group-hover:scale-110 transition-transform duration-500" size={48} />
          <div className="text-center px-4 flex flex-col items-center justify-center">
             <h3 className="text-white font-black text-3xl tracking-tighter uppercase italic leading-tight">
               LÁ LÀNH
             </h3>
             <p className="text-[10px] font-black text-emerald-500 tracking-[0.25em] mt-1 whitespace-nowrap opacity-80 uppercase">
               STRATEGIC HUB
             </p>
          </div>
        </motion.div>

        {/* 7P Nodes - Kích thước lớn và z-index động */}
        {pData.map((item, i) => {
          const angle = (i * 360) / 7 - 90;
          const x = Math.cos(angle * (Math.PI / 180)) * radiusX;
          const y = Math.sin(angle * (Math.PI / 180)) * radiusY;
          const Icon = item.icon;
          const isHovered = hoveredIndex === i;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, x: x, y: y }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute flex flex-col items-center"
              style={{ 
                transform: 'translate(-50%, -50%)',
                zIndex: isHovered ? 100 : 20 
              }}
            >
              <div 
                className={`w-36 h-36 rounded-[50px] flex flex-col items-center justify-center shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 border-2 cursor-pointer relative ${
                    isHovered ? 'scale-110 border-emerald-500' : 'border-slate-200 dark:border-slate-800'
                }`}
                style={{ boxShadow: isHovered ? `0 30px 60px -15px ${item.color}70` : `0 20px 40px -10px ${item.color}30` }}
              >
                <Icon size={44} style={{ color: item.color }} className={`${isHovered ? 'rotate-12 scale-110' : ''} transition-transform duration-300`} />
                <span className={`mt-3 text-xs font-black uppercase tracking-widest transition-colors ${isHovered ? 'text-emerald-500' : 'text-slate-500'}`}>
                  {item.p}
                </span>
                
                {/* Tooltip detail - Luôn hiển thị trên cùng (Layer TOP) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.9 }}
                      className="absolute bottom-full mb-14 left-1/2 -translate-x-1/2 w-80 pointer-events-none z-[200]"
                    >
                      <div className="bg-slate-950/95 backdrop-blur-2xl text-white p-7 rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-slate-700 text-center relative">
                        <div className="flex items-center justify-center gap-4 mb-4">
                           <Icon size={24} style={{ color: item.color }} />
                           <h4 className="font-black text-base uppercase tracking-[0.2em]" style={{ color: item.color }}>{item.p} Strategy</h4>
                        </div>
                        <p className="text-sm text-slate-300 font-medium italic leading-relaxed">
                          {item.desc}
                        </p>
                        {/* Tooltip arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-slate-950/95" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dòng chữ Tagline - Tách xa hẳn phía dưới để không đè các node dưới */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-[550px] flex flex-col items-center gap-12 z-10"
      >
        <div className="flex items-center gap-8 bg-emerald-500/10 px-20 py-8 rounded-full border border-emerald-500/20 backdrop-blur-2xl shadow-3xl shadow-emerald-900/40">
           <Zap size={32} className="text-emerald-500 animate-pulse" />
           <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.4em] italic leading-none">
             Chiến lược đa kênh tập trung vào trải nghiệm khách hàng
           </p>
        </div>
        
        <div className="flex flex-col items-center gap-3 opacity-50">
          <p className="text-slate-500 text-sm font-black italic tracking-[0.7em] uppercase">
            * Khám phá chi tiết bằng cách rê chuột
          </p>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingMixSlide;
