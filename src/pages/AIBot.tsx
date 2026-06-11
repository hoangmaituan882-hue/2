import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ShieldAlert, CheckCircle, Users, Database, Sparkles, AlertTriangle, MessageSquare, MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

type Message = {
  id: string;
  sender: "system" | "user" | "bot";
  content?: React.ReactNode;
  delay: number;
};

const CHAT_SEQUENCE: Message[] = [
  { id: "msg-1", sender: "system", content: "昨天 14:32 您已成功添加 @bot 为好友", delay: 500 },
  { id: "msg-2", sender: "user", content: "能帮我总结一下最近一期“杂谈”的主要内容吗？", delay: 1500 },
  { id: "msg-3", sender: "bot", content: (
      <>
        <p className="text-sm leading-relaxed mb-3">没问题！最新一期杂谈探讨了<strong>独立游戏开发</strong>的心得，核心观点如下：</p>
        <ul className="text-sm space-y-2 text-foreground/90 pl-1">
            <li className="flex gap-2 items-start"><CheckCircle className="size-4 text-primary shrink-0 mt-0.5" /> <span>技术选型不宜过度前卫，适合团队最重要。</span></li>
            <li className="flex gap-2 items-start"><CheckCircle className="size-4 text-primary shrink-0 mt-0.5" /> <span>利用现成的引擎框架可以极大地加速原型迭代。</span></li>
        </ul>
      </>
    ), delay: 4000 
  },
  { id: "msg-4", sender: "user", content: "支持在我的讨论群里解答疑问吗？", delay: 6000 },
  { id: "msg-5", sender: "bot", content: "支持的。您可以直接邀请我加入群聊（需确保您是认证用户身份）。进群后只需 @我 即可提问。", delay: 8500 }
];

export function AIBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    let timeouts: number[] = [];

    // Reset sequence logic
    const runSequence = () => {
      setMessages([]);
      setIsTyping(false);
      
      CHAT_SEQUENCE.forEach((msg, index) => {
        // Show typing indicator before bot responses
        if (msg.sender === "bot") {
          const typeTimeout = window.setTimeout(() => {
            setIsTyping(true);
          }, msg.delay - 1500); // Start typing 1.5s before message
          timeouts.push(typeTimeout);
        }

        const msgTimeout = window.setTimeout(() => {
          if (msg.sender === "bot") setIsTyping(false);
          setMessages(prev => [...prev, msg]);
        }, msg.delay);
        timeouts.push(msgTimeout);
      });
    };

    runSequence();

    return () => {
      timeouts.forEach(t => window.clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 pt-12">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <Sparkles className="size-4" />
          <span>试运行期间免费开放</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
        >
          @bot 智能助手
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          基于本站知识库及今年所有的“杂谈”回文字稿构建，为您提供智能的问答与聊天服务。
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
        {/* Features Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="size-6 text-primary" /> 核心功能
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 bg-primary/10 p-2.5 rounded-xl">
                  <Database className="size-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">专属知识库</h4>
                  <p className="text-muted-foreground">完整收录本网站的设计思想、使用指南，以及今年所有“杂谈”节目的详尽回文字稿。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 bg-green-500/10 p-2.5 rounded-xl">
                  <MessageCircle className="size-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">好友聊天与通知</h4>
                  <p className="text-muted-foreground">普通用户可直接添加机器人为好友，进行一对一智能对话，并可订阅重要更新与通知。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 bg-blue-500/10 p-2.5 rounded-xl">
                  <Users className="size-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">群组接入（认证用户）</h4>
                  <p className="text-muted-foreground">经过认证的用户可以邀请机器人加入自己的群聊，为群成员提供实时数据查询与互动。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 bg-amber-500/10 p-2.5 rounded-xl">
                  <ShieldAlert className="size-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">隐私与安全</h4>
                  <p className="text-muted-foreground">严格保障用户隐私，无任何直接对外公开的使用记录或敏感信息泄露风险。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <button className="h-12 px-8 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full sm:w-auto shadow-md">
              <MessageSquare className="size-5" />
              立即添加好友
            </button>
          </div>
        </motion.div>

        {/* Mock QQ Chat Container */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4 }}
           className="bg-muted/30 border border-border/60 rounded-[2rem] p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col h-[520px]"
        >
          {/* Top Bar mock */}
          <div className="flex items-center justify-between pb-4 border-b border-border/50 mb-4 shrink-0">
             <div className="flex items-center gap-3">
               <div className="relative size-10 rounded-full bg-gradient-to-tr from-primary/80 to-primary flex items-center justify-center shadow-inner">
                 <Sparkles className="size-5 text-primary-foreground relative z-10" />
                 {/* Breathing ring */}
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute inset-0 rounded-full border-2 border-primary/50"
                 />
               </div>
               <div>
                  <h3 className="font-bold leading-tight">@bot</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] text-green-500 font-medium">手机在线 - 4G</span>
                  </div>
               </div>
             </div>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6 pb-4">
            <AnimatePresence>
              {messages.map((msg) => {
                if (msg.sender === "system") {
                  return (
                    <motion.div 
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex justify-center"
                    >
                      <span className="text-[12px] bg-muted px-3 py-1 rounded-full text-muted-foreground">{msg.content}</span>
                    </motion.div>
                  );
                }

                if (msg.sender === "user") {
                  return (
                    <motion.div 
                      key={msg.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-3 justify-end"
                    >
                      <div className="max-w-[75%] bg-primary text-primary-foreground p-3.5 rounded-2xl rounded-tr-sm shadow-sm relative">
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <div className="size-9 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0" />
                    </motion.div>
                  );
                }

                return (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    <div className="size-9 rounded-full bg-gradient-to-tr from-primary/80 to-primary flex items-center justify-center flex-shrink-0">
                      <Sparkles className="size-4 text-primary-foreground" />
                    </div>
                    <div className="max-w-[80%] bg-card border border-border/50 p-4 rounded-2xl rounded-tl-sm shadow-sm">
                      {msg.content}
                    </div>
                  </motion.div>
                );
              })}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex gap-3"
                >
                  <div className="size-9 rounded-full bg-gradient-to-tr from-primary/80 to-primary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="size-4 text-primary-foreground" />
                  </div>
                  <div className="bg-card border border-border/50 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom input area mock */}
          <div className="mt-2 shrink-0 bg-background rounded-xl h-12 flex items-center px-4 border border-border/50 shadow-inner text-muted-foreground/50 text-sm">
             输入消息...
          </div>
        </motion.div>
      </div>

      {/* Disclaimer Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 bg-muted/20 border border-border rounded-3xl p-6 sm:p-10"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
           <AlertTriangle className="size-6 text-amber-500" />
           <h3 className="text-xl font-bold">免责申明 (Disclaimer)</h3>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            1. <strong>免费试运行</strong>：本 @bot 服务目前处于试运行阶段，在此期间向所有用户免费开放。我们保留随时终止、暂停或修改服务的权利，恕不另行通知。
          </p>
          <p>
            2. <strong>信息准确性</strong>：机器人的回答基于预置的网站知识库及历史文稿，由人工智能模型生成。尽管我们努力确保信息质量，但不保证所提供信息的绝对准确性、完整性或时效性，一切反馈仅供参考。
          </p>
          <p>
            3. <strong>隐私要求</strong>：系统不会公开您的聊天记录和私人信息。同时，请勿在对话中包含您的真实姓名、密码或其他极其私密的个人敏感信息。
          </p>
          <p>
            4. <strong>服务限制</strong>：严禁利用本机器人从事任何违法、违规或破坏其他平台生态的行为。对于违规提问，系统有权拒绝回复或直接阻断。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
