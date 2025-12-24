
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { SlideProps } from '../types';

const pieData = [
  { name: 'Nghiệp dư (thiếu kiến thức)', value: 47.4 },
  { name: 'Hoàn toàn không biết', value: 19.3 },
  { name: 'Có kiến thức cơ bản', value: 31.6 },
  { name: 'Rất am hiểu', value: 1.7 },
];

const barData = [
  { name: 'Thiếu kiến thức', value: 69.7 },
  { name: 'Không có thời gian', value: 51.5 },
  { name: 'Sợ cây chết', value: 51.5 },
  { name: 'Đi công tác/du lịch', value: 27.3 },
];

const COLORS = ['#10b981', '#ef4444', '#3b82f6', '#f59e0b'];

const MarketResearchSlide: React.FC<SlideProps> = () => {
  const tooltipStyle = {
    contentStyle: { 
      backgroundColor: '#1e293b', 
      border: '1px solid #10b981', 
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '12px'
    },
    itemStyle: { color: '#ffffff' },
    labelStyle: { color: '#94a3b8', fontWeight: 'bold' }
  };

  return (
    <div className="h-full flex flex-col justify-center pt-16">
      <h2 className="text-4xl font-bold mb-8 italic text-center md:text-left text-slate-900 dark:text-white">KẾT QUẢ KHẢO SÁT SƠ CẤP</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px] md:h-96 px-2">
        <div className="bg-slate-900/40 p-6 rounded-[40px] border border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-emerald-400 text-center">Mức độ am hiểu về kỹ thuật chăm sóc</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={tooltipStyle.contentStyle}
                itemStyle={tooltipStyle.itemStyle}
                labelStyle={tooltipStyle.labelStyle}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/40 p-6 rounded-[40px] border border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-emerald-400 text-center">Khó khăn thường gặp (%)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={120} stroke="#94a3b8" fontSize={10} />
              <Tooltip 
                cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
                contentStyle={tooltipStyle.contentStyle}
                itemStyle={tooltipStyle.itemStyle}
                labelStyle={tooltipStyle.labelStyle}
              />
              <Bar dataKey="value" fill="#10b981" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
         <div className="px-8 py-4 bg-emerald-600 rounded-full font-bold shadow-lg shadow-emerald-900/50 hover:scale-105 transition-transform cursor-default text-white">
            60% SẴN SÀNG TRẢ PHÍ ĐỂ GIẢM TỶ LỆ CÂY CHẾT
         </div>
      </div>
    </div>
  );
};

export default MarketResearchSlide;
