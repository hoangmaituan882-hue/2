import React from "react";
import { ArchiveTimeline as ReusableArchiveTimeline } from "../../../components/ui/timeline/ArchiveTimeline";
import { postsTimelineData } from "../data/postsTimeline";

export function ArchiveTimeline() {
  return (
    <ReusableArchiveTimeline posts={postsTimelineData} categories={["全部", "游戏", "杂谈", "放映会"]} />
  );
}
