import { activityItems } from "../mock-data";
import { ActivityFeed } from "./ActivityFeed";

/**
 * Hero-Bereich der Overview-Seite.
 * Zeigt die persönliche Begrüßung (links) und den Activity-Feed (rechts)
 * in einem 2-Spalten-Layout ab lg.
 */
export function OverviewHero() {
  return (
    <div className="mb-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-[3fr_2fr]">
      <div>
        <h1 className="text-4xl font-bold text-text-primary">
          Good morning, Avery.
        </h1>
        <p className="mt-2 text-base text-text-secondary">
          Here&apos;s what&apos;s happening with your
          projects today.
        </p>
      </div>

      <div>
        <ActivityFeed items={activityItems} />
      </div>
    </div>
  );
}
