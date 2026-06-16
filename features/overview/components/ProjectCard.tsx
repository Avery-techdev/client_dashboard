import type {
  AccentColor,
  ProjectData,
  ProjectStatus,
} from "../types";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  CalendarSmallIcon,
} from "@/components/icons";

interface ProjectCardProps {
  project: ProjectData;
}

// Full class strings for Tailwind scanning
const statusBadgeStyles: Record<ProjectStatus, string> = {
  "In Progress": "bg-status-green/10 text-status-green",
  Completed: "bg-status-green/10 text-status-green",
  "In Review": "bg-status-orange/10 text-status-orange",
};

const initialsStyles: Record<AccentColor, string> = {
  teal: "bg-chart-teal/20 text-chart-teal",
  purple: "bg-chart-purple/20 text-chart-purple",
  orange: "bg-chart-orange/20 text-chart-orange",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface-card">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold",
              initialsStyles[project.accentColor],
            )}
            aria-hidden="true"
          >
            {project.initials}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {project.name}
            </h3>
            <p className="text-xs text-text-secondary">
              {project.client}
            </p>
          </div>
        </div>

        <span
          className={cn(
            "inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium",
            statusBadgeStyles[project.status],
          )}
        >
          <span
            className="mr-1.5 text-[8px]"
            aria-hidden="true"
          >
            ●
          </span>
          {project.status}
        </span>
      </div>

      {/* Preview area — neutral placeholder */}
      <div
        className="mx-4 h-14 rounded-lg bg-surface-card-hover"
        role="img"
        aria-label={`Vorschau für ${project.name}`}
      />

      {/* Description */}
      {project.description && (
        <p className="px-4 pt-3 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          <CalendarSmallIcon />
          <span>Updated {project.updatedAt}</span>
        </div>
        <button
          type="button"
          aria-label={`${project.name} Details anzeigen`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition-colors hover:border-brand-accent hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </article>
  );
}
