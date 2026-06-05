import type { Metadata } from "next";
import Link from "next/link";
import {
  ActivityFeed,
  ArrowRightIcon,
  BellIcon,
  MobileHeader,
  ProjectCard,
  ProjectsTable,
  SearchIcon,
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

export default function OverviewPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-surface-base px-4 py-3">
      {/* App shell — zentrierter Container, geschlossene Fläche */}
      <div className="flex w-full max-w-6xl min-h-[calc(100vh-24px)] overflow-hidden rounded-5 border border-border-subtle">
        {/* Desktop sidebar */}
        <Sidebar />

        {/* Content column */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile header — Client Component for hamburger toggle */}
          <MobileHeader />

          {/* Desktop top bar */}
          <header className="hidden h-18 shrink-0 items-center justify-between border-b border-border-subtle bg-surface-content px-6 md:flex">
            <div>
              <p className="text-base font-semibold text-text-primary">
                Overview
              </p>
              <p className="text-2xs text-text-muted">
                Client Dashboard
              </p>
            </div>
            <div className="flex items-center gap-3">
              <form role="search">
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                    <SearchIcon />
                  </span>
                  <input
                    type="search"
                    placeholder="Search projects..."
                    className="h-9 w-56 rounded-lg border border-border-subtle bg-surface-input pl-9 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    aria-label="Projekte suchen"
                    suppressHydrationWarning
                  />
                </div>
              </form>
              <button
                type="button"
                aria-label="Benachrichtigungen — neue vorhanden"
                className="relative flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <BellIcon width={26} height={26} />
                <span
                  className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent"
                  aria-hidden="true"
                />
              </button>
            </div>
          </header>

          {/* Main scrollable content */}
          <main
            id="main-content"
            className="flex-1 overflow-y-auto bg-surface-content"
            aria-label="Dashboard Übersicht"
          >
            <div className="mx-auto w-full px-6 py-6">
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
