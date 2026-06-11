import React from "react";
import { TimelineJourney } from "../../../components/ui/timeline/TimelineJourney";
import { timelineData } from "../data/timeline";

export function LifeTimeline() {
  return (
    <TimelineJourney items={timelineData as any} />
  );
}
