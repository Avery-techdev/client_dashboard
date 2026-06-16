import { BellIcon, SearchIcon } from "@/components/icons";

/**
 * Desktop-Topbar der Overview-Seite.
 * Zeigt Seitentitel, Suchformular und Benachrichtigungs-Button.
 * Nur auf md+ sichtbar — Mobile wird durch MobileHeader abgedeckt.
 */
export function OverviewTopBar() {
  return (
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
  );
}
