import { cn } from "../lib/utils";
import { Menu, ChevronDown, Moon, Sun, Languages, User, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";
import { AuthModal } from "./AuthModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t } = useThemeLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-out",
        isScrolled ? "pt-4 px-4" : "pt-6 px-4 md:px-8"
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full h-[60px] px-5 md:px-8 overflow-hidden transition-all duration-500 ease-out border",
          isScrolled 
            ? "max-w-4xl rounded-full bg-card/95 backdrop-blur-md border-border shadow-sm" 
            : "max-w-6xl rounded-full bg-transparent border-transparent shadow-none"
        )}
      >
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 text-xl md:text-2xl whitespace-nowrap flex-shrink-0 group">
          <svg className="size-5 md:size-6" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="16" height="16" rx="4" fill="#a4c639" transform="rotate(-10 12 12)" className="group-hover:rotate-0 transition-transform duration-300" />
            <circle cx="11.5" cy="11.5" r="3.5" fill="#1a1a1a" />
            <circle cx="11.5" cy="11.5" r="1.5" fill="#a4c639" />
          </svg>
          <span className="font-medium text-[22px] tracking-tight ml-1 text-foreground">Any</span>
          <svg viewBox="1215 -2 600 355" fill="none" stroke="currentColor" className="h-7 -ml-2 self-center text-foreground" aria-hidden="true" style={{ overflow: "visible" }}>
            <path d="M1393.06 82.0608C1411.56 49.5609 1376.22 18.4744 1313.06 76.0602C1228.06 153.561 1298.06 196.561 1368.06 188.561C1416.28 183.05 1309.46 306.061 1273.06 338.061" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M1429.56 215.06C1437.96 149.46 1473.39 194.06 1490.06 224.56C1492.39 187.56 1520.22 166.561 1526.56 179.56C1550.96 229.56 1509.39 267.893 1485.06 282.56C1463.06 287.393 1421.16 280.66 1429.56 215.06Z" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#e11d48" />
            <path d="M1583.06 176.561C1573.89 201.727 1561.76 251.261 1586.56 248.061C1611.36 244.861 1638.56 205.727 1649.06 186.561C1641.23 216.727 1635.46 268.461 1675.06 234.061" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M1802.06 8.06055C1785.89 29.7272 1753.06 107.961 1751.06 247.561" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 flex-shrink-0">
          <div className="flex flex-col items-center mr-1">
            <div className={cn("inline-flex items-stretch overflow-hidden rounded-full border transition-colors duration-300", 
              isScrolled ? "border-border/80 bg-muted/40" : "border-transparent bg-transparent"
            )}>
              <button className="inline-flex items-center justify-center h-8 px-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                {language === "zh" ? "中" : language === "ja" ? "日" : "EN"}
              </button>
              <div className={cn("w-px my-0.5 transition-colors duration-300", isScrolled ? "bg-border/80" : "bg-transparent")} />
              <button className="inline-flex items-center justify-center h-8 px-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <ChevronDown className={cn("size-3.5 transition-colors", isScrolled ? "text-muted-foreground" : "text-foreground")} />
              </button>
            </div>
          </div>

          <button 
            onClick={toggleTheme}
            className="inline-flex items-center justify-center size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground"
          >
             {theme === "light" ? <Moon className="size-4" strokeWidth={2} /> : <Sun className="size-4" strokeWidth={2} />}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className={cn("inline-flex items-center justify-center size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground", language === 'ja' && 'bg-primary/20 text-primary')}
            title="Switch Language"
          >
             <Languages className="size-4" strokeWidth={2} />
          </button>

          <button onClick={() => setIsAuthModalOpen(true)} className={cn("inline-flex items-center gap-1.5 h-[36px] px-4 rounded-full border transition-all duration-300 font-bold text-sm text-foreground ml-1", 
            isScrolled ? "border-border bg-card hover:bg-muted shadow-[0_2px_10px_rgb(0,0,0,0.02)]" : "border-transparent bg-transparent hover:bg-black/5 dark:hover:bg-white/5 shadow-none"
          )}>
             <User className="size-4" />
             <span>{t("header.login")}</span>
          </button>

          <a href="#plaza" className={cn("inline-flex items-center gap-1.5 h-[36px] px-4 rounded-full border transition-all duration-300 font-bold text-sm text-foreground ml-0.5", 
            isScrolled ? "border-border bg-card hover:bg-muted shadow-[0_2px_10px_rgb(0,0,0,0.02)]" : "border-transparent bg-transparent hover:bg-black/5 dark:hover:bg-white/5 shadow-none"
          )}>
             <Compass className="size-4" />
             <span>{t("header.discover")}</span>
          </a>

          <button className="ml-1 inline-flex items-center justify-center h-[36px] px-5 rounded-full bg-[#abc378] text-[#1a1a1a] hover:bg-[#a0b86e] hover:shadow-md transition-all font-bold text-sm shadow-sm tracking-wide">
             {t("header.experience")}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center gap-1 flex-shrink-0">
          <a href="#plaza" className="inline-flex items-center justify-center size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground">
             <Compass className="size-4" strokeWidth={2} />
          </a>
          <button onClick={toggleTheme} className="inline-flex items-center justify-center size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground">
             {theme === "light" ? <Moon className="size-4" strokeWidth={2} /> : <Sun className="size-4" strokeWidth={2} />}
          </button>
          <button onClick={toggleLanguage} className={cn("inline-flex items-center justify-center size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground", language === 'ja' && 'bg-primary/20 text-primary')}>
             <Languages className="size-4" strokeWidth={2} />
          </button>
          <button className="inline-flex items-center justify-center size-9 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-foreground ml-1">
             <Menu className="size-5" />
          </button>
        </nav>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}
