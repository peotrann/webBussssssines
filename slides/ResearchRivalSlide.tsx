
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { SlideProps } from '../types';

//Bạn đã từng sử dụng dịch vụ chăm sóc cây từ những mô hình nào dưới đây chưa?
const pieData = [
  { name: 'Nhà vườn, tiệm cây địa phương', value: 39.1 },
  { name: 'Thợ tự do', value: 35.1 },
  { name: 'Dịch vụ ngoại/trực tuyến (DVVS Hòa Mỹ)', value: 15.3 },
  { name: 'Chưa từng', value: 10.5 },
];

//Nếu đã dùng, thì mức độ hài lòng của bạn với dịch vụ đó là bao nhiêu?
const pieeData = [
  { name: 'Rất hài lòng', value: 4 },
  { name: 'Hài lòng', value: 4 },
  { name: 'Bình thường', value: 22.3 },
  { name: 'Không hài lòng (Giá cao, Dịch vụ chưa tốt...', value: 30.7 },
  { name: 'Chưa trải nghiệm', value: 39.1 },
];

const COLORS = ['#10b981', '#ef4444', '#3b82f6', '#f59e0b'];

const MarketResearchSlide: React.FC<SlideProps> = () => {
  const tooltipStyle = {
    contentStyle: { 
      backgroundColor: '#0f172a', 
      border: '1px solid #10b981', 
      borderRadius: '12px',
      color: '#f8fafc' 
    },
    itemStyle: { color: '#10b981' },
    labelStyle: { color: '#94a3b8', fontWeight: 'bold' }
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-8 italic text-center md:text-left">KẾT QUẢ KHẢO SÁT SƠ CẤP</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px] md:h-96">
        <div className="bg-slate-900/40 p-6 rounded-[40px] border border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-emerald-400 text-center">Các mô hình dịch vụ chăm sóc cây từng trải nghiệm</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
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
          <h3 className="text-lg font-bold mb-4 text-emerald-400 text-center">Mức độ hài lòng đối với dịch vụ</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieeData}
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
      </div>
    </div>
  );
};

export default MarketResearchSlide;
