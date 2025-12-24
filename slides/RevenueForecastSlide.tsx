
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';
import { SlideProps } from '../types';

const dataBySource = [
  { name: 'Thiết bị IoT', value: 525, fill: '#10b981' },
  { name: 'Khách sạn cây', value: 150, fill: '#3b82f6' },
  { name: 'Bệnh viện cây', value: 150, fill: '#f59e0b' },
  { name: 'Sản phẩm phụ', value: 175, fill: '#ef4444' },
];

// const dataByQuarter = [
//   { name: 'Quý 1', revenue: 92.5 },
//   { name: 'Quý 2', revenue: 185 },
//   { name: 'Quý 3', revenue: 287.5 },
//   { name: 'Quý 4', revenue: 435 },
// ];

const dataByQuarterAndSource = [
  {
    quarter: 'Q1',
    iot: 52.5,
    hotel: 10,
    hospital: 10,
    extra: 20,
  },
  {
    quarter: 'Q2',
    iot: 105,
    hotel: 20,
    hospital: 20,
    extra: 40,
  },
  {
    quarter: 'Q3',
    iot: 157.5,
    hotel: 40,
    hospital: 40,
    extra: 50,
  },
  {
    quarter: 'Q4',
    iot: 210,
    hotel: 80,
    hospital: 80,
    extra: 65,
  },
];

const RevenueForecastSlide: React.FC<SlideProps> = () => {
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
      <h2 className="text-4xl font-bold mb-8">DỰ BÁO DOANH THU <span className="text-emerald-400">NĂM 1</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-96">
        <div className="bg-slate-900/40 p-6 rounded-[40px] border border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-emerald-400 text-center">Cơ cấu doanh thu (triệu VNĐ)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataBySource} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {dataBySource.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
              </Pie>
              <Tooltip 
                contentStyle={tooltipStyle.contentStyle}
                itemStyle={tooltipStyle.itemStyle}
                labelStyle={tooltipStyle.labelStyle}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/40 p-6 rounded-[40px] border border-slate-800 flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-emerald-400 text-center">Tăng trưởng theo Quý (triệu VNĐ)</h3>
          {/* <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataByQuarter}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                cursor={{ fill: 'rgba(16, 185, 129, 0.1)' }}
                contentStyle={tooltipStyle.contentStyle}
                itemStyle={tooltipStyle.itemStyle}
                labelStyle={tooltipStyle.labelStyle}
              />
              <Bar dataKey="revenue" fill="#10b981" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer> */}
          <ResponsiveContainer width="100%" height="100%">
  <BarChart
    data={dataByQuarterAndSource}
    margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
  >
    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
    <XAxis dataKey="quarter" stroke="#94a3b8" />
    <YAxis stroke="#94a3b8" />
    <Tooltip
      contentStyle={tooltipStyle.contentStyle}
      labelStyle={tooltipStyle.labelStyle}
    />
    <Legend />

    <Bar dataKey="iot" name="Thiết bị IoT" fill="#3b82f6" radius={[6, 6, 0, 0]} />
    <Bar dataKey="hotel" name="Khách sạn cây" fill="#f59e0b" radius={[6, 6, 0, 0]} />
    <Bar dataKey="hospital" name="Bệnh viện cây" fill="#10b981" radius={[6, 6, 0, 0]} />
    <Bar dataKey="extra" name="Sản phẩm phụ" fill="#ef4444" radius={[6, 6, 0, 0]} />
  </BarChart>
</ResponsiveContainer>

        </div>
      </div>

      <div className="mt-8 flex justify-center gap-12">
         <div className="text-center">
            <p className="text-xs text-slate-500 font-bold uppercase">Tổng doanh thu dự kiến</p>
            <p className="text-4xl font-black text-white">1.000 <span className="text-sm text-emerald-400">Triệu VNĐ</span></p>
         </div>
         <div className="text-center">
            <p className="text-xs text-slate-500 font-bold uppercase">Điểm hòa vốn (BEP)</p>
            <p className="text-4xl font-black text-white">Tháng 24</p>
         </div>
      </div>
    </div>
  );
};

export default RevenueForecastSlide;
