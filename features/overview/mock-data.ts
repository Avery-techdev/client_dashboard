import type {
  ActivityItem,
  ProjectData,
  StatCardData,
} from "./types";

export const statCards: StatCardData[] = [
  {
    id: "active-projects",
    label: "Active Projects",
    value: 6,
    trend: {
      direction: "up",
      delta: 2,
      label: "from last week",
    },
    chartValues: [18, 22, 17, 25, 21, 28, 30],
    chartColor: "teal",
    icon: "calendar",
  },
  {
    id: "completed-projects",
    label: "Completed Projects",
    value: 12,
    trend: {
      direction: "up",
      delta: 4,
      label: "from last week",
    },
    chartValues: [28, 30, 27, 34, 32, 38, 42],
    chartColor: "purple",
    icon: "check",
  },
  {
    id: "open-requests",
    label: "Open Requests",
    value: 3,
    trend: {
      direction: "down",
      delta: 1,
      label: "from last week",
    },
    chartValues: [8, 10, 7, 9, 6, 5, 4],
    chartColor: "orange",
    icon: "mail",
  },
];

export const activityItems: ActivityItem[] = [
  {
    id: "activity-1",
    type: "update",
    description: "2 projects were updated",
    timestamp: "Just now",
  },
  {
    id: "activity-2",
    type: "request",
    description: "1 new request received",
    timestamp: "15m ago",
  },
  {
    id: "activity-3",
    type: "task",
    description: "3 tasks due this week",
    timestamp: "View all",
    isViewAll: true,
  },
];

export const featuredProjects: ProjectData[] = [
  {
    id: "nova-website",
    name: "Nova Website Redesign",
    client: "Nova Labs",
    category: "Web Design",
    status: "In Progress",
    description:
      "Redesign and development of the new corporate website.",
    updatedAt: "May 12, 2025",
    initials: "NL",
    accentColor: "teal",
  },
  {
    id: "photon-branding",
    name: "Photon Branding",
    client: "Photon Inc.",
    category: "Branding",
    status: "In Progress",
    description:
      "Complete brand identity and guidelines for product launch.",
    updatedAt: "May 10, 2025",
    initials: "PB",
    accentColor: "purple",
  },
];

export const tableProjects: ProjectData[] = [
  {
    id: "eclipse-landing",
    name: "Eclipse Landing Page",
    client: "Eclipse Corp.",
    category: "Web Design",
    status: "Completed",
    updatedAt: "May 8, 2025",
    initials: "EC",
    accentColor: "orange",
  },
  {
    id: "quantum-dashboard",
    name: "Quantum Dashboard",
    client: "Quantum LLC",
    category: "Development",
    status: "In Review",
    updatedAt: "May 6, 2025",
    initials: "QD",
    accentColor: "purple",
  },
  {
    id: "solaris-marketing",
    name: "Solaris Marketing Site",
    client: "Solaris",
    category: "Web Design",
    status: "Completed",
    updatedAt: "May 5, 2025",
    initials: "SM",
    accentColor: "teal",
  },
];
