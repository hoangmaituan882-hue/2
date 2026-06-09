import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Star, AlertTriangle, MonitorPlay, Clock, History, Film, Activity, Users, ListTodo, Plus, CheckCircle2, ThumbsUp, X, Mail } from "lucide-react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Mock data for screenings
const screeningsData = [
  {
    id: 1,
    date: "2026-05 第1周",
    title: "经典之夜",
    status: "ended",
    statusText: "已结束",
    movies: [
      {
        type: "good",
        title: "肖申克的救赎",
        description: "希望是件好东西，也许是世上最好的东西。",
        rating: 9.7,
      },
      {
        type: "bad",
        title: "纯洁心灵·逐梦演艺圈",
        description: "很难用语言形容的观影体验，泛式带你看乐子。",
        rating: 2.2,
      }
    ]
  },
  {
    id: 2,
    date: "2026-05 第2周",
    title: "周末摸鱼",
    status: "ended",
    statusText: "已结束",
    movies: [
      {
        type: "good",
        title: "让子弹飞",
        description: "站着，还把钱挣了！百看不厌的姜文神作。",
        rating: 9.0,
      }
    ]
  },
  {
    id: 3,
    date: "2026-05 第3周",
    title: "空缺",
    status: "ended",
    statusText: "休息中",
    movies: []
  },
  {
    id: 4,
    date: "2026-05 第4周",
    title: "科幻巨献",
    status: "ended",
    statusText: "已结束",
    movies: [
      {
        type: "good",
        title: "星际穿越",
        description: "爱是一种力量，能让我们超越时空的维度来感知它的存在。",
        rating: 9.4,
      },
      {
        type: "bad",
        title: "上海堡垒",
        description: "向我开炮！国产科幻关门之作的又一次审判。",
        rating: 2.9,
      }
    ]
  },
  {
    id: 5,
    date: "2026-06 第1周",
    title: "动画专场",
    status: "live",
    statusText: "预告",
    movies: [
      {
        type: "good",
        title: "千与千寻",
        description: "不要回头，一直向前走。",
        rating: 9.4,
      },
      {
        type: "bad",
        title: "雷锋的故事",
        description: "3D动画的惊世骇俗之作，耗资三千万的震撼表现。",
        rating: 2.5,
      }
    ]
  },
  {
    id: 6,
    date: "2026-06 第2周",
    title: "悬疑烧脑",
    status: "planned",
    statusText: "计划中",
    movies: [
      {
        type: "good",
        title: "盗梦空间",
        description: "不要用脑去想，要用心去感受。",
        rating: 9.4,
      }
    ]
  }
];

// Mock data for vertical timeline
const historyScreenings = [
  {
    id: 1,
    year: "2004",
    title: "《红玫瑰与白玫瑰》",
    description: "娶了红玫瑰，久而久之，红玫瑰就变成了墙上的一抹蚊子血，白玫瑰还是“床前明月光”；娶了白玫瑰，白玫瑰就是衣服上的一粒饭渣子，红的还是心口上的一颗朱砂痣。",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    year: "2005",
    title: "《星之声》",
    description: "或许，思念可以超越时间与距离。在光年之外的宇宙中心，发送一条只为你可见的短信，这需要耗费八年的时间才能传达的心意。",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    year: "2007",
    title: "《秒速五厘米》",
    description: "如果，樱花掉落的速度是每秒五厘米，那么两颗心需要多久才能靠近？我们仰望着同一片天空，却看着不同的地方。",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop"
  }
];

function TypewriterEffect({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    
    const fullText = texts[currentTextIndex];
    
    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayedText === fullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 100);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="inline-block relative text-left">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="w-[2px] h-[1em] bg-blue-500 inline-block align-middle ml-0.5 relative -top-[1px]"
      />
    </span>
  );
}

const tierListData = [
  { tier: "夯", color: "bg-[#ff7eb6] dark:bg-[#ff7eb6] text-white", posters: ["https://picsum.photos/seed/cmm/200/300", "https://picsum.photos/seed/ndmz/200/300", "https://picsum.photos/seed/qyqx/200/300", "https://picsum.photos/seed/xjcy/200/300"] },
  { tier: "顶尖", color: "bg-[#ffb07c] dark:bg-[#ffb07c] text-white", posters: ["https://picsum.photos/seed/yyzt/200/300", "https://picsum.photos/seed/hkdg/200/300", "https://picsum.photos/seed/djzh/200/300"] },
  { tier: "人上人", color: "bg-[#ffdf76] dark:bg-[#ffdf76] text-[#6d4c00]", posters: ["https://picsum.photos/seed/tqzz/200/300", "https://picsum.photos/seed/afds/200/300"] },
  { tier: "NPC", color: "bg-[#7ce2fe] dark:bg-[#7ce2fe] text-[#004e66]", posters: ["https://picsum.photos/seed/popc/200/300"] },
  { tier: "拉完了", color: "bg-[#b98df8] dark:bg-[#b98df8] text-white", posters: ["https://picsum.photos/seed/zmyy/200/300", "https://picsum.photos/seed/shbl/200/300", "https://picsum.photos/seed/fcsj/200/300"] },
];

const historyMovies = [
  { id: 101, title: "言叶之庭", reason: "新海诚经典，画质狂魔，特别适合雨天观影", date: "2024年4月10日", viewers: 423 },
  { id: 102, title: "你的名字。", reason: "现象级作品，时空交错的纯爱物语", date: "2023年12月25日", viewers: 892 },
  { id: 103, title: "天气之子", reason: "相比世界，我更想选择你", date: "2023年7月15日", viewers: 512 },
  { id: 104, title: "千与千寻", reason: "宫崎骏封神之作，百看不厌的奇幻冒险", date: "2023年1月1日", viewers: 1205 },
];

const todoMovies = [
  { id: 1, title: "楚门的世界", reason: "高分影史留名经典，多位观众墙裂推荐", added: "3天前", votes: 342, status: "waiting" },
  { id: 2, title: "电锯惊魂1", reason: "经典悬疑恐怖！密室逃脱神作，建议拉满弹幕护体", added: "5天前", votes: 256, status: "waiting" },
  { id: 3, title: "上海堡垒", reason: "重温中国科幻关门之作，绝世大烂片必须批判", added: "1周前", votes: 890, status: "urgent" },
  { id: 4, title: "阿凡达：水之道", reason: "视觉盛宴但剧情白开水，适合放空大脑周末观看", added: "2周前", votes: 120, status: "waiting" },
];

export function Screenings() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedWeek, setSelectedWeek] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useLocalStorage<'all' | 'todo' | 'history'>('screenings-activeTab', 'all');
  const [todoSort, setTodoSort] = useLocalStorage<'hot' | 'new'>('screenings-todoSort', 'hot');
  const [isNominateModalOpen, setIsNominateModalOpen] = useState(false);
  const [showTierList, setShowTierList] = useLocalStorage('screenings-showTierList', true);
  const [showTimeline, setShowTimeline] = useLocalStorage('screenings-showTimeline', true);
  const [showHistory, setShowHistory] = useLocalStorage('screenings-showHistory', true);

  const sortedTodoMovies = [...todoMovies].sort((a, b) => {
    if (todoSort === 'hot') {
      return b.votes - a.votes;
    } else {
      const getDays = (str: string) => {
        if (str.includes('天前')) return parseInt(str);
        if (str.includes('周前')) return parseInt(str) * 7;
        return 100;
      };
      return getDays(a.added) - getDays(b.added);
    }
  });

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-20 md:py-32 w-full overflow-x-hidden relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Bento Box Top Area */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24">
          {/* Left Column */}
          <div className="flex-1 flex flex-col">
            {/* Title area */}
            <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
                  周末放映会
                </h1>
                
                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <button 
                    onClick={() => setActiveTab('all')}
                    className={cn(
                      "font-medium px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 transition-colors",
                      activeTab === 'all' 
                        ? "bg-foreground text-background" 
                        : "bg-muted text-foreground/80 hover:text-foreground border border-border/40 hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    <MonitorPlay className="w-4 h-4" /> 全部情报
                  </button>
                  <button className="bg-muted text-foreground/80 hover:text-foreground font-medium px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 border border-border/40 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <Film className="w-4 h-4" /> 经典好片
                  </button>
                  <button className="bg-muted text-foreground/80 hover:text-foreground font-medium px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 border border-border/40 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <AlertTriangle className="w-4 h-4" /> 绝世烂片
                  </button>
                  <button 
                    onClick={() => setActiveTab('history')}
                    className={cn(
                      "font-medium px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 transition-colors",
                      activeTab === 'history' 
                        ? "bg-foreground text-background" 
                        : "bg-muted text-foreground/80 hover:text-foreground border border-border/40 hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    <History className="w-4 h-4" /> 动画放映
                  </button>
                  <button 
                    onClick={() => setActiveTab('todo')}
                    className={cn(
                      "font-medium px-5 py-2 rounded-full text-sm inline-flex items-center gap-2 transition-colors",
                      activeTab === 'todo' 
                        ? "bg-foreground text-background" 
                        : "bg-muted text-foreground/80 hover:text-foreground border border-border/40 hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    <ListTodo className="w-4 h-4" /> 待定观影
                  </button>
                </div>
            </div>
            
            {activeTab === 'all' && (
              <>
                <div className="mb-4">
                    <h3 className="text-[15px] font-medium text-muted-foreground">最热放映资讯</h3>
                </div>
                
                {/* Grid Area */}
                <motion.div 
                  variants={{
                    show: { transition: { staggerChildren: 0.1 } }
                  }}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
                >
                {/* Card 1 */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#fad4d4]/60 dark:bg-rose-950/40 border border-[#f5baba]/60 dark:border-rose-900/30 rounded-3xl p-6 flex flex-col shadow-sm cursor-pointer relative overflow-hidden group/box"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover/box:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="flex items-center gap-2 text-sm font-semibold text-rose-700 dark:text-rose-400 group-hover/box:text-rose-600 transition-colors"><Clock className="w-4 h-4" /> 下次放映倒计时</span>
                      <span className="text-[11px] bg-white/70 dark:bg-black/20 text-rose-600 dark:text-rose-400 font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><Star className="w-3 h-3 fill-current" /> 4.8</span>
                  </div>
                  <div className="my-2 relative z-10">
                    <h4 className="text-2xl font-bold text-foreground">3 天 14 小时</h4>
                    <p className="text-sm font-medium text-foreground/70 mt-1.5 line-clamp-1">《千与千寻》与《雷锋的故事》</p>
                    <p className="text-xs text-foreground/50 mt-1">9,530 人已预约</p>
                  </div>
                  <div className="mt-auto flex justify-end relative z-10">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-200 border-2 border-[#fad4d4]/80 dark:border-rose-950" />
                        <div className="w-7 h-7 rounded-full bg-zinc-300 border-2 border-[#fad4d4]/80 dark:border-rose-950" />
                        <div className="w-7 h-7 rounded-full bg-zinc-400 border-2 border-[#fad4d4]/80 dark:border-rose-950 flex items-center justify-center text-[10px] text-white">...</div>
                      </div>
                  </div>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#fde6b3]/50 dark:bg-amber-950/40 border border-[#fbcd82]/50 dark:border-amber-900/30 rounded-3xl p-6 flex flex-col shadow-sm cursor-pointer relative overflow-hidden group/box"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover/box:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-400 group-hover/box:text-amber-600 transition-colors"><History className="w-4 h-4" /> 距离上次放映</span>
                      <span className="text-[11px] bg-white/70 dark:bg-black/20 text-amber-600 dark:text-amber-400 font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><Star className="w-3 h-3 fill-current" /> 4.9</span>
                  </div>
                  <div className="my-2 relative z-10">
                    <h4 className="text-2xl font-bold text-foreground">已过 2 天</h4>
                    <p className="text-sm font-medium text-foreground/70 mt-1.5 line-clamp-1">《星际穿越》与上海堡垒</p>
                    <p className="text-xs text-foreground/50 mt-1">1,463 人参与讨论</p>
                  </div>
                  <div className="mt-auto flex justify-end relative z-10">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-200 border-2 border-[#fde6b3]/80 dark:border-amber-950" />
                        <div className="w-7 h-7 rounded-full bg-zinc-300 border-2 border-[#fde6b3]/80 dark:border-amber-950" />
                      </div>
                  </div>
                </motion.div>
                
                {/* Card 3 */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#e0e7ff]/70 dark:bg-indigo-950/40 border border-[#c7d2fe]/70 dark:border-indigo-900/30 rounded-3xl p-6 flex flex-col shadow-sm cursor-pointer relative overflow-hidden group/box"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover/box:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-400 group-hover/box:text-indigo-600 transition-colors"><MonitorPlay className="w-4 h-4" /> 累计放映</span>
                      <span className="text-[11px] bg-white/70 dark:bg-black/20 text-indigo-600 dark:text-indigo-400 font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><Star className="w-3 h-3 fill-current" /> 4.9</span>
                  </div>
                  <div className="my-2 relative z-10">
                    <h4 className="text-2xl font-bold text-foreground">128 部作品</h4>
                    <p className="text-sm font-medium text-foreground/70 mt-1.5 line-clamp-1">好片 64部 / 烂片 64部</p>
                    <p className="text-xs text-foreground/50 mt-1">6,726 人历史评鉴</p>
                  </div>
                  <div className="mt-auto flex justify-end relative z-10">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-200 border-2 border-[#e0e7ff]/80 dark:border-indigo-950" />
                        <div className="w-7 h-7 rounded-full bg-zinc-300 border-2 border-[#e0e7ff]/80 dark:border-indigo-950" />
                        <div className="w-7 h-7 rounded-full bg-zinc-400 border-2 border-[#e0e7ff]/80 dark:border-indigo-950 flex items-center justify-center text-[10px] text-white">...</div>
                      </div>
                  </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#d1fae5]/50 dark:bg-emerald-950/40 border border-[#a7f3d0]/50 dark:border-emerald-900/30 rounded-3xl p-6 flex flex-col shadow-sm cursor-pointer relative overflow-hidden group/box"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover/box:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex items-center justify-between mb-4 relative z-10">
                      <span className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 group-hover/box:text-emerald-600 transition-colors"><Star className="w-4 h-4" /> 绝世烂片榜首</span>
                      <span className="text-[11px] bg-white/70 dark:bg-black/20 text-emerald-600 dark:text-emerald-400 font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm"><Star className="w-3 h-3 fill-current" /> Top 1</span>
                  </div>
                  <div className="my-2 relative z-10">
                    <h4 className="text-2xl font-bold text-foreground">逐梦演艺圈</h4>
                    <p className="text-sm font-medium text-foreground/70 mt-1.5 line-clamp-1">评分 2.2 · 无敌震撼</p>
                    <p className="text-xs text-foreground/50 mt-1">8,735 人吐血推荐</p>
                  </div>
                  <div className="mt-auto flex justify-end relative z-10">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-zinc-200 border-2 border-[#d1fae5]/80 dark:border-emerald-950" />
                      </div>
                  </div>
                </motion.div>
            </motion.div>
              </>
            )}
            
            {activeTab === 'todo' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-[15px] font-medium text-muted-foreground inline-flex items-center gap-2">观众提名待定池</h3>
                    <div className="flex items-center gap-3">
                        <div className="flex rounded-md border bg-muted/50 p-0.5">
                            <button onClick={() => setTodoSort('hot')} className={cn("px-2.5 py-1 text-xs font-medium rounded-sm transition-colors", todoSort === 'hot' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}>最热</button>
                            <button onClick={() => setTodoSort('new')} className={cn("px-2.5 py-1 text-xs font-medium rounded-sm transition-colors", todoSort === 'new' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}>最新</button>
                        </div>
                        <button onClick={() => setIsNominateModalOpen(true)} className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                          <Plus className="w-3.5 h-3.5" /> 提名新电影
                        </button>
                    </div>
                </div>
                
                <div className="flex flex-col gap-3 h-full pb-2">
                  {sortedTodoMovies.map((todo, idx) => (
                    <motion.div 
                      key={todo.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={cn(
                        "p-4 rounded-3xl border flex items-center gap-4 group/todo cursor-pointer transition-all",
                        todo.status === 'urgent' 
                          ? "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100/50 dark:hover:bg-rose-950/40" 
                          : "bg-background border-border/80 hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 shadow-sm hover:shadow-md"
                      )}
                    >
                      {/* Checkbox circle mock */}
                      <div className="shrink-0 w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center group-hover/todo:border-blue-500/50 transition-colors">
                         <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-0 group-hover/todo:opacity-50 transition-opacity" />
                      </div>
                      
                      <div className="flex-1 min-w-0 py-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={cn("text-[15px] font-bold truncate", todo.status === 'urgent' ? "text-rose-700 dark:text-rose-400" : "text-foreground")}>
                            {todo.title}
                          </h4>
                          {todo.status === 'urgent' && (
                            <span className="text-[10px] font-bold text-rose-600 bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 rounded-full whitespace-nowrap">呼声极高</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{todo.reason}</p>
                      </div>
                      
                      <div className="shrink-0 flex flex-col items-end justify-center gap-1.5 ml-2">
                        <div className="text-[10px] font-medium text-muted-foreground bg-muted/80 px-2 py-0.5 rounded-md">{todo.added}</div>
                        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-foreground/60 group-hover/todo:text-blue-600 dark:group-hover/todo:text-blue-400">
                          <ThumbsUp className="w-3 h-3" /> {todo.votes}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Empty completion slot */}
                  <div className="p-4 rounded-3xl border-2 border-dashed border-border/60 flex items-center justify-center text-muted-foreground/60 text-sm font-medium gap-2 mt-2 h-[72px] hover:border-border transition-colors hover:text-muted-foreground cursor-pointer">
                    <CheckCircle2 className="w-4 h-4" /> 查看另外 12 部已播出的影片
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'history' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-[15px] font-medium text-muted-foreground inline-flex items-center gap-2">时光机动画放映</h3>
                </div>
                
                <div className="flex flex-col gap-3 h-full pb-2">
                  {historyMovies.map((history, idx) => (
                    <motion.div 
                      key={history.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 rounded-3xl border flex items-center gap-4 group/history cursor-pointer transition-all bg-background border-border/80 hover:border-blue-500/30 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 shadow-sm hover:shadow-md"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full border border-blue-500/30 bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                         <CheckCircle2 className="w-4 h-4" />
                      </div>
                      
                      <div className="flex-1 min-w-0 py-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-[15px] font-bold truncate text-foreground">
                            {history.title}
                          </h4>
                        </div>
                        <p className="text-[13px] text-muted-foreground truncate">{history.reason}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-1.5 shrink-0 pl-2">
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-muted/60 rounded-full">
                           <Users className="w-3 h-3 text-muted-foreground/70" />
                           <span className="text-[11px] font-semibold text-muted-foreground">{history.viewers}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground/60 font-medium px-1.5">{history.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Right Column / Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-[380px] shrink-0 flex flex-col mt-8 lg:mt-0"
          >
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#f8f5ee] dark:bg-[#1a1917] border border-[#e8dfce] dark:border-[#38332c] rounded-[2rem] p-6 lg:p-8 flex-1 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative overflow-hidden group/sidebar"
            >
                {/* Ambient glow */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[64px] pointer-events-none group-hover/sidebar:bg-amber-500/20 transition-colors duration-1000" />
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[64px] pointer-events-none group-hover/sidebar:bg-blue-500/20 transition-colors duration-1000" />
                
                {/* Header info */}
                <div className="flex justify-between items-start mb-6 w-full relative z-10">
                   <MonitorPlay className="w-5 h-5 text-foreground/60" />
                   <button className="hover:bg-black/5 dark:hover:bg-white/5 p-2 rounded-full transition-colors -m-2">
                     <svg className="w-5 h-5 text-foreground/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                   </button>
                </div>

                {/* Profile part */}
                <div className="flex flex-col items-center mb-6 relative z-10">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-white dark:bg-zinc-800 border-2 border-white shadow-md mb-4 group-hover/sidebar:scale-105 transition-transform duration-500">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?seed=fanshi123" alt="Fanshi" className="w-full h-full object-cover scale-110" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-1 group-hover/sidebar:text-blue-600 dark:group-hover/sidebar:text-blue-400 transition-colors">泛式放映厅</h3>
                  <p className="text-[13px] text-muted-foreground text-center font-medium">每个周末与你相约吐槽烂片感受神作</p>
                </div>
                
                {/* Typewriter AI Effect */}
                <div className="bg-background/90 dark:bg-black/40 rounded-full px-5 py-2 border border-border/60 text-[11px] font-bold text-muted-foreground flex items-center justify-center gap-3 mb-8 w-max mx-auto shadow-sm backdrop-blur-md relative z-10 hover:border-blue-500/30 transition-colors cursor-default">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </div>
                  <TypewriterEffect texts={[
                    "AI 正在分析本周排播数据...", 
                    "《千与千寻》即将上映...", 
                    "弹幕服务器压力测试中...", 
                    "等待放映厅开放..."
                  ]} />
                </div>

                {/* Info Pills */}
                <div className="bg-white/80 dark:bg-black/20 rounded-2xl p-4 mb-8 relative z-10 flex items-center justify-between border border-border/40 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                       <Users className="w-4 h-4 text-foreground/70" />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-foreground">274</div>
                       <div className="text-[11px] text-muted-foreground font-medium">房管在线</div>
                    </div>
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#2a2825] bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-800">A</div>
                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#2a2825] bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-800">B</div>
                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#2a2825] bg-yellow-100 flex flex-col items-center justify-center text-[10px] font-bold text-foreground/60">
                       <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Chart Activity */}
                <div className="relative z-10 flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                      <div>
                         <span className="text-xs font-semibold text-muted-foreground block mb-1">同接峰值活跃度</span>
                         <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">8.5<span className="text-sm font-normal text-muted-foreground ml-0.5">万</span></span>
                            <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded whitespace-nowrap">🔥 爆表!</span>
                         </div>
                      </div>
                      <span className="text-[10px] font-medium bg-white dark:bg-black/20 px-2.5 py-1.5 rounded-full border border-border/50 text-foreground/70 shadow-sm">Year ▾</span>
                  </div>
                  
                  {/* Histogram graphic imitating image */}
                  <div className="flex items-end justify-between h-[100px] gap-2 mt-auto">
                      <div className="w-full h-full flex flex-col justify-end gap-0.5 group">
                        <div className="w-full bg-[#fca5a5]/70 dark:bg-red-500/50 rounded-t-lg h-[20%] transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#93c5fd]/70 dark:bg-blue-500/50 h-[30%] transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#fcd34d]/70 dark:bg-amber-500/50 rounded-b-md h-[10%] transition-transform group-hover:-translate-y-1"></div>
                      </div>
                      <div className="w-full h-full flex flex-col justify-end gap-0.5 group">
                        <div className="w-full bg-[#93c5fd]/70 dark:bg-blue-500/50 rounded-t-lg h-[40%] transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#86efac]/70 dark:bg-emerald-500/50 h-[20%] transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#c4b5fd]/70 dark:bg-indigo-500/50 rounded-b-md h-[15%] transition-transform group-hover:-translate-y-1"></div>
                      </div>
                      <div className="w-full h-full flex flex-col justify-end gap-0.5 group">
                        <div className="w-full bg-[#fcd34d]/70 dark:bg-amber-500/50 rounded-t-lg h-[30%] transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#c4b5fd]/70 dark:bg-indigo-500/50 rounded-b-md h-[25%] transition-transform group-hover:-translate-y-1"></div>
                      </div>
                      <div className="w-full h-full flex flex-col justify-end gap-0.5 group">
                        <div className="w-full bg-[#c4b5fd]/70 dark:bg-indigo-500/50 rounded-t-lg h-[50%] transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#fca5a5]/70 dark:bg-red-500/50 rounded-b-md h-[20%] transition-transform group-hover:-translate-y-1"></div>
                      </div>
                      <div className="w-full h-full flex flex-col justify-end gap-0.5 group">
                        <div className="w-full bg-[#86efac]/70 dark:bg-emerald-500/50 rounded-t-lg rounded-b-md h-[40%] transition-transform group-hover:-translate-y-1"></div>
                      </div>
                      <div className="w-full h-full flex flex-col justify-end gap-0.5 group">
                        <div className="w-full bg-[#fde047] dark:bg-yellow-400 rounded-t-lg h-[60%] border-2 border-[#1a1a1a] dark:border-white shadow-sm transition-transform group-hover:-translate-y-1"></div>
                        <div className="w-full bg-[#86efac] dark:bg-emerald-400 rounded-b-md h-[30%] border-2 border-[#1a1a1a] dark:border-white border-t-0 shadow-sm transition-transform group-hover:-translate-y-1"></div>
                      </div>
                  </div>
                  <div className="flex justify-between mt-3 px-1">
                      <span className="text-[10px] font-medium text-muted-foreground w-full text-center">Jan</span>
                      <span className="text-[10px] font-medium text-muted-foreground w-full text-center">Feb</span>
                      <span className="text-[10px] font-medium text-muted-foreground w-full text-center">Aug</span>
                      <span className="text-[10px] font-medium text-muted-foreground w-full text-center">Sep</span>
                      <span className="text-[10px] font-medium text-muted-foreground w-full text-center">Oct</span>
                      <span className="text-[10px] font-bold text-background bg-foreground px-1.5 py-0.5 rounded-full w-[170%] text-center tracking-tighter -mx-1">Dec</span>
                  </div>
                </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Header */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-2">
              排播周期轴
            </h2>
            <div className="flex bg-muted p-1 rounded-full border border-border">
              <button
                onClick={() => setShowTimeline(true)}
                className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all", showTimeline ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                显示
              </button>
              <button
                onClick={() => setShowTimeline(false)}
                className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all", !showTimeline ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                隐藏
              </button>
            </div>
          </div>
          {showTimeline && (
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 flex items-center justify-center bg-background hover:bg-muted border border-border/60 rounded-full shadow-sm transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-foreground/80" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 flex items-center justify-center bg-background hover:bg-muted border border-border/60 rounded-full shadow-sm transition-all"
              >
                <ChevronRight className="w-4 h-4 text-foreground/80" />
              </button>
            </div>
          )}
        </div>

        {/* Timeline Visualization */}
        <AnimatePresence>
          {showTimeline && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative w-full mb-32 group/roadmap overflow-hidden"
            >
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="relative flex items-center overflow-x-auto no-scrollbar scroll-smooth py-64 px-4 md:px-12"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
          >
            {/* Horizontal Line Background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 z-0 min-w-max w-full">
               <div className="h-full bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-border/50 w-full" />
            </div>

            <div className="flex gap-40 md:gap-56 items-center relative z-10 w-max min-w-full px-12">
              {screeningsData.map((node, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  className="relative flex flex-col items-center shrink-0 w-8"
                >
                  {/* Good Movie */}
                  {node.movies.filter(m => m.type === 'good').map((movie, cIndex) => (
                    <motion.div 
                      key={`good-${cIndex}`} 
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="absolute bottom-[64px] flex flex-col gap-4 items-center w-[260px] md:w-[300px]"
                    >
                      <div className="absolute -bottom-[28px] w-px h-[28px] bg-gradient-to-b from-transparent to-emerald-500/50" />
                      <div className="w-full bg-background border border-border/80 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 transition-all flex flex-col gap-3 relative z-10 overflow-hidden group/card cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2.5 py-1 rounded-full">
                            <Star className="w-3 h-3 fill-current" />
                            经典好片
                          </span>
                          <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">{movie.rating} 分</span>
                        </div>
                        <h4 className="text-base font-bold text-foreground group-hover/card:text-emerald-500 transition-colors">{movie.title}</h4>
                        {movie.description && (
                          <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">{movie.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Node Dot & Title */}
                  <div className="relative z-10 flex flex-col items-center group/node">
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-500 shadow-xl", 
                      node.status === 'live' ? "bg-red-500/10 shadow-red-500/20 group-hover/node:scale-110" : 
                      node.status === 'ended' ? "bg-zinc-100 dark:bg-zinc-800 shadow-black/5" : 
                      "bg-blue-500/10 shadow-blue-500/20 group-hover/node:scale-110")}>
                      <div className="w-6 h-6 rounded-full bg-background border border-border/80 flex items-center justify-center shadow-inner relative">
                        <div className={cn("w-2.5 h-2.5 rounded-full transition-colors duration-300", 
                          node.status === 'live' ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" : 
                          node.status === 'ended' ? "bg-zinc-300 dark:bg-zinc-600" : 
                          "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]")} />
                        {node.status === 'live' && (
                          <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-50" />
                        )}
                      </div>
                    </div>
                    
                    <div className="absolute top-[60px] flex flex-col items-center whitespace-nowrap z-20 transition-transform duration-300 group-hover/node:translate-y-1">
                      <span className={cn("text-lg font-bold mb-1 transition-colors duration-300", 
                        node.status === 'live' ? "text-red-500" : 
                        node.status === 'ended' ? "text-foreground/80" : "text-blue-500"
                      )}>{node.title}</span>
                      <span className="text-[11px] font-bold text-muted-foreground mb-3 tracking-widest uppercase bg-muted/50 px-2 py-0.5 rounded-sm">{node.date}</span>
                      <span className={cn("text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase transition-all duration-300 shadow-sm", 
                        node.status === 'live' ? "bg-red-500 border border-red-400 text-white shadow-red-500/30 group-hover/node:shadow-red-500/50" : 
                        node.status === 'planned' ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-500/30 text-blue-600 dark:text-blue-400" : 
                        "bg-muted border border-border/50 text-muted-foreground")}>
                        {node.status === 'live' ? (
                           <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 animate-pulse" /> {node.statusText}</span>
                        ) : node.statusText}
                      </span>
                    </div>
                  </div>

                  {/* Bad Movie */}
                  {node.movies.filter(m => m.type === 'bad').map((movie, cIndex) => (
                    <motion.div 
                      key={`bad-${cIndex}`} 
                      whileHover={{ y: 8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="absolute top-[176px] flex flex-col gap-4 items-center w-[260px] md:w-[300px]"
                    >
                      <div className="absolute -top-[28px] w-px h-[28px] bg-gradient-to-t from-transparent to-rose-500/50" />
                      <div className="w-full bg-background border border-border/80 rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(225,29,72,0.15)] hover:border-rose-500/30 transition-all flex flex-col gap-3 relative z-10 overflow-hidden group/card cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-rose-600 bg-rose-50 dark:bg-rose-900/30 dark:text-rose-400 px-2.5 py-1 rounded-full">
                            <AlertTriangle className="w-3 h-3" />
                            绝世烂片
                          </span>
                          <span className="text-xs font-black text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">{movie.rating} 分</span>
                        </div>
                        <h4 className="text-base font-bold text-foreground group-hover/card:text-rose-500 transition-colors">{movie.title}</h4>
                        {movie.description && (
                          <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2">{movie.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Empty state indication */}
                  {node.movies.length === 0 && (
                     <motion.div 
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 0.6 }}
                       className="absolute top-[176px] flex flex-col gap-4 items-center w-[200px]"
                     >
                        <div className="absolute -top-[28px] w-px h-[28px] bg-gradient-to-t from-transparent to-border/50" />
                        <div className="w-full border-2 border-dashed border-border/50 bg-muted/20 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                           <span className="text-sm font-medium text-muted-foreground tracking-widest">排期空缺</span>
                        </div>
                     </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        )}
        </AnimatePresence>
        {/* Tier List Section */}
        <div className="w-full max-w-7xl mx-auto mb-32 group/tierlist relative z-20">
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center gap-2">
                放映会电影从夯到拉
              </h2>
            </div>
            <div className="flex bg-muted p-1 rounded-full border border-border">
              <button
                onClick={() => setShowTierList(true)}
                className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all", showTierList ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                显示
              </button>
              <button
                onClick={() => setShowTierList(false)}
                className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all", !showTierList ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                隐藏
              </button>
            </div>
          </div>
          
          <AnimatePresence>
            {showTierList && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-3 p-2 sm:p-4 overflow-hidden"
              >
                {tierListData.map((row, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row bg-background border border-border/80 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={cn("w-full sm:w-32 lg:w-40 shrink-0 flex flex-col justify-center items-center py-6 sm:py-8 px-2 shadow-[inset_-4px_0_12px_rgba(0,0,0,0.05)]", row.color)}>
                      <span className="text-3xl lg:text-4xl font-black tracking-tighter sm:[writing-mode:vertical-rl] text-center">{row.tier}</span>
                    </div>
                    <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-wrap gap-4 items-center content-start min-h-[140px] bg-muted/10">
                      {row.posters.map((url, j) => (
                        <motion.div 
                          key={j}
                          whileHover={{ scale: 1.05, y: -4 }}
                          className="w-20 sm:w-24 lg:w-32 aspect-[2/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl border border-border/30 transition-all cursor-pointer relative group/poster"
                        >
                          <img src={url} alt="poster" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/0 group-hover/poster:bg-black/10 transition-colors pointer-events-none" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Classic Memory (Vertical Timeline) */}
        <div className="mt-32 mb-16">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">往期经典放映</h2>
            <div className="flex bg-muted p-1 rounded-full border border-border">
              <button
                onClick={() => setShowHistory(true)}
                className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all", showHistory ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                显示
              </button>
              <button
                onClick={() => setShowHistory(false)}
                className={cn("px-4 py-1.5 rounded-full text-sm font-medium transition-all", !showHistory ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground")}
              >
                隐藏
              </button>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">那些年，我们一起看过的经典作品与难忘回忆。</p>
        </div>

        <AnimatePresence>
          {showHistory && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full relative py-16 mb-32 overflow-hidden"
            >
              {/* Vertical Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 z-0" />
          
          <div className="space-y-32 md:space-y-48">
             {historyScreenings.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={item.id} className="relative flex flex-col md:flex-row items-center w-full group">
                    {/* Mobile Dot */}
                    <div className="absolute left-[20px] -translate-x-1/2 flex items-center justify-center top-0 md:hidden z-10 w-4 h-4 rounded-full bg-background border-2 border-primary" />
    
                    {/* Title Area */}
                    <div className={cn(
                      "w-full md:w-1/2 flex items-center hidden md:flex", 
                      isEven ? "justify-end pr-12 text-right" : "justify-start pl-12 text-left order-last"
                    )}>
                      <h3 className="text-xl md:text-2xl font-medium tracking-wide text-foreground/80 md:group-hover:text-foreground transition-colors max-w-[300px]">
                        {item.title}
                      </h3>
                    </div>
    
                    {/* Content Area */}
                    <div className={cn(
                      "w-full md:w-1/2 flex flex-col relative pt-2 md:pt-0", 
                      isEven ? "md:pl-12" : "md:pr-12"
                    )}>
                       {/* Mobile Title - visible only on mobile */}
                       <h3 className="text-xl font-medium text-foreground/80 mb-4 md:hidden ml-10">
                         {item.title}
                       </h3>
                
                       {/* Wrap Image + Content inside a fixed-width box for consistent inner alignment */}
                       <div className={cn(
                         "w-full max-w-[360px] md:max-w-[400px] relative ml-10 md:ml-0",
                         isEven ? "md:mr-auto" : "md:ml-auto" // Even -> right column, box hugs left (mr-auto). Odd -> left column, box hugs right (ml-auto).
                       )}>
                         {/* Image */}
                         <div className="relative aspect-[4/3] w-full rounded shadow-xl overflow-hidden bg-muted z-0">
                           <img src={item.image} alt={item.title} className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                         </div>
                         
                         {/* Year */}
                         <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 z-10 text-[64px] md:text-[96px] leading-none font-bold tracking-tighter text-foreground drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] select-none">
                           {item.year}
                         </div>
                         
                         {/* Description */}
                         <p className="mt-12 md:mt-16 text-sm text-foreground/70 leading-loose text-left">
                           {item.description}
                         </p>
                       </div>
                    </div>
                  </div>
                )
             })}
          </div>
        </motion.div>
        )}
        </AnimatePresence>
      </div>



      {/* Nominate Modal */}
      <AnimatePresence>
        {isNominateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-background rounded-2xl p-6 shadow-xl w-full max-w-sm border"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">提名新电影</h3>
                <button onClick={() => setIsNominateModalOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-muted">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                想要提名新的影片加入待定池？或者发现图库资料有缺漏？<br className="my-1"/>
                请发送邮件给站主邮箱进行投稿补缺。
              </p>
              
              <div className="bg-muted/50 p-3 rounded-lg flex items-center justify-center gap-2 mb-6">
                 <Mail className="w-4 h-4 text-blue-500" />
                 <span className="font-mono text-sm font-semibold selection:bg-blue-200">22552255@qq.com</span>
              </div>
              
              <button onClick={() => setIsNominateModalOpen(false)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-xl transition-colors">
                我知道了
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
