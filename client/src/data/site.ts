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
 * The rule this file exists to protect: SHAZA is at the research and
 * prototype stage. Nothing here may claim indexed datasets, reached farmers,
 * or solved problems, and no statistic appears unless it can be verified.
 */

export const brand = {
  name: 'SHAZA',
  tagline: 'Rooted in Africa. Built for the future.',
  descriptor: 'African Agricultural Intelligence',
  stage: ['Research stage', 'Prototype in development'],
};

export const navigation = [
  { id: 'problem', label: 'The Problem', href: '#problem' },
  { id: 'data-map', label: 'Data Map', href: '#data-map' },
  { id: 'research', label: 'Research', href: '#research-question' },
  { id: 'methodology', label: 'Methodology', href: '#methodology' },
  { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
  { id: 'founder', label: 'Founder', href: '#founder' },
];

export const hero = {
  eyebrow: 'Rwanda first · Africa next',
  headline: ['Agricultural data exists.', 'Can it actually be used?'],
  supporting:
    "SHAZA is a technology company being built in Rwanda. Our first project maps the country's agricultural data: finding each dataset, testing whether it can really be used, and recording who holds it, what it covers and what is missing.",
  primaryCta: { label: 'Explore the Data Map', href: '#data-map' },
  secondaryCta: { label: 'Read the Research Question', href: '#research-question' },
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

export const whatIsShaza = {
  eyebrow: 'What is SHAZA',
  heading: "Know what's there before building on it.",
  lead: "Information about Africa's soil, weather, land, crops and climate risks exists, but it is scattered, hard to access, and difficult to turn into practical decisions. Before anyone can build good tools on top of it, someone needs to know what is actually there.",
  pillars: [
    {
      id: 'find',
      index: '01',
      name: 'Find',
      summary: 'Locate agricultural datasets held by governments, researchers, satellites and markets.',
      icon: 'discover' as const,
    },
    {
      id: 'test',
      index: '02',
      name: 'Test',
      summary: 'Try to use each one: how to access it, what format it comes in, what it covers.',
      icon: 'connect' as const,
    },
    {
      id: 'record',
      index: '03',
      name: 'Record',
      summary: 'Publish who holds it, how to get it, and what is missing.',
      icon: 'build' as const,
    },
  ],
};

export const product = {
  eyebrow: 'First product',
  heading: 'Introducing the SHAZA African Agricultural Data Map',
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
  lead: "SHAZA doesn't only ask whether a dataset exists. We ask whether it can actually be used.",
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
  eyebrow: 'Global research · planned',
  heading: 'Learning globally. Building locally.',
  lead: "Agricultural innovation doesn't belong to one country. These are questions we want to study next: how successful approaches elsewhere work, and whether their principles could be adapted to African environments.",
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
    "The aim is not to copy solutions. It is to understand what makes them work, and whether those principles translate to African contexts.",
};

export const pilot = {
  eyebrow: 'Pilot',
  heading: 'Starting in Rwanda. Building for Africa.',
  lead: 'Rwanda is our initial research environment. We are beginning here to understand the agricultural data landscape deeply before expanding the SHAZA framework to other African countries.',
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
  eyebrow: 'Who SHAZA is for',
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
        'Eventually access decision-support technologies built on the SHAZA intelligence layer.',
      future: true,
    },
  ] satisfies Audience[],
  futureLabel: 'Future development',
};

// Typed up front so optional fields like `items` stay on the type even when
// no stage currently uses them.
const roadmapStages: RoadmapStage[] = [
  {
    id: 'data-map',
    title: 'Data Map',
    summary: "Find, test and record Rwanda's agricultural datasets.",
    status: 'building',
  },
  {
    id: 'geospatial',
    title: 'Geospatial & Climate Tools',
    summary: 'Build maps and climate-risk tools on the datasets that hold up.',
    status: 'research',
  },
  {
    id: 'decision-support',
    title: 'AI Decision Support',
    summary: 'AI that supports agricultural decisions, built only on data we have tested.',
    status: 'future',
  },
];

export const roadmap = {
  eyebrow: 'Roadmap',
  heading: "Where we're going.",
  lead: 'Each stage depends on the one above it. Only the first is being built today.',
  stages: roadmapStages,
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
    { id: 'map', label: 'Data Map', kind: 'shaza' },
    { id: 'intelligence', label: 'Data Intelligence', kind: 'shaza' },
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

export const founder = {
  eyebrow: 'Why SHAZA',
  heading: 'A note from the founder',
  paragraphs: [
    'I am an African technology enthusiast passionate about using science and technology to solve real problems affecting our continent.',
    'I started SHAZA from a desire to understand how data, artificial intelligence, and local research can help address Africa’s agricultural and climate challenges, particularly the issues surrounding food security.',
    'I believe Africa should not only benefit from technological innovation but also play a leading role in building it, grounded in our own realities, knowledge, and needs. Through SHAZA, I hope to contribute to a future where African ideas become meaningful technologies that make a lasting difference.',
  ],
  signature: 'Keza Lysa Isimbi, Founder',
};

export const cta = {
  eyebrow: 'Join us',
  heading: "Help us map Rwanda's agricultural data.",
  lead: 'Join the research list for short notes as we test each dataset: what we found, what worked and what is missing. If you hold agricultural data or know where it lives, reply to any note and tell us.',
  primaryCta: { label: 'Join the Research', href: '#signup' },
  secondaryCta: { label: 'Explore the Data Map', href: '#data-map' },
  form: {
    label: 'Enter your email',
    placeholder: 'you@institution.org',
    submit: 'Join SHAZA',
    note: 'Occasional research notes. No marketing, and you can leave at any time.',
  },
};

export const footer = {
  tagline: 'Rooted in Africa. Built for the future.',
  origin:
    'The name SHAZA comes from a Kirundi cultural expression associated with the beginning of a traditional drumming rhythm.',
  columns: [
    {
      id: 'navigate',
      title: 'Navigate',
      links: [
        { id: 'research', label: 'Research', href: '#research-question' },
        { id: 'data-map', label: 'Data Map', href: '#data-map' },
        { id: 'methodology', label: 'Methodology', href: '#methodology' },
        { id: 'notes', label: 'Research Notes', href: '#signup' },
        { id: 'about', label: 'About', href: '#what-is-shaza' },
        { id: 'founder', label: 'Founder', href: '#founder' },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      links: [
        { id: 'email', label: 'lysaisimbi7@gmail.com', href: 'mailto:lysaisimbi7@gmail.com' },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/keza-lysa-isimbi-97a7b5232/',
        },
      ],
    },
  ],
  legal: '© 2026 SHAZA',
};
