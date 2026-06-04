import { cn } from "../lib/utils";

const reviews = [
  {
    name: "Alex Rivera",
    username: "@arivera",
    body: "AnySoul has completely changed how our team queries internal wikis. The latency is almost imperceptible.",
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=b6e3f4",
  },
  {
    name: "Samantha Lee",
    username: "@samanthalee",
    body: "The Bento UI layout and glassmorphism touches are *chef's kiss*. Plus, the agent autonomous actions save hours.",
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Sam&backgroundColor=c0aede",
  },
  {
    name: "David Chen",
    username: "@davidchen",
    body: "We migrated from a custom LangChain setup to AnySoul. Reduced our infra costs by 40% and improved accuracy.",
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=David&backgroundColor=ffdfbf",
  },
  {
    name: "Emma Wright",
    username: "@emmaw",
    body: "The RAG pipeline is incredible out of the box. Zero hallucination on our financial docs so far.",
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Emma&backgroundColor=d1d4f9",
  },
  {
    name: "Michael Chang",
    username: "@mikec",
    body: "Best DX I've experienced in the AI space. The React SDK is perfectly typed and intuitive.",
    img: "https://api.dicebear.com/7.x/notionists/svg?seed=Mike&backgroundColor=ffd5dc",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  key?: string | number;
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg",
        "bg-card border-border shadow-sm"
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full border border-border bg-secondary" width="44" height="44" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-[15px] font-semibold text-foreground">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-muted-foreground">{username}</p>
        </div>
      </div>
      <blockquote className="mt-5 text-[15px] leading-relaxed text-muted-foreground">"{body}"</blockquote>
    </figure>
  );
};

export function MarqueeSection() {
  return (
    <section id="showcase" className="py-24 overflow-hidden mt-12 bg-[#fafafa] border-y border-border">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Loved by <span className="text-muted-foreground font-normal">Innovators</span></h2>
        <p className="text-muted-foreground text-lg">Join forward-thinking teams building the future with AnySoul.</p>
      </div>
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex w-full overflow-hidden group">
           <div className="flex w-fit animate-marquee flex-row gap-6 py-4 group-hover:[animation-play-state:paused] whitespace-nowrap px-6">
             {reviews.map((review) => (
               <ReviewCard 
                key={review.username} 
                name={review.name}
                username={review.username}
                body={review.body}
                img={review.img}
               />
             ))}
             {/* Duplicate for infinite loop */}
             {reviews.map((review) => (
               <ReviewCard 
                key={review.username + '-dup'} 
                name={review.name}
                username={review.username}
                body={review.body}
                img={review.img}
               />
             ))}
           </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#fafafa] to-transparent md:w-1/3"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#fafafa] to-transparent md:w-1/3"></div>
      </div>
    </section>
  );
}
