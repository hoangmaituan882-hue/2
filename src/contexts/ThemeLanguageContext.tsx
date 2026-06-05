import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "zh" | "ja" | "en";
type Theme = "light" | "dark";

interface ThemeLanguageContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  zh: {
    "header.blog": "博客",
    "header.login": "登录",
    "header.discover": "发现",
    "header.experience": "在线体验",
    "plaza.title": "探索",
    "plaza.tab.souls": "灵魂",
    "plaza.tab.moments": "瞬间",
    "plaza.tab.groups": "群组",
    "plaza.search": "搜索灵魂...",
    "plaza.btn.search": "搜索",
    "plaza.filter.featured": "精选",
    "plaza.filter.hot": "热门",
    "plaza.filter.new": "最新",
    "plaza.filter.all": "全部",
    "plaza.count": "个灵魂",
    "plaza.dev.moments": "瞬间内容开发中...",
    "plaza.dev.groups": "群组内容开发中...",
    "plaza.active": "上次活跃于 {days} 天前"
  },
  ja: {
    "header.blog": "ブログ",
    "header.login": "ログイン",
    "header.discover": "発見",
    "header.experience": "体験する",
    "plaza.title": "探索",
    "plaza.tab.souls": "ソウル",
    "plaza.tab.moments": "モーメント",
    "plaza.tab.groups": "グループ",
    "plaza.search": "ソウルを検索...",
    "plaza.btn.search": "検索",
    "plaza.filter.featured": "おすすめ",
    "plaza.filter.hot": "人気",
    "plaza.filter.new": "新着",
    "plaza.filter.all": "すべて",
    "plaza.count": "個のソウル",
    "plaza.dev.moments": "モーメント機能は開発中です...",
    "plaza.dev.groups": "グループ機能は開発中です...",
    "plaza.active": "{days}日前にアクティブ"
  },
  en: {
    "header.blog": "Blog",
    "header.login": "Login",
    "header.discover": "Discover",
    "header.experience": "Try Now",
    "plaza.title": "Explore",
    "plaza.tab.souls": "Souls",
    "plaza.tab.moments": "Moments",
    "plaza.tab.groups": "Groups",
    "plaza.search": "Search souls...",
    "plaza.btn.search": "Search",
    "plaza.filter.featured": "Featured",
    "plaza.filter.hot": "Hot",
    "plaza.filter.new": "New",
    "plaza.filter.all": "All",
    "plaza.count": "souls",
    "plaza.dev.moments": "Moments in development...",
    "plaza.dev.groups": "Groups in development...",
    "plaza.active": "Active {days} days ago"
  }
};

export function ThemeLanguageProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "zh" ? "ja" : "zh")); // Toggles between zh and ja for now
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (context === undefined) {
    throw new Error("useThemeLanguage must be used within a ThemeLanguageProvider");
  }
  return context;
}
