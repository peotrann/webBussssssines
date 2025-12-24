import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../types';
import { User, Shield, Wrench, Heart, BarChart } from 'lucide-react';

const colorMap = {
  emerald: {
    text: 'text-emerald-700 dark:text-emerald-400',
    bgIcon: 'bg-emerald-500/10',
    bgIconHover: 'group-hover:bg-emerald-600'
  },
  blue: {
    text: 'text-blue-700 dark:text-blue-400',
    bgIcon: 'bg-blue-500/10',
    bgIconHover: 'group-hover:bg-blue-600'
  },
  orange: {
    text: 'text-orange-700 dark:text-orange-400',
    bgIcon: 'bg-orange-500/10',
    bgIconHover: 'group-hover:bg-orange-600'
  },
  green: {
    text: 'text-green-700 dark:text-green-400',
    bgIcon: 'bg-green-500/10',
    bgIconHover: 'group-hover:bg-green-600'
  },
  purple: {
    text: 'text-purple-700 dark:text-purple-400',
    bgIcon: 'bg-purple-500/10',
    bgIconHover: 'group-hover:bg-purple-600'
  }
};

const ManagementSlide: React.FC<SlideProps> = () => {
  const MDiv = motion.div as any;

  const roles = [
    { 
      id: "ceo", 
      title: "CEO", 
      desc: "Chiến lược & Tài chính", 
      icon: User, 
      color: "emerald" as const,
      tasks: ["Lãnh đạo tổng thể", "Quản lý dòng tiền", "Phát triển đối tác chiến lược"]
    },
    { 
      id: "cto", 
      title: "CTO", 
      desc: "Công nghệ & R&D", 
      icon: Shield, 
      color: "blue" as const,
      tasks: ["Phát triển App MVP và Smart Stick", "Quản trị Cloud/Server", "Bảo mật dữ liệu (PDPA)"]
    },
    { 
      id: "coo", 
      title: "COO", 
      desc: "Vận hành & Mở rộng", 
      icon: Wrench, 
      color: "orange" as const,
      tasks: ["Quản lý chuỗi trạm", "Tối ưu hóa quy trình (SOP)", "Kiểm soát chất lượng dịch vụ"]
    },
    { 
      id: "cao", 
      title: "CAO", 
      desc: "Nông nghiệp & Quy chuẩn", 
      icon: Heart, 
      color: "green" as const,
      tasks: ["Chuẩn hóa phác đồ điều trị", "Quản lý Master Data", "Đào tạo kỹ thuật viên"]
    },
    { 
      id: "cmo", 
      title: "CMO", 
      desc: "Marketing & CRM", 
      icon: BarChart, 
      color: "purple" as const,
      tasks: ["Nghiên cứu thị trường", "Quản lý CRM và chuyển đổi", "Truyền thông thương hiệu"]
    }
  ];

  const CEO = roles[0];
  const CEOIcon = CEO.icon;

  return (
    <div className="h-full flex flex-col justify-center py-10">
      <MDiv 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="h-12 w-2 bg-emerald-500 rounded-full" />
        <h2 className="text-5xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          <span className="text-emerald-500">KẾ HOẠCH QUẢN LÝ</span>
        </h2>
      </MDiv>

      <div className="relative">
        <div className="flex justify-center mb-16">
          <MDiv
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[40px] text-center shadow-2xl relative z-10 bg-emerald-600 dark:bg-slate-900 border-2 border-emerald-500 shadow-emerald-500/20"
          >
            <div className="w-12 h-12 bg-white/20 dark:bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CEOIcon className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-white">{CEO.title}</h3>
            <p className="text-emerald-50 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">{CEO.desc}</p>
          </MDiv>
        </div>

        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-12 border-t-2 border-x-2 rounded-t-[40px] pointer-events-none border-slate-200 dark:border-slate-800" />

        <div className="grid grid-cols-4 gap-4">
          {roles.slice(1).map((role, i) => {
            const RoleIcon = role.icon;
            const colors = colorMap[role.color];
            return (
              <MDiv
                key={role.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="p-5 backdrop-blur-sm border rounded-[35px] group transition-all bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className={`w-10 h-10 ${colors.bgIcon} rounded-xl flex items-center justify-center mb-4 ${colors.bgIconHover} transition-all`}>
                  <RoleIcon size={20} className={`${colors.text} group-hover:text-white`} />
                </div>
                <h4 className="font-black text-slate-900 dark:text-white">{role.title}</h4>
                <p className={`text-[10px] ${colors.text} font-bold uppercase mb-4 tracking-tighter`}>{role.desc}</p>
                <ul className="space-y-1.5">
                  {role.tasks.map((task, idx) => (
                    <li key={idx} className="text-[9px] text-slate-600 dark:text-slate-500 leading-tight">{task}</li>
                  ))}
                </ul>
              </MDiv>
            );
          })}
        </div>
      </div>

      <MDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 p-8 rounded-[40px] border text-center bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
      >
        <p className="text-slate-700 dark:text-slate-400 italic text-sm">
          "Áp dụng mô hình <span className="text-slate-900 dark:text-white font-bold">Agile</span> kết hợp <span className="text-slate-900 dark:text-white font-bold">OKR</span>: Gọn nhẹ, linh hoạt và minh bạch."
        </p>
        <p className="text-slate-700 dark:text-slate-400 italic text-sm">
          "Loại hình doanh nghiệp: <span className="text-slate-900 dark:text-white font-bold">Công ty TNHH Hai Thành Viên Trở Lên (theo Luật Doanh nghiệp 2020).</span></p>
      </MDiv>
    </div>
  );
};

export default ManagementSlide;