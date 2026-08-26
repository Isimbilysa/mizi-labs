import type { SVGProps } from 'react';

import type { IconName } from '@/types';

/**
 * Custom line illustrations. Every icon shares a 24×24 grid and a 1.3 stroke so
 * the set reads as one drawing system rather than a collection of clip-art.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
} as const;

/** Climate — an environmental cycle over a shifting baseline. */
function ClimateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.5" r="3.2" />
      <path d="M12 2.6v1.4M12 13v1.4M18 8.5h-1.4M7.4 8.5H6M16.2 4.3l-1 1M8.8 12.7l-1 1M16.2 12.7l-1-1M8.8 4.3l-1-1" />
      <path d="M3 18.4c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M3 21.6c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" opacity="0.45" />
    </svg>
  );
}

/** Soil — a profile cut through horizons, with a probe reading depth. */
function SoilIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7.5h18" />
      <path d="M3 12.4h18" opacity="0.6" />
      <path d="M3 17.3h18" opacity="0.4" />
      <path d="M3.4 4.5h17.2a.9.9 0 0 1 .9.9v13.2a.9.9 0 0 1-.9.9H3.4a.9.9 0 0 1-.9-.9V5.4a.9.9 0 0 1 .9-.9Z" />
      <path d="M15.5 4.6v15.9" opacity="0.55" />
      <circle cx="15.5" cy="12.4" r="1.5" />
    </svg>
  );
}

/** Crops & yield — a measured plant beside its own growth curve. */
function CropsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 21V10.6" />
      <path d="M7 13.4c0-2.6-1.9-4.6-4.5-4.9-.3 2.6 1.7 4.6 4.5 4.9Z" />
      <path d="M7 11.5c0-2.6 1.9-4.6 4.5-4.9.3 2.6-1.7 4.6-4.5 4.9Z" />
      <path d="M2.5 21h19" />
      <path d="M13 17.5 15.8 14l2.3 1.7L21.5 11" opacity="0.75" />
      <circle cx="21.5" cy="11" r="1.1" />
    </svg>
  );
}

/** Earth observation — an orbital pass reading the ground beneath it. */
function SatelliteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.6 14.5 5 12 7.4 9.5 5Z" />
      <path d="M6.6 5h2.4M15 5h2.4" />
      <path d="M12 7.6v1.8" />
      <path d="m12 9.4-5.6 10.1M12 9.4l5.6 10.1" opacity="0.55" />
      <path d="M9.3 15.4h5.4" opacity="0.4" />
      <path d="M3.4 20.6h17.2" />
    </svg>
  );
}

/** Water — a drop over a managed channel. */
function WaterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8c2.6 3.2 4.2 5.6 4.2 7.6a4.2 4.2 0 1 1-8.4 0c0-2 1.6-4.4 4.2-7.6Z" />
      <path d="M3 17.4c2-1.4 4-1.4 6 0s4 1.4 6 0 4-1.4 6 0" opacity="0.7" />
      <path d="M3 21c2-1.4 4-1.4 6 0s4 1.4 6 0 4-1.4 6 0" opacity="0.4" />
    </svg>
  );
}

/** Markets — a price series with its exchange points. */
function MarketsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.4 3.6v15.5a1.3 1.3 0 0 0 1.3 1.3h15.9" />
      <path d="M7.4 15.6V11M11.6 15.6V7.4M15.8 15.6v-6.2M20 15.6V5.2" />
      <path d="M6.2 8.4 11 4.2l3.6 2.6 5.4-3.2" opacity="0.5" />
    </svg>
  );
}

/** Research — a document with a marked finding. */
function ResearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2.8h8.2L19 7.6v13.6H6Z" />
      <path d="M13.9 2.9v4.8h4.8" opacity="0.7" />
      <path d="M8.8 12.2h4.4M8.8 15.4h6" opacity="0.6" />
      <circle cx="15.6" cy="16.4" r="3" />
      <path d="m17.9 18.7 2.4 2.4" />
    </svg>
  );
}

/** Discover — a search across a field of records. */
function DiscoverIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="m15.6 15.6 4.6 4.6" />
      <path d="M7.6 10.4h2.2M12 10.4h2.2M7.6 13.2h6.6M7.6 7.6h6.6" opacity="0.6" />
    </svg>
  );
}

/** Connect — separate records joined into one graph. */
function ConnectIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5" cy="6" r="2.1" />
      <circle cx="19" cy="6" r="2.1" />
      <circle cx="5" cy="18" r="2.1" />
      <circle cx="19" cy="18" r="2.1" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M6.7 7.5 10.2 10.4M17.3 7.5 13.8 10.4M6.7 16.5l3.5-2.9M17.3 16.5l-3.5-2.9" />
    </svg>
  );
}

/** Build — layers assembled into a structure. */
function BuildIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 21 7.4 12 12 3 7.4Z" />
      <path d="m3 12 9 4.6 9-4.6" opacity="0.7" />
      <path d="m3 16.6 9 4.6 9-4.6" opacity="0.45" />
    </svg>
  );
}

const ICONS: Record<IconName, (props: IconProps) => JSX.Element> = {
  climate: ClimateIcon,
  soil: SoilIcon,
  crops: CropsIcon,
  satellite: SatelliteIcon,
  water: WaterIcon,
  markets: MarketsIcon,
  research: ResearchIcon,
  discover: DiscoverIcon,
  connect: ConnectIcon,
  build: BuildIcon,
};

/** Resolves a domain's `icon` key to its illustration. */
export function DomainIcon({ name, ...props }: IconProps & { name: IconName }) {
  const Icon = ICONS[name] ?? ResearchIcon;
  return <Icon {...props} />;
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M4 12h15M13.2 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M12 4v15M6 12.8l6 6 6-6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M7 17 17 7M8.4 7H17v8.6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}
