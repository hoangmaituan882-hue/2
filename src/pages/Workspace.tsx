import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, LayoutDashboard, MessageCircle, ScanEye, Activity, PanelLeftOpen,
  Inbox, ArrowUpDown, ListTodo, ChevronDown, List, Calendar, Clock,
  Circle, Bell, Brain, Pause, Settings, X, Search,
  Navigation, Sparkles, XCircle, Volume2, Film, Gamepad2, Image,
  ChevronLeft, ChevronRight, Home, Languages, Moon, Sun,
  Palette, Smartphone, Key, BarChart2, Gift, Trophy, GraduationCap, Monitor,
  Play, FastForward, Rewind, Users, Tv, Airplay, Video, VolumeX, Maximize, Share2,
  Heart, Pencil
} from "lucide-react";
import { cn } from "../lib/utils";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Workspace() {
  const [activeTab, setActiveTab] = useLocalStorage<'screenings' | 'games' | 'plaza'>('workspace-activeTab', 'screenings');
  const [todoView, setTodoView] = useLocalStorage<'list' | 'calendar' | 'monitor'>('workspace-todoView', 'list');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage } = useThemeLanguage();

  return (
    <div className="flex h-screen w-screen p-2 bg-[#fbfaf8] dark:bg-zinc-950 overflow-hidden relative text-foreground font-sans transition-colors duration-300 z-10 pt-4 pb-4">
      {/* 1. Left Slim Rail */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full shrink-0 items-stretch pl-2 py-2 pr-1"
      >
        <div className="inline-flex h-full flex-col items-center overflow-y-auto no-scrollbar rounded-full border border-border bg-card px-1.5 pb-3 pt-0 shadow-sm transition-all duration-200">
          <div className="min-h-0 flex-1">
            <div className="flex h-full min-h-0 flex-col items-center justify-between">
              
              <div className="flex flex-col items-center gap-2 px-0.5 pb-2 pt-3">
                {/* Avatar Profile */}
                <button className="group relative flex size-11 items-center justify-center rounded-full transition-all duration-200 bg-primary/20 ring-2 ring-primary">
                  <div className="relative flex shrink-0 overflow-hidden size-9 rounded-full">
                    <img className="aspect-square size-full object-cover" alt="Profile" src="https://api.dicebear.com/7.x/notionists/svg?seed=Fanshi" />
                  </div>
                  <span className="absolute bottom-0 right-0 size-2.5 rounded-full ring-2 ring-background bg-emerald-500" />
                </button>
              </div>

              <div className="flex shrink-0 flex-col items-center gap-2 border-t border-border/70 pt-3 mt-auto mb-2">
                <button className="flex size-11 items-center justify-center rounded-full text-muted-foreground hover:bg-muted/70 hover:text-foreground border border-dashed border-border/70 bg-transparent transition-colors">
                  <Plus className="size-5" />
                </button>
                <div className="h-px w-6 bg-border/70 my-1" />
                <button className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors shadow-sm">
                  <LayoutDashboard className="size-5" />
                </button>
                <button className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors">
                  <MessageCircle className="size-5" />
                </button>
                <button className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors">
                  <ScanEye className="size-5" />
                </button>
                <button className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors">
                  <Activity className="size-5" />
                </button>
              </div>

              <div className="flex shrink-0 flex-col items-center gap-2 border-t border-border/70 pt-3">
                <a href="#" className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors" title="Home">
                  <Home className="size-4" />
                </a>
                <a href="#screenings" className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors" title="Screenings">
                  <Film className="size-4" />
                </a>
                <a href="#games" className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors" title="Games">
                  <Gamepad2 className="size-4" />
                </a>
                <a href="#plaza" className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors" title="Plaza">
                  <Image className="size-4" />
                </a>
                
                <div className="h-px w-6 bg-border/70 my-1" />
                
                <button onClick={toggleLanguage} className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors" title="Language">
                  <Languages className="size-4" />
                </button>
                <button onClick={toggleTheme} className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-amber-500/80 hover:bg-muted/70 hover:text-amber-500 transition-colors" title="Theme">
                  {theme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4 text-foreground/80" />}
                </button>
                
                <div className="h-px w-6 bg-border/70 my-1" />
                
                <button onClick={() => setIsSettingsOpen(true)} className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors relative overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/shapes/svg?seed=setting1" className="size-8 rounded-full border border-border" />
                  <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-amber-500" />
                </button>
                <button className="flex size-11 items-center justify-center rounded-full bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground transition-colors">
                  <PanelLeftOpen className="size-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Main content area (Resizable panel group conceptually) */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full h-full"
      >
        {/* Left Column: Events & Todos (40%) */}
        <div className="flex flex-col w-[35%] h-full pr-1 gap-2 py-2">
          
          {/* Top: Events */}
          <div className="flex-[3.5] bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col group/panel transition-shadow hover:shadow-md">
            <div className="flex h-10 items-center justify-between px-3 border-b border-border shrink-0 bg-muted/20">
              <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-muted rounded-md transition-colors relative">
                <Inbox className="size-4 text-muted-foreground" />
                <span className="text-sm font-medium">事件</span>
                <span className="absolute top-1 right-0 size-1.5 rounded-full bg-red-500" />
              </button>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                  <ArrowUpDown className="size-3.5" />
                </button>
                <span className="text-xs text-muted-foreground font-mono ml-1">63</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar relative">
              {/* Event items list */}
              {[1,2,3].map((i) => (
                <div key={i} className="flex flex-col border-b border-border/50 hover:bg-muted/30 transition-colors p-2.5 cursor-pointer">
                  <div className="flex justify-between items-start w-full gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary shrink-0">anysoul</span>
                      <div className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                        <ListTodo className="size-3 text-cyan-500" /> 查看任务
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground shrink-0 tabular-nums">62天前</span>
                  </div>
                  <p className="text-xs font-mono text-foreground mt-1 ml-3 pl-0.5">all</p>
                </div>
              ))}
              <div className="flex flex-col border-b border-border/50 bg-red-500/5 hover:bg-red-500/10 transition-colors p-2.5 cursor-pointer">
                <div className="flex justify-between items-start w-full gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary shrink-0">anysoul</span>
                    <div className="flex items-center gap-1 truncate text-xs text-muted-foreground">
                      <XCircle className="size-3 text-red-500" /> 取消任务
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground shrink-0 tabular-nums">62天前</span>
                </div>
                <p className="text-xs font-mono text-foreground mt-1 ml-3 pl-0.5 line-clamp-1 opacity-80 decoration-red-500/30 underline decoration-wavy underline-offset-2">
                  {"{'task_id':'01KN9...', 'reason':'我重新想了...'}"}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom: Todos */}
          <div className="flex-[6.5] bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col group/panel transition-shadow hover:shadow-md">
            <div className="flex h-10 items-center px-3 border-b border-border shrink-0 bg-muted/20">
              <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-muted rounded-md transition-colors relative">
                <ListTodo className="size-4 text-muted-foreground" />
                <span className="text-sm font-medium">待办</span>
              </button>
              
              <button className="flex items-center gap-1 ml-2 px-2 py-1 border border-border rounded-md text-xs bg-background hover:bg-muted transition-colors shadow-sm">
                <span>进行中</span>
                <span className="text-muted-foreground ml-0.5 tabular-nums font-mono">3</span>
                <ChevronDown className="size-3.5 opacity-50" />
              </button>

              <div className="ml-auto flex items-center gap-1">
                <button onClick={() => setTodoView('list')} className={cn("p-1 rounded border shadow-sm transition-colors", todoView === 'list' ? "border-border bg-background text-foreground" : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground")}><List className="size-3.5" /></button>
                <button onClick={() => setTodoView('calendar')} className={cn("p-1 rounded border shadow-sm transition-colors", todoView === 'calendar' ? "border-border bg-background text-foreground" : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground")}><Calendar className="size-3.5" /></button>
                <button onClick={() => setTodoView('monitor')} className={cn("p-1 rounded border shadow-sm transition-colors", todoView === 'monitor' ? "border-border bg-background text-foreground" : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground")}><Activity className="size-3.5" /></button>
                <div className="w-px h-4 bg-border mx-1" />
                <button className="p-1 text-muted-foreground hover:bg-muted hover:text-foreground rounded transition-colors"><Plus className="size-4" /></button>
              </div>
            </div>
            
            {todoView === 'list' ? (
              <div className="flex-1 overflow-y-auto p-4 space-y-5">
                
                {/* Category */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">已逾期</span>
                    <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground tabular-nums">2</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-muted/40 p-2 -mx-2 rounded-lg transition-colors">
                      <button className="mt-0.5 text-muted-foreground hover:text-red-500 transition-colors">
                        <Circle className="size-4" />
                      </button>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13.5px] font-medium leading-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">讨论期社群互动 (04-07 ~ 04-20)</span>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono">M/M</span>
                          <span className="flex items-center gap-1 text-[10px] text-red-600 dark:text-red-400 font-medium bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded border border-red-500/20">
                            <Clock className="size-3" /> 已逾期
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-500/20">
                            <Bell className="size-3" /> 提醒已逾期
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-muted/40 p-2 -mx-2 rounded-lg transition-colors">
                      <button className="mt-0.5 text-muted-foreground hover:text-red-500 transition-colors">
                        <Circle className="size-4" />
                      </button>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13.5px] font-medium leading-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">发布社群首发帖 (04-06 周一)</span>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono">M/M</span>
                          <span className="flex items-center gap-1 text-[10px] text-red-600 dark:text-red-400 font-medium bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded border border-red-500/20">
                            <Clock className="size-3" /> 已逾期
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-900/30 px-1.5 py-0.5 rounded border border-amber-500/20">
                            <Bell className="size-3" /> 提醒已逾期
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="h-px w-full bg-border/60" />
                
                {/* Category */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">未安排</span>
                    <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground tabular-nums">1</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-muted/40 p-2 -mx-2 rounded-lg transition-colors border border-transparent hover:border-border">
                      <button className="mt-0.5 text-muted-foreground hover:text-emerald-500 transition-colors">
                        <Circle className="size-4" />
                      </button>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[13.5px] font-medium leading-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">Investigate evt_eebdcd0e... tool_call event</span>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono">M/L</span>
                          <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded border border-emerald-500/20 shadow-sm">
                            <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> 进行中
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
            ) : todoView === 'calendar' ? (
              <div className="flex-1 flex flex-col p-4 overflow-hidden bg-background">
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <button className="p-1 rounded-md hover:bg-muted transition-colors">
                    <ChevronLeft className="size-5" />
                  </button>
                  <h3 className="font-medium text-lg">六月 2026</h3>
                  <button className="p-1 rounded-md hover:bg-muted transition-colors">
                    <ChevronRight className="size-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center mb-2 shrink-0">
                  {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                    <div key={day} className="text-xs font-semibold text-muted-foreground py-1">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1 flex-1 overflow-y-auto no-scrollbar">
                  {[
                    [{day: 31, inactive: true}, {day: 1}, {day: 2}, {day: 3}, {day: 4}, {day: 5, highlight: true}, {day: 6}],
                    [{day: 7}, {day: 8}, {day: 9}, {day: 10}, {day: 11}, {day: 12}, {day: 13}],
                    [{day: 14}, {day: 15}, {day: 16}, {day: 17}, {day: 18}, {day: 19}, {day: 20}],
                    [{day: 21}, {day: 22}, {day: 23}, {day: 24}, {day: 25}, {day: 26}, {day: 27}],
                    [{day: 28}, {day: 29}, {day: 30}, {day: 1, inactive: true}, {day: 2, inactive: true}, {day: 3, inactive: true}, {day: 4, inactive: true}],
                  ].flat().map((item, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "p-2 min-h-[80px] rounded-xl border border-transparent transition-colors",
                        item.highlight ? "bg-[#f8f9f0] dark:bg-[#f8f9f0]/10 text-emerald-700 dark:text-emerald-400 font-bold" : "hover:border-border",
                        item.inactive && "text-muted-foreground/40"
                      )}
                    >
                      <div className="text-xs">{item.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
                {/* Header Info */}
                <div className="flex items-center justify-between">
                   <div className="text-[13px] font-bold">Node Monitoring</div>
                   <div className="flex gap-2">
                     <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground"><span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" /> ALL SYSTEMS ONLINE</span>
                   </div>
                </div>

                {/* Core Resources Limit */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} className="bg-card rounded-xl border border-border p-3 flex flex-col gap-2 relative overflow-hidden group cursor-pointer shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-center z-10">
                      <span className="text-[12px] font-medium text-muted-foreground flex items-center gap-1"><Activity className="size-3" /> CPU Load</span>
                      <span className="text-[13px] font-mono font-bold text-foreground">12.4%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex z-10">
                      <motion.div
                        initial={{ width: "2%" }}
                        animate={{ width: ["10%", "25%", "15%", "12.4%"] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="bg-card rounded-xl border border-border p-3 flex flex-col gap-2 relative overflow-hidden group cursor-pointer shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex justify-between items-center z-10">
                      <span className="text-[12px] font-medium text-muted-foreground flex items-center gap-1"><Smartphone className="size-3" /> Memory</span>
                      <span className="text-[13px] font-mono font-bold text-foreground">4.2 GB</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex z-10">
                      <motion.div 
                        initial={{ width: "2%" }}
                        animate={{ width: "42%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-indigo-500" 
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Network Graph */}
                <div className="bg-card rounded-xl border border-border overflow-hidden p-4 relative group">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-[10px] bg-muted px-2 py-1 rounded shadow-sm hover:bg-foreground hover:text-background transition-colors">EXPORT</button>
                  </div>
                  <div className="flex items-center gap-2 mb-6">
                    <Navigation className="size-4 text-emerald-500" />
                    <span className="text-[14px] font-bold">Network Traffic</span>
                    <span className="text-[11px] text-muted-foreground font-mono bg-muted/50 px-1.5 py-0.5 rounded ml-1">US-East-1</span>
                  </div>
                  
                  <div className="relative h-[100px] w-full border-b border-border/50 mb-2 flex items-end justify-between overflow-hidden">
                     <span className="absolute top-0 right-0 text-[10px] text-muted-foreground font-mono">Max: 1.2 Gbps</span>
                     <div className="absolute top-[20px] left-0 right-0 border-t border-dashed border-border/70" />
                     <div className="absolute top-[60px] left-0 right-0 border-t border-dashed border-border/40" />
                     
                     <div className="w-full h-full flex items-end gap-[2px] pt-4 px-1">
                        {Array.from({ length: 45 }).map((_, i) => {
                           const h = 10 + Math.random() * 80;
                           return (
                             <motion.div 
                               key={i}
                               initial={{ height: "0%" }}
                               animate={{ height: `${h}%` }}
                               transition={{ duration: 0.5, delay: i * 0.02 }}
                               className={cn("flex-1 rounded-t-sm opacity-80", h > 70 ? "bg-emerald-400" : "bg-emerald-500/20")}
                             />
                           )
                        })}
                     </div>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>- 60s</span>
                    <span>Now</span>
                  </div>
                </div>

                {/* Cluster Status Nodes */}
                <div className="bg-card rounded-xl border border-border overflow-hidden p-4">
                  <div className="text-[13px] font-bold mb-4">Cluster Status</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-muted/30 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-emerald-500/10 flex flex-col items-center justify-center">
                          <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                        </div>
                        <div>
                          <div className="text-[13px] font-medium text-foreground group-hover:text-emerald-600 transition-colors">Main Data Proxy</div>
                          <div className="text-[11px] text-muted-foreground">Uptime: 99.99% &middot; Latency: 12ms</div>
                        </div>
                      </div>
                      <motion.button whileTap={{ scale: 0.9 }} className="text-[11px] font-medium border border-border bg-background px-3 py-1 rounded shadow-sm hover:border-emerald-500/50 hover:text-emerald-600 transition-colors">Restart</motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-muted/30 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-emerald-500/10 flex flex-col items-center justify-center">
                          <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                        </div>
                        <div>
                          <div className="text-[13px] font-medium text-foreground group-hover:text-emerald-600 transition-colors">Auth Service</div>
                          <div className="text-[11px] text-muted-foreground">Uptime: 99.99% &middot; Latency: 8ms</div>
                        </div>
                      </div>
                      <motion.button whileTap={{ scale: 0.9 }} className="text-[11px] font-medium border border-border bg-background px-3 py-1 rounded shadow-sm hover:border-emerald-500/50 hover:text-emerald-600 transition-colors">Restart</motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between group cursor-pointer p-2 -mx-2 hover:bg-muted/30 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-amber-500/10 flex flex-col items-center justify-center">
                          <span className="size-2 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.5)] animate-pulse" />
                        </div>
                        <div>
                          <div className="text-[13px] font-medium text-foreground group-hover:text-amber-600 transition-colors">Worker Queue</div>
                          <div className="text-[11px] text-amber-600/80">Processing Backlog: 24 items</div>
                        </div>
                      </div>
                      <motion.button whileTap={{ scale: 0.9 }} className="text-[11px] font-medium border border-border bg-background px-3 py-1 rounded shadow-sm hover:border-amber-500/50 hover:text-amber-600 transition-colors">Scale Up</motion.button>
                    </div>
                  </div>
                </div>

                {/* Storage Quota */}
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Inbox className="size-4 text-purple-500" />
                    <span className="text-[14px] font-bold">Storage Volumes</span>
                  </div>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex justify-between text-[12px] mb-1">
                        <span className="font-medium">Primary Block Storage</span>
                        <span className="font-mono text-muted-foreground">420GB / 1TB</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex cursor-pointer group">
                        <motion.div initial={{ width: 0 }} animate={{ width: "42%" }} className="h-full bg-purple-500 group-hover:bg-purple-400 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[12px] mb-1">
                        <span className="font-medium">S3 Object Cache</span>
                        <span className="font-mono text-muted-foreground">1.2TB / 5TB</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex cursor-pointer group">
                        <motion.div initial={{ width: 0 }} animate={{ width: "24%" }} className="h-full bg-sky-500 group-hover:bg-sky-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex gap-2">
                     <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 py-1.5 bg-foreground text-background text-[12px] font-bold rounded-lg shadow-sm">Provision More</motion.button>
                     <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 py-1.5 bg-muted text-foreground text-[12px] font-bold rounded-lg border border-border shadow-sm">Cleanup Logs</motion.button>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Resizer Handle */}
        <div className="w-2 shrink-0 flex items-center justify-center cursor-col-resize group h-full">
           <div className="h-6 w-1 rounded-full bg-border group-hover:bg-primary/50 transition-colors" />
        </div>

        {/* Right Column: Main Workspace Area (65%) */}
        <div className="flex flex-col flex-1 h-full pl-1 gap-2 py-2">
          
          {/* Top: Unified Workspace View */}
          <div className="flex-[7.5] bg-card border border-border rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col relative group/panel">
            <div className="flex h-12 items-center justify-between border-b border-border px-5 bg-muted/10 shrink-0 backdrop-blur-md sticky top-0 z-10 w-full overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-5 h-full pt-1 shrink-0">
                 <div className="flex items-center gap-2 pr-4 border-r border-border/50 text-foreground font-bold tracking-tight">
                   <Activity className="size-4 text-emerald-500" /> 动态统计
                 </div>
                 <button 
                   onClick={() => setActiveTab('screenings')}
                   className={cn("h-full flex items-center gap-1.5 text-[14px] relative tracking-wide transition-colors", activeTab === 'screenings' ? "font-bold text-primary border-b-2 border-primary" : "font-medium text-muted-foreground hover:text-foreground border-b-2 border-transparent")}>
                   <Film className="size-4" /> 放映会控制
                 </button>
                 <button 
                   onClick={() => setActiveTab('games')}
                   className={cn("h-full flex items-center gap-1.5 text-[14px] relative tracking-wide transition-colors", activeTab === 'games' ? "font-bold text-primary border-b-2 border-primary" : "font-medium text-muted-foreground hover:text-foreground border-b-2 border-transparent")}>
                   <Gamepad2 className="size-4" /> 游戏回控制
                 </button>
                 <button 
                   onClick={() => setActiveTab('plaza')}
                   className={cn("h-full flex items-center gap-1.5 text-[14px] relative tracking-wide transition-colors", activeTab === 'plaza' ? "font-bold text-primary border-b-2 border-primary" : "font-medium text-muted-foreground hover:text-foreground border-b-2 border-transparent")}>
                   <Image className="size-4" /> 图库中心控制
                 </button>
              </div>
              <button className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#f4fce3] dark:bg-[#84cc16]/10 text-[#65a30d] dark:text-[#a3e635] border border-[#d9f99d] dark:border-[#84cc16]/20 hover:shadow-md transition-colors shadow-sm relative overflow-hidden group shrink-0">
                 <Volume2 className="size-3.5 relative z-10" />
                 <span className="relative z-10 tracking-wider">服务器状态</span>
                 <span className="bg-[#84cc16] text-white size-[18px] rounded-full flex items-center justify-center text-[10px] ml-1 relative z-10 shadow-inner">OK</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto no-scrollbar p-6 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02)_10%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_10%,transparent_70%)]">
               
               <AnimatePresence mode="wait">
                  {activeTab === 'screenings' && (
                    <motion.div 
                      key="screenings"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 max-w-5xl mx-auto"
                    >
                       {/* Header Bar */}
                       <div className="flex items-center justify-between">
                         <div>
                            <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                              <Film className="size-6 text-emerald-500" /> 放映会中心
                            </h2>
                            <p className="text-sm text-muted-foreground mt-1">同步控制大屏播放与观众互动</p>
                         </div>
                         <div className="flex items-center gap-3">
                           <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 shadow-sm text-sm font-medium">
                             <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                             <span className="text-emerald-600 dark:text-emerald-400">大屏在线</span>
                           </div>
                           <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 text-sm font-bold rounded-lg shadow-sm hover:scale-105 transition-transform active:scale-95">
                             <Airplay className="size-4" /> 投射新流
                           </button>
                         </div>
                       </div>

                       <div className="grid grid-cols-12 gap-6">
                         {/* Main Player Control Panel (Left Side) - 8 cols */}
                         <div className="col-span-12 xl:col-span-8 space-y-6">
                           
                           {/* Now Playing Card */}
                           <div className="bg-card border border-border shadow-md rounded-2xl overflow-hidden relative group">
                             {/* Background blur image effect */}
                             <div className="absolute inset-0 z-0">
                               <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Poster blur" className="w-full h-full object-cover opacity-20 dark:opacity-10 scale-110 blur-xl" />
                               <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                             </div>
                             
                             <div className="relative z-10 p-6 flex flex-col sm:flex-row gap-6">
                               <div className="shrink-0 group/cover relative rounded-lg overflow-hidden border border-border shadow-md h-40 w-28 sm:h-48 sm:w-36 transition-transform duration-300 hover:scale-105">
                                 <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Movie Poster" className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center justify-center">
                                   <button className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full transition-colors text-white">
                                     <Pencil className="size-4" />
                                   </button>
                                 </div>
                               </div>
                               
                               <div className="flex flex-col flex-1 py-1">
                                 <div className="flex items-center gap-2 mb-2">
                                   <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">正在直播</span>
                                   <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-muted text-muted-foreground border border-border flex items-center gap-1">
                                     <Users className="size-3" /> 1,248 观众
                                   </span>
                                 </div>
                                 <h3 className="text-2xl font-bold tracking-tight text-foreground line-clamp-1">楚门的世界</h3>
                                 <p className="text-sm text-muted-foreground mt-1 line-clamp-2">The Truman Show (1998) · 剧情 / 科幻</p>
                                 
                                 <div className="mt-auto pt-4">
                                   <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-1.5">
                                     <span>01:24:15</span>
                                     <span>01:43:00</span>
                                   </div>
                                   <div className="h-1.5 w-full bg-muted overflow-hidden flex rounded-full cursor-pointer group/progress relative">
                                     <div className="absolute inset-0 bg-border/40 opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                                     <motion.div 
                                       className="h-full bg-emerald-500 relative" 
                                       animate={{ width: ["80%", "81%"] }}
                                       transition={{ duration: 10, ease: "linear" }}
                                     >
                                       <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-background border-[2px] border-emerald-500 rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-sm" />
                                     </motion.div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                             
                             {/* Media Controls Toolbar */}
                             <div className="relative z-10 bg-muted/30 border-t border-border backdrop-blur-md px-6 py-3 flex items-center justify-between">
                               <div className="flex items-center gap-2">
                                 <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"><VolumeX className="size-4" /></button>
                                 <div className="w-24 h-1.5 bg-border rounded-full overflow-hidden flex cursor-pointer group/vol">
                                   <div className="h-full bg-foreground w-[65%] group-hover/vol:bg-primary transition-colors" />
                                 </div>
                               </div>
                               
                               <div className="flex items-center gap-4">
                                 <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"><Rewind className="size-5" /></button>
                                 <button className="flex items-center justify-center size-10 bg-foreground text-background hover:scale-105 active:scale-95 rounded-full transition-all shadow-md">
                                   <Pause className="size-4 fill-background" />
                                 </button>
                                 <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"><FastForward className="size-5" /></button>
                               </div>
                               
                               <div className="flex items-center gap-2">
                                 <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"><Tv className="size-4" /></button>
                                 <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"><Maximize className="size-4" /></button>
                               </div>
                             </div>
                           </div>
                           
                           {/* Stats Row */}
                           <div className="grid grid-cols-3 gap-4">
                              <div className="p-4 bg-background border border-border rounded-xl shadow-sm hover:border-border/80 transition-colors flex flex-col gap-1">
                                <div className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"><Users className="size-3.5" /> 在线观众峰值</div>
                                <div className="text-2xl font-bold text-foreground">3,892</div>
                                <div className="text-[10px] text-emerald-500 font-medium mt-1">+14% 较上一场</div>
                              </div>
                              <div className="p-4 bg-background border border-border rounded-xl shadow-sm hover:border-border/80 transition-colors flex flex-col gap-1">
                                <div className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"><MessageCircle className="size-3.5" /> 弹幕数量</div>
                                <div className="text-2xl font-bold text-foreground">12.4k</div>
                                <div className="text-[10px] text-emerald-500 font-medium mt-1">热度极高 🚀</div>
                              </div>
                              <div className="p-4 bg-background border border-border rounded-xl shadow-sm hover:border-border/80 transition-colors flex flex-col gap-1">
                                <div className="text-xs font-medium text-muted-foreground flex items-center gap-1.5"><Heart className="size-3.5" /> 观众好评率</div>
                                <div className="text-2xl font-bold text-foreground">98.2%</div>
                                <div className="text-[10px] text-muted-foreground mt-1.5 w-full bg-border rounded-full h-1 overflow-hidden">
                                  <div className="h-full border-emerald-500 bg-emerald-500 w-[98.2%]" />
                                </div>
                              </div>
                           </div>
                         </div>
                         
                         {/* Sidebar (Right Side) - 4 cols */}
                         <div className="col-span-12 xl:col-span-4 space-y-6">
                           
                           {/* Quick Actions */}
                           <div className="bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col gap-2">
                             <button className="w-full flex items-center justify-between p-3 bg-muted/40 hover:bg-muted border border-border/50 rounded-lg transition-colors group">
                               <div className="flex items-center gap-2.5 text-sm font-medium">
                                 <div className="p-1.5 bg-blue-500/10 text-blue-500 rounded"><Share2 className="size-4" /></div>
                                 获取分享链接
                               </div>
                               <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                             </button>
                             <button className="w-full flex items-center justify-between p-3 bg-muted/40 hover:bg-muted border border-border/50 rounded-lg transition-colors group">
                               <div className="flex items-center gap-2.5 text-sm font-medium">
                                 <div className="p-1.5 bg-amber-500/10 text-amber-500 rounded"><MessageCircle className="size-4" /></div>
                                 管理弹幕黑名单
                               </div>
                               <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                             </button>
                             <button className="w-full flex items-center justify-between p-3 bg-muted/40 hover:bg-muted border border-border/50 rounded-lg transition-colors group">
                               <div className="flex items-center gap-2.5 text-sm font-medium">
                                 <div className="p-1.5 bg-purple-500/10 text-purple-500 rounded"><Settings className="size-4" /></div>
                                 高级排播设置
                               </div>
                               <ChevronRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                             </button>
                           </div>

                           {/* Up Next Queue */}
                           <div className="bg-card border border-border shadow-sm rounded-xl overflow-hidden flex flex-col">
                             <div className="p-4 border-b border-border/50 flex justify-between items-center bg-muted/10">
                               <h3 className="font-bold text-sm tracking-tight flex items-center gap-2">
                                 <List className="size-4 text-muted-foreground" /> 接下来播放
                               </h3>
                               <button className="text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 px-2 py-1 rounded hover:bg-emerald-500/10 transition-colors">
                                 编辑列表
                               </button>
                             </div>
                             
                             <div className="p-2 space-y-1">
                               {[
                                 { title: "星际穿越", time: "18:00", duration: "169 min", type: "科幻" },
                                 { title: "教父", time: "21:30", duration: "175 min", type: "犯罪" },
                                 { title: "千与千寻", time: "次日 14:00", duration: "125 min", type: "动画" },
                               ].map((movie, i) => (
                                 <div key={i} className="flex items-center gap-3 p-2.5 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer group">
                                   <div className="text-[10px] font-mono text-muted-foreground font-medium w-10 text-center shrink-0 group-hover:text-foreground transition-colors">{movie.time}</div>
                                   <div className="w-[3px] h-8 rounded-full bg-border group-hover:bg-primary transition-colors shrink-0" />
                                   <div className="flex-1 min-w-0">
                                     <div className="font-bold text-sm text-foreground truncate">{movie.title}</div>
                                     <div className="text-[11px] text-muted-foreground flex gap-2 mt-0.5">
                                       <span>{movie.duration}</span>
                                       <span>&middot;</span>
                                       <span>{movie.type}</span>
                                     </div>
                                   </div>
                                 </div>
                               ))}
                               
                               <button className="w-full mt-2 py-2.5 text-[12px] font-bold text-muted-foreground border border-dashed border-border hover:border-foreground hover:text-foreground rounded-lg transition-colors flex justify-center items-center gap-1.5 focus:outline-none">
                                 <Plus className="size-3.5" /> 添加放映计划
                               </button>
                             </div>
                           </div>
                           
                         </div>
                       </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'games' && (
                    <motion.div 
                      key="games"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 max-w-4xl mx-auto"
                    >
                       <div className="grid grid-cols-3 gap-4">
                          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-emerald-800 dark:text-emerald-400 mb-1">进行中游戏</div>
                            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-500">2</div>
                          </div>
                          <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-muted-foreground mb-1">日均游玩时数</div>
                            <div className="text-3xl font-black text-foreground">4.5h</div>
                          </div>
                          <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-muted-foreground mb-1">连通器延迟</div>
                            <div className="text-3xl font-black text-amber-500">24ms</div>
                          </div>
                       </div>
                       <div className="bg-background border border-border rounded-xl p-5 shadow-sm space-y-4">
                          <h3 className="font-bold text-lg flex items-center gap-2"><Gamepad2 className="size-5" /> 游戏状态接口设定</h3>
                          <p className="text-sm text-muted-foreground">配置 Steam / Epic 账号抓取连接池或手动更新当前游玩状态图表。</p>
                          <div className="flex gap-3">
                             <button className="bg-muted hover:bg-black/5 dark:hover:bg-white/5 border border-border px-4 py-2 rounded-md text-sm font-medium transition-colors">
                               重新同步 Steam
                             </button>
                             <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-bold shadow-sm transition-colors">
                               添加自定义记录
                             </button>
                          </div>
                       </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'plaza' && (
                    <motion.div 
                      key="plaza"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6 max-w-4xl mx-auto"
                    >
                       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-muted-foreground mb-1">图片总数</div>
                            <div className="text-3xl font-black text-foreground">2,408</div>
                          </div>
                          <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-muted-foreground mb-1">未审核稿件</div>
                            <div className="text-3xl font-black text-red-500">12</div>
                          </div>
                          <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-muted-foreground mb-1">总浏览量</div>
                            <div className="text-3xl font-black text-foreground">14.2k</div>
                          </div>
                          <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
                            <div className="text-sm font-medium text-muted-foreground mb-1">服务器存储</div>
                            <div className="text-3xl font-black text-foreground">1.2 TB</div>
                          </div>
                       </div>
                       
                       <div className="bg-background border border-border rounded-xl p-5 shadow-sm">
                          <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Inbox className="size-5" /> 待处理投稿队列</h3>
                          <div className="text-center py-10 bg-muted/20 border border-dashed border-border rounded-lg">
                             <div className="size-12 bg-muted/50 rounded-full mx-auto flex items-center justify-center mb-3">
                               <Image className="size-6 text-muted-foreground/50" />
                             </div>
                             <p className="text-sm font-medium text-muted-foreground">处理积压的社区图库上传与打回</p>
                             <button className="mt-4 px-4 py-2 bg-background border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors shadow-sm">
                               开始去重扫描
                             </button>
                          </div>
                       </div>
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </div>

          {/* Bottom: Timeline Grid */}
          <div className="flex-[2.5] bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col relative group/panel hover:shadow-md transition-shadow">
            <div className="flex h-[42px] items-center justify-between px-5 border-b border-border bg-muted/10 shrink-0">
               <span className="text-[13px] font-bold text-muted-foreground tracking-wide">时间轴</span>
               <div className="flex items-center gap-3.5 text-muted-foreground/80">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 border border-border font-medium shadow-sm">3m</span>
                  <Navigation className="size-4 hover:text-foreground cursor-pointer -rotate-45 transition-colors" />
                  <div className="w-px h-3.5 bg-border" />
                  <Pause className="size-[14px] fill-current hover:text-foreground cursor-pointer transition-colors" />
                  <Settings className="size-[15px] hover:text-foreground cursor-pointer transition-colors" />
                  <X className="size-4 hover:text-foreground cursor-pointer transition-colors" />
               </div>
            </div>
            
            <div className="flex-1 relative flex flex-col px-6 pb-3 pt-6 overflow-hidden">
               <div className="flex-1 relative w-full border-b border-border/80 overflow-hidden flex items-end">
                 
                 {/* Moving Data Activity Elements */}
                 <div className="absolute inset-y-0 right-[22%] left-0 overflow-hidden pointer-events-none">
                    <motion.div 
                      animate={{ x: ["0%", "-100%"] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 left-0 flex items-end gap-[2px]"
                      style={{ width: "200%" }}
                    >
                      {/* Abstract activity bars */}
                      {Array.from({ length: 150 }).map((_, i) => {
                        const height = 5 + Math.random() * 80;
                        const isHigh = height > 60;
                        return (
                          <div key={i} className="flex flex-col items-center justify-end shrink-0 w-1.5 h-full opacity-60">
                            <div 
                              className={cn("w-1 rounded-sm transition-colors", isHigh ? "bg-[#84cc16]/80" : "bg-muted-foreground/30")} 
                              style={{ height: `${height}%` }}
                            />
                          </div>
                        );
                      })}
                    </motion.div>
                    
                    {/* Floating Event Nodes */}
                    <motion.div
                      animate={{ x: ["0%", "-100%"] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/4 left-0 flex gap-12 text-xs font-semibold"
                      style={{ width: "200%" }}
                    >
                       <div className="px-2 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">任务更新: 视觉调整</div>
                       <div className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">系统快照备份</div>
                       <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm flex items-center gap-1.5"><Circle className="size-2 fill-emerald-500" /> 用户操作检测</div>
                       <div className="px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">组件渲染完毕</div>
                       
                       {/* Duplicate for infinite scroll */}
                       <div className="px-2 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">任务更新: 视觉调整</div>
                       <div className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">系统快照备份</div>
                       <div className="px-2 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm flex items-center gap-1.5"><Circle className="size-2 fill-emerald-500" /> 用户操作检测</div>
                       <div className="px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 rounded-md whitespace-nowrap shadow-sm backdrop-blur-sm">组件渲染完毕</div>
                    </motion.div>
                 </div>

                 {/* Current Time marker (Olive Line) */}
                 <div className="absolute top-0 bottom-0 right-[22%] w-[1.5px] bg-[#84cc16] group/marker cursor-pointer z-10 shadow-[0_0_4px_rgba(132,204,22,0.3)]">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 8px rgba(132,204,22,0.4)", "0 0 12px rgba(132,204,22,0.8)", "0 0 8px rgba(132,204,22,0.4)"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-1.5 -translate-x-[calc(50%-0.75px)] size-[10px] rounded-full bg-[#84cc16] ring-[3px] ring-background shadow-[0_0_8px_rgba(132,204,22,0.6)] origin-center" 
                    />
                    <motion.div 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 right-0 h-full w-48 bg-gradient-to-r from-transparent to-[#84cc16]/10 -translate-x-full pointer-events-none" 
                    />
                 </div>
                 
                 {/* Faint Grid Lines */}
                 <div className="absolute inset-0 flex justify-between pr-[22%] pointer-events-none">
                    <div className="w-px h-full bg-border/40" />
                    <div className="w-px h-full bg-border/40" />
                    <div className="w-px h-full bg-border/40" />
                    <div className="w-px h-full bg-border/40" />
                 </div>
               </div>
               <div className="flex justify-between items-center pt-2.5 text-[10.5px] font-mono font-bold text-muted-foreground/80 tracking-wider">
                  <span className="flex-1 text-left relative -left-1">7:09</span>
                  <span className="flex-1 text-center -translate-x-6">17:10</span>
                  <span className="flex-1 text-right relative -right-1 pr-[22%]">17:11</span>
               </div>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Floating Bottom Right Action Bar */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 flex items-center bg-background/95 backdrop-blur-xl border border-border rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
      >
        <button className="flex items-center justify-center py-1.5 px-3 hover:bg-[#84cc16]/10 dark:hover:bg-[#84cc16]/20 rounded-full transition-colors group">
          <Sparkles className="size-4 text-[#84cc16] fill-[#84cc16]/20 group-hover:scale-110 transition-transform" />
        </button>
        <div className="w-px h-5 bg-border/80 mx-1" />
        <button className="flex items-center justify-center size-9 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
          <Navigation className="size-[18px] rotate-45" strokeWidth={2} />
        </button>
        <button className="flex items-center justify-center size-9 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
          <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21v-5h5" /></svg>
        </button>
        <button className="flex items-center justify-center size-9 hover:bg-muted rounded-full transition-colors text-[13px] font-bold text-foreground font-mono">
          Ai
        </button>
      </motion.div>

      {/* Settings Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end isolate">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSettingsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            />
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md bg-card border-l border-border/80 shadow-[-20px_0_60px_rgba(0,0,0,0.15)] h-screen overflow-hidden flex flex-col z-10"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
                <h2 className="text-xl font-bold tracking-tight">设置</h2>
                <button onClick={() => setIsSettingsOpen(false)} className="p-1 hover:bg-muted-foreground/10 rounded-full transition-colors text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar bg-card/50">
                {/* Profile Card */}
                <div className="bg-background border border-border/60 rounded-xl p-5 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-3 right-3 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#7c5cdb] text-white flex items-center justify-center text-3xl font-medium mb-3 shadow-sm border-2 border-background">
                      S
                    </div>
                    <h3 className="text-lg font-bold">Stephano Avrohom</h3>
                    
                    <div className="mt-4 w-full bg-[#f8f9e6] dark:bg-[#eaf1c9]/10 rounded-lg p-3 flex justify-between items-center sm:text-sm text-xs border border-[#eaf1c9] dark:border-[#eaf1c9]/20 shadow-inner">
                      <span className="font-bold text-[#8db33a] dark:text-[#aee041]">免费版</span>
                      <span className="text-muted-foreground font-medium flex items-center cursor-pointer hover:text-foreground transition-colors">方案与充值</span>
                    </div>
                  </div>
                </div>

                {/* Appearance */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs font-semibold text-muted-foreground">外观</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <div className="p-1 bg-muted/40 border border-border/60 rounded-xl flex items-center shadow-inner">
                    <button onClick={theme !== 'light' ? toggleTheme : undefined} className={cn("flex-1 py-2 rounded-lg text-sm font-medium flex justify-center items-center gap-2 transition-all", theme === 'light' ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground")}>
                      <Sun className="w-4 h-4" /> 浅色
                    </button>
                    <button onClick={theme !== 'dark' ? toggleTheme : undefined} className={cn("flex-1 py-2 rounded-lg text-sm font-medium flex justify-center items-center gap-2 transition-all", theme === 'dark' ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground")}>
                      <Moon className="w-4 h-4" /> 深色
                    </button>
                    <button className="flex-1 py-2 rounded-lg text-sm font-medium flex justify-center items-center gap-2 text-muted-foreground hover:text-foreground transition-all">
                      <Monitor className="w-4 h-4" /> 跟随系统
                    </button>
                  </div>
                  
                  <div className="space-y-1 mt-3">
                    <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-500 rounded-lg"><Palette className="w-4 h-4" /></div>
                        <div>
                          <div className="text-[14px] font-bold">界面设置</div>
                          <div className="text-[12px] text-muted-foreground">可选择头像取色，或使用自定义流态色板。</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 rounded-lg"><Smartphone className="w-4 h-4" /></div>
                        <div>
                          <div className="text-[14px] font-bold">触觉反馈</div>
                          <div className="text-[12px] text-muted-foreground">交互时提供振动反馈</div>
                        </div>
                      </div>
                      <div className="w-10 h-6 bg-[#afc33a] rounded-full p-1 shadow-inner flex items-center justify-end">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Language */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs font-semibold text-muted-foreground">语言</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <div className="p-1 bg-muted/40 border border-border/60 rounded-xl flex items-center shadow-inner">
                    <button className={cn("flex-1 py-2 text-sm font-medium transition-all rounded-lg", language === 'en' ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground")} onClick={() => language !== 'en' && toggleLanguage()}>
                      English
                    </button>
                    <button className={cn("flex-1 py-2 text-sm font-medium transition-all rounded-lg", language === 'zh' ? "bg-background shadow text-foreground font-bold" : "text-muted-foreground hover:text-foreground")} onClick={() => language !== 'zh' && toggleLanguage()}>
                      中文
                    </button>
                    <button className={cn("flex-1 py-2 text-sm font-medium transition-all rounded-lg", language === 'ja' ? "bg-background shadow text-foreground" : "text-muted-foreground hover:text-foreground")} onClick={() => language !== 'ja' && toggleLanguage()}>
                      日本語
                    </button>
                  </div>
                </div>

                {/* Account */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs font-semibold text-muted-foreground">账号</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 dark:bg-orange-900/20 text-orange-500 rounded-lg"><Key className="w-4 h-4" /></div>
                        <div>
                          <div className="text-[14px] font-bold">API Key 设置</div>
                          <div className="text-[12px] text-muted-foreground">未配置</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg"><BarChart2 className="w-4 h-4" /></div>
                        <div>
                          <div className="text-[14px] font-bold">使用统计</div>
                          <div className="text-[12px] text-muted-foreground">查看 Token 使用量和成本</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Rewards */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs font-semibold text-muted-foreground">奖励</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-lg"><Gift className="w-4 h-4" /></div>
                        <div>
                          <div className="text-[14px] font-bold">邀请与推广</div>
                          <div className="text-[12px] text-muted-foreground">邀请与推广统一累计到每月 Growth Pass</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#8bc34a]/10 text-[#8bc34a] rounded-lg"><Trophy className="w-4 h-4" /></div>
                        <div>
                          <div className="text-[14px] font-bold">奖励任务</div>
                          <div className="text-[12px] text-muted-foreground">完成任务，赚取奖励</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                    </div>
                  </div>
                </div>
                
                {/* Notification */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs font-semibold text-muted-foreground">通知</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#e8f5e9] dark:bg-[#2e7d32]/20 text-[#4caf50] rounded-lg"><Bell className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[14px] font-bold">通知</div>
                        <div className="text-[12px] text-muted-foreground">消息与奖励的系统推送</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                  </div>
                </div>

                {/* Guide */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-px h-3 bg-border" />
                    <span className="text-xs font-semibold text-muted-foreground">引导</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                  <div className="flex items-center justify-between p-3.5 bg-background border border-border/60 rounded-xl hover:bg-muted/30 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-500 rounded-lg"><GraduationCap className="w-4 h-4" /></div>
                      <div>
                        <div className="text-[14px] font-bold">引导与新手教程</div>
                        <div className="text-[12px] text-muted-foreground">管理引导、提示和新功能指示器</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
                  </div>
                </div>

              </div>
              
              <div className="px-6 py-4 border-t border-border/50 bg-background flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold text-muted-foreground">社区与反馈</span>
                  <div className="flex-1 h-px bg-border/50" />
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1.5 flex justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors"><Settings className="w-4 h-4" /></button>
                  <button className="flex-1 py-1.5 flex justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors"><Navigation className="w-4 h-4 rotate-45" /></button>
                  <button className="flex-1 py-1.5 flex justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors"><Languages className="w-4 h-4" /></button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
