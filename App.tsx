import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Maximize2,
  Minimize2
} from 'lucide-react';

import BotanicalDecor from './components/BotanicalDecor';

/* IMPORT TỪNG SLIDE – KHÔNG DÙNG MockSlides */
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
import ResearchRivalSlide from './slides/ResearchRivalSlide';
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

/* SLIDE LIST */
const slides = [
  TitleSlide,
  TOCSlide,
  ProblemSlide,
  MarketContextSlide,
  MarketResearchSlide,
  SolutionSlide,
  MissionVisionSlide,
  ProductOverviewSlide,
  HotelServiceSlide,
  HospitalServiceSlide,
  TechEcosystemSlide,
  MarketingMixSlide,
  ResearchRivalSlide,
  USPSlide,
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
  if (index <= 1) return '';

  if (index <= 5)
    return '01. TỔNG QUAN & VẤN ĐỀ';

  if (index <= 10)
    return '02. GIẢI PHÁP & SẢN PHẨM';

  if (index <= 15)
    return '03. THỊ TRƯỜNG & MARKETING';

  if (index <= 17)
    return '04. MÔ HÌNH KINH DOANH & VẬN HÀNH';

  if (index <= 19)
    return '05. ĐỘI NGŨ & LỘ TRÌNH';

  if (index <= 22)
    return '06. KẾ HOẠCH TÀI CHÍNH';

  if (index === 23)
    return '07. RỦI RO TRỌNG YẾU';

  if (index === 24)
    return 'DEMO: HỆ THỐNG QUẢN TRỊ';

  return '08. TỔNG KẾT & ĐỊNH HƯỚNG';
};


const App: React.FC = () => {
  const MDiv = motion.div as any;
  const MSpan = motion.span as any;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((s) => (s + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextSlide, prevSlide]);

  const CurrentSlide = slides[currentSlide];
  const sectionName = getSectionName(currentSlide);

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col bg-slate-950 text-slate-100">

      <BotanicalDecor />
      <div className="absolute inset-0 bg-slate-950/20 pointer-events-none z-1" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 backdrop-blur-md bg-gradient-to-b from-slate-950/90 to-transparent border-b border-white/5">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <MDiv
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-8 h-8 rounded-lg bg-emerald-600/80 flex items-center justify-center"
            >
              <Leaf size={16} />
            </MDiv>
            <span className="font-bold uppercase">
              Lá Lành <span className="text-emerald-400">GardenCare</span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            {sectionName && (
              <MSpan
                key={sectionName}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-[10px] tracking-[0.3em] text-emerald-400 pl-11"
              >
                {sectionName}
              </MSpan>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span>
            <b className="text-emerald-400">{currentSlide + 1}</b> / {slides.length}
          </span>
          <button onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      {/* SLIDE CONTENT */}
      <main className="flex-grow relative z-10 overflow-hidden pt-32 pb-32">
        <AnimatePresence mode="wait">
          <MDiv
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full overflow-y-auto"
          >
            <div className="min-h-full flex justify-center items-center p-8 md:p-20">
              <div className="w-full max-w-6xl">
                <CurrentSlide isActive />
              </div>
            </div>
          </MDiv>
        </AnimatePresence>
      </main>

      {/* CONTROLS */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-8 z-50">
        <button onClick={prevSlide}><ChevronLeft /></button>
        <button onClick={nextSlide}><ChevronRight /></button>
      </div>
    </div>
  );
};

export default App;
