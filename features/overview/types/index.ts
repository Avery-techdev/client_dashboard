export type TrendDirection = "up" | "down";

/** Einheitliche Farbpalette für Charts und Projekt-Akzente */
export type AccentColor = "teal" | "purple" | "orange";

/** Alias — Chart-Sparklines verwenden dieselbe Farbpalette */
export type ChartColor = AccentColor;

export type ActivityItemType =
  | "update"
  | "request"
  | "task";

export type ProjectStatus =
  | "In Progress"
  | "Completed"
  | "In Review";

export type StatCardIcon = "calendar" | "check" | "mail";

export interface StatCardData {
  id: string;
  label: string;
  value: number;
  trend: {
    direction: TrendDirection;
    delta: number;
    label: string;
  };
  chartValues: number[];
  chartColor: ChartColor;
  icon: StatCardIcon;
}

export interface ActivityItem {
  id: string;
  type: ActivityItemType;
  description: string;
  timestamp: string;
  isViewAll?: boolean;
}

export interface ProjectData {
  id: string;
  name: string;
  client: string;
  category: string;
  status: ProjectStatus;
  description?: string;
  updatedAt: string;
  initials: string;
  accentColor: AccentColor;
}
