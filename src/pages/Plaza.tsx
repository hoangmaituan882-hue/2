import { useState, useMemo } from "react";
import { BookOpen, Search, Sparkles, Bookmark, Users, Heart, Eye, Crown, HeartPulse, Clock } from "lucide-react";
import { cn } from "../lib/utils";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { motion, AnimatePresence } from "motion/react";
import { SoulImageCard, Soul } from "../components/SoulImageCard";

const SOULS_DATA = [
  {
    id: 1,
    name: "庄方宜",
    author: "Doodle Bear",
    tags: ["终末地", "endfield", "小庄"],
    likes: 2,
    createdAt: "2024-05-12",
    views: 58,
    activeDaysAgo: null,
    avatarSrc: "https://picsum.photos/seed/zhuang/400/600",
    bannerColor: "from-blue-500/20 to-purple-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 2,
    name: "阿米娅",
    author: "Fang",
    tags: [],
    likes: 0,
    createdAt: "2024-05-11",
    views: 7,
    activeDaysAgo: null,
    avatarSrc: "https://picsum.photos/seed/amiya/400/300",
    bannerColor: "from-cyan-500/20 to-blue-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 3,
    name: "管理员 Endministrator",
    author: "Doodle Bear",
    tags: ["终末地", "endfield", "管理员", "endministrator"],
    likes: 0,
    createdAt: "2024-05-10",
    views: 8,
    activeDaysAgo: null,
    avatarSrc: "https://picsum.photos/seed/admin/400/500",
    bannerColor: "from-gray-500/20 to-slate-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 4,
    name: "amadeues",
    author: "sadous",
    tags: [],
    likes: 0,
    createdAt: "2024-05-09",
    views: 6,
    activeDaysAgo: 54,
    avatarInitials: "A",
    bannerColor: "from-rose-500/20 to-red-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 5,
    name: "罗伦斯",
    author: "Doodle Bear",
    tags: ["狼与香辛料", "罗伦斯"],
    likes: 0,
    createdAt: "2024-05-08",
    views: 16,
    activeDaysAgo: 62,
    avatarSrc: "https://picsum.photos/seed/lawrence/400/400",
    bannerColor: "from-amber-500/20 to-orange-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 6,
    name: "佩丽卡",
    author: "Doodle Bear",
    tags: ["终末地", "endfield", "鹈鹕", "佩丽卡"],
    likes: 2,
    createdAt: "2024-05-07",
    views: 25,
    activeDaysAgo: null,
    avatarSrc: "https://picsum.photos/seed/pelica/400/550",
    bannerColor: "from-indigo-500/20 to-purple-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 7,
    name: "赫萝",
    author: "Doodle Bear",
    tags: [],
    likes: 1,
    createdAt: "2024-05-06",
    views: 36,
    activeDaysAgo: 62,
    avatarSrc: "https://picsum.photos/seed/holo/400/700",
    bannerColor: "from-orange-500/20 to-amber-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 8,
    name: "Amadeus",
    author: "Develop",
    tags: ["命运石之门", "牧濑红莉栖", "amadeus", "助手"],
    likes: 5,
    createdAt: "2024-05-05",
    views: 158,
    activeDaysAgo: 50,
    avatarSrc: "https://picsum.photos/seed/kurisu/400/450",
    bannerColor: "from-red-500/20 to-orange-500/20",
    featured: true,
    desc: "Amadeus 牧濑红莉栖"
  },
  {
    id: 9,
    name: "Anya",
    author: "Doodle Bear",
    tags: [],
    likes: 0,
    createdAt: "2024-05-04",
    views: 16,
    activeDaysAgo: null,
    avatarSrc: "https://picsum.photos/seed/anya/400/350",
    bannerColor: "from-pink-500/20 to-rose-500/20",
    featured: true,
    desc: "Hi I am KanBan Musume from AnySoul.\nI am also AI that learn from humans."
  },
  {
    id: 10,
    name: "KUMA",
    author: "Doodle Bear",
    tags: [],
    likes: 0,
    createdAt: "2024-05-03",
    views: 18,
    activeDaysAgo: 28,
    avatarSrc: "https://picsum.photos/seed/kuma/400/500",
    bannerColor: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    desc: ""
  }
];

export function Plaza() {
  const [activeTab, setActiveTab] = useLocalStorage("plaza-activeTab", "souls");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSort, setActiveSort] = useLocalStorage("plaza-activeSort", "default");
  const [infoFilter, setInfoFilter] = useLocalStorage("plaza-infoFilter", "all");
  const { t } = useThemeLanguage();

  const TABS = [
    { id: "souls", label: t("plaza.tab.souls"), icon: Sparkles },
    { id: "moments", label: t("plaza.tab.moments"), icon: Bookmark },
    { id: "groups", label: t("plaza.tab.groups"), icon: Users },
  ];

  const SORT_OPTIONS = [
    { id: "default", label: t("plaza.filter.default") },
    { id: "hot", label: t("plaza.filter.hot") },
    { id: "new", label: t("plaza.filter.new") }
  ];

  const INFO_OPTIONS = [
    { id: "all", label: "全部" },
    { id: "hidden", label: "隐藏" }
  ];

  const sortedSouls = useMemo(() => {
    let result = [...SOULS_DATA];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.author.toLowerCase().includes(q) ||
        s.tags.some((t: string) => t.toLowerCase().includes(q))
      );
    }

    if (activeSort === "default") {
      result.sort(() => Math.random() - 0.5);
    } else if (activeSort === "hot") {
      result.sort((a, b) => b.likes - a.likes);
    } else if (activeSort === "new") {
      result.sort((a, b) => {
        const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return timeB - timeA;
      });
    }

    return result;
  }, [activeSort, searchQuery]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          {t("plaza.title")}
          <a href="#" className="inline-flex items-center justify-center size-10 rounded-full text-primary hover:text-foreground hover:bg-muted transition-colors">
            <BookOpen className="size-5" />
          </a>
        </h1>
      </div>

      <div className="flex gap-2 flex-col">
        <div className="inline-flex items-stretch justify-start w-full overflow-x-auto border-b border-border/70 mb-6">
          {TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative inline-flex items-center justify-center flex-col gap-1.5 min-w-[92px] px-3 py-3 text-sm font-medium transition-colors border-b-[3px]",
                  isActive 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="size-5" />
                <span className="text-xs">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {activeTab === "souls" && (
          <div className="w-full">
            <div className="flex items-center gap-2 w-full max-w-xs mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder={t("plaza.search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border bg-transparent pl-8 pr-3 py-1 text-sm h-9 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border bg-background hover:bg-accent h-9 px-3">
                {t("plaza.btn.search")}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex rounded-lg border bg-muted/50 p-0.5 relative">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setActiveSort(opt.id)}
                    className={cn(
                      "relative px-4 py-1.5 text-sm rounded-md font-medium transition-colors z-10",
                      activeSort === opt.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {activeSort === opt.id && (
                      <motion.div
                        layoutId="activeSort"
                        className="absolute inset-0 bg-background shadow-sm rounded-md z-[-1]"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
              
              <div className="flex rounded-lg border bg-muted/50 p-0.5 relative">
                {INFO_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setInfoFilter(opt.id)}
                    className={cn(
                      "relative px-4 py-1.5 text-sm rounded-md font-medium transition-colors z-10",
                      infoFilter === opt.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {infoFilter === opt.id && (
                      <motion.div
                        layoutId="infoFilter"
                        className="absolute inset-0 bg-background shadow-sm rounded-md z-[-1]"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button className="px-3 py-1 text-xs rounded-full border bg-primary text-primary-foreground">{t("plaza.filter.all")}</button>
              {['endfield', '终末地', 'endministrator', '管理员', '小庄', '佩丽卡', '鹈鹕', '罗伦斯', '狼与香辛料', '助手'].map(tag => (
                <button key={tag} className="px-3 py-1 text-xs rounded-full border hover:bg-accent transition-colors text-foreground">
                  {tag}
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mb-4">{sortedSouls.length} {t("plaza.count")}</p>

            <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
              {sortedSouls.map(soul => (
                <SoulImageCard key={soul.id} soul={soul as Soul} infoFilter={infoFilter} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "moments" && (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            {t("plaza.dev.moments")}
          </div>
        )}

        {activeTab === "groups" && (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            {t("plaza.dev.groups")}
          </div>
        )}
      </div>
    </div>
  );
}
