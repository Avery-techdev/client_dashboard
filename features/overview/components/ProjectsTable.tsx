import type {
  AccentColor,
  ProjectData,
  ProjectStatus,
} from "../types";
import { cn } from "@/lib/utils";

interface ProjectsTableProps {
  projects: ProjectData[];
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

export function ProjectsTable({
  projects,
}: ProjectsTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface-card">
      <table className="w-full">
        <thead className="border-b border-border-subtle">
          <tr>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Project
            </th>
            <th
              scope="col"
              className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted md:table-cell"
            >
              Client
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-muted lg:table-cell"
            >
              Last Updated
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Details</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-muted">
          {projects.map((project) => (
            <tr
              key={project.id}
              className="transition-colors hover:bg-surface-card-hover"
            >
              {/* Project */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
                      initialsStyles[project.accentColor],
                    )}
                    aria-hidden="true"
                  >
                    {project.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {project.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {project.category}
                    </p>
                  </div>
                </div>
              </td>

              {/* Client */}
              <td className="hidden px-4 py-4 text-sm text-text-secondary md:table-cell">
                {project.client}
              </td>

              {/* Status */}
              <td className="px-4 py-4">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
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
              </td>

              {/* Last Updated */}
              <td className="hidden px-4 py-4 lg:table-cell">
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <CalendarSmallIcon />
                  <span>{project.updatedAt}</span>
                </div>
              </td>

              {/* Action */}
              <td className="px-4 py-4">
                <button
                  type="button"
                  aria-label={`${project.name} Details anzeigen`}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-text-muted transition-colors hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  <ArrowRightIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
