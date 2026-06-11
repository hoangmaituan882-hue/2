import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform, useAnimationFrame, AnimatePresence, useScroll, useMotionTemplate } from "motion/react";
import { ScrambledText } from "./ScrambledText";
import { cn } from "../lib/utils";

const images = [
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
];

const labels = [
  "MOUNTAINS",
  "FOREST",
  "VALLEY",
  "NATURE",
  "FOGGY",
  "LAKE"
];

const wrapNumber = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function Scroll3DCarousel() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false
  });
  
  const velocitySkew = useTransform(smoothVelocity, [-1000, 0, 1000], [-10, 0, 10]);

  const baseX = useMotionValue(0);
  const xDirection = useRef(-1);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemWidth = isMobile ? 260 : 400;
  const marginOffset = isMobile ? -40 : -80;
  const D = itemWidth + marginOffset; 

  useAnimationFrame((t, delta) => {
    let moveBy = xDirection.current * (delta / 1000) * 100;
    moveBy += xDirection.current * moveBy * velocityFactor.get();
    
    const totalWidth = D * images.length;
    
    let nextX = baseX.get() + moveBy;
    nextX = wrapNumber(-totalWidth, 0, nextX);
    baseX.set(nextX);
  });

  return (
    <div className="relative w-full overflow-hidden perspective-[1200px] flex items-center justify-center h-[700px] md:h-[900px] bg-[#050505]">
      {/* Background Typography */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
        <h2 className="text-white text-5xl md:text-7xl lg:text-[130px] font-bold leading-[0.9] tracking-tighter mix-blend-difference font-sans uppercase">
          HERITAGE FW25/26<br />
          COLLECTION<sup className="text-2xl md:text-4xl lg:text-[60px] relative -top-[0.5em] ml-2 font-medium">(16)</sup>
        </h2>
      </div>

      <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 text-white/50 text-xs font-semibold tracking-widest z-10 select-none uppercase">
        滚动冲浪
      </div>

      {/* The 3D Tilted Plane */}
      <div 
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(25deg) rotateZ(-10deg)',
          marginLeft: isMobile ? '40%' : '15%',
          marginTop: isMobile ? '20%' : '0%'
        }}
      >
        {/* The Carousel Container */}
        <motion.div 
          style={{ x: baseX, width: 'max-content', transformStyle: 'preserve-3d' }}
          className="flex"
        >
          {/* Render 4 copies for continuous loop */}
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {images.map((src, idx) => (
                <div 
                  key={`${i}-${idx}`} 
                  style={{ 
                    width: itemWidth,
                    marginRight: marginOffset,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <CarouselItem 
                    src={src} 
                    label={labels[idx]} 
                    skew={velocitySkew}
                    index={idx}
                    isMobile={isMobile}
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CarouselItem({ src, label, skew, index, isMobile }: any) {
  const [isHovered, setIsHovered] = useState(false);
  
  const zVal = useSpring(0, { damping: 20, stiffness: 200 });
  const scaleVal = useSpring(1, { damping: 20, stiffness: 200 });

  useEffect(() => {
    zVal.set(isHovered ? 80 : 0);
    scaleVal.set(isHovered ? 1.05 : 1);
  }, [isHovered, zVal, scaleVal]);

  // perfectly neutralization of parent rotation, then extra translation/scale/skew
  const transform = useMotionTemplate`rotateZ(10deg) rotateY(-25deg) translateZ(${zVal}px) scale(${scaleVal}) skewX(${skew}deg)`;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className={cn(
        "relative transition-all duration-500 ease-out cursor-pointer",
        isMobile ? "h-[360px]" : "h-[500px]"
      )}
    >
      {/* Number Label */}
      <div 
        style={{ transform: 'translateZ(10px)' }}
        className="absolute -top-6 -left-4 text-white text-xs md:text-sm font-mono font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
      >
        {21 + index}
      </div>

      <div className={cn(
        "w-full h-full overflow-hidden bg-black transition-all duration-500",
        isHovered ? "shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/20" : "shadow-2xl border border-white/5"
      )}>
        <img 
          src={src} 
          alt={label} 
          className="w-full h-full object-cover pointer-events-none select-none brightness-[0.6] hover:brightness-[1.1] transition-all duration-500" 
        />
        <div className="absolute inset-0 bg-transparent hover:bg-white/5 transition-colors pointer-events-none" />
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 left-6 right-6 flex items-center p-4 bg-white/10 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-white font-bold text-xl md:text-2xl tracking-widest m-0 uppercase drop-shadow-md">
                <ScrambledText text={label} />
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
