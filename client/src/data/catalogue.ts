import type { DataDomain, DatasetRecord } from '@/types';

/** The seven domains the Data Map organises agricultural information into. */
export const DATA_DOMAINS: DataDomain[] = [
  {
    id: 'climate',
    index: '01',
    name: 'Climate',
    summary: 'Rainfall, temperature, drought, weather and climate projections.',
    examples: ['Rainfall', 'Temperature', 'Drought indices', 'Projections'],
    icon: 'climate',
  },
  {
    id: 'soil',
    index: '02',
    name: 'Soil',
    summary: 'Soil properties, fertility, moisture, erosion and land information.',
    examples: ['Properties', 'Fertility', 'Moisture', 'Erosion'],
    icon: 'soil',
  },
  {
    id: 'crops',
    index: '03',
    name: 'Crops & Yield',
    summary: 'Crop production, yields, varieties, trials and growing conditions.',
    examples: ['Production', 'Yields', 'Varieties', 'Field trials'],
    icon: 'crops',
  },
  {
    id: 'earth-observation',
    index: '04',
    name: 'Earth Observation',
    summary: 'Satellite imagery, vegetation, land cover and environmental indicators.',
    examples: ['Imagery', 'Vegetation indices', 'Land cover', 'Indicators'],
    icon: 'satellite',
  },
  {
    id: 'water',
    index: '05',
    name: 'Water',
    summary: 'Irrigation, water availability and agricultural water information.',
    examples: ['Irrigation', 'Availability', 'Withdrawals', 'Basins'],
    icon: 'water',
  },
  {
    id: 'markets',
    index: '06',
    name: 'Markets',
    summary: 'Prices, supply, demand and food-system information.',
    examples: ['Prices', 'Supply', 'Demand', 'Trade flows'],
    icon: 'markets',
  },
  {
    id: 'research',
    index: '07',
    name: 'Research',
    summary: 'Agricultural studies, reports, trials and scientific knowledge.',
    examples: ['Studies', 'Reports', 'Trials', 'Publications'],
    icon: 'research',
  },
];

/**
 * Example catalogue entries.
 *
 * Every field is ILLUSTRATIVE. They exist to show the shape of a Data Map
 * record — what a researcher would want to know before trusting a dataset —
 * and the UI labels them as such wherever they appear.
 */
export const EXAMPLE_RECORDS: DatasetRecord[] = [
  {
    id: 'example-rw-rainfall',
    country: 'Rwanda',
    title: 'Rainfall',
    domain: 'climate',
    coverageYears: [1981, 2025],
    resolution: '5 km',
    access: 'Open',
    formats: ['API', 'CSV'],
    quality: 'HIGH COVERAGE',
    qualityLevel: 'strong',
    provenance: 'illustrative',
  },
  {
    id: 'example-rw-yield',
    country: 'Rwanda',
    title: 'Crop Yield',
    domain: 'crops',
    coverageYears: [2000, 2024],
    resolution: 'District',
    access: 'Restricted',
    formats: ['PDF', 'XLSX'],
    quality: 'MODERATE',
    qualityLevel: 'limited',
    provenance: 'illustrative',
  },
];

/** The dimensions a record is assessed on, shown as the panel's field list. */
export const RECORD_FIELDS = [
  { id: 'coverage', label: 'Coverage' },
  { id: 'resolution', label: 'Geographic resolution' },
  { id: 'access', label: 'Access' },
  { id: 'format', label: 'Format' },
] as const;
