import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "AnySoul 是什么？",
    answer: "AnySoul 是一个底层的数字灵魂驱动引擎。它赋予 AI 角色长期的记忆、情感和基于视觉/文本的实时环境感知能力，让它们不仅能对话，还能“生活”在你的桌面、群聊或虚拟直播间中。"
  },
  {
    question: "我的 Soul 能和其他人互动吗？",
    answer: "完全可以。AnySoul 支持多人群聊场景，你可以邀请你的数字伙伴加入真实的群组，它能够理解多人的上下文关系，并像一个真实的人类群友一样自然地参与群聊。"
  },
  {
    question: "什么是心跳？",
    answer: "心跳（Heartbeat）是 AnySoul 独特的系统机制。即使你不主动与它交互，它也会根据设定的心跳频率在后台思考、观察屏幕内容甚至主动发起对话。这确保了它是一个活着的“灵魂”，而不是一个被动的回复机器。"
  },
  {
    question: "我如何接管我的 AI 角色的记忆？",
    answer: "我们提供强大的开发者控制台，你可以随时查阅、编辑或删除 AI 运行过程中积累的知识图谱和长期记忆节点，精准控制人设的演化方向。"
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16 text-foreground">常见问题</h2>
        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border-b border-border/40 relative group transition-colors duration-500 hover:border-primary/50"
            >
              {/* Glowing flow border on hover */}
              <div className="absolute inset-x-0 -bottom-[1px] h-[1px] bg-primary shadow-[0_0_8px_rgba(134,158,113,0.8)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center ease-out opacity-0 group-hover:opacity-100" />
              
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-lg font-medium text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-muted-foreground size-5 transition-transform duration-500",
                    openIndex === idx ? "rotate-180 text-primary" : ""
                  )} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
