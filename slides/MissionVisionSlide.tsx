
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Target, Eye } from 'lucide-react';

const MissionVisionSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-emerald-500/5 rounded-[60px] blur-2xl group-hover:bg-emerald-500/10 transition-all"></div>
          <div className="relative flex flex-col md:flex-row gap-8 items-center p-12 rounded-[50px] border transition-all duration-500 bg-white/60 dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
             <div className="p-6 bg-emerald-600 rounded-3xl shrink-0 shadow-lg shadow-emerald-500/20">
                <Target size={48} className="text-white" />
             </div>
             <div>
                <h3 className="text-3xl font-bold mb-4 text-emerald-500 italic uppercase tracking-tight">SỨ MỆNH</h3>
                <p className="text-xl leading-relaxed font-medium italic text-slate-700 dark:text-slate-300">
                  "Lá Lành GardenCare ra đời với mong muốn trở thành người bạn đồng hành đáng tin cậy của từng cá nhân yêu cây, mang lại sự an tâm tuyệt đối thông qua kiến thức chuyên môn và công nghệ hiện đại."
                </p>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-blue-500/5 rounded-[60px] blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
          <div className="relative flex flex-col md:flex-row gap-8 items-center p-12 rounded-[50px] border transition-all duration-500 bg-white/60 dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
             <div className="p-6 bg-blue-600 rounded-3xl shrink-0 shadow-lg shadow-blue-500/20">
                <Eye size={48} className="text-white" />
             </div>
             <div>
                <h3 className="text-3xl font-bold mb-4 text-blue-500 italic uppercase tracking-tight">TẦM NHÌN</h3>
                <p className="text-xl leading-relaxed font-medium text-slate-700 dark:text-slate-300">
                  Trở thành dịch vụ chăm sóc cây cảnh cá nhân tiên phong ứng dụng IoT tại Việt Nam, xây dựng một hệ sinh thái chăm cây thông minh, nơi mỗi chậu cây đều có "hồ sơ sức khỏe" riêng.
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVisionSlide;
