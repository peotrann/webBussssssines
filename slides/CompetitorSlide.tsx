import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Check, X, ShieldCheck, Zap, BarChart3, Star } from 'lucide-react';

const data = [
  { feature: "Công nghệ IoT / App", lalanh: true, trad: false, cleaning: false },
  { feature: "Dịch vụ lưu trú (Hotel)", lalanh: true, trad: false, cleaning: false },
  { feature: "Chẩn đoán bằng dữ liệu", lalanh: true, trad: false, cleaning: false },
  { feature: "Cam kết bồi thường", lalanh: true, trad: false, cleaning: true },
  { feature: "Giá cả linh hoạt (Lẻ/Gói)", lalanh: true, trad: true, cleaning: true },
];

const CompetitorSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          PHÂN TÍCH <span className="text-emerald-500">CẠNH TRANH</span>
        </h2>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[50px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 backdrop-blur-xl shadow-2xl shadow-slate-200/50 dark:shadow-none"
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900/80">
              <th className="p-8 text-slate-600 dark:text-slate-500 font-black uppercase text-xs tracking-widest border-b border-slate-200 dark:border-slate-800">Tiêu chí so sánh</th>
              <th className="p-8 text-emerald-600 dark:text-emerald-400 font-black text-center italic text-xl border-b border-emerald-500/20 bg-emerald-500/5 relative">
                 Lá Lành GardenCare
                 <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              </th>
              <th className="p-8 text-slate-500 dark:text-slate-600 font-bold text-center border-b border-slate-200 dark:border-slate-800">Nhà vườn truyền thống</th>
              <th className="p-8 text-slate-500 dark:text-slate-600 font-bold text-center border-b border-slate-200 dark:border-slate-800">Dịch vụ Vệ sinh</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <td className="p-8 font-bold text-slate-800 dark:text-slate-300 group-hover:text-emerald-700 dark:group-hover:text-white transition-colors border-b border-slate-100 dark:border-slate-800/50">{row.feature}</td>
                <td className="p-8 text-center bg-emerald-500/5 border-b border-emerald-500/10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.1) }} className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      <Check className="text-white" size={20} strokeWidth={4} />
                    </div>
                  </motion.div>
                </td>
                <td className="p-8 text-center border-b border-slate-100 dark:border-slate-800/50">
                  <div className="flex justify-center"><X className="text-slate-400 dark:text-slate-700" size={24} /></div>
                </td>
                <td className="p-8 text-center border-b border-slate-100 dark:border-slate-800/50">
                  <div className="flex justify-center">
                    {row.cleaning ? (
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                        <Check className="text-slate-600 dark:text-slate-500" size={16} />
                      </div>
                    ) : (
                      <X className="text-slate-400 dark:text-slate-700" size={24} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
         <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-white dark:bg-slate-900/60 rounded-[40px] border border-slate-200 dark:border-emerald-500/20 flex items-center gap-6 group shadow-lg shadow-slate-200/50 dark:shadow-none">
            <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-600 transition-colors">
               <ShieldCheck className="text-emerald-700 dark:text-emerald-400 group-hover:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">CHUYÊN MÔN</p>
              <p className="font-black text-lg text-slate-900 dark:text-white">Dữ liệu thực tế</p>
            </div>
         </motion.div>
         
         <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-white dark:bg-slate-900/60 rounded-[40px] border border-slate-200 dark:border-blue-500/20 flex items-center gap-6 group shadow-lg shadow-slate-200/50 dark:shadow-none">
            <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-600 transition-colors">
               <Zap className="text-blue-700 dark:text-blue-400 group-hover:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">TIỆN LỢI</p>
              <p className="font-black text-lg text-slate-900 dark:text-white">Đặt lịch qua App</p>
            </div>
         </motion.div>

         <motion.div whileHover={{ scale: 1.05 }} className="p-8 bg-white dark:bg-slate-900/60 rounded-[40px] border border-slate-200 dark:border-yellow-500/20 flex items-center gap-6 group shadow-lg shadow-slate-200/50 dark:shadow-none">
            <div className="p-4 bg-yellow-500/10 rounded-2xl group-hover:bg-yellow-600 transition-colors">
               <Star className="text-yellow-700 dark:text-yellow-400 group-hover:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">CHI PHÍ</p>
              <p className="font-black text-lg text-slate-900 dark:text-white">Gói cước linh hoạt</p>
            </div>
         </motion.div>
      </div>
    </div>
  );
};

export default CompetitorSlide;