
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend
} from 'recharts';
import { ShieldAlert, ShieldCheck, AlertTriangle, AlertCircle, Info, TrendingDown, Cpu } from 'lucide-react';

const chart71Data = [
  { name: 'Không bao giờ', value: 40.1, fill: '#3b82f6' },
  { name: '1-2 lần', value: 16.3, fill: '#ef4444' },
  { name: '3-5 lần', value: 29.7, fill: '#f59e0b' },
  { name: 'Rất thường xuyên', value: 13.9, fill: '#10b981' },
];

const chart72Data = [
  { name: 'Đo không chính xác', value: 62.4 },
  { name: 'Ứng dụng lỗi/phức tạp', value: 57.9 },
  { name: 'Khó sử dụng/cài đặt', value: 57.9 },
  { name: 'Hỏng hóc khi dùng', value: 53.0 },
  { name: 'Hầu như không có', value: 50.0 },
].sort((a, b) => b.value - a.value);

const RiskManagementSlide: React.FC<SlideProps> = () => {
  const tooltipStyle = {
    contentStyle: { 
      backgroundColor: '#0f172a', 
      border: '1px solid #334155', 
      borderRadius: '12px',
      color: '#f8fafc',
      fontSize: '12px'
    },
    itemStyle: { color: '#10b981' },
  };

  return (
    <div className="h-full flex flex-col justify-start pt-12 pb-4 overflow-y-auto custom-scrollbar">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="h-10 w-2 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
        <h2 className="text-4xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          CHƯƠNG 07. QUẢN TRỊ <span className="text-red-500">RỦI RO</span>
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* RỦI RO KỸ THUẬT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 backdrop-blur-xl rounded-[40px] border bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Cpu className="text-emerald-500" size={24} />
              <h3 className="font-black text-xl uppercase italic text-slate-900 dark:text-white">Rủi ro Kỹ thuật</h3>
            </div>
            <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-widest">Biểu đồ 7.2</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
            Lo ngại lớn nhất của người dùng là <span className="text-emerald-500 font-bold">sai số cảm biến (62.4%)</span> và sự phức tạp của ứng dụng.
          </p>

          <div className="h-56 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chart72Data} layout="vertical" margin={{ left: 10, right: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={10} width={120} />
                <Tooltip {...tooltipStyle} formatter={(val: number) => `${val}%`} />
                <Bar dataKey="value" radius={[0, 10, 10, 0]}>
                  {chart72Data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#10b98180'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-5 rounded-3xl bg-emerald-500/5 border border-emerald-500/20">
            <p className="text-[10px] text-emerald-500 font-black uppercase mb-2 flex items-center gap-2">
              <ShieldCheck size={14} /> Giải pháp Lá Lành
            </p>
            <ul className="text-xs text-slate-700 dark:text-slate-400 space-y-1 italic">
              <li>• Sử dụng cảm biến điện dung thay vì điện trở (chống ăn mòn).</li>
              <li>• Thuật toán Cross-check dữ liệu trạm khí tượng để hiệu chỉnh.</li>
            </ul>
          </div>
        </motion.div>

        {/* RỦI RO THỊ TRƯỜNG */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 backdrop-blur-xl rounded-[40px] border bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingDown className="text-red-500" size={24} />
              <h3 className="font-black text-xl uppercase italic text-slate-900 dark:text-white">Rủi ro Thị trường</h3>
            </div>
            <span className="text-[10px] font-black text-red-500 bg-red-500/10 px-3 py-1 rounded-full uppercase tracking-widest">Biểu đồ 7.1</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
            Hơn <span className="text-red-500 font-bold">40% khách hàng</span> chưa mặn mà với dịch vụ lưu trú do thói quen tự chăm sóc hoặc ít vắng nhà.
          </p>

          <div className="h-56 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chart71Data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chart71Data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip {...tooltipStyle} formatter={(val: number) => `${val}%`} />
                <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ fontSize: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-5 rounded-3xl bg-red-500/5 border border-red-500/20">
            <p className="text-[10px] text-red-500 font-black uppercase mb-2 flex items-center gap-2">
              <ShieldCheck size={14} /> Chiến lược thích ứng
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-400 italic leading-relaxed">
              Tập trung giáo dục thị trường qua mô hình "Dùng thử thiết bị" để xây dựng lòng tin, chuyển đổi từ sở thích nhất thời sang thói quen chăm sóc chuyên nghiệp.
            </p>
          </div>
        </motion.div>
      </div>

      {/* RỦI RO KHÁC */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {[
           { type: "Tài Chính", icon: ShieldAlert, risk: "Dòng tiền âm giai đoạn đầu", solution: "Tối ưu hóa Capex qua việc thuê hạ tầng và đa dạng nguồn thu từ phụ phẩm." },
           { type: "Vận Hành", icon: AlertCircle, risk: "Lỗi hạ tầng trạm Micro", solution: "Hệ thống điện dự phòng & Quy trình SOP kiểm tra định kỳ hàng ngày." }
         ].map((item, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 + (i * 0.1) }}
             className="p-6 rounded-[35px] border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 flex items-center gap-5 group"
           >
              <div className="p-3 bg-red-500/10 rounded-2xl group-hover:bg-red-500 transition-all">
                <item.icon className="text-red-500 group-hover:text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.type}</p>
                <p className="font-bold text-slate-900 dark:text-slate-200">{item.risk}</p>
                <p className="text-[10px] text-slate-500 italic mt-1">{item.solution}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default RiskManagementSlide;
