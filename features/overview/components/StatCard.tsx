import type { StatCardData } from "../types";
import { TrendLine } from "./TrendLine";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  CheckIcon,
  MailIcon,
} from "@/components/icons";

interface StatCardProps {
  data: StatCardData;
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
