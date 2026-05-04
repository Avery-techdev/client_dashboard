import type {
  AccentColor,
  ProjectData,
  ProjectStatus,
} from "../types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectData;
}

function ArrowRightIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarSmallIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="2"
        width="10"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M1 5h10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M4 1v2M8 1v2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
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

const previewGradients: Record<AccentColor, string> = {
  teal: "from-chart-teal/20 to-chart-teal/5",
  purple: "from-chart-purple/20 to-chart-purple/5",
  orange: "from-chart-orange/20 to-chart-orange/5",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface-card">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-5">
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

      {/* Preview area */}
      <div
        className={cn(
          "mx-5 h-28 rounded-lg bg-linear-to-br",
          previewGradients[project.accentColor],
        )}
        role="img"
        aria-label={`Vorschau für ${project.name}`}
      />

      {/* Description */}
      {project.description && (
        <p className="px-5 pt-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4">
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
