import { useState } from "react";
import { BookOpen, Search, Sparkles, Bookmark, Users, Star, Eye, Crown, HeartPulse } from "lucide-react";
import { cn } from "../lib/utils";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";

const SOULS_DATA = [
  {
    id: 1,
    name: "庄方宜",
    author: "Doodle Bear",
    tags: ["终末地", "endfield", "小庄"],
    stars: 2,
    views: 58,
    activeDaysAgo: null,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    bannerColor: "from-blue-500/20 to-purple-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 2,
    name: "阿米娅",
    author: "Fang",
    tags: [],
    stars: 0,
    views: 7,
    activeDaysAgo: null,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    bannerColor: "from-cyan-500/20 to-blue-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 3,
    name: "管理员 Endministrator",
    author: "Doodle Bear",
    tags: ["终末地", "endfield", "管理员", "endministrator"],
    stars: 0,
    views: 8,
    activeDaysAgo: null,
    avatarSrc: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    bannerColor: "from-gray-500/20 to-slate-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 4,
    name: "amadeues",
    author: "sadous",
    tags: [],
    stars: 0,
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
    stars: 0,
    views: 16,
    activeDaysAgo: 62,
    avatarSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    bannerColor: "from-amber-500/20 to-orange-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 6,
    name: "佩丽卡",
    author: "Doodle Bear",
    tags: ["终末地", "endfield", "鹈鹕", "佩丽卡"],
    stars: 2,
    views: 25,
    activeDaysAgo: null,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    bannerColor: "from-indigo-500/20 to-purple-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 7,
    name: "赫萝",
    author: "Doodle Bear",
    tags: [],
    stars: 1,
    views: 36,
    activeDaysAgo: 62,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
    bannerColor: "from-orange-500/20 to-amber-500/20",
    featured: false,
    desc: ""
  },
  {
    id: 8,
    name: "Amadeus",
    author: "Develop",
    tags: ["命运石之门", "牧濑红莉栖", "amadeus", "助手"],
    stars: 5,
    views: 158,
    activeDaysAgo: 50,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026708c",
    bannerColor: "from-red-500/20 to-orange-500/20",
    featured: true,
    desc: "Amadeus 牧濑红莉栖"
  },
  {
    id: 9,
    name: "Anya",
    author: "Doodle Bear",
    tags: [],
    stars: 0,
    views: 16,
    activeDaysAgo: null,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026707c",
    bannerColor: "from-pink-500/20 to-rose-500/20",
    featured: true,
    desc: "Hi I am KanBan Musume from AnySoul.\nI am also AI that learn from humans."
  },
  {
    id: 10,
    name: "KUMA",
    author: "Doodle Bear",
    tags: [],
    stars: 0,
    views: 18,
    activeDaysAgo: 28,
    avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026706c",
    bannerColor: "from-emerald-500/20 to-teal-500/20",
    featured: true,
    desc: ""
  }
];

export function Plaza() {
  const [activeTab, setActiveTab] = useState("souls");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useThemeLanguage();

  const TABS = [
    { id: "souls", label: t("plaza.tab.souls"), icon: Sparkles },
    { id: "moments", label: t("plaza.tab.moments"), icon: Bookmark },
    { id: "groups", label: t("plaza.tab.groups"), icon: Users },
  ];

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
              <div className="flex rounded-lg border bg-muted/50 p-0.5">
                <button className="px-3 py-1 text-sm rounded-md bg-background shadow-sm font-medium text-foreground">{t("plaza.filter.featured")}</button>
                <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors">{t("plaza.filter.hot")}</button>
                <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors">{t("plaza.filter.new")}</button>
              </div>
              <div className="flex rounded-lg border bg-muted/50 p-0.5">
                <button className="px-3 py-1 text-sm rounded-md bg-background shadow-sm font-medium text-foreground">{t("plaza.filter.all")}</button>
                <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors">English</button>
                <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors">中文</button>
                <button className="px-3 py-1 text-sm rounded-md text-muted-foreground hover:text-foreground transition-colors">日本語</button>
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

            <p className="text-xs text-muted-foreground mb-4">{SOULS_DATA.length} {t("plaza.count")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {SOULS_DATA.map(soul => (
                <div key={soul.id} className={cn(
                  "group flex w-full flex-col rounded-xl border bg-card text-left transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer",
                  soul.featured && "ring-1 ring-primary/40 border-primary/30"
                )}>
                  <div className="relative flex items-center justify-center bg-muted/30 rounded-t-xl overflow-hidden pt-8 pb-5">
                    <div className={cn("absolute inset-0 z-0 bg-gradient-radial", soul.bannerColor)} />
                    
                    {soul.featured && (
                      <span className="inline-flex items-center justify-center rounded-full text-[10px] font-medium absolute top-2 right-2 z-10 gap-1 bg-primary text-white px-2 py-0.5">
                        <Crown className="size-2.5" />
                        {t("plaza.filter.featured")}
                      </span>
                    )}

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative">
                        <div className="relative flex shrink-0 overflow-hidden rounded-full size-20 ring-2 ring-background shadow-sm bg-primary/10 items-center justify-center">
                          {soul.avatarSrc ? (
                            <img src={soul.avatarSrc} alt={soul.name} className="aspect-square size-full object-cover" />
                          ) : (
                            <span className="text-2xl font-semibold text-primary">{soul.avatarInitials}</span>
                          )}
                        </div>
                        
                        {soul.activeDaysAgo !== null && (
                          <span className="inline-flex items-center justify-center rounded-full absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap gap-1 bg-background/90 backdrop-blur-sm shadow-sm px-1.5 py-0.5 text-[10px] text-muted-foreground border">
                            <HeartPulse className="size-2.5 text-red-500" />
                            {t("plaza.active").replace("{days}", String(soul.activeDaysAgo))}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="mt-5 w-full px-4 text-lg font-semibold text-center line-clamp-2 break-words text-foreground">
                        {soul.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="truncate hover:text-foreground">by {soul.author}</span>
                      <div className="flex items-center gap-2 ml-auto shrink-0">
                        <span className="flex items-center gap-0.5"><Star className="size-3" />{soul.stars}</span>
                        <span className="flex items-center gap-0.5"><Eye className="size-3" />{soul.views}</span>
                      </div>
                    </div>
                    
                    {(soul.desc || soul.tags.length > 0) && (
                      <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                        {soul.desc && (
                          <p className="text-xs text-muted-foreground line-clamp-3 whitespace-pre-line">
                            {soul.desc}
                          </p>
                        )}
                        {soul.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {soul.tags.map(tag => (
                              <span key={tag} className="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground text-[10px] px-2 py-0.5 transition-colors hover:bg-primary hover:text-primary-foreground">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
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
