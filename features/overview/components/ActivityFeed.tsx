import type { ActivityItem } from "../types";
import { cn } from "@/lib/utils";
import {
  PersonIcon,
  TaskIcon,
  UpdateIcon,
} from "@/components/icons";

interface ActivityFeedProps {
  items: ActivityItem[];
}

// Full class strings for Tailwind scanning
const iconWrapperStyles = {
  update: "bg-brand-accent/10 text-brand-accent",
  request: "bg-chart-purple/10 text-chart-purple",
  task: "bg-status-orange/10 text-status-orange",
} as const;

const IconMap = {
  update: UpdateIcon,
  request: PersonIcon,
  task: TaskIcon,
} as const;

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className="rounded-xl border border-border-subtle p-4">
      <h2 className="mb-3 text-sm font-semibold text-text-primary">
        Today at a glance
      </h2>
      <ul role="list" className="flex flex-col gap-2.5">
        {items.map((item) => {
          const Icon = IconMap[item.type];
          return (
            <li
              key={item.id}
              className="flex items-center gap-3"
            >
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                  iconWrapperStyles[item.type],
                )}
              >
                <Icon />
              </div>
              <span className="flex-1 text-sm text-text-primary">
                {item.description}
              </span>
              {item.isViewAll ? (
                <button
                  type="button"
                  className="shrink-0 cursor-pointer text-xs text-brand-accent hover:opacity-80"
                >
                  {item.timestamp}
                </button>
              ) : (
                <span className="shrink-0 text-xs text-text-muted">
                  {item.timestamp}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
