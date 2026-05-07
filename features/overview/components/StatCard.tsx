import type { StatCardData } from "../types";
import { TrendLine } from "./TrendLine";
import { cn } from "@/lib/utils";

interface StatCardProps {
  data: StatCardData;
}

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="4"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 8h16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 2v3M14 2v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 10l2.5 2.5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="5"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 7l8 5 8-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 10.5V2.5M2.5 6.5l4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 2.5v8M2.5 6.5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Full class strings required for Tailwind scanning
const iconWrapperStyles = {
  calendar: "bg-chart-teal/10 text-chart-teal",
  check: "bg-chart-purple/10 text-chart-purple",
  mail: "bg-chart-orange/10 text-chart-orange",
} as const;

const IconMap = {
  calendar: CalendarIcon,
  check: CheckIcon,
  mail: MailIcon,
} as const;

export function StatCard({ data }: StatCardProps) {
  const Icon = IconMap[data.icon];
  const isUp = data.trend.direction === "up";

  return (
    <article className="flex flex-col rounded-xl bg-surface-card p-3.5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <div
            className={cn(
              "mb-2 flex h-8 w-8 items-center justify-center rounded-lg",
              iconWrapperStyles[data.icon],
            )}
          >
            <Icon />
          </div>
          <p className="text-sm text-text-secondary">
            {data.label}
          </p>
          <p className="mt-0.5 text-xl font-bold tabular-nums text-text-primary">
            {data.value}
          </p>
        </div>

        <div className="shrink-0 pt-1">
          <TrendLine
            values={data.chartValues}
            color={data.chartColor}
          />
        </div>
      </div>

      <div
        className={cn(
          "mt-2 flex items-center gap-1 text-xs",
          isUp ? "text-status-green" : "text-status-orange",
        )}
        aria-label={`${isUp ? "+" : "-"}${data.trend.delta} ${data.trend.label}`}
      >
        {isUp ? <ArrowUpIcon /> : <ArrowDownIcon />}
        <span>
          {isUp ? "+" : "-"}
          {data.trend.delta} {data.trend.label}
        </span>
      </div>
    </article>
  );
}
