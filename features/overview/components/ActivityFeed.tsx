import type { ActivityItem } from "../types";
import { cn } from "@/lib/utils";

interface ActivityFeedProps {
  items: ActivityItem[];
}

function UpdateIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7.5 4.5v3l2 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="7.5"
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M2 13.5c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TaskIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="2"
        width="12"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.5 7.5h6M4.5 5h3M4.5 10h4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
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
              <span
                className={cn(
                  "shrink-0 text-xs",
                  item.isViewAll
                    ? "cursor-pointer text-brand-accent hover:opacity-80"
                    : "text-text-muted",
                )}
              >
                {item.timestamp}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
