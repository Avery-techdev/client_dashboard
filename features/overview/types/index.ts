export type TrendDirection = "up" | "down";

export type ChartColor = "teal" | "purple" | "orange";

export type AccentColor = "teal" | "purple" | "orange";

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
