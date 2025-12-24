import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { 
  Zap, 
  Package, 
  Heart, 
  Target, 
  Cpu, 
  Truck, 
  DollarSign, 
  TrendingUp,
  Link
} from 'lucide-react';

const BMCSlide: React.FC<SlideProps> = () => {
  const sections = [
    { title: "Đối tác chính", icon: Link, items: ["Nhà cung cấp cây/vật tư", "Đối tác chiến lược (Cafe, Căn hộ)", "Cố vấn nông nghiệp/IoT"], grid: "col-span-2 row-span-2" },
    { title: "Hoạt động chính", icon: Zap, items: ["Vận hành Bệnh viện & Khách sạn", "R&D App & Smart Stick", "Quản lý hạ tầng O2O"], grid: "col-span-2 row-span-1" },
    { title: "Giá trị đề xuất", icon: Package, items: ["Chẩn đoán cây chính xác (IoT)", "Lưu trú an toàn (Bảo hiểm 100%)", "Trải nghiệm chăm cây 1-chạm"], grid: "col-span-2 row-span-2" },
    { title: "Quan hệ khách hàng", icon: Heart, items: ["Chatbot 24/7 & Hotline", "Cá nhân hóa phác đồ", "Cộng đồng yêu cây Lá Lành"], grid: "col-span-2 row-span-1" },
    { title: "Phân khúc khách hàng", icon: Target, items: ["Gen Z & Millennials bận rộn", "Người mới chơi cây (nghiệp dư)", "Khối B2B (Cafe, Co-working)"], grid: "col-span-2 row-span-2" },
    { title: "Nguồn lực chính", icon: Cpu, items: ["Hệ thống IoT & Cloud", "Đội ngũ kỹ sư & Kỹ thuật viên", "Trạm Micro-station"], grid: "col-span-2 row-span-1" },
    { title: "Kênh truyền thông", icon: Truck, items: ["Ứng dụng di động (Core)", "Mạng xã hội (TikTok, FB)", "Trạm chăm sóc Offline"], grid: "col-span-2 row-span-1" },
    { title: "Cơ cấu chi phí", icon: DollarSign, items: ["Sản xuất Smart Stick", "Vận hành trạm & Nhân sự", "Marketing & R&D Cloud"], grid: "col-span-5 row-span-1" },
    { title: "Dòng doanh thu", icon: TrendingUp, items: ["Phí khách sạn (lưu trú)", "Phí bệnh viện (điều trị)", "Bán thiết bị & Phụ phẩm"], grid: "col-span-5 row-span-1" }
  ];

  return (
    <div className="h-full flex flex-col justify-center py-6">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="h-10 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-4xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          BẢN VẼ MÔ HÌNH <span className="text-emerald-500">KINH DOANH</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-10 grid-rows-3 gap-3 h-[500px]">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`${sec.grid} backdrop-blur-sm border rounded-3xl p-5 flex flex-col group transition-all bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 shadow-xl shadow-slate-200/50 dark:shadow-none`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <sec.icon size={16} />
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">{sec.title}</h3>
            </div>
            <ul className="space-y-2">
              {sec.items.map((item, idx) => (
                <li key={idx} className="text-[11px] leading-tight flex gap-2 text-slate-700 dark:text-slate-300">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BMCSlide;