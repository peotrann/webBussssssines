
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Target, TrendingUp, MapPin } from 'lucide-react';

const incomeData = [
  { name: 'Dưới 10 triệu', value: 50.0, fill: '#3b82f6' },
  { name: '10 - 20 triệu', value: 25.2, fill: '#ef4444' },
  { name: 'Trên 30 triệu', value: 9.9, fill: '#f59e0b' },
  { name: 'Không trả lời', value: 14.9, fill: '#10b981' },
];

const spendingData = [
  { name: 'Trên 3 triệu', value: 36.1, fill: '#10b981' },
  { name: '1 - 3 triệu', value: 29.7, fill: '#f59e0b' },
  { name: '500k - 1 triệu', value: 6.4, fill: '#ef4444' },
  { name: 'Dưới 500k', value: 5.0, fill: '#3b82f6' },
  { name: 'Không chi tiêu', value: 22.8, fill: '#8b5cf6' },
];

const locationData = [
  { name: 'Trung tâm (Q1,3,5...)', value: 15.3, fill: '#3b82f6' },
  { name: 'Quận 2, 7', value: 17.8, fill: '#ef4444' },
  { name: 'BT / Gò Vấp', value: 21.8, fill: '#f59e0b' },
  { name: 'Ngoại ô khác', value: 25.2, fill: '#10b981' },
  { name: 'Tỉnh thành khác', value: 19.8, fill: '#06b6d4' },
];

const TAMSlide: React.FC<SlideProps> = () => {
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
        className="flex items-center gap-4 mb-10"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          QUY MÔ <span className="text-emerald-500 underline decoration-emerald-500/20">THỊ TRƯỜNG</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
         {[
           { label: "TAM", title: "Tổng thị trường khả dụng", val: "1.000 Tỷ", desc: "2 triệu hộ x 500k VNĐ/năm", icon: TrendingUp, color: "blue" },
           { label: "SAM", title: "Thị trường có thể phục vụ", val: "380 Tỷ", desc: "38% khu vực trọng điểm (Q2, Q7, BT)", icon: MapPin, color: "emerald" },
           { label: "SOM", title: "Thị trường mục tiêu ban đầu", val: "1 Tỷ", desc: "Mục tiêu 1% SAM trong 1-3 năm", icon: Target, color: "fuchsia" }
         ].map((item, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[45px] shadow-2xl flex flex-col items-center text-center relative overflow-hidden group"
           >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-${item.color}-500/30 group-hover:h-2 transition-all`} />
              <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-500 group-hover:scale-110 transition-transform`}>
                 <item.icon size={28} />
              </div>
              <span className={`text-xs font-black uppercase tracking-[0.4em] text-${item.color}-600 mb-2`}>{item.label}</span>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-4">{item.title}</h4>
              <p className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">{item.val}</p>
              <p className="text-[10px] text-slate-500 italic font-medium">{item.desc}</p>
           </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
         {/* Chart 3.9: Income */}
         <div className="bg-white dark:bg-slate-900/40 p-6 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col">
            <p className="text-[10px] font-black text-slate-500 uppercase text-center mb-4 italic tracking-widest">3.9. Thu nhập mỗi tháng (Hộ gia đình)</p>
            <div className="h-56">
               <ResponsiveContainer width="100%" height="100%">
                  {/* Fixed error: added missing left and right margin properties */}
                  <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                     <Pie 
                        data={incomeData} 
                        cx="50%" 
                        cy="45%" 
                        innerRadius={35} 
                        outerRadius={50} 
                        dataKey="value" 
                        paddingAngle={5}
                        stroke="none"
                      >
                        {incomeData.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                     </Pie>
                     <Tooltip {...tooltipStyle} formatter={(val) => `${val}%`} />
                     <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Chart 3.10: Spending */}
         <div className="bg-white dark:bg-slate-900/40 p-6 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col">
            <p className="text-[10px] font-black text-slate-500 uppercase text-center mb-4 italic tracking-widest">3.10. Chi tiêu cho cây cảnh & dịch vụ / năm</p>
            <div className="h-56">
               <ResponsiveContainer width="100%" height="100%">
                  {/* Fixed error: added missing left and right margin properties */}
                  <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                     <Pie 
                        data={spendingData} 
                        cx="50%" 
                        cy="45%" 
                        innerRadius={35} 
                        outerRadius={50} 
                        dataKey="value" 
                        paddingAngle={5}
                        stroke="none"
                      >
                        {spendingData.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                     </Pie>
                     <Tooltip {...tooltipStyle} formatter={(val) => `${val}%`} />
                     <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Chart 3.11: Location */}
         <div className="bg-white dark:bg-slate-900/40 p-6 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col">
            <p className="text-[10px] font-black text-slate-500 uppercase text-center mb-4 italic tracking-widest">3.11. Khu vực sinh sống tại TP.HCM</p>
            <div className="h-56">
               <ResponsiveContainer width="100%" height="100%">
                  {/* Fixed error: added missing left and right margin properties */}
                  <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                     <Pie 
                        data={locationData} 
                        cx="50%" 
                        cy="45%" 
                        innerRadius={35} 
                        outerRadius={50} 
                        dataKey="value" 
                        paddingAngle={5}
                        stroke="none"
                      >
                        {locationData.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                     </Pie>
                     <Tooltip {...tooltipStyle} formatter={(val) => `${val}%`} />
                     <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center text-slate-500 italic text-[11px] font-medium leading-relaxed px-10"
      >
        Mục tiêu doanh thu <span className="text-emerald-500 font-bold">1 tỷ VNĐ/năm</span> là giả định thận trọng, tập trung tối ưu vận hành thay vì mở rộng quá nhanh.
      </motion.p>
    </div>
  );
};

export default TAMSlide;
