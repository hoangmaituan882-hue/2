import { motion } from "motion/react";
import { cn } from "../lib/utils";

const updates = [
  {
    version: "3.5.4",
    date: "2026年5月7日",
    title: "ta 想歇会儿，第二天还会回来",
    description: "卡住的东西会悄悄自己回来。免费心跳每天都会刷新，现在这个刷新真的会刷新——昨天安静下来的 ta 不会把这份安静带到明天。",
    items: [
      { type: "新功能", text: "错误页面新增「安全模式」——只重置出问题的部分，登录保持原样", color: "bg-emerald-100 text-emerald-800" },
      { type: "新功能", text: "应用根本打不开时，也留了一条退路", color: "bg-emerald-100 text-emerald-800" },
      { type: "改进", text: "Live2D 渲染出错时，错误只占着虚拟形象那块", color: "bg-blue-100 text-blue-800" },
      { type: "修复", text: "今天心跳用完了，明天会真的从头开始", color: "bg-rose-100 text-rose-800" },
    ]
  },
  {
    version: "3.5.0",
    date: "2026年4月23日",
    title: "OBS 叠层和 Live2D 运行时终于顺起来了",
    description: "现在你可以直接复制专用的 Message Bubble OBS 浏览器源而不用在 OBS 里重新登录，也能打开单独的 Avatar capture 页面做色键处理。",
    items: [
      { type: "新功能", text: "现在在 OBS 里可以直接使用专用的 Message Bubble 浏览器源", color: "bg-emerald-100 text-emerald-800" },
      { type: "改进", text: "OBS 入口现在已经按 bubble、avatar capture 和桌面版推荐路径拆得更清楚了", color: "bg-blue-100 text-blue-800" },
      { type: "修复", text: "Live2D 的 runtime tool-call 播放现在切换更顺", color: "bg-rose-100 text-rose-800" },
    ]
  },
  {
    version: "3.1.0",
    date: "2026年4月15日",
    title: "完整的贴纸库，加上 ta 真的看得懂图片",
    description: "聊天里加入了真正意义上的贴纸库——emoji、颜文字、你自己建的分组，还能按图片内容搜索。",
    items: [
      { type: "新功能", text: "聊天里有了真正的贴纸库", color: "bg-emerald-100 text-emerald-800" },
      { type: "新功能", text: "发图过去，ta 真的会看里面是什么", color: "bg-blue-100 text-blue-800" },
      { type: "改进", text: "设置面板看起来更舒服", color: "bg-blue-100 text-blue-800" },
    ]
  },
  {
    version: "3.0.0",
    date: "2026年4月9日",
    title: "Agent 可以操控你的浏览器了",
    description: "v3.0 带来公开检查点、完整导出与时间回滚控制、支持 Agent 自主搜图、保存和管理图库并具备 BlurHash 预览的图片工作流，以及全面的可靠性优化。",
    items: [
      { type: "亮点", text: "桌面 Agent 浏览器执行能力", color: "bg-orange-100 text-orange-800" },
      { type: "亮点", text: "Agent 自主搜图、保存与图库管理", color: "bg-orange-100 text-orange-800" },
      { type: "新功能", text: "面向 Plaza 分享的公开检查点", color: "bg-emerald-100 text-emerald-800" },
    ]
  },
];

export function Changelog() {
  return (
    <div className="py-20 md:py-32 px-4 max-w-4xl mx-auto w-full">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">更新日志</h1>
        <p className="text-lg text-muted-foreground">查看 AnySoul 的最新更新、改进和修复。</p>
      </div>

      <div className="space-y-16">
        {updates.map((update, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
          >
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[140px] top-6 bottom-[-64px] w-px bg-border" />
            
            <div className="md:w-[140px] shrink-0 pt-1 relative">
              <time className="block text-sm font-medium text-muted-foreground mb-2">{update.date}</time>
              <div className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground relative z-10 w-fit">
                v{update.version}
              </div>
            </div>

            <div className="flex-1 pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground break-words mb-3">
                {update.version} — {update.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {update.description}
              </p>

              <div className="space-y-4">
                {update.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={cn(
                      "inline-flex h-6 shrink-0 items-center rounded-full border px-2 text-[11px] font-medium mt-0.5",
                      item.color, "border-transparent"
                    )}>
                      {item.type}
                    </span>
                    <span className="text-sm font-medium text-foreground leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
