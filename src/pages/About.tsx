import { motion } from "motion/react";
import { ShieldAlert, Info, GraduationCap, Search, AlertCircle, Coffee } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto w-full px-6 flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-8 space-y-4"
      >
        <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-primary/10 rounded-full mb-2">
          <Info className="size-8 sm:size-10 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          关于本项目
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl font-medium tracking-wide">
          纯属图一乐 / Just for Fun
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Box 1: Info Source */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
             <Search className="size-32" />
          </div>
          <div className="size-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Search className="size-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">数据来源</h3>
            <p className="text-muted-foreground leading-relaxed">
              本项目涉及到的人设、头像、事件记录等所有信息，<strong>全部来源于公开网络平台</strong>（如社交媒体、视频网站等）。不涉及任何私密数据获取。
            </p>
          </div>
        </motion.div>

        {/* Box 2: Graduation Project */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
             <GraduationCap className="size-32" />
          </div>
          <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <GraduationCap className="size-6 text-emerald-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">毕业设计</h3>
            <p className="text-muted-foreground leading-relaxed">
              这是作者的一项<strong>个人毕业设计作品</strong>。旨在探索前端技术与 AI 结合的可能性，通过构建一个具有交互性的界面来进行技术实践和验证。
            </p>
          </div>
        </motion.div>

        {/* Box 3: Handcrafted Platform */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group md:col-span-2"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
             <Coffee className="size-32" />
          </div>
          <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
            <Coffee className="size-6 text-amber-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">古法手搓匠人 AI</h3>
            <p className="text-muted-foreground leading-relaxed">
              本项目自诩为“<strong>古法手搓匠人 AI</strong>”。虽然利用了现代的 AI 技术进行辅助生成和构建，但背后蕴含着对每一个组件、每一处排版、每一次动画的“手工”调配与执着。它不仅仅是机器的产物，更是融合了开发者与 AI 协作心血的结晶。纯属图一乐，切勿过分当真。
            </p>
          </div>
        </motion.div>

        {/* Box 4: Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card border border-border border-red-500/20 dark:border-red-500/20 rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group md:col-span-2 bg-red-500/5"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
             <ShieldAlert className="size-32 text-red-500" />
          </div>
          <div className="flex items-center gap-3">
             <div className="size-10 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
               <AlertCircle className="size-5 text-red-500" />
             </div>
             <h3 className="text-lg font-bold text-foreground text-red-600 dark:text-red-400">免责声明</h3>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              本页面及应用仅供学习、交流与娱乐使用，不具有任何商业目的。提到的任何团体、个人、品牌等仅为展示功能需要，<strong>如同人作品一般</strong>。
              <br/><br/>
              如果本页面的任何内容（包括但不限于文字、图像、界面设计）让您感到不适，或者有<strong>侵犯到您的版权、名誉权等合法权益</strong>的情况，请立即联系作者，我们会查实后在<strong>第一时间进行清理和删除</strong>。非常感谢理解与包容！
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center text-sm font-mono text-muted-foreground/60 py-8 mb-8"
      >
        Designed with curiosity · 2026
      </motion.div>
    </div>
  );
}
