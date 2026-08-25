/**
 * Custom line illustrations. Every icon shares a 24×24 grid and a 1.3 stroke so
 * the set reads as one drawing system rather than a collection of clip-art.
 */

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
};

/** Machine intelligence — a small network resolving into one signal. */
function NeuralIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="4.5" cy="6" r="1.6" />
      <circle cx="4.5" cy="18" r="1.6" />
      <circle cx="12" cy="12" r="2.1" />
      <circle cx="19.5" cy="8" r="1.6" />
      <circle cx="19.5" cy="17" r="1.6" />
      <path d="M6 6.9 10.2 10.7M6 17.1l4.2-3.8M13.9 10.9l4-2.1M13.9 13.2l4 2.6" />
    </svg>
  );
}

/** Climate — an environmental cycle over a shifting baseline. */
function ClimateIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.5" r="3.2" />
      <path d="M12 2.6v1.4M12 13v1.4M18 8.5h-1.4M7.4 8.5H6M16.2 4.3l-1 1M8.8 12.7l-1 1M16.2 12.7l-1-1M8.8 4.3l-1-1" />
      <path d="M3 18.4c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
      <path d="M3 21.6c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" opacity="0.45" />
    </svg>
  );
}

/** Agriculture — cultivated rows read from above, with a growing point. */
function AgricultureIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V9.5" />
      <path d="M12 12.5C12 9.6 9.9 7.4 7 7.1c-.3 2.9 1.9 5.1 5 5.4Z" />
      <path d="M12 10.4c0-2.9 2.1-5.1 5-5.4.3 2.9-1.9 5.1-5 5.4Z" />
      <path d="M3.5 21h17" />
      <path d="M5.6 17.6h12.8M7.7 14.2h3M13.3 14.2h3" opacity="0.5" />
    </svg>
  );
}

/** Food systems — separate decisions held inside one connected structure. */
function SystemsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.7 20 7v10l-8 4.3L4 17V7Z" />
      <path d="M12 8.2 16.4 10.5v4.6L12 17.4 7.6 15.1v-4.6Z" opacity="0.55" />
      <path d="M12 2.7v5.5M20 7l-3.6 3.5M20 17l-3.6-1.9M12 21.3v-3.9M4 17l3.6-1.9M4 7l3.6 3.5" />
    </svg>
  );
}

const PILLAR_ICONS = {
  neural: NeuralIcon,
  climate: ClimateIcon,
  agriculture: AgricultureIcon,
  systems: SystemsIcon,
};

/** Resolves a pillar's `icon` key to its illustration. */
export function PillarIcon({ name, ...props }) {
  const Icon = PILLAR_ICONS[name] ?? NeuralIcon;
  return <Icon {...props} />;
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M4 12h15M13.2 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M7 17 17 7M8.4 7H17v8.6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} width={18} height={18} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}
