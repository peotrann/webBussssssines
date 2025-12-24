
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { SlideProps } from '../types';

const data = [
  { name: 'Kệ & Vật dụng', value: 80, fill: '#10b981' },
  { name: 'Grow-light + TB điện', value: 50, fill: '#3b82f6' },
  { name: 'IoT MVP (lô 200-300 TB)', value: 60, fill: '#f59e0b' },
  { name: 'TB đo pH/EC/Ánh sáng', value: 30, fill: '#ef4444' },
  { name: 'Văn phòng / Khác', value: 30, fill: '#8b5cf6' },
];

const CapexSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-12">CHI PHÍ ĐẦU TƯ (CAPEX)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
             <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={80} outerRadius={120} dataKey="value" paddingAngle={5}>
                   {data.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
             </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6">
           <div className="p-8 bg-slate-900 rounded-[40px] border border-slate-800">
              <h4 className="text-emerald-400 font-bold mb-2">TỔNG VỐN ĐẦU TƯ BAN ĐẦU</h4>
              <p className="text-5xl font-black">250 <span className="text-lg">Triệu VNĐ</span></p>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-3xl">
                 <p className="text-xs text-slate-500 mb-1">Cơ sở vật chất</p>
                 <p className="font-bold">130 Triệu</p>
              </div>
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-3xl">
                 <p className="text-xs text-slate-500 mb-1">R&D / IoT</p>
                 <p className="font-bold">60 Triệu</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CapexSlide;
