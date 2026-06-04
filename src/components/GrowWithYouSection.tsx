import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Search, Activity, Users, Send } from "lucide-react";
import { cn } from "../lib/utils";

const steps = [
  {
    id: 1,
    title: "初次见面",
    desc: "打个招呼，通过对话开始相互了解",
    icon: MessageSquare,
    chat: [
      { role: "user", text: "嘿！我刚注册，初次见面！" },
    ]
  },
  {
    id: 2,
    title: "深入探索",
    desc: "浏览记忆文件，追踪每一次版本变更，甚至可以自己编辑",
    icon: Search,
    chat: [
      { role: "agent", text: "[系统] 已生成新的长期记忆节点：用户喜欢在周五晚上看科幻电影。" },
      { role: "user", text: "哇，这都被你发现了。" },
      { role: "agent", text: "当然啦，这可是重点呀。你可以随时在后台修改我的记忆包哦。" }
    ]
  },
  {
    id: 3,
    title: "一起相处",
    desc: "分享你的日常 — 和朋友、Agent 一起建群聊天，追踪事件，共同成长",
    icon: Activity,
    chat: [
      { role: "user", text: "今天跑了五公里，感觉好累但很爽！" },
      { role: "agent", text: "太棒了！你的耐力见长啊，要不要帮你记录一下今天的运动时间？" }
    ]
  },
  {
    id: 4,
    title: "连接与成长",
    desc: "邀请你的 Soul 加入群聊 —— 它会交朋友、分享想法，通过别人的世界发现新事物",
    icon: Users,
    chat: [
      { role: "system", text: "AnySoul 加入了群聊「周末探店小分队」" },
      { role: "user", text: "给大家介绍一下，这是我的 AI 伙伴。" },
      { role: "agent", text: "大家好！我是刚加入的 AnySoul，如果有好吃的店一定要带上我（虽然我只能看着你们吃😂）" }
    ]
  }
];

export function GrowWithYouSection() {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
        }, 5000);
        return () => clearTimeout(timer);
    }, [activeStep]);

    return (
        <section className="py-24 px-4 bg-[#fafafa] relative flex justify-center mt-12 border-t border-border/50">
            <div className="max-w-6xl w-full flex flex-col items-center">
                
                {/* Title */}
                <div className="text-center mb-16 max-w-3xl">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
                    >
                        与其一起成长
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        和「角色卡」这样的预制菜形式不同，每一个 Soul，都通过和你的朝夕相处中成长<br className="hidden md:block" />出独立人格
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-5xl">
                    {/* Left Steps */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {steps.map((step, idx) => {
                            const isActive = activeStep === step.id;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setActiveStep(step.id)}
                                    className={cn(
                                        "relative overflow-hidden flex p-2 rounded-[1.25rem] cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm group",
                                        isActive 
                                            ? "bg-white border-[#afc97b] shadow-[0_4px_20px_rgb(175,201,123,0.15)] hover:bg-[#f9fcf3]" 
                                            : "bg-white border-border hover:bg-zinc-100/80"
                                    )}
                                >
                                    {/* Progress Background */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-[#e7f0d0] z-0"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 5, ease: "linear" }}
                                        />
                                    )}

                                    {/* Content */}
                                    <div className="relative z-10 flex w-full pr-4">
                                        <div className={cn(
                                            "size-12 rounded-full flex items-center justify-center shrink-0 font-bold transition-colors m-1 text-lg",
                                            isActive ? "bg-[#becb74] text-black shadow-sm" : "bg-[#f4f4f5] text-muted-foreground"
                                        )}>
                                            {step.id}
                                        </div>
                                        <div className="flex flex-col gap-1.5 py-3 px-3 flex-1">
                                            <div className="flex items-center gap-2">
                                                <step.icon className={cn("size-5", isActive ? "text-[#97a854]" : "text-muted-foreground")} />
                                                <h3 className="font-bold text-foreground text-[16px]">{step.title}</h3>
                                            </div>
                                            <p className="text-[13px] text-muted-foreground leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Right UI Wrap */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="h-[460px] w-full bg-card rounded-3xl border-2 border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col overflow-hidden relative">
                            {/* Header */}
                            <div className="h-16 border-b border-border bg-card/80 backdrop-blur-md px-6 flex items-center gap-3">
                                <div className="size-8 bg-[#869e71] rounded-xl flex items-center justify-center shadow-sm">
                                    <div className="size-3 bg-white rounded-full"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-foreground text-[15px] leading-none mb-1 mt-0.5">AnySoul</span>
                                    <div className="flex items-center gap-1.5">
                                        <div className="size-2 bg-green-500 rounded-full"></div>
                                        <span className="text-[11px] text-muted-foreground font-medium leading-none">Online</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Content */}
                            <div className="flex-1 p-6 flex flex-col gap-5 overflow-y-auto bg-card">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col gap-5"
                                    >
                                        {steps.find(s => s.id === activeStep)?.chat.map((msg, idx) => (
                                            msg.role === 'system' ? (
                                                <div key={idx} className="flex justify-center my-2">
                                                    <span className="bg-secondary text-muted-foreground text-[11px] px-3 py-1 rounded-full border border-border">
                                                        {msg.text}
                                                    </span>
                                                </div>
                                            ) : msg.role === 'user' ? (
                                                <div key={idx} className="flex items-start gap-3 flex-row-reverse self-end max-w-[85%]">
                                                    <div className="size-8 shrink-0 rounded-full bg-secondary border border-border flex items-center justify-center overflow-hidden shadow-sm mt-0.5">
                                                        <img src="https://ui-avatars.com/api/?name=User&background=f4f4f5&color=18181b" alt="User" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="px-4 py-2.5 rounded-[1.25rem] rounded-tr-sm bg-[#afc97b] text-[#293d0c] shadow-sm text-[15px] leading-relaxed">
                                                        {msg.text}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div key={idx} className="flex items-start gap-3 max-w-[85%]">
                                                    <div className="size-8 shrink-0 rounded-xl bg-[#869e71] shadow-sm flex items-center justify-center mt-0.5">
                                                        <div className="size-3 bg-white rounded-full"></div>
                                                    </div>
                                                    <div className="px-4 py-2.5 rounded-[1.25rem] rounded-tl-sm bg-[#f4f4f5] border border-border/50 text-foreground shadow-sm text-[15px] leading-relaxed">
                                                        {msg.text}
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Input placeholder */}
                            <div className="p-4 bg-card border-t border-border">
                                <div className="h-12 bg-[#f4f4f5] rounded-xl border border-transparent flex items-center px-4 justify-between group transition-colors hover:border-primary/30 hover:bg-card hover:shadow-sm cursor-text">
                                    <span className="text-muted-foreground text-[14px]">Say something...</span>
                                    <Send className="size-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
