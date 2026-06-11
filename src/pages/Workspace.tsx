import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Bell, MoreVertical, LayoutDashboard, Calendar as CalendarIcon, 
  CheckSquare, Activity, ShieldAlert, MessageSquare, StickyNote,
  Plus, MoreHorizontal, MessageCircle, ChevronDown, Bot, Settings,
  Home, Film, Video, Gamepad2, User, Check
} from "lucide-react";
import { cn } from "../lib/utils";

// --- Mock Data ---

type Task = {
  id: string;
  titleElements: { text: string; highlight?: string }[];
  source: string;
  dueDate: string;
  status: '待办' | '进行中' | '已完成';
  originalStatus?: '待办' | '进行中' | '已完成';
};

const initialTasks: Task[] = [
  { 
    id: '1', 
    titleElements: [{text: '偿还 '}, {text: 'AMEX', highlight: 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-900 dark:text-indigo-200'}, {text: ' 信用卡'}], 
    source: 'Gmail', 
    dueDate: '今天到期, 11:59 PM', 
    status: '待办' 
  },
  { 
    id: '2', 
    titleElements: [{text: '发送提案给 '}, {text: 'Martin', highlight: 'bg-amber-200 dark:bg-amber-900/50 text-amber-900 dark:text-amber-200'}], 
    source: 'Slack', 
    dueDate: '今天 3:00PM 前', 
    status: '进行中' 
  },
  { 
    id: '3', 
    titleElements: [{text: '与 '}, {text: 'Sherry', highlight: 'bg-emerald-200 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200'}, {text: ' 共进晚餐'}], 
    source: 'Calendar', 
    dueDate: '今晚, 7:00 PM', 
    status: '待办' 
  },
];

type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
  color: 'green' | 'purple' | 'orange' | 'blue';
};

const mockNotes: Note[] = [
  { id: '1', title: 'Homepage rework', content: 'Need to improve transition effects on hero banner. Update tagline for new AI features. Fix mobile padding.', date: 'Jun 10, 2026', color: 'green' },
  { id: '2', title: 'Timeline concept', content: 'The new timeline should include filters for achievements, projects, and work history. Add interactive bento grid.', date: 'Jun 09, 2026', color: 'purple' },
];

export function Workspace() {
  const [activeTab, setActiveTab] = useState<'全部任务' | '待办' | '进行中' | '已完成'>('全部任务');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  
  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        const isCurrentlyCompleted = task.status === '已完成';
        return {
          ...task,
          status: isCurrentlyCompleted ? (task.originalStatus || '待办') : '已完成',
          originalStatus: isCurrentlyCompleted ? task.originalStatus : task.status
        };
      }
      return task;
    }));
  };
  
  const filteredTasks = tasks.filter(t => activeTab === '全部任务' || t.status === activeTab);
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.status === '已完成' && b.status !== '已完成') return 1;
    if (a.status !== '已完成' && b.status === '已完成') return -1;
    return 0;
  });

  return (
    <div className="flex w-full h-full min-h-screen bg-slate-200/50 dark:bg-zinc-950 p-2 sm:p-4 md:p-6 overflow-hidden text-foreground font-sans selection:bg-primary/20">
      
      {/* Outer App Container */}
      <div className="w-full h-full max-w-[1600px] mx-auto bg-[#fbfaf8] dark:bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] shadow-xl flex flex-col lg:flex-row overflow-hidden border border-border/50 relative p-4 md:p-6 gap-6">
        
        {/* --- Left & Middle Half --- */}
        <div className="flex flex-1 flex-col md:flex-row gap-6 min-w-0 h-full">
          
          {/* --- Sidebar --- */}
          <div className="hidden md:flex flex-col w-[220px] bg-card border border-border/30 shadow-sm rounded-[2rem] h-full py-8 px-5 overflow-y-auto no-scrollbar relative shrink-0">
          <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer group">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md group-hover:scale-105 transition-transform">
               <Bot className="size-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">工作室</span>
          </div>

          <div className="flex flex-col gap-2 relative z-10 w-full mb-auto">
            <SidebarItem href="#" icon={<Home className="size-5" />} label="主页" />
            <SidebarItem href="#timeline" icon={<CalendarIcon className="size-5" />} label="时间线" />
            <SidebarItem href="#screenings" icon={<Video className="size-5" />} label="放映会" />
            <SidebarItem href="#plaza" icon={<MessageSquare className="size-5" />} label="广场" />
            <SidebarItem href="#gaming" icon={<Gamepad2 className="size-5" />} label="游戏" />
            <SidebarItem href="#aibot" icon={<Bot className="size-5" />} label="AI 助手" badge={12} />
            <div className="h-4" />
            <SidebarItem href="#workspace" icon={<LayoutDashboard className="size-5" />} label="工作台" active />
            <SidebarItem href="#about" icon={<User className="size-5" />} label="关于" />
          </div>
          
          <div className="mt-8 relative z-10">
             <SidebarItem icon={<Settings className="size-5" />} label="设置" />
          </div>
        </div>

        {/* --- Middle Column (Tasks) --- */}
          <div className="flex flex-col flex-1 min-w-0 h-full gap-6">
             
             {/* Top Utility Bar */}
             <div className="flex items-center gap-3 flex-wrap">
               <button className="size-12 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center shadow-sm hover:scale-105 transition-transform shrink-0">
                 <Search className="size-5" />
               </button>
               <button className="size-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform shrink-0">
                 <Bell className="size-5" />
               </button>
               <button className="flex-1 min-w-[200px] h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-between px-2 sm:px-4 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3 truncate">
                   <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin" className="size-8 rounded-full bg-secondary shrink-0" alt="Avatar" />
                   <div className="flex flex-col text-left truncate">
                     <span className="text-[13px] font-bold leading-none mb-1 text-foreground truncate">管理员</span>
                     <span className="text-[11px] text-muted-foreground font-medium leading-none">系统负责人</span>
                   </div>
                 </div>
                 <ChevronDown className="size-4 text-muted-foreground shrink-0 mx-1" />
               </button>
               <button className="size-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow shrink-0 text-muted-foreground hover:text-foreground">
                 <MoreVertical className="size-5" />
               </button>
             </div>

             {/* Tasks Section */}
             <div className="flex flex-col min-h-0 bg-card rounded-[2rem] shadow-sm border border-border/30 overflow-hidden p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 shrink-0 mt-2 lg:mt-0">
                   <h2 className="text-3xl font-bold tracking-tight text-foreground">我的任务</h2>
                   <button className="size-10 rounded-2xl border-2 border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
                     <Plus className="size-5" />
                   </button>
                </div>
                
                {/* Tabs */}
                <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-2 shrink-0">
                   {(['全部任务', '待办', '进行中', '已完成'] as const).map(tab => (
                     <button
                       key={tab}
                       onClick={() => setActiveTab(tab)}
                       className={cn("px-4 py-2 rounded-2xl text-[13px] font-bold whitespace-nowrap transition-colors",
                          activeTab === tab 
                          ? "bg-foreground text-background shadow-md" 
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                       )}
                     >
                       {tab}
                     </button>
                   ))}
                </div>

                {/* Task List */}
                <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pr-1 pb-4">
                  <AnimatePresence mode="popLayout">
                  {sortedTasks.map((task, i) => {
                    const isCompleted = task.status === '已完成';
                    return (
                    <motion.div 
                      layout
                      onClick={() => toggleTask(task.id)}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: isCompleted ? 0.6 : 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        opacity: { duration: 0.4 },
                        layout: { type: "spring", stiffness: 100, damping: 14, mass: 1 }
                      }}
                      key={task.id} 
                      className={cn(
                        "bg-background dark:bg-zinc-800/80 rounded-[1.5rem] p-4 sm:p-5 border shadow-sm transition-all group flex items-start sm:items-center gap-4 cursor-pointer",
                        isCompleted ? "border-transparent bg-muted/30" : "border-border/50 hover:shadow-md"
                      )}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded-[0.5rem] border-[2px] shrink-0 mt-1 sm:mt-0 transition-all duration-500 flex items-center justify-center",
                        isCompleted 
                          ? "bg-foreground border-foreground text-background scale-95" 
                          : "border-foreground group-hover:border-primary text-transparent bg-transparent"
                      )}>
                        <motion.div
                          initial={false}
                          animate={{ scale: isCompleted ? 1 : 0.5, opacity: isCompleted ? 1 : 0 }}
                          transition={{ type: 'spring', stiffness: 100, damping: 14, mass: 1 }}
                        >
                          <Check className="size-3.5 stroke-[3]" />
                        </motion.div>
                      </div>
                      <div className="flex flex-col gap-1.5 min-w-0 transition-opacity">
                        <h3 className={cn(
                          "font-bold text-[17px] leading-tight flex items-center flex-wrap gap-1 transition-all duration-500",
                          isCompleted ? "text-muted-foreground line-through decoration-muted-foreground/50" : "text-foreground group-hover:text-primary"
                        )}>
                          {task.titleElements.map((el, idx) => (
                            <span key={idx} className={cn(
                              "transition-colors duration-500",
                              el.highlight && !isCompleted && `px-1.5 py-0.5 rounded bg-opacity-80 dark:bg-opacity-50 inline-flex items-center justify-center leading-none ${el.highlight}`,
                              el.highlight && isCompleted && "px-1.5 py-0.5 rounded bg-muted text-muted-foreground inline-flex items-center justify-center leading-none"
                            )}>
                              {el.text}
                            </span>
                          ))}
                          {isCompleted && (
                            <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 no-underline inline-block align-middle transition-all shrink-0">
                              已完成
                            </span>
                          )}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className={cn(
                            "text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 transition-colors duration-500",
                            isCompleted ? "bg-muted text-muted-foreground" : "bg-[#111] dark:bg-zinc-950 text-white"
                          )}>
                            {task.source}
                          </span>
                          <span className={cn(
                            "text-[13px] font-bold truncate transition-colors duration-500",
                            isCompleted ? "text-muted-foreground/60" : "text-foreground/70"
                          )}>
                            {task.dueDate}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )})}
                  </AnimatePresence>
                  {filteredTasks.length === 0 && (
                     <div className="text-center py-10 text-muted-foreground text-sm font-bold">没有满足条件的任务。</div>
                  )}
                </div>
             </div>
          </div>
        </div>

        {/* --- Right Half (Notes & Schedule) --- */}
        <div className="flex flex-col flex-1 h-full gap-6 min-w-0">
             
             {/* Notes Section */}
             <div className="flex flex-col shrink-0 relative">
               <div className="flex items-center justify-between mb-4 lg:mb-6 pl-1 pr-2">
                   <h2 className="text-3xl font-bold tracking-tight text-foreground">我的笔记</h2>
                   <button className="size-10 rounded-2xl bg-card border border-border/30 flex items-center justify-center text-muted-foreground hover:shadow-md transition-shadow shadow-sm">
                     <Plus className="size-5" />
                   </button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {mockNotes.map((note) => (
                   <motion.div 
                     whileHover={{ scale: 1.02 }}
                     key={note.id} 
                     className={cn("rounded-[2rem] p-6 lg:p-8 flex flex-col relative overflow-hidden group cursor-pointer shadow-sm md:min-h-[220px]", 
                       note.color === 'green' ? "bg-emerald-200 text-emerald-900" : "bg-primary text-primary-foreground"
                     )}
                   >
                     <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-xl leading-tight pr-4">{note.title}</h3>
                       <button className={cn("p-1.5 rounded-full shrink-0 transition-colors opacity-70 group-hover:opacity-100", 
                         note.color === 'green' ? "hover:bg-emerald-300" : "hover:bg-white/20"
                       )}>
                         <MoreHorizontal className="size-5" />
                       </button>
                     </div>
                     <p className="text-[14px] leading-relaxed mb-6 font-medium whitespace-pre-line opacity-90 line-clamp-4 flex-1">
                       {note.content}
                     </p>
                     <div className="text-[12px] font-bold opacity-70 mt-auto">
                       {note.date}
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>

             {/* Schedule Section */}
             <div className="flex flex-col flex-1 min-h-0 bg-card border border-border/30 rounded-[2rem] shadow-sm overflow-hidden p-6 md:p-8 md:pb-0">
                <div className="flex items-center justify-between mb-8 shrink-0">
                   <h2 className="text-3xl font-bold tracking-tight text-foreground">我的日程</h2>
                   <button className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-xl text-[13px] font-bold hover:shadow-sm transition-shadow">
                     5月14日，星期一
                     <ChevronDown className="size-4 text-muted-foreground" />
                   </button>
                </div>

                {/* Table Header */}
                <div className="hidden sm:grid grid-cols-[100px_1fr_1.5fr_1.5fr] gap-4 mb-4 px-4 text-[12px] font-bold text-muted-foreground tracking-wide">
                   <div>时间</div>
                   <div>模块</div>
                   <div>负责人</div>
                   <div>位置</div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar pb-6 space-y-2">
                   {/* Schedule list looping */}
                   {['上午 8:30', '下午 1:00', '下午 3:45', '下午 6:00', '上午 8:30', '下午 1:00', '下午 3:45'].map((time, idx) => (
                      <div key={idx} className="flex flex-col sm:grid sm:grid-cols-[100px_1fr_1.5fr_1.5fr] gap-3 sm:gap-4 items-start sm:items-center p-4 bg-background/50 rounded-2xl hover:bg-muted/80 transition-colors group cursor-pointer border border-transparent hover:border-border">
                        <div className="text-[13px] font-bold text-foreground w-full sm:w-auto">{time}</div>
                        <div className="text-[14px] font-bold text-foreground">
                           {idx % 2 === 0 ? "技术博客" : "游戏评测"}
                        </div>
                        <div className="flex items-center gap-3">
                           <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Admin${idx}`} className="size-8 rounded-full bg-muted" alt="Avatar" />
                           <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground">系统管理员</span>
                        </div>
                        <div className="text-[13px] font-medium text-muted-foreground truncate">
                           {idx % 2 === 0 ? "主域名，服务器 A" : "游戏分区，节点 2"}
                        </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    );
}

// Helper Component for Sidebar Items
function SidebarItem({ icon, label, active, badge, href }: { icon: React.ReactNode, label: string, active?: boolean, badge?: number, href?: string }) {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <span className={cn("opacity-80 transition-transform group-hover:scale-110", active && "opacity-100")}>{icon}</span>
        <span className={cn("font-medium text-[14px]", active && "font-bold")}>{label}</span>
      </div>
      {badge && (
        <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold shadow-sm">
          {badge}
        </span>
      )}
    </>
  );

  const className = cn(
    "flex items-center justify-between w-full p-3 rounded-[1.25rem] transition-all group",
    active 
      ? "bg-foreground text-background shadow-md" 
      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button className={className}>
      {content}
    </button>
  );
}
