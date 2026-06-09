import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Check, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";

export function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const { t } = useThemeLanguage();

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setVerified(false);
      setIsVerifying(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleVerify = () => {
    if (verified || isVerifying) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerified(true);
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate action
  };

  // Only render on client side where document is defined
  if (typeof document === "undefined") return null;

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto" style={{ pointerEvents: 'auto' }}>
             <div className="min-h-full flex items-center justify-center p-4 sm:p-6 pb-20">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-none"
              />
              <div className="fixed inset-0 z-0" onClick={onClose} />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                className="relative w-full max-w-[420px] bg-card border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] pt-6 pb-5 px-6 sm:pt-8 sm:pb-6 sm:px-10 z-10 flex flex-col" 
                style={{ borderRadius: '1.5rem' }}
              >
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-2 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors focus:outline-none z-20 cursor-pointer"
              >
                <X className="size-4.5" strokeWidth={2} />
              </button>
              
              <div className="flex flex-col gap-4 sm:gap-6 text-center w-full mt-1 sm:mt-2 relative z-10">
                <div className="flex justify-center mb-0">
                   <div className="relative size-16 bg-[#a4c639] rounded-[14px] rotate-[15deg] flex items-center justify-center shadow-[inset_0_-4px_8px_rgba(0,0,0,0.1),_0_8px_16px_rgba(0,0,0,0.15)]">
                      <div className="size-8 bg-white rounded-full flex items-center justify-center shadow-inner -rotate-[15deg]">
                         <div className="size-3 bg-black rounded-full" />
                      </div>
                   </div>
                </div>
                
                <div className="space-y-2.5">
                  <h2 className="font-bold text-[26px] tracking-tight text-foreground leading-none">
                    {isLogin ? t("auth.welcome") : t("auth.create")}
                  </h2>
                  <p className="text-[15px] text-muted-foreground font-medium">
                    {isLogin ? t("auth.login.desc") : t("auth.register.desc")}
                  </p>
                </div>

                <button className="group flex items-center justify-center gap-3 rounded-2xl border-2 border-border shadow-sm bg-card hover:border-[#a4c639]/60 hover:bg-[#a4c639]/5 text-[15px] font-semibold text-foreground h-12 w-full transition-all active:scale-[0.98] mt-1 relative z-20 cursor-pointer">
                  <svg className="size-[18px]" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  {t("auth.google")}
                </button>

                <div className="relative flex items-center py-2 pointer-events-none">
                  <div className="flex-grow border-t border-border/60"></div>
                  <span className="flex-shrink-0 mx-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">{t("auth.or")}</span>
                  <div className="flex-grow border-t border-border/60"></div>
                </div>

                <form className="space-y-4 text-left relative z-20" onSubmit={handleRegister}>
                  <div className="space-y-3.5">
                    {!isLogin && (
                      <div className="space-y-1.5 flex flex-col">
                        <label className="text-[13px] font-semibold text-foreground/80 px-1 select-none">{t("auth.name")}</label>
                        <input 
                          className="flex h-[42px] sm:h-[46px] w-full rounded-xl border border-input bg-secondary/20 px-4 text-[14px] sm:text-[15px] transition-all focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#a4c639]/30 focus:border-[#a4c639] hover:border-border placeholder:text-muted-foreground/50 relative z-30"
                          placeholder={t("auth.name.placeholder")}
                        />
                      </div>
                    )}
                    <div className="space-y-1.5 flex flex-col">
                      <label className="text-[13px] font-semibold text-foreground/80 px-1 select-none">{t("auth.email")}</label>
                      <input 
                        type="email"
                        className="flex h-[42px] sm:h-[46px] w-full rounded-xl border border-input bg-secondary/20 px-4 text-[14px] sm:text-[15px] transition-all focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#a4c639]/30 focus:border-[#a4c639] hover:border-border placeholder:text-muted-foreground/50 relative z-30"
                        placeholder={t("auth.email.placeholder")}
                      />
                    </div>
                    <div className="space-y-1.5 flex flex-col">
                      <label className="text-[13px] font-semibold text-foreground/80 px-1 select-none">{t("auth.password")}</label>
                      <input 
                        type="password"
                        className="flex h-[42px] sm:h-[46px] w-full rounded-xl border border-input bg-secondary/20 px-4 text-[14px] sm:text-[15px] transition-all focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#a4c639]/30 focus:border-[#a4c639] hover:border-border placeholder:text-muted-foreground/50 relative z-30"
                        placeholder={isLogin ? t("auth.password.login") : t("auth.password.create")}
                      />
                    </div>
                    {!isLogin && (
                      <div className="space-y-1.5 flex flex-col">
                        <label className="text-[13px] font-semibold text-foreground/80 px-1 select-none">{t("auth.password.confirm")}</label>
                        <input 
                          type="password"
                          className="flex h-[42px] sm:h-[46px] w-full rounded-xl border border-input bg-secondary/20 px-4 text-[14px] sm:text-[15px] transition-all focus:bg-card focus:outline-none focus:ring-2 focus:ring-[#a4c639]/30 focus:border-[#a4c639] hover:border-border placeholder:text-muted-foreground/50 relative z-30"
                          placeholder={t("auth.password.confirm.placeholder")}
                        />
                      </div>
                    )}
                  </div>

                  {!isLogin && (
                    <div className="pt-2 space-y-4">
                      <div className="flex items-center space-x-2.5 px-1">
                        <input 
                          type="checkbox"
                          id="terms"
                          className="size-4 shrink-0 rounded-[4px] border-border text-[#a4c639] focus:ring-[#a4c639]/30 transition-colors relative z-30 cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-[13px] font-medium text-muted-foreground/90 select-none cursor-pointer relative z-30">
                          {t("auth.terms.agree")} <a href="#terms" className="text-[#a4c639] hover:underline" onClick={(e) => e.stopPropagation()}>{t("auth.terms")}</a> {t("auth.and")} <a href="#privacy" className="text-[#a4c639] hover:underline" onClick={(e) => e.stopPropagation()}>{t("auth.privacy")}</a>
                        </label>
                      </div>

                      <div onClick={handleVerify} className="relative overflow-hidden flex items-center justify-between border border-border/50 rounded-xl px-4 py-3 shadow-sm bg-secondary/10 cursor-pointer hover:bg-secondary/30 transition-colors group select-none z-30">
                        <AnimatePresence>
                          {verified && (
                            <motion.div
                              initial={{ scaleX: 0, originX: 1 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute inset-0 bg-[#a4c639] z-0"
                            />
                          )}
                        </AnimatePresence>
                        <div className="flex items-center gap-3 relative z-10">
                          <div className={`size-5 rounded-[6px] flex items-center justify-center transition-colors ${verified ? 'text-[#1a1a1a]' : 'border-[2px] border-muted-foreground/30 group-hover:border-[#a4c639]/60'}`}>
                            {verified ? <Check className="size-3.5" strokeWidth={3.5} /> : (isVerifying && <RefreshCcw className="size-3 text-muted-foreground animate-spin" />)}
                          </div>
                          <span className={`text-[14.5px] font-semibold transition-colors ${verified ? 'text-[#1a1a1a]' : 'text-muted-foreground'}`}>
                            {isVerifying ? t("auth.verify.ing") : (verified ? t("auth.verify.ed") : t("auth.verify.click"))}
                          </span>
                        </div>
                        <RefreshCcw className={`size-[18px] transition-all duration-700 relative z-10 ${verified ? 'text-[#1a1a1a]/50' : 'text-muted-foreground group-hover:text-foreground opacity-30 group-hover:opacity-80'} ${isVerifying ? 'animate-spin opacity-50' : ''}`} />
                      </div>
                    </div>
                  )}

                  <button type="submit" className="mt-4 flex items-center justify-center rounded-xl text-[15px] font-bold bg-[#a4c639] text-[#1a1a1a] hover:bg-[#b5d54a] h-12 w-full shadow-sm transition-all active:scale-[0.98] relative z-30 cursor-pointer">
                    {isLogin ? t("auth.btn.login") : t("auth.btn.register")}
                  </button>
                </form>

                <div className="text-center text-[14px] font-medium text-muted-foreground mb-2 mt-1 relative z-30">
                  {isLogin ? t("auth.no_account") : t("auth.has_account")} 
                  <button 
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setVerified(false);
                    }}
                    className="text-foreground font-semibold hover:text-[#a4c639] transition-colors focus:outline-none ml-1 underline underline-offset-4 decoration-border hover:decoration-[#a4c639] cursor-pointer"
                  >
                    {isLogin ? t("auth.create") : t("auth.btn.login")}
                  </button>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
