import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, Flower, Flower2, Wheat, Fan } from 'lucide-react';

const MDiv = motion.div as any;

const FloatingElement = ({
  delay,
  duration,
  x,
  size,
  icon: Icon,
  color,
  rotate,
  blur,
  opacity
}: any) => (
  <MDiv
    initial={{ y: '110vh', x, rotate: 0, opacity: 0 }}
    animate={{
      y: '-10vh',
      rotate,
      opacity: [0, opacity, opacity, 0],
      x: [
        `${parseFloat(x)}vw`,
        `${parseFloat(x) + (Math.random() * 15 - 7.5)}vw`
      ]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: 'linear',
      delay
    }}
    style={{
      filter: blur ? `blur(${blur}px)` : 'none'
    }}
    className={`absolute ${color} pointer-events-none z-0`}
  >
    <Icon size={size} strokeWidth={1} />
  </MDiv>
);

const BotanicalDecor: React.FC = () => {
  const elements = useMemo(() => {
    const icons = [Leaf, Sprout, Flower, Flower2, Wheat, Fan];

    // CHỈ TĂNG OPACITY – KHÔNG ĐỤNG BLUR
    const presets = [
      { color: 'text-emerald-400', opacity: 0.4, blur: 0 },
      { color: 'text-green-500', opacity: 0.4, blur: 1 },
      { color: 'text-rose-400', opacity: 0.4, blur: 0 },
      { color: 'text-amber-300', opacity: 0.4, blur: 2 },
      { color: 'text-lime-300', opacity: 0.4, blur: 4 }
    ];

    return Array.from({ length: 45 }).map((_, i) => {
      const preset = presets[i % presets.length];

      return {
        id: i,
        icon: icons[i % icons.length],
        color: preset.color,
        opacity: preset.opacity,
        blur: preset.blur,

        // HOA TO HƠN RÕ RỆT
        size: 40 + Math.random() * 42,

        x: `${Math.random() * 100}vw`,
        delay: Math.random() * 20,
        duration: 10 + Math.random() * 20,
        rotate: Math.random() * 720
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Floating flowers */}
      {elements.map((el) => (
        <FloatingElement key={el.id} {...el} />
      ))}

      {/* Hanging Vines - Top Left */}
      <MDiv
        className="absolute -top-10 -left-10 text-emerald-500/20"
        animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="400" height="600" viewBox="0 0 200 300" fill="none">
          <path d="M20 0C20 100 80 150 40 300" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="20" cy="50" r="10" fill="currentColor" opacity="0.4" />
          <circle cx="60" cy="120" r="15" fill="currentColor" opacity="0.3" />
          <circle cx="35" cy="220" r="8" fill="currentColor" opacity="0.5" />
          <path d="M0 20Q50 20 50 70T100 120" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </MDiv>

      {/* Lush Bush - Bottom Right */}
      <MDiv
        className="absolute -bottom-20 -right-20 text-emerald-600/20"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="600" height="600" viewBox="0 0 400 400" fill="currentColor">
          <ellipse cx="200" cy="350" rx="150" ry="100" opacity="0.3" />
          <ellipse cx="300" cy="300" rx="120" ry="150" opacity="0.2" />
          <ellipse cx="100" cy="320" rx="100" ry="80" opacity="0.2" />
          <path d="M200 400C200 300 300 250 350 200" stroke="currentColor" strokeWidth="4" opacity="0.1" />
          <path d="M200 400C200 320 100 280 50 250" stroke="currentColor" strokeWidth="4" opacity="0.1" />
        </svg>
      </MDiv>

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-emerald-500/5 via-transparent to-rose-500/5 opacity-50" />
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[130px]" />
      <div className="absolute top-[40%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />

      {/* Ground fog */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950/40 to-transparent" />
    </div>
  );
};

export default BotanicalDecor;
