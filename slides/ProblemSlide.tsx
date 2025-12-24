
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { AlertTriangle, UserX, Clock, TrendingDown } from 'lucide-react';

const colorMap = {
  red: {
    border: 'border-red-500/20 dark:border-red-500/20',
    bgIcon: 'bg-red-500/10',
    textIcon: 'text-red-500',
    bgBadge: 'bg-red-500/10 dark:bg-red-500/20',
    textBadge: 'text-red-700 dark:text-red-400',
    line: 'bg-red-500/30'
  },
  orange: {
    border: 'border-orange-500/20 dark:border-orange-500/20',
    bgIcon: 'bg-orange-500/10',
    textIcon: 'text-orange-500',
    bgBadge: 'bg-orange-500/10 dark:bg-orange-500/20',
    textBadge: 'text-orange-700 dark:text-orange-400',
    line: 'bg-orange-500/30'
  },
  blue: {
    border: 'border-blue-500/20 dark:border-blue-500/20',
    bgIcon: 'bg-blue-500/10',
    textIcon: 'text-blue-500',
    bgBadge: 'bg-blue-500/10 dark:bg-blue-500/20',
    textBadge: 'text-blue-700 dark:text-blue-400',
    line: 'bg-blue-500/30'
  }
};

const ProblemSlide: React.FC<SlideProps> = () => {
  const problems = [
    { 
      icon: UserX, 
      color: "red" as const, 
      title: "Thiếu Kiến Thức", 
      desc: "Người chơi cây đô thị thiếu kiến thức chuyên môn, dẫn đến tỷ lệ cây chết sau khi mua rất cao (~70%).",
      stat: "70% Cây chết"
    },
    { 
      icon: AlertTriangle, 
      color: "orange" as const, 
      title: "Dịch Vụ Hậu Mãi", 
      desc: "Các cửa hàng chỉ tập trung bán cây (Mua đứt bán đoạn), không có giải pháp hỗ trợ chuyên nghiệp.",
      stat: "0 Dịch vụ hỗ trợ"
    },
    { 
      icon: Clock, 
      color: "blue" as const, 
      title: "Rào Cản Thời Gian", 
      desc: "Người trẻ bận rộn, thường xuyên đi công tác/du lịch nhưng không có nơi gửi gắm 'thú cưng xanh'.",
      stat: "24/7 Bận rộn"
    }
  ];

  return (
    <div className="flex flex-col justify-start pt-10 pb-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="h-12 w-2 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
        <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          VẤN ĐỀ <span className="text-red-500">THỊ TRƯỜNG</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {problems.map((item, i) => {
          const Icon = item.icon;
          const colors = colorMap[item.color];
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group p-8 lg:p-10 backdrop-blur-md rounded-[40px] border ${colors.border} flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 bg-white dark:bg-slate-900/60 shadow-xl shadow-slate-200/40 dark:shadow-none`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${colors.line} group-hover:h-2 transition-all`} />
              
              <div className={`w-16 h-16 lg:w-20 lg:h-20 ${colors.bgIcon} rounded-3xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform`}>
                <Icon className={colors.textIcon} size={32} />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-black mb-3 uppercase tracking-tight text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-700 dark:text-slate-400 text-xs lg:text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>
              
              <div className={`mt-auto px-4 py-2 ${colors.bgBadge} rounded-full ${colors.textBadge} text-[9px] lg:text-[10px] font-black uppercase tracking-widest`}>
                {item.stat}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 p-6 lg:p-8 bg-gradient-to-r from-red-600/10 via-white dark:via-slate-900 to-red-600/10 border border-red-500/20 rounded-[35px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 group cursor-default shadow-lg shadow-slate-200/30 dark:shadow-none"
      >
        <TrendingDown className="text-red-500 animate-bounce" size={28} />
        <p className="text-red-800 dark:text-red-400 font-bold text-lg lg:text-xl italic text-center">
          "Gần <span className="text-slate-950 dark:text-white text-xl lg:text-2xl font-black">50%</span> người dùng tự đánh giá mình là nghiệp dư trong việc chăm sóc cây."
        </p>
      </motion.div>
    </div>
  );
};

export default ProblemSlide;
