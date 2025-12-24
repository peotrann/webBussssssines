
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { CheckCircle2, Cpu, Smartphone, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: any = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const SolutionSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          <span className="text-slate-800 dark:text-white/40">GIẢI PHÁP</span> <span className="text-emerald-500 underline decoration-emerald-500/20">TOÀN DIỆN</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {[
            { 
              icon: CheckCircle2, 
              title: "Hệ sinh thái O2O", 
              desc: "Kết nối trạm Offline vật lý với nền tảng quản lý Online 24/7.",
              color: "emerald"
            },
            { 
              icon: Cpu, 
              title: "Smart Stick IoT", 
              desc: "Cảm biến đa năng đo lường chính xác các chỉ số sinh trưởng của cây.",
              color: "blue"
            },
            { 
              icon: ShieldCheck, 
              title: "Bảo hiểm 'Lá Lành'", 
              desc: "Cam kết bồi thường 100% giá trị cây nếu xảy ra rủi ro lưu trú.",
              color: "orange"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ x: 10 }}
              className="group flex gap-6 p-8 backdrop-blur-md rounded-[40px] border transition-all cursor-default bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30"
            >
              <div className={`mt-1 p-3 bg-${item.color}-500/10 rounded-2xl group-hover:bg-${item.color}-500 group-hover:text-white transition-all`}>
                <item.icon size={24} className={`text-${item.color}-600 dark:text-${item.color}-400 group-hover:text-white`} />
              </div>
              <div>
                <h3 className="font-black text-xl mb-2 group-hover:text-emerald-600 transition-colors uppercase italic text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed transition-colors text-slate-700 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative"
        >
          <div className="aspect-square bg-white dark:bg-slate-900 rounded-[80px] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative group">
             <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-all duration-700" />
             
             <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Smartphone className="text-emerald-500 mb-8 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" size={100} />
                </motion.div>
                <h4 className="text-3xl font-black mb-4 tracking-tighter text-slate-950 dark:text-white">GARDENCARE APP</h4>
                <div className="flex gap-2 mb-6">
                  <div className="px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase">iOS</div>
                  <div className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 rounded-full text-[10px] font-black text-blue-700 dark:text-blue-400 uppercase">Android</div>
                </div>
                <p className="text-slate-700 dark:text-slate-400 text-sm italic font-medium">"Số hóa hồ sơ sức khỏe cây trồng đầu tiên tại Việt Nam"</p>
             </div>
             
             <Sparkles className="absolute top-10 right-10 text-emerald-500/20 animate-pulse" size={40} />
             <Zap className="absolute bottom-10 left-10 text-blue-500/20 animate-bounce" size={40} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSlide;
