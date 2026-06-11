import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { LifeTimeline } from "./components/LifeTimeline";
import { ArchiveTimeline } from "./components/ArchiveTimeline";

type ActiveTab = "life" | "archive";

export function Timeline() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("life");

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="mb-8 pt-4">
        <div className="flex space-x-2 border-b border-border mb-8">
          <button
            onClick={() => setActiveTab("life")}
            className={cn(
              "px-6 py-3 font-bold text-lg border-b-2 transition-colors relative top-[1px]",
              activeTab === "life" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            人生历程
          </button>
          <button
            onClick={() => setActiveTab("archive")}
            className={cn(
              "px-6 py-3 font-bold text-lg border-b-2 transition-colors relative top-[1px]",
              activeTab === "archive" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            简洁历史
          </button>
        </div>
      </div>

      {activeTab === "life" ? <LifeTimeline /> : <ArchiveTimeline />}
    </div>
  );
}

