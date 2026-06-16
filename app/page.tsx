import type { Metadata } from "next";
import {
  MobileHeader,
  OverviewHero,
  OverviewRecentProjects,
  OverviewStats,
  OverviewTopBar,
  Sidebar,
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
          <OverviewTopBar />

          {/* Main scrollable content */}
          <main
            id="main-content"
            className="flex-1 overflow-y-auto bg-surface-content"
            aria-label="Dashboard Übersicht"
          >
            <div className="mx-auto w-full px-6 py-6">
              <OverviewHero />
              <OverviewStats />
              <OverviewRecentProjects />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
