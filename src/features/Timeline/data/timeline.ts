export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
  startDate: string;
  endDate?: string;
  location?: string;
  organization?: string;
  position?: string;
  skills?: string[];
  achievements?: string[];
  links?: {
    name: string;
    url: string;
    type: "website" | "certificate" | "project" | "other";
  }[];
  icon?: string;
  color?: string;
  featured?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: "current-study",
    title: "计算机科学与技术在读",
    description: "目前正在学习计算机科学与技术，专注于Web开发和软件工程。",
    type: "education",
    startDate: "2022-09-01",
    location: "北京",
    organization: "北京理工大学",
    skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"],
    achievements: [
      "当前 GPA: 3.6/4.0",
      "完成数据结构与算法课程项目",
    ],
    icon: "GraduationCap",
    color: "#059669",
    featured: true,
  },
  {
    id: "summer-internship-2024",
    title: "前端开发实习生",
    description: "在一家互联网公司暑期实习，参与Web应用的前端开发",
    type: "work",
    startDate: "2024-07-01",
    endDate: "2024-08-31",
    location: "北京",
    organization: "TechStart互联网公司",
    position: "前端开发实习生",
    skills: ["React", "JavaScript", "CSS3", "Git", "Figma"],
    achievements: [
      "完成用户界面组件开发",
      "学习团队协作和代码规范",
      "获得优秀实习表现证书",
    ],
    icon: "Briefcase",
    color: "#DC2626",
    featured: true,
  },
  {
    id: "open-source-project-1",
    title: "Mizuki 主题 React 移植",
    description: "将流行的 Mizuki 主题移植为基于 React 的应用。",
    type: "project",
    startDate: "2023-11-15",
    endDate: "2024-01-20",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: [
      { name: "在线演示", url: "#", type: "website" }
    ],
    icon: "Code",
    color: "#3B82F6",
    featured: false,
  },
  {
    id: "hackathon-winner",
    title: "校园创客马拉松一等奖",
    description: "使用智能校园导航应用赢得了年度校园创客马拉松的一等奖。",
    type: "achievement",
    startDate: "2023-05-10",
    location: "北京",
    organization: "大学计算机中心",
    achievements: [
      "带领4人团队开发室内导航工具",
      "获得最佳实用应用奖"
    ],
    icon: "Trophy",
    color: "#F59E0B",
    featured: true,
  }
];
