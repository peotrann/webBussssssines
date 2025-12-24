
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { ShieldCheck, Heart, Sun, Sprout, Leaf, Wind, Flower2, Droplets } from 'lucide-react';

const USPSlide: React.FC<SlideProps> = () => {
  const items = [
    { 
      icon: Sprout, 
      title: "Chăm Sóc Từ Gốc", 
      color: "#10b981", 
      desc: "Phác đồ dựa trên nhịp sinh học tự nhiên của từng giống cây, đảm bảo sự phát triển bền vững nhất.",
      shape: "rounded-[60px_20px_60px_20px]"
    },
    { 
      icon: Sun, 
      title: "Môi Trường Lý Tưởng", 
      color: "#f59e0b", 
      desc: "Giả lập ánh sáng và độ ẩm tối ưu, mang cả bầu không khí thiên nhiên vào không gian đô thị.",
      shape: "rounded-[20px_60px_20px_60px]"
    },
    { 
      icon: ShieldCheck, 
      title: "Cam Kết An Tâm", 
      color: "#3b82f6", 
      desc: "Sự bảo đảm tuyệt đối cho những mầm xanh với quy trình theo dõi và bảo vệ 24/7.",
      shape: "rounded-[60px_60px_20px_60px]"
    },
    { 
      icon: Heart, 
      title: "Kết Nối Tâm Hồn", 
      color: "#ef4444", 
      desc: "Nuôi dưỡng sợi dây gắn kết giữa người và cây thông qua những câu chuyện tăng trưởng riêng biệt.",
      shape: "rounded-[20px_60px_60px_60px]"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-20">
      {/* Tiêu đề chính tập trung */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-24 relative"
      >
        <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase text-white leading-none relative z-10">
          GIÁ TRỊ <span className="text-emerald-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">NGUYÊN BẢN</span>
        </h2>
        <div className="absolute -top-10 -left-10 opacity-10 animate-pulse">
          <Leaf size={120} className="text-emerald-500 rotate-[-15deg]" />
        </div>
      </motion.div>

      {/* Grid thiết kế không đối xứng để tránh trùng lặp hình thức */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group p-10 backdrop-blur-3xl border border-emerald-500/10 bg-emerald-950/20 shadow-2xl flex items-start gap-8 transition-all cursor-default relative overflow-hidden ${item.shape}`}
            >
              {/* Trang trí background độc bản cho mỗi thẻ */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {i === 0 && <Sprout size={200} />}
                {i === 1 && <Sun size={200} />}
                {i === 2 && <ShieldCheck size={200} />}
                {i === 3 && <Heart size={200} />}
              </div>

              {/* Icon Section */}
              <div 
                className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center relative z-10" 
                style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <Icon size={32} style={{ color: item.color }} className="group-hover:rotate-12 transition-transform duration-500" />
              </div>

              {/* Text Section */}
              <div className="relative z-10 flex flex-col items-start text-left">
                <h3 className="font-black text-2xl italic uppercase tracking-tighter text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 leading-relaxed italic">
                  {item.desc}
                </p>
              </div>

              {/* Ký hiệu nhỏ tạo điểm nhấn khác biệt */}
              <div className="absolute top-6 right-8 opacity-20">
                {i % 2 === 0 ? <Flower2 size={16} /> : <Droplets size={16} />}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Decoration Elements Footer */}
      <div className="mt-20 flex gap-4 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        ))}
      </div>
    </div>
  );
};

export default USPSlide;
