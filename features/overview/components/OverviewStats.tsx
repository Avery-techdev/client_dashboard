import { statCards } from "../mock-data";
import { StatCard } from "./StatCard";

/**
 * Statistik-Sektion der Overview-Seite.
 * Rendert die drei KPI-Karten (Projekte, Aufgaben, Nachrichten) in einem Grid.
 */
export function OverviewStats() {
  return (
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
  );
}
