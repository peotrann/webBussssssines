
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SlideProps } from '../types';

const data = [
  { name: 'Nhân sự', value: 33 },
  { name: 'Mặt bằng', value: 16 },
  { name: 'Vật tư', value: 7 },
  { name: 'Marketing', value: 4 },
  { name: 'Điện nước', value: 4 },
  { name: 'Vận chuyển', value: 4 },
  { name: 'Dự phòng', value: 3 },
];

const OpexSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center pt-16">
      <h2 className="text-4xl font-bold mb-12 italic text-slate-900 dark:text-white">CHI PHÍ VẬN HÀNH HÀNG THÁNG (OPEX)</h2>
      
      <div className="h-96 bg-slate-900/40 p-10 rounded-[60px] border border-slate-800 shadow-xl px-2">
        <ResponsiveContainer width="100%" height="100%">
           <BarChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                cursor={{fill: '#1e293b'}} 
                contentStyle={{
                  backgroundColor: '#1e293b', 
                  border: '1px solid #3b82f6', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                  color: '#ffffff'
                }} 
                itemStyle={{ color: '#ffffff', fontWeight: 'bold' }}
                labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
              />
              <Bar dataKey="value" fill="#3b82f6" radius={[10, 10, 0, 0]} />
           </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="flex justify-between items-center p-6 bg-blue-600/10 rounded-3xl border border-blue-500/20 shadow-sm">
            <span className="font-bold text-slate-800 dark:text-slate-200">Tổng chi phí / Tháng</span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">71 <span className="text-sm">Triệu VNĐ</span></span>
         </div>
         <div className="flex justify-between items-center p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-sm">
            <span className="font-bold text-slate-400">Tổng chi phí / Năm</span>
            <span className="text-2xl font-black text-slate-400">852 <span className="text-sm">Triệu VNĐ</span></span>
         </div>
      </div>
    </div>
  );
};

export default OpexSlide;
