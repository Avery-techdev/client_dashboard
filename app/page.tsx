import type { Metadata } from "next";
import Link from "next/link";
import {
  ActivityFeed,
  MobileHeader,
  ProjectCard,
  ProjectsTable,
  Sidebar,
  StatCard,
  activityItems,
  featuredProjects,
  statCards,
  tableProjects,
} from "@/features/overview";

export const metadata: Metadata = {
  title: "Overview — Avery Studio",
};

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="6.5"
        cy="6.5"
        r="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 12l-2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 14a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 12V8a4.5 4.5 0 1 1 9 0v4l1.5.75V13H2v-.25L3.5 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
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

export default function OverviewPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-surface-base px-4 py-3">
      {/* App shell — zentrierter Container, max 1440px, geschlossene Fläche */}
      <div
        className="flex w-full overflow-hidden rounded-[20px] border border-border-subtle"
        style={{
          maxWidth: "1440px",
          minHeight: "calc(100vh - 24px)",
        }}
      >
        {/* Desktop sidebar */}
        <Sidebar />

        {/* Content column */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile header — Client Component for hamburger toggle */}
          <MobileHeader />

          {/* Desktop top bar */}
          <div className="hidden h-[72px] shrink-0 items-center justify-between border-b border-border-subtle bg-surface-content px-6 md:flex">
            <div>
              <p className="text-base font-semibold text-text-primary">
                Overview
              </p>
              <p className="text-[--text-2xs] text-text-muted">
                Client Dashboard
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="h-9 w-56 rounded-lg border border-border-subtle bg-surface-input pl-9 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  aria-label="Projekte suchen"
                />
              </div>
              <button
                type="button"
                aria-label="Benachrichtigungen — neue vorhanden"
                className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:border-brand-accent hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <BellIcon />
                <span
                  className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand-accent"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Main scrollable content */}
          <main
            id="main-content"
            className="flex-1 overflow-y-auto bg-surface-content"
            aria-label="Dashboard Übersicht"
          >
            <div className="mx-auto w-full max-w-screen-xl px-6 py-6">
              {/* Hero — 2-Spalten: Greeting links ~60%, ActivityFeed rechts ~40% */}
              <div className="mb-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[3fr_2fr]">
                <div>
                  <h1 className="text-4xl font-bold text-text-primary">
                    Good morning, Avery.
                  </h1>
                  <p className="mt-2 text-base text-text-secondary">
                    Here&apos;s what&apos;s happening with
                    your projects today.
                  </p>
                </div>
                <div>
                  <ActivityFeed items={activityItems} />
                </div>
              </div>

              {/* Stats */}
              <section
                className="mb-4"
                aria-label="Projektstatistiken"
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {statCards.map((stat) => (
                    <StatCard key={stat.id} data={stat} />
                  ))}
                </div>
              </section>

              {/* Recent Projects */}
              <section
                className="mt-4"
                aria-labelledby="recent-projects-heading"
              >
                <div className="mb-3 flex items-center justify-between">
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

                {/* Featured cards */}
                <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {featuredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </div>

                {/* Projects table */}
                <ProjectsTable projects={tableProjects} />

                {/* Footer link */}
                <div className="mt-4 flex justify-center">
                  <Link
                    href="/projects"
                    className="flex items-center gap-2 text-sm text-brand-accent transition-opacity hover:opacity-80"
                  >
                    View all projects
                    <ArrowRightIcon />
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
