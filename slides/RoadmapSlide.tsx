
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';

const columns = [
  "Tháng 1-2 2026", "Tháng 3-4 2026", "Tháng 5-6 2026", "Tháng 7-8 2026",
  "Tháng 9-10 2026", "Tháng 11-12 2026", "Tháng 1-2 2027", "Tháng 3-4 2027"
];

const categories = [
  {
    name: "Phát triển sản phẩm",
    color: "#f59e0b", // Amber/Yellow
    bg: "bg-amber-500",
    items: [
      { label: "Nghiên cứu thị trường", start: 0, end: 2 },
      { label: "Thiết kế dịch vụ", start: 0, end: 3 },
      { label: "Phát triển IoT prototype", start: 1, end: 4 },
      { label: "Thiết lập cơ sở vật chất", start: 1, end: 4 },
      { label: "Chuẩn bị nhân sự thử nghiệm", start: 2, end: 4 },
      { label: "Pilot thử nghiệm", start: 2, end: 4 },
    ]
  },
  {
    name: "Ra mắt thị trường",
    color: "#6366f1", // Indigo/Blue
    bg: "bg-indigo-500",
    items: [
      { label: "Marketing ra mắt", start: 2, end: 4 },
      { label: "Chăm sóc những khách hàng đầu tiên", start: 3, end: 5 },
      { label: "Thu thập & phân tích phản hồi", start: 3, end: 6 },
      { label: "Tối ưu quy trình", start: 4, end: 6 },
      { label: "Nghiên cứu nâng cấp IoT", start: 4, end: 6 },
    ]
  },
  {
    name: "Mở rộng",
    color: "#ec4899", // Pink
    bg: "bg-pink-500",
    items: [
      { label: "Mở rộng đội ngũ", start: 4, end: 6 },
      { label: "Nâng cấp cơ sở", start: 4, end: 7 },
      { label: "Triển khai IoT đã nâng cấp", start: 4, end: 8 },
      { label: "Mở rộng khu vực phục vụ", start: 5, end: 8 },
      { label: "Thiết lập quan hệ đối tác", start: 4, end: 8 },
    ]
  }
];

const RoadmapSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col w-full min-w-[800px] pt-16 pb-4">
      <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-wider flex items-center justify-center gap-4 text-slate-900 dark:text-white">
        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
        LỊCH TRÌNH CÁC CỘT MỐC QUAN TRỌNG
        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
      </h2>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl">
        {/* Header */}
        <div className="grid grid-cols-12 border-b border-slate-800 bg-slate-900/60">
          <div className="col-span-3 p-4 font-bold text-slate-400 text-sm border-r border-slate-800">Timeline</div>
          <div className="col-span-9 grid grid-cols-8">
            {columns.map((col, i) => (
              <div key={i} className="p-4 text-[10px] font-bold text-slate-500 text-center border-r border-slate-800/50 last:border-r-0 leading-tight">
                {col}
              </div>
            ))}
          </div>
        </div>

        {/* Categories and Grid */}
        <div className="relative">
          {/* Vertical Grid Lines Overlay */}
          <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
            <div className="col-span-3 border-r border-slate-800"></div>
            <div className="col-span-9 grid grid-cols-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border-r border-slate-800/30 last:border-r-0"></div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {categories.map((cat, catIdx) => (
              <React.Fragment key={catIdx}>
                {/* Category Header Row */}
                <div className="grid grid-cols-12 border-b border-slate-800/50">
                  <div className="col-span-12 p-2">
                    <span className={`${cat.bg} text-white text-[10px] font-black px-3 py-1 rounded-md uppercase shadow-lg shadow-black/20`}>
                      {cat.name}
                    </span>
                  </div>
                </div>

                {/* Activity Rows */}
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="grid grid-cols-12 group hover:bg-slate-800/20 transition-colors">
                    <div className="col-span-3 p-3 text-[11px] text-slate-300 font-medium border-r border-slate-800 flex items-center">
                      {item.label}
                    </div>
                    <div className="col-span-9 grid grid-cols-8 p-1 relative min-h-[40px] items-center">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: `${((item.end - item.start) / 8) * 100}%`, opacity: 1 }}
                        transition={{ delay: 0.5 + (catIdx * 0.2) + (itemIdx * 0.05), duration: 0.8 }}
                        style={{ 
                          left: `${(item.start / 8) * 100}%`,
                          backgroundColor: cat.color 
                        }}
                        className="absolute h-6 rounded-md shadow-lg shadow-black/40 flex items-center px-2 overflow-hidden"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-8 opacity-50 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-500"></div> Q1-Q2 2026: Xây dựng</div>
         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> Q3-Q4 2026: Vận hành</div>
         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div> 2027: Bứt phá</div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default RoadmapSlide;
