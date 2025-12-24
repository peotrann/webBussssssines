
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Shield, Zap, Heart, Trophy, Leaf, Orbit, Sparkles } from 'lucide-react';

const USPSlide: React.FC<SlideProps> = () => {
  const items = [
    { 
      icon: Shield, 
      title: "Dữ Liệu Khách Quan", 
      color: "emerald", 
      hex: "#10b981",
      desc: "Phác đồ khoa học dựa trên cảm biến IoT chính xác, loại bỏ mọi phỏng đoán cảm tính trong chăm sóc cây."
    },
    { 
      icon: Zap, 
      title: "Một Chạm Duy Nhất", 
      color: "blue", 
      hex: "#3b82f6",
      desc: "Toàn bộ quy trình đặt lịch, theo dõi sức khỏe và nhận báo cáo gói gọn trong một ứng dụng duy nhất."
    },
    { 
      icon: Trophy, 
      title: "Bảo Hiểm Toàn Diện", 
      color: "orange", 
      hex: "#f59e0b",
      desc: "Cam kết bồi hoàn 100% giá trị cây nếu xảy ra rủi ro trong quá trình lưu trú hoặc điều trị."
    },
    { 
      icon: Heart, 
      title: "Trải Nghiệm Cảm Xúc", 
      color: "purple", 
      hex: "#8b5cf6",
      desc: "Không chỉ là dịch vụ, chúng tôi lưu giữ hành trình lớn khôn của cây như một phần tâm hồn của chủ nhân."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Tiêu đề slide */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-emerald-500" size={20} />
          <span className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[12px] block">Lợi thế cạnh tranh</span>
          <Sparkles className="text-emerald-500" size={20} />
        </div>
        <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white leading-tight">
          GIÁ TRỊ <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">ĐỘC BẢN</span>
        </h2>
        <div className="mt-4 w-24 h-1.5 bg-emerald-500 mx-auto rounded-full opacity-50" />
      </motion.div>

      {/* Grid hiển thị các "nút" (thẻ giá trị) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 backdrop-blur-xl rounded-[45px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xl flex gap-6 items-start transition-all cursor-default relative overflow-hidden"
            >
              {/* Trang trí góc thẻ */}
              <div 
                className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ color: item.hex }}
              >
                <Icon size={96} strokeWidth={1} />
              </div>

              {/* Icon container */}
              <div 
                className="p-5 rounded-3xl shadow-inner flex-shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500" 
                style={{ backgroundColor: `${item.hex}15` }}
              >
                <Icon size={32} style={{ color: item.hex }} />
              </div>

              {/* Content */}
              <div className="text-left relative z-10">
                <h3 className="font-black text-xl italic uppercase tracking-tighter text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chân slide đơn giản */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex items-center gap-4 bg-slate-900/20 dark:bg-slate-900/60 px-10 py-4 rounded-full border border-slate-200 dark:border-slate-800"
      >
         <div className="flex items-center gap-3">
            <Orbit className="text-emerald-500 animate-spin" size={16} style={{ animationDuration: '8s' }} />
            <p className="text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.3em] italic">
              KẾT NỐI GIÁ TRỊ THỰC TRÊN NỀN TẢNG <span className="text-emerald-500">SỐ HÓA TOÀN DIỆN</span>
            </p>
         </div>
      </motion.div>
    </div>
  );
};

export default USPSlide;
