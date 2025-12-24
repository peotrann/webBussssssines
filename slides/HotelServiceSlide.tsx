import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { QrCode, Lightbulb, Camera, Calendar, Star, ShieldCheck } from 'lucide-react';

const HotelServiceSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-16"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          <span className="text-emerald-500">KHÁCH SẠN CÂY CẢNH</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <p className="text-slate-700 dark:text-slate-400 text-lg mb-10 italic leading-relaxed">
            Môi trường lưu trú tiêu chuẩn 5 sao, giúp cây khỏe mạnh ngay cả khi chủ nhân vắng nhà.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: QrCode, title: "QR ID Control", desc: "Quản lý riêng biệt từng chậu cây bằng mã định danh thông minh.", color: "emerald" },
              { icon: Lightbulb, title: "Smart Lighting", desc: "Giả lập ánh sáng mặt trời theo nhu cầu quang hợp của từng loài.", color: "yellow" },
              { icon: Camera, title: "24/7 Live Stream", desc: "Xem cây 'ngủ' và 'ăn' trực tiếp qua ứng dụng di động.", color: "blue" },
              { icon: ShieldCheck, title: "Safe Care Zone", desc: "Môi trường vô trùng, kiểm soát nhiệt độ và độ ẩm tối ưu.", color: "purple" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                className="p-8 backdrop-blur-md rounded-[40px] border flex flex-col gap-4 group transition-all bg-white/90 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500/30"
              >
                <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center text-${item.color}-700 dark:text-${item.color}-400 group-hover:bg-${item.color}-600 group-hover:text-white transition-all`}>
                  <item.icon size={24} />
                </div>
                <h4 className="font-black uppercase tracking-tighter text-slate-800 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
           <motion.div 
             whileHover={{ rotate: -2, scale: 1.02 }}
             className="p-10 bg-emerald-600 rounded-[60px] text-center shadow-2xl shadow-emerald-900/40 relative overflow-hidden group cursor-pointer"
           >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                <Star size={120} />
              </div>
              <Calendar className="mx-auto mb-6 text-white" size={48} />
              <h4 className="font-black text-2xl text-white mb-4 uppercase italic">THỜI GIAN LINH HOẠT</h4>
              <p className="text-emerald-50 font-medium leading-relaxed">Gửi từ <span className="text-white font-black text-xl">3 - 30 ngày</span>. <br/>Phù hợp cho mọi kỳ nghỉ hay chuyến công tác.</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="p-10 border-2 border-dashed border-emerald-500/30 rounded-[60px] text-center relative bg-white dark:bg-slate-900/20 shadow-xl shadow-slate-200/50 dark:shadow-none"
           >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white dark:bg-slate-800 rounded-full text-[10px] font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase border border-emerald-500/20">INSIGHT</div>
              <p className="text-slate-700 dark:text-slate-400 italic leading-relaxed">
                "Hơn <span className="text-emerald-600 dark:text-emerald-400 font-bold">85%</span> người nuôi cây lo lắng cây sẽ héo úa khi họ không ở nhà quá 3 ngày."
              </p>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelServiceSlide;