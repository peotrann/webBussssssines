
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Leaf, 
  Maximize2,
  Minimize2,
  Flower2,
  Flower,
  Sprout,
  TreePine,
  Wind,
  Sun
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
import MarketingMixSlide from './slides/MarketingMixSlide';
import CompetitorSlide from './slides/CompetitorSlide';
import PersonaSlide from './slides/PersonaSlide';
import TAMSlide from './slides/TAMSlide';
import BMCSlide from './slides/BMCSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import ManagementSlide from './slides/ManagementSlide';
import RevenueForecastSlide from './slides/RevenueForecastSlide';
import CapexSlide from './slides/CapexSlide';
import OpexSlide from './slides/OpexSlide';
import RiskManagementSlide from './slides/RiskManagementSlide';
import DemoSlide from './slides/DemoSlide';
import ClosingSlide from './slides/ClosingSlide';

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
  MarketingMixSlide,
  CompetitorSlide, 
  PersonaSlide, 
  TAMSlide,
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
  if (index <= 15) return "03. CHIẾN LƯỢC MARKETING";
  if (index <= 16) return "04. KẾ HOẠCH VẬN HÀNH";
  if (index <= 17) return "05. KẾ HOẠCH QUẢN LÝ";
  if (index <= 20) return "06. DỰ BÁO TÀI CHÍNH";
  if (index <= 21) return "07. RỦI RO TRỌNG YẾU";
  if (index === 22) return "DEMO: HỆ THỐNG QUẢN TRỊ";
  return "08. CHIẾN LƯỢC THU HOẠCH";
};

const getSlideBackground = (index: number) => {
  if (index < 3) return ""; 
  if (index === 2 || index === 3) return "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop";
  if (index === 5) return "https://images.unsplash.com/photo-1524413151693-357ad9c10a79?q=80&w=2000&auto=format&fit=crop";
  if (index <= 10) return "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"; 
  if (index <= 15) return "https://images.unsplash.com/photo-1501004318641-729e8e3986ff?q=80&w=2000&auto=format&fit=crop"; 
  if (index <= 21) return "https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=2000&auto=format&fit=crop"; 
  return "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000&auto=format&fit=crop";
};

const getSlideMood = (index: number) => {
  if (index === 2 || index === 3) return { ray: "rgba(239, 68, 68, 0.12)", particle: "text-red-500/40", vignette: "rgba(20, 0, 0, 0.6)", bg: "#0c0202" };
  if (index === 5) return { ray: "rgba(245, 158, 11, 0.25)", particle: "text-amber-400/40", vignette: "rgba(15, 10, 0, 0.5)", bg: "#120a00" };
  if (index >= 20) return { ray: "rgba(255, 255, 255, 0.15)", particle: "text-emerald-300/50", vignette: "rgba(2, 6, 23, 0.3)", bg: "#051210" };
  return { ray: "rgba(16, 185, 129, 0.1)", particle: "text-emerald-500/40", vignette: "rgba(2, 6, 23, 0.5)", bg: "#050f0c" };
};

const NatureOverlay = ({ currentSlide }: { currentSlide: number }) => {
  const particles = useMemo(() => [...Array(65)].map((_, i) => ({
    id: i, size: i % 10 === 0 ? 30 + Math.random() * 20 : 8 + Math.random() * 18, left: Math.random() * 100, delay: Math.random() * 20, duration: 15 + Math.random() * 20, type: i % 6, rotation: Math.random() * 360, blur: i % 8 === 0 ? 'blur(4px)' : 'blur(0px)', opacity: 0.1 + Math.random() * 0.3, swing: 20 + Math.random() * 40
  })), []);
  const bgImage = getSlideBackground(currentSlide);
  const mood = getSlideMood(currentSlide);

  return (
    <motion.div animate={{ backgroundColor: mood.bg }} transition={{ duration: 1.5 }} className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors">
      <AnimatePresence mode="wait">
        {bgImage && (
          <motion.div key={bgImage} initial={{ opacity: 0 }} animate={{ opacity: 0.25 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
            <img src={bgImage} alt="Nature Background" className="w-full h-full object-cover blur-[40px] saturate-[1.5] brightness-[0.5]" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div animate={{ opacity: [0.03, 0.1, 0.03], x: [-20, 20, -20], backgroundColor: mood.ray }} transition={{ opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" }, x: { duration: 10, repeat: Infinity, ease: "easeInOut" }, backgroundColor: { duration: 2 } }} className="absolute -top-[20%] -right-[10%] w-[150%] h-[100%] rotate-[-15deg] blur-[120px] z-1" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.05] mix-blend-overlay z-1" />
      <div className="absolute bottom-0 left-0 w-full h-full z-1">
        <motion.div animate={{ rotate: [2, -2, 2], scale: [1, 1.05, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-40 -left-40 opacity-[0.05] text-emerald-950">
          <TreePine size={900} strokeWidth={0.1} />
        </motion.div>
      </div>
      {particles.map((p) => (
        <motion.div key={p.id} className="absolute z-2" initial={{ y: '110vh', x: `${p.left}vw`, rotate: p.rotation, opacity: 0 }} animate={{ y: '-20vh', x: [`${p.left}vw`, `${p.left + (p.swing/10)}vw`, `${p.left - (p.swing/10)}vw`, `${p.left}vw`], rotate: p.rotation + 720, opacity: [0, p.opacity, p.opacity, 0] }} transition={{ y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }, x: { duration: p.duration / 3, repeat: Infinity, ease: "easeInOut", delay: p.delay }, rotate: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }, opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay } }} style={{ filter: p.blur }}>
          <motion.div animate={{ color: mood.particle }} transition={{ duration: 2 }}>
            {p.type === 0 && <Leaf size={p.size} className="opacity-40" />}
            {p.type === 1 && <Flower2 size={p.size} className="opacity-30" />}
            {p.type === 2 && <Leaf size={p.size} className="rotate-45 opacity-20" />}
            {p.type === 3 && <div className="w-1.5 h-1.5 bg-current rounded-full blur-[2px] opacity-40" />}
            {p.type === 4 && <Sprout size={p.size} className="opacity-30" />}
            {p.type === 5 && <Flower size={p.size * 0.7} className="opacity-20" />}
          </motion.div>
        </motion.div>
      ))}
      <motion.div animate={{ backgroundColor: mood.vignette }} transition={{ duration: 2 }} className="absolute inset-0 z-10" />
    </motion.div>
  );
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen(); setIsFullscreen(true); } 
    else { if (document.exitFullscreen) { document.exitFullscreen(); setIsFullscreen(false); } }
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
    <div className="relative h-screen w-screen overflow-hidden flex flex-col selection:bg-emerald-500/30 bg-[#020617] text-slate-100 font-sans">
      <NatureOverlay currentSlide={currentSlide} />

      {/* Header - Now part of flex flow, not fixed over content */}
      <header className="flex-none p-6 flex justify-between items-center z-50 backdrop-blur-2xl bg-slate-950/40 border-b border-emerald-500/10 shadow-2xl relative">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-lg border border-emerald-400/20">
              <Leaf className="text-white" size={20} />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight uppercase text-white leading-none">
                Lá Lành <span className="text-emerald-500 font-medium">Care</span>
              </span>
              <span className="text-[9px] font-bold text-emerald-700 tracking-widest uppercase mt-0.5 italic">Hệ sinh thái xanh thông minh</span>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {sectionName && (
              <motion.span key={sectionName} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="text-[9px] font-black tracking-[0.3em] uppercase pl-14 text-emerald-500/60">
                {sectionName}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="px-4 py-1.5 rounded-xl border border-emerald-500/10 text-slate-400 bg-emerald-950/30 backdrop-blur-xl text-xs font-bold">
             <span className="text-emerald-500">{currentSlide + 1}</span> <span className="mx-1 opacity-20">/</span> {slides.length}
           </div>
           <button onClick={toggleFullscreen} className="p-2 rounded-xl border border-emerald-500/10 text-slate-400 bg-emerald-950/30 backdrop-blur-xl hover:text-emerald-400 transition-all">
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
           </button>
        </div>
      </header>

      {/* Main Content Area - Scrollable with its own viewport */}
      <main className="flex-1 relative z-10 overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full w-full overflow-y-auto custom-scrollbar"
          >
            <div className="min-h-full w-full flex flex-col items-center justify-start p-8 md:p-12 lg:p-20">
              <div className="w-full max-w-6xl relative">
                <div className="absolute -inset-10 bg-emerald-600/5 rounded-full blur-[100px] opacity-40 pointer-events-none" />
                <CurrentSlideComponent isActive={true} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Footer - Part of flex flow */}
      <footer className="flex-none h-32 relative z-50 flex flex-col justify-center items-center pointer-events-none">
        <div className="flex justify-center items-center gap-8 pointer-events-auto">
          <motion.button whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.9 }} onClick={prevSlide} className="w-14 h-14 rounded-2xl backdrop-blur-2xl border border-emerald-500/10 flex items-center justify-center hover:bg-emerald-600 shadow-2xl transition-all group bg-emerald-950/40">
            <ChevronLeft className="text-emerald-200/50 group-hover:text-white" size={20} />
          </motion.button>
          
          <div className="flex gap-2 pointer-events-auto backdrop-blur-2xl px-6 py-4 rounded-3xl border border-emerald-500/10 bg-emerald-950/30 shadow-2xl items-center overflow-x-auto max-w-[50vw] no-scrollbar">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 transition-all rounded-full flex-shrink-0 relative group/nav ${i === currentSlide ? 'w-10 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)]' : 'w-2 bg-emerald-900/40 hover:bg-emerald-700'}`}>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-900 text-[9px] font-black text-emerald-400 px-2 py-1 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-all pointer-events-none border border-emerald-500/30">
                  {i + 1}
                </div>
              </button>
            ))}
          </div>

          <motion.button whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.9 }} onClick={nextSlide} className="w-14 h-14 rounded-2xl backdrop-blur-2xl border border-emerald-500/10 flex items-center justify-center hover:bg-emerald-600 shadow-2xl transition-all group bg-emerald-950/40">
            <ChevronRight className="text-emerald-200/50 group-hover:text-white" size={20} />
          </motion.button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-600/30 to-transparent" />
      </footer>
    </div>
  );
};

export default App;
