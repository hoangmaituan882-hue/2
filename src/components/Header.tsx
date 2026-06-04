import { cn } from "../lib/utils";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none mt-4 transition-all">
      <motion.div
        layout
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "100%",
          maxWidth: isScrolled ? 896 : 3000,
          y: isScrolled ? 0 : -16,
          borderRadius: isScrolled ? 9999 : 0,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0)",
          borderColor: isScrolled ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0)",
          boxShadow: isScrolled ? "0 8px 30px rgba(0,0,0,0.06)" : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40, mass: 1 }}
        className="pointer-events-auto flex h-16 items-center justify-between px-6 md:px-12 backdrop-blur-md border overflow-hidden"
      >
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm group hover:scale-105 transition-transform cursor-pointer">
            <Sparkles className="size-4 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">AnySoul</span>
        </div>
        
        <nav className={cn(
          "hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500",
          isScrolled ? "text-muted-foreground" : "text-foreground"
        )}>
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#showcase" className="transition-colors hover:text-foreground">Showcase</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#changelog" className="transition-colors hover:text-foreground">Changelog</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <button className="md:hidden flex size-10 items-center justify-center rounded-full hover:bg-black/5 text-foreground transition-colors group">
            <Menu className="size-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          </button>
          <button className="hidden md:flex px-6 py-2.5 items-center justify-center rounded-full bg-primary text-sm font-medium text-white transition-all hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95">
            Start Free
          </button>
        </div>
      </motion.div>
    </header>
  );
}
