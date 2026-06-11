import React from "react";
import { BarChart, Code } from "lucide-react";
import { getIconForType, typeLabels, FilterType } from "./utils";

interface StatsProps {
  stats: {
    counts: Record<string, number>;
    skills: [string, number][];
  };
}

export function TimelineStatsSidebar({ stats }: StatsProps) {
  return (
    <div className="hidden lg:flex flex-col gap-6 sticky top-24">
      <div className="bg-card border rounded-3xl p-6 shadow-sm">
        <h3 className="font-bold flex items-center gap-2 mb-4">
          <BarChart className="size-5" /> 经历统计
        </h3>
        <div className="space-y-3 pl-1">
          {Object.entries(typeLabels).filter(([k]) => k !== "all").map(([key, label]) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                {getIconForType(key)}
                <span className="text-muted-foreground">{label}</span>
              </div>
              <span className="font-bold font-mono">{stats.counts[key as FilterType] || 0}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border rounded-3xl p-6 shadow-sm">
        <h3 className="font-bold flex items-center gap-2 mb-4">
          <Code className="size-5" /> 常用技能
        </h3>
        <div className="flex flex-wrap gap-2">
          {stats.skills.map(([skill, count]) => (
            <div key={skill} className="flex items-center gap-1 px-2.5 py-1 bg-muted rounded-full text-xs font-medium">
              {skill} 
              <span className="text-[10px] opacity-60 ml-0.5 bg-background px-1.5 rounded-full font-mono">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
