"use client";
// "use client" — braucht useState für mobile Navigation Toggle

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "../constants";

function MenuOpenIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6h14M3 10h14M3 14h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuCloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4l12 12M16 4L4 16"
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 15.5a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 13.5V9a5.5 5.5 0 1 1 11 0v4.5l1.5 1v.5h-14v-.5l1.5-1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

const IconMap = {
  overview: OverviewIcon,
  projects: ProjectsIcon,
} as const;

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-border-subtle bg-surface-sidebar px-4 py-3 md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={
            isMenuOpen
              ? "Navigation schließen"
              : "Navigation öffnen"
          }
          className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          {isMenuOpen ? (
            <MenuCloseIcon />
          ) : (
            <MenuOpenIcon />
          )}
        </button>

        <span className="text-sm font-semibold text-text-primary">
          Overview
        </span>

        <button
          type="button"
          aria-label="Benachrichtigungen"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-card hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          <BellIcon />
        </button>
      </header>

      {/* Mobile nav overlay */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-surface-base/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Nav panel */}
          <nav
            className="absolute left-0 top-0 flex h-full w-64 flex-col border-r border-border-subtle bg-surface-sidebar"
            aria-label="Mobile Dashboard-Navigation"
          >
            <div className="flex h-14 items-center justify-between border-b border-border-subtle px-5">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-semibold text-text-primary">
                  AVERY STUDIO
                </span>
                <span
                  className="h-2 w-2 rounded-full bg-brand-accent"
                  aria-hidden="true"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Navigation schließen"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <ul
              role="list"
              className="flex flex-col gap-1 p-3"
            >
              {navItems.map(
                ({ href, label, iconType, isActive }) => {
                  const Icon = IconMap[iconType];
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                        aria-current={
                          isActive ? "page" : undefined
                        }
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                          isActive
                            ? "bg-brand-accent/10 font-medium text-brand-accent"
                            : "text-text-secondary hover:bg-surface-card hover:text-text-primary",
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
        </div>
      )}
    </>
  );
}
