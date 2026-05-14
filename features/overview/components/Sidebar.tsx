import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "../constants";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  OverviewIcon,
  ProjectsIcon,
} from "@/components/icons";

const IconMap = {
  overview: OverviewIcon,
  projects: ProjectsIcon,
} as const;

export function Sidebar() {
  return (
    <aside
      className="hidden w-67.5 shrink-0 flex-col border-r border-border-subtle bg-surface-sidebar md:flex"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex h-18 items-center gap-2 border-b border-border-subtle px-5">
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
        className="flex-1 overflow-y-auto px-2 py-3"
        aria-label="Dashboard"
      >
        <ul role="list" className="flex flex-col gap-1">
          {navItems.map(
            ({ href, label, iconType, isActive }) => {
              const Icon = IconMap[iconType];
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-brand-accent/10 font-medium text-brand-accent"
                        : "text-text-secondary hover:bg-surface-card-hover hover:text-text-primary",
                    )}
                  >
                    <Icon />
                    {label}
                  </Link>
                </li>
              );
            },
          )}
        </ul>
      </nav>

      {/* User profile */}
      <div className="border-t border-border-subtle">
        <button
          type="button"
          className="flex w-full items-center gap-2.5 px-3 py-3 text-left transition-colors hover:bg-surface-card-hover"
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

        <div className="px-3 pb-3">
          <p className="mb-0.5 text-xs text-text-muted">
            Need help?
          </p>
          <Link
            href="#support"
            className="flex items-center gap-1 text-xs text-brand-accent transition-opacity hover:opacity-80"
          >
            Contact support
            <ExternalLinkIcon />
          </Link>
        </div>
      </div>
    </aside>
  );
}
