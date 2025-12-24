
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideProps } from '../types';
import { UserCircle, Mail, Gift, Sparkles } from 'lucide-react';

const teamMembers = [
  { id: 1, name: "Phan Thị Ngọc Hân", mssv: "23520436" },
  { id: 2, name: "Chế Vũ Anh Thư", mssv: "23521533" },
  { id: 3, name: "Phạm Bảo Khang", mssv: "23520702" },
  { id: 4, name: "Trương Nguyễn Thùy Anh", mssv: "23520082" },
  { id: 5, name: "Trần Lê Gia Bảo", mssv: "23520142" },
  { id: 6, name: "Nguyễn Đức Tài", mssv: "22521277" },
  { id: 7, name: "Phạm Xuân Tuấn Anh", mssv: "22520071" },
  { id: 8, name: "Nguyễn Xuân Bách", mssv: "22520093" },
  { id: 9, name: "Trần An Huy", mssv: "22520574" },
];

const Snowfall = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ 
            top: -10, 
            left: `${Math.random() * 100}%`,
            opacity: Math.random() 
          }}
          animate={{ 
            top: '110%',
            left: `${(Math.random() * 100) + (Math.random() * 10 - 5)}%`,
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 2 + Math.random() * 3, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

const TitleSlide: React.FC<SlideProps> = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredGv, setHoveredGv] = useState(false);
  const [hoveredDate, setHoveredDate] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 p-4 rounded-3xl bg-emerald-600/10 border border-emerald-500/20"
      >
        <p className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm">Trường Đại Học Công Nghệ Thông Tin - ĐHQG-HCM</p>
      </motion.div>
      
      <motion.h1 
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tighter"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        BỆNH VIỆN & <br/> 
        <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">KHÁCH SẠN CÂY CẢNH</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 italic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Kế hoạch kinh doanh - Hiện thực hóa đam mê chăm sóc cây dễ dàng hơn cho người bận rộn.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-5xl bg-slate-900/40 backdrop-blur-xl p-8 md:p-10 rounded-[40px] border border-slate-800 shadow-2xl relative"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="relative">
          <h3 className="text-emerald-400 font-bold mb-6 flex items-center gap-2 tracking-widest text-xs uppercase">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            THÀNH VIÊN NHÓM 10
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {teamMembers.map((member) => (
              <li 
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="relative group cursor-pointer"
              >
                <span className="text-slate-500 font-mono text-xs mr-2">{member.id}.</span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-400 transition-colors duration-200 border-b border-transparent group-hover:border-emerald-500/30">
                  {member.name}
                </span>
                
                <AnimatePresence>
                  {hoveredMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="absolute z-50 left-0 -top-14 bg-emerald-600 p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-400/50"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center">
                        <UserCircle size={18} className="text-white" />
                      </div>
                      <div className="whitespace-nowrap">
                        <p className="text-[10px] font-bold text-emerald-200 uppercase leading-none mb-1">Mã số sinh viên</p>
                        <p className="text-sm font-black text-white leading-none">{member.mssv}</p>
                      </div>
                      <div className="absolute -bottom-1 left-4 w-2 h-2 bg-emerald-600 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center border-l border-slate-800 pl-8 md:pl-12 relative overflow-visible">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Giảng viên hướng dẫn</p>
          <div 
            className="relative flex items-center gap-3 cursor-help w-fit"
            onMouseEnter={() => setHoveredGv(true)}
            onMouseLeave={() => setHoveredGv(false)}
          >
            <p className="text-2xl font-bold hover:text-blue-400 transition-colors whitespace-nowrap">TS. Phạm Trung Tuấn</p>
            
            <AnimatePresence>
              {hoveredGv && (
                <motion.div
                  initial={{ opacity: 0, x: -5, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -5, scale: 0.95 }}
                  className="bg-blue-600 p-3 rounded-2xl shadow-2xl border border-blue-400/30 flex items-center gap-3 z-50"
                >
                  <Mail className="text-blue-100" size={16} />
                  <div className="text-left whitespace-nowrap">
                    <p className="text-[8px] font-black text-blue-200 uppercase leading-none mb-1">Email address</p>
                    <p className="text-xs font-bold text-white leading-none">tuanpt@uel.edu.vn</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className={`mt-8 p-5 rounded-[30px] border flex items-center justify-between group overflow-hidden relative transition-all duration-300 cursor-help ${
              hoveredDate 
              ? 'bg-red-600 border-red-400 shadow-[0_0_30px_rgba(220,38,38,0.4)]' 
              : 'bg-slate-800/20 border-slate-800'
            }`}
            onMouseEnter={() => setHoveredDate(true)}
            onMouseLeave={() => setHoveredDate(false)}
          >
            <div className="relative z-10 text-left">
              <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 flex items-center gap-2 transition-colors duration-300 ${
                hoveredDate ? 'text-red-100' : 'text-emerald-400'
              }`}>
                NGÀY TRÌNH BÀY
                {hoveredDate && <Sparkles size={10} className="animate-spin text-yellow-300" />}
              </p>
              <p className="text-lg font-black text-white leading-tight">Thứ 5 ngày 25 tháng 12</p>
            </div>
            
            <AnimatePresence>
              {hoveredDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 z-20 bg-red-600 flex flex-col items-center justify-center p-2 text-center"
                >
                  <Snowfall />
                  <Gift className="text-white mb-1 animate-bounce" size={20} />
                  <p className="text-[12px] font-black text-white leading-tight uppercase tracking-tight relative z-30">
                    Giáng sinh an lành<br/>& Thành công! 🎄
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TitleSlide;
