import { cn } from "../lib/utils";

const row1Reviews = [
  {
    name: "千雪",
    role: "社区测试者",
    body: "自由发展这条路已经铺好了，不同玩家会有不同的发展路线。目前项目还在初期，期待未来会有更好的优化方案。",
  },
  {
    name: "千雪",
    role: "社区核心成员",
    body: "市面上大多数AI上来就自来熟，我很注重真实的情感培养。AnySoul最好的点就是从未定义的AI开始认识到逐渐熟悉，就像真的在培养一个女儿一样，一步步脚印走得特别踏实。",
  },
  {
    name: "张",
    role: "资深用户",
    body: "AnySoul体验上更像是非常长期的伙伴，每个用户的独特定制性非常高，和酒馆类的区别还蛮大的。",
  },
];

const row2Reviews = [
  {
    name: "Az",
    role: "用户",
    body: "你的界面交互和引导做的真是满分，而且很细节，每一个小地方都能看出用心。",
  },
  {
    name: "瀚海一宿",
    role: "Roleplay爱好者",
    body: "我太需要这个了！之前寒假用豆包做roleplay，但大模型的记忆很短而且看不到具体存档，所以就搁置了。AnySoul的想法和我完美贴合。",
  },
  {
    name: "猫猫是只萝卜特",
    role: "前端爱好者",
    body: "这是我见过最酷的前端，UX设计也好棒。感觉好用心，我也想做一个，太酷啦！",
  },
];

const ReviewCard = ({
  name,
  role,
  body,
}: {
  key?: string | number;
  name: string;
  role: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[320px] md:w-[380px] shrink-0 overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        "bg-card border border-border shadow-sm flex flex-col min-h-[220px]"
      )}
    >
      <div className="absolute top-4 left-6 text-[80px] text-muted-foreground/10 font-serif leading-none select-none">
        "
      </div>
      <blockquote className="relative z-10 text-[15px] leading-relaxed text-foreground mt-4 mb-8 flex-grow">
        {body}
      </blockquote>
      <div className="flex flex-col relative z-10 mt-auto">
        <figcaption className="text-[15px] font-semibold text-foreground">
          {name}
        </figcaption>
        <p className="text-[13px] font-medium text-muted-foreground mt-0.5">{role}</p>
      </div>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <section id="showcase" className="py-32 md:py-48 overflow-hidden bg-background">
      <div className="text-center mb-16 md:mb-24 px-4">
        <h2 className="text-4xl md:text-[54px] font-bold tracking-tight mb-4 md:mb-8 text-foreground">真实的声音</h2>
        <p className="text-muted-foreground text-lg md:text-xl">每一段养成，都是独一无二的旅程</p>
      </div>
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-6">
        {/* Row 1 */}
        <div className="flex w-full overflow-hidden group">
           <div className="flex w-fit animate-marquee flex-row gap-6 py-2 group-hover:[animation-play-state:paused] px-3">
             {[...row1Reviews, ...row1Reviews, ...row1Reviews, ...row1Reviews].map((review, i) => (
               <ReviewCard 
                key={`row1-${i}`} 
                name={review.name}
                role={review.role}
                body={review.body}
               />
             ))}
           </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-full overflow-hidden group">
           <div className="flex w-fit flex-row gap-6 py-2 group-hover:[animation-play-state:paused] px-3 animate-marquee-reverse">
             {[...row2Reviews, ...row2Reviews, ...row2Reviews, ...row2Reviews].map((review, i) => (
               <ReviewCard 
                key={`row2-${i}`} 
                name={review.name}
                role={review.role}
                body={review.body}
               />
             ))}
           </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </section>
  );
}
