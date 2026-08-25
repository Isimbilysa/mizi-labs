/**
 * Single source of truth for every word on the page.
 * Sections import from here so copy edits never require touching layout code.
 */

export const brand = {
  name: 'MIZI Labs',
  tagline: 'Rooted in Africa. Built for the future.',
  focus: ['AI', 'Agriculture', 'Climate', 'Food Systems'],
  established: 2026,
};

export const navigation = [
  { id: 'approach', label: 'About', href: '#approach' },
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'ecosystem', label: 'Technology', href: '#ecosystem' },
  { id: 'vision', label: 'Vision', href: '#vision' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'MIZI Labs',
  headline: ['Intelligence for', "Africa's food future."],
  supporting:
    'We build AI-powered technologies for more resilient agriculture, climate adaptation, and food systems across Africa.',
  primaryCta: { label: 'Explore our work', href: '#ecosystem' },
  secondaryCta: { label: 'Our vision', href: '#vision' },
  signature: 'Rooted in Africa. Built for the future.',
  markers: [
    { id: 'regions', label: 'Regional environments', value: '16' },
    { id: 'domains', label: 'Research domains', value: '09' },
    { id: 'tracks', label: 'Technology tracks', value: '06' },
  ],
};

export const problem = {
  eyebrow: 'The context',
  heading: "Africa's food systems are entering a new era.",
  lead: 'Across the continent, agriculture is being reshaped at once by climate, data, and demand. The systems that produced yesterday’s harvests were not designed for the conditions of the next fifty years — and that makes this a moment of construction, not decline.',
  pressures: [
    {
      id: 'climate',
      label: 'Climate variability',
      body: 'Seasons are shifting. Rainfall patterns that guided planting decisions for generations are becoming harder to predict.',
    },
    {
      id: 'water',
      label: 'Water availability',
      body: 'Water is the limiting factor across much of the continent, yet it remains one of the least measured agricultural resources.',
    },
    {
      id: 'productivity',
      label: 'Crop productivity',
      body: 'Yield gaps persist not because knowledge is missing, but because knowledge rarely reaches the decision at the right moment.',
    },
    {
      id: 'data',
      label: 'Fragmented data',
      body: 'Agricultural, environmental, and market data sit in disconnected systems, so the full picture is almost never visible at once.',
    },
    {
      id: 'intelligence',
      label: 'Access to intelligence',
      body: 'Advanced agricultural intelligence exists — but is rarely calibrated for African crops, soils, seasons, and farming realities.',
    },
    {
      id: 'security',
      label: 'Food security',
      body: 'Demand is rising faster than productivity, placing steady structural pressure on food systems across the continent.',
    },
  ],
  closing: [
    'The question is not whether Africa will need better technology.',
    'The question is whether that technology will be built for Africa.',
  ],
};

export const approach = {
  eyebrow: 'Our approach',
  heading: "We don't just apply technology. We build it for the environment it serves.",
  lead: 'Most agricultural intelligence in use today was trained on other continents — other soils, other seasons, other farm sizes. MIZI Labs starts from African conditions and builds outward: models grounded in local data, systems designed for real infrastructure, and research shaped by the environments it is meant to serve.',
  pillars: [
    {
      id: 'ai',
      icon: 'neural',
      title: 'AI',
      body: 'Machine intelligence that turns complex agricultural and environmental data into useful insights.',
    },
    {
      id: 'climate',
      icon: 'climate',
      title: 'Climate',
      body: 'Technology that helps understand changing environmental conditions and build resilience.',
    },
    {
      id: 'agriculture',
      icon: 'agriculture',
      title: 'Agriculture',
      body: 'Intelligent systems designed around real agricultural challenges across Africa.',
    },
    {
      id: 'food-systems',
      icon: 'systems',
      title: 'Food Systems',
      body: 'Technology that connects decisions across production, resources, and the wider food ecosystem.',
    },
  ],
};

export const ecosystem = {
  eyebrow: 'What we are building',
  heading: 'From intelligence to infrastructure.',
  lead: 'The MIZI Labs ecosystem is organised as a set of connected technology and research tracks. Together they describe the direction of our work — an intelligence layer for African agriculture, built one system at a time.',
  disclaimer:
    'These tracks represent the MIZI Labs technology ecosystem and research direction. They describe where our engineering and research are heading, not a catalogue of commercially available products.',
  tracks: [
    {
      id: 'climate',
      index: '01',
      name: 'MIZI Climate',
      domain: 'Climate intelligence',
      body: 'Climate intelligence designed to help agricultural systems anticipate environmental change.',
      signals: ['Seasonal forecasting', 'Risk modelling', 'Adaptation planning'],
    },
    {
      id: 'crop',
      index: '02',
      name: 'MIZI Crop',
      domain: 'Agricultural AI',
      body: 'AI-driven agricultural intelligence focused on crop health, productivity, and decision-making.',
      signals: ['Crop health', 'Yield modelling', 'Decision support'],
    },
    {
      id: 'vision',
      index: '03',
      name: 'MIZI Vision',
      domain: 'Computer vision',
      body: 'Computer vision systems for understanding agricultural environments.',
      signals: ['Field imaging', 'Remote sensing', 'Detection models'],
    },
    {
      id: 'water',
      index: '04',
      name: 'MIZI Water',
      domain: 'Resource intelligence',
      body: 'Intelligent approaches to water monitoring, prediction, and agricultural resource management.',
      signals: ['Water monitoring', 'Demand prediction', 'Resource allocation'],
    },
    {
      id: 'research',
      index: '05',
      name: 'MIZI Research',
      domain: 'Open research',
      body: 'An open-ended research layer exploring new applications of AI, robotics, data, and computational science.',
      signals: ['Applied science', 'Experimentation', 'Publication'],
    },
    {
      id: 'robotics',
      index: '06',
      name: 'MIZI Robotics',
      domain: 'Autonomous systems',
      body: 'Intelligent machines designed to support future agricultural systems.',
      signals: ['Field autonomy', 'Sensing hardware', 'Precision systems'],
    },
  ],
};

export const africa = {
  eyebrow: 'Africa as the laboratory',
  heading: 'Built for Africa. Designed to scale beyond borders.',
  lead: 'Africa is not a single agricultural environment. Its climates, ecosystems, crops, farming systems, and communities are deeply diverse.',
  body: 'We treat the continent as a network of distinct environments rather than one market. A model calibrated for the Sahel does not describe the highlands; a water system built for a river basin does not transfer unchanged to a coastal plain. MIZI Labs builds localised intelligence first, then designs the architecture so that what is learned in one environment can strengthen the next — across regions, and eventually beyond the continent.',
  notes: [
    {
      id: 'zones',
      label: 'Agro-ecological diversity',
      body: 'Distinct climate and soil zones, each with its own agricultural logic.',
    },
    {
      id: 'local',
      label: 'Localised intelligence',
      body: 'Models calibrated to the environment they operate in, not imported wholesale.',
    },
    {
      id: 'scale',
      label: 'Shared architecture',
      body: 'One technical foundation, adapted region by region as the network grows.',
    },
  ],
};

export const research = {
  eyebrow: 'Research + technology',
  heading: 'Where research becomes infrastructure.',
  lead: 'MIZI Labs is a research-driven organisation. Our work moves along a single path — from scientific questions, to experimental systems, to technology that other people can build on.',
  domains: [
    {
      id: 'ai',
      code: 'R-01',
      name: 'Artificial Intelligence',
      note: 'Reasoning systems for agricultural and environmental decisions.',
    },
    {
      id: 'ml',
      code: 'R-02',
      name: 'Machine Learning',
      note: 'Models trained on African agricultural and climate data.',
    },
    {
      id: 'cv',
      code: 'R-03',
      name: 'Computer Vision',
      note: 'Visual understanding of crops, fields, and landscapes.',
    },
    {
      id: 'climate',
      code: 'R-04',
      name: 'Climate Intelligence',
      note: 'Interpreting environmental change at agricultural scale.',
    },
    {
      id: 'agdata',
      code: 'R-05',
      name: 'Agricultural Data',
      note: 'Structuring fragmented data into usable foundations.',
    },
    {
      id: 'robotics',
      code: 'R-06',
      name: 'Robotics',
      note: 'Machines that sense and act in agricultural environments.',
    },
    {
      id: 'rs',
      code: 'R-07',
      name: 'Remote Sensing',
      note: 'Satellite and aerial observation of land and water.',
    },
    {
      id: 'predictive',
      code: 'R-08',
      name: 'Predictive Systems',
      note: 'Anticipating conditions instead of reporting them late.',
    },
    {
      id: 'env',
      code: 'R-09',
      name: 'Environmental Intelligence',
      note: 'Modelling the systems agriculture depends on.',
    },
  ],
  pipeline: [
    {
      id: 'question',
      step: '01',
      label: 'Scientific question',
      body: 'Grounded in a real constraint observed in African agriculture.',
    },
    {
      id: 'data',
      step: '02',
      label: 'Data & experimentation',
      body: 'Field, sensor, and satellite data assembled into a usable signal.',
    },
    {
      id: 'system',
      step: '03',
      label: 'Working system',
      body: 'Models engineered into systems that hold up outside the lab.',
    },
    {
      id: 'infrastructure',
      step: '04',
      label: 'Shared infrastructure',
      body: 'Technology others can build on, region after region.',
    },
  ],
};

export const philosophy = {
  eyebrow: 'The MIZI philosophy',
  statement: [
    'Africa should not only consume the technologies of the future.',
    'Africa should build them.',
  ],
  supporting:
    'MIZI Labs exists to contribute to that future — through research, experimentation, engineering, and technologies built around African realities.',
};

export const vision = {
  eyebrow: 'Vision',
  heading: 'A more intelligent food system is possible.',
  lead: 'We are working toward an Africa where farmers, researchers, businesses, governments, and food systems can make better decisions using accessible, intelligent technologies.',
  body: 'The goal is not simply to build individual agricultural tools. The goal is to develop an intelligent technological layer for African food systems — a shared foundation that many organisations can build on, in many countries, over many decades.',
  horizons: [
    {
      id: 'near',
      period: 'Near term',
      title: 'Build the instruments',
      body: 'Research systems, models, and data foundations that make African agricultural environments measurable.',
    },
    {
      id: 'mid',
      period: 'Mid term',
      title: 'Connect the signals',
      body: 'Link climate, crop, water, and vision intelligence so decisions can be made with the full picture in view.',
    },
    {
      id: 'long',
      period: 'Long term',
      title: 'An intelligence layer',
      body: 'A shared technological foundation for African food systems — open enough for others to build on.',
    },
  ],
  statement: 'An intelligent technological layer for African food systems.',
};

export const cta = {
  eyebrow: 'Build with us',
  heading: 'The future needs builders.',
  lead: 'We are building at the intersection of AI, agriculture, climate, and African innovation.',
  actions: [
    {
      id: 'partner',
      label: 'Partner with MIZI',
      topic: 'partnership',
      note: 'Institutions, industry, and government.',
    },
    {
      id: 'research',
      label: 'Explore research',
      topic: 'research',
      note: 'Researchers, universities, and labs.',
    },
    { id: 'contact', label: 'Get in touch', topic: 'general', note: 'Everything else.' },
  ],
  channels: [
    { id: 'general', label: 'General', value: 'hello@mizilabs.africa' },
    { id: 'research', label: 'Research', value: 'research@mizilabs.africa' },
    { id: 'partnerships', label: 'Partnerships', value: 'partners@mizilabs.africa' },
  ],
};

export const footer = {
  tagline: 'Rooted in Africa. Built for the future.',
  navigation: [
    { id: 'about', label: 'About', href: '#approach' },
    { id: 'research', label: 'Research', href: '#research' },
    { id: 'technology', label: 'Technology', href: '#ecosystem' },
    { id: 'vision', label: 'Vision', href: '#vision' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  social: [
    { id: 'linkedin', label: 'LinkedIn', href: '#', handle: 'in/mizilabs' },
    { id: 'x', label: 'X', href: '#', handle: '@mizilabs' },
    { id: 'github', label: 'GitHub', href: '#', handle: 'mizi-labs' },
  ],
  legal: '© 2026 MIZI Labs. All rights reserved.',
};
