"use client";
// "use client" — braucht useState für mobile Navigation Toggle

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "../constants";
import {
  BellIcon,
  MenuIcon,
  OverviewIcon,
  ProjectsIcon,
  XIcon,
} from "@/components/icons";

const IconMap = {
  overview: OverviewIcon,
  projects: ProjectsIcon,
} as const;

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      dialogRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
  }, [isMenuOpen]);

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
            <XIcon width={20} height={20} />
          ) : (
            <MenuIcon />
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
          <BellIcon width={20} height={20} />
        </button>
      </header>

      {/* Mobile nav overlay */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-title"
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 outline-none md:hidden"
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
                <span
                  id="mobile-nav-title"
                  className="text-sm font-semibold text-text-primary"
                >
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
                <XIcon />
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
