import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Building2, Activity, HardDrive, LayoutGrid, Sparkles } from 'lucide-react';

const ProductOverviewSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          HỆ SINH THÁI <span className="text-emerald-500">GARDENCARE</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: Building2, title: "Plant Hotel", color: "emerald", desc: "Dịch vụ lưu trú cao cấp, quy trình chăm sóc 5 sao cho cây vắng chủ.", colorClass: "text-emerald-600 dark:text-emerald-500", bgClass: "bg-emerald-500/10", hoverBg: "group-hover:bg-emerald-600" },
          { icon: Activity, title: "Plant Hospital", color: "blue", desc: "Chẩn đoán bệnh bằng Master Data và điều trị hồi sức chuyên sâu.", colorClass: "text-blue-600 dark:text-blue-500", bgClass: "bg-blue-500/10", hoverBg: "group-hover:bg-blue-600" },
          { icon: HardDrive, title: "Smart Stick", color: "orange", desc: "Thiết bị IoT đo độ ẩm, ánh sáng, N-P-K và cảnh báo tức thì.", colorClass: "text-orange-600 dark:text-orange-500", bgClass: "bg-orange-500/10", hoverBg: "group-hover:bg-orange-600" },
          { icon: LayoutGrid, title: "Garden App", color: "purple", desc: "App điều hành, hồ sơ sức khỏe và nhật ký tăng trưởng cho cây.", colorClass: "text-purple-600 dark:text-purple-500", bgClass: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-600" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ 
              scale: 1.05, 
              translateY: -15,
            }}
            className="group relative p-10 backdrop-blur-xl rounded-[60px] border transition-all duration-500 flex flex-col items-center text-center bg-white/90 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            <div className={`w-20 h-20 rounded-[30px] flex items-center justify-center mb-8 transition-all duration-500 ${item.bgClass} ${item.hoverBg} group-hover:rotate-12`}>
              <item.icon className={`${item.colorClass} group-hover:text-white transition-colors`} size={36} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic text-slate-800 dark:text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
            
            {i === 0 && (
              <div className="absolute -top-3 -right-3 bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 animate-bounce shadow-lg">
                <Sparkles size={10} /> HOT
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-20 p-10 rounded-[60px] border text-center relative overflow-hidden group transition-all duration-500 bg-white/80 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative z-10 text-emerald-600 dark:text-emerald-500 font-black uppercase text-xs tracking-[0.4em] mb-4 block">KẾT NỐI KHÔNG GIỚI HẠN</span>
        <h4 className="relative z-10 text-4xl font-black italic tracking-tighter text-slate-900 dark:text-white">Mô hình kinh doanh O2O (Hybrid Model)</h4>
        <p className="relative z-10 mt-4 font-medium italic text-slate-600 dark:text-slate-500">Sức mạnh từ trạm Offline kết nối linh hoạt qua nền tảng Online.</p>
      </motion.div>
    </div>
  );
};

export default ProductOverviewSlide;