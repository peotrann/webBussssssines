import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Activity, Thermometer, ShieldCheck, Microscope, Heart, Stethoscope } from 'lucide-react';

const HospitalServiceSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-12 w-2 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          <span className="text-blue-500">BỆNH VIỆN CÂY CẢNH</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="grid grid-cols-2 gap-6">
           {[
             { icon: Microscope, label: "Chẩn đoán bệnh", color: "blue" },
             { icon: Activity, label: "Điều trị chuyên sâu", color: "emerald" },
             { icon: Thermometer, label: "Hồi sức cấp cứu", color: "orange" },
             { icon: Stethoscope, label: "Tư vấn dinh dưỡng", color: "purple" }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -10, scale: 1.05 }}
               className="group aspect-square rounded-[45px] border flex flex-col items-center justify-center p-8 text-center transition-all relative overflow-hidden bg-white/90 dark:bg-slate-900/60 border-slate-200 dark:border-blue-500/10 hover:border-blue-500/40 shadow-xl shadow-slate-200/50 dark:shadow-none"
             >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`p-5 bg-${item.color}-500/10 rounded-3xl mb-5 group-hover:bg-${item.color}-500 transition-colors`}>
                  <item.icon className={`text-${item.color}-700 dark:text-${item.color}-500 group-hover:text-white transition-colors`} size={32} />
                </div>
                <span className="text-sm font-black uppercase tracking-tighter text-slate-800 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{item.label}</span>
                
                {i === 1 && (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <Heart size={16} className="text-red-500 fill-red-500" />
                  </motion.div>
                )}
             </motion.div>
           ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-10 rounded-[60px] border relative overflow-hidden bg-white/90 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
        >
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <Activity size={180} className="text-blue-500" />
           </div>
           
           <h3 className="text-2xl font-black mb-10 italic uppercase tracking-widest flex items-center gap-3 text-blue-700 dark:text-blue-400">
             <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
             QUY TRÌNH HỒI PHỤC
           </h3>
           
           <div className="space-y-8 relative z-10">
              {[
                { step: "Khám sàng lọc", desc: "Đo đạc thông số bằng cảm biến chuyên dụng." },
                { step: "Phân luồng", desc: "Xác định cấp độ bệnh (Nhẹ/Trung bình/Nặng)." },
                { step: "Phác đồ biệt lập", desc: "Xử lý đất, tỉa rễ và điều trị bằng chế phẩm sinh học." },
                { step: "Theo dõi 24/7", desc: "Cập nhật tiến trình phục hồi qua Master Data." },
                { step: "Bàn giao", desc: "Xuất báo cáo PDF 'Hành trình hồi sinh' cho chủ nhân." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex gap-6 group"
                >
                   <div className="relative flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs text-white z-10 shadow-lg shadow-blue-900/40">
                        {i + 1}
                      </div>
                      {i < 4 && <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 absolute top-8" />}
                   </div>
                   <div className="pb-4">
                      <h4 className="font-black uppercase text-sm mb-1 transition-colors text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400">{item.step}</h4>
                      <p className="text-slate-600 dark:text-slate-500 text-xs leading-relaxed italic">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HospitalServiceSlide;