// Navigation items — Single Source of Truth für Sidebar und MobileHeader
export const navItems = [
  {
    href: "/",
    label: "Overview",
    iconType: "overview" as const,
    isActive: true,
  },
  {
    href: "/projects",
    label: "Projects",
    iconType: "projects" as const,
    isActive: false,
  },
] as const;

export type NavIconType =
  (typeof navItems)[number]["iconType"];
