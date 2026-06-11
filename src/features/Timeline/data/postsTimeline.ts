export type ArchiveCategory = "全部" | "游戏" | "杂谈" | "放映会";

export interface PostTimelineItem {
  id: string;
  date: string;
  title: string;
  tags: string[];
  category: "游戏" | "杂谈" | "放映会" | "其他";
}

export const postsTimelineData: PostTimelineItem[] = [
  { id: "1", date: "2025-01-20", title: "黑神话：悟空通关感想", tags: ["游戏", "单机"], category: "游戏" },
  { id: "1_2", date: "2025-01-18", title: "最近的一些想法与随笔", tags: ["生活", "杂谈"], category: "杂谈" },
  { id: "1_3", date: "2024-12-25", title: "圣诞节的放映活动总结", tags: ["活动", "总结"], category: "放映会" },
  { id: "1_4", date: "2024-11-11", title: "游戏库该整理一下了", tags: ["游戏", "日常"], category: "游戏" },
  { id: "1_5", date: "2024-10-15", title: "回音之壁：音乐分享会", tags: ["音乐", "放映会"], category: "放映会" },
  { id: "1_6", date: "2024-09-02", title: "对独立游戏未来的看法", tags: ["游戏", "杂谈"], category: "杂谈" },
  { id: "1_7", date: "2024-08-20", title: "怪物猎人：荒野 前瞻测试", tags: ["游戏", "评测"], category: "游戏" },
  { id: "1_8", date: "2024-07-07", title: "夏日动画推荐补完计划", tags: ["动画", "杂谈"], category: "杂谈" },
  { id: "1_9", date: "2024-06-15", title: "周末大放映：诺兰特辑", tags: ["电影", "导演"], category: "放映会" },
  { id: "2", date: "2024-05-01", title: "本周放映：星际穿越", tags: ["电影", "科幻"], category: "放映会" },
  { id: "2_1", date: "2024-04-20", title: "艾尔登法环DLC期待与猜测", tags: ["游戏", "预热"], category: "游戏" },
  { id: "3", date: "2024-04-01", title: "独立游戏开发杂谈", tags: ["开发", "杂谈"], category: "杂谈" },
  { id: "3_1", date: "2024-03-15", title: "怀旧服游玩日记", tags: ["游戏", "日记"], category: "游戏" },
  { id: "3_2", date: "2024-02-28", title: "近期看的几部经典电影", tags: ["电影", "影评"], category: "杂谈" },
  { id: "4", date: "2024-01-15", title: "空洞骑士 - 深渊探险记录", tags: ["游戏", "记录"], category: "游戏" },
  { id: "4_1", date: "2023-12-31", title: "年度总结：2023游戏回忆录", tags: ["总结", "游戏"], category: "杂谈" },
  { id: "4_2", date: "2023-11-15", title: "经典再放送：攻壳机动队", tags: ["动漫", "科幻"], category: "放映会" },
  { id: "5", date: "2023-10-01", title: "关于UI设计的几点思考", tags: ["设计", "杂谈"], category: "杂谈" },
  { id: "5_1", date: "2023-09-10", title: "只狼开荒：死字的100种写法", tags: ["游戏", "动作"], category: "游戏" },
  { id: "5_2", date: "2023-08-25", title: "闲聊：我们为什么喜欢打游戏", tags: ["游伴", "闲聊"], category: "杂谈" },
  { id: "5_3", date: "2023-07-30", title: "放映夜：千与千寻", tags: ["电影", "动画"], category: "放映会" },
  { id: "5_4", date: "2023-05-20", title: "王国之泪发售前夜", tags: ["游戏", "预告"], category: "游戏" },
  { id: "5_5", date: "2023-03-15", title: "主机平台的发展历史浅析", tags: ["历史", "杂谈"], category: "杂谈" },
  { id: "6", date: "2022-08-01", title: "EVA的重新放映体验", tags: ["动漫", "回顾"], category: "放映会" },
];
