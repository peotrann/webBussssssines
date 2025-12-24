
import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Layout, Smartphone, ShieldCheck, Database, Cpu, Bell, UserCircle } from 'lucide-react';

const uiScreens = [
  { id: "10.1", title: "Giao diện Đăng ký", icon: UserCircle, desc: "Màn hình tạo tài khoản mới cho người dùng." },
  { id: "10.2", title: "Giao diện Đăng nhập", icon: ShieldCheck, desc: "Xác thực người dùng vào hệ thống." },
  { id: "10.3", title: "Giao diện Hồ sơ tài khoản", icon: UserCircle, desc: "Quản lý thông tin cá nhân khách hàng." },
  { id: "10.4", title: "Đăng ký dịch vụ mới", icon: Smartphone, desc: "Form đặt lịch Bệnh viện/Khách sạn cây." },
  { id: "10.5", title: "Thông báo - Tin nhắn", icon: Bell, desc: "Cập nhật tình trạng cây từ chuyên gia." },
  { id: "10.6", title: "Trang chủ chính", icon: Layout, desc: "Dashboard quản lý danh sách cây cá nhân." },
  { id: "10.7", title: "Trang chủ Admin", icon: Database, desc: "Tổng quan vận hành toàn hệ thống cho quản lý." },
  { id: "10.8", title: "Quản lý Đơn hàng (Admin)", icon: Layout, desc: "Xử lý các yêu cầu dịch vụ đang thực hiện." },
  { id: "10.9", title: "Quản lý Khách hàng (Admin)", icon: Database, desc: "Dữ liệu người dùng và lịch sử sử dụng." },
  { id: "10.10", title: "Quản lý Thiết bị IoT (Admin)", icon: Cpu, desc: "Giám sát trạng thái các Smart Stick đang hoạt động." },
  { id: "10.11", title: "Quản lý Dataset Cây (Admin)", icon: Database, desc: "Thư viện kiến thức sinh học cho AI chẩn đoán." },
];

const UIShowcaseSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-6">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="h-10 w-2 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        <h2 className="text-4xl font-black italic tracking-tighter uppercase text-white">
          GIAO DIỆN <span className="text-emerald-500">ỨNG DỤNG & QUẢN TRỊ</span>
        </h2>
      </motion.div>

      <div className="relative group">
        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 custom-scrollbar snap-x snap-mandatory">
          {uiScreens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-[320px] snap-center"
            >
              <div className="bg-slate-900/60 border border-slate-800 rounded-[40px] p-6 hover:border-emerald-500/40 transition-all group/card overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
                  <screen.icon size={100} />
                </div>
                
                {/* Mockup Image Placeholder - Lấy theo số hiệu hình ảnh trong PDF */}
                <div className="aspect-[9/16] bg-slate-800 rounded-3xl mb-6 flex flex-col items-center justify-center border border-slate-700 shadow-inner group-hover/card:bg-emerald-950/20 transition-colors relative overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-900 rounded-full mb-4 opacity-50" />
                  <screen.icon className="text-emerald-500/20 group-hover/card:text-emerald-500/40 transition-colors mb-4" size={64} />
                  <span className="text-slate-600 font-black text-xs uppercase tracking-widest">Hình {screen.id}</span>
                  <div className="absolute inset-x-4 bottom-4 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700">
                    <div className="w-full h-1 bg-emerald-500/30 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-emerald-500" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-black text-white mb-2 leading-tight uppercase italic">{screen.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{screen.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe Hint */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 text-slate-500 animate-pulse">
           <span className="text-[10px] font-black uppercase tracking-[0.3em]">Cuộn để xem thêm</span>
           <div className="w-12 h-0.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: [-48, 48] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-full bg-emerald-500" 
              />
           </div>
        </div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-center text-slate-500 text-sm italic"
      >
        "Hệ thống quản trị tập trung giúp đồng bộ hóa dữ liệu giữa các trạm microstation và thiết bị IoT của khách hàng."
      </motion.p>
    </div>
  );
};

export default UIShowcaseSlide;
