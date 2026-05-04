import type { ChartColor } from "../types";

interface TrendLineProps {
  values: number[];
  color: ChartColor;
  width?: number;
  height?: number;
}

const cssVarMap: Record<ChartColor, string> = {
  teal: "var(--color-chart-teal)",
  purple: "var(--color-chart-purple)",
  orange: "var(--color-chart-orange)",
};

function buildPaths(
  values: number[],
  w: number,
  h: number,
): { line: string; area: string } {
  if (values.length < 2) return { line: "", area: "" };

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = w / (values.length - 1);

  const pts = values.map((v, i) => ({
    x: i * stepX,
    y: h - ((v - min) / range) * (h * 0.82) - h * 0.09,
  }));

  let line = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`;
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1];
    const c = pts[i];
    const cpX = ((p.x + c.x) / 2).toFixed(2);
    line += ` C ${cpX},${p.y.toFixed(2)} ${cpX},${c.y.toFixed(2)} ${c.x.toFixed(2)},${c.y.toFixed(2)}`;
  }

  const last = pts[pts.length - 1];
  const area = `${line} L ${last.x.toFixed(2)},${h} L ${pts[0].x.toFixed(2)},${h} Z`;

  return { line, area };
}

export function TrendLine({
  values,
  color,
  width = 80,
  height = 36,
}: TrendLineProps) {
  const { line, area } = buildPaths(values, width, height);
  const cssVar = cssVarMap[color];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      fill="none"
    >
      {area && (
        <path
          d={area}
          style={{ fill: cssVar, fillOpacity: 0.12 }}
        />
      )}
      {line && (
        <path
          d={line}
          style={{ stroke: cssVar, strokeWidth: 1.5 }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
