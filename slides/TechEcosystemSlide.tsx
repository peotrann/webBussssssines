import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { Cpu, Wifi, Database, BrainCircuit, Share2, Cloud, Network } from 'lucide-react';

const TechEcosystemSlide: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col justify-center py-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          HỆ SINH THÁI <span className="text-emerald-500">CÔNG NGHỆ</span>
        </h2>
      </motion.div>
      
      <div className="relative p-12 backdrop-blur-xl rounded-[60px] border overflow-hidden group bg-white/95 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
           <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
           <motion.div 
             whileHover={{ y: -10 }}
             className="space-y-6 group/card"
           >
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-900/50 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all">
                <Cpu className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-emerald-700 dark:text-emerald-400">Smart Stick IoT</h3>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">
                Phần cứng độc quyền tích hợp <span className="text-slate-900 dark:text-white font-bold">ESP32</span>. Thu thập Độ ẩm, Ánh sáng, NPK thời gian thực với độ chính xác phòng thí nghiệm.
              </p>
              <div className="flex gap-2">
                 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-600 uppercase border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">Low Power</span>
                 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-600 uppercase border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">Wi-Fi/BT</span>
              </div>
           </motion.div>

           <motion.div 
             whileHover={{ y: -10 }}
             className="space-y-6 md:border-x group/card border-slate-100 dark:border-slate-800 md:px-12"
           >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all">
                <Database className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-blue-700 dark:text-blue-400">Plant Master Data</h3>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">
                Hơn <span className="text-slate-900 dark:text-white font-bold">10,000+ điểm dữ liệu</span> sinh học. Hệ thống tự động so sánh chỉ số thực tế với ngưỡng lý tưởng của từng loài.
              </p>
              <div className="flex gap-2">
                 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-600 uppercase border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">AWS Cloud</span>
                 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-600 uppercase border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">Big Data</span>
              </div>
           </motion.div>

           <motion.div 
             whileHover={{ y: -10 }}
             className="space-y-6 group/card"
           >
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-900/50 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all">
                <BrainCircuit className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-purple-700 dark:text-purple-400">AI Core Engine</h3>
              <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed">
                Nhận diện sâu bệnh qua hình ảnh và đưa ra khuyến nghị <span className="text-slate-900 dark:text-white font-bold">Personalized Care</span> dựa trên lịch sử tăng trưởng.
              </p>
              <div className="flex gap-2">
                 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-600 uppercase border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">TensorFlow</span>
                 <span className="text-[10px] font-bold text-slate-600 dark:text-slate-600 uppercase border border-slate-200 dark:border-slate-800 px-2 py-1 rounded-md">Computer Vision</span>
              </div>
           </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center gap-10">
           <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Cloud className="text-blue-600 dark:text-blue-400" size={20} />
              <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-400">Real-time Sync</span>
           </div>
           <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Network className="text-emerald-600 dark:text-emerald-400" size={20} />
              <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-400">Scalable Infra</span>
           </div>
           <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <Share2 className="text-purple-600 dark:text-purple-400" size={20} />
              <span className="text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-400">Open API Connect</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TechEcosystemSlide;