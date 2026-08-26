import type {
  Audience,
  GlobalCase,
  MethodologyStep,
  PipelineStage,
  Principle,
  RoadmapStage,
} from '@/types';

/**
 * Every word on the page.
 *
 * The rule this file exists to protect: MIZI Labs is at the research and
 * prototype stage. Nothing here may claim indexed datasets, reached farmers,
 * or solved problems, and no statistic appears unless it can be verified.
 */

export const brand = {
  name: 'MIZI Labs',
  tagline: 'Rooted in Africa. Built for the future.',
  descriptor: 'African Agricultural Intelligence',
  stage: ['Research stage', 'Prototype in development'],
};

export const navigation = [
  { id: 'problem', label: 'The Problem', href: '#problem' },
  { id: 'data-map', label: 'Data Map', href: '#data-map' },
  { id: 'domains', label: 'Domains', href: '#domains' },
  { id: 'methodology', label: 'Methodology', href: '#methodology' },
  { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
];

export const hero = {
  eyebrow: 'MIZI Labs — African Agricultural Intelligence',
  headline: ["Mapping Africa's", 'Agricultural Intelligence.'],
  supporting:
    "MIZI is building the data foundation for Africa's resilient food future: discovering, connecting and understanding the agricultural data needed to build better climate and food-system technologies.",
  primaryCta: { label: 'Explore the Data Map', href: '#data-map' },
  secondaryCta: { label: 'Read Our Research', href: '#research-question' },
  mapCaption: 'Interactive data map — prototype',
};

export const problem = {
  eyebrow: 'The problem',
  heading: "Africa has agricultural data. But it isn't always connected.",
  lead: 'Agricultural information across Africa is distributed across governments, research institutions, universities, satellites, field studies, climate databases, soil surveys and market systems.',
  emphasis: "The challenge isn't simply collecting more data.",
  questionsLabel: 'The challenge is understanding',
  questions: [
    'what exists',
    'where it exists',
    'who provides it',
    'how accessible it is',
    'how reliable it is',
    'how geographically representative it is',
    'how it can be connected',
    'what important information is still missing',
  ],
  sources: ['Climate', 'Soil', 'Crops', 'Yield', 'Satellite', 'Water', 'Markets', 'Research'],
};

export const whatIsMizi = {
  eyebrow: 'What is MIZI',
  heading: "We're building the intelligence layer.",
  lead: "MIZI is a research and technology initiative focused on making Africa's agricultural data more discoverable, understandable and usable for research, innovation and eventually AI-powered decision systems.",
  pillars: [
    {
      id: 'discover',
      index: '01',
      name: 'Discover',
      summary: 'Find agricultural datasets across Africa.',
      icon: 'discover' as const,
    },
    {
      id: 'connect',
      index: '02',
      name: 'Connect',
      summary: 'Understand how different datasets relate to one another.',
      icon: 'connect' as const,
    },
    {
      id: 'build',
      index: '03',
      name: 'Build',
      summary: 'Use better data to develop the next generation of agricultural intelligence.',
      icon: 'build' as const,
    },
  ],
};

export const product = {
  eyebrow: 'First product',
  heading: 'Introducing the MIZI African Agricultural Data Map',
  subheading: "An evolving map of Africa's agricultural data.",
  description:
    'Explore what agricultural information exists across African countries, and identify where the data is strong, fragmented, limited or missing.',
  caption: 'Interactive data map — prototype',
  disclaimer:
    'Regions are approximated from country centroids for prototyping and are not official boundaries. Coverage values are illustrative placeholders, not findings.',
  drilldown: ['Africa', 'Country', 'Region', 'Data category', 'Dataset'],
  emptyState: 'Select a country to preview how its data inventory would be summarised.',
  pendingLabel: 'Data inventory in progress',
};

export const domains = {
  eyebrow: 'Data domains',
  heading: 'Explore Africa through its agricultural data.',
  lead: 'The Data Map organises agricultural information into seven domains. Each one answers a different question about a growing season, and each is catalogued separately per country.',
};

export const quality = {
  eyebrow: 'Data quality',
  heading: 'Not all data is created equal.',
  lead: "MIZI doesn't only ask whether a dataset exists. We ask whether it can actually be used.",
  exampleLabel: 'Example interface — data shown for illustration',
  criteria: [
    'Coverage in time',
    'Geographic resolution',
    'Access conditions',
    'Machine readability',
  ],
};

export const gaps = {
  eyebrow: 'Data gaps',
  heading: "Where are Africa's agricultural blind spots?",
  lead: "Understanding what we don't know can be just as important as understanding what we do.",
  caption: 'Illustrative visualisation — research in progress',
  legend: [
    { id: 'strong', label: 'Strong data availability' },
    { id: 'limited', label: 'Limited data' },
    { id: 'gap', label: 'Significant gaps' },
    { id: 'unassessed', label: 'Not yet assessed' },
  ],
  kinds: [
    { id: 'geographic', name: 'Geographic gaps', summary: 'Regions with little or no usable coverage.' },
    { id: 'temporal', name: 'Temporal gaps', summary: 'Records that stop, restart, or skip seasons.' },
    { id: 'crop', name: 'Crop-specific gaps', summary: 'Staples and indigenous varieties that go unmeasured.' },
    { id: 'variable', name: 'Variable gaps', summary: 'Measurements nobody collects at useful resolution.' },
    { id: 'access', name: 'Accessibility gaps', summary: 'Data that exists but cannot practically be obtained.' },
  ],
};

export const methodology = {
  eyebrow: 'Methodology',
  heading: "We don't build technology first. We research first.",
  lead: 'Each step has to hold before the next one starts. It is a slower route to a product, and the only one that produces a product worth trusting.',
  steps: [
    { id: 'map', index: '01', title: 'Map', summary: 'Understand what data exists.' },
    { id: 'evaluate', index: '02', title: 'Evaluate', summary: 'Assess quality, accessibility and limitations.' },
    { id: 'connect', index: '03', title: 'Connect', summary: 'Explore relationships between agricultural datasets.' },
    { id: 'research', index: '04', title: 'Research', summary: 'Identify important unanswered questions.' },
    { id: 'build', index: '05', title: 'Build', summary: 'Develop technology around validated problems.' },
  ] satisfies MethodologyStep[],
};

export const globalResearch = {
  eyebrow: 'Global research',
  heading: 'Learning globally. Building locally.',
  lead: "Agricultural innovation doesn't belong to one country. MIZI studies successful approaches around the world and investigates how their underlying principles can be adapted to different African environments.",
  cases: [
    {
      id: 'vietnam',
      country: 'Vietnam',
      focus: 'Water and rice systems',
      question: 'What makes coordinated water management work at national scale?',
    },
    {
      id: 'israel',
      country: 'Israel',
      focus: 'Precision water management',
      question: 'Which parts of precision irrigation depend on infrastructure, and which on data?',
    },
    {
      id: 'netherlands',
      country: 'Netherlands',
      focus: 'Controlled-environment agriculture',
      question: 'How much of that yield advantage comes from measurement rather than glass?',
    },
    {
      id: 'india',
      country: 'India',
      focus: 'Smallholder agricultural technology',
      question: 'What reaches a smallholder, and what stops at the demonstration plot?',
    },
    {
      id: 'south-africa',
      country: 'South Africa',
      focus: 'Earth observation and agricultural intelligence',
      question: 'How is satellite data turned into something an agronomist actually uses?',
    },
  ] satisfies GlobalCase[],
  closing:
    "We don't copy solutions. We study what makes them work, and whether those principles can translate to African contexts.",
};

export const pilot = {
  eyebrow: 'Pilot',
  heading: 'Starting in Rwanda. Building for Africa.',
  lead: 'Rwanda is our initial research environment. We are beginning here to understand the agricultural data landscape deeply before expanding the MIZI framework to other African countries.',
  scales: [
    {
      id: 'rwanda',
      label: 'Rwanda',
      summary: 'Depth first. One country studied properly, domain by domain.',
      status: 'Currently researching',
    },
    {
      id: 'east-africa',
      label: 'East Africa',
      summary: 'Comparison. Does the framework survive contact with a neighbour?',
      status: 'Next',
    },
    {
      id: 'africa',
      label: 'Africa',
      summary: 'Scale. The same method applied continent-wide.',
      status: 'Long term',
    },
  ],
};

export const researchQuestion = {
  eyebrow: 'Research',
  heading: 'Our first research question',
  quotation:
    'How available, accessible, interoperable and geographically representative are agricultural datasets across Africa?',
  supporting:
    "We are beginning by investigating Rwanda's agricultural data landscape and will progressively compare it with other African agricultural systems.",
  meta: [
    { id: 'status', label: 'Status', value: 'Open — currently researching' },
    { id: 'scope', label: 'Initial scope', value: 'Rwanda, seven data domains' },
    { id: 'output', label: 'Intended output', value: 'Public data inventory & gap analysis' },
  ],
};

export const audiences = {
  eyebrow: 'Who MIZI is for',
  heading: "Built for the people building Africa's food future.",
  items: [
    {
      id: 'researchers',
      name: 'Researchers',
      summary: 'Discover datasets and identify research gaps.',
    },
    {
      id: 'universities',
      name: 'Universities & Students',
      summary: 'Find agricultural information for projects and research.',
    },
    {
      id: 'policymakers',
      name: 'Policymakers',
      summary: 'Understand agricultural information landscapes and data gaps.',
    },
    {
      id: 'innovators',
      name: 'Innovators',
      summary: 'Find the data needed to build agricultural technologies.',
    },
    {
      id: 'farmers',
      name: 'Farmers',
      summary:
        'Eventually access decision-support technologies built on the MIZI intelligence layer.',
      future: true,
    },
  ] satisfies Audience[],
  futureLabel: 'Future development',
};

export const roadmap = {
  eyebrow: 'Roadmap',
  heading: "Where we're going.",
  lead: 'Each stage depends on the one above it. Only the first is being built today.',
  stages: [
    {
      id: 'data-map',
      title: 'MIZI Data Map',
      summary: 'Our first product.',
      status: 'building',
    },
    {
      id: 'data-layer',
      title: 'Agricultural Data Layer',
      summary: 'Standardise and connect datasets.',
      status: 'future',
    },
    {
      id: 'climate',
      title: 'MIZI Climate',
      summary: 'Climate and agricultural intelligence.',
      status: 'research',
    },
    {
      id: 'ai',
      title: 'MIZI AI',
      summary: 'Machine learning and scenario analysis.',
      status: 'future',
    },
    {
      id: 'decision-support',
      title: 'Decision Support',
      summary: 'Tools for researchers, farmers, businesses and policymakers.',
      status: 'future',
    },
    {
      id: 'agtech',
      title: 'Agricultural Technology',
      summary: 'Potential future work in:',
      status: 'future',
      items: [
        'Computer vision',
        'Smart irrigation',
        'Robotics',
        'Remote sensing',
        'Precision agriculture',
      ],
    },
  ] satisfies RoadmapStage[],
  statusLabels: {
    building: 'Building',
    research: 'Research',
    future: 'Future',
  } as const,
};

export const vision = {
  eyebrow: 'Vision',
  heading: 'From data to intelligence.',
  lead: 'Every stage below depends on the one before it. The whole reason to start with a map is that nothing further along works without one.',
  pipeline: [
    { id: 'data', label: 'African Agricultural Data', kind: 'input' },
    { id: 'map', label: 'MIZI Data Map', kind: 'mizi' },
    { id: 'intelligence', label: 'Data Intelligence', kind: 'mizi' },
    { id: 'research', label: 'Research', kind: 'downstream' },
    { id: 'ai', label: 'AI / ML', kind: 'downstream' },
    { id: 'climate', label: 'Climate Intelligence', kind: 'downstream' },
    { id: 'decisions', label: 'Decision Support', kind: 'downstream' },
    { id: 'outcome', label: 'Resilient Food Systems', kind: 'outcome' },
  ] satisfies PipelineStage[],
};

export const principles = {
  eyebrow: 'Principles',
  heading: 'Rooted in Africa. Connected to the world.',
  items: [
    {
      id: 'african-first',
      name: 'African-first',
      summary:
        'Built around African agricultural realities rather than assuming one global model fits everyone.',
    },
    {
      id: 'research-driven',
      name: 'Research-driven',
      summary: 'Every product begins with understanding the problem, evidence and existing work.',
    },
    {
      id: 'open',
      name: 'Open where possible',
      summary:
        'Making agricultural information easier to discover, understand and responsibly reuse.',
    },
  ] satisfies Principle[],
};

export const cta = {
  eyebrow: 'Join us',
  heading: "Help us map Africa's agricultural intelligence.",
  lead: "We're starting with Rwanda and building outward.",
  primaryCta: { label: 'Join the Research', href: '#signup' },
  secondaryCta: { label: 'Explore MIZI', href: '#data-map' },
  form: {
    label: 'Enter your email',
    placeholder: 'you@institution.org',
    submit: 'Join MIZI',
    note: 'Occasional research notes. No marketing, and you can leave at any time.',
  },
};

export const footer = {
  tagline: 'Rooted in Africa. Built for the future.',
  columns: [
    {
      id: 'navigate',
      title: 'Navigate',
      links: [
        { id: 'research', label: 'Research', href: '#research-question' },
        { id: 'data-map', label: 'Data Map', href: '#data-map' },
        { id: 'methodology', label: 'Methodology', href: '#methodology' },
        { id: 'notes', label: 'Research Notes', href: '#signup' },
        { id: 'about', label: 'About', href: '#what-is-mizi' },
      ],
    },
    {
      id: 'explore',
      title: 'Explore',
      links: [
        { id: 'climate', label: 'Climate', href: '#domains' },
        { id: 'soil', label: 'Soil', href: '#domains' },
        { id: 'crops', label: 'Crops', href: '#domains' },
        { id: 'satellite', label: 'Satellite', href: '#domains' },
        { id: 'markets', label: 'Markets', href: '#domains' },
        { id: 'research', label: 'Research', href: '#domains' },
      ],
    },
    {
      id: 'connect',
      title: 'Connect',
      links: [
        { id: 'github', label: 'GitHub', href: '#' },
        { id: 'linkedin', label: 'LinkedIn', href: '#' },
        { id: 'contact', label: 'Contact', href: 'mailto:hello@mizilabs.africa' },
      ],
    },
  ],
  legal: '© 2026 MIZI Labs',
};
