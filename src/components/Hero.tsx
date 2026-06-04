import { cn } from "../lib/utils";
import { ArrowRight, Bot, Command, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-10 mt-12 mb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary border border-border rounded-full text-xs font-medium text-muted-foreground shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AnySoul 2.0 is now live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-foreground leading-[1.1]"
        >
          Give Your Data <br className="hidden md:block"/>
          <span className="text-muted-foreground/80 font-normal">
            A Living Soul.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Instantly transform your static knowledge base into a hyper-intelligent, 
          context-aware AI companion. Zero configuration required.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4"
        >
          <button className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95 hover:bg-primary/95 shadow-sm hover:shadow-md">
            Start Building Free
          </button>
          <button className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full border border-border bg-card px-8 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:shadow-sm active:scale-95 group">
            View Documentation <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>

      {/* Mock Browser Window */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <div className="relative h-[600px] w-full overflow-hidden bg-background border-2 border-border rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500">
          {/* Browser Header */}
          <div className="flex h-14 items-center border-b border-border bg-card/50 px-5 gap-3 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-[#ff5f56] border border-black/5" />
              <div className="size-3 rounded-full bg-[#ffbd2e] border border-black/5" />
              <div className="size-3 rounded-full bg-[#27c93f] border border-black/5" />
            </div>
            <div className="mx-auto flex h-8 w-64 items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground font-medium border border-border/50">
              app.anysoul.ai
            </div>
            <div className="w-16" /> {/* Spacer to center the URL bar */}
          </div>
          
          {/* Browser Content container */}
          <div className="flex h-[calc(100%-3.5rem)] flex-col lg:flex-row bg-background">
            {/* Sidebar mock */}
            <div className="hidden lg:flex w-64 flex-col border-r border-border bg-secondary/30 p-5">
               <div className="h-8 w-24 rounded-lg bg-secondary border border-border/50 mb-8" />
               <div className="space-y-2">
                 <div className="h-10 w-full rounded-xl flex items-center px-3 bg-card border border-border shadow-sm text-foreground text-sm font-medium group cursor-pointer hover:border-primary/30 transition-colors">
                    <Command className="size-4 mr-3 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5}/> Default Agent
                 </div>
                 <div className="h-10 w-full rounded-xl flex items-center px-3 text-muted-foreground text-sm hover:bg-secondary/80 transition-colors cursor-pointer group">
                    <Bot className="size-4 mr-3 opacity-60 group-hover:opacity-100 transition-opacity" strokeWidth={1.5}/> Sales Specialist
                 </div>
               </div>
            </div>
            
            {/* Chat mock */}
            <div className="flex-1 p-8 flex flex-col justify-end relative bg-[#fafafa]">
               <div className="space-y-6 mb-10 mt-auto overflow-hidden text-sm">
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.8 }}
                    className="flex items-start gap-4"
                  >
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shadow-sm shrink-0 border border-primary/20">
                      <Bot className="size-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="bg-card border border-border p-4 rounded-2xl rounded-tl-sm text-foreground max-w-[80%] shadow-sm">
                      I've analyzed the new Q3 metrics. Would you like me to draft an executive summary?
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 1.5 }}
                    className="flex items-start gap-4 flex-row-reverse"
                  >
                    <div className="size-8 rounded-full bg-secondary border border-border shrink-0 flex items-center justify-center text-muted-foreground font-medium text-xs shadow-sm">
                      Me
                    </div>
                    <div className="bg-primary p-4 rounded-2xl rounded-tr-sm text-primary-foreground max-w-[80%] shadow-sm">
                      Yes, focus on the user retention growth.
                    </div>
                  </motion.div>
               </div>
               
               {/* Input Mock */}
               <div className="relative mt-auto">
                 <div className="flex items-center gap-3 p-2 bg-card rounded-2xl border border-border shadow-sm group hover:border-primary/30 transition-colors">
                    <div className="h-10 flex-1 px-4 text-muted-foreground text-sm flex items-center">Ask Anything...</div>
                    <button className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm hover:bg-primary/90 transition-colors active:scale-95">
                        <ArrowRight className="size-4" strokeWidth={1.5} />
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
