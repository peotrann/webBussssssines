
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Home, Building, Sparkles, Target, Zap } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const ageData = [
  { name: 'Dưới 18', value: 14.9, fill: '#3b82f6' },
  { name: '18 - 24', value: 40.1, fill: '#ef4444' },
  { name: '25 - 34', value: 25.2, fill: '#f59e0b' },
  { name: '35 - 44', value: 5.4, fill: '#10b981' },
  { name: '45 - 54', value: 4.5, fill: '#8b5cf6' },
  { name: '55 - 64', value: 4.5, fill: '#06b6d4' },
  { name: 'Trên 65', value: 5.4, fill: '#ec4899' },
];

const payData = [
  { name: 'Dưới 15% giá trị cây', value: 10.9, fill: '#3b82f6' },
  { name: '15% - 30% giá trị cây', value: 42.6, fill: '#ef4444' },
  { name: 'Trên 30% giá trị cây', value: 21.3, fill: '#f59e0b' },
  { name: 'Cứu được cây là chính', value: 25.2, fill: '#10b981' },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants: any = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const PersonaSlide: React.FC<SlideProps> = () => {
  const tooltipStyle = {
    contentStyle: { 
      backgroundColor: '#1e293b', 
      border: '1px solid #334155', 
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '11px',
      padding: '8px 12px'
    },
    itemStyle: { color: '#ffffff' },
    labelStyle: { color: '#94a3b8' }
  };

  return (
    <div className="h-full flex flex-col justify-start pt-16 pb-4 overflow-y-auto custom-scrollbar">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          CHÂN DUNG <span className="text-emerald-500 underline decoration-emerald-500/30">KHÁCH HÀNG</span>
        </h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
      >
        {/* Persona 1: Gen Z */}
        <motion.div 
          variants={cardVariants}
          className="group bg-white dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-[50px] border border-slate-200 dark:border-emerald-500/20 shadow-2xl flex flex-col"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <Home className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter italic">Gen Z & Millennials</h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Tập Làm Vườn & Chill</p>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-grow">
            {[
              { icon: <Target size={16} />, text: "Độ tuổi: 18 - 34 tuổi (Chiếm > 65% khảo sát)." },
              { icon: <Zap size={16} />, text: "Nhu cầu: Decor phòng, giải tỏa stress." },
              { icon: <Sparkles size={16} />, text: "Nỗi đau: 'Sát thủ' cây cảnh, hay vắng nhà." }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 text-sm font-semibold italic">
                <span className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600 shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="h-64 w-full bg-slate-50 dark:bg-slate-950/40 rounded-[35px] p-4 border border-slate-100 dark:border-slate-800 relative overflow-visible">
             <div className="absolute top-4 left-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">3.5. Biểu đồ độ tuổi</p>
             </div>
             <ResponsiveContainer width="100%" height="100%">
               <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                 <Pie 
                    data={ageData} 
                    cx="50%" 
                    cy="45%" 
                    innerRadius={40} 
                    outerRadius={55} 
                    dataKey="value" 
                    paddingAngle={3}
                    stroke="none"
                  >
                   {ageData.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                 </Pie>
                 <Tooltip {...tooltipStyle} formatter={(val) => `${val}%`} />
                 <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '9px', paddingTop: '10px' }} />
               </PieChart>
             </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Persona 2: Business & Specialists */}
        <motion.div 
          variants={cardVariants}
          className="group bg-white dark:bg-slate-900/40 backdrop-blur-md p-8 rounded-[50px] border border-slate-200 dark:border-blue-500/20 shadow-2xl flex flex-col"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Building className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter italic">B2B & Sưu tầm</h3>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Kinh Doanh & Cây giá trị</p>
            </div>
          </div>

          <ul className="space-y-4 mb-8 flex-grow">
            {[
              { icon: <Target size={16} />, text: "Đối tượng: Quán Cafe, Studio, Người sưu tầm cây quý." },
              { icon: <Zap size={16} />, text: "Nhu cầu: Giữ mảng xanh hoàn hảo, cứu cây suy kiệt." },
              { icon: <Sparkles size={16} />, text: "Sẵn lòng chi trả cao để hồi sinh giá trị kỷ niệm." }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 text-sm font-semibold italic">
                <span className="p-2 bg-blue-500/10 rounded-xl text-blue-600 shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="h-64 w-full bg-slate-50 dark:bg-slate-950/40 rounded-[35px] p-4 border border-slate-100 dark:border-slate-800 relative overflow-visible">
             <div className="absolute top-4 left-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">3.7. Mức sẵn lòng chi trả</p>
             </div>
             <ResponsiveContainer width="100%" height="100%">
               <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                 <Pie 
                    data={payData} 
                    cx="50%" 
                    cy="45%" 
                    innerRadius={40} 
                    outerRadius={55} 
                    dataKey="value" 
                    paddingAngle={3}
                    stroke="none"
                  >
                   {payData.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                 </Pie>
                 <Tooltip {...tooltipStyle} formatter={(val) => `${val}%`} />
                 <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '9px', paddingTop: '10px' }} />
               </PieChart>
             </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonaSlide;
