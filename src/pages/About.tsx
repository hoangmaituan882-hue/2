import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";

const aboutData = [
  {
    id: "data",
    label: "数据来源",
    title: "数据 来源",
    desc: "本项目涉及到的人设、头像、事件记录等所有信息，全部来源于公开网络平台（如社交媒体、视频网站等）。不涉及任何私密数据获取。",
    bg: "bg-[#a3c2ff] dark:bg-[#1f3a68]",
    border: "border-[#4a88ff] dark:border-[#3a68cc]",
    colors: ["#a3c2ff", "#82aaff", "#b5d0ff", "#a3c2ff"],
    shape: "rounded-[3rem] rounded-tr-xl rounded-bl-xl",
    typography: [
      { text: "本项目涉及到的人设、头像等", size: "text-base sm:text-xl", weight: "font-medium", opacity: "opacity-60", position: "top-[10%] left-[5%]" },
      { text: "全来源于公开网络", size: "text-3xl sm:text-5xl", weight: "font-bold", opacity: "opacity-30", position: "top-[15%] right-[10%]" },
      { text: "如社交媒体、视频网站", size: "text-xs sm:text-base", weight: "font-light", opacity: "opacity-40", position: "top-[40%] left-[8%]" },
      { text: "不涉及任何", size: "text-4xl sm:text-7xl", weight: "font-black", opacity: "opacity-[0.15]", position: "bottom-[30%] right-[5%]" },
      { text: "私密数据获取", size: "text-4xl sm:text-7xl", weight: "font-black", opacity: "opacity-30", position: "bottom-[15%] left-[20%]" },
      { text: "请放心使用", size: "text-lg sm:text-2xl", weight: "font-medium", opacity: "opacity-50", position: "bottom-[20%] right-[25%]" }
    ]
  },
  {
    id: "grad",
    label: "毕业设计",
    title: "毕业 设计",
    desc: "这是作者的一项个人毕业设计作品。旨在探索前端技术与 AI 结合的可能性，通过构建一个具有交互性的界面来进行技术实践和验证。",
    bg: "bg-[#a3ffcd] dark:bg-[#1f6848]",
    border: "border-[#3dcc9d] dark:border-[#2b8f6e]",
    colors: ["#a3ffcd", "#6df5b9", "#baffd9", "#a3ffcd"],
    shape: "rounded-[3rem] rounded-tl-xl rounded-br-xl",
    typography: [
      { text: "这是作者的一项", size: "text-xl sm:text-2xl", weight: "font-medium", opacity: "opacity-30", position: "top-[12%] right-[15%]" },
      { text: "个人毕业设计作品", size: "text-4xl sm:text-6xl", weight: "font-black", opacity: "opacity-40", position: "top-[25%] left-[8%]" },
      { text: "旨在探索", size: "text-sm sm:text-base", weight: "font-light", opacity: "opacity-50", position: "top-[40%] right-[30%]" },
      { text: "前端技术与AI结合的", size: "text-3xl sm:text-5xl", weight: "font-bold", opacity: "opacity-40", position: "bottom-[35%] left-[10%]" },
      { text: "无限可能性", size: "text-5xl sm:text-[5rem]", weight: "font-black", opacity: "opacity-20", position: "bottom-[20%] right-[5%]" },
      { text: "通过构建交互式界面来进行技术验证", size: "text-sm sm:text-base", weight: "font-medium", opacity: "opacity-60", position: "bottom-[10%] left-[25%]" }
    ]
  },
  {
    id: "ai",
    label: "古法匠人",
    title: "古法 匠人",
    desc: "本项目自诩为“古法手搓匠人 AI”。虽然利用了现代 AI 技术辅助，但背后蕴含着对每一处的“手工”执着与调配。纯属图一乐。",
    bg: "bg-[#ffdfa3] dark:bg-[#68481f]",
    border: "border-[#ffaa3d] dark:border-[#cc8830]",
    colors: ["#ffdfa3", "#ffce6e", "#ffe8b3", "#ffdfa3"],
    shape: "rounded-[3rem] rounded-b-xl",
    typography: [
      { text: "本项目自诩为", size: "text-base sm:text-xl", weight: "font-light", opacity: "opacity-60", position: "top-[10%] left-[20%]" },
      { text: "“古法手搓匠人 AI”", size: "text-4xl sm:text-6xl", weight: "font-black", opacity: "opacity-20", position: "top-[20%] right-[5%]" },
      { text: "虽然利用了现代AI技术辅助", size: "text-lg sm:text-2xl", weight: "font-medium", opacity: "opacity-40", position: "top-[40%] left-[5%]" },
      { text: "但背后蕴含着", size: "text-sm sm:text-base", weight: "font-light", opacity: "opacity-60", position: "bottom-[35%] right-[25%]" },
      { text: "对每一处的“手工”执着与调配", size: "text-3xl sm:text-5xl", weight: "font-bold", opacity: "opacity-30", position: "bottom-[20%] left-[8%]" },
      { text: "纯属图一乐", size: "text-2xl sm:text-4xl", weight: "font-black", opacity: "opacity-20", position: "bottom-[12%] right-[10%]" }
    ]
  },
  {
    id: "warn",
    label: "免责声明",
    title: "免责 声明",
    desc: "本页面及应用仅供学习与娱乐使用，不具商业目的。如有内容侵犯您的合法权益，请立即联系作者，我们会查实后第一时间清理删除。",
    bg: "bg-[#ffa3d4] dark:bg-[#681f48]",
    border: "border-[#ff5cb9] dark:border-[#cc4a94]",
    colors: ["#ffa3d4", "#ff7bbd", "#ffbfe3", "#ffa3d4"],
    shape: "rounded-[3rem] rounded-tl-xl rounded-b-xl",
    typography: [
      { text: "本页面及应用仅供", size: "text-xl sm:text-2xl", weight: "font-medium", opacity: "opacity-40", position: "top-[15%] left-[8%]" },
      { text: "学习与娱乐使用", size: "text-4xl sm:text-6xl", weight: "font-black", opacity: "opacity-20", position: "top-[25%] right-[12%]" },
      { text: "不具任何商业目的", size: "text-2xl sm:text-4xl", weight: "font-bold", opacity: "opacity-30", position: "top-[45%] left-[5%]" },
      { text: "如有内容侵犯您的合法权益", size: "text-base sm:text-lg", weight: "font-light", opacity: "opacity-50", position: "bottom-[30%] right-[15%]" },
      { text: "请立即联系作者", size: "text-3xl sm:text-5xl", weight: "font-bold", opacity: "opacity-20", position: "bottom-[15%] left-[10%]" },
      { text: "我们会查实后第一时间清理删除", size: "text-xs sm:text-base", weight: "font-normal", opacity: "opacity-40", position: "bottom-[8%] right-[5%]" }
    ]
  },
  {
    id: "feedback",
    label: "意见通道",
    title: "意见 反馈",
    desc: "我们非常重视您的意见和建议。有任何想法、BUG 反馈或是功能需求，欢迎通过反馈通道与我们联系，帮助我们持续精进。",
    bg: "bg-[#d4a3ff] dark:bg-[#481f68]",
    border: "border-[#b95cff] dark:border-[#944acc]",
    colors: ["#d4a3ff", "#bd7bff", "#e3bfff", "#d4a3ff"],
    shape: "rounded-[3rem] rounded-tr-xl rounded-bl-xl border-dashed",
    typography: [
      { text: "我们非常重视", size: "text-2xl sm:text-4xl", weight: "font-bold", opacity: "opacity-20", position: "top-[10%] left-[15%]" },
      { text: "您的意见和建议", size: "text-3xl sm:text-6xl", weight: "font-black", opacity: "opacity-30", position: "top-[25%] right-[8%]" },
      { text: "有任何想法或是 BUG 反馈", size: "text-base sm:text-xl", weight: "font-medium", opacity: "opacity-50", position: "top-[40%] left-[5%]" },
      { text: "又或是新功能需求", size: "text-xl sm:text-3xl", weight: "font-bold", opacity: "opacity-40", position: "bottom-[35%] right-[20%]" },
      { text: "欢迎通过留言与我们联系", size: "text-base sm:text-xl", weight: "font-light", opacity: "opacity-60", position: "bottom-[20%] left-[10%]" },
      { text: "帮助我们持续精进", size: "text-3xl sm:text-5xl", weight: "font-black", opacity: "opacity-20", position: "bottom-[10%] right-[10%]" }
    ]
  }
];

export function About() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center pb-24 pt-12 sm:pt-20 px-6 overflow-x-hidden relative">
      <AnimatePresence>
        <motion.div
           key={activeIdx}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5 }}
           className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center p-8"
        >
          {aboutData[activeIdx].typography?.map((t, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
               className={cn("absolute whitespace-nowrap cursor-default select-none text-muted-foreground", t.size, t.weight, t.opacity, t.position)}
             >
               {t.text}
             </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[560px] flex flex-col items-center text-center space-y-4 mb-8 sm:mb-12 relative z-10"
      >
        <h1 className="text-[2.5rem] sm:text-[3.5rem] font-serif leading-[1.05] tracking-tight text-foreground font-medium w-full">
          纯粹乐趣 <br />
          <span className="italic text-muted-foreground/80">创造无限</span>
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base font-medium tracking-wide">
          一个探索 AI 与前端开发的毕业设计。
        </p>
      </motion.div>

      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
         className="w-full max-w-[560px] h-[320px] sm:h-[380px] bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl shadow-black/5 dark:shadow-black/20 overflow-hidden mx-auto"
      >
        {/* Abstract plus pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 9H11V11H9V9ZM9 4H11V6H9V4ZM4 9H6V11H4V9ZM14 9H16V11H14V9ZM9 14H11V16H9V14Z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px' 
          }} 
        />
        
        <div className="relative z-10 flex justify-between items-start">
          <span className="text-xs sm:text-sm font-medium text-muted-foreground tracking-wider">@项目_信息</span>
          <Sparkles className="size-5 sm:size-6 text-pink-300 dark:text-pink-600/50" />
        </div>
        
        {/* Blob Container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-32 h-32 sm:w-40 sm:h-40">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIdx + "blur"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("absolute inset-0 rounded-full blur-2xl sm:blur-3xl", aboutData[activeIdx].bg)}
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIdx}
                initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className={cn(
                  "relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden border-4 sm:border-[5px] shadow-[inset_0_4px_12px_rgba(255,255,255,0.5),0_10px_30px_rgba(0,0,0,0.15)]",
                  aboutData[activeIdx].shape,
                  aboutData[activeIdx].bg,
                  aboutData[activeIdx].border
                )}
              >
                {/* Shimmer / 流光 */}
                <motion.div
                  initial={{ left: "-150%" }}
                  animate={{ left: "150%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                  className="absolute top-[-50%] w-[100%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45"
                />

                {/* Eyes mimicking the ghost in the reference image */}
                <div className="absolute top-[35%] right-[20%] w-4 h-[22px] sm:w-[22px] sm:h-[30px] bg-white rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] -rotate-12 transition-transform duration-500 ease-out group-hover:scale-110" />
                <div className="absolute top-[40%] right-[45%] w-3 h-5 sm:w-4 sm:h-6 bg-white rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] -rotate-12 transition-transform duration-500 ease-out group-hover:scale-110" />
                
                {/* Exquisite highlights */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/40 rounded-full blur-[12px]" />
                <div className="absolute bottom-2 left-6 w-8 h-8 bg-white/30 rounded-full blur-[8px]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="relative z-10 mt-auto w-3/4">
          <AnimatePresence mode="popLayout">
             <motion.h2 
               key={activeIdx}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
               className="text-2xl sm:text-3xl font-bold leading-none tracking-tight text-foreground/90 dark:text-foreground"
             >
               {aboutData[activeIdx].title.split(" ").map((word, i) => (
                 <React.Fragment key={word + i}>
                   {word}
                   <br />
                 </React.Fragment>
               ))}
             </motion.h2>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="mt-8 sm:mt-10 flex flex-col items-center w-full max-w-[560px]"
      >
        <span className="text-[10px] sm:text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold mb-3">
          选择变体
        </span>
        <div className="flex flex-nowrap w-full items-center justify-between overflow-x-auto gap-1.5 sm:gap-2 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {aboutData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-150 focus:outline-none rounded-full flex-1 shrink-0 whitespace-nowrap",
                activeIdx === idx 
                  ? "text-foreground bg-foreground/5 shadow-sm scale-105" 
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
         className="mt-8 sm:mt-10 w-full max-w-[560px] relative z-10"
      >
         <AnimatePresence mode="popLayout">
            <motion.div
               key={activeIdx}
               initial={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
               animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
               transition={{ duration: 0.2 }}
               className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent blur-2xl rounded-full opacity-50 -z-10" />
              <button className="w-full rounded-[2rem] bg-foreground text-background p-6 sm:p-8 cursor-default shadow-xl shadow-foreground/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-sm sm:text-base leading-relaxed tracking-wide font-medium relative z-10 text-center text-background/90">
                    {aboutData[activeIdx].desc}
                  </p>
              </button>
            </motion.div>
         </AnimatePresence>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-xs font-mono text-muted-foreground/40"
      >
        以好奇心设计 · 2026
      </motion.div>
    </div>
  );
}

