// Zentrale Icon-Bibliothek — app-weite Shared Icons.
// Alle Icons akzeptieren optionale width/height-Props.
// Alle Icons sind dekorativ (aria-hidden="true") — der umgebende Kontext
// trägt die semantische Bedeutung.

interface IconProps {
  width?: number;
  height?: number;
}

export function SearchIcon({
  width = 15,
  height = 15,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="6.5"
        cy="6.5"
        r="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 12l-2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BellIcon({
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 14a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 12V8a4.5 4.5 0 1 1 9 0v4l1.5.75V13H3v-.25L4.5 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({
  width = 15,
  height = 15,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpIcon({
  width = 13,
  height = 13,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 10.5V2.5M2.5 6.5l4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDownIcon({
  width = 13,
  height = 13,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 2.5v8M2.5 6.5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({
  width = 20,
  height = 20,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="4"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 8h16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 2v3M14 2v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CalendarSmallIcon({
  width = 12,
  height = 12,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="2"
        width="10"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M1 5h10"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M4 1v2M8 1v2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon({
  width = 20,
  height = 20,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 10l2.5 2.5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({
  width = 20,
  height = 20,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="5"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 7l8 5 8-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OverviewIcon({
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
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

export function ProjectsIcon({
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
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

export function ChevronDownIcon({
  width = 14,
  height = 14,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
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

export function ExternalLinkIcon({
  width = 11,
  height = 11,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
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

export function MenuIcon({
  width = 20,
  height = 20,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
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

export function XIcon({
  width = 16,
  height = 16,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
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
  );
}

export function UpdateIcon({
  width = 15,
  height = 15,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7.5 4.5v3l2 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonIcon({
  width = 15,
  height = 15,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="7.5"
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M2 13.5c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TaskIcon({
  width = 15,
  height = 15,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="2"
        width="12"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M4.5 7.5h6M4.5 5h3M4.5 10h4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
