import React, { useState } from "react";
import { TimelineJourney } from "../components/ui/timeline/TimelineJourney";
import { ArchiveTimeline } from "../components/ui/timeline/ArchiveTimeline";
import { timelineData } from "../features/Timeline/data/timeline";
import { postsTimelineData } from "../features/Timeline/data/postsTimeline";
import { Play } from "lucide-react";
import { cn } from "../lib/utils";

export function UIComponents() {
  const [activeTab, setActiveTab] = useState<"journey" | "archive">("journey");

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">UI Animation Components</h1>
        <p className="text-muted-foreground text-lg">Reusable React components with smooth scrolling animations.</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-muted/40 border p-1.5 rounded-full items-center">
          <button
            onClick={() => setActiveTab("journey")}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-bold transition-all",
              activeTab === "journey"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            人生历程 (Journey)
          </button>
          <button
            onClick={() => setActiveTab("archive")}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-bold transition-all",
              activeTab === "archive"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            简洁历史 (Archive)
          </button>
        </div>
      </div>

      <div className="mb-20">
        {activeTab === "journey" ? (
          <TimelineJourney items={timelineData as any} showStats={true} />
        ) : (
          <ArchiveTimeline posts={postsTimelineData} />
        )}
      </div>

    </div>
  );
}
