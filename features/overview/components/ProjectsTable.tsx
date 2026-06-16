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

interface ProjectsTableProps {
  projects: ProjectData[];
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
    <div className="overflow-hidden">
      <table className="w-full">
        <thead className="border-b border-border-subtle">
          <tr>
            <th
              scope="col"
              className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Project
            </th>
            <th
              scope="col"
              className="hidden px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted md:table-cell"
            >
              Client
            </th>
            <th
              scope="col"
              className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              Status
            </th>
            <th
              scope="col"
              className="hidden px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider text-text-muted lg:table-cell"
            >
              Last Updated
            </th>
            <th scope="col" className="px-4 py-2.5">
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
              <td className="px-4 py-2">
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
              <td className="hidden px-4 py-2 text-sm text-text-secondary md:table-cell">
                {project.client}
              </td>

              {/* Status */}
              <td className="px-4 py-2">
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
              <td className="hidden px-4 py-2 lg:table-cell">
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <CalendarSmallIcon />
                  <span>{project.updatedAt}</span>
                </div>
              </td>

              {/* Action */}
              <td className="px-4 py-2">
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
