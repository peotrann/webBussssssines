
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Leaf, 
  Presentation, 
  Maximize2,
  Minimize2
} from 'lucide-react';

// Slides imports
import TitleSlide from './slides/TitleSlide';
import TOCSlide from './slides/TOCSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import MarketContextSlide from './slides/MarketContextSlide';
import MarketResearchSlide from './slides/MarketResearchSlide';
import MissionVisionSlide from './slides/MissionVisionSlide';
import ProductOverviewSlide from './slides/ProductOverviewSlide';
import HotelServiceSlide from './slides/HotelServiceSlide';
import HospitalServiceSlide from './slides/HospitalServiceSlide';
import TechEcosystemSlide from './slides/TechEcosystemSlide';
import USPSlide from './slides/USPSlide';
import MarketingMixSlide from './slides/MarketingMixSlide'; // New
import CompetitorSlide from './slides/CompetitorSlide';
import PersonaSlide from './slides/PersonaSlide';
import TAMSlide from './slides/TAMSlide'; // New
import BMCSlide from './slides/BMCSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import ManagementSlide from './slides/ManagementSlide';
import RevenueForecastSlide from './slides/RevenueForecastSlide';
import CapexSlide from './slides/CapexSlide';
import OpexSlide from './slides/OpexSlide';
import RiskManagementSlide from './slides/RiskManagementSlide';
import DemoSlide from './slides/DemoSlide';
import ClosingSlide from './slides/ClosingSlide';
import ResearchRivalSlide from './slides/ResearchRivalSlide'; // New

const slides = [
  TitleSlide, 
  TOCSlide, 
  ProblemSlide, 
  MarketResearchSlide, 
  SolutionSlide, 
  MarketContextSlide,
  MissionVisionSlide, 
  ProductOverviewSlide,
  HotelServiceSlide, 
  HospitalServiceSlide, 
  TechEcosystemSlide, 
  USPSlide,
  MarketingMixSlide, // Chèn sau USP
  ResearchRivalSlide, // Chèn trước Bảng so sánh
  CompetitorSlide, 
  PersonaSlide, 
  TAMSlide, // Chèn sau Persona
  BMCSlide, 
  RoadmapSlide, 
  ManagementSlide,
  RevenueForecastSlide, 
  CapexSlide, 
  OpexSlide, 
  RiskManagementSlide, 
  DemoSlide, 
  ClosingSlide
];

const getSectionName = (index: number) => {
  if (index <= 1) return "";
  if (index <= 5) return "01. TÓM TẮT DỰ ÁN";
  if (index <= 10) return "02. MÔ TẢ DOANH NGHIỆP & SẢN PHẨM";
  if (index <= 15) return "03. CHIẾN LƯỢC MARKETING"; // Mở rộng từ 14 lên 15
  if (index <= 16) return "04. KẾ HOẠCH VẬN HÀNH";
  if (index <= 17) return "05. KẾ HOẠCH QUẢN LÝ";
  if (index <= 20) return "06. DỰ BÁO TÀI CHÍNH";
  if (index <= 21) return "07. RỦI RO TRỌNG YẾU";
  if (index === 22) return "DEMO: HỆ THỐNG QUẢN TRỊ";
  return "08. CHIẾN LƯỢC THU HOẠCH";
};

const App: React.FC = () => {
  const MDiv = motion.div as any;
  const MSpan = motion.span as any;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];
  const sectionName = getSectionName(currentSlide);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col selection:bg-emerald-500/30 bg-slate-950 text-slate-100">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[100px] bg-emerald-500/10 opacity-100" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full blur-[80px] bg-blue-500/5 opacity-100" />
        
        <div className="absolute inset-0 opacity-5">
           {[...Array(20)].map((_, i) => (
             <MDiv
               key={i}
               className="absolute"
               initial={{ y: '110vh', x: `${Math.random() * 100}vw` }}
               animate={{ y: '-10vh' }}
               transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
             >
               {i % 2 === 0 ? <Leaf size={24} className="text-emerald-500" /> : <Presentation size={24} className="text-blue-500" />}
             </MDiv>
           ))}
        </div>
      </div>

      {/* Header Info */}
      <header className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-sm from-slate-950/90 to-transparent bg-gradient-to-b">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/80 flex items-center justify-center shadow-lg shadow-emerald-600/20">
              <Leaf className="text-white" size={16} />
            </div>
            <span className="font-bold text-base tracking-tight uppercase text-white">Lá Lành <span className="text-emerald-500">GardenCare</span></span>
          </div>
          <AnimatePresence mode="wait">
            {sectionName && (
              <MSpan 
                key={sectionName}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-[10px] font-black tracking-[0.3em] uppercase pl-11 text-emerald-500/60"
              >
                {sectionName}
              </MSpan>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-6 text-xs font-medium">
           <div className="px-4 py-2 rounded-full border border-slate-800 text-slate-400 bg-slate-900/80">
             <span className="text-emerald-600 font-black">{currentSlide + 1}</span> / {slides.length}
           </div>
           <button onClick={toggleFullscreen} className="p-2 rounded-full border border-slate-800 text-slate-400 bg-slate-900/80 hover:text-emerald-600 transition-colors">
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
           </button>
        </div>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-grow relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <MDiv
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full w-full overflow-y-auto custom-scrollbar"
          >
            <div className="min-h-full w-full flex flex-col items-center justify-center p-8 md:p-20 pt-32 pb-32">
              <div className="w-full max-w-6xl">
                <CurrentSlideComponent isActive={true} />
              </div>
            </div>
          </MDiv>
        </AnimatePresence>
      </main>

      {/* Persistent Controls */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-8 z-50 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full backdrop-blur-xl border border-slate-700/50 flex items-center justify-center hover:bg-emerald-600 transition-all group pointer-events-auto bg-slate-900/60 shadow-2xl"
        >
          <ChevronLeft className="text-slate-400 group-hover:text-white transition-colors" />
        </button>
        
        <div className="flex gap-2 pointer-events-auto backdrop-blur-xl px-5 py-3 rounded-full border border-slate-800/50 bg-slate-900/60 shadow-2xl">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all rounded-full ${i === currentSlide ? 'w-8 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'w-2 bg-slate-700 hover:bg-slate-500'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full backdrop-blur-xl border border-slate-700/50 flex items-center justify-center hover:bg-emerald-600 transition-all group pointer-events-auto bg-slate-900/60 shadow-2xl"
        >
          <ChevronRight className="text-slate-400 group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default App;
