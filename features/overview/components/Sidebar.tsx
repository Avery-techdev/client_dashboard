import Link from "next/link";
import { cn } from "@/lib/utils";

function OverviewIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="6"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="11"
        y="1"
        width="6"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="1"
        y="11"
        width="6"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="11"
        y="11"
        width="6"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6.5V14a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 16 14V7.5A1.5 1.5 0 0 0 14.5 6H9.5L7.5 4H3.5A1.5 1.5 0 0 0 2 5.5v1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 2H2.5A1.5 1.5 0 0 0 1 3.5v5A1.5 1.5 0 0 0 2.5 10h5A1.5 1.5 0 0 0 9 8.5V7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M6 2h3v3M9 2L5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navItems = [
  {
    href: "/",
    label: "Overview",
    Icon: OverviewIcon,
    isActive: true,
  },
  {
    href: "/projects",
    label: "Projects",
    Icon: ProjectsIcon,
    isActive: false,
  },
] as const;

export function Sidebar() {
  return (
    <aside
      className="hidden w-52 shrink-0 flex-col border-r border-border-subtle bg-surface-sidebar md:flex"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-2.5 border-b border-border-subtle px-5">
        <span className="text-sm font-semibold tracking-wide text-text-primary">
          AVERY STUDIO
        </span>
        <span
          className="h-2 w-2 rounded-full bg-brand-accent"
          aria-hidden="true"
        />
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 overflow-y-auto px-3 py-4"
        aria-label="Dashboard"
      >
        <ul role="list" className="flex flex-col gap-1">
          {navItems.map(
            ({ href, label, Icon, isActive }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-brand-accent/10 font-medium text-brand-accent"
                      : "text-text-secondary hover:bg-surface-card-hover hover:text-text-primary",
                  )}
                >
                  <Icon />
                  {label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* User profile */}
      <div className="border-t border-border-subtle">
        <button
          type="button"
          className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-surface-card-hover"
          aria-label="User menu for Avery"
        >
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-xs font-semibold text-brand-accent"
            aria-hidden="true"
          >
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-text-primary">
              Avery
            </p>
            <p className="truncate text-xs text-text-muted">
              Administrator
            </p>
          </div>
          <ChevronDownIcon />
        </button>

        <div className="px-4 pb-4">
          <p className="mb-0.5 text-xs text-text-muted">
            Need help?
          </p>
          <a
            href="#support"
            className="flex items-center gap-1 text-xs text-brand-accent transition-opacity hover:opacity-80"
          >
            Contact support
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </aside>
  );
}
