import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

import {
  featuredProjects,
  tableProjects,
} from "../mock-data";
import { ProjectCard } from "./ProjectCard";
import { ProjectsTable } from "./ProjectsTable";

/**
 * „Recent Projects"-Sektion der Overview-Seite.
 * Enthält Featured-Cards (2-Spalten-Grid), die Projekttabelle
 * sowie Links zur vollständigen Projektliste.
 */
export function OverviewRecentProjects() {
  return (
    <section
      className="mt-4"
      aria-labelledby="recent-projects-heading"
    >
      {/* Bordered container wraps header, cards, table and footer */}
      <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface-card">
        {/* Section header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <h2
            id="recent-projects-heading"
            className="text-base font-semibold text-text-primary"
          >
            Recent Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm text-brand-accent transition-opacity hover:opacity-80"
          >
            View all projects
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Featured project cards */}
        <div className="mb-3 grid grid-cols-1 gap-3 px-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Projects table — rounded top, square bottom, flush sides */}
        <div className="overflow-hidden rounded-t-xl border border-border-subtle">
          <ProjectsTable projects={tableProjects} />
        </div>

        {/* Separator unten — Trennlinie zwischen Tabelle und Footer */}
        <div className="border-t border-border-subtle" />

        {/* Footer link */}
        <div className="flex justify-center py-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm text-brand-accent transition-opacity hover:opacity-80"
          >
            View all projects
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
