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
    <article className="flex h-28 justify-between rounded-xl bg-surface-card p-4">
      {/* Left: icon oben — dann text-spalte linksbündig */}
      <div className="flex h-full flex-col justify-between">
        {/* Oben: icon + label nebeneinander */}
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              iconWrapperStyles[data.icon],
            )}
          >
            <Icon width={18} height={18} />
          </div>
          <p className="whitespace-nowrap text-xs font-medium text-text-secondary">
            {data.label}
          </p>
        </div>

        {/* Mitte+Unten: Zahl und Delta — linksbündig unter dem Label */}
        <div className="pl-10.5">
          <p className="text-2xl font-bold tabular-nums leading-none text-text-primary">
            {data.value}
          </p>
          <div
            className={cn(
              "mt-2.5 flex items-center gap-1 text-xs",
              isUp
                ? "text-status-green"
                : "text-status-orange",
            )}
            aria-label={`${isUp ? "+" : "-"}${data.trend.delta} ${data.trend.label}`}
          >
            {isUp ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <span className="whitespace-nowrap">
              {isUp ? "+" : "-"}
              {data.trend.delta} {data.trend.label}
            </span>
          </div>
        </div>
      </div>

      {/* Rechts unten: chart */}
      <div className="self-end">
        <TrendLine
          values={data.chartValues}
          color={data.chartColor}
          width={60}
          height={30}
        />
      </div>
    </article>
  );
}
