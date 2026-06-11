import React from "react";
import { GraduationCap, Briefcase, Code, Trophy, Star, BarChart } from "lucide-react";

export type FilterType = "all" | "education" | "work" | "project" | "achievement";

export const typeLabels: Record<string, string> = {
  all: "全部",
  education: "教育经历",
  work: "工作经历",
  project: "项目经历",
  achievement: "成就与荣誉"
};

export const getIconForType = (type: string, userIcon?: string) => {
  if (userIcon) {
    if (userIcon === "GraduationCap") return <GraduationCap className="size-5" />;
    if (userIcon === "Briefcase") return <Briefcase className="size-5" />;
    if (userIcon === "Code") return <Code className="size-5" />;
    if (userIcon === "Trophy") return <Trophy className="size-5" />;
  }
  
  switch (type) {
    case "education": return <GraduationCap className="size-5" />;
    case "work": return <Briefcase className="size-5" />;
    case "project": return <Code className="size-5" />;
    case "achievement": return <Trophy className="size-5" />;
    default: return <Star className="size-5" />;
  }
};
